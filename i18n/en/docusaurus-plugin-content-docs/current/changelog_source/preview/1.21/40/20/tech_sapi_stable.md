

-   ItemStack
    -   Fixed method `ItemStack.getComponents` from returning components that are unsupported in the current `@minecraft/server` version 
-   Fixed issue where invalid ModalFormData would never reject or resolve its promise ([MCPE-178148](https://bugs.mojang.com/browse/MCPE-178148)) 
-   `BlockLiquidContainerComponents` API (water, lava, potion, snow) have been removed from beta
-   `BlockFluidContainerComponent` API has been added to beta, replacing the `BlockLiquidContainerComponents`
-   Moved `isHardcore` from beta to 1.15.0

