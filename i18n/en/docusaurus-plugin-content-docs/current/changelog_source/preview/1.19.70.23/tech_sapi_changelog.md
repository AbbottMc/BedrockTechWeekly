### Changed module `@minecraft/server@1.1.0-beta`

- Changed class `BlockPermutation`

    - Changed function `getAllProperties`

        - Changed return type from `IBlockProperty[]` to `Record<string, boolean | number | string>`

    - Changed function `getProperty`

        - Changed return type from `IBlockProperty` (throws exceptions) to `boolean | number | string`

    - Added function `matches`

      ```typescript
      matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean      
      ```

    - Added function `resolve`

      ```typescript
      static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation      
      ```

    - Added function `withProperty`

      ```typescript
      withProperty(name: string, value: boolean | number | string): BlockPermutation      
      ```

- Changed class `BlockProperties`

    - Removed constant `active`

    - Removed constant `age`

    - Removed constant `ageBit`

    - Removed constant `allowUnderwaterBit`

    - Removed constant `attachedBit`

    - Removed constant `attachment`

    - Removed constant `bambooLeafSize`

    - Removed constant `bambooStalkThickness`

    - Removed constant `bigDripleafHead`

    - Removed constant `bigDripleafTilt`

    - Removed constant `biteCounter`

    - Removed constant `blockLightLevel`

    - Removed constant `bloom`

    - Removed constant `booksStored`

    - Removed constant `brewingStandSlotABit`

    - Removed constant `brewingStandSlotBBit`

    - Removed constant `brewingStandSlotCBit`

    - Removed constant `buttonPressedBit`

    - Removed constant `candles`

    - Removed constant `canSummon`

    - Removed constant `cauldronLiquid`

    - Removed constant `chemistryTableType`

    - Removed constant `chiselType`

    - Removed constant `clusterCount`

    - Removed constant `color`

    - Removed constant `colorBit`

    - Removed constant `composterFillLevel`

    - Removed constant `conditionalBit`

    - Removed constant `coralColor`

    - Removed constant `coralDirection`

    - Removed constant `coralFanDirection`

    - Removed constant `coralHangTypeBit`

    - Removed constant `coveredBit`

    - Removed constant `crackedState`

    - Removed constant `damage`

    - Removed constant `deadBit`

    - Removed constant `deprecated`

    - Removed constant `direction`

    - Removed constant `dirtType`

    - Removed constant `disarmedBit`

    - Removed constant `doorHingeBit`

    - Removed constant `doublePlantType`

    - Removed constant `dragDown`

    - Removed constant `dripstoneThickness`

    - Removed constant `endPortalEyeBit`

    - Removed constant `explodeBit`

    - Removed constant `extinguished`

    - Removed constant `facingDirection`

    - Removed constant `fillLevel`

    - Removed constant `flowerType`

    - Removed constant `groundSignDirection`

    - Removed constant `growingPlantAge`

    - Removed constant `growth`

    - Removed constant `hanging`

    - Removed constant `headPieceBit`

    - Removed constant `height`

    - Removed constant `honeyLevel`

    - Removed constant `hugeMushroomBits`

    - Removed constant `infiniburnBit`

    - Removed constant `inWallBit`

    - Removed constant `itemFrameMapBit`

    - Removed constant `itemFramePhotoBit`

    - Removed constant `kelpAge`

    - Removed constant `leverDirection`

    - Removed constant `liquidDepth`

    - Removed constant `lit`

    - Removed constant `moisturizedAmount`

    - Removed constant `monsterEggStoneType`

    - Removed constant `multiFaceDirectionBits`

    - Removed constant `newLeafType`

    - Removed constant `newLogType`

    - Removed constant `noDropBit`

    - Removed constant `occupiedBit`

    - Removed constant `oldLeafType`

    - Removed constant `oldLogType`

    - Removed constant `openBit`

    - Removed constant `outputLitBit`

    - Removed constant `outputSubtractBit`

    - Removed constant `persistentBit`

    - Removed constant `pillarAxis`

    - Removed constant `portalAxis`

    - Removed constant `poweredBit`

    - Removed constant `prismarineBlockType`

    - Removed constant `propaguleStage`

    - Removed constant `railDataBit`

    - Removed constant `railDirection`

    - Removed constant `redstoneSignal`

    - Removed constant `repeaterDelay`

    - Removed constant `respawnAnchorCharge`

    - Removed constant `rotation`

    - Removed constant `sandStoneType`

    - Removed constant `sandType`

    - Removed constant `saplingType`

    - Removed constant `seaGrassType`

    - Removed constant `spongeType`

    - Removed constant `stability`

    - Removed constant `stabilityCheck`

    - Removed constant `stoneBrickType`

    - Removed constant `stoneSlabType`

    - Removed constant `stoneSlabType2`

    - Removed constant `stoneSlabType3`

    - Removed constant `stoneSlabType4`

    - Removed constant `stoneType`

    - Removed constant `strippedBit`

    - Removed constant `structureBlockType`

    - Removed constant `structureVoidType`

    - Removed constant `suspendedBit`

    - Removed constant `tallGrassType`

    - Removed constant `toggleBit`

    - Removed constant `topSlotBit`

    - Removed constant `torchFacingDirection`

    - Removed constant `triggeredBit`

    - Removed constant `turtleEggCount`

    - Removed constant `twistingVinesAge`

    - Removed constant `updateBit`

    - Removed constant `upperBlockBit`

    - Removed constant `upsideDownBit`

    - Removed constant `vineDirectionBits`

    - Removed constant `wallBlockType`

    - Removed constant `wallConnectionTypeEast`

    - Removed constant `wallConnectionTypeNorth`

    - Removed constant `wallConnectionTypeSouth`

    - Removed constant `wallConnectionTypeWest`

    - Removed constant `wallPostBit`

    - Removed constant `weepingVinesAge`

    - Removed constant `weirdoDirection`

    - Removed constant `woodType`

    - Added function `get`

      ```typescript
      static get(propertyName: string): BlockPropertyType      
      ```

    - Added function `getAll`

      ```typescript
      static getAll(): BlockPropertyType[]      
      ```

- Added class `BlockPropertyType`

  ```typescript
  export class BlockPropertyType {
    protected constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
  }
  ```

- Changed class `BlockType`

    - Removed function `createDefaultBlockPermutation`

- Removed class `BoolBlockProperty`

- Changed class `DirectionBlockProperty`

    - Removed base class `IBlockProperty`

- Removed class `IBlockProperty`

- Removed class `IntBlockProperty`

- Changed class `MinecraftBlockTypes`

    - Added constant `decoratedPot`

      ```typescript
      static readonly decoratedPot: BlockType
      ```

    - Added constant `suspiciousSand`

      ```typescript
      static readonly suspiciousSand: BlockType
      ```

    - Added constant `torchflower`

      ```typescript
      static readonly torchflower: BlockType
      ```

    - Added constant `torchflowerCrop`

      ```typescript
      static readonly torchflowerCrop: BlockType
      ```

- Removed class `StringBlockProperty`