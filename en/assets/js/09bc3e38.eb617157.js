"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[93614],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=m(a),u=r,d=y["".concat(p,".").concat(u)]||y[u]||g[u]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/tech_sapi_exp",id:"changelog_source/preview/1.19/70/22/tech_sapi_exp",title:"tech_sapi_exp",description:"Replaced general setVelocity call with methods to apply impulses to entities:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},p={},m=[],c={toc:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Replaced general ",(0,r.yg)("em",{parentName:"p"},"setVelocity")," call with methods to apply impulses to entities:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"clearVelocity(): void"),"-"," Sets the current velocity of the Entity to zero"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"applyImpulse(vector: Vector3): void"),"-"," Applies impulse vector to the current velocity of the Entity"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"function"),"\xa0",(0,r.yg)("em",{parentName:"li"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void"),"-"," Applies knockback to the Entity in specified direction based on vertical and horizontal strength"),(0,r.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,r.yg)("em",{parentName:"li"},"setVelocity"))),(0,r.yg)("p",null,"General changes to more consistently use methods when working with simple data-only objects vs. properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"BeforeExplosionEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"setImpactedBlocks(blocks: Vector3","[","]","): void"),"-"," Sets the blocks locations that are impacted the by the explosion"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"impactedBlocks")))),(0,r.yg)("li",{parentName:"ul"},"BeforeItemUseOnEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"blockLocation")))),(0,r.yg)("li",{parentName:"ul"},"BlockInventoryComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockLavaContainerComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockPistonComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getAttachedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted by the activation of this piston"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"attachedBlocks")),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockPotionContainerComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockRecordPlayerComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockSignComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockSnowContainerComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")))),(0,r.yg)("li",{parentName:"ul"},"BlockWaterContainerComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"location")),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Entity"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"headLocation")))),(0,r.yg)("li",{parentName:"ul"},"ExplosionEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"impactedBlocks")))),(0,r.yg)("li",{parentName:"ul"},"ItemStartUseOnEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getBuildBlockLocation(): Vector3"),"-"," Gets the location of the resulting build block"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"blockLocation")),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"buildBlockLocation")))),(0,r.yg)("li",{parentName:"ul"},"ItemStopUseOnEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"blockLocation")))),(0,r.yg)("li",{parentName:"ul"},"ItemUseOnEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"blockLocation")))),(0,r.yg)("li",{parentName:"ul"},"NavigationResult",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getPath(): Vector3","[","]"),"-"," Gets the locations of the blocks that comprise the navigation route"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"path")))),(0,r.yg)("li",{parentName:"ul"},"Player",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Player"),(0,r.yg)("li",{parentName:"ul"},"Removed property",(0,r.yg)("em",{parentName:"li"},"headLocation"))))),(0,r.yg)("p",null,"ItemStack API improvements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"getMaxAmount: number"),"-"," Returns the maximum stack size for the item"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"isStackable: bool"),"-"," Returns whether the item is stackable"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"isStackableWith(itemStack: ItemStack): bool"),"-"," Returns whether the item can be stacked with the given item"),(0,r.yg)("li",{parentName:"ul"},"Added read-only ",(0,r.yg)("em",{parentName:"li"},"property"),"\xa0",(0,r.yg)("em",{parentName:"li"},"type: ItemType"),"-"," Returns the type of the item"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"clone(): ItemStack"),"-"," Returns a copy of the item stack"),(0,r.yg)("li",{parentName:"ul"},"Added property\xa0",(0,r.yg)("em",{parentName:"li"},"keepOnDeath: bool"),"-"," Sets whether the item is kept on death"),(0,r.yg)("li",{parentName:"ul"},"Added property\xa0",(0,r.yg)("em",{parentName:"li"},"lockMode: ItemLockMode"),"-"," Sets whether the item can be moved or dropped"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"setCanPlaceOn(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks the item can be placed on"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"setCanDestroy(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks this item can destroy")))}g.isMDXComponent=!0}}]);