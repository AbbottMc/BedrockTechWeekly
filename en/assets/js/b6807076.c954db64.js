"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94549],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>v});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),p=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},y=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=p(r),c=t,v=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return r?a.createElement(v,i(i({ref:n},y),{},{components:r})):a.createElement(v,i({ref:n},y))}));function v(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57010:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(58168),t=(r(96540),r(15680));const l={id:"WorldBeforeEvents",title:"Class: WorldBeforeEvents",sidebar_label:"WorldBeforeEvents",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/WorldBeforeEvents",id:"sapi/preview/server/classes/WorldBeforeEvents",title:"Class: WorldBeforeEvents",description:"A set of events that fire before an actual action occurs. In",source:"@site/docs/sapi/preview/server/classes/WorldBeforeEvents.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/WorldBeforeEvents",permalink:"/en/docs/sapi/preview/server/classes/WorldBeforeEvents",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WorldBeforeEvents",title:"Class: WorldBeforeEvents",sidebar_label:"WorldBeforeEvents",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"WorldAfterEvents",permalink:"/en/docs/sapi/preview/server/classes/WorldAfterEvents"},next:{title:"WorldInitializeAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/WorldInitializeAfterEvent"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"chatSend",id:"chatsend",level:3},{value:"effectAdd",id:"effectadd",level:3},{value:"entityRemove",id:"entityremove",level:3},{value:"explosion",id:"explosion",level:3},{value:"itemUse",id:"itemuse",level:3},{value:"itemUseOn",id:"itemuseon",level:3},{value:"playerBreakBlock",id:"playerbreakblock",level:3},{value:"playerGameModeChange",id:"playergamemodechange",level:3},{value:"playerInteractWithBlock",id:"playerinteractwithblock",level:3},{value:"playerInteractWithEntity",id:"playerinteractwithentity",level:3},{value:"playerLeave",id:"playerleave",level:3},{value:"playerPlaceBlock",id:"playerplaceblock",level:3},{value:"weatherChange",id:"weatherchange",level:3},{value:"worldInitialize",id:"worldinitialize",level:3}],y={toc:p},g="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"A set of events that fire before an actual action occurs. In\nmost cases, you can potentially cancel or modify the\nimpending event. Note that in before events any APIs that\nmodify gameplay state will not function and will throw an\nerror. (e.g., dimension.spawnEntity)"),(0,t.yg)("h2",{id:"constructors"},"Constructors"),(0,t.yg)("h3",{id:"constructor"},"constructor"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,t.yg)("strong",{parentName:"p"},"new WorldBeforeEvents"),"()"),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"chatsend"},"chatSend"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"chatSend"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ChatSendBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"ChatSendBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event is triggered after a chat message has been\nbroadcast or sent to players."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"effectadd"},"effectAdd"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"effectAdd"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EffectAddBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"EffectAddBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event is triggered after an event has been added to an\nentity."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"entityremove"},"entityRemove"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"entityRemove"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityRemoveBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"EntityRemoveBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Fires before an entity is removed from the world (for\nexample, unloaded or removed after being killed.)"),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"explosion"},"explosion"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"explosion"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ExplosionBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"ExplosionBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event is fired after an explosion occurs."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"itemuse"},"itemUse"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"itemUse"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"ItemUseBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event fires when an item is successfully used by a\nplayer."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"itemuseon"},"itemUseOn"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"itemUseOn"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemUseOnBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"ItemUseOnBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event fires when an item is used on a block by a\nplayer."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playerbreakblock"},"playerBreakBlock"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerBreakBlock"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerBreakBlockBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerBreakBlockBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event fires before a block is broken by a player."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playergamemodechange"},"playerGameModeChange"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerGameModeChange"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerGameModeChangeBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerGameModeChangeBeforeEventSignal"))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playerinteractwithblock"},"playerInteractWithBlock"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerInteractWithBlock"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerInteractWithBlockBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerInteractWithBlockBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Fires before a player interacts with a block."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playerinteractwithentity"},"playerInteractWithEntity"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerInteractWithEntity"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerInteractWithEntityBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerInteractWithEntityBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Fires before a player interacts with an entity."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playerleave"},"playerLeave"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerLeave"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerLeaveBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerLeaveBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Fires when a player leaves the game."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"playerplaceblock"},"playerPlaceBlock"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"playerPlaceBlock"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerPlaceBlockBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event fires before a block is placed by a player."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"weatherchange"},"weatherChange"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"weatherChange"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/WeatherChangeBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"WeatherChangeBeforeEventSignal"))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"worldinitialize"},"worldInitialize"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,t.yg)("strong",{parentName:"p"},"worldInitialize"),": ",(0,t.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/WorldInitializeBeforeEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"WorldInitializeBeforeEventSignal"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"This event fires immediately when the script environment is\ninitialized on a World. Not all script functionality may be\navailable. For guaranteed access to world state, use the\nworld initialize after event."))}d.isMDXComponent=!0}}]);