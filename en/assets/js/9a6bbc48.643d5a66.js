"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,u=c["".concat(s,".").concat(f)]||c[f]||v[f]||a;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",sidebar_label:"BeforeDataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEvent",id:"sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",description:"Contains information related to firing of a data driven",source:"@site/docs/sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEvent",permalink:"/en/docs/sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",sidebar_label:"BeforeDataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BeforeChatEventSignal_deprecated",permalink:"/en/docs/sapi/preview/server/classes/BeforeChatEventSignal_deprecated"},next:{title:"BeforeDataDrivenEntityTriggerEventSignal_deprecated",permalink:"/en/docs/sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEventSignal_deprecated"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"entity",id:"entity",level:3},{value:"id",id:"id",level:3},{value:"Methods",id:"methods",level:2},{value:"getModifiers",id:"getmodifiers",level:3},{value:"Returns",id:"returns",level:4},{value:"setModifiers",id:"setmodifiers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information related to firing of a data driven\nentity event - for example, the minecraft:ageable_grow_up\nevent on a chicken."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cancel"},"cancel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cancel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If set to true, this entity event is not triggered."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,"Entity that the event triggered on."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the data driven event being triggered."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getmodifiers"},"getModifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getModifiers"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmodifiers"},"setModifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setModifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"modifiers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"modifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);