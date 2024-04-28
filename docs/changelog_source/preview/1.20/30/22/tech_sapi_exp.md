

-   Fixed issue where prototype properties are not possible to redefine using _defineProperty_ ([MCPE-174073](https://bugs.mojang.com/browse/MCPE-174073)) 
-   ItemStack
    -   Added _getCanPlaceOn()_ and _getCanDestroy()_
    -   Added upper maximum limit of 255 to _amount_ property - will throw if exceeds
-   Entity
    -   Added function _getProperty(identifier: string): boolean | number | string | undefined_\- Gets an Entity Property
    -   Added function _setProperty(identifier: string, value: boolean | number | string): void_\- Sets an Entity Property during the next tick
    -   Added function _resetProperty(identifier: string): boolean | number | string;_\- Resets an Entity Property to its default value during the next tick and returns the default value
-   beforeEvents
    -   Added event/property _removeEvent_
-   afterEvents
    -   Renamed event/property _removedEvent_ to _removeEvent_
-   Class _EntityRemovedAfterEvent_
    -   Renamed field _removedEntity_ to _removedEntityId_: _removedEntityId: string_
    -   Added field _typeId: string_
-   Added class _EntityRemovedBeforeEvent_
    -   Added field _removedEntity: Entity_
-   Moved _EquipmentSlot_ to _5.0_ and changed enum values to uppercase
-   Moved _EntityEquippableComponent_ to _5.0_
-   Scoreboard
    -   _setObjectiveAtDisplaySlot_ return type now correctly set to _ScoreboardObjective_ or undefined
-   ScoreboardIdentity
    -   _getEntity_ return type now correctly set to Entity or undefined
-   _setWeather_ API can now take an optional duration parameter to set the weather duration
-   Added read-only property _heightRange: NumberRange_\- Gets min/max dimension height limits.
-   Adding Player.isSleeping and Player.isEmoting 

