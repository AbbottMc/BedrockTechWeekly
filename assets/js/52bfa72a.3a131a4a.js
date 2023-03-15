"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,v=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return r?a.createElement(v,l(l({ref:t},d),{},{components:r})):a.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"BeforeChatEvent",title:"Class: BeforeChatEvent",sidebar_label:"BeforeChatEvent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/BeforeChatEvent",id:"sapi/stable/server/classes/BeforeChatEvent",title:"Class: BeforeChatEvent",description:"An event that fires as players enter chat messages.",source:"@site/docs/sapi/stable/server/classes/BeforeChatEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BeforeChatEvent",permalink:"/docs/sapi/stable/server/classes/BeforeChatEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeChatEvent",title:"Class: BeforeChatEvent",sidebar_label:"BeforeChatEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"\u811a\u672cAPI\uff08Minecraft\u7a33\u5b9a\u7248\uff09",permalink:"/docs/sapi/stable/"},next:{title:"BeforeChatEventSignal",permalink:"/docs/sapi/stable/server/classes/BeforeChatEventSignal"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"message",id:"message",level:3},{value:"sendToTargets",id:"sendtotargets",level:3},{value:"sender",id:"sender",level:3},{value:"Methods",id:"methods",level:2},{value:"getTargets",id:"gettargets",level:3},{value:"Returns",id:"returns",level:4},{value:"setTargets",id:"settargets",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An event that fires as players enter chat messages."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"cancel"},"cancel"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"cancel"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"If set to true in a beforeChat event handler, this message\nis not broadcast out."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"message"},"message"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"message"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Message that is being broadcast. In a beforeChat event\nhandler, ",(0,n.kt)("em",{parentName:"p"},"message")," can be updated with edits before the\nmessage is displayed to players."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sendtotargets"},"sendToTargets"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"sendToTargets"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"If true, this message is directly targeted to one or more\nplayers (i.e., is not broadcast.)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sender"},"sender"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"sender"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player"))),(0,n.kt)("p",null,"Player that sent the chat message."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"gettargets"},"getTargets"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getTargets"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"settargets"},"setTargets"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setTargets"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"players"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"players")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),"[]")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);