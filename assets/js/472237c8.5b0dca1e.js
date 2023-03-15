"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),v=i,u=c["".concat(s,".").concat(v)]||c[v]||f[v]||a;return r?n.createElement(u,l(l({ref:t},d),{},{components:r})):n.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},34643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",sidebar_label:"BeforeDataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEvent",id:"sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",description:"Contains information related to firing of a data driven",source:"@site/docs/sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEvent",permalink:"/docs/sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeDataDrivenEntityTriggerEvent",title:"Class: BeforeDataDrivenEntityTriggerEvent",sidebar_label:"BeforeDataDrivenEntityTriggerEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BeforeChatEventSignal",permalink:"/docs/sapi/stable/server/classes/BeforeChatEventSignal"},next:{title:"BeforeDataDrivenEntityTriggerEventSignal",permalink:"/docs/sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEventSignal"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"entity",id:"entity",level:3},{value:"id",id:"id",level:3},{value:"Methods",id:"methods",level:2},{value:"getModifiers",id:"getmodifiers",level:3},{value:"Returns",id:"returns",level:4},{value:"setModifiers",id:"setmodifiers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information related to firing of a data driven\nentity event - for example, the minecraft:ageable_grow_up\nevent on a chicken."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cancel"},"cancel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cancel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If set to true, this entity event is not triggered."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,"Entity that the event triggered on."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the data driven event being triggered."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getmodifiers"},"getModifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getModifiers"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmodifiers"},"setModifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setModifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"modifiers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"modifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/DefinitionModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);