"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[93818],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(n),c=r,u=d["".concat(o,".").concat(c)]||d[c]||y[c]||l;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={id:"EntityHealthChangedAfterEventSignal",title:"Class: EntityHealthChangedAfterEventSignal",sidebar_label:"EntityHealthChangedAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/EntityHealthChangedAfterEventSignal",id:"sapi/stable/server/classes/EntityHealthChangedAfterEventSignal",title:"Class: EntityHealthChangedAfterEventSignal",description:"Manages callbacks that are connected to when the health of",source:"@site/docs/sapi/stable/server/classes/EntityHealthChangedAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityHealthChangedAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityHealthChangedAfterEventSignal",title:"Class: EntityHealthChangedAfterEventSignal",sidebar_label:"EntityHealthChangedAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHealthChangedAfterEvent",permalink:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEvent"},next:{title:"EntityHealthComponent",permalink:"/docs/sapi/stable/server/classes/EntityHealthComponent"}},o={},g=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:g},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Manages callbacks that are connected to when the health of\nan entity changes."),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new EntityHealthChangedAfterEventSignal"),"()"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"subscribe"},"subscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"options?"),"): (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityHealthChangedAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when the health of an\nentity changes."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityHealthChangedAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/EntityEventOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityEventOptions")))))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fn")),(0,r.yg)("p",null,"\u25b8 (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when the health of an\nentity changes."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h5",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"arg")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityHealthChangedAfterEvent")))))),(0,r.yg)("h5",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Removes a callback from being called when the health of an\nentity changes."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityHealthChangedAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")))}y.isMDXComponent=!0}}]);