## **命令**

- `/summon` 命令不再导致一些实体以一定角度生成

## **数据驱动**

- 修复了实体属性值在由作为被移除的活动行为的一部分来触发的事件更改时可能被废弃的问题

<h2 className="experimental_divider">实验性特性</h2>

## **脚本 API**

### `@minecraft/server@1.1.0-beta` 模块更改

- `BeforeExplosionEvent` 类更改

  - 移除 `impactedBlocks` 属性

  - 添加 `getImpactedBlocks` 函数

    ```typescript
    getImpactedBlocks(): Vector3[]      
    ```

  - 添加 `setImpactedBlocks` 函数

    ```typescript
    setImpactedBlocks(blocks: Vector3[]): void      
    ```

- `BeforeItemUseOnEvent` 类更改

  - 移除 `blockLocation` 属性

  - 添加 `getBlockLocation` 函数

    ```typescript
    getBlockLocation(): Vector3      
    ```

- `BlockInventoryComponent` 类更改

  - 移除 `location` 属性

- `BlockLavaContainerComponent` 类更改

  - 移除 `location` 属性

- `BlockPistonComponent` 类更改

  - 移除 `attachedBlocks` 属性

  - 移除 `location` 属性

  - 添加 `getAttachedBlocks` 函数

    ```typescript
    getAttachedBlocks(): Vector3[]      
    ```

- `BlockPotionContainerComponent` 类更改

  - 移除 `location` 属性

- `BlockRecordPlayerComponent` 类更改

  - 移除 `location` 属性

- `BlockSignComponent` 类更改

  - 移除 `location` 属性

- `BlockSnowContainerComponent` 类更改

  - 移除 `location` 属性

- `BlockWaterContainerComponent` 类更改

  - 移除 `location` 属性

- `ContainerSlot` 类更改

  - 添加 `isStackable` 属性

    ```typescript
    readonly isStackable: boolean
    ```

  - 添加 `keepOnDeath` 属性

    ```typescript
    keepOnDeath: boolean
    ```

  - 添加 `lockMode` 属性

    ```typescript
    lockMode: ItemLockMode
    ```

  - 添加 `maxAmount` 属性

    ```typescript
    readonly maxAmount: number
    ```

  - 添加 `type` 属性

    ```typescript
    readonly type: ItemType
    ```

  - 添加 `clone` 函数

    ```typescript
    clone(): ItemStack      
    ```

  - 添加 `isStackableWith` 函数

    ```typescript
    isStackableWith(itemStack: ItemStack): boolean      
    ```

  - 添加 `setCanDestroy` 函数

    ```typescript
    setCanDestroy(blockIdentifiers?: string[]): void      
    ```

  - 添加 `setCanPlaceOn` 函数

    ```typescript
    setCanPlaceOn(blockIdentifiers?: string[]): void      
    ```

- `Entity` 类更改

  - 移除 `headLocation` 属性

  - 添加 `applyImpulse` 函数

    ```typescript
    applyImpulse(vector: Vector3): void      
    ```

  - 添加 `applyKnockback` 函数

    ```typescript
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      
    ```

  - 添加 `clearVelocity` 函数

    ```typescript
    clearVelocity(): void      
    ```

  - 添加 `getHeadLocation` 函数

    ```typescript
    getHeadLocation(): Vector3      
    ```

  - Removed function `setVelocity`

- `ExplosionEvent` 类更改

  - 移除 `impactedBlocks` 属性

  - 添加 `getImpactedBlocks` 函数

    ```typescript
    getImpactedBlocks(): Vector3[]      
    ```

- `ItemStack` 类更改

  - 添加 `isStackable` 属性

    ```typescript
    readonly isStackable: boolean
    ```

  - 添加 `keepOnDeath` 属性

    ```typescript
    keepOnDeath: boolean
    ```

  - 添加 `lockMode` 属性

    ```typescript
    lockMode: ItemLockMode
    ```

  - 添加 `maxAmount` 属性

    ```typescript
    readonly maxAmount: number
    ```

  - 添加 `type` 属性

    ```typescript
    readonly type: ItemType
    ```

  - 添加 `clone` 函数

    ```typescript
    clone(): ItemStack      
    ```

  - 添加 `isStackableWith` 函数

    ```typescript
    isStackableWith(itemStack: ItemStack): boolean      
    ```

  - 添加 `setCanDestroy` 函数

    ```typescript
    setCanDestroy(blockIdentifiers?: string[]): void      
    ```

  - 添加 `setCanPlaceOn` 函数

    ```typescript
    setCanPlaceOn(blockIdentifiers?: string[]): void      
    ```

- `ItemStartUseOnEvent` 类更改

  - 移除 `blockLocation` 属性

  - 移除 `buildBlockLocation` 属性

  - 添加 `getBlockLocation` 函数

    ```typescript
    getBlockLocation(): Vector3      
    ```

  - 添加 `getBuildBlockLocation` 函数

    ```typescript
    getBuildBlockLocation(): Vector3      
    ```

- `ItemStopUseOnEvent` 类更改

  - 移除 `blockLocation` 属性

  - 添加 `getBlockLocation` 函数

    ```typescript
    getBlockLocation(): Vector3      
    ```

- `ItemUseOnEvent` 类更改

  - 移除 `blockLocation` 属性

  - 添加 `getBlockLocation` 函数

    ```typescript
    getBlockLocation(): Vector3      
    ```

- `NavigationResult` 类更改

  - 移除 `path` 属性

  - 添加 `getPath` 函数

    ```typescript
    getPath(): Vector3[]      
    ```

- `Player` 类更改

  - 移除 `headLocation` 属性

  - 添加 `applyImpulse` 函数

    ```typescript
    applyImpulse(vector: Vector3): void      
    ```

  - 添加 `applyKnockback` 函数

    ```typescript
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      
    ```

  - 添加 `clearVelocity` 函数

    ```typescript
    clearVelocity(): void      
    ```

  - 添加 `getHeadLocation` 函数

    ```typescript
    getHeadLocation(): Vector3      
    ```

  - Removed function `setVelocity`

- Added enum `ItemLockMode`

  ```typescript
  export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot"
  }
  ```