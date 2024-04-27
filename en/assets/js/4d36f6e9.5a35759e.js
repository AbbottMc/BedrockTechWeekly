"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"IMenu",title:"Interface: IMenu",sidebar_label:"IMenu",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server-editor/interfaces/IMenu",id:"sapi/stable/server-editor/interfaces/IMenu",title:"Interface: IMenu",description:"Properties",source:"@site/docs/sapi/stable/server-editor/interfaces/IMenu.md",sourceDirName:"sapi/stable/server-editor/interfaces",slug:"/sapi/stable/server-editor/interfaces/IMenu",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IMenu",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IMenu",title:"Interface: IMenu",sidebar_label:"IMenu",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"IGlobalInputManager",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IGlobalInputManager"},next:{title:"IMenuContainer",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IMenuContainer"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"checked",id:"checked",level:3},{value:"id",id:"id",level:3},{value:"submenu",id:"submenu",level:3},{value:"Methods",id:"methods",level:2},{value:"addItem",id:"additem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"hide",id:"hide",level:3},{value:"Returns",id:"returns-2",level:4},{value:"replaceAction",id:"replaceaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"show",id:"show",level:3},{value:"Returns",id:"returns-4",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"checked"},"checked"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"checked"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If defined, the menu will show a checked or unchecked\ncheckbox."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Unique ID for the menu"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"submenu"},"submenu"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"submenu"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Sub menus of this menu"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"additem"},"addItem"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addItem"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"action?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenuCreationParams"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenuCreationParams")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/modules#registeredaction"},(0,a.kt)("inlineCode",{parentName:"a"},"RegisteredAction")),"<",(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/modules#noargsaction"},(0,a.kt)("inlineCode",{parentName:"a"},"NoArgsAction")),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hide"},"hide"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hide"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"replaceaction"},"replaceAction"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"replaceAction"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/modules#registeredaction"},(0,a.kt)("inlineCode",{parentName:"a"},"RegisteredAction")),"<",(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/modules#noargsaction"},(0,a.kt)("inlineCode",{parentName:"a"},"NoArgsAction")),">")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"show"},"show"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"show"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);