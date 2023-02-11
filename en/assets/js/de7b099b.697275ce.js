"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",sidebar_label:"ItemStartChargeEvent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/preview/server/classes/ItemStartChargeEvent",id:"sapi/preview/server/classes/ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",description:"Contains information related to a chargeable item starting",source:"@site/docs/sapi/preview/server/classes/ItemStartChargeEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemStartChargeEvent",permalink:"/en/docs/sapi/preview/server/classes/ItemStartChargeEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartChargeEvent",title:"Class: ItemStartChargeEvent",sidebar_label:"ItemStartChargeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemStack",permalink:"/en/docs/sapi/preview/server/classes/ItemStack"},next:{title:"ItemStartChargeEventSignal",permalink:"/en/docs/sapi/preview/server/classes/ItemStartChargeEventSignal"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"itemStack",id:"itemstack",level:3},{value:"source",id:"source",level:3},{value:"useDuration",id:"useduration",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to a chargeable item starting\nto be charged."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"itemstack"},"itemStack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"itemStack"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemStack"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.kt)("p",null,"The impacted item stack that is starting to be charged."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"Returns the source entity that triggered this item event."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useduration"},"useDuration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"useDuration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the time, in ticks, for the remaining duration left\nbefore the charge completes its cycle."))}u.isMDXComponent=!0}}]);