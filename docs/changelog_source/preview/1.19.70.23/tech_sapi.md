
### **方块置换**

方块置换（BlockPermutation）重构了！每个方块置换对象现在都共享一个唯一的句柄，这样有着相同状态值的置换对象就可以使用全等符号（===）进行操作了。我们同样实现了包含：移除 `XBlockProperty` 类和直接返回属性值（`boolean | number | string`）或是属性值集合（`Record<string, boolean | number | string>`）在内的一些实用特性，使得与置换交互更加方便

- 添加方法 `matches(blockName: string, properties?: BlockProperties): boolean` 用于匹配与该方块置换有着相同指定状态的方块

- 添加方法 `withProperty(name: string, value: boolean | number | string): BlockPermutation;` 用于返回一个有着指定属性和属性值的新方块置换。如果提供的数据无法被解决为有效的方块置换，则会抛出错误

- 添加静态函数 `resolve(blockName: string, properties?: BlockProperties): BlockPermutation` 用于通过方块名称与方块状态获取一个方块置换。如果提供的数据无法被解决为有效的方块置换，则会抛出错误

- 更新 `getProperty` 和 `getAllProperties` 方法，现在他们会直接返回属性值而非将其封装到对象中。示例代码：

之前：

```typescript
const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
blockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone_brick';
blockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true; 
```

现在：

```typescript
const blockPermutation = BlockPermutation.resolve( 'minecraft:stone_slab', { stone_slab_type: 'stone_brick',  top_slot_bit: true});
```

### **方块属性**

添加新类来暴露 `BlockPropertyType`

### **方块属性类型**

添加新类来追踪有关方块属性的“定义性”的数据。你可以通过它来查找每个方块属性的有效值