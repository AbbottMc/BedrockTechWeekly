"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=i,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,p={unversionedId:"changelog_source/preview/1.20/60/23/tech_sapi_exp",id:"changelog_source/preview/1.20/60/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Updated function\xa0addEffect\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updated function\xa0",(0,i.kt)("em",{parentName:"p"},"addEffect"),"\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added item dynamic properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"clearDynamicProperties(): void"),"\xa0- Removes all dynamic properties from the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicPropertyIds(): string","[","]"),"\xa0- Returns an array of all dynamic property identifiers on the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount(): number"),"\xa0- Returns the total byte count of all dynamic properties on the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"clearDynamicProperties(): void"),"\xa0- Removes all dynamic properties from the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicPropertyIds(): string","[","]"),"\xa0- Returns an array of all dynamic property identifiers on the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount(): number"),"\xa0- Returns the total byte count of all dynamic properties on the item stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added function\xa0",(0,i.kt)("em",{parentName:"p"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added class\xa0",(0,i.kt)("em",{parentName:"p"},"EntityProjectileComponent"),". This component is used to shoot a projectile entity and modify its properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added interface ",(0,i.kt)("em",{parentName:"p"},"ProjectileShootOptions"),". This interface is used with function\xa0",(0,i.kt)("em",{parentName:"p"},"EntityProjectileComponent.shoot"),"\xa0to optionally modify the accuracy of the projectile when shot"))))}m.isMDXComponent=!0}}]);