"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"PlayerGameModeChangeAfterEvent",title:"Class: PlayerGameModeChangeAfterEvent",sidebar_label:"PlayerGameModeChangeAfterEvent",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/classes/PlayerGameModeChangeAfterEvent",id:"sapi/stable/server/classes/PlayerGameModeChangeAfterEvent",title:"Class: PlayerGameModeChangeAfterEvent",description:"Constructors",source:"@site/docs/sapi/stable/server/classes/PlayerGameModeChangeAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerGameModeChangeAfterEvent",permalink:"/docs/sapi/stable/server/classes/PlayerGameModeChangeAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerGameModeChangeAfterEvent",title:"Class: PlayerGameModeChangeAfterEvent",sidebar_label:"PlayerGameModeChangeAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerDimensionChangeAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerDimensionChangeAfterEventSignal"},next:{title:"PlayerGameModeChangeAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerGameModeChangeAfterEventSignal"}},i={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"fromGameMode",id:"fromgamemode",level:3},{value:"player",id:"player",level:3},{value:"toGameMode",id:"togamemode",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"new PlayerGameModeChangeAfterEvent"),"()"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"fromgamemode"},"fromGameMode"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"fromGameMode"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/GameMode"},(0,n.kt)("inlineCode",{parentName:"a"},"GameMode"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"player"},"player"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"player"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"togamemode"},"toGameMode"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"toGameMode"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/GameMode"},(0,n.kt)("inlineCode",{parentName:"a"},"GameMode"))))}d.isMDXComponent=!0}}]);