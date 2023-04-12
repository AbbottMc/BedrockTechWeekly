"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[25368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(r),d=a,u=v["".concat(l,".").concat(d)]||v[d]||m[d]||s;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[v]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={id:"SystemEvents",title:"Class: SystemEvents",sidebar_label:"SystemEvents",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/SystemEvents",id:"sapi/preview/server/classes/SystemEvents",title:"Class: SystemEvents",description:"Contains a set of events that are available across the scope",source:"@site/docs/sapi/preview/server/classes/SystemEvents.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/SystemEvents",permalink:"/en/docs/sapi/preview/server/classes/SystemEvents",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SystemEvents",title:"Class: SystemEvents",sidebar_label:"SystemEvents",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"System",permalink:"/en/docs/sapi/preview/server/classes/System"},next:{title:"Trigger",permalink:"/en/docs/sapi/preview/server/classes/Trigger"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"beforeWatchdogTerminate",id:"beforewatchdogterminate",level:3},{value:"scriptEventReceive",id:"scripteventreceive",level:3}],p={toc:c};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains a set of events that are available across the scope\nof the Minecraft add-on system."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"beforewatchdogterminate"},"beforeWatchdogTerminate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"beforeWatchdogTerminate"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/WatchdogTerminateBeforeEventSignal"},(0,a.kt)("inlineCode",{parentName:"a"},"WatchdogTerminateBeforeEventSignal"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This event fires before a the performance watchdog\nterminates scripting execution due to exceeding a\nperformance boundary. Depending on the configuration of the\nruntime environment, this event can be canceled. For\nexample, on certain dedicated server environments the\nability to override termination events may be disabled."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scripteventreceive"},"scriptEventReceive"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"scriptEventReceive"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ScriptEventCommandMessageAfterEventSignal"},(0,a.kt)("inlineCode",{parentName:"a"},"ScriptEventCommandMessageAfterEventSignal"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This event fires if a /scriptevent command is invoked by a\nplayer, NPC, or block."))}v.isMDXComponent=!0}}]);