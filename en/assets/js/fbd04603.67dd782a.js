"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[85827],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"ChatEventSignal",title:"Class: ChatEventSignal",sidebar_label:"ChatEventSignal",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/ChatEventSignal",id:"sapi/stable/server/classes/ChatEventSignal",title:"Class: ChatEventSignal",description:"Manages callbacks that are connected to chat messages being",source:"@site/docs/sapi/stable/server/classes/ChatEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ChatEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ChatEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatEventSignal",title:"Class: ChatEventSignal",sidebar_label:"ChatEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ChatEvent",permalink:"/en/docs/sapi/stable/server/classes/ChatEvent"},next:{title:"CommandResult",permalink:"/en/docs/sapi/stable/server/classes/CommandResult"}},p={},o=[{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Manages callbacks that are connected to chat messages being\nsent."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"subscribe"},"subscribe"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ChatEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatEvent")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Adds a callback that will be called when new chat messages\nare sent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"custom_command.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'       const chatCallback = World.events.beforeChat.subscribe((eventData) => {\n         if (eventData.message.includes("cancel")) {\n           // Cancel event if the message contains "cancel"\n           eventData.canceled = true;\n         } else {\n           // Modify chat message being sent\n           eventData.message = `Modified \'${eventData.message}\'`;\n         }\n       });\n\n')),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ChatEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatEvent")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Adds a callback that will be called when new chat messages\nare sent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"custom_command.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'       const chatCallback = World.events.beforeChat.subscribe((eventData) => {\n         if (eventData.message.includes("cancel")) {\n           // Cancel event if the message contains "cancel"\n           eventData.canceled = true;\n         } else {\n           // Modify chat message being sent\n           eventData.message = `Modified \'${eventData.message}\'`;\n         }\n       });\n\n')),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ChatEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatEvent")))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unsubscribe"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Removes a callback from being called when new chat messages\nare sent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ChatEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatEvent")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);