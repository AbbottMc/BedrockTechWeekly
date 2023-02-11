"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=i(r),m=a,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[k]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={id:"BlockPermutation",title:"Class: BlockPermutation",sidebar_label:"BlockPermutation",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/classes/BlockPermutation",id:"sapi/preview/server/classes/BlockPermutation",title:"Class: BlockPermutation",description:"Contains the combination of type BlockType and",source:"@site/docs/sapi/preview/server/classes/BlockPermutation.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockPermutation",permalink:"/en/docs/sapi/preview/server/classes/BlockPermutation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockPermutation",title:"Class: BlockPermutation",sidebar_label:"BlockPermutation",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockLavaContainerComponent",permalink:"/en/docs/sapi/preview/server/classes/BlockLavaContainerComponent"},next:{title:"BlockPistonComponent",permalink:"/en/docs/sapi/preview/server/classes/BlockPistonComponent"}},s={},i=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns",level:4},{value:"getAllProperties",id:"getallproperties",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getProperty",id:"getproperty",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getTags",id:"gettags",level:3},{value:"Returns",id:"returns-3",level:4},{value:"hasTag",id:"hastag",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4}],c={toc:i};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains the combination of type ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockType"},"BlockType")," and\nproperties (also sometimes called block state) which\ndescribe a block (but does not belong to a specific ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},"Block"),"). This type was introduced as of version 1.17.10.21."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockType"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockType"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockType"},"BlockType")," that the permutation has."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"clone"},"clone"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Creates a copy of this permutation."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,"A copy of the permutation."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getallproperties"},"getAllProperties"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAllProperties"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IBlockProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"IBlockProperty")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns all available properties associated with this block."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IBlockProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"IBlockProperty")),"[]"),(0,a.kt)("p",null,"Returns the list of all of the properties that the\npermutation has."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getproperty"},"getProperty"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getProperty"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"propertyName"),"): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IBlockProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"IBlockProperty"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Gets a property for the permutation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IBlockProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"IBlockProperty"))),(0,a.kt)("p",null,"Returns the property if the permutation has it, else ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gettags"},"getTags"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getTags"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Creates a copy of the permutation."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hastag"},"hasTag"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasTag"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Checks to see if the permutation has a specific tag."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"check_block_tags.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'       import { world } from "@minecraft/server";\n\n       // Fetch the block\n       const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });\n       const blockPerm = block.getPermutation();\n\n       console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);\n       console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);\n       console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);\n\n')),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tag")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the permutation has the tag, else ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."))}k.isMDXComponent=!0}}]);