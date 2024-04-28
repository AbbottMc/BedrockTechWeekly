

-   Changed function from fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): number to fillBlocks(volume: BlockVolumeBase | CompoundBlockVolume, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume 
    
-   BlockFillOptions 
    

-   -   Removed member matchingBlock?: BlockPermutation 
        
    -   Added member blockFilter?: BlockFilter 
        
    -   Added member ignoreChunkBoundErrors?: boolean 
        

-   Added ItemComponentUseCompleteEvent for beta 
    

-   -   Moved setType API from beta to stable 1.11.0 
        
    -   Added function waitTick(ticks?: number): Promise where the returned promise is resolved after "ticks" number of ticks or 1 tick if no ticks parameter is supplied 
        

-   Removed argument waterlogged from function setBlockPermutation and moved it from beta to 1.11.0 
    
-   Moved function saveToWorld from beta to 1.11.0 
    
-   Moved function saveAs from beta to 1.11.0 
    
-   Updated signature of createFromWorld and moved it from beta to 1.11.0 
    
-   Renamed function getIds to getWorldStructureIds and moved it from beta to 1.11.0 
    

