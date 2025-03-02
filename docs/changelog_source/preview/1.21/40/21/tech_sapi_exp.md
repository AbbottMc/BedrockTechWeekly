

-   Added enum `MemoryTier`

        export enum MemoryTier \{
            Undetermined = 0,
            SuperLow = 1,
            Low = 2,
            Mid = 3,
            High = 4,
            SuperHigh = 5
        \}
    

-   Added base class `SystemInfo`
    -   Field `MemoryTier`
-   Added class `ClientSystemInfo`.
    -   Field `MemoryTier`
-   Class `Player`
    -   Added property `clientSystemInfo`
-   Class `System`
    -   Added property `serverSystemInfo`