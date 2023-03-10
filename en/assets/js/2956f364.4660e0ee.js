"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,y=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"EntityAgeableComponent",title:"Class: EntityAgeableComponent",sidebar_label:"EntityAgeableComponent",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/classes/EntityAgeableComponent",id:"sapi/preview/server/classes/EntityAgeableComponent",title:"Class: EntityAgeableComponent",description:"Adds a timer for the entity to grow up. It can be",source:"@site/docs/sapi/preview/server/classes/EntityAgeableComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityAgeableComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityAgeableComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityAgeableComponent",title:"Class: EntityAgeableComponent",sidebar_label:"EntityAgeableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityAddRiderComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityAddRiderComponent"},next:{title:"EntityAttributeComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityAttributeComponent"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"growUp",id:"growup",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getDropItems",id:"getdropitems",level:3},{value:"Returns",id:"returns",level:4},{value:"getFeedItems",id:"getfeeditems",level:3},{value:"Returns",id:"returns-1",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Adds a timer for the entity to grow up. It can be\naccelerated by giving the entity the items it likes as\ndefined by feedItems."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EntityAgeableComponent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"duration"},"duration"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"duration"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Amount of time before the entity grows up, -1 for always a\nbaby."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"growup"},"growUp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"growUp"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"Trigger"))),(0,i.kt)("p",null,"Event to run when this entity grows up."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typeid"},"typeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"typeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent#typeid"},"typeId")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentid"},"componentId"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"componentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"minecraft:ageable"')),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:ageable."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getdropitems"},"getDropItems"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getDropItems"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getfeeditems"},"getFeedItems"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getFeedItems"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityDefinitionFeedItem"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDefinitionFeedItem")),"[]"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityDefinitionFeedItem"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDefinitionFeedItem")),"[]"))}m.isMDXComponent=!0}}]);