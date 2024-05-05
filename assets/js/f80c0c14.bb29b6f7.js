"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66250],{81840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=i(74848),l=i(28453);const r={},t=void 0,d={id:"changelog_source/stable/1.20/70-71/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Entity Components",source:"@site/docs/changelog_source/stable/1.20/70-71/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.20/70-71",slug:"/changelog_source/stable/1.20/70-71/tech_sapi_exp",permalink:"/docs/changelog_source/stable/1.20/70-71/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/70-71/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},o=[];function h(e){const n={em:"em",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Entity Components\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added\xa0",(0,s.jsx)(n.em,{children:"EntityTypeFamilyComponent"})," with functions\xa0",(0,s.jsx)(n.em,{children:"getTypeFamilies(): string[]"}),"\xa0and\xa0",(0,s.jsx)(n.em,{children:"hasTypeFamily(typeFamily: string): boolean"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Item\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"ItemFoodComponent"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"matches(itemName: string, states?: Record<string, boolean | number | string>): boolean"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Removed class\xa0",(0,s.jsx)(n.em,{children:"BlockVolumeUtils"}),". Moving utility functions onto\xa0_BlockVolumeBase_and\xa0",(0,s.jsx)(n.em,{children:"BlockVolume"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added class\xa0",(0,s.jsx)(n.em,{children:"BlockVolumeBase"}),". Is the base class from which block volumes will extend"]}),"\n",(0,s.jsxs)(n.li,{children:["BlockVolume\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["**Breaking Change:**Converted\xa0",(0,s.jsx)(n.em,{children:"BlockVolume"}),"\xa0from an interface to a class, which extends\xa0",(0,s.jsx)(n.em,{children:"BlockVolumeBase"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"@minecraft/server.Entity.playAnimation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved Entity.playAnimation from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"stable"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved enum\xa0",(0,s.jsx)(n.em,{children:"BlockPistonState"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved class\xa0",(0,s.jsx)(n.em,{children:"BlockPistonComponent"})," from\xa0",(0,s.jsx)(n.em,{children:"beta to 1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved class\xa0",(0,s.jsx)(n.em,{children:"PistonActivateAfterEvent"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved class\xa0",(0,s.jsx)(n.em,{children:"PistonActivateAfterEventSignal"})," from\xa0",(0,s.jsx)(n.em,{children:"beta to 1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["ItemComponents\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"isCooldownCategory(cooldownCategory: string) : boolean"})," to ",(0,s.jsx)(n.em,{children:"ItemCooldownComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"getCooldownTimeRemaining(player: Player) : number"})," to ",(0,s.jsx)(n.em,{children:"ItemCooldownComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"MinecraftCooldownCategoryTypes"})," to ",(0,s.jsx)(n.em,{children:"@minecraft/vanilla-data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"getHiddenHudElements(): HudElements[]"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"isForcedHidden(hudElement: HudElements): Boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"resetHudElements(): void"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"setHudVisibility(visible: HudVisibility, hudElements?: HudElements[]): void"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"hideAllExcept(hudElements?: HudElements[])"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added interface ",(0,s.jsx)(n.em,{children:"BlockFilter"}),". Used to include / exclude blocks by tag, type and permutation"]}),"\n",(0,s.jsxs)(n.li,{children:["BlockRaycastOptions\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added optional member ",(0,s.jsx)(n.em,{children:"BlockFilter"})]}),"\n",(0,s.jsxs)(n.li,{children:["Updated ",(0,s.jsx)(n.em,{children:"getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined"})," to throw if the BlockFilter include / exclude types cannot be resolved inside ",(0,s.jsx)(n.em,{children:"BlockRaycastOptions"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"ItemDurabilityComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Debug Utilities\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Started publishing the debug utilities type information"}),"\n",(0,s.jsxs)(n.li,{children:["Added a ",(0,s.jsx)(n.em,{children:"disableWatchdog"})," method that lets you disable and enable the scripting watchdog in your scripts"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void"})," - Plays a sound at a specified location for all players in the dimension"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getAllStates"})," API from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"stable"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"clearJob(jobId: number)"})," - Will now clear iterations in the current tick as well as any scheduled for future ticks. Previously would only clear iterations in future ticks"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["@minecraft/server.WeatherChangeAfterEvent\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"WeatherChangeAfterEvent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"stable"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"setOnFire"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"extinguishFire"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"EntityOnFireComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getEquipmentSlot"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"BlockStateType"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"BlockStates"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"BlockSignComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"DyeColor"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"SignSide"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"ContainerSlot"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"InvalidContainerSlotError"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getSlot"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"EffectTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"RawText"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"createExplosion"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"ExplosionOptions"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"DimensionType"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"DimensionTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"setDynamicProperty"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"getDynamicProperty"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"getDynamicPropertyIds"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"getDynamicPropertyTotalByteCount"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"clearDynamicProperties"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added\xa0",(0,s.jsx)(n.em,{children:"structureManager"})," - A\xa0",(0,s.jsx)(n.em,{children:"StructureManager"}),"\xa0instance that allows you to create, load and place structures in the world"]}),"\n",(0,s.jsxs)(n.li,{children:["StructureManager\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate"})," - Creates a new empty structure"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): StructureTemplate"})," - Creates a new structure from blocks in the world"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"delete(structure: string | StructureTemplate): boolean"})," - Deletes the structure"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"get(identifier: string): StructureTemplate | undefined"})," - Gets the structure with the specified identifier"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function\xa0",(0,s.jsx)(n.em,{children:"place(structure: string | StructureTemplate, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions)"})," - Places a structure in the world"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["StructureTemplate\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added read-only property\xa0",(0,s.jsx)(n.em,{children:"id: string"}),"- Returns the name of the structure"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"effectAdd"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removing function\xa0",(0,s.jsx)(n.em,{children:"triggerEvent()"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["WorldBeforeEvents\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removing property\xa0",(0,s.jsx)(n.em,{children:"itemDefinitionEvent"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["WorldAfterEvents\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removing property\xa0",(0,s.jsx)(n.em,{children:"itemDefinitionEvent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"explosion"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["WorldBeforeEvents\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved\xa0",(0,s.jsx)(n.em,{children:"explosion"})," from\xa0",(0,s.jsx)(n.em,{children:"beta"})," to\xa0",(0,s.jsx)(n.em,{children:"1.9.0"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);