

-   Add collectRuntimeStats to `@minecraft/debug-utilities` module, exposing script runtime memory usage.
-   Added new input permissions that effectively allow creators to enable/disable player inputs including: lateral movement, move forward, move backward, move left, move right, sneak, jump, mount, and dismount.
    -   Extended `PlayerInputPermissions` script class to read and write the new input permissions
    -   Extended `/inputpermissions` command to use the new input permissions
    -   Extended `haspermission` selector to use the new input permissions
-   BlockComponentTypes
    -   Moved `FluidContainer` from `beta` to `1.16.0`
-   Moved `BlockFluidContainerComponent` from `beta` to `1.16.0`
-   Moved `FluidContainer` from `beta` to `1.16.0`
-   Added `initialRotation` optional member to `SpawnEntityOptions` for specifying the initial rotation of the spawned entity in degrees.

