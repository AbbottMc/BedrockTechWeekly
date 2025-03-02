

-   Added `scriptEvent` method to `system` object which sends a script event similar to the `/scriptevent` command to beta
-   Added `NamespaceNameError` error which validates namespace usage to beta
    
-   Added `NamespaceNameErrorReason` enum which shows the types of issues that namespace validation can run into to beta
    
-   Added new function `collectPluginStats` to `@minecraft/debug-utilities` which will return the types and counts of all active script objects.
    
    -   Removed `/script watchdog exportstats` command, deprecated in favor of script API.
-   Added `setDynamicProperties` method to `World`, `Entity`, `ItemStack` and `ContainerSlot`.
    
-   Added enum `LiquidType`.
    

    export enum LiquidType \{
        Water = 'Water'
    \}
    

-   Added four new bindings to Script Block API (Beta).
    
    -   `Block::canBeDestroyedByLiquidSpread`
    -   `Block::isLiquidBlocking`
    -   `Block::liquidSpreadCausesSpawn`
    -   `Block::liquidCanFlowFromDirection`
-   Added three new bindings to Script Block Permutation API (Beta).
    
    -   `BlockPermutation::canBeDestroyedByLiquidSpread`
    -   `BlockPermutation::isLiquidBlocking`
    -   `BlockPermutation::liquidSpreadCausesSpawn`
-   Fixed bug where `Block.setWaterlogged` would create a water source that does not flow.
    
-   Rename `handleCounts` interface to `HandleCounts` in `@minecraft/debug_utilities` module.
    
-   Fixed `BlockLocationIterator` crash that could happen if the `BlockVolume` that the iterator came from was deleted first.
    

