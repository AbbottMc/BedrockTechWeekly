"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[23656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"ItemStopUseOnEvent",title:"Class: ItemStopUseOnEvent",sidebar_label:"ItemStopUseOnEvent",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/ItemStopUseOnEvent",id:"sapi/stable/server/classes/ItemStopUseOnEvent",title:"Class: ItemStopUseOnEvent",description:"Contains information related to an item that has stopped",source:"@site/docs/sapi/stable/server/classes/ItemStopUseOnEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStopUseOnEvent",permalink:"/en/docs/sapi/stable/server/classes/ItemStopUseOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStopUseOnEvent",title:"Class: ItemStopUseOnEvent",sidebar_label:"ItemStopUseOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemStopChargeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemStopChargeEventSignal"},next:{title:"ItemStopUseOnEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemStopUseOnEventSignal"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"blockLocation",id:"blocklocation",level:3},{value:"item",id:"item",level:3},{value:"source",id:"source",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to an item that has stopped\nbeing used on a block."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"blocklocation"},"blockLocation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockLocation"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockLocation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocation"))),(0,a.kt)("p",null,"Location of the block being impacted."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"item"},"item"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"item"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.kt)("p",null,"The impacted item stack that is being used on a block."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"Returns the source entity that triggered this item event."))}u.isMDXComponent=!0}}]);