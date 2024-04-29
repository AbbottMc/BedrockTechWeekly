

-   EntityQueryOptions
    -   Added field _propertyOptions?: EntityQueryPropertyOptions\[\];_
-   EntityQueryPropertyOptions
    -   Added field _exclude_ - If exclude _propertyId_
    -   Added field _propertyId_ - Property ID
    -   Added field _value_ - Target value or comparison
-   EqualsComparison
    -   Added _equals_
-   GreaterThanComparison
    -   Added _greaterThan_
-   GreaterThanOrEqualsComparison
    -   Added _greaterThanOrEquals_
-   LessThanComparison
    -   Added _lessThan_
-   LessThanOrEqualsComparison
    -   Added _lessThanOrEquals_
-   NotEqualsComparison
    -   Added _notEquals_
-   RangeComparison
    -   Added _lowerBound_ and _upperBound_
    -   Moved _worldInitialize_ from _beta_ to _1.10.0_
-   Moved _EntityProjectileComponent_ from _beta_ to _1.10.0_
-   Removed old Vector Please use _Vector3Utils_ _from_ _@minecraft/math_ as a replacement
-   ModalFormData
    -   Added _submitButton_ method for setting the text of the form’s submit button
-   Structure APIs
    -   Added function _setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void_ - Sets the block permutation at a given location within the structure
-   StructureManager 
    -   Added function _saveToWorld(): void_ - Persists the structure as part of the broader world storage
    -   Added function _saveAs(identifier: string, saveMode?: StructureSaveMode): Structure_ - Saves a copy of the structure with a new identifier
-   EntityHitBlockAfterEvent
    -   Added property _hitBlockPermutation_ to _beta_