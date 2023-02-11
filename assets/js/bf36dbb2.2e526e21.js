"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=i,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"WorldInitializeEvent",title:"Class: WorldInitializeEvent",sidebar_label:"WorldInitializeEvent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/classes/WorldInitializeEvent",id:"sapi/stable/server/classes/WorldInitializeEvent",title:"Class: WorldInitializeEvent",description:"Contains information and methods that can be used at the",source:"@site/docs/sapi/stable/server/classes/WorldInitializeEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/WorldInitializeEvent",permalink:"/docs/sapi/stable/server/classes/WorldInitializeEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WorldInitializeEvent",title:"Class: WorldInitializeEvent",sidebar_label:"WorldInitializeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"World",permalink:"/docs/sapi/stable/server/classes/World"},next:{title:"WorldInitializeEventSignal",permalink:"/docs/sapi/stable/server/classes/WorldInitializeEventSignal"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"propertyRegistry",id:"propertyregistry",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information and methods that can be used at the\ninitialization of the scripting environment for a World.\nAlso, use the supplied propertyRegistry object to register\nany dynamic properties, within the scope of the World\nInitialize execution."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"propertyregistry"},"propertyRegistry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"propertyRegistry"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/PropertyRegistry"},(0,i.kt)("inlineCode",{parentName:"a"},"PropertyRegistry"))),(0,i.kt)("p",null,"Contains methods for scripts to initialize and register\ndynamic properties they may wish to use within a world."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"propertyRegistration.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'       import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";\n\n       world.events.worldInitialize.subscribe((e) => {\n         let def = new DynamicPropertiesDefinition();\n\n         def.defineNumber("rpgStrength");\n         def.defineString("rpgRole", 16);\n         def.defineBoolean("rpgIsHero");\n\n         e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);\n       });\n\n')))}d.isMDXComponent=!0}}]);