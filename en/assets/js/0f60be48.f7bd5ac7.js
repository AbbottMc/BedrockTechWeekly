"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70276],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},66061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={},c=void 0,i={unversionedId:"changelog_source/stable/1.20/50/tech_sapi_stable",id:"changelog_source/stable/1.20/50/tech_sapi_stable",title:"tech_sapi_stable",description:"Items",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech_sapi_stable",permalink:"/en/docs/changelog_source/stable/1.20/50/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},l=[{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Cameras</strong>",id:"cameras",level:2},{value:"<strong>AI Goal Components</strong>",id:"ai-goal-components",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"items"},(0,a.yg)("strong",{parentName:"h2"},"Items")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Renamed "minecraft:use',"_",'duration" to "minecraft:use',"_",'modifiers" and added a "movement',"_",'modifier" parameter in json format versions 1.20.50 and higher'),(0,a.yg)("li",{parentName:"ul"},'Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use',"_",'modifiers" instead for "movement',"_",'modifier" behavior'),(0,a.yg)("li",{parentName:"ul"},'Deprecated "on',"_",'dig" event triggers from "minecraft:digger" in format versions 1.20.50 and higher')),(0,a.yg)("h2",{id:"cameras"},(0,a.yg)("strong",{parentName:"h2"},"Cameras")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added a content warning for when the camera is placed outside of the player's chunk radius")),(0,a.yg)("h2",{id:"ai-goal-components"},(0,a.yg)("strong",{parentName:"h2"},"AI Goal Components")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Added "minecraft:behavior.melee',"_","box","_",'attack" behavior which functions the same as "minecraft:behavior.melee',"_",'attack" but uses bounds based attack reach calculations',(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The\xa0",(0,a.yg)("em",{parentName:"li"},"reach","_","multiplier_attribute is removed and replaced with\xa0_box","_","increase")),(0,a.yg)("li",{parentName:"ul"},"Reach is calculated by increasing the bounds of the attacking mobs in the xz-plane by\xa0_box","_",'increase_blocks to create an "attack box". If the attack box intersects with the target\'s bounds the attacking mob can reach it')))))}p.isMDXComponent=!0}}]);