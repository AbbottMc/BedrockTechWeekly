"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),c=r,N=k["".concat(s,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"Dimension",title:"Class: Dimension",sidebar_label:"Dimension",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/stable/server/classes/Dimension",id:"sapi/stable/server/classes/Dimension",title:"Class: Dimension",description:"A class that represents a particular dimension (e.g., The",source:"@site/docs/sapi/stable/server/classes/Dimension.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/Dimension",permalink:"/docs/sapi/stable/server/classes/Dimension",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Dimension",title:"Class: Dimension",sidebar_label:"Dimension",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"DefinitionModifier",permalink:"/docs/sapi/stable/server/classes/DefinitionModifier"},next:{title:"DirectionBlockProperty",permalink:"/docs/sapi/stable/server/classes/DirectionBlockProperty"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"Methods",id:"methods",level:2},{value:"createExplosion",id:"createexplosion",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fillBlocks",id:"fillblocks",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getBlock",id:"getblock",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getBlockFromRay",id:"getblockfromray",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getEntities",id:"getentities",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getEntitiesAtBlockLocation",id:"getentitiesatblocklocation",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getEntitiesFromRay",id:"getentitiesfromray",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"getPlayers",id:"getplayers",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"runCommandAsync",id:"runcommandasync",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"spawnEntity",id:"spawnentity",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"spawnItem",id:"spawnitem",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"spawnParticle",id:"spawnparticle",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4}],m={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class that represents a particular dimension (e.g., The\nEnd) within a world."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Identifier of the dimension."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createexplosion"},"createExplosion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createExplosion"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"radius"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"explosionOptions?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Creates an explosion at the specified location."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"createExplosion.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"         overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"createFireAndWaterExplosions.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"       const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };\n\n       const fireExplosionOptions = new mc.ExplosionOptions();\n\n       // Explode with fire\n       fireExplosionOptions.causesFire = true;\n\n       overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);\n       const waterExplosionOptions = new mc.ExplosionOptions();\n\n       // Explode in water\n       waterExplosionOptions.allowUnderwater = true;\n\n       const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };\n\n       overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"createNoBlockExplosion.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"       const explosionOptions = new mc.ExplosionOptions();\n\n       // Start by exploding without breaking blocks\n       explosionOptions.breaksBlocks = false;\n\n       const explodeNoBlocksLoc: mc.Vector3 = {\n         x: Math.floor(targetLocation.x + 1),\n         y: Math.floor(targetLocation.y + 2),\n         z: Math.floor(targetLocation.z + 1),\n       };\n\n       overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);\n\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location of the explosion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"radius")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Radius, in blocks, of the explosion to create.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"explosionOptions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/ExplosionOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ExplosionOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional configurable options for the explosion.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fillblocks"},"fillBlocks"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fillBlocks"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"begin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"block"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Fills an area between begin and end with block of type\nblock."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"begin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lower northwest starting corner of the area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"end")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The upper southeast ending corner of the area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"block")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/BlockType"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of block to fill the volume with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/BlockFillOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockFillOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of additional options, such as a matching block to potentially replace this fill block with.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Returns number of blocks placed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getblock"},"getBlock"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBlock"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a block instance at the given location. This method\nwas introduced as of version 1.17.10.21."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location at which to return a block.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("p",null,"Block at the specified location."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getblockfromray"},"getBlockFromRay"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBlockFromRay"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Gets the first block that intersects with a vector emanating\nfrom a location."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"direction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/BlockRaycastOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockRaycastOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional options for processing this raycast query.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getentities"},"getEntities"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEntities"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"getEntities?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIterator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a set of entities based on a set of conditions\ndefined via the EntityQueryOptions set of filter criteria."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"testThatEntityIsFeatherItem.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'       const query = {\n         type: "item",\n         location: targetLocation,\n       };\n       const items = overworld.getEntities(query);\n\n       for (const item of items) {\n         const itemComp = item.getComponent("item") as any;\n\n         if (itemComp) {\n           if (itemComp.itemStack.id.endsWith("feather")) {\n             console.log("Success! Found a feather", 1);\n           }\n         }\n       }\n\n')),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getEntities?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/EntityQueryOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityQueryOptions")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIterator"))),(0,r.kt)("p",null,"An entity array."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getentitiesatblocklocation"},"getEntitiesAtBlockLocation"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEntitiesAtBlockLocation"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a set of entities at a particular location."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location at which to return entities.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,r.kt)("p",null,"Zero or more entities at the specified location."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getentitiesfromray"},"getEntitiesFromRay"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEntitiesFromRay"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Gets entities that intersect with a specified vector\nemanating from a location."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"direction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/EntityRaycastOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRaycastOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional options for processing this raycast query.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getplayers"},"getPlayers"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPlayers"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"getPlayers?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/PlayerIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerIterator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a set of players based on a set of conditions\ndefined via the EntityQueryOptions set of filter criteria."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getPlayers?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/EntityQueryOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityQueryOptions")))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/PlayerIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerIterator"))),(0,r.kt)("p",null,"A player array."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"runcommandasync"},"runCommandAsync"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"runCommandAsync"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"commandString"),"): ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/CommandResult"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandResult")),">"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Runs a particular command asynchronously from the context of\nthe broader dimension.  Note that there is a maximum queue\nof 128 asynchronous commands that can be run in a given\ntick."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"commandString")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command to run. Note that command strings should not start with slash.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,r.kt)("inlineCode",{parentName:"a"},"Promise")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/CommandResult"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandResult")),">"),(0,r.kt)("p",null,"For commands that return data, returns a CommandResult with\nan indicator of command results."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawnentity"},"spawnEntity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"spawnEntity"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Creates a new entity (e.g., a mob) at the specified\nlocation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"createOldHorse.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"         // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult\n         overworld.spawnEntity(\"minecraft:horse<minecraft:ageable_grow_up>\", targetLocation);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"quickFoxLazyDog.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'       const fox = overworld.spawnEntity("minecraft:fox", {\n         x: targetLocation.x + 1,\n         y: targetLocation.y + 2,\n         z: targetLocation.z + 3,\n       });\n       fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);\n       log("Created a fox.");\n\n       const wolf = overworld.spawnEntity("minecraft:wolf", {\n         x: targetLocation.x + 4,\n         y: targetLocation.y + 2,\n         z: targetLocation.z + 3,\n       });\n       wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);\n       wolf.isSneaking = true;\n       log("Created a sneaking wolf.", 1);\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"trapTick.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'         let ticks = 0;\n\n         mc.world.events.tick.subscribe((event: mc.TickEvent) => {\n           ticks++;\n\n           // Minecraft runs at 20 ticks per second\n           if (ticks % 1200 === 0) {\n             overworld.runCommand("say Another minute passes...");\n           }\n         });\n')),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifier")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location at which to create the entity.")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Newly created entity at the specified location."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawnitem"},"spawnItem"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"spawnItem"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"item"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Creates a new item stack as an entity at the specified\nlocation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"itemStacks.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"       const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };\n       const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };\n       const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };\n\n       const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);\n       const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);\n       const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);\n\n       overworld.spawnItem(oneEmerald, oneItemLoc);\n       overworld.spawnItem(fiveEmeralds, fiveItemsLoc);\n       overworld.spawnItem(onePickaxe, diamondPickaxeLoc);\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"spawnItem.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'         const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);\n\n         overworld.spawnItem(featherItem, targetLocation);\n         log("New feather created!");\n')),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"item")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/ItemStack"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location at which to create the item stack.")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Newly created item stack entity at the specified location."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawnparticle"},"spawnParticle"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"spawnParticle"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"effectName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"molangVariables"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Creates a new particle emitter at a specified location in\nthe world."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"effectName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the particle to create.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The location at which to create the particle emitter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molangVariables")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/MolangVariableMap"},(0,r.kt)("inlineCode",{parentName:"a"},"MolangVariableMap"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of additional, customizable variables that can be adjusted for this particle emitter.")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Newly created entity at the specified location."))}k.isMDXComponent=!0}}]);