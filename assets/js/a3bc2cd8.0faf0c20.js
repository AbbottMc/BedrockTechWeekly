"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"PlayerDimensionChangeAfterEventSignal",title:"Class: PlayerDimensionChangeAfterEventSignal",sidebar_label:"PlayerDimensionChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/preview/server/classes/PlayerDimensionChangeAfterEventSignal",id:"sapi/preview/server/classes/PlayerDimensionChangeAfterEventSignal",title:"Class: PlayerDimensionChangeAfterEventSignal",description:"Manages callbacks that are connected to successful player",source:"@site/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/PlayerDimensionChangeAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerDimensionChangeAfterEventSignal",title:"Class: PlayerDimensionChangeAfterEventSignal",sidebar_label:"PlayerDimensionChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"PlayerDimensionChangeAfterEvent",permalink:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEvent"},next:{title:"PlayerGameModeChangeAfterEvent",permalink:"/docs/sapi/preview/server/classes/PlayerGameModeChangeAfterEvent"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manages callbacks that are connected to successful player\ndimension changes."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new PlayerDimensionChangeAfterEventSignal"),"()"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"subscribe"},"subscribe"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"): (",(0,a.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PlayerDimensionChangeAfterEvent")),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Subscribes the specified callback to a player dimension\nchange after event."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PlayerDimensionChangeAfterEvent")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fn")),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"arg"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Subscribes the specified callback to a player dimension\nchange after event."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"arg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PlayerDimensionChangeAfterEvent")))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Removes the specified callback from a player dimension\nchange after event."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/PlayerDimensionChangeAfterEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PlayerDimensionChangeAfterEvent")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);