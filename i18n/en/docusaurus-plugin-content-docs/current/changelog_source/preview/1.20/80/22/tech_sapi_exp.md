

-   Added _BlockComponentStepOnEvent_ for _beta_
-   Added _BlockRegistry_ for _beta_
-   Added _WorldInitializeBeforeEvent_
-   Added _BlockCustomComponent_
-   Dimension:
    -   Added function _getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume_ - Gets the blocks in a volume if it matches the filter
    -   Added function _containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean_ - Returns true if the block in volume matches the filter, false otherwise
-   Moved _ItemCooldownComponent_ from _beta_ to _1.10.0_
-   Added _BlockComponentStepOffEvent_ for _beta_
-   Added _onStepOff_ to _BlockCustomComponent_
-   Added _BlockComponentRandomTickEvent_ for _beta_
-   Added _onRandomTick_ to _BlockCustomComponent_
-   StructureManager:
    -   Added _getIds(): string_ - Returns a list of identifiers including all structures saved to memory and the world
    -   Fixed a bug where the delete function would not remove structures that were previously saved to the world but not loaded
    -   Changed the default save mode of _createEmpty_ to _StructureSaveMode.Memory_

