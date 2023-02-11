"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={id:"ItemStopChargeEventSignal",title:"Class: ItemStopChargeEventSignal",sidebar_label:"ItemStopChargeEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/ItemStopChargeEventSignal",id:"sapi/preview/server/classes/ItemStopChargeEventSignal",title:"Class: ItemStopChargeEventSignal",description:"Manages callbacks that are connected to the stopping of",source:"@site/docs/sapi/preview/server/classes/ItemStopChargeEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemStopChargeEventSignal",permalink:"/docs/sapi/preview/server/classes/ItemStopChargeEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStopChargeEventSignal",title:"Class: ItemStopChargeEventSignal",sidebar_label:"ItemStopChargeEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemStopChargeEvent",permalink:"/docs/sapi/preview/server/classes/ItemStopChargeEvent"},next:{title:"ItemStopUseOnEvent",permalink:"/docs/sapi/preview/server/classes/ItemStopUseOnEvent"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:o};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Manages callbacks that are connected to the stopping of\ncharging for an item that has a registered\nminecraft:chargeable component."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"new ItemStopChargeEventSignal"),"()"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"subscribe"},"subscribe"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"callback"),"): (",(0,n.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStopChargeEvent"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStopChargeEvent")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds a callback that will be called when a chargeable item\nstops charging."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"callback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ItemStopChargeEvent"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStopChargeEvent")),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fn")),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds a callback that will be called when a chargeable item\nstops charging."),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"arg")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ItemStopChargeEvent"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStopChargeEvent")))))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Removes a callback from being called when a chargeable item\nstops charging."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"callback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ItemStopChargeEvent"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStopChargeEvent")),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);