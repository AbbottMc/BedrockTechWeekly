"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95886],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=s(t),y=r,u=g["".concat(p,".").concat(y)]||g[y]||d[y]||i;return t?a.createElement(u,l(l({ref:n},m),{},{components:t})):a.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},29812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/ItemDurabilityComponent",id:"sapi/stable/server/classes/ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",description:"When present on an item, this item can take damage in the",source:"@site/docs/sapi/stable/server/classes/ItemDurabilityComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemDurabilityComponent",permalink:"/en/docs/sapi/stable/server/classes/ItemDurabilityComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemCustomComponentReloadVersionError",permalink:"/en/docs/sapi/stable/server/classes/ItemCustomComponentReloadVersionError"},next:{title:"ItemEnchantableComponent",permalink:"/en/docs/sapi/stable/server/classes/ItemEnchantableComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"damage",id:"damage",level:3},{value:"maxDurability",id:"maxdurability",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getDamageChance",id:"getdamagechance",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getDamageChanceRange",id:"getdamagechancerange",level:3},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],m={toc:s},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When present on an item, this item can take damage in the\nprocess of being used. Note that this component only applies\nto data-driven items."),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"ItemDurabilityComponent"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new ItemDurabilityComponent"),"()"),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent#constructor"},"constructor")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"damage"},"damage"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"damage"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns the current damage level of this particular item."),(0,r.yg)("p",null,"This property can't be edited in read-only mode."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"maxdurability"},"maxDurability"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"maxDurability"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Represents the amount of damage that this item can take\nbefore breaking."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"typeid"},"typeId"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"typeId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Identifier of the component."),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent#typeid"},"typeId")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"componentid"},"componentId"),(0,r.yg)("p",null,"\u25aa ",(0,r.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"componentId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},'"minecraft:durability"')),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"getdamagechance"},"getDamageChance"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getDamageChance"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"unbreakingEnchantmentLevel?"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns the maximum chance that this item would be damaged\nusing the damageRange property, given an unbreaking\nenchantment level."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"unbreakingEnchantmentLevel?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be within the range ","[0, 3]",".")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getdamagechancerange"},"getDamageChanceRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getDamageChanceRange"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"NumberRange")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"A range of numbers that is used to calculate the damage\nchance for an item. The damage chance will fall within this\nrange."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"NumberRange")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"isvalid"},"isValid"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Whether the component is valid."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemComponent#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);