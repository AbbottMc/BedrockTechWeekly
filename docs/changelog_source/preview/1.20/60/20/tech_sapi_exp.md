

-   PlayerPlaceBlockBeforeEvent

-   Removed _itemStack: ItemStack_ from event
-   Added _readonly permutationBeingPlaced: BlockPermutation_ to event
-   Updating _createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)_ to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled.

-   Class Player
-   Added method _spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;_.