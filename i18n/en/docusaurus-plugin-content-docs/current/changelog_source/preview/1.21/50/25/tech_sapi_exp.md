

-   Added `shutdown` event to `beforeEvents` within the `system` class. This is fired after all players have left and the world is about to shutdown/close.
    
-   Input APIs
    
    -   Added a suite of input APIs that are readable even if the player's input is disabled with input permissions
    -   Added `getMovementVector(): Vector2` to `InputInfo` to read raw movement values
    -   Added enum `InputButton` with values `Jump` and `Sneak`
    -   Added enum `ButtonState` with values `Pressed` and `Released`
    -   Added `getButtonState(button: InputButton): ButtonState` to `InputInfo` to read raw player button inputs
    -   Added `world.afterEvents.playerButtonInput` event to listen to button change events

