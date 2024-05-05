"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[12404],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=s(t),m=o,c=g["".concat(p,".").concat(m)]||g[m]||y[m]||a;return t?r.createElement(c,l(l({ref:n},d),{},{components:t})):r.createElement(c,l({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={id:"ItemCooldownComponent",title:"Class: ItemCooldownComponent",sidebar_label:"ItemCooldownComponent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/preview/server/classes/ItemCooldownComponent",id:"sapi/preview/server/classes/ItemCooldownComponent",title:"Class: ItemCooldownComponent",description:"When present on an item, this item has a cooldown effect",source:"@site/docs/sapi/preview/server/classes/ItemCooldownComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemCooldownComponent",permalink:"/en/docs/sapi/preview/server/classes/ItemCooldownComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemCooldownComponent",title:"Class: ItemCooldownComponent",sidebar_label:"ItemCooldownComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemComponentUseOnEvent",permalink:"/en/docs/sapi/preview/server/classes/ItemComponentUseOnEvent"},next:{title:"ItemCustomComponentAlreadyRegisteredError",permalink:"/en/docs/sapi/preview/server/classes/ItemCustomComponentAlreadyRegisteredError"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cooldownCategory",id:"cooldowncategory",level:3},{value:"cooldownTicks",id:"cooldownticks",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getCooldownTicksRemaining",id:"getcooldownticksremaining",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"isCooldownCategory",id:"iscooldowncategory",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"startCooldown",id:"startcooldown",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}],d={toc:s},g="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When present on an item, this item has a cooldown effect\nwhen used by entities."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"ItemComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"ItemCooldownComponent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new ItemCooldownComponent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"cooldowncategory"},"cooldownCategory"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"cooldownCategory"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the cooldown category that this item is\nassociated with."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"cooldownticks"},"cooldownTicks"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"cooldownTicks"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Amount of time, in ticks, it will take this item to\ncooldown."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"typeid"},"typeId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"typeId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Identifier of the component."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent#typeid"},"typeId")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"componentid"},"componentId"),(0,o.yg)("p",null,"\u25aa ",(0,o.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"componentId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},'"minecraft:cooldown"')),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"getcooldownticksremaining"},"getCooldownTicksRemaining"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"getCooldownTicksRemaining"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"This function can't be called in read-only mode."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This function can throw errors."),(0,o.yg)("h4",{id:"parameters"},"Parameters"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,o.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("inlineCode",{parentName:"td"},"player")),(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/Player"},(0,o.yg)("inlineCode",{parentName:"a"},"Player")))))),(0,o.yg)("h4",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"iscooldowncategory"},"isCooldownCategory"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isCooldownCategory"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"cooldownCategory"),"): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Will return true if the item is the cooldown category passed\nin and false otherwise."),(0,o.yg)("p",null,"This function can't be called in read-only mode."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This function can throw errors."),(0,o.yg)("h4",{id:"parameters-1"},"Parameters"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,o.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,o.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("inlineCode",{parentName:"td"},"cooldownCategory")),(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("inlineCode",{parentName:"td"},"string")),(0,o.yg)("td",{parentName:"tr",align:"left"},"The cooldown category that might be associated with this item.")))),(0,o.yg)("h4",{id:"returns-1"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"True if the item is the given cooldown category."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"isvalid"},"isValid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.yg)("h4",{id:"returns-2"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Whether the component is valid."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemComponent#isvalid"},"isValid")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"startcooldown"},"startCooldown"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"startCooldown"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,o.yg)("inlineCode",{parentName:"p"},"void")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Starts a new cooldown period for this item."),(0,o.yg)("p",null,"This function can't be called in read-only mode."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This function can throw errors."),(0,o.yg)("h4",{id:"parameters-2"},"Parameters"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,o.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("inlineCode",{parentName:"td"},"player")),(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/Player"},(0,o.yg)("inlineCode",{parentName:"a"},"Player")))))),(0,o.yg)("h4",{id:"returns-3"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"void")))}y.isMDXComponent=!0}}]);