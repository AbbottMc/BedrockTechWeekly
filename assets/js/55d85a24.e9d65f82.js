"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"FluidType",title:"Enumeration: FluidType",sidebar_label:"FluidType",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/enums/FluidType",id:"sapi/preview/server/enums/FluidType",title:"Enumeration: FluidType",description:"Represents the type of fluid for use within a fluid",source:"@site/docs/sapi/preview/server/enums/FluidType.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/FluidType",permalink:"/docs/sapi/preview/server/enums/FluidType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FluidType",title:"Enumeration: FluidType",sidebar_label:"FluidType",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityDamageCause",permalink:"/docs/sapi/preview/server/enums/EntityDamageCause"},next:{title:"GameMode",permalink:"/docs/sapi/preview/server/enums/GameMode"}},p={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"lava",id:"lava",level:3},{value:"potion",id:"potion",level:3},{value:"powderSnow",id:"powdersnow",level:3},{value:"water",id:"water",level:3}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the type of fluid for use within a fluid\ncontaining block, like a cauldron."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"lava"},"lava"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lava")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"lava"')),(0,i.kt)("p",null,"Represents lava as a type of fluid."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"potion"},"potion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"potion")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"potion"')),(0,i.kt)("p",null,"Represents a potion as a type of fluid."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"powdersnow"},"powderSnow"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"powderSnow")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"powderSnow"')),(0,i.kt)("p",null,"Represents powder snow as a type of fluid."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"water"},"water"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"water")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"water"')),(0,i.kt)("p",null,"Represents water as a type of fluida."))}d.isMDXComponent=!0}}]);