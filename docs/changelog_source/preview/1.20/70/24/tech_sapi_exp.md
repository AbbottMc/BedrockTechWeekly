

-   Added function _createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate_ - Creates a new empty structure
-   Added function _createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): StructureTemplate_ - Creates a new structure from blocks in the world
-   Added function _delete(structure: string | StructureTemplate): boolean_ - Deletes the structure
-   Added function _get(identifier: string): StructureTemplate | undefined_ - Gets the structure with the specified identifier
-   Added function _place(structure: string | StructureTemplate, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions)_ - Places a structure in the world