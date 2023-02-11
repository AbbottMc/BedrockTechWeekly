"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[91084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"BlockLavaContainerComponent",title:"Class: BlockLavaContainerComponent",sidebar_label:"BlockLavaContainerComponent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/BlockLavaContainerComponent",id:"sapi/stable/server/classes/BlockLavaContainerComponent",title:"Class: BlockLavaContainerComponent",description:"Represents a fluid container block that currently contains",source:"@site/docs/sapi/stable/server/classes/BlockLavaContainerComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockLavaContainerComponent",permalink:"/docs/sapi/stable/server/classes/BlockLavaContainerComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockLavaContainerComponent",title:"Class: BlockLavaContainerComponent",sidebar_label:"BlockLavaContainerComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockInventoryComponentContainer",permalink:"/docs/sapi/stable/server/classes/BlockInventoryComponentContainer"},next:{title:"BlockLocation",permalink:"/docs/sapi/stable/server/classes/BlockLocation"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"fillLevel",id:"filllevel",level:3},{value:"location",id:"location",level:3},{value:"typeId",id:"typeid",level:3},{value:"componentId",id:"componentid",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a fluid container block that currently contains\nlava."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockComponent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BlockLavaContainerComponent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"filllevel"},"fillLevel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fillLevel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Relative level of lava within this block. Valid values are\nbetween FluidContainer.minFillLevel (0) and\nFluidContainer.maxFillLevel (6)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"location"},"location"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"location"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocation"))),(0,a.kt)("p",null,"Source location of the block."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"typeid"},"typeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"typeId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Identifier of this component. Should always be\nminecraft:lavaContainer."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"componentid"},"componentId"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"componentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:lavaContainer"')),(0,a.kt)("p",null,"Identifier of this component. Should always be\nminecraft:lavaContainer."))}u.isMDXComponent=!0}}]);