"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"EntityStrengthComponent",title:"Class: EntityStrengthComponent",sidebar_label:"EntityStrengthComponent",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/classes/EntityStrengthComponent",id:"sapi/preview/server/classes/EntityStrengthComponent",title:"Class: EntityStrengthComponent",description:"Defines the entity's strength to carry items.",source:"@site/docs/sapi/preview/server/classes/EntityStrengthComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityStrengthComponent",permalink:"/docs/sapi/preview/server/classes/EntityStrengthComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityStrengthComponent",title:"Class: EntityStrengthComponent",sidebar_label:"EntityStrengthComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntitySpawnEventSignal",permalink:"/docs/sapi/preview/server/classes/EntitySpawnEventSignal"},next:{title:"EntityTameableComponent",permalink:"/docs/sapi/preview/server/classes/EntityTameableComponent"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"max",id:"max",level:3},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides",level:4},{value:"value",id:"value",level:3},{value:"componentId",id:"componentid",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Defines the entity's strength to carry items."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EntityStrengthComponent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Maximum strength of this entity, as defined in the entity\ntype definition."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typeid"},"typeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"typeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:strength."),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/IEntityComponent#typeid"},"typeId")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"value"},"value"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Current strength value of this entity, after any effects or\ncomponent updates are applied."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentid"},"componentId"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"componentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"minecraft:strength"')),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:strength."))}m.isMDXComponent=!0}}]);