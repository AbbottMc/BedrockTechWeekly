"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,s=u["".concat(o,".").concat(d)]||u[d]||N[d]||l;return a?n.createElement(s,m(m({ref:t},k),{},{components:a})):n.createElement(s,m({ref:t},k))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,m[1]=i;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},m=void 0,i={unversionedId:"changelog_source/stable/1.20/70-71/tech_sapi_exp",id:"changelog_source/stable/1.20/70-71/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Entity Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/70-71/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.20/70-71",slug:"/changelog_source/stable/1.20/70-71/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/1.20/70-71/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/70-71/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},o={},p=[],k={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entity Components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"EntityTypeFamilyComponent")," with functions\xa0",(0,r.kt)("em",{parentName:"li"},"getTypeFamilies(): string","[","]"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"hasTypeFamily(typeFamily: string): boolean")))),(0,r.kt)("li",{parentName:"ul"},"Item",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ItemFoodComponent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"matches(itemName: string, states?: Record\\<string, boolean | number | string",">","): boolean")))),(0,r.kt)("li",{parentName:"ul"},"Removed class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeUtils"),". Moving utility functions onto\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase_and\xa0_BlockVolume")),(0,r.kt)("li",{parentName:"ul"},"Added class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase"),". Is the base class from which block volumes will extend"),(0,r.kt)("li",{parentName:"ul"},"BlockVolume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Breaking Change:"),"Converted\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolume"),"\xa0from an interface to a class, which extends\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"@minecraft/server.Entity.playAnimation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved Entity.playAnimation from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"stable")))),(0,r.kt)("li",{parentName:"ul"},"Moved enum\xa0",(0,r.kt)("em",{parentName:"li"},"BlockPistonState")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockPistonComponent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta to 1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PistonActivateAfterEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PistonActivateAfterEventSignal")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta to 1.9.0")),(0,r.kt)("li",{parentName:"ul"},"ItemComponents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"isCooldownCategory(cooldownCategory: string) : boolean")," to ",(0,r.kt)("em",{parentName:"li"},"ItemCooldownComponent")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"getCooldownTimeRemaining(player: Player) : number")," to ",(0,r.kt)("em",{parentName:"li"},"ItemCooldownComponent")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"MinecraftCooldownCategoryTypes")," to ",(0,r.kt)("em",{parentName:"li"},"@minecraft/vanilla-data"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"getHiddenHudElements(): HudElements","[","]")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"isForcedHidden(hudElement: HudElements): Boolean")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"resetHudElements(): void")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"setHudVisibility(visible: HudVisibility, hudElements?: HudElements","[","]","): void")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"hideAllExcept(hudElements?: HudElements","[","]",")")))),(0,r.kt)("li",{parentName:"ul"},"Added interface ",(0,r.kt)("em",{parentName:"li"},"BlockFilter"),". Used to include / exclude blocks by tag, type and permutation"),(0,r.kt)("li",{parentName:"ul"},"BlockRaycastOptions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added optional member ",(0,r.kt)("em",{parentName:"li"},"BlockFilter")),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined")," to throw if the BlockFilter include / exclude types cannot be resolved inside ",(0,r.kt)("em",{parentName:"li"},"BlockRaycastOptions")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"ItemDurabilityComponent")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"Debug Utilities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Started publishing the debug utilities type information"),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("em",{parentName:"li"},"disableWatchdog")," method that lets you disable and enable the scripting watchdog in your scripts"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void")," - Plays a sound at a specified location for all players in the dimension"),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"getAllStates")," API from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"stable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"clearJob(jobId: number)")," - Will now clear iterations in the current tick as well as any scheduled for future ticks. Previously would only clear iterations in future ticks"))),(0,r.kt)("li",{parentName:"ul"},"@minecraft/server.WeatherChangeAfterEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"WeatherChangeAfterEvent")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"stable")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"setOnFire")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"extinguishFire")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"EntityOnFireComponent")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"getEquipmentSlot")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"BlockStateType")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"BlockStates")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"BlockSignComponent")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"DyeColor")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"SignSide")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"ContainerSlot")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"InvalidContainerSlotError")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"getSlot")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"EffectTypes")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"RawText")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"createExplosion")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"ExplosionOptions")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"DimensionType")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"DimensionTypes")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicProperty")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"structureManager")," ","-"," A\xa0",(0,r.kt)("em",{parentName:"li"},"StructureManager"),"\xa0instance that allows you to create, load and place structures in the world"),(0,r.kt)("li",{parentName:"ul"},"StructureManager",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate")," ","-"," Creates a new empty structure"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): StructureTemplate")," ","-"," Creates a new structure from blocks in the world"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"delete(structure: string | StructureTemplate): boolean")," ","-"," Deletes the structure"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"get(identifier: string): StructureTemplate | undefined")," ","-"," Gets the structure with the specified identifier"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"place(structure: string | StructureTemplate, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions)")," ","-"," Places a structure in the world"))),(0,r.kt)("li",{parentName:"ul"},"StructureTemplate",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"id: string"),"-"," Returns the name of the structure"),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"effectAdd")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removing function\xa0",(0,r.kt)("em",{parentName:"li"},"triggerEvent()")))),(0,r.kt)("li",{parentName:"ul"},"WorldBeforeEvents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removing property\xa0",(0,r.kt)("em",{parentName:"li"},"itemDefinitionEvent")))),(0,r.kt)("li",{parentName:"ul"},"WorldAfterEvents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removing property\xa0",(0,r.kt)("em",{parentName:"li"},"itemDefinitionEvent")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"explosion")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")))),(0,r.kt)("li",{parentName:"ul"},"WorldBeforeEvents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"explosion")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to\xa0",(0,r.kt)("em",{parentName:"li"},"1.9.0"))))))))))}u.isMDXComponent=!0}}]);