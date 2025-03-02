

-   Moved `BlockFillOptions` from beta to `v1.16.0`
-   Moved `UnloadedChunksError` from beta to `v1.16.0`
-   Fixed bug where `Dimension.fillBlocks` would set blocks outside of the ticking area when `ignoreChunkBoundErrors` was set to true.
-   Dimension
    -   Moved `containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean` from beta to `v1.16.0`
    -   Moved `getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume` from beta to \`v1.16.0
    -   Moved `fillBlocks(volume: BlockVolumeBase, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume;` from beta to `v1.16.0`
-   ItemUseOnBeforeEvent
    -   Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`
-   ItemUseOnAfterEvent
    -   Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`
-   CameraFixedBoomOptions
    -   Added property `entityOffset?: Vector3`
-   Added new `CameraTargetOptions` parameter inside `setCamera` for `beta`. This can be used to modify the `minecraft:free` preset if the Focus Target experimental camera toggle is enabled

