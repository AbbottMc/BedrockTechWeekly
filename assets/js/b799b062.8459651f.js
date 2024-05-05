"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17562],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,y=m(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,u=c["".concat(i,".").concat(s)]||c[s]||g[s]||o;return a?n.createElement(u,l(l({ref:t},y),{},{components:a})):n.createElement(u,l({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},45782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,m={unversionedId:"changelog_source/stable/1.20/80/tech_sapi_stable",id:"changelog_source/stable/1.20/80/tech_sapi_stable",title:"tech_sapi_stable",description:'-   Dynamic imports (e.g., import("/my-module.js")) should be functional again',source:"@site/docs/changelog_source/stable/1.20/80/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/80",slug:"/changelog_source/stable/1.20/80/tech_sapi_stable",permalink:"/docs/changelog_source/stable/1.20/80/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/80/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},i={},p=[],y={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Dynamic imports (e.g., import("/my-module.js")) should be functional again'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"BlockTypes")," will now return valid types for flattened or refactored block names"),(0,r.yg)("li",{parentName:"ul"},"EntityMountTamingComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"EntityMountTamingComponent")," to ",(0,r.yg)("em",{parentName:"li"},"EntityTameMountComponent")),(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"setTamed")," to ",(0,r.yg)("em",{parentName:"li"},"tame")))),(0,r.yg)("li",{parentName:"ul"},"Released ",(0,r.yg)("em",{parentName:"li"},"BlockComponentTypes")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Released ",(0,r.yg)("em",{parentName:"li"},"EntityComponentTypes")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Released ",(0,r.yg)("em",{parentName:"li"},"ItemComponentTypes")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Removed ",(0,r.yg)("em",{parentName:"li"},"filters")," as they currently have no backing implementation"),(0,r.yg)("li",{parentName:"ul"},"Fixing some component ",(0,r.yg)("em",{parentName:"li"},"isValid")," methods where they didn\u2019t properly return false in cases where the component had been removed from the Entity"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"PaletteColor")," enum to ",(0,r.yg)("em",{parentName:"li"},"beta")," for use with ",(0,r.yg)("em",{parentName:"li"},"ItemColorComponent"),"/",(0,r.yg)("em",{parentName:"li"},"ItemColor2Component")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"ItemColor2Component")," to ",(0,r.yg)("em",{parentName:"li"},"beta")," for reading ",(0,r.yg)("em",{parentName:"li"},"minecraft:color2")),(0,r.yg)("li",{parentName:"ul"},"Setting a dynamic property with a key larger than 32kb now will result in an exception"),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"EntityType")," and ",(0,r.yg)("em",{parentName:"li"},"EntityTypes")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.11.0")),(0,r.yg)("li",{parentName:"ul"},"Released ",(0,r.yg)("em",{parentName:"li"},"playMusic__,Player.queueMusic"),", ",(0,r.yg)("em",{parentName:"li"},"Player.stopMusic")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.11.0")),(0,r.yg)("li",{parentName:"ul"},"Removed ",(0,r.yg)("em",{parentName:"li"},"BlockAreaSize")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," and replaced usages with ",(0,r.yg)("em",{parentName:"li"},"Vector3")),(0,r.yg)("li",{parentName:"ul"},"Renamed parameter ",(0,r.yg)("em",{parentName:"li"},"itemCategory")," in ",(0,r.yg)("em",{parentName:"li"},"getItemCooldown")," and ",(0,r.yg)("em",{parentName:"li"},"player.startItemCooldown")," to ",(0,r.yg)("em",{parentName:"li"},"cooldownCategory")),(0,r.yg)("li",{parentName:"ul"},"Changed ",(0,r.yg)("em",{parentName:"li"},"type")," to only ",(0,r.yg)("em",{parentName:"li"},"EnchantmentType")," to follow API guidelines"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"EnchantmentSlot")," and ",(0,r.yg)("em",{parentName:"li"},"slots")," to ",(0,r.yg)("em",{parentName:"li"},"beta")," for determining the enchantable slots of an item"),(0,r.yg)("li",{parentName:"ul"},"Added \u2018minecraft:custom","_","components\u2019 block component under the Beta APIs feature flag")))}g.isMDXComponent=!0}}]);