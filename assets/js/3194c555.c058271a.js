"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,y=u["".concat(o,".").concat(d)]||u[d]||v[d]||l;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"PlayerLeaveEvent",title:"Class: PlayerLeaveEvent",sidebar_label:"PlayerLeaveEvent",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/PlayerLeaveEvent",id:"sapi/stable/server/classes/PlayerLeaveEvent",title:"Class: PlayerLeaveEvent",description:"Contains information regarding a player that has left the",source:"@site/docs/sapi/stable/server/classes/PlayerLeaveEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerLeaveEvent",permalink:"/docs/sapi/stable/server/classes/PlayerLeaveEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerLeaveEvent",title:"Class: PlayerLeaveEvent",sidebar_label:"PlayerLeaveEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerJoinEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerJoinEventSignal"},next:{title:"PlayerLeaveEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerLeaveEventSignal"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"playerId",id:"playerid",level:3},{value:"playerName",id:"playername",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Contains information regarding a player that has left the\nworld."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"playerid"},"playerId"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"playerId"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Opaque string identifier of the player that has left the\nevent."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"playername"},"playerName"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"playerName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Player that has left the world."))}u.isMDXComponent=!0}}]);