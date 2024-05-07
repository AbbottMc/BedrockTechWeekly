"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29568],{28878:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var s=l(74848),i=l(28453);const r={},d=void 0,t={id:"changelog_source/stable/1.20/80/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added BlockComponentStepOnEvent for beta",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/80/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.20/80",slug:"/changelog_source/stable/1.20/80/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/1.20/80/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/80/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},o=[];function h(e){const n={a:"a",em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentStepOnEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockRegistry"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"WorldInitializeBeforeEvent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockCustomComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Dimension:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume"})," - Gets the blocks in a volume if it matches the filter"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean"})," - Returns true if the block in volume matches the filter, false otherwise"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"ItemCooldownComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentStepOffEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"onStepOff"})," to ",(0,s.jsx)(n.em,{children:"BlockCustomComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentRandomTickEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"onRandomTick"})," to ",(0,s.jsx)(n.em,{children:"BlockCustomComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["StructureManager:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"getIds(): string"})," - Returns a list of identifiers including all structures saved to memory and the world"]}),"\n",(0,s.jsx)(n.li,{children:"Fixed a bug where the delete function would not remove structures that were previously saved to the world but not loaded"}),"\n",(0,s.jsxs)(n.li,{children:["Changed the default save mode of ",(0,s.jsx)(n.em,{children:"createEmpty"})," to ",(0,s.jsx)(n.em,{children:"Memory"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["EntityQueryOptions\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added field ",(0,s.jsx)(n.em,{children:"propertyOptions?: EntityQueryPropertyOptions[];"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["EntityQueryPropertyOptions\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added field ",(0,s.jsx)(n.em,{children:"exclude"})," - If exclude ",(0,s.jsx)(n.em,{children:"propertyId"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added field ",(0,s.jsx)(n.em,{children:"propertyId"})," - Property ID"]}),"\n",(0,s.jsxs)(n.li,{children:["Added field ",(0,s.jsx)(n.em,{children:"value"})," - Target value or comparison"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["EqualsComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"equals"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GreaterThanComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"greaterThan"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GreaterThanOrEqualsComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"greaterThanOrEquals"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["LessThanComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"lessThan"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["LessThanOrEqualsComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"lessThanOrEquals"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["NotEqualsComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"notEquals"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["RangeComparison\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"lowerBound"})," and ",(0,s.jsx)(n.em,{children:"upperBound"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"worldInitialize"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"EntityProjectileComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Removed old Vector Please use ",(0,s.jsx)(n.em,{children:"Vector3Utils"})," ",(0,s.jsx)(n.em,{children:"from @minecraft/math"})," as a replacement"]}),"\n",(0,s.jsxs)(n.li,{children:["ModalFormData\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"submitButton"})," method for setting the text of the form\u2019s submit button"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Structure APIs\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void"})," - Sets the block permutation at a given location within the structure"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["StructureManager\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"saveToWorld(): void"})," - Persists the structure as part of the broader world storage"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"saveAs(identifier: string, saveMode?: StructureSaveMode): Structure"})," - Saves a copy of the structure with a new identifier"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["EntityHitBlockAfterEvent\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added property ",(0,s.jsx)(n.em,{children:"hitBlockPermutation"})," to ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command"}),"\n",(0,s.jsxs)(n.li,{children:["Added class ",(0,s.jsx)(n.em,{children:"ListBlockVolume"})," which extends ",(0,s.jsx)(n.em,{children:"BaseBlockVolume"})," - A volume that stores multiple block locations"]}),"\n",(0,s.jsxs)(n.li,{children:["Structure\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Renamed class ",(0,s.jsx)(n.em,{children:"StructureTemplate"})," to ",(0,s.jsx)(n.em,{children:"Structure"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added read-only property ",(0,s.jsx)(n.em,{children:"size: Vector3"})," - Returns the size of the structure in blocks"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"getBlockPermutation(location: Vector3): BlockPermutation | undefined;"})," - Returns the block permutation at the given location within the structure"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"isValid(): boolean"})," - Returns false if the structure has been deleted"]}),"\n",(0,s.jsxs)(n.li,{children:["Added function ",(0,s.jsx)(n.em,{children:"getIsWaterlogged(location: Vector3): boolean;"})," - Returns whether the block at the given location is waterlogged"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added an optional ",(0,s.jsx)(n.em,{children:"SpawnEntityOptions"})," with a boolean ",(0,s.jsx)(n.em,{children:"initialPersistence"})," field to the ",(0,s.jsx)(n.em,{children:"spawnEntity(\u2026)"})," function to support persistent entities in Editor tooling"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"place"})," now places rotated structures the same way as the /structure command (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-179447",children:"MCPE-179447"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getItemStack(amount?: number, withData?: boolean): ItemStack | undefined"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getItemStack(amount?: number): ItemStack | undefined"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["EntityAgeableComponent\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added property ",(0,s.jsx)(n.em,{children:"transformToItem"})," to ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["EntityDefinitionFeedItem\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Updated property ",(0,s.jsx)(n.em,{children:"item"})," to return name with namespace in ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"EntityTypeFamilyComponent"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentTickEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018onTick\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentEntityFallOnEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018onEntityFallOn\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentPlayerPlaceBeforeEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018beforeOnPlayerPlace\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentPlayerInteractEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018onPlayerInteract\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentPlayerDestroyEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018onPlayerDestroy\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"BlockComponentOnPlaceEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added \u2018onPlace\u2019"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"ItemComponentRegistry"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"ItemCustomComponent"})," for ",(0,s.jsx)(n.em,{children:"beta"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"ItemComponentUseEvent"})," for ",(0,s.jsx)(n.em,{children:"beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"structureManager"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Structure Manager\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"createEmpty"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"delete"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"get"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"place"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"id"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.1.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getBlockPermutation"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"getIsWaterlogged"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"isValid"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructureSaveMode"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructureRotation"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructureAnimationMode"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructureMirrorAxis"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.em,{children:"StructureReadOptions"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructureCreateOptions"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"StructurePlaceOptions"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"InvalidStructureError"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n"]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>t});var s=l(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);