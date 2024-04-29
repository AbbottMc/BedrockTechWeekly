

-   Updated the API. See the list below for specific changes:
    -   Events
        -   Removed event tick- called each tick
    -   System
        -   Added run() - to queue a callback to run next tick, re-queue each tick to get behavior similar to tick event
    -   Block
        -   Renamed property id to typeId
    -   BlockComponent
        -   Renamed property id to typeId
    -   Entity
        -   Renamed property id to typeId
        -   Added read-only property id: string- Returns a unique identifier for the entity. This identifier remains consistent across world loads.
    -   EntityComponent
        -   Renamed property id to typeId
    -   ItemComponent
        -   Renamed property id to typeId
    -   ItemStack
        -   Renamed property id to typeId

