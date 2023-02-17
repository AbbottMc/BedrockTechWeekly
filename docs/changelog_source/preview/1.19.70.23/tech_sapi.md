
### **BlockPermutation**

BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the *XBlockProperty* classes and now directly return properties *(**boolean | number | string**)* or a while collection of properties *(**Record<string, boolean | number | string>**)*.


- Added method *matches(blockName: string, properties?: BlockProperties): boolean* which is used to match a block with optional states against a BlockPermutation.
- Added method *withProperty(name: string, value: boolean | number | string): BlockPermutation;* which returns a new block permutation with a given property set to a specific value. Throws if the provided data cannot be resolved as a valid block permutation.
- Added *function* *static resolve(blockName: string, properties?: BlockProperties): BlockPermutation* which resolve a BlockPermutation from a block name and optional states. Throws if the provided data cannot be resolved as a valid block permutation.
- Updated methods *getProperty* and *getAllProperties* to return values directly instead of wrapped into class objects. Example code:

Before:

```typescript
const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
blockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone_brick';
blockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true; 
```

Now:

```typescript
const blockPermutation = BlockPermutation.resolve( 'minecraft:stone_slab', { stone_slab_type: 'stone_brick',  top_slot_bit: true});
```

### **BlockProperties**

Added new class to expose *BlockPropertyType*.

### **BlockPropertyType**

Added new class to track "definitional" data about block properties. This is how you can find which values are valid for each block property.