"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),k=o(a),s=i,N=k["".concat(p,".").concat(s)]||k[s]||u[s]||r;return a?n.createElement(N,l(l({ref:t},c),{},{components:a})):n.createElement(N,l({ref:t},c))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[k]="string"==typeof e?e:i,l[1]=m;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},69150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={},l=void 0,m={unversionedId:"changelog_source/preview/1.20/10/23/tech_sapi_exp",id:"changelog_source/preview/1.20/10/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Dynamic Property identifiers are now limited to 1024 characters.",source:"@site/docs/changelog_source/preview/1.20/10/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/23",slug:"/changelog_source/preview/1.20/10/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/10/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},p={},o=[],c={toc:o};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic Property identifiers are now limited to 1024 characters."),(0,i.kt)("li",{parentName:"ul"},"Removed MinecraftEffectTypes defined in\xa0",(0,i.kt)("em",{parentName:"li"},"@minecraft/server. See @minecraft/vanilla-data NPM package for an equivalent."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Moved several APIs to stable 1.3.0:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Moving\xa0",(0,i.kt)("em",{parentName:"li"},"tryTeleport(location: Vector3, duration: number, options: ScriptTeleportOptions)")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moving\xa0",(0,i.kt)("em",{parentName:"li"},"teleport(location: Vector3, options: ScriptTeleportOptions)")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,i.kt)("em",{parentName:"li"},"getComponent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved world event\xa0",(0,i.kt)("em",{parentName:"li"},"PlayerJoinAfterEvent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved world event\xa0",(0,i.kt)("em",{parentName:"li"},"PlayerLeaveAfterEvent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved world event\xa0",(0,i.kt)("em",{parentName:"li"},"PlayerSpawnAfterEvent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved EntityComponent\xa0",(0,i.kt)("em",{parentName:"li"},"EntityHealableComponent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved EntityComponent\xa0",(0,i.kt)("em",{parentName:"li"},"EntityHealthComponent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,i.kt)("em",{parentName:"li"},"FeedItem")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,i.kt)("em",{parentName:"li"},"FeedItemEffect")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moving\xa0",(0,i.kt)("em",{parentName:"li"},"addEffect(effectType: string | EffectType, duration: number, options: EntityEffectOptions)")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved\xa0",(0,i.kt)("em",{parentName:"li"},"getEffect(effectType: string | EffectType)")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved\xa0",(0,i.kt)("em",{parentName:"li"},"getEffects")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved\xa0",(0,i.kt)("em",{parentName:"li"},"removeEffect(effectType: string | EffectType)")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"AfterEvents",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Moving\xa0",(0,i.kt)("em",{parentName:"li"},"ButtonPushEvent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moving\xa0",(0,i.kt)("em",{parentName:"li"},"LeverActivateEvent")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")))),(0,i.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,i.kt)("em",{parentName:"li"},"spawnEntity")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0")),(0,i.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,i.kt)("em",{parentName:"li"},"spawnItem")," to\xa0",(0,i.kt)("em",{parentName:"li"},"1.3.0"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Spawn Point Updates:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,i.kt)("em",{parentName:"li"},"clearSpawn")),(0,i.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,i.kt)("em",{parentName:"li"},"spawnDimension")),(0,i.kt)("li",{parentName:"ul"},"Added function\xa0",(0,i.kt)("em",{parentName:"li"},"getSpawnPoint: DimensionLocation | undefined"),"-"," Returns the player's spawn point"),(0,i.kt)("li",{parentName:"ul"},"Added function\xa0",(0,i.kt)("em",{parentName:"li"},"setSpawnPoint(spawnPoint?: DimensionLocation): void"),"-"," Sets the player's spawn point, or clears it if\xa0",(0,i.kt)("em",{parentName:"li"},"spawnPoint"),"\xa0is\xa0",(0,i.kt)("em",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Renamed function\xa0",(0,i.kt)("em",{parentName:"li"},"getDefaultSpawnPosition")," to\xa0",(0,i.kt)("em",{parentName:"li"},"getDefaultSpawnLocation")),(0,i.kt)("li",{parentName:"ul"},"Renamed function\xa0",(0,i.kt)("em",{parentName:"li"},"setDefaultSpawn")," to\xa0",(0,i.kt)("em",{parentName:"li"},"setDefaultSpawnLocation")),(0,i.kt)("li",{parentName:"ul"},"DimensionLocation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added new interface\xa0",(0,i.kt)("em",{parentName:"li"},"DimensionLocation"),"-"," Represents a location in a dimension"))),(0,i.kt)("li",{parentName:"ul"},"Added\xa0",(0,i.kt)("em",{parentName:"li"},"hasParticipant")," function to\xa0",(0,i.kt)("em",{parentName:"li"},"ScoreboardObjective"),"."),(0,i.kt)("li",{parentName:"ul"},"The following functions in\xa0",(0,i.kt)("em",{parentName:"li"},"ScoreboardObjective")," can now accept\xa0",(0,i.kt)("em",{parentName:"li"},"Entity"),"\xa0or\xa0",(0,i.kt)("em",{parentName:"li"},"string"),"\xa0types as\xa0",(0,i.kt)("em",{parentName:"li"},"participants"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"getScore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"setScore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"removeParticipant")))),(0,i.kt)("li",{parentName:"ul"},"Removed\xa0",(0,i.kt)("em",{parentName:"li"},"getScore"),",\xa0",(0,i.kt)("em",{parentName:"li"},"setScore")," from\xa0",(0,i.kt)("em",{parentName:"li"},"ScoreboardIdentity"),"\xa0and\xa0",(0,i.kt)("em",{parentName:"li"},"Scoreboard"),".")),(0,i.kt)("p",null,"Removed the\xa0",(0,i.kt)("em",{parentName:"p"},"removeFromObjective"),"\xa0function from\xa0",(0,i.kt)("em",{parentName:"p"},"ScoreboardIdentity"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed bug where scoreboard values would not be updated on the client when updated from script.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Raycasting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,i.kt)("em",{parentName:"li"},"getBlockFromRay"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changed return type from\xa0",(0,i.kt)("em",{parentName:"li"},"Block")," to\xa0",(0,i.kt)("em",{parentName:"li"},"BlockRaycastHit | undefined")))),(0,i.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,i.kt)("em",{parentName:"li"},"getEntitiesFromRay"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changed return type from\xa0",(0,i.kt)("em",{parentName:"li"},"Entity","[","]")," to\xa0",(0,i.kt)("em",{parentName:"li"},"EntityRaycastHit","[","]")))),(0,i.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,i.kt)("em",{parentName:"li"},"getBlockFromViewDirection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changed return type from\xa0",(0,i.kt)("em",{parentName:"li"},"Block")," to\xa0",(0,i.kt)("em",{parentName:"li"},"BlockRaycastHit | undefined")))),(0,i.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,i.kt)("em",{parentName:"li"},"getEntitiesFromViewDirection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changed return type from\xa0",(0,i.kt)("em",{parentName:"li"},"Entity","[","]")," to\xa0",(0,i.kt)("em",{parentName:"li"},"EntityRaycastHit","[","]")))),(0,i.kt)("li",{parentName:"ul"},"Added interface\xa0",(0,i.kt)("em",{parentName:"li"},"BlockRaycastHit")),(0,i.kt)("li",{parentName:"ul"},"Added interface\xa0",(0,i.kt)("em",{parentName:"li"},"EntityRaycastHit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Renamed leverActivate after event to leverAction"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removed class\xa0",(0,i.kt)("em",{parentName:"li"},"EntityHitAfterEvent"),"."),(0,i.kt)("li",{parentName:"ul"},"Added class\xa0",(0,i.kt)("em",{parentName:"li"},"EntityHitBlockAfterEvent")),(0,i.kt)("li",{parentName:"ul"},"Added class\xa0",(0,i.kt)("em",{parentName:"li"},"EntityHitEntityAfterEvent")),(0,i.kt)("li",{parentName:"ul"},"Class\xa0",(0,i.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,i.kt)("em",{parentName:"li"},"entityHit")),(0,i.kt)("li",{parentName:"ul"},"Added property\xa0",(0,i.kt)("em",{parentName:"li"},"entityHitBlock")),(0,i.kt)("li",{parentName:"ul"},"Added property\xa0",(0,i.kt)("em",{parentName:"li"},"entityHitEntity")))),(0,i.kt)("li",{parentName:"ul"},"Added helper function\xa0",(0,i.kt)("em",{parentName:"li"},"isValid")," to several classes in order to check if the object is valid. This can safely be used on any handle to a native object before accessing or using the object, to ensure the underlying object still exists and is valid to use.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Block (checks the block is a valid position in bounds and the containing chunk is loaded & ticking)"),(0,i.kt)("li",{parentName:"ul"},"Container (checks the relevent container inventory exists and is valid)"),(0,i.kt)("li",{parentName:"ul"},"Effect (checks the owning entity is valid and the effect exists on that entity)"),(0,i.kt)("li",{parentName:"ul"},"ScreenDisplay (checks the owning player is valid)"),(0,i.kt)("li",{parentName:"ul"},"ScoreboardObjective (checks the objective entry exists and is attached to a valid scoreboard)"),(0,i.kt)("li",{parentName:"ul"},"Entity (checks that the entity exists in the world. Will return true if the entity is dead)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Player"),(0,i.kt)("li",{parentName:"ul"},"SimulatedPlayer (Note simulated players do not automatically get removed from the world, so\xa0",(0,i.kt)("em",{parentName:"li"},"isValid")," will return true long after they are dead)"))),(0,i.kt)("li",{parentName:"ul"},"ContainerSlot (checks the item context is valid: Container exists in the world, such as the owning entity, and the slot is within the container bounds)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Already existed as a readonly property, changed to a method for consistency"))),(0,i.kt)("li",{parentName:"ul"},"Component",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"EntityAttributeComponent (checks the owning entity is valid and the attribute exists on the entity)"),(0,i.kt)("li",{parentName:"ul"},"BlockLiquidContainerComponent (checks block exists and is a valid cauldron type)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added read only method\xa0",(0,i.kt)("em",{parentName:"li"},"isValidLiquid")," which checks if the liquid in the cauldron matches the component in question (EG. BlockLavaContainerComponent checks for lava liquid)"))),(0,i.kt)("li",{parentName:"ul"},"EntityComponent (checks the owning entity exists)"),(0,i.kt)("li",{parentName:"ul"},"ItemComponent (checks the owning item exists)"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"World")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Renamed\xa0",(0,i.kt)("em",{parentName:"p"},"getTime")," to\xa0",(0,i.kt)("em",{parentName:"p"},"getTimeOfDay"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Renamed\xa0",(0,i.kt)("em",{parentName:"p"},"setTime")," to\xa0",(0,i.kt)("em",{parentName:"p"},"setTimeOfDay"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"setTimeOfDay")," now accepts a\xa0",(0,i.kt)("em",{parentName:"p"},"TimeOfDay"),"\xa0enum as an argument.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The\xa0",(0,i.kt)("em",{parentName:"p"},"timeOfDay")," argument for\xa0",(0,i.kt)("em",{parentName:"p"},"setTime"),"\xa0must now be within 0-23999 (inclusive).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added\xa0",(0,i.kt)("em",{parentName:"p"},"getDay")))),(0,i.kt)("p",null,"Updated the following enums' values to be PascalCase instead of camelCase:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ClipboardMirrorAxis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ClipboardRotation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"HttpRequestMethod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"FormCancelationReason")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Direction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"DisplaySlotId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"EntityLifetimeState")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"FluidType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ObjectiveSortOrder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ScoreboardIdentityType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ScriptEventSource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"SignSide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"WatchdogTerminateReason")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"WeatherType"))))}k.isMDXComponent=!0}}]);