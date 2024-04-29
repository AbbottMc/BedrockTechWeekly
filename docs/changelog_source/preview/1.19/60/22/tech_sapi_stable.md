

-   Block
    -   Added function _getRedstonePower(): number_\- Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined
-   Added /scriptevent command as part of the Beta APIs experiment. This is what will trigger system.events.scriptEventReceive events (see below)  
      
    -   Usage: /scriptevent \<messsageId: string\> \[message: ???\]
    -   messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my\_scripts:spawn\_sheep")
    -   message is optional, with a max length of 256 characters  
          
        
-   events.scriptEventReceive
    -   Added system event _events.scriptEventReceive_
    -   Added read-only property _id: String__\-_ The namespaced ID of the event
    -   Added read-only property message: String- The content of the message the event was sent with
    -   Added read-only property _sourceBlock: Block_\- The command block that triggered/executed the command call if applicable, otherwise undefined
    -   Added read-only property _sourceEntity: Entity_\- The player/entity that executed the command call if applicable, otherwise undefined
    -   Added read-only property _initiator: Entity_\- The player that caused an NPC to execute the command call if applicable, otherwise undefined
    -   Added read-only property _sourceType: MessageSourceType_\- The type of source the event was triggered by
    -   _subscribe()_can filter by valid namespace string using the _ScriptEventMessageFilterOptions_ class  
          
        
-   ScriptEventMessageFilterOptions
    -   Added _ScriptEventMessageFilterOptions_ class
    -   Added property _namespaces: string\[\]_\- An array of namespaces to filter on
-   Simulated Player
    -   Added property _isSprinting_\- Used to get or set if the sprinting state of the simulated player is set to true

