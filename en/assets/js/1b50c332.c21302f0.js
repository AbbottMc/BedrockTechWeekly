"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98952],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>u});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(u,o(o({ref:n},y),{},{components:t})):r.createElement(u,o({ref:n},y))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={id:"EntityCanFlyComponent",title:"Class: EntityCanFlyComponent",sidebar_label:"EntityCanFlyComponent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/classes/EntityCanFlyComponent",id:"sapi/stable/server/classes/EntityCanFlyComponent",title:"Class: EntityCanFlyComponent",description:"When added, this component signifies that the entity can",source:"@site/docs/sapi/stable/server/classes/EntityCanFlyComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityCanFlyComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityCanFlyComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityCanFlyComponent",title:"Class: EntityCanFlyComponent",sidebar_label:"EntityCanFlyComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityCanClimbComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityCanClimbComponent"},next:{title:"EntityCanPowerJumpComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityCanPowerJumpComponent"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],y={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"When added, this component signifies that the entity can\nfly, and the pathfinder won't be restricted to paths where a\nsolid block is required underneath it."),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},(0,i.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"EntityCanFlyComponent"))))),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,i.yg)("strong",{parentName:"p"},"new EntityCanFlyComponent"),"()"),(0,i.yg)("h4",{id:"overrides"},"Overrides"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"entity"},"entity"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"entity"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,i.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,i.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"typeid"},"typeId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"typeId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Identifier of the component."),(0,i.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"componentid"},"componentId"),(0,i.yg)("p",null,"\u25aa ",(0,i.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"componentId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},'"minecraft:can_fly"')),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"isvalid"},"isValid"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,"Whether the component is valid."),(0,i.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")))}c.isMDXComponent=!0}}]);