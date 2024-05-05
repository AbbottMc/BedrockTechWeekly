"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[71124],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39186:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),i=(t(96540),t(15680));const o={id:"MinecraftEditor",title:"Class: MinecraftEditor",sidebar_label:"MinecraftEditor",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/preview/server-editor/classes/MinecraftEditor",id:"sapi/preview/server-editor/classes/MinecraftEditor",title:"Class: MinecraftEditor",description:"The MinecraftEditor class is a namespace container for",source:"@site/docs/sapi/preview/server-editor/classes/MinecraftEditor.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/MinecraftEditor",permalink:"/en/docs/sapi/preview/server-editor/classes/MinecraftEditor",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MinecraftEditor",title:"Class: MinecraftEditor",sidebar_label:"MinecraftEditor",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Logger",permalink:"/en/docs/sapi/preview/server-editor/classes/Logger"},next:{title:"ModeChangeAfterEvent",permalink:"/en/docs/sapi/preview/server-editor/classes/ModeChangeAfterEvent"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"log",id:"log",level:3},{value:"simulation",id:"simulation",level:3}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The MinecraftEditor class is a namespace container for\nEditor functionality which does not have any player context."),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,i.yg)("strong",{parentName:"p"},"new MinecraftEditor"),"()"),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"log"},"log"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"log"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Logger"},(0,i.yg)("inlineCode",{parentName:"a"},"Logger"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"A global instance of the log output class object.  This is\nnot contextualized to any particular player, and any\nmessages sent to this instance will be broadcast to all\nconnected editor client sessions"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.yg)("p",null,"This property can throw when used."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"simulation"},"simulation"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"simulation"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/SimulationState"},(0,i.yg)("inlineCode",{parentName:"a"},"SimulationState"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Allows querying and modifying some properties of the\nsimulation."))}u.isMDXComponent=!0}}]);