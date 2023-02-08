"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=m(a),N=p,s=k["".concat(o,".").concat(N)]||k[N]||d[N]||r;return a?n.createElement(s,l(l({ref:t},c),{},{components:a})):n.createElement(s,l({ref:t},c))}));function s(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,l=new Array(r);l[0]=N;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:p,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(7462),p=(a(7294),a(3905));const r={},l=void 0,i={unversionedId:"changelog_source/preview/1.19.70.22/tech",id:"changelog_source/preview/1.19.70.22/tech",title:"tech",description:"Commands",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.22/tech.md",sourceDirName:"changelog_source/preview/1.19.70.22",slug:"/changelog_source/preview/1.19.70.22/tech",permalink:"/en/docs/changelog_source/preview/1.19.70.22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.22/tech.md",tags:[],version:"current",frontMatter:{}},o={},m=[{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data-driven</strong>",id:"data-driven",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Changed module <code>@minecraft/server@1.1.0-beta</code>",id:"changed-module-minecraftserver110-beta",level:3}],c={toc:m};function k(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"commands"},(0,p.kt)("strong",{parentName:"h2"},"Commands")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Summon command no longer causes some entities to be spawned in at an angle")),(0,p.kt)("h2",{id:"data-driven"},(0,p.kt)("strong",{parentName:"h2"},"Data-driven")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fixed an issue where Entity Property value changes could be discarded if done by events fired as part of removal of active behaviors caused by other events")),(0,p.kt)("h2",{className:"experimental_divider"},"Experimental Technical Features"),(0,p.kt)("h2",{id:"script-api"},(0,p.kt)("strong",{parentName:"h2"},"Script API")),(0,p.kt)("h3",{id:"changed-module-minecraftserver110-beta"},"Changed module ",(0,p.kt)("inlineCode",{parentName:"h3"},"@minecraft/server@1.1.0-beta")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BeforeExplosionEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"impactedBlocks"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getImpactedBlocks")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getImpactedBlocks(): Vector3[]      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"setImpactedBlocks")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setImpactedBlocks(blocks: Vector3[]): void      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BeforeItemUseOnEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"blockLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getBlockLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getBlockLocation(): Vector3      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockInventoryComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockLavaContainerComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockPistonComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"attachedBlocks"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"location"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getAttachedBlocks")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getAttachedBlocks(): Vector3[]      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockPotionContainerComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockRecordPlayerComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockSignComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockSnowContainerComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"BlockWaterContainerComponent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"li"},"location")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ContainerSlot")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"isStackable")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly isStackable: boolean\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"keepOnDeath")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"keepOnDeath: boolean\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"lockMode")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"lockMode: ItemLockMode\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"maxAmount")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly maxAmount: number\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"type")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly type: ItemType\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"clone")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clone(): ItemStack      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"isStackableWith")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"isStackableWith(itemStack: ItemStack): boolean      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"setCanDestroy")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setCanDestroy(blockIdentifiers?: string[]): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"setCanPlaceOn")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setCanPlaceOn(blockIdentifiers?: string[]): void      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"Entity")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"headLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"applyImpulse")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"applyImpulse(vector: Vector3): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"applyKnockback")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"clearVelocity")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clearVelocity(): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getHeadLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getHeadLocation(): Vector3      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed function ",(0,p.kt)("inlineCode",{parentName:"p"},"setVelocity"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ExplosionEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"impactedBlocks"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getImpactedBlocks")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getImpactedBlocks(): Vector3[]      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ItemStack")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"isStackable")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly isStackable: boolean\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"keepOnDeath")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"keepOnDeath: boolean\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"lockMode")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"lockMode: ItemLockMode\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"maxAmount")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly maxAmount: number\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added property ",(0,p.kt)("inlineCode",{parentName:"p"},"type")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly type: ItemType\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"clone")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clone(): ItemStack      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"isStackableWith")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"isStackableWith(itemStack: ItemStack): boolean      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"setCanDestroy")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setCanDestroy(blockIdentifiers?: string[]): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"setCanPlaceOn")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setCanPlaceOn(blockIdentifiers?: string[]): void      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ItemStartUseOnEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"blockLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"buildBlockLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getBlockLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getBlockLocation(): Vector3      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getBuildBlockLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getBuildBlockLocation(): Vector3      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ItemStopUseOnEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"blockLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getBlockLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getBlockLocation(): Vector3      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"ItemUseOnEvent")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"blockLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getBlockLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getBlockLocation(): Vector3      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"NavigationResult")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"path"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getPath")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getPath(): Vector3[]      \n"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Changed class ",(0,p.kt)("inlineCode",{parentName:"p"},"Player")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed property ",(0,p.kt)("inlineCode",{parentName:"p"},"headLocation"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"applyImpulse")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"applyImpulse(vector: Vector3): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"applyKnockback")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"clearVelocity")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clearVelocity(): void      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added function ",(0,p.kt)("inlineCode",{parentName:"p"},"getHeadLocation")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getHeadLocation(): Vector3      \n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Removed function ",(0,p.kt)("inlineCode",{parentName:"p"},"setVelocity"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added enum ",(0,p.kt)("inlineCode",{parentName:"p"},"ItemLockMode")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum ItemLockMode {\n  inventory = "inventory",\n  none = "none",\n  slot = "slot"\n}\n')))))}k.isMDXComponent=!0}}]);