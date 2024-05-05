"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30577],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(r),g=a,d=y["".concat(s,".").concat(g)]||y[g]||u[g]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},63460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"PlayerInteractWithEntityAfterEvent",title:"Class: PlayerInteractWithEntityAfterEvent",sidebar_label:"PlayerInteractWithEntityAfterEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/preview/server/classes/PlayerInteractWithEntityAfterEvent",id:"sapi/preview/server/classes/PlayerInteractWithEntityAfterEvent",title:"Class: PlayerInteractWithEntityAfterEvent",description:"Contains information regarding an event after a player",source:"@site/docs/sapi/preview/server/classes/PlayerInteractWithEntityAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/PlayerInteractWithEntityAfterEvent",permalink:"/docs/sapi/preview/server/classes/PlayerInteractWithEntityAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerInteractWithEntityAfterEvent",title:"Class: PlayerInteractWithEntityAfterEvent",sidebar_label:"PlayerInteractWithEntityAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"PlayerInteractWithBlockBeforeEventSignal",permalink:"/docs/sapi/preview/server/classes/PlayerInteractWithBlockBeforeEventSignal"},next:{title:"PlayerInteractWithEntityAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/PlayerInteractWithEntityAfterEventSignal"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"itemStack",id:"itemstack",level:3},{value:"player",id:"player",level:3},{value:"target",id:"target",level:3}],c={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains information regarding an event after a player\ninteracts with an entity."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new PlayerInteractWithEntityAfterEvent"),"()"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"itemstack"},"itemStack"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"itemStack"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The item stack that is being used in the interaction, or\nundefined if empty hand."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"player"},"player"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"player"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Source Player for this event."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"target"},"target"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"target"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The entity that will be interacted with."))}u.isMDXComponent=!0}}]);