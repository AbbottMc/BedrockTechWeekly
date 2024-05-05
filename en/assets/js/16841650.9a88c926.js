"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[75992],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),g=o(n),c=a,u=g["".concat(p,".").concat(c)]||g[c]||d[c]||i;return n?r.createElement(u,l(l({ref:t},y),{},{components:n})):r.createElement(u,l({ref:t},y))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const i={id:"EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",sidebar_label:"EntitySpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/preview/server/classes/EntitySpawnAfterEventSignal",id:"sapi/preview/server/classes/EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",description:"Registers a script-based event handler for handling what",source:"@site/docs/sapi/preview/server/classes/EntitySpawnAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntitySpawnAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",sidebar_label:"EntitySpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntitySpawnAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEvent"},next:{title:"EntityStrengthComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityStrengthComponent"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],y={toc:o},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Registers a script-based event handler for handling what\nhappens when an entity spawns."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("p",null,"logEntitySpawnEvents.ts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"// Register a new function that is called when a new entity is created.\nimport { world, EntitySpawnAfterEvent } from '@minecraft/server';\n\nworld.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {\n    const spawnLocation = entityEvent.entity.location;\n    world.sendMessage(\n        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,\n    );\n});\n")),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntitySpawnAfterEventSignal"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"subscribe"},"subscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntitySpawnAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Method to register an event handler for what happens when an\nentity spawns."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntitySpawnAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Function that handles the spawn event.")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fn")),(0,a.yg)("p",null,"\u25b8 (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Method to register an event handler for what happens when an\nentity spawns."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h5",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"arg")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntitySpawnAfterEvent")))))),(0,a.yg)("h5",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Unregisters a method that was previously subscribed to the\nsubscription event."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/EntitySpawnAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntitySpawnAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Original function that was passed into the subscribe event, that is to be unregistered.")))),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);