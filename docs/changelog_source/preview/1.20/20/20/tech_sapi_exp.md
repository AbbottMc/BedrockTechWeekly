

-   Converted "_set\_block\_property_" to "_set\_block\_state_" for custom blocks
-   Added _defineVector_to _DynamicPropertiesDefinition_ 
-   _EntityEquipmentInventoryComponent_
    -   Implemented slot validation for _setEquipment_, which now returns a boolean indicating whether the item can be equipped to the specified slot
    -   _EntityEquipmentInventoryComponent_is currently limited to Players only. However, we hope to reintroduce this component for mobs in a future update
        -   Moved _getDay_ to _1.4.0_
        -   Moved _getTimeOfDay_ to _1.4.0_
        -   Moved _setTimeOfDay(timeOfDay: number | TimeOfDay)_ to _1.4.0_
        -   Moved _getAbsoluteTime_ to _1.4.0_
        -   Moved _setAbsoluteTime(absoluteTime: number)_ to _1.4.0_
    -   Moved _TimeOfDay_ to _1.4.0_
        -   Added length restrictions to _setLore_\- Up to 20 lines with up to 50 characters per line
        -   Moved function _setLore_to _1.4.0_
        -   Moved function _getLore_to _1.4.0_
        -   Moved class _SystemAfterEvents_to _1.4.0_
        -   Moved class _ScriptEventCommandMessageAfterEvent_to _1.4.0_
    -   Moved player _onScreenDisplay_ to _1.4.0_
    -   Moved _titleDisplayOptions_ to _1.4.0_
    -   Moved _screenDisplay_ to _1.4.0_

