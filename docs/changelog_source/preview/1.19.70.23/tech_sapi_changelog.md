### `@minecraft/server@1.1.0-beta` 模块更改

- `BlockPermutation` 类更改

    - `getAllProperties` 函数更改

        - 将返回类型从 `IBlockProperty[]` 更改为 `Record<string, boolean | number | string>`

    - `getProperty` 函数更改

        - 将返回类型从 `IBlockProperty` (throws exceptions) 更改为 `boolean | number | string`

    - 添加 `matches` 函数

      ```typescript
      matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean      
      ```

    - 添加 `resolve` 函数

      ```typescript
      static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation      
      ```

    - 添加 `withProperty` 函数

      ```typescript
      withProperty(name: string, value: boolean | number | string): BlockPermutation      
      ```

- `BlockProperties` 类更改

    - 移除 `active` 常量

    - 移除 `age` 常量

    - 移除 `ageBit` 常量

    - 移除 `allowUnderwaterBit` 常量

    - 移除 `attachedBit` 常量

    - 移除 `attachment` 常量

    - 移除 `bambooLeafSize` 常量

    - 移除 `bambooStalkThickness` 常量

    - 移除 `bigDripleafHead` 常量

    - 移除 `bigDripleafTilt` 常量

    - 移除 `biteCounter` 常量

    - 移除 `blockLightLevel` 常量

    - 移除 `bloom` 常量

    - 移除 `booksStored` 常量

    - 移除 `brewingStandSlotABit` 常量

    - 移除 `brewingStandSlotBBit` 常量

    - 移除 `brewingStandSlotCBit` 常量

    - 移除 `buttonPressedBit` 常量

    - 移除 `candles` 常量

    - 移除 `canSummon` 常量

    - 移除 `cauldronLiquid` 常量

    - 移除 `chemistryTableType` 常量

    - 移除 `chiselType` 常量

    - 移除 `clusterCount` 常量

    - 移除 `color` 常量

    - 移除 `colorBit` 常量

    - 移除 `composterFillLevel` 常量

    - 移除 `conditionalBit` 常量

    - 移除 `coralColor` 常量

    - 移除 `coralDirection` 常量

    - 移除 `coralFanDirection` 常量

    - 移除 `coralHangTypeBit` 常量

    - 移除 `coveredBit` 常量

    - 移除 `crackedState` 常量

    - 移除 `damage` 常量

    - 移除 `deadBit` 常量

    - 移除 `deprecated` 常量

    - 移除 `direction` 常量

    - 移除 `dirtType` 常量

    - 移除 `disarmedBit` 常量

    - 移除 `doorHingeBit` 常量

    - 移除 `doublePlantType` 常量

    - 移除 `dragDown` 常量

    - 移除 `dripstoneThickness` 常量

    - 移除 `endPortalEyeBit` 常量

    - 移除 `explodeBit` 常量

    - 移除 `extinguished` 常量

    - 移除 `facingDirection` 常量

    - 移除 `fillLevel` 常量

    - 移除 `flowerType` 常量

    - 移除 `groundSignDirection` 常量

    - 移除 `growingPlantAge` 常量

    - 移除 `growth` 常量

    - 移除 `hanging` 常量

    - 移除 `headPieceBit` 常量

    - 移除 `height` 常量

    - 移除 `honeyLevel` 常量

    - 移除 `hugeMushroomBits` 常量

    - 移除 `infiniburnBit` 常量

    - 移除 `inWallBit` 常量

    - 移除 `itemFrameMapBit` 常量

    - 移除 `itemFramePhotoBit` 常量

    - 移除 `kelpAge` 常量

    - 移除 `leverDirection` 常量

    - 移除 `liquidDepth` 常量

    - 移除 `lit` 常量

    - 移除 `moisturizedAmount` 常量

    - 移除 `monsterEggStoneType` 常量

    - 移除 `multiFaceDirectionBits` 常量

    - 移除 `newLeafType` 常量

    - 移除 `newLogType` 常量

    - 移除 `noDropBit` 常量

    - 移除 `occupiedBit` 常量

    - 移除 `oldLeafType` 常量

    - 移除 `oldLogType` 常量

    - 移除 `openBit` 常量

    - 移除 `outputLitBit` 常量

    - 移除 `outputSubtractBit` 常量

    - 移除 `persistentBit` 常量

    - 移除 `pillarAxis` 常量

    - 移除 `portalAxis` 常量

    - 移除 `poweredBit` 常量

    - 移除 `prismarineBlockType` 常量

    - 移除 `propaguleStage` 常量

    - 移除 `railDataBit` 常量

    - 移除 `railDirection` 常量

    - 移除 `redstoneSignal` 常量

    - 移除 `repeaterDelay` 常量

    - 移除 `respawnAnchorCharge` 常量

    - 移除 `rotation` 常量

    - 移除 `sandStoneType` 常量

    - 移除 `sandType` 常量

    - 移除 `saplingType` 常量

    - 移除 `seaGrassType` 常量

    - 移除 `spongeType` 常量

    - 移除 `stability` 常量

    - 移除 `stabilityCheck` 常量

    - 移除 `stoneBrickType` 常量

    - 移除 `stoneSlabType` 常量

    - 移除 `stoneSlabType2` 常量

    - 移除 `stoneSlabType3` 常量

    - 移除 `stoneSlabType4` 常量

    - 移除 `stoneType` 常量

    - 移除 `strippedBit` 常量

    - 移除 `structureBlockType` 常量

    - 移除 `structureVoidType` 常量

    - 移除 `suspendedBit` 常量

    - 移除 `tallGrassType` 常量

    - 移除 `toggleBit` 常量

    - 移除 `topSlotBit` 常量

    - 移除 `torchFacingDirection` 常量

    - 移除 `triggeredBit` 常量

    - 移除 `turtleEggCount` 常量

    - 移除 `twistingVinesAge` 常量

    - 移除 `updateBit` 常量

    - 移除 `upperBlockBit` 常量

    - 移除 `upsideDownBit` 常量

    - 移除 `vineDirectionBits` 常量

    - 移除 `wallBlockType` 常量

    - 移除 `wallConnectionTypeEast` 常量

    - 移除 `wallConnectionTypeNorth` 常量

    - 移除 `wallConnectionTypeSouth` 常量

    - 移除 `wallConnectionTypeWest` 常量

    - 移除 `wallPostBit` 常量

    - 移除 `weepingVinesAge` 常量

    - 移除 `weirdoDirection` 常量

    - 移除 `woodType` 常量

    - 添加 `get` 函数

      ```typescript
      static get(propertyName: string): BlockPropertyType      
      ```

    - 添加 `getAll` 函数

      ```typescript
      static getAll(): BlockPropertyType[]      
      ```

- 添加 `BlockPropertyType` 类

  ```typescript
  export class BlockPropertyType {
    protected constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
  }
  ```

- `BlockType` 类更改

    - Removed function `createDefaultBlockPermutation`

- 移除 `BoolBlockProperty` 类

- `DirectionBlockProperty` 类更改

    - Removed base class `IBlockProperty`

- 移除 `IBlockProperty` 类

- 移除 `IntBlockProperty` 类

- `MinecraftBlockTypes` 类更改

    - 添加 `decoratedPot` 常量

      ```typescript
      static readonly decoratedPot: BlockType
      ```

    - 添加 `suspiciousSand` 常量

      ```typescript
      static readonly suspiciousSand: BlockType
      ```

    - 添加 `torchflower` 常量

      ```typescript
      static readonly torchflower: BlockType
      ```

    - 添加 `torchflowerCrop` 常量

      ```typescript
      static readonly torchflowerCrop: BlockType
      ```

- 移除 `StringBlockProperty` 类