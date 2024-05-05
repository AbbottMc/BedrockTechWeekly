"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24104],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,g=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?n.createElement(g,l(l({ref:t},y),{},{components:r})):n.createElement(g,l({ref:t},y))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(58168),a=(r(96540),r(15680));const i={},l=void 0,p={unversionedId:"changelog_source/preview/1.20/10/20/tech_sapi_exp",id:"changelog_source/preview/1.20/10/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Dynamic properties can now optionally have default values",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/20",slug:"/changelog_source/preview/1.20/10/20/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},o={},m=[],y={toc:m},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dynamic properties can now optionally have default values"),(0,a.yg)("li",{parentName:"ul"},"Increased Dynamic Property registration limits:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Actors: ~1KB -",">"," 128KB"),(0,a.yg)("li",{parentName:"ul"},"World: ~10KB -",">"," 1MB"))),(0,a.yg)("li",{parentName:"ul"},"ScreenDisplay",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Removed\xa0",(0,a.yg)("em",{parentName:"li"},"clearTitle()"),"-"," Use ",(0,a.yg)("em",{parentName:"li"},"setTitle")," with an empty string to clear the title"),(0,a.yg)("li",{parentName:"ul"},"Updated\xa0",(0,a.yg)("em",{parentName:"li"},"fadeInSeconds, staySeconds, fadeOutSeconds_to\xa0_fadeInDuration, stayDuration, fadeOutDuration"),"\xa0on TitleDisplayOptions (seconds to ticks)"),(0,a.yg)("li",{parentName:"ul"},"Updated ",(0,a.yg)("em",{parentName:"li"},"setTitle")," to reset the times per each new title"),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("em",{parentName:"li"},"RawMessage")," support for ",(0,a.yg)("em",{parentName:"li"},"setTitle"),", ",(0,a.yg)("em",{parentName:"li"},"updateSubtitle"),", and ",(0,a.yg)("em",{parentName:"li"},"setActionBar")))),(0,a.yg)("li",{parentName:"ul"},"Entity additions",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isGliding"),"-"," Returns whether the player is gliding with Elytra"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isJumping"),"-"," Returns whether the player is using the jump action"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isFlying"),"-"," Returns whether the player is flying (e.g. Creative or Spectator mode)"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isSprinting"),"-"," Returns whether the entity is sprinting"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isSwimming"),"-"," Returns whether the entity is swimming"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isClimbing"),"-"," Returns whether the entity is climbing (e.g. Player on a ladder or Spider on a wall)"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isOnGround"),"-"," Returns whether the entity is on the ground"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isInWater"),"-"," Returns whether the entity is in water"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"isFalling"),"-"," Returns whether the entity is falling"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"fallDistance"),"-"," Returns the current fall distance (Used for calculating fall damage)"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"fly"),"-"," Makes the player fly (e.g. Creative or Spectator mode)"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"stopFlying"),"-"," Makes the player stop flying (e.g. Creative or Spectator mode)"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"glide"),"-"," Makes the player glide with Elytra"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"stopGliding"),"-"," Makes the player stop gliding with Elytra"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"swim"),"-"," Makes the player swim"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"stopSwimming"),"-"," Makes the player stop swimming"))),(0,a.yg)("li",{parentName:"ul"},"Entity additions (effects)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Updated function\xa0_addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void_to return void and to throw if the effect does not exist or the parameters are out of bounds"),(0,a.yg)("li",{parentName:"ul"},"Updated function\xa0_getEffect(effectType: EffectType | string): Effect | undefined_to throw if the effect does not exist"),(0,a.yg)("li",{parentName:"ul"},"Updated function\xa0_removeEffect(effectType: EffectType | string): boolean_to throw if the effect does not exist"))),(0,a.yg)("li",{parentName:"ul"},"BlockEvents",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added events ",(0,a.yg)("em",{parentName:"li"},"'PressurePlatePushEvent'"),", ",(0,a.yg)("em",{parentName:"li"},"'PressurePlatePopEvent'"),", ",(0,a.yg)("em",{parentName:"li"},"'TargetBlockHitEvent'"),", and ",(0,a.yg)("em",{parentName:"li"},"'TripWireTripEvent'")))),(0,a.yg)("li",{parentName:"ul"},"ContainerSlot",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,a.yg)("em",{parentName:"li"},"clone"),"-"," Please use function\xa0",(0,a.yg)("em",{parentName:"li"},"getItem"),"\xa0instead"))),(0,a.yg)("li",{parentName:"ul"},"EntityHealableComponent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Removed\xa0_filters: FilterGroup_property"))),(0,a.yg)("li",{parentName:"ul"},"EntityAttributeComponent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added\xa0",(0,a.yg)("em",{parentName:"li"},"effectiveMin: number")," Returns the minimum possible value for the component"),(0,a.yg)("li",{parentName:"ul"},"Added\xa0",(0,a.yg)("em",{parentName:"li"},"effectiveMax: number")," Return the maximum possible value for the component"),(0,a.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,a.yg)("em",{parentName:"li"},"value_property to\xa0_defaultValue")),(0,a.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,a.yg)("em",{parentName:"li"},"current_property to\xa0_currentValue")),(0,a.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,a.yg)("em",{parentName:"li"},"setCurrent_method to\xa0_setCurrentValue")))),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("em",{parentName:"li"},"EntityHealthChangedAfterEvent"),". It is triggered when any health change happens for an Entity")))}s.isMDXComponent=!0}}]);