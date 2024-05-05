"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[16266],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},y),{},{components:t})):r.createElement(g,a({ref:n},y))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const o={id:"EntityFlyingSpeedComponent",title:"Class: EntityFlyingSpeedComponent",sidebar_label:"EntityFlyingSpeedComponent",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/stable/server/classes/EntityFlyingSpeedComponent",id:"sapi/stable/server/classes/EntityFlyingSpeedComponent",title:"Class: EntityFlyingSpeedComponent",description:"Represents the flying speed of an entity.",source:"@site/docs/sapi/stable/server/classes/EntityFlyingSpeedComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityFlyingSpeedComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityFlyingSpeedComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityFlyingSpeedComponent",title:"Class: EntityFlyingSpeedComponent",sidebar_label:"EntityFlyingSpeedComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityFloatsInLiquidComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityFloatsInLiquidComponent"},next:{title:"EntityFrictionModifierComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityFrictionModifierComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"value",id:"value",level:3},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],y={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents the flying speed of an entity."),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},(0,i.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"EntityFlyingSpeedComponent"))))),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,i.yg)("strong",{parentName:"p"},"new EntityFlyingSpeedComponent"),"()"),(0,i.yg)("h4",{id:"overrides"},"Overrides"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"entity"},"entity"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"entity"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,i.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,i.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"typeid"},"typeId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"typeId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Identifier of the component."),(0,i.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"value"},"value"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"value"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Current value of the flying speed of the associated entity."),(0,i.yg)("p",null,"This property can't be edited in read-only mode."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"componentid"},"componentId"),(0,i.yg)("p",null,"\u25aa ",(0,i.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"componentId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},'"minecraft:flying_speed"')),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"isvalid"},"isValid"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,"Whether the component is valid."),(0,i.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")))}c.isMDXComponent=!0}}]);