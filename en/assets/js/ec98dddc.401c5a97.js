"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92983],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),c=a,y=g["".concat(o,".").concat(c)]||g[c]||m[c]||l;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const l={id:"ItemUseBeforeEventSignal",title:"Class: ItemUseBeforeEventSignal",sidebar_label:"ItemUseBeforeEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/ItemUseBeforeEventSignal",id:"sapi/preview/server/classes/ItemUseBeforeEventSignal",title:"Class: ItemUseBeforeEventSignal",description:"Manages callbacks that fire before an item is used.",source:"@site/docs/sapi/preview/server/classes/ItemUseBeforeEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemUseBeforeEventSignal",permalink:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemUseBeforeEventSignal",title:"Class: ItemUseBeforeEventSignal",sidebar_label:"ItemUseBeforeEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemUseBeforeEvent",permalink:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEvent"},next:{title:"ItemUseOnAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/ItemUseOnAfterEvent"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],d={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Manages callbacks that fire before an item is used."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ItemUseBeforeEventSignal"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"subscribe"},"subscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemUseBeforeEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called before an item is used."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemUseBeforeEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fn")),(0,a.yg)("p",null,"\u25b8 (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called before an item is used."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h5",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"arg")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemUseBeforeEvent")))))),(0,a.yg)("h5",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Removes a callback from being called before an item is used."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemUseBeforeEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemUseBeforeEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);