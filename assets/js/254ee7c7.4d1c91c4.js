"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),c=r,v=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[k]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"Events",title:"Class: Events",sidebar_label:"Events",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"sapi/preview/server/classes/Events",id:"sapi/preview/server/classes/Events",title:"Class: Events",description:"Contains a set of events that are available across the scope",source:"@site/docs/sapi/preview/server/classes/Events.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Events",permalink:"/docs/sapi/preview/server/classes/Events",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Events",title:"Class: Events",sidebar_label:"Events",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityWantsJockeyComponent",permalink:"/docs/sapi/preview/server/classes/EntityWantsJockeyComponent"},next:{title:"ExplosionAfterEvent",permalink:"/docs/sapi/preview/server/classes/ExplosionAfterEvent"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"blockBreak",id:"blockbreak",level:3},{value:"blockExplode",id:"blockexplode",level:3},{value:"blockPlace",id:"blockplace",level:3},{value:"buttonPush",id:"buttonpush",level:3},{value:"chatSend",id:"chatsend",level:3},{value:"dataDrivenEntityTriggerEvent",id:"datadrivenentitytriggerevent",level:3},{value:"effectAdd",id:"effectadd",level:3},{value:"entityDie",id:"entitydie",level:3},{value:"entityHit",id:"entityhit",level:3},{value:"entityHurt",id:"entityhurt",level:3},{value:"entitySpawn",id:"entityspawn",level:3},{value:"explosion",id:"explosion",level:3},{value:"itemCompleteCharge",id:"itemcompletecharge",level:3},{value:"itemDefinitionEvent",id:"itemdefinitionevent",level:3},{value:"itemReleaseCharge",id:"itemreleasecharge",level:3},{value:"itemStartCharge",id:"itemstartcharge",level:3},{value:"itemStartUseOn",id:"itemstartuseon",level:3},{value:"itemStopCharge",id:"itemstopcharge",level:3},{value:"itemStopUseOn",id:"itemstopuseon",level:3},{value:"itemUse",id:"itemuse",level:3},{value:"itemUseOn",id:"itemuseon",level:3},{value:"leverActivate",id:"leveractivate",level:3},{value:"messageReceive",id:"messagereceive",level:3},{value:"pistonActivate",id:"pistonactivate",level:3},{value:"playerJoin",id:"playerjoin",level:3},{value:"playerLeave",id:"playerleave",level:3},{value:"playerSpawn",id:"playerspawn",level:3},{value:"projectileHit",id:"projectilehit",level:3},{value:"weatherChange",id:"weatherchange",level:3},{value:"worldInitialize",id:"worldinitialize",level:3}],d={toc:o};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains a set of events that are available across the scope\nof the World."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"blockbreak"},"blockBreak"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockBreak"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockBreakAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockBreakAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires for a block that is broken by a player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockexplode"},"blockExplode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockExplode"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockExplodeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockExplodeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires for each BlockLocation destroyed by an\nexplosion. It is fired after the blocks have already been\ndestroyed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockplace"},"blockPlace"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockPlace"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPlaceAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPlaceAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires for a block that is placed by a player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buttonpush"},"buttonPush"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"buttonPush"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ButtonPushAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ButtonPushAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a button is pushed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chatsend"},"chatSend"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"chatSend"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ChatSendAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatSendAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event is triggered after a chat message has been\nbroadcast or sent to players."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"datadrivenentitytriggerevent"},"dataDrivenEntityTriggerEvent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"dataDrivenEntityTriggerEvent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/DataDrivenEntityTriggerAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"DataDrivenEntityTriggerAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event is fired when an entity event has been triggered\nthat will update the component definition state of an\nentity."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"effectadd"},"effectAdd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"effectAdd"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EffectAddAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"EffectAddAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when an effect, like poisoning, is added to\nan entity."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entitydie"},"entityDie"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entityDie"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityDieAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDieAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when an entity dies."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entityhit"},"entityHit"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entityHit"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityHitAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityHitAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when an entity hits (makes a melee attack)\nand potentially impacts another entity or block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entityhurt"},"entityHurt"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entityHurt"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityHurtAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityHurtAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when an entity is hurt (takes damage)."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entityspawn"},"entitySpawn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entitySpawn"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntitySpawnEventSignalAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"EntitySpawnEventSignalAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when an entity is spawned."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"explosion"},"explosion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"explosion"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ExplosionAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ExplosionAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event is fired after an explosion occurs."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemcompletecharge"},"itemCompleteCharge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemCompleteCharge"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCompleteChargeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemCompleteChargeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a chargeable item completes charging."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemdefinitionevent"},"itemDefinitionEvent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemDefinitionEvent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemDefinitionAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemDefinitionAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"For custom items, this event is triggered when the\nfundamental set of defined components for the item change.\nNote that this event is only fired for custom data-driven\nitems."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemreleasecharge"},"itemReleaseCharge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemReleaseCharge"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemReleaseChargeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemReleaseChargeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a chargeable item is released from\ncharging."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemstartcharge"},"itemStartCharge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemStartCharge"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/StartChargeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"StartChargeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a chargeable item starts charging."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemstartuseon"},"itemStartUseOn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemStartUseOn"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStartUseOnAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStartUseOnAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when any particular item is starting to be\nused by an entity or player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemstopcharge"},"itemStopCharge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemStopCharge"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStopChargeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStopChargeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a chargeable item stops charging."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemstopuseon"},"itemStopUseOn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemStopUseOn"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStopUseOnAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemStopUseOnAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when any particular item is ending being\nused by an entity or player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemuse"},"itemUse"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemUse"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemUseAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemUseAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when any particular item is used by an\nentity or player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"itemuseon"},"itemUseOn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"itemUseOn"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemUseOnAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemUseOnAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when any particular item is used on a block\nby an entity or player."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leveractivate"},"leverActivate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"leverActivate"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/LeverActionAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"LeverActionAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a lever activates or is deactivated."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"messagereceive"},"messageReceive"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"messageReceive"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ServerMessageAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ServerMessageAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event is an internal implementation detail, and is\notherwise not currently functional."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pistonactivate"},"pistonActivate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"pistonActivate"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PistonActivateAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"PistonActivateAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a piston expands or retracts."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerjoin"},"playerJoin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"playerJoin"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerJoinAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerJoinAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a player joins a world.  See also\nplayerSpawn for another related event you can trap for when\na player is spawned the first time within a world."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerleave"},"playerLeave"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"playerLeave"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerLeaveAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerLeaveAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a player leaves a world."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerspawn"},"playerSpawn"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"playerSpawn"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a player spawns or respawns. Note that\nan additional flag within this event will tell you whether\nthe player is spawning right after join vs. a respawn."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"projectilehit"},"projectileHit"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"projectileHit"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ProjectileHitAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectileHitAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when a projectile hits an entity or block."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"weatherchange"},"weatherChange"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"weatherChange"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/WeatherChangeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"WeatherChangeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event will be triggered when the weather changes within\nMinecraft."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"worldinitialize"},"worldInitialize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"worldInitialize"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/WorldInitializeAfterEventSignal_deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"WorldInitializeAfterEventSignal_deprecated"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This event fires when the script environment is initialized\non a World. In addition, you can register dynamic properties\nwithin the scope of a world Initialize event."))}k.isMDXComponent=!0}}]);