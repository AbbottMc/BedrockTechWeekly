"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[83982],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||r;return n?o.createElement(g,i(i({ref:t},y),{},{components:n})):o.createElement(g,i({ref:t},y))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=n(58168),a=(n(96540),n(15680));const r={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/23/tech_sapi_exp",id:"changelog_source/preview/1.20/0/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Moving getComponent(componentId EntityComponent | undefined method to 1.2.0",source:"@site/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/23",slug:"/changelog_source/preview/1.20/0/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},p={},m=[],y={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Moving getComponent(componentId: string): EntityComponent | undefined method to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving getComponents(): EntityComponent","[","]"," method to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving hasComponent(componentId: string): boolean method to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving EntityComponent class to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving EntityBaseMovementComponent class to 1.2.0:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Moving readonly maxTurn: number property to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving the following additional EntityBaseMovementComponent subclasses to 1.2.0:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"EntityMovementAmphibiousComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementBasicComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementFlyComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementGenericComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementHoverComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementJumpComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMovementSkipComponent"))))),(0,a.yg)("li",{parentName:"ul"},"Renamed EntityIsDyableComponent class to EntityIsDyeableComponent and moved to 1.2.0"),(0,a.yg)("li",{parentName:"ul"},"Moving the following additional EntityComponent subclasses to 1.2.0:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"EntityCanClimbComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityCanFlyComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityCanPowerJumpComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityColorComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityFireImmuneComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityFloatsInLiquidComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityFlyingSpeedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityFrictionModifierComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityGroundOffsetComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsBabyComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsChargedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsChestedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsHiddenWhenInvisibleComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsIgnitedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsIllagerCaptainComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsSaddledComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsShakingComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsShearedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsStackableComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsStunnedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityIsTamedComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityMarkVariantComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityPushThroughComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityScaleComponent"),(0,a.yg)("li",{parentName:"ul"},"EntitySkinIdComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityVariantComponent"),(0,a.yg)("li",{parentName:"ul"},"EntityWantsJockeyComponent"))),(0,a.yg)("li",{parentName:"ul"},"Added class EffectTypes",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added function get(identifier: string): EffectType - Returns the effect type if it exists"),(0,a.yg)("li",{parentName:"ul"},"Added function getAll(): EffectType","[","]"," - Returns all of the effects"))),(0,a.yg)("li",{parentName:"ul"},"Updated class Effect",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Updated duration property. Is the duration of the effect in ticks"),(0,a.yg)("li",{parentName:"ul"},"Added property typeId. Returns the effect\u2019s type id"))),(0,a.yg)("li",{parentName:"ul"},"Added interface EntityEffectOptions { amplifier?: number, showParticles?: boolean }",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added function removeEffect(effectType: EffectType | string): boolean - Removes an effect from an Entity. Returns false if the effect is not found or does not exist"),(0,a.yg)("li",{parentName:"ul"},"Updated function getEffect(effectType: EffectType | string): Effect | undefined - Gets the effect if it exists on the entity. Otherwise returns undefined"),(0,a.yg)("li",{parentName:"ul"},"Updated function addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): boolean - Adds an effect to the Entity. Returns false if the effect cannot be added ( the effect does not exist, the duration is negative)"))),(0,a.yg)("li",{parentName:"ul"},"Items using the minimum duration for the \u201cminecraft:fuel\u201d component now work in the Blast Furnace and Smoker")))}c.isMDXComponent=!0}}]);