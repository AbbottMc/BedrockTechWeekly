"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74439],{15680:(e,r,t)=>{t.d(r,{xA:()=>g,yg:()=>u});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),o=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},g=function(e){var r=o(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=o(t),y=n,u=c["".concat(p,".").concat(y)]||c[y]||d[y]||s;return t?a.createElement(u,l(l({ref:r},g),{},{components:t})):a.createElement(u,l({ref:r},g))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},70296:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=t(58168),n=(t(96540),t(15680));const s={id:"ServerMessageAfterEventSignal",title:"Class: ServerMessageAfterEventSignal",sidebar_label:"ServerMessageAfterEventSignal",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/preview/server/classes/ServerMessageAfterEventSignal",id:"sapi/preview/server/classes/ServerMessageAfterEventSignal",title:"Class: ServerMessageAfterEventSignal",description:"Manages callbacks that are message passing to a server. This",source:"@site/docs/sapi/preview/server/classes/ServerMessageAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ServerMessageAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/ServerMessageAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ServerMessageAfterEventSignal",title:"Class: ServerMessageAfterEventSignal",sidebar_label:"ServerMessageAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Seat",permalink:"/docs/sapi/preview/server/classes/Seat"},next:{title:"Structure",permalink:"/docs/sapi/preview/server/classes/Structure"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],g={toc:o},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Manages callbacks that are message passing to a server. This\nevent is not currently fully implemented, and should not be\nused."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new ServerMessageAfterEventSignal"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"subscribe"},"subscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/MessageReceiveAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageReceiveAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when an internal message\nis passed."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/MessageReceiveAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageReceiveAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"fn")),(0,n.yg)("p",null,"\u25b8 (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when an internal message\nis passed."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h5",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"arg")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/MessageReceiveAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageReceiveAfterEvent")))))),(0,n.yg)("h5",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Removes a callback from being called when an internal\nmessage is passed."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/MessageReceiveAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageReceiveAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);