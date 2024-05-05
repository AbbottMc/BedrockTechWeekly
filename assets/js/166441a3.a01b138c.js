"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99677],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,c=g["".concat(s,".").concat(m)]||g[m]||y[m]||o;return t?r.createElement(c,l(l({ref:n},d),{},{components:t})):r.createElement(c,l({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={id:"ItemCooldownComponent",title:"Class: ItemCooldownComponent",sidebar_label:"ItemCooldownComponent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/ItemCooldownComponent",id:"sapi/stable/server/classes/ItemCooldownComponent",title:"Class: ItemCooldownComponent",description:"When present on an item, this item has a cooldown effect",source:"@site/docs/sapi/stable/server/classes/ItemCooldownComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemCooldownComponent",permalink:"/docs/sapi/stable/server/classes/ItemCooldownComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemCooldownComponent",title:"Class: ItemCooldownComponent",sidebar_label:"ItemCooldownComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemComponentUseEvent",permalink:"/docs/sapi/stable/server/classes/ItemComponentUseEvent"},next:{title:"ItemCustomComponentAlreadyRegisteredError",permalink:"/docs/sapi/stable/server/classes/ItemCustomComponentAlreadyRegisteredError"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cooldownCategory",id:"cooldowncategory",level:3},{value:"cooldownTicks",id:"cooldownticks",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getCooldownTicksRemaining",id:"getcooldownticksremaining",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"isCooldownCategory",id:"iscooldowncategory",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"startCooldown",id:"startcooldown",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}],d={toc:p},g="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"When present on an item, this item has a cooldown effect\nwhen used by entities."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ItemCooldownComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ItemCooldownComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"cooldowncategory"},"cooldownCategory"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"cooldownCategory"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Represents the cooldown category that this item is\nassociated with."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"cooldownticks"},"cooldownTicks"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"cooldownTicks"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Amount of time, in ticks, it will take this item to\ncooldown."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent#typeid"},"typeId")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"componentid"},"componentId"),(0,a.yg)("p",null,"\u25aa ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"componentId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"minecraft:cooldown"')),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"getcooldownticksremaining"},"getCooldownTicksRemaining"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"getCooldownTicksRemaining"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"player")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player")))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"iscooldowncategory"},"isCooldownCategory"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isCooldownCategory"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"cooldownCategory"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Will return true if the item is the cooldown category passed\nin and false otherwise."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"cooldownCategory")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:"left"},"The cooldown category that might be associated with this item.")))),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"True if the item is the given cooldown category."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent"},"ItemComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemComponent#isvalid"},"isValid")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"startcooldown"},"startCooldown"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"startCooldown"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Starts a new cooldown period for this item."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"player")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player")))))),(0,a.yg)("h4",{id:"returns-3"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}y.isMDXComponent=!0}}]);