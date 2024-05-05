"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14845],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,y=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={id:"EquipmentSlot",title:"Enumeration: EquipmentSlot",sidebar_label:"EquipmentSlot",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/enums/EquipmentSlot",id:"sapi/stable/server/enums/EquipmentSlot",title:"Enumeration: EquipmentSlot",description:"The equipment slot of the mob. This includes armor, offhand",source:"@site/docs/sapi/stable/server/enums/EquipmentSlot.md",sourceDirName:"sapi/stable/server/enums",slug:"/sapi/stable/server/enums/EquipmentSlot",permalink:"/docs/sapi/stable/server/enums/EquipmentSlot",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EquipmentSlot",title:"Enumeration: EquipmentSlot",sidebar_label:"EquipmentSlot",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityLifetimeState",permalink:"/docs/sapi/stable/server/enums/EntityLifetimeState"},next:{title:"FluidType",permalink:"/docs/sapi/stable/server/enums/FluidType"}},o={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Chest",id:"chest",level:3},{value:"Feet",id:"feet",level:3},{value:"Head",id:"head",level:3},{value:"Legs",id:"legs",level:3},{value:"Mainhand",id:"mainhand",level:3},{value:"Offhand",id:"offhand",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The equipment slot of the mob. This includes armor, offhand\nand mainhand slots."),(0,a.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.yg)("h3",{id:"chest"},"Chest"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Chest")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Chest"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The chest slot. This slot is used to hold items such as\nChestplate or Elytra."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"feet"},"Feet"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Feet")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Feet"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The feet slot. This slot is used to hold items such as\nBoots."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"head"},"Head"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Head")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Head"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The head slot. This slot is used to hold items such as\nHelmets or Carved Pumpkins."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"legs"},"Legs"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Legs")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Legs"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The legs slot. This slot is used to hold items such as\nLeggings."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"mainhand"},"Mainhand"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Mainhand")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Mainhand"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The mainhand slot. For players, the mainhand slot refers to\nthe currently active hotbar slot."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"offhand"},"Offhand"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Offhand")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Offhand"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The offhand slot. This slot is used to hold items such as\nshields and maps."))}d.isMDXComponent=!0}}]);