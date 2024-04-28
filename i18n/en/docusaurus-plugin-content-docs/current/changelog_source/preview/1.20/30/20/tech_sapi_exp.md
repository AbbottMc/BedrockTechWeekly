

-   Fixed a bug where setLore would incorrectly calculate the length of lore strings containing multi-byte characters ([MCPE-173189](https://bugs.mojang.com/browse/MCPE-173189))
    -   Added function _remove_\- Removes the Entity. This cannot be called on Players but can be used on SimulatedPlayers in Gametest.
-   MolangVariableMap
    -   Added setFloat function
    -   Changed return type of setColorRBG, setColorRGBA, setSpeedAndDirection, and setVector3 to void
    -   Changed the MolangVariableMap property on spawnParticle to be optional: spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void
-   Renamed _Color_interface to _RGBA_
-   Added interface _RGB_

