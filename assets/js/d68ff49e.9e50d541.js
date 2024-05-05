"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[1259],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,c=g["".concat(p,".").concat(m)]||g[m]||d[m]||o;return t?r.createElement(c,i(i({ref:n},y),{},{components:t})):r.createElement(c,i({ref:n},y))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={id:"EntityInventoryComponent",title:"Class: EntityInventoryComponent",sidebar_label:"EntityInventoryComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/EntityInventoryComponent",id:"sapi/stable/server/classes/EntityInventoryComponent",title:"Class: EntityInventoryComponent",description:"Defines this entity's inventory properties.",source:"@site/docs/sapi/stable/server/classes/EntityInventoryComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityInventoryComponent",permalink:"/docs/sapi/stable/server/classes/EntityInventoryComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityInventoryComponent",title:"Class: EntityInventoryComponent",sidebar_label:"EntityInventoryComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHurtAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/EntityHurtAfterEventSignal"},next:{title:"EntityIsBabyComponent",permalink:"/docs/sapi/stable/server/classes/EntityIsBabyComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"additionalSlotsPerStrength",id:"additionalslotsperstrength",level:3},{value:"canBeSiphonedFrom",id:"canbesiphonedfrom",level:3},{value:"container",id:"container",level:3},{value:"containerType",id:"containertype",level:3},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"inventorySize",id:"inventorysize",level:3},{value:"private",id:"private",level:3},{value:"restrictToOwner",id:"restricttoowner",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],y={toc:s},g="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Defines this entity's inventory properties."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"EntityInventoryComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntityInventoryComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"additionalslotsperstrength"},"additionalSlotsPerStrength"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"additionalSlotsPerStrength"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Number of slots that this entity can gain per extra\nstrength."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"canbesiphonedfrom"},"canBeSiphonedFrom"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"canBeSiphonedFrom"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"If true, the contents of this inventory can be removed by a\nhopper."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"container"},"container"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"container"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Container"},(0,a.yg)("inlineCode",{parentName:"a"},"Container"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Defines the container for this entity. The container will be\nundefined if the entity has been removed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"containertype"},"containerType"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"containerType"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Type of container this entity has."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"entity"},"entity"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"entity"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"inventorysize"},"inventorySize"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"inventorySize"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Number of slots the container has."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"private"},"private"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"private"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"If true, the entity will not drop it's inventory on death."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"restricttoowner"},"restrictToOwner"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"restrictToOwner"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"If true, the entity's inventory can only be accessed by its\nowner or itself."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"componentid"},"componentId"),(0,a.yg)("p",null,"\u25aa ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"componentId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"minecraft:inventory"')),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);