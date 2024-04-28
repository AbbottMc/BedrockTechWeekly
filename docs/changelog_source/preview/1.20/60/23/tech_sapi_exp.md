

-   Updated function _addEffect_ to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.
-   Added item dynamic properties

-   Added function _clearDynamicProperties(): void_ - Removes all dynamic properties from the item stack
-   Added function _getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined_ - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
-   Added function _getDynamicPropertyIds(): string\[\]_ - Returns an array of all dynamic property identifiers on the item stack
-   Added function _getDynamicPropertyTotalByteCount(): number_ - Returns the total byte count of all dynamic properties on the item stack
-   Added function _setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void_ - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed
-   Added function _clearDynamicProperties(): void_ - Removes all dynamic properties from the item stack
-   Added function _getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined_ - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
-   Added function _getDynamicPropertyIds(): string\[\]_ - Returns an array of all dynamic property identifiers on the item stack
-   Added function _getDynamicPropertyTotalByteCount(): number_ - Returns the total byte count of all dynamic properties on the item stack
-   Added function _setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void_ - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed

-   Added class _EntityProjectileComponent_. This component is used to shoot a projectile entity and modify its properties
-   Added interface _ProjectileShootOptions_. This interface is used with function _EntityProjectileComponent.shoot_ to optionally modify the accuracy of the projectile when shot

