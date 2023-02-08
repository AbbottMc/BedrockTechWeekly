## **Commands**

- Summon command no longer causes some entities to be spawned in at an angle

## **Data-driven**

- Fixed an issue where Entity Property value changes could be discarded if done by events fired as part of removal of active behaviors caused by other events


<h2 className="experimental_divider">Experimental Technical Features</h2>

## **Script API**

### Changed module `@minecraft/server@1.1.0-beta`

- Changed class `BeforeExplosionEvent`

  - Removed property `impactedBlocks`

  - Added function `getImpactedBlocks`

    ```typescript
    getImpactedBlocks(): Vector3[]      
    ```

  - Added function `setImpactedBlocks`

    ```typescript
    setImpactedBlocks(blocks: Vector3[]): void      
    ```

- Changed class `BeforeItemUseOnEvent`

  - Removed property `blockLocation`

  - Added function `getBlockLocation`

    ```typescript
    getBlockLocation(): Vector3      
    ```

- Changed class `BlockInventoryComponent`

  - Removed property `location`

- Changed class `BlockLavaContainerComponent`

  - Removed property `location`

- Changed class `BlockPistonComponent`

  - Removed property `attachedBlocks`

  - Removed property `location`

  - Added function `getAttachedBlocks`

    ```typescript
    getAttachedBlocks(): Vector3[]      
    ```

- Changed class `BlockPotionContainerComponent`

  - Removed property `location`

- Changed class `BlockRecordPlayerComponent`

  - Removed property `location`

- Changed class `BlockSignComponent`

  - Removed property `location`

- Changed class `BlockSnowContainerComponent`

  - Removed property `location`

- Changed class `BlockWaterContainerComponent`

  - Removed property `location`

- Changed class `ContainerSlot`

  - Added property `isStackable`

    ```typescript
    readonly isStackable: boolean
    ```

  - Added property `keepOnDeath`

    ```typescript
    keepOnDeath: boolean
    ```

  - Added property `lockMode`

    ```typescript
    lockMode: ItemLockMode
    ```

  - Added property `maxAmount`

    ```typescript
    readonly maxAmount: number
    ```

  - Added property `type`

    ```typescript
    readonly type: ItemType
    ```

  - Added function `clone`

    ```typescript
    clone(): ItemStack      
    ```

  - Added function `isStackableWith`

    ```typescript
    isStackableWith(itemStack: ItemStack): boolean      
    ```

  - Added function `setCanDestroy`

    ```typescript
    setCanDestroy(blockIdentifiers?: string[]): void      
    ```

  - Added function `setCanPlaceOn`

    ```typescript
    setCanPlaceOn(blockIdentifiers?: string[]): void      
    ```

- Changed class `Entity`

  - Removed property `headLocation`

  - Added function `applyImpulse`

    ```typescript
    applyImpulse(vector: Vector3): void      
    ```

  - Added function `applyKnockback`

    ```typescript
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      
    ```

  - Added function `clearVelocity`

    ```typescript
    clearVelocity(): void      
    ```

  - Added function `getHeadLocation`

    ```typescript
    getHeadLocation(): Vector3      
    ```

  - Removed function `setVelocity`

- Changed class `ExplosionEvent`

  - Removed property `impactedBlocks`

  - Added function `getImpactedBlocks`

    ```typescript
    getImpactedBlocks(): Vector3[]      
    ```

- Changed class `ItemStack`

  - Added property `isStackable`

    ```typescript
    readonly isStackable: boolean
    ```

  - Added property `keepOnDeath`

    ```typescript
    keepOnDeath: boolean
    ```

  - Added property `lockMode`

    ```typescript
    lockMode: ItemLockMode
    ```

  - Added property `maxAmount`

    ```typescript
    readonly maxAmount: number
    ```

  - Added property `type`

    ```typescript
    readonly type: ItemType
    ```

  - Added function `clone`

    ```typescript
    clone(): ItemStack      
    ```

  - Added function `isStackableWith`

    ```typescript
    isStackableWith(itemStack: ItemStack): boolean      
    ```

  - Added function `setCanDestroy`

    ```typescript
    setCanDestroy(blockIdentifiers?: string[]): void      
    ```

  - Added function `setCanPlaceOn`

    ```typescript
    setCanPlaceOn(blockIdentifiers?: string[]): void      
    ```

- Changed class `ItemStartUseOnEvent`

  - Removed property `blockLocation`

  - Removed property `buildBlockLocation`

  - Added function `getBlockLocation`

    ```typescript
    getBlockLocation(): Vector3      
    ```

  - Added function `getBuildBlockLocation`

    ```typescript
    getBuildBlockLocation(): Vector3      
    ```

- Changed class `ItemStopUseOnEvent`

  - Removed property `blockLocation`

  - Added function `getBlockLocation`

    ```typescript
    getBlockLocation(): Vector3      
    ```

- Changed class `ItemUseOnEvent`

  - Removed property `blockLocation`

  - Added function `getBlockLocation`

    ```typescript
    getBlockLocation(): Vector3      
    ```

- Changed class `NavigationResult`

  - Removed property `path`

  - Added function `getPath`

    ```typescript
    getPath(): Vector3[]      
    ```

- Changed class `Player`

  - Removed property `headLocation`

  - Added function `applyImpulse`

    ```typescript
    applyImpulse(vector: Vector3): void      
    ```

  - Added function `applyKnockback`

    ```typescript
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      
    ```

  - Added function `clearVelocity`

    ```typescript
    clearVelocity(): void      
    ```

  - Added function `getHeadLocation`

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