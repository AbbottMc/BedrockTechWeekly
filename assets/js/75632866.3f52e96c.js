"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68532],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||i;return t?r.createElement(u,l(l({ref:n},y),{},{components:t})):r.createElement(u,l({ref:n},y))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={id:"EntityTameableComponent",title:"Class: EntityTameableComponent",sidebar_label:"EntityTameableComponent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/preview/server/classes/EntityTameableComponent",id:"sapi/preview/server/classes/EntityTameableComponent",title:"Class: EntityTameableComponent",description:"Defines the rules for an entity to be tamed by the player.",source:"@site/docs/sapi/preview/server/classes/EntityTameableComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityTameableComponent",permalink:"/docs/sapi/preview/server/classes/EntityTameableComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityTameableComponent",title:"Class: EntityTameableComponent",sidebar_label:"EntityTameableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityTameMountComponent",permalink:"/docs/sapi/preview/server/classes/EntityTameMountComponent"},next:{title:"EntityType",permalink:"/docs/sapi/preview/server/classes/EntityType"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"getTameItems",id:"gettameitems",level:3},{value:"isTamed",id:"istamed",level:3},{value:"probability",id:"probability",level:3},{value:"tamedToPlayer",id:"tamedtoplayer",level:3},{value:"tamedToPlayerId",id:"tamedtoplayerid",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"tame",id:"tame",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}],y={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Defines the rules for an entity to be tamed by the player."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"EntityTameableComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntityTameableComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"entity"},"entity"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"entity"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#entity"},"entity")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"gettameitems"},"getTameItems"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"getTameItems"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemStack")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns a set of items that can be used to tame this entity."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"istamed"},"isTamed"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"isTamed"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"probability"},"probability"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"probability"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The chance of taming the entity with each item use between\n0.0 and 1.0, where 1.0 is 100%"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"tamedtoplayer"},"tamedToPlayer"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"tamedToPlayer"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"tamedtoplayerid"},"tamedToPlayerId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"tamedToPlayerId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#typeid"},"typeId")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"componentid"},"componentId"),(0,a.yg)("p",null,"\u25aa ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"componentId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"minecraft:tameable"')),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#isvalid"},"isValid")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"tame"},"tame"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"tame"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Tames this entity."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"player")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player")))))),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Returns true if the entity was tamed."))}d.isMDXComponent=!0}}]);