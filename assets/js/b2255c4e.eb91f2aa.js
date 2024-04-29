"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[71581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,k=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/stable/1.20/60/tech_sapi_exp",id:"changelog_source/stable/1.20/60/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PlayerPlaceBlockBeforeEvent",source:"@site/docs/changelog_source/stable/1.20/60/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.20/60",slug:"/changelog_source/stable/1.20/60/tech_sapi_exp",permalink:"/docs/changelog_source/stable/1.20/60/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/60/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PlayerPlaceBlockBeforeEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed\xa0_itemStack: ItemStack_from event"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0_readonly permutationBeingPlaced: BlockPermutation_to event"),(0,r.kt)("li",{parentName:"ul"},"Updating\xa0_createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)_to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled"))),(0,r.kt)("li",{parentName:"ul"},"Class Player"),(0,r.kt)("li",{parentName:"ul"},"Added method\xa0",(0,r.kt)("em",{parentName:"li"},"spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error"),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"SimulatedPlayer")," so it can continuously build"),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"SimulatedPlayer")," so it can Move and look in different directions"),(0,r.kt)("li",{parentName:"ul"},"ChatSendAfter & ChatSendBeforeEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"message")," and\xa0",(0,r.kt)("em",{parentName:"li"},"sender"),"\xa0to read-only properties"),(0,r.kt)("li",{parentName:"ul"},"Removed\xa0",(0,r.kt)("em",{parentName:"li"},"setTargets"),",\xa0",(0,r.kt)("em",{parentName:"li"},"getTargets"),",\xa0",(0,r.kt)("em",{parentName:"li"},"sendToTargets_and replaced with an optional player list property\xa0_targets")))),(0,r.kt)("li",{parentName:"ul"},"Class ItemDurabilityComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"unbreaking")," to ",(0,r.kt)("em",{parentName:"li"},"unbreakingEnchantmentLevel")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"getDamageRange")," to ",(0,r.kt)("em",{parentName:"li"},"getDamageChanceRange")))),(0,r.kt)("li",{parentName:"ul"},"EntityTypes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"getAll_return type from\xa0_EntityTypeIterator"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"EntityType","[","]")))),(0,r.kt)("li",{parentName:"ul"},"EntityEquippableComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where functions ",(0,r.kt)("em",{parentName:"li"},"getEquipment")," and ",(0,r.kt)("em",{parentName:"li"},"getEquipmentSlot"),' could not be called within "before" event handlers'))),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where an ItemStack could not be stacked after clearing its lore"),(0,r.kt)("li",{parentName:"ul"},"Added method\xa0",(0,r.kt)("em",{parentName:"li"},"eatItem(itemStack: ItemStack): void;")),(0,r.kt)("li",{parentName:"ul"},"BlockSignComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed signature of function\xa0",(0,r.kt)("em",{parentName:"li"},"setWaxed_to\xa0_setWaxed(waxed: boolean)")),(0,r.kt)("li",{parentName:"ul"},"Removed event/property\xa0",(0,r.kt)("em",{parentName:"li"},"pistonActivate")))),(0,r.kt)("li",{parentName:"ul"},"Added enum ",(0,r.kt)("em",{parentName:"li"},'BlockPistonState export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting" }')),(0,r.kt)("li",{parentName:"ul"},"Class BlockPistonComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property ",(0,r.kt)("em",{parentName:"li"},"isExpanded")),(0,r.kt)("li",{parentName:"ul"},"Removed property ",(0,r.kt)("em",{parentName:"li"},"isExpanding")),(0,r.kt)("li",{parentName:"ul"},"Removed property ",(0,r.kt)("em",{parentName:"li"},"isRetracted")),(0,r.kt)("li",{parentName:"ul"},"Removed property ",(0,r.kt)("em",{parentName:"li"},"isRetracting")),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"readonly state: BlockPistonState")),(0,r.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,r.kt)("em",{parentName:"li"},"getAttachedBlocks_to return type\xa0_Block","[","]")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getAttachedBlocksLocations(): Vector3","[","]")))),(0,r.kt)("li",{parentName:"ul"},"Removed class ",(0,r.kt)("em",{parentName:"li"},"PistonActivateBeforeEvent")),(0,r.kt)("li",{parentName:"ul"},"Removed class ",(0,r.kt)("em",{parentName:"li"},"PistonActivateBeforeEventSignal")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"NavigationResult_from\xa0"),"@minecraft/server",(0,r.kt)("em",{parentName:"li"},"\xa0to\xa0"),"@minecraft/server-gametest_"),(0,r.kt)("li",{parentName:"ul"},"Updated function\xa0",(0,r.kt)("em",{parentName:"li"},"addEffect")," to return the added effect (or undefined if it failed)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This change is in beta and does not affect the currently released versions of this function"))),(0,r.kt)("li",{parentName:"ul"},"Added item dynamic properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties(): void")," ","-"," Removes all dynamic properties from the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined")," ","-"," Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds(): string","[","]")," ","-"," Returns an array of all dynamic property identifiers on the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount(): number")," ","-"," Returns the total byte count of all dynamic properties on the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void")," ","-"," Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties(): void")," ","-"," Removes all dynamic properties from the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined")," ","-"," Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds(): string","[","]")," ","-"," Returns an array of all dynamic property identifiers on the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount(): number")," ","-"," Returns the total byte count of all dynamic properties on the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void")," ","-"," Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"))),(0,r.kt)("li",{parentName:"ul"},"Added class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityProjectileComponent"),". This component is used to shoot a projectile entity and modify its properties"),(0,r.kt)("li",{parentName:"ul"},"Added interface\xa0",(0,r.kt)("em",{parentName:"li"},"ProjectileShootOptions"),". This interface is used with function\xa0_shoot_to optionally modify the accuracy of the projectile when shot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"PropertyOutOfBoundsError"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added a new ",(0,r.kt)("em",{parentName:"li"},"PropertyOutOfBoundsError")," that throws when a property that is bounded is set out of bounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ContainerSlot")," APIs now throw an ",(0,r.kt)("em",{parentName:"li"},"InvalidContainerSlotError")," if the container slot is invalid, or if a property is set on an empty slot"),(0,r.kt)("li",{parentName:"ul"},"Property ",(0,r.kt)("em",{parentName:"li"},"typeId")," no longer returns undefined for empty slots, but instead throws an ",(0,r.kt)("em",{parentName:"li"},"InvalidContainerSlotError")),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"hasItem")," ","-"," Returns whether the slot contains an item"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getCanPlaceOn")," ","-"," Returns an array of block identifiers that the item can be placed on"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getCanDestroy")," ","-"," Returns an array of block identifiers that the item can destroy when used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"runJob()")," and ",(0,r.kt)("em",{parentName:"li"},"system.clearJob()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"runJob")," and ",(0,r.kt)("em",{parentName:"li"},"clearJob")," for optimizing long running tasks using JavaScript generators. ",(0,r.kt)("em",{parentName:"li"},"runJob")," takes a generator function and returns a ",(0,r.kt)("em",{parentName:"li"},"jobId"),". See documentation for usage examples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"@minecraft/server.BlockPermutation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("em",{parentName:"li"},"getState")," and ",(0,r.kt)("em",{parentName:"li"},"withStates")," APIs from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"stable"))))))}s.isMDXComponent=!0}}]);