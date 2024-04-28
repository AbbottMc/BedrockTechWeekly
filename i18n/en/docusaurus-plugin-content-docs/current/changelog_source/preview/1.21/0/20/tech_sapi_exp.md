

-   Added ItemComponentMineBlockEvent for beta
-   Event Signals
    -   Unsubscribe is no longer marked as "@throws". It does not throw exceptions and never has.
-   Added _getAll_to _beta_
-   Added _PlayerInputPermissions_and _inputPermissions_ for enabling & disabling categories of player input permissions
-   Added _InputPermissionCategory_
-   Added _afterEvents.playerInputPermissionCategoryChange_for listening to changes to a players input permissions
-   Added _ignoreBlockCollision_to _EntityRaycastOptions_ which when true, will make the raycast not stop on block collision
-   Added _includePassableBlocks_to _EntityRaycastOptions_ which when true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast
-   Added _includeLiquidBlocks_to _EntityRaycastOptions_ which when true, liquid blocks will be considered as blocks that stop the raycast
-   Added ItemComponentHitEntityEvent and ItemComponentBeforeDurabilityDamageEvent for beta

