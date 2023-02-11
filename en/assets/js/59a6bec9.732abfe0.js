"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"BeforeItemUseOnEvent",title:"Class: BeforeItemUseOnEvent",sidebar_label:"BeforeItemUseOnEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/preview/server/classes/BeforeItemUseOnEvent",id:"sapi/preview/server/classes/BeforeItemUseOnEvent",title:"Class: BeforeItemUseOnEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/preview/server/classes/BeforeItemUseOnEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BeforeItemUseOnEvent",permalink:"/en/docs/sapi/preview/server/classes/BeforeItemUseOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeItemUseOnEvent",title:"Class: BeforeItemUseOnEvent",sidebar_label:"BeforeItemUseOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BeforeItemUseEventSignal",permalink:"/en/docs/sapi/preview/server/classes/BeforeItemUseEventSignal"},next:{title:"BeforeItemUseOnEventSignal",permalink:"/en/docs/sapi/preview/server/classes/BeforeItemUseOnEventSignal"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"blockFace",id:"blockface",level:3},{value:"cancel",id:"cancel",level:3},{value:"faceLocationX",id:"facelocationx",level:3},{value:"faceLocationY",id:"facelocationy",level:3},{value:"item",id:"item",level:3},{value:"source",id:"source",level:3},{value:"Methods",id:"methods",level:2},{value:"getBlockLocation",id:"getblocklocation",level:3},{value:"Returns",id:"returns",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to an item being used on a\nblock."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"blockface"},"blockFace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockFace"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/enums/Direction"},(0,a.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,a.kt)("p",null,"The face of the block that an item is being used on."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cancel"},"cancel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cancel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If set to true, this will cancel the item use behavior."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"facelocationx"},"faceLocationX"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"faceLocationX"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"X coordinate of the item-use impact location on the face of\nthe target block."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"facelocationy"},"faceLocationY"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"faceLocationY"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Y coordinate of the item-use impact location on the face of\nthe target block."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"item"},"item"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"item"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemStack"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.kt)("p",null,"The impacted item stack that is being used on a block."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"Returns the source entity that triggered this item event."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getblocklocation"},"getBlockLocation"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getBlockLocation"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))))}u.isMDXComponent=!0}}]);