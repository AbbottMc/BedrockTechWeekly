"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35973],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(96540);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=s,d=u["".concat(o,".").concat(y)]||u[y]||g[y]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},20773:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(58168),s=(t(96540),t(15680));const a={id:"MessageReceiveAfterEvent",title:"Class: MessageReceiveAfterEvent",sidebar_label:"MessageReceiveAfterEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/MessageReceiveAfterEvent",id:"sapi/stable/server/classes/MessageReceiveAfterEvent",title:"Class: MessageReceiveAfterEvent",description:"A specific currently-internal event used for passing",source:"@site/docs/sapi/stable/server/classes/MessageReceiveAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/MessageReceiveAfterEvent",permalink:"/docs/sapi/stable/server/classes/MessageReceiveAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MessageReceiveAfterEvent",title:"Class: MessageReceiveAfterEvent",sidebar_label:"MessageReceiveAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"LocationOutOfWorldBoundariesError",permalink:"/docs/sapi/stable/server/classes/LocationOutOfWorldBoundariesError"},next:{title:"MinecraftDimensionTypes",permalink:"/docs/sapi/stable/server/classes/MinecraftDimensionTypes"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"message",id:"message",level:3},{value:"player",id:"player",level:3}],c={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,s.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"A specific currently-internal event used for passing\nmessages from client to server."),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h3",{id:"constructor"},"constructor"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,s.yg)("strong",{parentName:"p"},"new MessageReceiveAfterEvent"),"()"),(0,s.yg)("h2",{id:"properties"},"Properties"),(0,s.yg)("h3",{id:"id"},"id"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"id"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"string")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"The message identifier."),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"message"},"message"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"message"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"string")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"The message."),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"player"},"player"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"player"),": ",(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,s.yg)("inlineCode",{parentName:"a"},"Player"))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"The player who sent the message."))}g.isMDXComponent=!0}}]);