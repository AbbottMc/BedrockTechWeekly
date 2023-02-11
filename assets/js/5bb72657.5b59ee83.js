"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[28233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},40413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"BlockType",title:"Class: BlockType",sidebar_label:"BlockType",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/preview/server/classes/BlockType",id:"sapi/preview/server/classes/BlockType",title:"Class: BlockType",description:"The type (or template) of a block. Does not contain",source:"@site/docs/sapi/preview/server/classes/BlockType.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockType",permalink:"/docs/sapi/preview/server/classes/BlockType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockType",title:"Class: BlockType",sidebar_label:"BlockType",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockSnowContainerComponent",permalink:"/docs/sapi/preview/server/classes/BlockSnowContainerComponent"},next:{title:"BlockWaterContainerComponent",permalink:"/docs/sapi/preview/server/classes/BlockWaterContainerComponent"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"canBeWaterlogged",id:"canbewaterlogged",level:3},{value:"id",id:"id",level:3},{value:"Methods",id:"methods",level:2},{value:"createDefaultBlockPermutation",id:"createdefaultblockpermutation",level:3},{value:"Returns",id:"returns",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type (or template) of a block. Does not contain\npermutation data (state) other than the type of block it\nrepresents. This type was introduced as of version\n1.17.10.21."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"canbewaterlogged"},"canBeWaterlogged"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"canBeWaterlogged"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Represents whether this type of block can be waterlogged."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Block type name - for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft:acacia_stairs"),"."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"createdefaultblockpermutation"},"createDefaultBlockPermutation"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createDefaultBlockPermutation"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Creates the default ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPermutation"},"BlockPermutation")," for this type\nwhich uses the default values for all properties."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,"Returns created permutation."))}u.isMDXComponent=!0}}]);