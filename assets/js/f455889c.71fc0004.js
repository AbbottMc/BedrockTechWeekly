"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,k=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[s]="string"==typeof e?e:n,l[1]=m;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,m={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_stable",id:"changelog_source/preview/1.21/0/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0GameRules rule property-setters so that changes are propagated to clients",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},i={},p=[],c={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,n.kt)("em",{parentName:"li"},"GameRules")," rule property-setters so that changes are propagated to clients"),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"startItemCooldown")," and\xa0",(0,n.kt)("em",{parentName:"li"},"player.getItemCooldown"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"playSound")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"playSound")," is now deprecated and will be removed in a future major version. Use\xa0",(0,n.kt)("em",{parentName:"li"},"Dimension.playSound")," as the alternative"),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"ListBlockVolume_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockVolumeBase_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockLocationIterator_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"getGameMode(): GameMode_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"setGameMode(gameMode?: GameMode): void_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeAfterEventSignal_from\xa0_beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeBeforeEventSignal_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"ItemComponentConsumeEvent")," for ",(0,n.kt)("em",{parentName:"li"},"beta")),(0,n.kt)("li",{parentName:"ul"},"Change\xa0",(0,n.kt)("em",{parentName:"li"},"waitTick(ticks?: number)")," to\xa0",(0,n.kt)("em",{parentName:"li"},"system.waitTicks(ticks: number);")),(0,n.kt)("li",{parentName:"ul"},"Renamed property\xa0",(0,n.kt)("em",{parentName:"li"},"selectedSlot_to\xa0_selectedSlotIndex"),"\xa0and moved it from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0"))))}s.isMDXComponent=!0}}]);