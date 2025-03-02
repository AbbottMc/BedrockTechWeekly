

-   Add collectRuntimeStats to `@minecraft/debug-utilities` module, exposing script runtime memory usage.
-   Added new input permissions that effectively allow creators to enable/disable player inputs including: lateral movement, move forward, move backward, move left, move right, sneak, jump, mount, and dismount.
    -   Extended `PlayerInputPermissions` script class to read and write the new input permissions
    -   Extended `/inputpermissions` command to use the new input permissions
    -   Extended `haspermission` selector to use the new input permissions

