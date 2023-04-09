"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,d=u["".concat(o,".").concat(v)]||u[v]||y[v]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=v;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},69603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"PlayerSpawnEvent",title:"Class: PlayerSpawnEvent",sidebar_label:"PlayerSpawnEvent",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/PlayerSpawnEvent",id:"sapi/stable/server/classes/PlayerSpawnEvent",title:"Class: PlayerSpawnEvent",description:"An event that contains more information about a player",source:"@site/docs/sapi/stable/server/classes/PlayerSpawnEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerSpawnEvent",permalink:"/docs/sapi/stable/server/classes/PlayerSpawnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerSpawnEvent",title:"Class: PlayerSpawnEvent",sidebar_label:"PlayerSpawnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerLeaveEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerLeaveEventSignal"},next:{title:"PlayerSpawnEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerSpawnEventSignal"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"initialSpawn",id:"initialspawn",level:3},{value:"player",id:"player",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An event that contains more information about a player\nspawning."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"initialspawn"},"initialSpawn"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"initialSpawn"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true, this is the initial spawn of a player after joining\nthe game."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"player"},"player"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"player"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player"))),(0,a.kt)("p",null,"Object that represents the player that joined the game."))}u.isMDXComponent=!0}}]);