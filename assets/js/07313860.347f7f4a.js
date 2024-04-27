"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>C});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,C=d["".concat(o,".").concat(k)]||d[k]||c[k]||s;return n?a.createElement(C,i(i({ref:t},m),{},{components:n})):a.createElement(C,i({ref:t},m))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},31922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={id:"EntityComponent",title:"Class: EntityComponent",sidebar_label:"EntityComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"sapi/stable/server/classes/EntityComponent",id:"sapi/stable/server/classes/EntityComponent",title:"Class: EntityComponent",description:"Base class for downstream entity components.",source:"@site/docs/sapi/stable/server/classes/EntityComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityComponent",permalink:"/docs/sapi/stable/server/classes/EntityComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityComponent",title:"Class: EntityComponent",sidebar_label:"EntityComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityColorComponent",permalink:"/docs/sapi/stable/server/classes/EntityColorComponent"},next:{title:"EntityDefinitionFeedItem",permalink:"/docs/sapi/stable/server/classes/EntityDefinitionFeedItem"}},o={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Base class for downstream entity components."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EntityComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityAddRiderComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAddRiderComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityAgeableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAgeableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityAttributeComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAttributeComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBaseMovementComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityBaseMovementComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBreathableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityBreathableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanClimbComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanClimbComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanFlyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanFlyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanPowerJumpComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanPowerJumpComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityColor2Component"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityColor2Component"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityColorComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityColorComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityEquippableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityEquippableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFireImmuneComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFireImmuneComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFloatsInLiquidComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFloatsInLiquidComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFlyingSpeedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFlyingSpeedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFrictionModifierComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFrictionModifierComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityGroundOffsetComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityGroundOffsetComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityHealableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityHealableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityInventoryComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityInventoryComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsBabyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsBabyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsChargedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsChargedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsChestedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsChestedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsDyeableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsDyeableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsHiddenWhenInvisibleComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsHiddenWhenInvisibleComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsIgnitedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsIgnitedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsIllagerCaptainComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsIllagerCaptainComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsSaddledComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsSaddledComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsShakingComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsShakingComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsShearedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsShearedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsStackableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsStackableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsStunnedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsStunnedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsTamedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsTamedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityItemComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityItemComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityLeashableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityLeashableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMarkVariantComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMarkVariantComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNpcComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNpcComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityOnFireComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityOnFireComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityProjectileComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityProjectileComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityPushThroughComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityPushThroughComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityRideableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRideableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityRidingComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRidingComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityScaleComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityScaleComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntitySkinIdComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntitySkinIdComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityStrengthComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityStrengthComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityTameableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTameableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityTameMountComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTameMountComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityTypeFamilyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTypeFamilyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityVariantComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityVariantComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityWantsJockeyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityWantsJockeyComponent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new EntityComponent"),"()"),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"entity"},"entity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"typeid"},"typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"typeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Identifier of the component."),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#typeid"},"typeId")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"isvalid"},"isValid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the component is valid."),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Component#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);