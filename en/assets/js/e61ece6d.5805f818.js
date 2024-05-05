"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86726],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>N});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},y=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),g=p(a),d=n,N=g["".concat(o,".").concat(d)]||g[d]||u[d]||l;return a?r.createElement(N,m(m({ref:t},y),{},{components:a})):r.createElement(N,m({ref:t},y))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,m=new Array(l);m[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:n,m[1]=i;for(var p=2;p<l;p++)m[p]=a[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={},m=void 0,i={unversionedId:"changelog_source/stable/Armored Paws.undefined/tech_sapi_exp",id:"changelog_source/stable/Armored Paws.undefined/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added BlockComponentStepOnEvent for beta",source:"@site/docs/changelog_source/stable/Armored Paws.undefined/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/Armored Paws.undefined",slug:"/changelog_source/stable/Armored Paws.undefined/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/Armored Paws.undefined/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/Armored Paws.undefined/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},o={},p=[],y={toc:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentStepOnEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockRegistry")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"WorldInitializeBeforeEvent")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockCustomComponent")),(0,n.yg)("li",{parentName:"ul"},"Dimension:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume")," - Gets the blocks in a volume if it matches the filter"),(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean")," - Returns true if the block in volume matches the filter, false otherwise"))),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"ItemCooldownComponent")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentStepOffEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"onStepOff")," to ",(0,n.yg)("em",{parentName:"li"},"BlockCustomComponent")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentRandomTickEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"onRandomTick")," to ",(0,n.yg)("em",{parentName:"li"},"BlockCustomComponent")),(0,n.yg)("li",{parentName:"ul"},"StructureManager:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"getIds(): string")," - Returns a list of identifiers including all structures saved to memory and the world"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug where the delete function would not remove structures that were previously saved to the world but not loaded"),(0,n.yg)("li",{parentName:"ul"},"Changed the default save mode of ",(0,n.yg)("em",{parentName:"li"},"createEmpty")," to ",(0,n.yg)("em",{parentName:"li"},"Memory")))),(0,n.yg)("li",{parentName:"ul"},"EntityQueryOptions",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added field ",(0,n.yg)("em",{parentName:"li"},"propertyOptions?: EntityQueryPropertyOptions","[","]",";")))),(0,n.yg)("li",{parentName:"ul"},"EntityQueryPropertyOptions",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added field ",(0,n.yg)("em",{parentName:"li"},"exclude")," - If exclude ",(0,n.yg)("em",{parentName:"li"},"propertyId")),(0,n.yg)("li",{parentName:"ul"},"Added field ",(0,n.yg)("em",{parentName:"li"},"propertyId")," - Property ID"),(0,n.yg)("li",{parentName:"ul"},"Added field ",(0,n.yg)("em",{parentName:"li"},"value")," - Target value or comparison"))),(0,n.yg)("li",{parentName:"ul"},"EqualsComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"equals")))),(0,n.yg)("li",{parentName:"ul"},"GreaterThanComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"greaterThan")))),(0,n.yg)("li",{parentName:"ul"},"GreaterThanOrEqualsComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"greaterThanOrEquals")))),(0,n.yg)("li",{parentName:"ul"},"LessThanComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"lessThan")))),(0,n.yg)("li",{parentName:"ul"},"LessThanOrEqualsComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"lessThanOrEquals")))),(0,n.yg)("li",{parentName:"ul"},"NotEqualsComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"notEquals")))),(0,n.yg)("li",{parentName:"ul"},"RangeComparison",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"lowerBound")," and ",(0,n.yg)("em",{parentName:"li"},"upperBound")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"worldInitialize")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")))),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"EntityProjectileComponent")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Removed old Vector Please use ",(0,n.yg)("em",{parentName:"li"},"Vector3Utils")," ",(0,n.yg)("em",{parentName:"li"},"from @minecraft/math")," as a replacement"),(0,n.yg)("li",{parentName:"ul"},"ModalFormData",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"submitButton")," method for setting the text of the form\u2019s submit button"))),(0,n.yg)("li",{parentName:"ul"},"Structure APIs",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void")," - Sets the block permutation at a given location within the structure"))),(0,n.yg)("li",{parentName:"ul"},"StructureManager",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"saveToWorld(): void")," - Persists the structure as part of the broader world storage"),(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"saveAs(identifier: string, saveMode?: StructureSaveMode): Structure")," - Saves a copy of the structure with a new identifier"))),(0,n.yg)("li",{parentName:"ul"},"EntityHitBlockAfterEvent",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added property ",(0,n.yg)("em",{parentName:"li"},"hitBlockPermutation")," to ",(0,n.yg)("em",{parentName:"li"},"beta")))),(0,n.yg)("li",{parentName:"ul"},"Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command"),(0,n.yg)("li",{parentName:"ul"},"Added class ",(0,n.yg)("em",{parentName:"li"},"ListBlockVolume")," which extends ",(0,n.yg)("em",{parentName:"li"},"BaseBlockVolume")," - A volume that stores multiple block locations"),(0,n.yg)("li",{parentName:"ul"},"Structure",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Renamed class ",(0,n.yg)("em",{parentName:"li"},"StructureTemplate")," to ",(0,n.yg)("em",{parentName:"li"},"Structure")),(0,n.yg)("li",{parentName:"ul"},"Added read-only property ",(0,n.yg)("em",{parentName:"li"},"size: Vector3")," - Returns the size of the structure in blocks"),(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"getBlockPermutation(location: Vector3): BlockPermutation | undefined;")," - Returns the block permutation at the given location within the structure"),(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"isValid(): boolean")," - Returns false if the structure has been deleted"),(0,n.yg)("li",{parentName:"ul"},"Added function ",(0,n.yg)("em",{parentName:"li"},"getIsWaterlogged(location: Vector3): boolean;")," - Returns whether the block at the given location is waterlogged"))),(0,n.yg)("li",{parentName:"ul"},"Added an optional ",(0,n.yg)("em",{parentName:"li"},"SpawnEntityOptions")," with a boolean ",(0,n.yg)("em",{parentName:"li"},"initialPersistence")," field to the ",(0,n.yg)("em",{parentName:"li"},"spawnEntity(\u2026)")," function to support persistent entities in Editor tooling"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"place")," now places rotated structures the same way as the /structure command (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179447"},"MCPE-179447"),")"),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"getItemStack(amount?: number, withData?: boolean): ItemStack | undefined")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"getItemStack(amount?: number): ItemStack | undefined")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"EntityAgeableComponent",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added property ",(0,n.yg)("em",{parentName:"li"},"transformToItem")," to ",(0,n.yg)("em",{parentName:"li"},"beta")))),(0,n.yg)("li",{parentName:"ul"},"EntityDefinitionFeedItem",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Updated property ",(0,n.yg)("em",{parentName:"li"},"item")," to return name with namespace in ",(0,n.yg)("em",{parentName:"li"},"beta")))),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"EntityTypeFamilyComponent")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentTickEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018onTick\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentEntityFallOnEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018onEntityFallOn\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentPlayerPlaceBeforeEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018beforeOnPlayerPlace\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentPlayerInteractEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018onPlayerInteract\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentPlayerDestroyEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018onPlayerDestroy\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockComponentOnPlaceEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added \u2018onPlace\u2019"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"ItemComponentRegistry")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"ItemCustomComponent")," for ",(0,n.yg)("em",{parentName:"li"},"beta")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"ItemComponentUseEvent")," for ",(0,n.yg)("em",{parentName:"li"},"beta"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"structureManager")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")))),(0,n.yg)("li",{parentName:"ul"},"Structure Manager",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"createEmpty")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"delete")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"get")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"place")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"id")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.1.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"getBlockPermutation")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"getIsWaterlogged")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"isValid")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")))),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructureSaveMode")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructureRotation")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructureAnimationMode")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructureMirrorAxis")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Removed ",(0,n.yg)("em",{parentName:"li"},"StructureReadOptions")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructureCreateOptions")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"StructurePlaceOptions")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0")),(0,n.yg)("li",{parentName:"ul"},"Moved ",(0,n.yg)("em",{parentName:"li"},"InvalidStructureError")," from ",(0,n.yg)("em",{parentName:"li"},"beta")," to ",(0,n.yg)("em",{parentName:"li"},"1.10.0"))))}u.isMDXComponent=!0}}]);