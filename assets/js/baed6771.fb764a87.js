"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,b=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/ItemDurabilityComponent",id:"sapi/stable/server/classes/ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",description:"When present on an item, this item can take damage in the",source:"@site/docs/sapi/stable/server/classes/ItemDurabilityComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemDurabilityComponent",permalink:"/docs/sapi/stable/server/classes/ItemDurabilityComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemDefinitionTriggeredEvent",permalink:"/docs/sapi/stable/server/classes/ItemDefinitionTriggeredEvent"},next:{title:"ItemEnchantsComponent",permalink:"/docs/sapi/stable/server/classes/ItemEnchantsComponent"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"damage",id:"damage",level:3},{value:"damageRange",id:"damagerange",level:3},{value:"maxDurability",id:"maxdurability",level:3},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getDamageChance",id:"getdamagechance",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When present on an item, this item can take damage in the\nprocess of being used. Note that this component only applies\nto data-driven items."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"damage"},"damage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"damage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Returns the current damage level of this particular item."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"damagerange"},"damageRange"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"damageRange"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/NumberRange"},(0,r.kt)("inlineCode",{parentName:"a"},"NumberRange"))),(0,r.kt)("p",null,"A range of numbers that describes the chance of the item\nlosing durability."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxdurability"},"maxDurability"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"maxDurability"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Represents the amount of damage that this item can take\nbefore breaking."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"componentid"},"componentId"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"componentId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"minecraft:durability"')),(0,r.kt)("p",null,"Identifier of this component. Should always be\n'minecraft:durability'."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getdamagechance"},"getDamageChance"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDamageChance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"unbreaking?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns the maximum chance that this item would be damaged\nusing the damageRange property, given an unbreaking level."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unbreaking?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be greater than 0.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")))}u.isMDXComponent=!0}}]);