"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[62195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"ItemEnchantsComponent",title:"Class: ItemEnchantsComponent",sidebar_label:"ItemEnchantsComponent",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"sapi/stable/server/classes/ItemEnchantsComponent",id:"sapi/stable/server/classes/ItemEnchantsComponent",title:"Class: ItemEnchantsComponent",description:"When present on an item, this item has applied enchantment",source:"@site/docs/sapi/stable/server/classes/ItemEnchantsComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemEnchantsComponent",permalink:"/docs/sapi/stable/server/classes/ItemEnchantsComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemEnchantsComponent",title:"Class: ItemEnchantsComponent",sidebar_label:"ItemEnchantsComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemDurabilityComponent",permalink:"/docs/sapi/stable/server/classes/ItemDurabilityComponent"},next:{title:"ItemFoodComponent",permalink:"/docs/sapi/stable/server/classes/ItemFoodComponent"}},i={},p=[{value:"Properties",id:"properties",level:2},{value:"enchantments",id:"enchantments",level:3},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"removeAllEnchantments",id:"removeallenchantments",level:3},{value:"Returns",id:"returns",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When present on an item, this item has applied enchantment\neffects. Note that this component only applies to\ndata-driven items."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enchantments"},"enchantments"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enchantments"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EnchantmentList"},(0,a.kt)("inlineCode",{parentName:"a"},"EnchantmentList"))),(0,a.kt)("p",null,"Returns a collection of the enchantments applied to this\nitem stack."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"componentid"},"componentId"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"componentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:enchantments"')),(0,a.kt)("p",null,"Identifier of this component."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"removeallenchantments"},"removeAllEnchantments"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"removeAllEnchantments"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Removes all enchantments applied to this item stack."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);