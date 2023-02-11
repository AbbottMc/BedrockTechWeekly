"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"EntityAgeableComponent",title:"Class: EntityAgeableComponent",sidebar_label:"EntityAgeableComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/EntityAgeableComponent",id:"sapi/stable/server/classes/EntityAgeableComponent",title:"Class: EntityAgeableComponent",description:"Adds a timer for the entity to grow up. It can be",source:"@site/docs/sapi/stable/server/classes/EntityAgeableComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityAgeableComponent",permalink:"/docs/sapi/stable/server/classes/EntityAgeableComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityAgeableComponent",title:"Class: EntityAgeableComponent",sidebar_label:"EntityAgeableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityAddRiderComponent",permalink:"/docs/sapi/stable/server/classes/EntityAddRiderComponent"},next:{title:"EntityBreathableComponent",permalink:"/docs/sapi/stable/server/classes/EntityBreathableComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"dropItems",id:"dropitems",level:3},{value:"duration",id:"duration",level:3},{value:"feedItems",id:"feeditems",level:3},{value:"growUp",id:"growup",level:3},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"componentId",id:"componentid",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Adds a timer for the entity to grow up. It can be\naccelerated by giving the entity the items it likes as\ndefined by feedItems."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IEntityComponent"},(0,a.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EntityAgeableComponent"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"new EntityAgeableComponent"),"()"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IEntityComponent#constructor"},"constructor")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"dropitems"},"dropItems"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"dropItems"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"List of items that the entity drops when it grows up."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"duration"},"duration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"duration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Amount of time before the entity grows up, -1 for always a\nbaby."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"feeditems"},"feedItems"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"feedItems"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityDefinitionFeedItem"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityDefinitionFeedItem")),"[]"),(0,a.kt)("p",null,"List of items that can be fed to the entity. Includes 'item'\nfor the item name and 'growth' to define how much time it\ngrows up by."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"growup"},"growUp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"growUp"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Trigger"},(0,a.kt)("inlineCode",{parentName:"a"},"Trigger"))),(0,a.kt)("p",null,"Event to run when this entity grows up."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"typeid"},"typeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"typeId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Identifier of this component. Should always be\nminecraft:ageable."),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/IEntityComponent#typeid"},"typeId")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"componentid"},"componentId"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"componentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:ageable"')),(0,a.kt)("p",null,"Identifier of this component. Should always be\nminecraft:ageable."))}c.isMDXComponent=!0}}]);