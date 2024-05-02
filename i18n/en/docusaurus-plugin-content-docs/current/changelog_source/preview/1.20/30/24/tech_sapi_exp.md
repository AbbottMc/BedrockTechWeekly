

-   World Events
    -   Renamed _BlockBreakAfterEvent_ to _PlayerBreakBlockAfterEvent_
        -   Added _readonly itemStackAfterBreak?: ItemStack_ (undefined if empty hand)
        -   Added _readonly itemStackBeforeBreak?: ItemStack_ (undefined if empty hand)
    -   Renamed _BlockBreakAfterEventSignal_ to _PlayerBreakBlockAfterEventSignal_
        -   _subscribe_ function now takes _options?: BlockEventOptions_
    -   Added _PlayerBreakBlockBeforeEvent_ with the following members
        -   _cancel: boolean_, cancels event from happening
        -   _itemStack?: ItemStack_, the item stack in use by the player (undefined if empty hand)
        -   _readonly player: Player_, the player breaking the block
    -   Added _PlayerBreakBlockBeforeEventSignal_
    -   Renamed _BlockPlaceAfterEvent_ to _PlayerPlaceBlockAfterEvent_
    -   Renamed _BlockPlaceAfterEventSignal_ to _PlayerPlaceBlockAfterEventSignal_
        -   _subscribe_ function now takes _options?: BlockEventOptions_
    -   Added _PlayerPlaceBlockBeforeEvent_ with the following members
        -   _cancel: boolean_, cancels event from happening
        -   _readonly face: Direction_, the face the block is being placed on
        -   _readonly faceLocation: Vector3_, the location on the face the block was placed on
        -   _itemStack: ItemStack_, the item stack being used to place the block
        -   _readonly player: Player_, the player placing the block
    -   Added _PlayerPlaceBlockBeforeEventSignal_
    -   Modified _WorldAfterEvents_
        -   Renamed _blockBreak_ to _playerBreakBlock_
        -   Renamed _blockPlace_ to _playerPlaceBlock_
    -   Modified _WorldBeforeEvents_
        -   Added _playerBreakBlock_
        -   Added _playerPlaceBlock_
    -   Added _BlockEventOptions_ with the following members
        -   _blockTypes?: string\[\]_, names of blocks to be filtered against
        -   _permutations?: BlockPermutation\[\]_, specific block permutations to be filtered against
    -   Added class _EntityLoadAfterEvent_
        -   New field _entity: Entity_
        -   Added class _EntityLoadAfterEventSignal_
    -   Class _EntitySpawnAfterEvent_
        -   Added property _readonly cause: EntityInitializationCause_\_
    -   Class _WorldAfterEvents_
        -   Added property _readonly entityLoad: EntityLoadAfterEventSignal_
    -   Added enum _EntityInitializationCause_
