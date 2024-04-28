

-   Added _effectAddBeforeEvent_ and removed _effectState_ from _effectAddAfterEvent_
-   Fixed _target_ property to be of type _Entity_ or _undefined_ as the entity may not have a target
-   EntityHitInformation
    -   Fixed _entity_ property to be of type _Entity_ or _undefined_ as the entity may be undefined
-   EntityInventoryComponent
    -   _container_ member variable now correctly reflects it can be a Container or undefined
    -   _entity_ member variable now correctly reflects it can be an Entity or undefined
-   _ItemStartUseOnAfterEvent_
    -   _itemStack_ is now optional
-   _ItemStopUseAfterEvent_
    -   _itemStack_ is now optional
-   DataDrivenEntityTriggerAfterEvent
    -   Renamed property _id_ to _eventId_ for clarity
    -   Changed _getModifier_ to work in read-only mode
-   Changed _DefinitionModifier_ from a _class_ to an _interface_ with properties
-   Made _get_properly reflect that it can return _EntityType | undefined_ instead of just _EntityType_