## 命令

- 移除了对1.19.70版本以上的/clone、/execute、/fill、/setblock 和 /testforblock 命令中 "data" 字段的支持。例如：*`/setblock ~ ~ ~ minecraft:wool 1`* 现在需要写成 *`/setblock ~ ~ ~ minecraft:wool ["color":"orange"]`*
- 体积尺寸参数不再向下取整基准点坐标([MCPE-162237](https://bugs.mojang.com/browse/MCPE-162237))
- 现在通过体积尺寸（Volume）选择目标时，将选择所有碰撞箱（Hitbox）与指定范围相交的实体。该特性自1.19.70开始实现版本化
- 之前的行为在低于1.19.70的版本上可正常工作了
- 选择器的体积尺寸（Volume）参数现在支持浮点数值。([MCPE-163863](https://bugs.mojang.com/browse/MCPE-163863))

## 数据驱动

- 当格式版本为1.19.70以上时，方块置换中 "condition" 字段的属性值不是一个可用的Molang字符串会导致方块加载失败
- 当工作台组件使用方块名称作为工作台名称时，本地化键名不再需要添加 "tile."

## 脚本API

### `@minecraft/server-gametest@1.0.0-beta` 模块

- 更改了 `Test` 类

    - 添加了 `assertEntityInstancePresentInArea` 函数

      ```typescript
      assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void      
      ```

    - 更改了 `assertEntityPresent` 函数

        - 添加了 `searchDistance` 参数

### `@minecraft/server@1.1.0-beta` 模块

- 更改了 `BlockAreaSize `类

    - 更改了 `constructor` 函数
        - 更改了参数 `x` 的类型：由 `int32` 改为 `float`
            - 新签名： `x: number, `
            - 旧签名： `x: number, `
        - 更改了参数 `y` 的类型：由 `int32` 改为 `float`
            - 新签名： `y: number, `
            - 旧签名： `y: number, `
        - 更改了参数 `z` 的类型：由 `int32` 改为 `float`
            - 新签名： `z: number`
            - 旧签名： `z: number`

- 更改了 `ContainerSlot` 类

    - 移除了函数 `clearItem`
    - 移除了函数 `clearLore`

- 更改了 `Entity` 类

    - 添加了 `playAnimation` 函数

      ```typescript
      playAnimation(animationName: string, options?: PlayAnimationOptions): void      
      ```

- 更改了 `ItemStack` 类

    - 移除了 `data` 属性
    - 移除了 `clearLore` 函数
    - 更改了 `constructor` 函数
        - 更改了返回类型：由 `ItemStack` 改为 `ItemStack` （可抛出错误）
        - 更改了参数 `itemType` 的类型：由 `ItemType` 改为 `ItemType | string`
            - 新签名： `itemType: ItemType | string, `
            - 旧签名： `itemType: ItemType, `
        - 移除了参数 `data`

- 更改了类 `Player`

    - 添加了 `playAnimation` 函数

      ```typescript
      playAnimation(animationName: string, options?: PlayAnimationOptions): void      
      ```

- 添加了 `PlayAnimationOptions` 接口

  ```typescript
  export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    stopExpression?: string;
  }
  ```