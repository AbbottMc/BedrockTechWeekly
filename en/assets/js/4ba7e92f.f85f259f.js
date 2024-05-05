"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88887],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,u=d["".concat(s,".").concat(y)]||d[y]||g[y]||l;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={id:"BlockExplodeAfterEventSignal",title:"Class: BlockExplodeAfterEventSignal",sidebar_label:"BlockExplodeAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/BlockExplodeAfterEventSignal",id:"sapi/preview/server/classes/BlockExplodeAfterEventSignal",title:"Class: BlockExplodeAfterEventSignal",description:"Manages callbacks that are connected to when an explosion",source:"@site/docs/sapi/preview/server/classes/BlockExplodeAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockExplodeAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockExplodeAfterEventSignal",title:"Class: BlockExplodeAfterEventSignal",sidebar_label:"BlockExplodeAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockExplodeAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEvent"},next:{title:"BlockInventoryComponent",permalink:"/en/docs/sapi/preview/server/classes/BlockInventoryComponent"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Manages callbacks that are connected to when an explosion\noccurs, as it impacts individual blocks."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new BlockExplodeAfterEventSignal"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"subscribe"},"subscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockExplodeAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called when an explosion\noccurs, as it impacts individual blocks."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockExplodeAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fn")),(0,a.yg)("p",null,"\u25b8 (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called when an explosion\noccurs, as it impacts individual blocks."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h5",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"arg")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockExplodeAfterEvent")))))),(0,a.yg)("h5",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Removes a callback from being called when an explosion\noccurs, as it impacts individual blocks."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/BlockExplodeAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockExplodeAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}g.isMDXComponent=!0}}]);