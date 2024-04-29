

-   Entity
    -   Fixed a bug where the _getEffect_ method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)  
          
        
-   EntityHurtEvent
    -   Added read-only property _damageSource: EntityDamageSource_ - Gets information about the damage source
    -   EntityDamageSource
        -   Added property _cause: EntityDamageCause_ - Gets the damage cause
        -   Added property _damagingEntity?: Entity_ - Gets the damaging Entity
        -   Added property _damagingProjectile?: Entity_ - Gets the damaging projectile Entity
        -   Added function _applyDamage(amount: number, source?: EntityDamageSource): boolean_ - Applies damage to the Entity and returns the result of the operation
    -   Dimension
        -   Added function _fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number_
            -   Fills an area between _begin_ and _end_ with block of type block. Returns number of blocks placed
        -   Added new interface _BlockFillOptions_ with member _matchingBlock?: BlockPermutation | BlockType_
            -   Used with _fillBlocks_ to apply additional options, such as only filling blocks matching _matchingBlock_
        -   Player
            -   Added function _addLevels(amount: number): number_ - Adds/Removes level to/from the Player and returns the current level of the Player
            -   Added function _addExperience(amount: number): number_ - Adds/Removes experience to/from the Player and returns the current experience of the Player
            -   Added function _resetLevel(): void_ - Resets the level of the Player
            -   Added function _getTotalXp(): number_ - Gets the total experience of the Player
            -   Added read-only property _level_ - Gets the level of the Player
            -   Added read-only property _xpEarnedAtCurrentLevel_ - Gets the experience earned at the current level of the Player
            -   Added read-only property _totalXpNeededForNextLevel_ - Gets the total experience required for the current level of the Player

