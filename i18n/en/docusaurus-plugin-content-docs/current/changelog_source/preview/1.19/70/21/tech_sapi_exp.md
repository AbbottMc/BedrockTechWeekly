

-   Added _function playAnimation(animationName: string, options?: PlayAnimationOptions)_ - Plays the specified animation for an entity
-   **ItemStack**
    -   _ItemStack_ can now be constructed using a string identifier
    -   Removed constructor parameter data
    -   Removed property _data_
    -   Removed function _clearLore_\- To clear lore, call _setLore_ with an empty array or _undefined_
    -   Setting _nameTag_to an empty string will now clear the name tag
    -   Setting _nameTag_to a string longer than 255 characters will now result in an exception
    -   Setting _amount_greater than the maximum stack size will now clamp the value to the maximum stack size
    -   Setting _amount_to a value less than 1 will now result in an exception

-   **ContainerSlot**
    -   Removed function _clearItem_\- To clear the item, call _setItem_ with _undefined_
    -   Removed function _clearLore_\- To clear lore, call _setLore_ with an empty array or _undefined_

