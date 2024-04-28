

-   System
    -   Replaced _events_with _system.beforeEvents_ and _system.afterEvents_.
    -   Renamed event _beforeWatchdogTerminate_to _watchdogTerminate_ and moved it to _beforeEvents_
    -   Moved _scriptEventReceive_to _afterEvents_
-   MessageReceiveAfterEvent
    -   Removed property _sourceType_
-   ScriptEventSource
    -   Replaced enum _MessageSourceType_with a new enum _ScriptEventSource_
-   ScriptEventCommandMessageAfterEvent
    -   Changed property _sourceType_from _MessageSourceType_ to _ScriptEventSource_
    -   Increased maximum message length from 256 to 2048 characters

