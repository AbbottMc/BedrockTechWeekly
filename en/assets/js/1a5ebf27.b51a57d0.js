"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24185],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,v=d["".concat(p,".").concat(m)]||d[m]||k[m]||a;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={id:"BlockInventoryComponent",title:"Class: BlockInventoryComponent",sidebar_label:"BlockInventoryComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/preview/server/classes/BlockInventoryComponent",id:"sapi/preview/server/classes/BlockInventoryComponent",title:"Class: BlockInventoryComponent",description:"Represents the inventory of a block in the world. Used with",source:"@site/docs/sapi/preview/server/classes/BlockInventoryComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockInventoryComponent",permalink:"/en/docs/sapi/preview/server/classes/BlockInventoryComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockInventoryComponent",title:"Class: BlockInventoryComponent",sidebar_label:"BlockInventoryComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockExplodeAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEventSignal"},next:{title:"BlockLavaContainerComponent",permalink:"/en/docs/sapi/preview/server/classes/BlockLavaContainerComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"container",id:"container",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represents the inventory of a block in the world. Used with\nblocks like chests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"place_items_in_chest.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";\n\n// Fetch block\nconst block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });\n\n// Make it a chest\nblock.setType(MinecraftBlockTypes.chest);\n\n// Get the inventory\nconst inventoryComponent = block.getComponent("inventory");\nconst inventoryContainer = inventoryComponent.container;\n\n// Set slot 0 to a stack of 10 apples\ninventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));\n\n')),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BlockInventoryComponent"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"new BlockInventoryComponent"),"()"),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent#constructor"},"constructor")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"block"},"block"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"block"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,o.kt)("inlineCode",{parentName:"a"},"Block"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Block instance that this component pertains to."),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent#block"},"block")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"container"},"container"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"container"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Container"},(0,o.kt)("inlineCode",{parentName:"a"},"Container"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"The container which holds an ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemStack"},"ItemStack"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"typeid"},"typeId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"typeId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Identifier of the component."),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent#typeid"},"typeId")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"componentid"},"componentId"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"componentId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"minecraft:inventory"')),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"isvalid"},"isValid"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Whether the component is valid."),(0,o.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockComponent#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);