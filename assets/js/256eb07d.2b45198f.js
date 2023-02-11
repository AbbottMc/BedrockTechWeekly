"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72410],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37060:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={id:"GameMode",title:"Enumeration: GameMode",sidebar_label:"GameMode",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/enums/GameMode",id:"sapi/preview/server/enums/GameMode",title:"Enumeration: GameMode",description:"Represents a game mode for the current world experience.",source:"@site/docs/sapi/preview/server/enums/GameMode.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/GameMode",permalink:"/docs/sapi/preview/server/enums/GameMode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"GameMode",title:"Enumeration: GameMode",sidebar_label:"GameMode",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"FluidType",permalink:"/docs/sapi/preview/server/enums/FluidType"},next:{title:"ItemLockMode",permalink:"/docs/sapi/preview/server/enums/ItemLockMode"}},s={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"adventure",id:"adventure",level:3},{value:"creative",id:"creative",level:3},{value:"spectator",id:"spectator",level:3},{value:"survival",id:"survival",level:3}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a game mode for the current world experience."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"adventure"},"adventure"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"adventure")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"adventure"')),(0,a.kt)("p",null,"World is in a more locked-down experience, where blocks may\nnot be manipulated."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"creative"},"creative"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"creative")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"creative"')),(0,a.kt)("p",null,"World is in a full creative mode. In creative mode, the\nplayer has all the resources available in the item selection\ntabs and the survival selection tab. They can also destroy\nblocks instantly including those which would normally be\nindestructible. Command and structure blocks can also be\nused in creative mode. Items also do not lose durability or\ndisappear."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"spectator"},"spectator"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"spectator")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"spectator"')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"survival"},"survival"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"survival")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"survival"')),(0,a.kt)("p",null,"World is in a survival mode, where players can take damage\nand entities may not be peaceful. Survival mode is where the\nplayer must collect resources, build structures while\nsurviving in their generated world. Activities can, over\ntime, chip away at player health and hunger bar."))}p.isMDXComponent=!0}}]);