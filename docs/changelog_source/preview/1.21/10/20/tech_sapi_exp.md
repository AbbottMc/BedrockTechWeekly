

-   BlockRecordPlayerComponent
-   Added _UIManager_ class and _uiManager_ object to _@minecraft/server-ui_ beta
    -   Renamed the componentId to _minecraft:record\_player_ for consistency
    -   Added methods _getRecord_, _ejectRecord_, _pauseRecord_ and _playRecord_
    -   Removed method _clearRecord_, instead you should now pass undefined to _setRecord_ to reset it
    -   Removed property _readonly getLifetimeState: EntityLifetimeState_ from _beta_
-   Removed enum _EntityLifetimeState_ from beta
    -   Move _setBlockPermutation(location: Vector3, permutation: BlockPermutation): void_ from beta to _12.0_
    -   Move _setBlockType(location: Vector3, blockType: BlockType | string): void_ from beta to _12.0_
    -   Moved _getTags(): string\[\]_ from _beta_ to _12.0_
    -   Moved _hasTag(tag: string): boolean_ from _beta_ to _12.0_
    -   Removed property _readonly fallDistance: number_ from _beta_

