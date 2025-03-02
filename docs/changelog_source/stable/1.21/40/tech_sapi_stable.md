

-   Fixed method `ItemStack.getComponents` from returning components that are unsupported in the current `@minecraft/server` version
    
-   Fixed issue where invalid ModalFormData would never reject or resolve its promise ([MCPE-178148](https://bugs.mojang.com/browse/MCPE-178148)) 
    
-   `BlockLiquidContainerComponents` API (water, lava, potion, snow) have been removed from beta 
    
-   `BlockFluidContainerComponent` API has been added to beta, replacing the `BlockLiquidContainerComponents`
    
-   Fixed some cases when the `entityRemove` World event would sometimes not be triggered 
    
-   Fixed a crash that could occur with `getDimension` when called within `onBeforeActorRemove` on an entity that was invalid 
    
-   Moved `getRedstonePower` from `beta` to `1.15.0` 
    
-   Moved `isHardcore` from beta to 1.15.0
    
-   Moved `EntityBreathableComponent` from `beta` to `1.15.0`
    
-   Moved `breathesAir` from `beta` to `1.15.0`
    
-   Moved `breathesLava` from `beta` to `1.15.0`
    
-   Moved `breathesSolids` from `beta` to `1.15.0`
    
-   Moved `breathesWater` from `beta` to `1.15.0`
    
-   Moved `generatesBubbles` from `beta` to `1.15.0`
    
-   Moved `inhaleTime` from `beta` to `1.15.0`
    
-   Moved `suffocateTime` from `beta` to `1.15.0`
    
-   Moved `totalSupply` from `beta` to `1.15.0`
    
-   Moved `componentId` from `beta` to `1.15.0`
    
-   Moved `getBreatheBlocks()` from `beta` to `1.15.0`
    
-   Moved `getNonBreatheBlocks()` from `beta` to `1.15.0`
    
-   Moved class `BlockLocationIterator` from `beta` to `1.15.0`
    
-   Moved class `InvalidIteratorError` from `beta` to `1.15.0` 
    
-   Moved property `BlockVolumeBase.getBlockLocationIterator` from `beta` to `1.15.0` 
    
-   Moved enum `BlockVolumeIntersection` from `beta` to `1.15.0` 
    
-   Moved class `BlockVolume` from `beta` to `1.15.0` 
    
-   Added the `DyeableItemComponent` to `beta` 
    
-   Moved `PlayerInteractWithBlockBeforeEvent` and `PlayerInteractWithBlockAfterEvent` from `beta` to `1.15.0` 
    
-   Moved `PlayerInteractWithEntityBeforeEvent` and `PlayerInteractWithEntityAfterEvent` from `beta` to `1.15.0` 
    

