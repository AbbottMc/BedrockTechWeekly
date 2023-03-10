"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[33296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"Block",title:"Class: Block",sidebar_label:"Block",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/Block",id:"sapi/preview/server/classes/Block",title:"Class: Block",description:"Represents a block in a dimension. A block represents a",source:"@site/docs/sapi/preview/server/classes/Block.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Block",permalink:"/docs/sapi/preview/server/classes/Block",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Block",title:"Class: Block",sidebar_label:"Block",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BeforeWatchdogTerminateEventSignal_deprecated",permalink:"/docs/sapi/preview/server/classes/BeforeWatchdogTerminateEventSignal_deprecated"},next:{title:"BlockAreaSize",permalink:"/docs/sapi/preview/server/classes/BlockAreaSize"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"dimension",id:"dimension",level:3},{value:"isWaterlogged",id:"iswaterlogged",level:3},{value:"location",id:"location",level:3},{value:"permutation",id:"permutation",level:3},{value:"type",id:"type",level:3},{value:"typeId",id:"typeid",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"z",id:"z",level:3},{value:"Methods",id:"methods",level:2},{value:"canPlace",id:"canplace",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getComponent",id:"getcomponent",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getItemStack",id:"getitemstack",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getRedstonePower",id:"getredstonepower",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getTags",id:"gettags",level:3},{value:"Returns",id:"returns-4",level:4},{value:"hasTag",id:"hastag",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"isAir",id:"isair",level:3},{value:"Returns",id:"returns-6",level:4},{value:"isLiquid",id:"isliquid",level:3},{value:"Returns",id:"returns-7",level:4},{value:"isSolid",id:"issolid",level:3},{value:"Returns",id:"returns-8",level:4},{value:"setPermutation",id:"setpermutation",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"setType",id:"settype",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"trySetPermutation",id:"trysetpermutation",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-11",level:4}],k={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a block in a dimension. A block represents a\nunique X, Y, and Z within a dimension and get/sets the state\nof the block at that location. This type was significantly\nupdated in version 1.17.10.21."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"dimension"},"dimension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"dimension"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Dimension"},(0,r.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,r.kt)("p",null,"Returns the dimension that the block is within."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iswaterlogged"},"isWaterlogged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isWaterlogged"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns or sets whether this block has a liquid on it."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"location"},"location"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"location"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,"Coordinates of the specified block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"permutation"},"permutation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"permutation"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,r.kt)("p",null,"Additional block configuration data that describes the\nblock."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockType"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockType"))),(0,r.kt)("p",null,"Gets the type of block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"typeid"},"typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"typeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Identifier of the type of block for this block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"x"},"x"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"X coordinate of the block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"y"},"y"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Y coordinate of the block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"z"},"z"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Z coordinate of the block."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"canplace"},"canPlace"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canPlace"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"blockToPlace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"faceToPlaceOn?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Checks to see whether it is valid to place the specified\nblock type or block permutation, on a specified face on this\nblock"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockToPlace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/BlockType"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Block type or block permutation to check placement for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"faceToPlaceOn?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/enums/Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional specific face of this block to check placement against.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the block type or permutation can be\nplaced on this block, else ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcomponent"},"getComponent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getComponent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"componentName"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Gets additional configuration properties (a component) for\nspecific capabilities of particular blocks - for example, an\ninventory component of a chest block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the component. If a namespace is not specified, minecraft: is assumed.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,r.kt)("p",null,"Returns the component object if it is present on the\nparticular block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getitemstack"},"getItemStack"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getItemStack"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withData?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withData?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getredstonepower"},"getRedstonePower"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getRedstonePower"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns the net redstone power of this block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Returns undefined if redstone power is not applicable to\nthis block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettags"},"getTags"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTags"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a set of tags for a block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"The list of tags that the block has."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hastag"},"hasTag"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"hasTag"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Checks to see if the permutation of this block has a\nspecific tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"check_block_tags.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'       import { world } from "@minecraft/server";\n\n       // Fetch the block\n       const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });\n\n       console.log(`Block is dirt: ${block.hasTag("dirt")}`);\n       console.log(`Block is wood: ${block.hasTag("wood")}`);\n       console.log(`Block is stone: ${block.hasTag("stone")}`);\n\n')),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tag")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tag to check for.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the permutation of this block has the tag,\nelse ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isair"},"isAir"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isAir"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isliquid"},"isLiquid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isLiquid"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"issolid"},"isSolid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isSolid"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setpermutation"},"setPermutation"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setPermutation"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"permutation"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Sets the block in the dimension to the state of the\npermutation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"permutation")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Permutation that contains a set of property states for the Block.")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settype"},"setType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setType"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"blockType"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Sets the type of block."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/BlockType"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the type of block to apply - for example, minecraft:powered_repeater.")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trysetpermutation"},"trySetPermutation"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"trySetPermutation"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"permutation"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tries to set the block in the dimension to the state of the\npermutation by first checking if the placement is valid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"permutation")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Permutation that contains a set of property states for the Block.")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the block permutation data was\nsuccessfully set, else ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))}d.isMDXComponent=!0}}]);