"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74882],{15680:(e,r,a)=>{a.d(r,{xA:()=>y,yg:()=>u});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),o=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},y=function(e){var r=o(e.components);return t.createElement(p.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),g=o(a),c=n,u=g["".concat(p,".").concat(c)]||g[c]||d[c]||l;return a?t.createElement(u,s(s({ref:r},y),{},{components:a})):t.createElement(u,s({ref:r},y))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=c;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[g]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26569:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=a(58168),n=(a(96540),a(15680));const l={id:"PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",sidebar_label:"PlayerSpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/PlayerSpawnAfterEventSignal",id:"sapi/stable/server/classes/PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",description:"Registers an event when a player is spawned (or re-spawned",source:"@site/docs/sapi/stable/server/classes/PlayerSpawnAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerSpawnAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerSpawnAfterEventSignal",title:"Class: PlayerSpawnAfterEventSignal",sidebar_label:"PlayerSpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerSpawnAfterEvent",permalink:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEvent"},next:{title:"PressurePlatePopAfterEvent",permalink:"/docs/sapi/stable/server/classes/PressurePlatePopAfterEvent"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],y={toc:o},g="wrapper";function d(e){let{components:r,...a}=e;return(0,n.yg)(g,(0,t.A)({},y,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Registers an event when a player is spawned (or re-spawned\nafter death) and fully ready within the world."),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal"},(0,n.yg)("inlineCode",{parentName:"a"},"IPlayerSpawnAfterEventSignal"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"PlayerSpawnAfterEventSignal"))))),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new PlayerSpawnAfterEventSignal"),"()"),(0,n.yg)("h4",{id:"overrides"},"Overrides"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal#constructor"},"constructor")),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"subscribe"},"subscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Subscribes to the event."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"fn")),(0,n.yg)("p",null,"\u25b8 (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Subscribes to the event."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h5",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"arg")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")))))),(0,n.yg)("h5",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal#subscribe"},"subscribe")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Unsubscribes from the event."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/PlayerSpawnAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerSpawnAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal"},"IPlayerSpawnAfterEventSignal"),".",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IPlayerSpawnAfterEventSignal#unsubscribe"},"unsubscribe")))}d.isMDXComponent=!0}}]);