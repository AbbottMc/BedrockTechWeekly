"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"WorldInitializeBeforeEvent",title:"Class: WorldInitializeBeforeEvent",sidebar_label:"WorldInitializeBeforeEvent",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/stable/server/classes/WorldInitializeBeforeEvent",id:"sapi/stable/server/classes/WorldInitializeBeforeEvent",title:"Class: WorldInitializeBeforeEvent",description:"Contains information and methods that can be used at the",source:"@site/docs/sapi/stable/server/classes/WorldInitializeBeforeEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/WorldInitializeBeforeEvent",permalink:"/en/docs/sapi/stable/server/classes/WorldInitializeBeforeEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WorldInitializeBeforeEvent",title:"Class: WorldInitializeBeforeEvent",sidebar_label:"WorldInitializeBeforeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"WorldInitializeAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/WorldInitializeAfterEventSignal"},next:{title:"WorldInitializeBeforeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/WorldInitializeBeforeEventSignal"}},s={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"blockTypeRegistry",id:"blocktyperegistry",level:3},{value:"itemComponentRegistry",id:"itemcomponentregistry",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information and methods that can be used at the\ninitialization of the scripting environment for a World.\nAlso, use the supplied blockRegistry object to register\nblock custom components within the scope of the World\nInitialize execution."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"new WorldInitializeBeforeEvent"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"blocktyperegistry"},"blockTypeRegistry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"blockTypeRegistry"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentRegistry"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockComponentRegistry"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemcomponentregistry"},"itemComponentRegistry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemComponentRegistry"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponentRegistry"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemComponentRegistry"))))}d.isMDXComponent=!0}}]);