"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[22291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"ItemStartUseOnEvent",title:"Class: ItemStartUseOnEvent",sidebar_label:"ItemStartUseOnEvent",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/classes/ItemStartUseOnEvent",id:"sapi/stable/server/classes/ItemStartUseOnEvent",title:"Class: ItemStartUseOnEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/stable/server/classes/ItemStartUseOnEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStartUseOnEvent",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartUseOnEvent",title:"Class: ItemStartUseOnEvent",sidebar_label:"ItemStartUseOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemStartChargeEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartChargeEventSignal"},next:{title:"ItemStartUseOnEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnEventSignal"}},i={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"blockFace",id:"blockface",level:3},{value:"blockLocation",id:"blocklocation",level:3},{value:"buildBlockLocation",id:"buildblocklocation",level:3},{value:"item",id:"item",level:3},{value:"source",id:"source",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to an item being used on a\nblock."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"new ItemStartUseOnEvent"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"blockface"},"blockFace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockFace"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/Direction"},(0,a.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,a.kt)("p",null,"The face of the block that an item is being used on."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocklocation"},"blockLocation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockLocation"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocation"))),(0,a.kt)("p",null,"Location of the block being impacted."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"buildblocklocation"},"buildBlockLocation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"buildBlockLocation"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocation"))),(0,a.kt)("p",null,"Location of the resulting build block position. Useful for\ndetermining where a block was placed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"item"},"item"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"item"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemStack"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.kt)("p",null,"The impacted item stack that is starting to be used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"Returns the source entity that triggered this item event."))}u.isMDXComponent=!0}}]);