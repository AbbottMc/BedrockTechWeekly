"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84637],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=i,u=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return r?n.createElement(u,o(o({ref:t},g),{},{components:r})):n.createElement(u,o({ref:t},g))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},48490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),i=(r(96540),r(15680));const a={id:"DataDrivenEntityTriggerAfterEvent",title:"Class: DataDrivenEntityTriggerAfterEvent",sidebar_label:"DataDrivenEntityTriggerAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent",id:"sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent",title:"Class: DataDrivenEntityTriggerAfterEvent",description:"Contains information related to firing of a data driven",source:"@site/docs/sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DataDrivenEntityTriggerAfterEvent",title:"Class: DataDrivenEntityTriggerAfterEvent",sidebar_label:"DataDrivenEntityTriggerAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ContainerSlot",permalink:"/en/docs/sapi/stable/server/classes/ContainerSlot"},next:{title:"DataDrivenEntityTriggerAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/DataDrivenEntityTriggerAfterEventSignal"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"eventId",id:"eventid",level:3},{value:"Methods",id:"methods",level:2},{value:"getModifiers",id:"getmodifiers",level:3},{value:"Returns",id:"returns",level:4}],g={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Contains information related to firing of a data driven\nentity event - for example, the minecraft:ageable_grow_up\nevent on a chicken."),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,i.yg)("strong",{parentName:"p"},"new DataDrivenEntityTriggerAfterEvent"),"()"),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"entity"},"entity"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"entity"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,i.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Entity that the event triggered on."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"eventid"},"eventId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"eventId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Name of the data driven event being triggered."),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"getmodifiers"},"getModifiers"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"getModifiers"),"(): ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/DefinitionModifier"},(0,i.yg)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"An updateable list of modifications to component state that\nare the effect of this triggered event."),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/DefinitionModifier"},(0,i.yg)("inlineCode",{parentName:"a"},"DefinitionModifier")),"[]"))}d.isMDXComponent=!0}}]);