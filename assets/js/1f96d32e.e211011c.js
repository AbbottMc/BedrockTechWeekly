"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,m=u["".concat(o,".").concat(v)]||u[v]||d[v]||s;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=v;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},69744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"ChatEvent",title:"Class: ChatEvent",sidebar_label:"ChatEvent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/ChatEvent",id:"sapi/stable/server/classes/ChatEvent",title:"Class: ChatEvent",description:"An event that fires as players enter chat messages.",source:"@site/docs/sapi/stable/server/classes/ChatEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ChatEvent",permalink:"/docs/sapi/stable/server/classes/ChatEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatEvent",title:"Class: ChatEvent",sidebar_label:"ChatEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ButtonPushEventSignal",permalink:"/docs/sapi/stable/server/classes/ButtonPushEventSignal"},next:{title:"ChatEventSignal",permalink:"/docs/sapi/stable/server/classes/ChatEventSignal"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"message",id:"message",level:3},{value:"sendToTargets",id:"sendtotargets",level:3},{value:"sender",id:"sender",level:3},{value:"targets",id:"targets",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An event that fires as players enter chat messages."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"message"},"message"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"message"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Message that is being broadcast. In a beforeChat event\nhandler, ",(0,n.kt)("em",{parentName:"p"},"message")," can be updated with edits before the\nmessage is displayed to players."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sendtotargets"},"sendToTargets"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"sendToTargets"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"If true, this message is directly targeted to one or more\nplayers (i.e., is not broadcast.)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sender"},"sender"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"sender"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player"))),(0,n.kt)("p",null,"Player that sent the chat message."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"targets"},"targets"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"targets"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,n.kt)("p",null,"List of players that will receive this message."))}u.isMDXComponent=!0}}]);