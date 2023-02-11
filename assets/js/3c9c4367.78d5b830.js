"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[36125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(y,a(a({ref:t},m),{},{components:n})):r.createElement(y,a({ref:t},m))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"EntityFireImmuneComponent",title:"Class: EntityFireImmuneComponent",sidebar_label:"EntityFireImmuneComponent",sidebar_position:0,custom_edit_url:null},a=void 0,p={unversionedId:"sapi/preview/server/classes/EntityFireImmuneComponent",id:"sapi/preview/server/classes/EntityFireImmuneComponent",title:"Class: EntityFireImmuneComponent",description:"When added, this component signifies that this entity",source:"@site/docs/sapi/preview/server/classes/EntityFireImmuneComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityFireImmuneComponent",permalink:"/docs/sapi/preview/server/classes/EntityFireImmuneComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityFireImmuneComponent",title:"Class: EntityFireImmuneComponent",sidebar_label:"EntityFireImmuneComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityDieEventSignal",permalink:"/docs/sapi/preview/server/classes/EntityDieEventSignal"},next:{title:"EntityFloatsInLiquidComponent",permalink:"/docs/sapi/preview/server/classes/EntityFloatsInLiquidComponent"}},s={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides",level:4},{value:"componentId",id:"componentid",level:3}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When added, this component signifies that this entity\ndoesn't take damage from fire."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EntityFireImmuneComponent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"typeid"},"typeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"typeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:fire_immune."),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent#typeid"},"typeId")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentid"},"componentId"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"componentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"minecraft:fire_immune"')),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:fire_immune."))}c.isMDXComponent=!0}}]);