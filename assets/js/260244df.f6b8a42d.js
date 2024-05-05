"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90371],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),y=p(r),m=n,u=y["".concat(o,".").concat(m)]||y[m]||d[m]||l;return r?a.createElement(u,i(i({ref:t},s),{},{components:r})):a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[y]="string"==typeof e?e:n,i[1]=g;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={id:"IPlayerLogger",title:"Interface: IPlayerLogger",sidebar_label:"IPlayerLogger",sidebar_position:0,custom_edit_url:null},i=void 0,g={unversionedId:"sapi/stable/server-editor/interfaces/IPlayerLogger",id:"sapi/stable/server-editor/interfaces/IPlayerLogger",title:"Interface: IPlayerLogger",description:"Log helper interface for Player.",source:"@site/docs/sapi/stable/server-editor/interfaces/IPlayerLogger.md",sourceDirName:"sapi/stable/server-editor/interfaces",slug:"/sapi/stable/server-editor/interfaces/IPlayerLogger",permalink:"/docs/sapi/stable/server-editor/interfaces/IPlayerLogger",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IPlayerLogger",title:"Interface: IPlayerLogger",sidebar_label:"IPlayerLogger",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"IModalToolContainer",permalink:"/docs/sapi/stable/server-editor/interfaces/IModalToolContainer"},next:{title:"IPropertyItem",permalink:"/docs/sapi/stable/server-editor/interfaces/IPropertyItem"}},o={},p=[{value:"Methods",id:"methods",level:2},{value:"debug",id:"debug",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"error",id:"error",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"warning",id:"warning",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4}],s={toc:p},y="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Log helper interface for Player."),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"debug"},"debug"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"debug"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Dispatch a player log message with Debug log level"),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Message content")))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"error"},"error"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"error"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Dispatch a player log message with Error log level"),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Message content")))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"info"},"info"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"info"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Dispatch a player log message with Info log level"),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Message content")))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"warning"},"warning"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"warning"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Dispatch a player log message with Warning log level"),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Message content")))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);