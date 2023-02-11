"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,m=u["".concat(i,".").concat(v)]||u[v]||d[v]||s;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=v;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},69744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={id:"ChatEvent",title:"Class: ChatEvent",sidebar_label:"ChatEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/ChatEvent",id:"sapi/stable/server/classes/ChatEvent",title:"Class: ChatEvent",description:"An event that fires as players enter chat messages.",source:"@site/docs/sapi/stable/server/classes/ChatEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ChatEvent",permalink:"/docs/sapi/stable/server/classes/ChatEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatEvent",title:"Class: ChatEvent",sidebar_label:"ChatEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ButtonPushEventSignal",permalink:"/docs/sapi/stable/server/classes/ButtonPushEventSignal"},next:{title:"ChatEventSignal",permalink:"/docs/sapi/stable/server/classes/ChatEventSignal"}},i={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"message",id:"message",level:3},{value:"sendToTargets",id:"sendtotargets",level:3},{value:"sender",id:"sender",level:3},{value:"targets",id:"targets",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An event that fires as players enter chat messages."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"new ChatEvent"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Message that is being broadcast. In a beforeChat event\nhandler, ",(0,a.kt)("em",{parentName:"p"},"message")," can be updated with edits before the\nmessage is displayed to players."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sendtotargets"},"sendToTargets"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sendToTargets"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true, this message is directly targeted to one or more\nplayers (i.e., is not broadcast.)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sender"},"sender"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sender"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player"))),(0,a.kt)("p",null,"Player that sent the chat message."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targets"},"targets"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"targets"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,a.kt)("p",null,"List of players that will receive this message."))}u.isMDXComponent=!0}}]);