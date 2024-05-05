"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59453],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=o,u=m["".concat(s,".").concat(g)]||m[g]||y[g]||a;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},12801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={id:"EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",sidebar_label:"EntityMovementGlideComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/EntityMovementGlideComponent",id:"sapi/stable/server/classes/EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",description:"When added, this movement control allows the mob to glide.",source:"@site/docs/sapi/stable/server/classes/EntityMovementGlideComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityMovementGlideComponent",permalink:"/docs/sapi/stable/server/classes/EntityMovementGlideComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",sidebar_label:"EntityMovementGlideComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityMovementGenericComponent",permalink:"/docs/sapi/stable/server/classes/EntityMovementGenericComponent"},next:{title:"EntityMovementHoverComponent",permalink:"/docs/sapi/stable/server/classes/EntityMovementHoverComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"maxTurn",id:"maxturn",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"speedWhenTurning",id:"speedwhenturning",level:3},{value:"startSpeed",id:"startspeed",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],d={toc:p},m="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When added, this movement control allows the mob to glide."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"EntityBaseMovementComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"EntityMovementGlideComponent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new EntityMovementGlideComponent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},"EntityBaseMovementComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"entity"},"entity"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"entity"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,o.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},"EntityBaseMovementComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent#entity"},"entity")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"maxturn"},"maxTurn"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"maxTurn"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Maximum turn rate for this movement modality of the mob."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},"EntityBaseMovementComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent#maxturn"},"maxTurn")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"speedwhenturning"},"speedWhenTurning"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"speedWhenTurning"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Speed in effect when the entity is turning."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"startspeed"},"startSpeed"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"startSpeed"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Start speed during a glide."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"typeid"},"typeId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"typeId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Identifier of the component."),(0,o.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},"EntityBaseMovementComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent#typeid"},"typeId")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"componentid"},"componentId"),(0,o.yg)("p",null,"\u25aa ",(0,o.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"componentId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},'"minecraft:movement.glide"')),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"isvalid"},"isValid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.yg)("h4",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Whether the component is valid."),(0,o.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},"EntityBaseMovementComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent#isvalid"},"isValid")))}y.isMDXComponent=!0}}]);