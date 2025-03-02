

-   `RegistrationBuilder.structureLocation` method in @minecraft/server-gametest
    -   Added optional argument `structureDimension: DimensionTye | string` to specify which dimension the gametest should spawn in. If not provided, it will default to whichever dimension the test is ran from.
-   `system.scriptEvent()` no longer returns `ScriptEventMessageSizeError` but instead an `InvalidArgumentError` for the message size exceeding 2048 characters in size in Beta
-   Removed `ScriptEventMessageSizeError` from Beta
-   Moved CameraTargetOptions from beta to `v1.16.0`

