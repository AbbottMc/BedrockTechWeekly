"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59422],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,d=u["".concat(p,".").concat(s)]||u[s]||y[s]||l;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},72122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.19/60/20/tech_sapi_stable",id:"changelog_source/preview/1.19/60/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Container",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/20",slug:"/changelog_source/preview/1.19/60/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/60/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},p={},c=[],m={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Container",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"clearItem(slot: number): void"),"-"," Clears the item at the given slot index"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"clearAll(): void"),"-"," Clears all items in the container"),(0,a.yg)("li",{parentName:"ul"},"Made the\xa0",(0,a.yg)("em",{parentName:"li"},"itemStack_argument of function\xa0_setItem"),"\xa0optional - If not provided, the slot is cleared"),(0,a.yg)("li",{parentName:"ul"},"Added event\xa0",(0,a.yg)("em",{parentName:"li"},"events.playerSpawn"),"-"," Fires when a player spawns in the world"),(0,a.yg)("li",{parentName:"ul"},"Renamed event\xa0",(0,a.yg)("em",{parentName:"li"},"events.entityCreate_to\xa0_world.events.entitySpawn"),". This event no longer fires for players"))),(0,a.yg)("li",{parentName:"ul"},"PlayerJoinEvent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"playerId"),"-"," The unique ID of the player that joined the world"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"playerName"),"-"," The name of the player that joined the world"),(0,a.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,a.yg)("em",{parentName:"li"},"player")))),(0,a.yg)("li",{parentName:"ul"},"PlayerLeaveEvent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"playerId"),"-"," The unique ID of the player that left the world"))),(0,a.yg)("li",{parentName:"ul"},"SimulatedPlayer",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"respawn()"),"-"," Respawns the SimulatedPlayer if it's dead"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"disconnect()"),"-"," Removes the SimulatedPlayer from the world"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"getSlot(slot: number): ContainerSlot"),"-"," Returns the slot at the given container slot index"))),(0,a.yg)("li",{parentName:"ul"},"ContainerSlot",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added class\xa0",(0,a.yg)("em",{parentName:"li"},"ContainerSlot"),"-"," Used to directly manipulate items stored within a container"),(0,a.yg)("li",{parentName:"ul"},"Renamed entity property\xa0",(0,a.yg)("em",{parentName:"li"},"viewVector_to\xa0_viewDirection"),"\xa0and now returns\xa0Vector3"),(0,a.yg)("li",{parentName:"ul"},"Renamed entity function\xa0g",(0,a.yg)("em",{parentName:"li"},"etEntitiesFromViewVector_to\xa0_getEntitiesFromViewDirection")),(0,a.yg)("li",{parentName:"ul"},"Renamed entity function\xa0",(0,a.yg)("em",{parentName:"li"},"getBlockFromViewVector_to\xa0_getBlockFromViewDirection")))),(0,a.yg)("li",{parentName:"ul"},"Renamed ",(0,a.yg)("em",{parentName:"li"},"IRawMessage")," to ",(0,a.yg)("em",{parentName:"li"},"RawMessage")," for naming consistency")))}y.isMDXComponent=!0}}]);