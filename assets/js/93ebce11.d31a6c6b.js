"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[93626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=o,v=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={id:"ItemComponentRegistry",title:"Class: ItemComponentRegistry",sidebar_label:"ItemComponentRegistry",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server/classes/ItemComponentRegistry",id:"sapi/preview/server/classes/ItemComponentRegistry",title:"Class: ItemComponentRegistry",description:"Provides the functionality for registering custom components",source:"@site/docs/sapi/preview/server/classes/ItemComponentRegistry.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemComponentRegistry",permalink:"/docs/sapi/preview/server/classes/ItemComponentRegistry",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemComponentRegistry",title:"Class: ItemComponentRegistry",sidebar_label:"ItemComponentRegistry",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemComponentMineBlockEvent",permalink:"/docs/sapi/preview/server/classes/ItemComponentMineBlockEvent"},next:{title:"ItemComponentUseEvent",permalink:"/docs/sapi/preview/server/classes/ItemComponentUseEvent"}},p={},m=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"registerCustomComponent",id:"registercustomcomponent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],l={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides the functionality for registering custom components\nfor items."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"new ItemComponentRegistry"),"()"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"registercustomcomponent"},"registerCustomComponent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"registerCustomComponent"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"itemCustomComponent"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Registers an item custom component that can be used in item\nJSON configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This function can throw errors."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCustomComponentAlreadyRegisteredError"},"ItemCustomComponentAlreadyRegisteredError")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCustomComponentNameError"},"ItemCustomComponentNameError")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCustomComponentReloadNewComponentError"},"ItemCustomComponentReloadNewComponentError")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCustomComponentReloadNewEventError"},"ItemCustomComponentReloadNewEventError")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCustomComponentReloadVersionError"},"ItemCustomComponentReloadVersionError")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The id that represents this custom component. Must have a namespace. This id can be specified in a item's JSON configuration under the 'minecraft:custom_components' item component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"itemCustomComponent")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/ItemCustomComponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemCustomComponent"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The collection of event functions that will be called when the event occurs on an item using this custom component id.")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);