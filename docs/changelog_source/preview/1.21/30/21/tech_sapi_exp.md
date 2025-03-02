

-   PlayerInteractWithBlockBeforeEvent
    -   Added property readonly isFirstEvent: booleanto beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
-   PlayerInteractWithBlockAfterEvent
    -   Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded
    -   Added property readonly isFirstEvent: boolean to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
    -   This after event will no longer always trigger on an empty hand. The interaction with the block needs to be successful for it to trigger the after event
-   PlayerInteractWithEntityAfterEvent
    -   Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded
    -   Cancelling the before event will now no longer trigger the after event
    -   This event will now only be triggered on a successful interaction

