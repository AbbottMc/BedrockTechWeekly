"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=i,f=c["".concat(l,".").concat(u)]||c[u]||v[u]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"DataDrivenEntityTriggerEvent",title:"Class: DataDrivenEntityTriggerEvent",sidebar_label:"DataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/classes/DataDrivenEntityTriggerEvent",id:"sapi/preview/server/classes/DataDrivenEntityTriggerEvent",title:"Class: DataDrivenEntityTriggerEvent",description:"Contains information related to firing of a data driven",source:"@site/docs/sapi/preview/server/classes/DataDrivenEntityTriggerEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/DataDrivenEntityTriggerEvent",permalink:"/docs/sapi/preview/server/classes/DataDrivenEntityTriggerEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DataDrivenEntityTriggerEvent",title:"Class: DataDrivenEntityTriggerEvent",sidebar_label:"DataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ContainerSlot",permalink:"/docs/sapi/preview/server/classes/ContainerSlot"},next:{title:"DataDrivenEntityTriggerEventSignal_deprecated",permalink:"/docs/sapi/preview/server/classes/DataDrivenEntityTriggerEventSignal_deprecated"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"id",id:"id",level:3},{value:"Methods",id:"methods",level:2},{value:"getModifiers",id:"getmodifiers",level:3},{value:"Returns",id:"returns",level:4}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information related to firing of a data driven\nentity event - for example, the minecraft:ageable_grow_up\nevent on a chicken."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,"Entity that the event triggered on."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the data driven event being triggered."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getmodifiers"},"getModifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getModifiers"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"))}c.isMDXComponent=!0}}]);