"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[96828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,v=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={id:"ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",sidebar_label:"ItemStartChargeEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/ItemStartChargeEvent",id:"sapi/stable/server/classes/ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",description:"Contains information related to a chargeable item starting",source:"@site/docs/sapi/stable/server/classes/ItemStartChargeEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStartChargeEvent",permalink:"/docs/sapi/stable/server/classes/ItemStartChargeEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",sidebar_label:"ItemStartChargeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemStack",permalink:"/docs/sapi/stable/server/classes/ItemStack"},next:{title:"ItemStartChargeEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartChargeEventSignal"}},o={},c=[{value:"Properties",id:"properties",level:2},{value:"itemStack",id:"itemstack",level:3},{value:"source",id:"source",level:3},{value:"useDuration",id:"useduration",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Contains information related to a chargeable item starting\nto be charged."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"itemstack"},"itemStack"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"itemStack"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemStack"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,n.kt)("p",null,"The impacted item stack that is starting to be charged."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"source"},"source"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"source"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,n.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,n.kt)("p",null,"Returns the source entity that triggered this item event."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"useduration"},"useDuration"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"useDuration"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Returns the time, in ticks, for the remaining duration left\nbefore the charge completes its cycle."))}u.isMDXComponent=!0}}]);