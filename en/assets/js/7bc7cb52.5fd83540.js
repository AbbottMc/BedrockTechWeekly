"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[58870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,f=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},79794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.19/60/25/tech_sapi_stable",id:"changelog_source/preview/1.19/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Entity",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where the ",(0,a.kt)("em",{parentName:"li"},"getEffect")," method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)  "))),(0,a.kt)("li",{parentName:"ul"},"EntityHurtEvent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added read-only property ",(0,a.kt)("em",{parentName:"li"},"damageSource: EntityDamageSource")," - Gets information about the damage source"),(0,a.kt)("li",{parentName:"ul"},"EntityDamageSource",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added property ",(0,a.kt)("em",{parentName:"li"},"cause: EntityDamageCause")," - Gets the damage cause"),(0,a.kt)("li",{parentName:"ul"},"Added property ",(0,a.kt)("em",{parentName:"li"},"damagingEntity?: Entity")," - Gets the damaging Entity"),(0,a.kt)("li",{parentName:"ul"},"Added property ",(0,a.kt)("em",{parentName:"li"},"damagingProjectile?: Entity")," - Gets the damaging projectile Entity"),(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"applyDamage(amount: number, source?: EntityDamageSource): boolean")," - Applies damage to the Entity and returns the result of the operation"))),(0,a.kt)("li",{parentName:"ul"},"Dimension",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fills an area between ",(0,a.kt)("em",{parentName:"li"},"begin")," and ",(0,a.kt)("em",{parentName:"li"},"end")," with block of type block. Returns number of blocks placed"))),(0,a.kt)("li",{parentName:"ul"},"Added new interface ",(0,a.kt)("em",{parentName:"li"},"BlockFillOptions")," with member ",(0,a.kt)("em",{parentName:"li"},"matchingBlock?: BlockPermutation | BlockType"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Used with ",(0,a.kt)("em",{parentName:"li"},"fillBlocks")," to apply additional options, such as only filling blocks matching ",(0,a.kt)("em",{parentName:"li"},"matchingBlock")))),(0,a.kt)("li",{parentName:"ul"},"Player",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"addLevels(amount: number): number")," - Adds/Removes level to/from the Player and returns the current level of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"addExperience(amount: number): number")," - Adds/Removes experience to/from the Player and returns the current experience of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"resetLevel(): void")," - Resets the level of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added function ",(0,a.kt)("em",{parentName:"li"},"getTotalXp(): number")," - Gets the total experience of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added read-only property ",(0,a.kt)("em",{parentName:"li"},"level")," - Gets the level of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added read-only property ",(0,a.kt)("em",{parentName:"li"},"xpEarnedAtCurrentLevel")," - Gets the experience earned at the current level of the Player"),(0,a.kt)("li",{parentName:"ul"},"Added read-only property ",(0,a.kt)("em",{parentName:"li"},"totalXpNeededForNextLevel")," - Gets the total experience required for the current level of the Player")))))))))}u.isMDXComponent=!0}}]);