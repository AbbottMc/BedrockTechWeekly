"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[87978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"LogProperties",title:"Interface: LogProperties",sidebar_label:"LogProperties",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server-editor/interfaces/LogProperties",id:"sapi/stable/server-editor/interfaces/LogProperties",title:"Interface: LogProperties",description:"A properties class for the global instance of the logger",source:"@site/docs/sapi/stable/server-editor/interfaces/LogProperties.md",sourceDirName:"sapi/stable/server-editor/interfaces",slug:"/sapi/stable/server-editor/interfaces/LogProperties",permalink:"/en/docs/sapi/stable/server-editor/interfaces/LogProperties",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LogProperties",title:"Interface: LogProperties",sidebar_label:"LogProperties",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"IStatusBarItem",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IStatusBarItem"},next:{title:"ModalToolCreationParameters",permalink:"/en/docs/sapi/stable/server-editor/interfaces/ModalToolCreationParameters"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"player",id:"player",level:3},{value:"tags",id:"tags",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A properties class for the global instance of the logger\nobject.\nWhile the logger object is available through the ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/classes/ExtensionContext"},"ExtensionContext")," - using the global instance allows the\ncreator to use this properties class to perform direct\nserver->client messaging and broadcasts."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"player"},"player"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"player"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Direct a log message to a specific player.  If no player is\nspecified, then all players will receive the message"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tags"},"tags"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tags"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Add additional tags to the log message which can be used by\nthe client session to filter/search in the log window"))}d.isMDXComponent=!0}}]);