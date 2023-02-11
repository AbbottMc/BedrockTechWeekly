"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[55156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"BeforeWatchdogTerminateEvent",title:"Class: BeforeWatchdogTerminateEvent",sidebar_label:"BeforeWatchdogTerminateEvent",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/BeforeWatchdogTerminateEvent",id:"sapi/stable/server/classes/BeforeWatchdogTerminateEvent",title:"Class: BeforeWatchdogTerminateEvent",description:"Contains information related to a script watchdog",source:"@site/docs/sapi/stable/server/classes/BeforeWatchdogTerminateEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BeforeWatchdogTerminateEvent",permalink:"/en/docs/sapi/stable/server/classes/BeforeWatchdogTerminateEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeWatchdogTerminateEvent",title:"Class: BeforeWatchdogTerminateEvent",sidebar_label:"BeforeWatchdogTerminateEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BeforePistonActivateEventSignal",permalink:"/en/docs/sapi/stable/server/classes/BeforePistonActivateEventSignal"},next:{title:"BeforeWatchdogTerminateEventSignal",permalink:"/en/docs/sapi/stable/server/classes/BeforeWatchdogTerminateEventSignal"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"terminateReason",id:"terminatereason",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to a script watchdog\ntermination."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancel"},"cancel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cancel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If set to true, cancels the termination of the script\nruntime. Note that depending on server configuration\nsettings, cancellation of the termination may not be\nallowed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"terminatereason"},"terminateReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"terminateReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/enums/WatchdogTerminateReason"},(0,a.kt)("inlineCode",{parentName:"a"},"WatchdogTerminateReason"))),(0,a.kt)("p",null,"Contains the reason why a script runtime is to be\nterminated."))}d.isMDXComponent=!0}}]);