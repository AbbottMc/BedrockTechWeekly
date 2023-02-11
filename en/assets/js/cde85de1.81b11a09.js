"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),y=i,u=c["".concat(s,".").concat(y)]||c[y]||m[y]||a;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},10183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"EntityAddRiderComponent",title:"Class: EntityAddRiderComponent",sidebar_label:"EntityAddRiderComponent",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/stable/server/classes/EntityAddRiderComponent",id:"sapi/stable/server/classes/EntityAddRiderComponent",title:"Class: EntityAddRiderComponent",description:"When added, this component makes the entity spawn with a",source:"@site/docs/sapi/stable/server/classes/EntityAddRiderComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityAddRiderComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityAddRiderComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityAddRiderComponent",title:"Class: EntityAddRiderComponent",sidebar_label:"EntityAddRiderComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Entity",permalink:"/en/docs/sapi/stable/server/classes/Entity"},next:{title:"EntityAgeableComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityAgeableComponent"}},s={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"entityType",id:"entitytype",level:3},{value:"spawnEvent",id:"spawnevent",level:3},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides",level:4},{value:"componentId",id:"componentid",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When added, this component makes the entity spawn with a\nrider of the specified entityType."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EntityAddRiderComponent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"entitytype"},"entityType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entityType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The type of entity that is added as a rider for this entity\nwhen spawned under certain conditions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"spawnevent"},"spawnEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"spawnEvent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Optional spawn event to trigger on the rider when that rider\nis spawned for this entity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"This property can throw when used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typeid"},"typeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"typeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:addrider."),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent#typeid"},"typeId")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentid"},"componentId"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"componentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"minecraft:addrider"')),(0,i.kt)("p",null,"Identifier of this component. Should always be\nminecraft:addrider."))}c.isMDXComponent=!0}}]);