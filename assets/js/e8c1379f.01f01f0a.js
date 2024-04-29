"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"EntityDieAfterEvent",title:"Class: EntityDieAfterEvent",sidebar_label:"EntityDieAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/classes/EntityDieAfterEvent",id:"sapi/stable/server/classes/EntityDieAfterEvent",title:"Class: EntityDieAfterEvent",description:"Contains data related to the death of an entity in the game.",source:"@site/docs/sapi/stable/server/classes/EntityDieAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityDieAfterEvent",permalink:"/docs/sapi/stable/server/classes/EntityDieAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityDieAfterEvent",title:"Class: EntityDieAfterEvent",sidebar_label:"EntityDieAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityDefinitionFeedItem",permalink:"/docs/sapi/stable/server/classes/EntityDefinitionFeedItem"},next:{title:"EntityDieAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/EntityDieAfterEventSignal"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"damageSource",id:"damagesource",level:3},{value:"deadEntity",id:"deadentity",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains data related to the death of an entity in the game."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new EntityDieAfterEvent"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"damagesource"},"damageSource"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"damageSource"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/EntityDamageSource"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityDamageSource"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If specified, provides more information on the source of\ndamage that caused the death of this entity."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deadentity"},"deadEntity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"deadEntity"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Now-dead entity object."))}d.isMDXComponent=!0}}]);