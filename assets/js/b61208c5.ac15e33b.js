"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[23494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),v=i,d=u["".concat(l,".").concat(v)]||u[v]||m[v]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},71739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={id:"BeforeItemUseEvent",title:"Class: BeforeItemUseEvent",sidebar_label:"BeforeItemUseEvent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/preview/server/classes/BeforeItemUseEvent",id:"sapi/preview/server/classes/BeforeItemUseEvent",title:"Class: BeforeItemUseEvent",description:"Contains information related to an item being used.",source:"@site/docs/sapi/preview/server/classes/BeforeItemUseEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BeforeItemUseEvent",permalink:"/docs/sapi/preview/server/classes/BeforeItemUseEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeItemUseEvent",title:"Class: BeforeItemUseEvent",sidebar_label:"BeforeItemUseEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BeforeItemDefinitionTriggeredEvent",permalink:"/docs/sapi/preview/server/classes/BeforeItemDefinitionTriggeredEvent"},next:{title:"BeforeItemUseEventSignal",permalink:"/docs/sapi/preview/server/classes/BeforeItemUseEventSignal"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"item",id:"item",level:3},{value:"source",id:"source",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information related to an item being used."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cancel"},"cancel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cancel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If set to true, this will cancel the item use behavior."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"item"},"item"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"item"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,i.kt)("p",null,"The impacted item stack that is being used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"source"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,"Returns the source entity that triggered this item event."))}u.isMDXComponent=!0}}]);