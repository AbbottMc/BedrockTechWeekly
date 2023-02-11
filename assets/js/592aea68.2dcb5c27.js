"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>C});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(n),k=r,C=c["".concat(i,".").concat(k)]||c[k]||d[k]||p;return n?a.createElement(C,s(s({ref:t},m),{},{components:n})):a.createElement(C,s({ref:t},m))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<p;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},35327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const p={id:"IEntityComponent",title:"Class: IEntityComponent",sidebar_label:"IEntityComponent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/stable/server/classes/IEntityComponent",id:"sapi/stable/server/classes/IEntityComponent",title:"Class: IEntityComponent",description:"Base interface that defines components associated with an",source:"@site/docs/sapi/stable/server/classes/IEntityComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/IEntityComponent",permalink:"/docs/sapi/stable/server/classes/IEntityComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IEntityComponent",title:"Class: IEntityComponent",sidebar_label:"IEntityComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"IBlockProperty",permalink:"/docs/sapi/stable/server/classes/IBlockProperty"},next:{title:"IntBlockProperty",permalink:"/docs/sapi/stable/server/classes/IntBlockProperty"}},i={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"typeId",id:"typeid",level:3}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Base interface that defines components associated with an\nentity."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"IEntityComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityAddRiderComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAddRiderComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityAgeableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAgeableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityBreathableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityBreathableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanClimbComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanClimbComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanFlyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanFlyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityCanPowerJumpComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityCanPowerJumpComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityColorComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityColorComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFireImmuneComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFireImmuneComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFloatsInLiquidComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFloatsInLiquidComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFlyingSpeedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFlyingSpeedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityFrictionModifierComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityFrictionModifierComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityGroundOffsetComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityGroundOffsetComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityHealableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityHealableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityHealthComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityHealthComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityInventoryComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityInventoryComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsBabyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsBabyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsChargedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsChargedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsChestedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsChestedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsDyableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsDyableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsHiddenWhenInvisibleComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsHiddenWhenInvisibleComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsIgnitedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsIgnitedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsIllagerCaptainComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsIllagerCaptainComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsSaddledComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsSaddledComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsShakingComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsShakingComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsShearedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsShearedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsStackableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsStackableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsStunnedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsStunnedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityIsTamedComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityIsTamedComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityItemComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityItemComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityLavaMovementComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityLavaMovementComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityLeashableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityLeashableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMarkVariantComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMarkVariantComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMountTamingComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMountTamingComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementAmphibiousComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementAmphibiousComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementBasicComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementBasicComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementFlyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementFlyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementGenericComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementGenericComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementGlideComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementGlideComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementHoverComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementHoverComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementJumpComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementJumpComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementSkipComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementSkipComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityMovementSwayComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityMovementSwayComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationClimbComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationClimbComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationFloatComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationFloatComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationFlyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationFlyComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationGenericComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationGenericComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationHoverComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationHoverComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationWalkComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationWalkComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityOnFireComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityOnFireComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityPushThroughComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityPushThroughComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityRideableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRideableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityScaleComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityScaleComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntitySkinIdComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntitySkinIdComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityStrengthComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityStrengthComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityTameableComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTameableComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityUnderwaterMovementComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityUnderwaterMovementComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityVariantComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityVariantComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityWantsJockeyComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityWantsJockeyComponent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"new IEntityComponent"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"typeid"},"typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"typeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Identifier of the type of entity component."))}c.isMDXComponent=!0}}]);