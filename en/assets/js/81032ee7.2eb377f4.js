"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[31902],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(o,".").concat(y)]||d[y]||g[y]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},52696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"ChatSendAfterEventSignal",title:"Class: ChatSendAfterEventSignal",sidebar_label:"ChatSendAfterEventSignal",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server/classes/ChatSendAfterEventSignal",id:"sapi/preview/server/classes/ChatSendAfterEventSignal",title:"Class: ChatSendAfterEventSignal",description:"Manages callbacks that are connected to chat messages being",source:"@site/docs/sapi/preview/server/classes/ChatSendAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ChatSendAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/ChatSendAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatSendAfterEventSignal",title:"Class: ChatSendAfterEventSignal",sidebar_label:"ChatSendAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ChatSendAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/ChatSendAfterEvent"},next:{title:"ChatSendBeforeEvent",permalink:"/en/docs/sapi/preview/server/classes/ChatSendBeforeEvent"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Manages callbacks that are connected to chat messages being\nsent."),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new ChatSendAfterEventSignal"),"()"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"subscribe"},"subscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ChatSendAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ChatSendAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when new chat messages\nare sent."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"custom_command.js"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {\n  if (eventData.message.includes("cancel")) {\n    // Cancel event if the message contains "cancel"\n    eventData.canceled = true;\n  } else {\n    // Modify chat message being sent\n    eventData.message = `Modified \'${eventData.message}\'`;\n  }\n});\n')),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ChatSendAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ChatSendAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fn")),(0,r.yg)("p",null,"\u25b8 (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when new chat messages\nare sent."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"custom_command.js"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {\n  if (eventData.message.includes("cancel")) {\n    // Cancel event if the message contains "cancel"\n    eventData.canceled = true;\n  } else {\n    // Modify chat message being sent\n    eventData.message = `Modified \'${eventData.message}\'`;\n  }\n});\n')),(0,r.yg)("h5",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"arg")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ChatSendAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ChatSendAfterEvent")))))),(0,r.yg)("h5",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Removes a callback from being called when new chat messages\nare sent."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ChatSendAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ChatSendAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")))}g.isMDXComponent=!0}}]);