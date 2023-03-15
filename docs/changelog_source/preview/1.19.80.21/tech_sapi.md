### **General**

- Form promises are now rejected using typed errors, vs. strings as used previously

### **ItemStack**

- Added function *getTags(): string[]* - Returns all tags for the item
- Added function *hasTag(tag: string): boolean* - Returns true if the item has the specified tag

#### **EntityEquipmentInventoryComponent**

- This component is used to manipulate the equipment of mobs and players. To use it, call *getComponent('equipment_inventory')*
- Added function *getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined* - Returns the item in the given equipment slot
- Added function *getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot* - Returns the container slot for the given equipment slot
- Added function *setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void* - Sets the item in the given equipment slot

#### **ItemDurabilityComponent**

- The ItemDurabilityComponent now works with all damageable items, not just custom items
- Removed property *damageRange*
- Setting damage will now throw an exception if it is outside of the range [0, maxDurability]

### **GameTest Framework**

- Update specific GameTest exceptions to be thrown as GameTestError error objects