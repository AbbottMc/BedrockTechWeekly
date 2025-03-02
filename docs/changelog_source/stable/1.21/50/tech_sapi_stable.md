

-   Added `beforeEvents` object to `@minecraft/server-net` module version `1.0.0-beta` which exposes two events
    -   `packetReceive`: This event is called when the game server receives a network packet from a client. If cancelled, the server will silently ignore the packet.
    -   `packetSend`: This event is called when the game server sends a network packet to client(s). If cancelled, the packet is dropped and never sent to the recipients
-   Added additional optional arguments of name and parentThemeId to addNewTheme(). When a valid parentThemeId has been passed through the function, the newly created theme would inherit all the theme color properties from the parent

