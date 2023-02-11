"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>v,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},v=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=i,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||r;return n?a.createElement(c,l(l({ref:t},v),{},{components:n})):a.createElement(c,l({ref:t},v))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"Events",title:"Class: Events",sidebar_label:"Events",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/preview/server/classes/Events",id:"sapi/preview/server/classes/Events",title:"Class: Events",description:"Contains a set of events that are available across the scope",source:"@site/docs/sapi/preview/server/classes/Events.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Events",permalink:"/docs/sapi/preview/server/classes/Events",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Events",title:"Class: Events",sidebar_label:"Events",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityWantsJockeyComponent",permalink:"/docs/sapi/preview/server/classes/EntityWantsJockeyComponent"},next:{title:"ExplosionEvent",permalink:"/docs/sapi/preview/server/classes/ExplosionEvent"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"beforeChat",id:"beforechat",level:3},{value:"beforeDataDrivenEntityTriggerEvent",id:"beforedatadrivenentitytriggerevent",level:3},{value:"beforeExplosion",id:"beforeexplosion",level:3},{value:"beforeItemDefinitionEvent",id:"beforeitemdefinitionevent",level:3},{value:"beforeItemUse",id:"beforeitemuse",level:3},{value:"beforeItemUseOn",id:"beforeitemuseon",level:3},{value:"beforePistonActivate",id:"beforepistonactivate",level:3},{value:"blockBreak",id:"blockbreak",level:3},{value:"blockExplode",id:"blockexplode",level:3},{value:"blockPlace",id:"blockplace",level:3},{value:"buttonPush",id:"buttonpush",level:3},{value:"chat",id:"chat",level:3},{value:"dataDrivenEntityTriggerEvent",id:"datadrivenentitytriggerevent",level:3},{value:"effectAdd",id:"effectadd",level:3},{value:"entityDie",id:"entitydie",level:3},{value:"entityHit",id:"entityhit",level:3},{value:"entityHurt",id:"entityhurt",level:3},{value:"entitySpawn",id:"entityspawn",level:3},{value:"explosion",id:"explosion",level:3},{value:"itemCompleteCharge",id:"itemcompletecharge",level:3},{value:"itemDefinitionEvent",id:"itemdefinitionevent",level:3},{value:"itemReleaseCharge",id:"itemreleasecharge",level:3},{value:"itemStartCharge",id:"itemstartcharge",level:3},{value:"itemStartUseOn",id:"itemstartuseon",level:3},{value:"itemStopCharge",id:"itemstopcharge",level:3},{value:"itemStopUseOn",id:"itemstopuseon",level:3},{value:"itemUse",id:"itemuse",level:3},{value:"itemUseOn",id:"itemuseon",level:3},{value:"leverActivate",id:"leveractivate",level:3},{value:"messageReceive",id:"messagereceive",level:3},{value:"pistonActivate",id:"pistonactivate",level:3},{value:"playerJoin",id:"playerjoin",level:3},{value:"playerLeave",id:"playerleave",level:3},{value:"playerSpawn",id:"playerspawn",level:3},{value:"projectileHit",id:"projectilehit",level:3},{value:"weatherChange",id:"weatherchange",level:3},{value:"worldInitialize",id:"worldinitialize",level:3}],v={toc:o};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains a set of events that are available across the scope\nof the World."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"beforechat"},"beforeChat"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeChat"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeChatEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeChatEventSignal"))),(0,i.kt)("p",null,"This event fires before a chat message is broadcast or\ndelivered. The event can be canceled, and the message can\nalso be updated."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforedatadrivenentitytriggerevent"},"beforeDataDrivenEntityTriggerEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeDataDrivenEntityTriggerEvent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeDataDrivenEntityTriggerEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeDataDrivenEntityTriggerEventSignal"))),(0,i.kt)("p",null,"This event is fired before the triggering of an entity event\nthat updates the component definition state of an entity.\nWithin this event, you can cancel or shape the impacted\ncomponents and event triggers."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforeexplosion"},"beforeExplosion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeExplosion"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeExplosionEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeExplosionEventSignal"))),(0,i.kt)("p",null,"This event is fired before an explosion occurs."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforeitemdefinitionevent"},"beforeItemDefinitionEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeItemDefinitionEvent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeItemDefinitionEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeItemDefinitionEventSignal"))),(0,i.kt)("p",null,"For custom items, this event is triggered before the set of\ndefined components for the item change in response to a\ntriggered event. Note that this event is only fired for\ncustom data-driven items."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforeitemuse"},"beforeItemUse"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeItemUse"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeItemUseEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeItemUseEventSignal"))),(0,i.kt)("p",null,"This event fires before an item is used by an entity or\nplayer."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforeitemuseon"},"beforeItemUseOn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforeItemUseOn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforeItemUseOnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforeItemUseOnEventSignal"))),(0,i.kt)("p",null,"This event fires before an item is used on a block by an\nentity or player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beforepistonactivate"},"beforePistonActivate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"beforePistonActivate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BeforePistonActivateEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BeforePistonActivateEventSignal"))),(0,i.kt)("p",null,"Fires before a piston is activated."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockbreak"},"blockBreak"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"blockBreak"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockBreakEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockBreakEventSignal"))),(0,i.kt)("p",null,"This event fires for a block that is broken by a player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockexplode"},"blockExplode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"blockExplode"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockExplodeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockExplodeEventSignal"))),(0,i.kt)("p",null,"This event fires for each BlockLocation destroyed by an\nexplosion. It is fired after the blocks have already been\ndestroyed."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockplace"},"blockPlace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"blockPlace"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockPlaceEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockPlaceEventSignal"))),(0,i.kt)("p",null,"This event fires for a block that is placed by a player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buttonpush"},"buttonPush"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"buttonPush"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ButtonPushEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ButtonPushEventSignal"))),(0,i.kt)("p",null,"This event fires when a button is pushed."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chat"},"chat"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"chat"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ChatEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatEventSignal"))),(0,i.kt)("p",null,"This event is triggered after a chat message has been\nbroadcast or sent to players."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datadrivenentitytriggerevent"},"dataDrivenEntityTriggerEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"dataDrivenEntityTriggerEvent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/DataDrivenEntityTriggerEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"DataDrivenEntityTriggerEventSignal"))),(0,i.kt)("p",null,"This event is fired when an entity event has been triggered\nthat will update the component definition state of an\nentity."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effectadd"},"effectAdd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"effectAdd"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EffectAddEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectAddEventSignal"))),(0,i.kt)("p",null,"This event fires when an effect, like poisoning, is added to\nan entity."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entitydie"},"entityDie"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entityDie"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityDieEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDieEventSignal"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entityhit"},"entityHit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entityHit"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityHitEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityHitEventSignal"))),(0,i.kt)("p",null,"This event fires when an entity hits (makes a melee attack)\nand potentially impacts another entity or block."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entityhurt"},"entityHurt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entityHurt"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityHurtEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityHurtEventSignal"))),(0,i.kt)("p",null,"This event fires when an entity is hurt (takes damage)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entityspawn"},"entitySpawn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entitySpawn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntitySpawnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"EntitySpawnEventSignal"))),(0,i.kt)("p",null,"This event fires when an entity is spawned."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"explosion"},"explosion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"explosion"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ExplosionEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ExplosionEventSignal"))),(0,i.kt)("p",null,"This event is fired after an explosion occurs."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemcompletecharge"},"itemCompleteCharge"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemCompleteCharge"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemCompleteChargeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemCompleteChargeEventSignal"))),(0,i.kt)("p",null,"This event fires when a chargeable item completes charging."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemdefinitionevent"},"itemDefinitionEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemDefinitionEvent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemDefinitionEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemDefinitionEventSignal"))),(0,i.kt)("p",null,"For custom items, this event is triggered when the\nfundamental set of defined components for the item change.\nNote that this event is only fired for custom data-driven\nitems."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemreleasecharge"},"itemReleaseCharge"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemReleaseCharge"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemReleaseChargeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemReleaseChargeEventSignal"))),(0,i.kt)("p",null,"This event fires when a chargeable item is released from\ncharging."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemstartcharge"},"itemStartCharge"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemStartCharge"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStartChargeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemStartChargeEventSignal"))),(0,i.kt)("p",null,"This event fires when a chargeable item starts charging."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemstartuseon"},"itemStartUseOn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemStartUseOn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStartUseOnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemStartUseOnEventSignal"))),(0,i.kt)("p",null,"This event fires when any particular item is starting to be\nused by an entity or player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemstopcharge"},"itemStopCharge"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemStopCharge"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStopChargeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemStopChargeEventSignal"))),(0,i.kt)("p",null,"This event fires when a chargeable item stops charging."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemstopuseon"},"itemStopUseOn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemStopUseOn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStopUseOnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemStopUseOnEventSignal"))),(0,i.kt)("p",null,"This event fires when any particular item is ending being\nused by an entity or player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemuse"},"itemUse"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemUse"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemUseEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemUseEventSignal"))),(0,i.kt)("p",null,"This event fires when any particular item is used by an\nentity or player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"itemuseon"},"itemUseOn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"itemUseOn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemUseOnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemUseOnEventSignal"))),(0,i.kt)("p",null,"This event fires when any particular item is used on a block\nby an entity or player."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"leveractivate"},"leverActivate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"leverActivate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/LeverActionEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"LeverActionEventSignal"))),(0,i.kt)("p",null,"This event fires when a lever activates or is deactivated."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"messagereceive"},"messageReceive"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"messageReceive"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ServerMessageSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ServerMessageSignal"))),(0,i.kt)("p",null,"This event is an internal implementation detail, and is\notherwise not currently functional."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pistonactivate"},"pistonActivate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"pistonActivate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PistonActivateEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"PistonActivateEventSignal"))),(0,i.kt)("p",null,"This event fires when a piston expands or retracts."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"playerjoin"},"playerJoin"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"playerJoin"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerJoinEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"PlayerJoinEventSignal"))),(0,i.kt)("p",null,"This event fires when a player joins a world.  See also\nplayerSpawn for another related event you can trap for when\na player is spawned the first time within a world."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"playerleave"},"playerLeave"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"playerLeave"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerLeaveEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"PlayerLeaveEventSignal"))),(0,i.kt)("p",null,"This event fires when a player leaves a world."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"playerspawn"},"playerSpawn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"playerSpawn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerSpawnEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"PlayerSpawnEventSignal"))),(0,i.kt)("p",null,"This event fires when a player spawns or respawns. Note that\nan additional flag within this event will tell you whether\nthe player is spawning right after join vs. a respawn."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"projectilehit"},"projectileHit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"projectileHit"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ProjectileHitEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"ProjectileHitEventSignal"))),(0,i.kt)("p",null,"This event fires when a projectile hits an entity or block."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"weatherchange"},"weatherChange"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"weatherChange"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/WeatherChangeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"WeatherChangeEventSignal"))),(0,i.kt)("p",null,"This event will be triggered when the weather changes within\nMinecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"worldinitialize"},"worldInitialize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"worldInitialize"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/WorldInitializeEventSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"WorldInitializeEventSignal"))),(0,i.kt)("p",null,"This event fires when the script environment is initialized\non a World. In addition, you can register dynamic properties\nwithin the scope of a world Initialize event."))}d.isMDXComponent=!0}}]);