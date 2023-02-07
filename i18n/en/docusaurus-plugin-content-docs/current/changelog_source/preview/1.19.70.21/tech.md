## **Commands**

- Removed support for field "data" in commands /clone, /execute, /fill, /setblock and /testforblock beyond version 1.19.70, eg. */setblock ~ ~ ~ minecraft:wool 1*will only have its equivalent */setblock ~ ~ ~ minecraft:wool ["color":"orange"]* supported
- Volume arguments no longer floor the selector's position ([MCPE-162237](https://bugs.mojang.com/browse/MCPE-162237))
- Selecting targets by volume will now select all entities whose hitbox collides with the volume box. This is versioned for 1.19.70 and later ([MCPE-162237](https://bugs.mojang.com/browse/MCPE-162237))
- Previous behavior works as expected on versions less than 1.19.70
- Volume arguments for selectors (dx, dy, dz) now support float values ([MCPE-163863](https://bugs.mojang.com/browse/MCPE-163863))

## **Data-driven**

- Crafting Table component no longer appends "tile." when defaulting to use block name for crafting table label
- In JSON formats 1.19.70 and later, blocks fail to load if the "condition" field in Block Permutations is not a valid Molang string

## **Script API**

### **Changed module `@minecraft/server-gametest@1.0.0-beta`**

- Changed class `Test`

    - Added function `assertEntityInstancePresentInArea`

      ```typescript
      assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void      
      ```

    - Changed function `assertEntityPresent`

        - Added argument `searchDistance`

### **Changed module `@minecraft/server@1.1.0-beta`**

- Changed class `BlockAreaSize`

    - Changed function `constructor`
        - Changed argument `x` type from `int32` to `float`
            - New Signature: `x: number, `
            - Old Signature: `x: number, `
        - Changed argument `y` type from `int32` to `float`
            - New Signature: `y: number, `
            - Old Signature: `y: number, `
        - Changed argument `z` type from `int32` to `float`
            - New Signature: `z: number`
            - Old Signature: `z: number`

- Changed class `ContainerSlot`

    - Removed function `clearItem`
    - Removed function `clearLore`

- Changed class `Entity`

    - Added function `playAnimation`

      ```typescript
      playAnimation(animationName: string, options?: PlayAnimationOptions): void      
      ```

- Changed class `ItemStack`

    - Removed property `data`
    - Removed function `clearLore`
    - Changed function `constructor`
        - Changed return type from `ItemStack` to `ItemStack` (throws exceptions)
        - Changed argument `itemType` type from `ItemType` to `ItemType | string`
            - New Signature: `itemType: ItemType | string, `
            - Old Signature: `itemType: ItemType, `
        - Removed argument `data`

- Changed class `Player`

    - Added function `playAnimation`

      ```typescript
      playAnimation(animationName: string, options?: PlayAnimationOptions): void      
      ```

- Added interface `PlayAnimationOptions`

  ```typescript
  export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    stopExpression?: string;
  }
  ```