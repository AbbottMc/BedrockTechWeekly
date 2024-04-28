## **Items**

-   Renamed "minecraft:use\_duration" to "minecraft:use\_modifiers" and added a "movement\_modifier" parameter in json format versions 1.20.50 and higher
-   Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use\_modifiers" instead for "movement\_modifier" behavior
-   Deprecated "on\_dig" event triggers from "minecraft:digger" in format versions 1.20.50 and higher

## **Cameras**

-   Added a content warning for when the camera is placed outside of the player's chunk radius

## **AI Goal Components**

-   Added "minecraft:behavior.melee\_box\_attack" behavior which functions the same as "minecraft:behavior.melee\_attack" but uses bounds based attack reach calculations
    -   The _reach\_multiplier_attribute is removed and replaced with _box\_increase_
    -   Reach is calculated by increasing the bounds of the attacking mobs in the xz-plane by _box\_increase_blocks to create an "attack box". If the attack box intersects with the target's bounds the attacking mob can reach it

