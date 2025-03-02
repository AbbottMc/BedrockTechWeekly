"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98027],{79743:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(74848),l=s(28453);const r={},t=void 0,d={id:"changelog_source/stable/1.21/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed a crash with\xa0getTagsmethod on\xa0Item Stack when called on the Air Block Item",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.21/20/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.21/20",slug:"/changelog_source/stable/1.21/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/stable/1.21/20/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.21/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},o=[];function m(e){const n={em:"em",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed a crash with\xa0_getTags_method on\xa0",(0,i.jsx)(n.em,{children:"Item Stack"})," when called on the Air Block Item"]}),"\n",(0,i.jsxs)(n.li,{children:["Dimension\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released method\xa0",(0,i.jsx)(n.em,{children:"getTopmostBlock"})," from\xa0",(0,i.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.em,{children:"1.13.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released interface\xa0",(0,i.jsx)(n.em,{children:"VectorXZ"})," from\xa0",(0,i.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.em,{children:"1.13.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed a bug that prevented ",(0,i.jsx)(n.em,{children:"get"})," and ",(0,i.jsx)(n.em,{children:"StructureManager.place"})," from loading structures stored in the root of the structures directory"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"MinecraftItemTypes"})," no longer contains old item names"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed bug that caused the game to crash when executing a run command from the ",(0,i.jsx)(n.em,{children:"runCommand()"})," and ",(0,i.jsx)(n.em,{children:"Dimension.runCommandAsync()"})," scripting APIs"]}),"\n",(0,i.jsxs)(n.li,{children:["Potions\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added class ",(0,i.jsx)(n.em,{children:"Potions"})," which contains helpers for retrieving handles to potion associated types"]}),"\n",(0,i.jsxs)(n.li,{children:["Added class ",(0,i.jsx)(n.em,{children:"PotionEffectType"})," which is a potion effect type handle associated with ",(0,i.jsx)(n.em,{children:"MinecraftPotionEffectTypes"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added class ",(0,i.jsx)(n.em,{children:"PotionModifierType"})," which is a potion modifier type handle associated with ",(0,i.jsx)(n.em,{children:"MinecraftPotionModifierTypes"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added class ",(0,i.jsx)(n.em,{children:"PotionLiquidType"})," which is a potion type handle associated with ",(0,i.jsx)(n.em,{children:"MinecraftPotionLiquidTypes"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added class ",(0,i.jsx)(n.em,{children:"ItemPotionComponent"})," which can be obtained from a valid potion ",(0,i.jsx)(n.em,{children:"ItemStack"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added interface ",(0,i.jsx)(n.em,{children:"PotionOptions"})," for use in ",(0,i.jsx)(n.em,{children:"createPotion"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added function ",(0,i.jsx)(n.em,{children:"createPotion"})," for creating valid potion items"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Vanilla-Data\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added enum ",(0,i.jsx)(n.em,{children:"MinecraftPotionLiquidTypes"})," containing potion liquid IDs"]}),"\n",(0,i.jsxs)(n.li,{children:["Added enum ",(0,i.jsx)(n.em,{children:"MinecraftPotionEffectTypes"})," containing potion effect IDs"]}),"\n",(0,i.jsxs)(n.li,{children:["Added enum ",(0,i.jsx)(n.em,{children:"MinecraftPotionModifierTypes"})," containing potion modifier IDs"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["BlockExplodeAfterEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"BlockExplodeAfterEvent"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"BlockExplodeAfterEventSignal"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"blockExplode"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"ItemTypes"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"InputPermissionCategory"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"PlayerInputPermissions"})," and ",(0,i.jsx)(n.em,{children:"inputPermissions"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"PlayerInputPermissionCategoryChangeAfterEvent"})," and ",(0,i.jsx)(n.em,{children:"afterEvents.playerInputPermissionCategoryChanged"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added bound check for ",(0,i.jsx)(n.em,{children:"setCurrentValue"}),". The provided value will be clamped to the range of this attribute"]}),"\n",(0,i.jsxs)(n.li,{children:["GameRules\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"ShowDaysPlayed"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"showDaysPlayed"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnchantmentTypes\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"getAll(): EnchantmentType[]"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityRaycastOptions\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"ignoreBlockCollision"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"includeLiquidBlocks"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"includePassableBlocks"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"hitBlockPermutation"})," member of ",(0,i.jsx)(n.em,{children:"EntityHitBlockAfterEvent"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Released ",(0,i.jsx)(n.em,{children:"beta"})," version of ",(0,i.jsx)(n.em,{children:"addEffect"})," method on ",(0,i.jsx)(n.em,{children:"Entity"})," to ",(0,i.jsx)(n.em,{children:"1.3.0"}),", which adds a return type for the newly created effect (or undefined if no effect was added)"]}),"\n",(0,i.jsx)(n.li,{children:"BlockRecordPlayerComponent"}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.em,{children:"UIManager"})," class and ",(0,i.jsx)(n.em,{children:"uiManager"})," object to ",(0,i.jsx)(n.em,{children:"@minecraft/server-ui"})," beta\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Renamed the componentId to ",(0,i.jsx)(n.em,{children:"minecraft:record_player"})," for consistency"]}),"\n",(0,i.jsxs)(n.li,{children:["Added methods ",(0,i.jsx)(n.em,{children:"getRecord"}),", ",(0,i.jsx)(n.em,{children:"ejectRecord"}),", ",(0,i.jsx)(n.em,{children:"pauseRecord"})," and ",(0,i.jsx)(n.em,{children:"playRecord"})]}),"\n",(0,i.jsxs)(n.li,{children:["Removed method ",(0,i.jsx)(n.em,{children:"clearRecord"}),", instead you should now pass undefined to ",(0,i.jsx)(n.em,{children:"setRecord"})," to reset it"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed property ",(0,i.jsx)(n.em,{children:"readonly getLifetimeState: EntityLifetimeState"})," from ",(0,i.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed enum ",(0,i.jsx)(n.em,{children:"EntityLifetimeState"})," from ",(0,i.jsx)(n.em,{children:"beta"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Move ",(0,i.jsx)(n.em,{children:"setBlockPermutation(location: Vector3, permutation: BlockPermutation): void"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Move ",(0,i.jsx)(n.em,{children:"setBlockType(location: Vector3, blockType: BlockType | string): void"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Moved ",(0,i.jsx)(n.em,{children:"getTags(): string[]"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Moved ",(0,i.jsx)(n.em,{children:"hasTag(tag: string): boolean"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Removed property ",(0,i.jsx)(n.em,{children:"readonly fallDistance: number"})," from ",(0,i.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Released WorldInitializeBeforeEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released WorldInitializeBeforeEventSignal from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Custom Components\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentRegistry from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemCustomComponent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentBeforeDurabilityDamageEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentCompleteUseEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentConsumeEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentHitEntityEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentMineBlockEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentUseEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released ItemComponentUseOnEvent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Moved EntityTameableComponent from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})," with properties getTameItems, isTamed, probability, tamedToPlayer, tamedToPlayerId and function tame"]}),"\n",(0,i.jsxs)(n.li,{children:["Moved ",(0,i.jsx)(n.em,{children:"EntityAgeableComponent"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})," with properties ",(0,i.jsx)(n.em,{children:"duration"}),", ",(0,i.jsx)(n.em,{children:"growUp"}),", ",(0,i.jsx)(n.em,{children:"transformToItem"})," and function ",(0,i.jsx)(n.em,{children:"getDropItems"}),", ",(0,i.jsx)(n.em,{children:"getFeedItems"}),", ",(0,i.jsx)(n.em,{children:"EntityDefinitionFeedItem"}),", ",(0,i.jsx)(n.em,{children:"Trigger"})]}),"\n",(0,i.jsx)(n.li,{children:"Fixed an issue where a warning would incorrectly appear when reloading item custom components"}),"\n",(0,i.jsxs)(n.li,{children:["EntityTameMountComponent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved method tameToPlayer and readonly properties tamedToPlayerId, tamedToPlayer, isTamed, isTamedToPlayer from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Released runJob method on System from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released clearJob method on System from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released waitTicks method on System from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["@minecraft/server-ui\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released version ",(0,i.jsx)(n.em,{children:"1.2.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added new ",(0,i.jsx)(n.em,{children:"beta"})," version ",(0,i.jsx)(n.em,{children:"1.3.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Released submitButton method on ModalFormData from ",(0,i.jsx)(n.em,{children:"beta"})," to ",(0,i.jsx)(n.em,{children:"1.2.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityLeashableComponent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved class\xa0",(0,i.jsx)(n.em,{children:"EntityLeashableComponent"})," from ",(0,i.jsx)(n.em,{children:"beta"})," to\xa0",(0,i.jsx)(n.em,{children:"1.13.0"})]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);