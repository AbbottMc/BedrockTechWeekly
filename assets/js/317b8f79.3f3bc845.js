"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"IMenu",title:"Interface: IMenu",sidebar_label:"IMenu",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/preview/server-editor/interfaces/IMenu",id:"sapi/preview/server-editor/interfaces/IMenu",title:"Interface: IMenu",description:"Properties",source:"@site/docs/sapi/preview/server-editor/interfaces/IMenu.md",sourceDirName:"sapi/preview/server-editor/interfaces",slug:"/sapi/preview/server-editor/interfaces/IMenu",permalink:"/docs/sapi/preview/server-editor/interfaces/IMenu",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IMenu",title:"Interface: IMenu",sidebar_label:"IMenu",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"IGlobalInputManager",permalink:"/docs/sapi/preview/server-editor/interfaces/IGlobalInputManager"},next:{title:"IMenuContainer",permalink:"/docs/sapi/preview/server-editor/interfaces/IMenuContainer"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"checked",id:"checked",level:3},{value:"id",id:"id",level:3},{value:"submenu",id:"submenu",level:3},{value:"Methods",id:"methods",level:2},{value:"addItem",id:"additem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"hide",id:"hide",level:3},{value:"Returns",id:"returns-2",level:4},{value:"replaceAction",id:"replaceaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"show",id:"show",level:3},{value:"Returns",id:"returns-4",level:4}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"checked"},"checked"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"checked"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If defined, the menu will show a checked or unchecked\ncheckbox."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Unique ID for the menu"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"submenu"},"submenu"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"submenu"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Sub menus of this menu"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"additem"},"addItem"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addItem"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"action?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/interfaces/IMenuCreationParams"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenuCreationParams")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules#registeredaction"},(0,a.kt)("inlineCode",{parentName:"a"},"RegisteredAction")),"<",(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules#noargsaction"},(0,a.kt)("inlineCode",{parentName:"a"},"NoArgsAction")),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hide"},"hide"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hide"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"replaceaction"},"replaceAction"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"replaceAction"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules#registeredaction"},(0,a.kt)("inlineCode",{parentName:"a"},"RegisteredAction")),"<",(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules#noargsaction"},(0,a.kt)("inlineCode",{parentName:"a"},"NoArgsAction")),">")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"show"},"show"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"show"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);