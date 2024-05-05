"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69557],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={id:"BlockLiquidContainerComponent",title:"Class: BlockLiquidContainerComponent",sidebar_label:"BlockLiquidContainerComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/BlockLiquidContainerComponent",id:"sapi/stable/server/classes/BlockLiquidContainerComponent",title:"Class: BlockLiquidContainerComponent",description:"For blocks that can contain a liquid (e.g., a cauldron),",source:"@site/docs/sapi/stable/server/classes/BlockLiquidContainerComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockLiquidContainerComponent",permalink:"/en/docs/sapi/stable/server/classes/BlockLiquidContainerComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockLiquidContainerComponent",title:"Class: BlockLiquidContainerComponent",sidebar_label:"BlockLiquidContainerComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockLavaContainerComponent",permalink:"/en/docs/sapi/stable/server/classes/BlockLavaContainerComponent"},next:{title:"BlockLocationIterator",permalink:"/en/docs/sapi/stable/server/classes/BlockLocationIterator"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"fillLevel",id:"filllevel",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isValidLiquid",id:"isvalidliquid",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For blocks that can contain a liquid (e.g., a cauldron),\nthis is a base component for liquid containers."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"BlockLiquidContainerComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockLavaContainerComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockLavaContainerComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockPotionContainerComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockPotionContainerComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockSnowContainerComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockSnowContainerComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockWaterContainerComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockWaterContainerComponent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new BlockLiquidContainerComponent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"block"},"block"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"block"),": ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,o.yg)("inlineCode",{parentName:"a"},"Block"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Block instance that this component pertains to."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent#block"},"block")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"filllevel"},"fillLevel"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"fillLevel"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Relative fill level of the liquid container."),(0,o.yg)("p",null,"This property can't be edited in read-only mode."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"typeid"},"typeId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"typeId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Identifier of the component."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent#typeid"},"typeId")),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"isvalid"},"isValid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.yg)("h4",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Whether the component is valid."),(0,o.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent"},"BlockComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponent#isvalid"},"isValid")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"isvalidliquid"},"isValidLiquid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValidLiquid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns true if this reference to a liquid container is\nstill valid and contains the liquid of the type you have a\nreference for (for example, if the block is unloaded, no\nlonger a liquid container or contains lava when you have a\npotion container component, isValidLiquid will not be true.)"),(0,o.yg)("h4",{id:"returns-1"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"True if this liquid container still exists, is valid and\ncontains the expected liquid type."))}u.isMDXComponent=!0}}]);