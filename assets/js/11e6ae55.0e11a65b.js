"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[8336],{15680:(e,r,a)=>{a.d(r,{xA:()=>y,yg:()=>u});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=n.createContext({}),o=function(e){var r=n.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},y=function(e){var r=o(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),g=o(a),c=t,u=g["".concat(p,".").concat(c)]||g[c]||d[c]||l;return a?n.createElement(u,i(i({ref:r},y),{},{components:a})):n.createElement(u,i({ref:r},y))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[g]="string"==typeof e?e:t,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33706:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(58168),t=(a(96540),a(15680));const l={id:"PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",sidebar_label:"PlayerSpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/PlayerSpawnAfterEventSignal",id:"sapi/preview/server/classes/PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",description:"Registers an event when a player is spawned (or re-spawned",source:"@site/docs/sapi/preview/server/classes/PlayerSpawnAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/PlayerSpawnAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",sidebar_label:"PlayerSpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"PlayerSpawnAfterEvent",permalink:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEvent"},next:{title:"PressurePlatePopAfterEvent",permalink:"/docs/sapi/preview/server/classes/PressurePlatePopAfterEvent"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],y={toc:o},g="wrapper";function d(e){let{components:r,...a}=e;return(0,t.yg)(g,(0,n.A)({},y,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Registers an event when a player is spawned (or re-spawned\nafter death) and fully ready within the world."),(0,t.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal"},(0,t.yg)("inlineCode",{parentName:"a"},"IPlayerSpawnAfterEventSignal"))),(0,t.yg)("p",{parentName:"li"},"\u21b3 ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"PlayerSpawnAfterEventSignal"))))),(0,t.yg)("h2",{id:"constructors"},"Constructors"),(0,t.yg)("h3",{id:"constructor"},"constructor"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,t.yg)("strong",{parentName:"p"},"new PlayerSpawnAfterEventSignal"),"()"),(0,t.yg)("h4",{id:"overrides"},"Overrides"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal#constructor"},"constructor")),(0,t.yg)("h2",{id:"methods"},"Methods"),(0,t.yg)("h3",{id:"subscribe"},"subscribe"),(0,t.yg)("p",null,"\u25b8 ",(0,t.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,t.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,t.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEvent"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,t.yg)("inlineCode",{parentName:"p"},"void")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Subscribes to the event."),(0,t.yg)("p",null,"This function can't be called in read-only mode."),(0,t.yg)("h4",{id:"parameters"},"Parameters"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"callback")),(0,t.yg)("td",{parentName:"tr",align:"left"},"(",(0,t.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,t.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEvent"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,t.yg)("inlineCode",{parentName:"td"},"void"))))),(0,t.yg)("h4",{id:"returns"},"Returns"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"fn")),(0,t.yg)("p",null,"\u25b8 (",(0,t.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,t.yg)("inlineCode",{parentName:"p"},"void")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Subscribes to the event."),(0,t.yg)("p",null,"This function can't be called in read-only mode."),(0,t.yg)("h5",{id:"parameters-1"},"Parameters"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"arg")),(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEvent"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")))))),(0,t.yg)("h5",{id:"returns-1"},"Returns"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"void")),(0,t.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal#subscribe"},"subscribe")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,t.yg)("p",null,"\u25b8 ",(0,t.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,t.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,t.yg)("inlineCode",{parentName:"p"},"void")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,t.yg)("p",null,"Unsubscribes from the event."),(0,t.yg)("p",null,"This function can't be called in read-only mode."),(0,t.yg)("h4",{id:"parameters-2"},"Parameters"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"callback")),(0,t.yg)("td",{parentName:"tr",align:"left"},"(",(0,t.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,t.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerSpawnAfterEvent"},(0,t.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,t.yg)("inlineCode",{parentName:"td"},"void"))))),(0,t.yg)("h4",{id:"returns-2"},"Returns"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"void")),(0,t.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,t.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IPlayerSpawnAfterEventSignal#unsubscribe"},"unsubscribe")))}d.isMDXComponent=!0}}]);