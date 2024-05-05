"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89584],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,u=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return n?r.createElement(u,s(s({ref:t},m),{},{components:n})):r.createElement(u,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},93773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={id:"ItemComponent",title:"Class: ItemComponent",sidebar_label:"ItemComponent",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/ItemComponent",id:"sapi/stable/server/classes/ItemComponent",title:"Class: ItemComponent",description:"Base class for item components.",source:"@site/docs/sapi/stable/server/classes/ItemComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemComponent",permalink:"/docs/sapi/stable/server/classes/ItemComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemComponent",title:"Class: ItemComponent",sidebar_label:"ItemComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemCompleteUseAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemCompleteUseAfterEventSignal"},next:{title:"ItemComponentRegistry",permalink:"/docs/sapi/stable/server/classes/ItemComponentRegistry"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Base class for item components."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},(0,a.yg)("inlineCode",{parentName:"a"},"Component"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ItemComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemCooldownComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemCooldownComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemDurabilityComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemDurabilityComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemEnchantableComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemEnchantableComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ItemFoodComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemFoodComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ItemComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#typeid"},"typeId")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);