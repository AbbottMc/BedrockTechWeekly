"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"ItemUseOnEvent",title:"Class: ItemUseOnEvent",sidebar_label:"ItemUseOnEvent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/ItemUseOnEvent",id:"sapi/stable/server/classes/ItemUseOnEvent",title:"Class: ItemUseOnEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/stable/server/classes/ItemUseOnEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemUseOnEvent",permalink:"/en/docs/sapi/stable/server/classes/ItemUseOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemUseOnEvent",title:"Class: ItemUseOnEvent",sidebar_label:"ItemUseOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemUseEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemUseEventSignal"},next:{title:"ItemUseOnEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemUseOnEventSignal"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"blockFace",id:"blockface",level:3},{value:"blockLocation",id:"blocklocation",level:3},{value:"faceLocationX",id:"facelocationx",level:3},{value:"faceLocationY",id:"facelocationy",level:3},{value:"item",id:"item",level:3},{value:"source",id:"source",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains information related to an item being used on a\nblock."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"blockface"},"blockFace"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockFace"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/enums/Direction"},(0,r.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,r.kt)("p",null,"The face of the block that an item is being used on."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocklocation"},"blockLocation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockLocation"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockLocation"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockLocation"))),(0,r.kt)("p",null,"Location of the block being impacted."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"facelocationx"},"faceLocationX"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"faceLocationX"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"X coordinate of the item-use impact location on the face of\nthe target block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"facelocationy"},"faceLocationY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"faceLocationY"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Y coordinate of the item-use impact location on the face of\nthe target block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"item"},"item"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"item"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.kt)("p",null,"The impacted item stack that is being used on a block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"source"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Returns the source entity that triggered this item event."))}u.isMDXComponent=!0}}]);