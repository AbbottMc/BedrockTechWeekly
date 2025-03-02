

-   Added `beforeEvents` object to `@minecraft/server-net` module version `1.0.0-beta` which exposes two events
    -   `packetReceive`: This event is called when the game server receives a network packet from a client. If cancelled, the server will silently ignore the packet.
    -   `packetSend`: This event is called when the game server sends a network packet to client(s). If cancelled, the packet is dropped and never sent to the recipients.

