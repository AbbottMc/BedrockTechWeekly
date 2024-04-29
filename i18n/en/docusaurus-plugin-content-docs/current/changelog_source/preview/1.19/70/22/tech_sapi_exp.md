

Replaced general _setVelocity_ call with methods to apply impulses to entities:

-   Added function _clearVelocity(): void_\- Sets the current velocity of the Entity to zero
-   Added function _applyImpulse(vector: Vector3): void_\- Applies impulse vector to the current velocity of the Entity
-   Added _function_ _applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void_\- Applies knockback to the Entity in specified direction based on vertical and horizontal strength
-   Removed function _setVelocity_

General changes to more consistently use methods when working with simple data-only objects vs. properties:

-   BeforeExplosionEvent
    -   Added function _getImpactedBlocks(): Vector3\[\]_\- Gets the blocks locations that are impacted the by the explosion
    -   Added function _setImpactedBlocks(blocks: Vector3\[\]): void_\- Sets the blocks locations that are impacted the by the explosion
    -   Removed property _impactedBlocks_
-   BeforeItemUseOnEvent
    -   Added function _getBlockLocation(): Vector3_\- Gets the location of the block being impacted
    -   Removed property _blockLocation_
-   BlockInventoryComponent
    -   Removed property _location_
-   BlockLavaContainerComponent
    -   Removed property _location_
-   BlockPistonComponent
    -   Added function _getAttachedBlocks(): Vector3\[\]_\- Gets the blocks locations that are impacted by the activation of this piston
    -   Removed property _attachedBlocks_
    -   Removed property _location_
-   BlockPotionContainerComponent
    -   Removed property _location_
-   BlockRecordPlayerComponent
    -   Removed property _location_
-   BlockSignComponent
    -   Removed property _location_
-   BlockSnowContainerComponent
    -   Removed property _location_
-   BlockWaterContainerComponent
    -   Removed property _location_
    -   Added function _getHeadLocation(): Vector3_\- Gets the head location of the Entity
    -   Removed property _headLocation_
-   ExplosionEvent
    -   Added function _getImpactedBlocks(): Vector3\[\]_\- Gets the blocks locations that are impacted the by the explosion
    -   Removed property _impactedBlocks_
-   ItemStartUseOnEvent
    -   Added function _getBlockLocation(): Vector3_\- Gets the location of the block being impacted
    -   Added function _getBuildBlockLocation(): Vector3_\- Gets the location of the resulting build block
    -   Removed property _blockLocation_
    -   Removed property _buildBlockLocation_
-   ItemStopUseOnEvent
    -   Added function _getBlockLocation(): Vector3_\- Gets the location of the block being impacted
    -   Removed property _blockLocation_
-   ItemUseOnEvent
    -   Added function _getBlockLocation(): Vector3_\- Gets the location of the block being impacted
    -   Removed property _blockLocation_
-   NavigationResult
    -   Added function _getPath(): Vector3\[\]_\- Gets the locations of the blocks that comprise the navigation route
    -   Removed property _path_
-   Player
    -   Added function _getHeadLocation(): Vector3_\- Gets the head location of the Player
    -   Removed property_headLocation_

ItemStack API improvements:

-   Added read-only property _getMaxAmount: number_\- Returns the maximum stack size for the item
-   Added read-only property _isStackable: bool_\- Returns whether the item is stackable
-   Added function _isStackableWith(itemStack: ItemStack): bool_\- Returns whether the item can be stacked with the given item
-   Added read-only _property_ _type: ItemType_\- Returns the type of the item
-   Added function _clone(): ItemStack_\- Returns a copy of the item stack
-   Added property _keepOnDeath: bool_\- Sets whether the item is kept on death
-   Added property _lockMode: ItemLockMode_\- Sets whether the item can be moved or dropped
-   Added function _setCanPlaceOn(blockIdentifiers?: string\[\])_\- Sets which blocks the item can be placed on
-   Added function _setCanDestroy(blockIdentifiers?: string\[\])_\- Sets which blocks this item can destroy