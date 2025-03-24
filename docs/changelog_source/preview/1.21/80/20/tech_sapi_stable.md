

-   Fixed an issue with BlockPermutation::withState in outdated scripts that prevented some states from being set correctly on a number of blocks
    
    -   Affected blocks include any which have had their directional or placement states recently changed
    -   Scripts created after these blocks were changed may need to be updated to avoid unintended behavior

