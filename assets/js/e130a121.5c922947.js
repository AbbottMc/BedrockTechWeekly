"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[31602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,k=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},26061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/80/22/tech_sapi_exp",id:"changelog_source/preview/1.20/80/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added BlockComponentStepOnEvent for beta",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"BlockComponentStepOnEvent")," for ",(0,a.kt)("em",{parentName:"li"},"beta")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"BlockRegistry")," for ",(0,a.kt)("em",{parentName:"li"},"beta")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"WorldInitializeBeforeEvent")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"BlockCustomComponent")),(0,a.kt)("li",{parentName:"ul"},"Dimension:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume")," - Gets the blocks in a volume if it matches the filter"),(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean")," - Returns true if the block in volume matches the filter, false otherwise"))),(0,a.kt)("li",{parentName:"ul"},"Moved ",(0,a.kt)("em",{parentName:"li"},"ItemCooldownComponent")," from ",(0,a.kt)("em",{parentName:"li"},"beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.10.0")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"BlockComponentStepOffEvent")," for ",(0,a.kt)("em",{parentName:"li"},"beta")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"onStepOff")," to ",(0,a.kt)("em",{parentName:"li"},"BlockCustomComponent")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"BlockComponentRandomTickEvent")," for ",(0,a.kt)("em",{parentName:"li"},"beta")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"onRandomTick")," to ",(0,a.kt)("em",{parentName:"li"},"BlockCustomComponent")),(0,a.kt)("li",{parentName:"ul"},"StructureManager:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getIds(): string")," - Returns a list of identifiers including all structures saved to memory and the world"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where the delete function would not remove structures that were previously saved to the world but not loaded"),(0,a.kt)("li",{parentName:"ul"},"Changed the default save mode of ",(0,a.kt)("em",{parentName:"li"},"createEmpty")," to ",(0,a.kt)("em",{parentName:"li"},"StructureSaveMode.Memory"))))))}u.isMDXComponent=!0}}]);