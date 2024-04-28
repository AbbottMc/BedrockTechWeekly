

-   Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error
-   Updated _SimulatedPlayer_ so it can continuously build
-   Updated _SimulatedPlayer_ so it can Move and look in different directions
-   ChatSendAfter & ChatSendBeforeEvent
    -   Changed _message_ and _sender_ to readonly properties
    -   Removed _setTargets_, _getTargets_, _sendToTargets_ and replaced with an optional player list property _targets_
-   Class ItemDurabilityComponent
    -   Renamed _unbreaking_ to _unbreakingEnchantmentLevel_
    -   Renmaed _getDamageRange_ to _getDamageChanceRange_
-   EntityTypes
    -   Changed _getAll_ return type from _EntityTypeIterator_ to _EntityType\[\]_
-   EntityEquippableComponent
    -   Fixed an issue where functions _getEquipment_ and _getEquipmentSlot_ could not be called within "before" event handlers
-   Fixed a bug where an ItemStack could not be stacked after clearing its lore