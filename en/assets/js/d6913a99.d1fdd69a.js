"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[25368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=l(r),u=s,m=v["".concat(c,".").concat(u)]||v[u]||d[u]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[v]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={id:"SystemEvents",title:"Class: SystemEvents",sidebar_label:"SystemEvents",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/SystemEvents",id:"sapi/preview/server/classes/SystemEvents",title:"Class: SystemEvents",description:"Contains a set of events that are available across the scope",source:"@site/docs/sapi/preview/server/classes/SystemEvents.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/SystemEvents",permalink:"/en/docs/sapi/preview/server/classes/SystemEvents",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SystemEvents",title:"Class: SystemEvents",sidebar_label:"SystemEvents",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"System",permalink:"/en/docs/sapi/preview/server/classes/System"},next:{title:"TickEvent",permalink:"/en/docs/sapi/preview/server/classes/TickEvent"}},c={},l=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"beforeWatchdogTerminate",id:"beforewatchdogterminate",level:3},{value:"scriptEventReceive",id:"scripteventreceive",level:3}],p={toc:l};function v(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Contains a set of events that are available across the scope\nof the Minecraft add-on system."),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"new SystemEvents"),"()"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"beforewatchdogterminate"},"beforeWatchdogTerminate"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"beforeWatchdogTerminate"),": ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BeforeWatchdogTerminateEventSignal"},(0,s.kt)("inlineCode",{parentName:"a"},"BeforeWatchdogTerminateEventSignal"))),(0,s.kt)("p",null,"This event fires before a the performance watchdog\nterminates scripting execution due to exceeding a\nperformance boundary. Depending on the configuration of the\nruntime environment, this event can be canceled. For\nexample, on certain dedicated server environments the\nability to override termination events may be disabled."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"scripteventreceive"},"scriptEventReceive"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"scriptEventReceive"),": ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ScriptEventCommandMessageSignal"},(0,s.kt)("inlineCode",{parentName:"a"},"ScriptEventCommandMessageSignal"))),(0,s.kt)("p",null,"This event fires if a /scriptevent command is invoked by a\nplayer, NPC, or block."))}v.isMDXComponent=!0}}]);