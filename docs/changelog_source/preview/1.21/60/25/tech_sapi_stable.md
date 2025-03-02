

-   Added script bindings to `beta` for the experimental Aim-Assist feature.
    -   `class AimAssistCategory`
    -   `class AimAssistCategorySettings`
    -   `class AimAssistPreset`
    -   `class AimAssistPresetSettings`
    -   `class AimAssistRegistry`
    -   `enum AimAssistTargetMode`
    -   `interface PlayerAimAssistSettings`
    -   `class PlayerAimAssist`
    -   method Player.getAimAssist to modify a player's aim-assist settings
    -   method World.getAimAssist to add aim-assist presets and categories.
-   Added enum `InvalidArgumentErrorType` that adds extra context to the type of invalid argument error. 
-   Added property `type` to `InvalidArgumentError` for checking the type of argument error. 

