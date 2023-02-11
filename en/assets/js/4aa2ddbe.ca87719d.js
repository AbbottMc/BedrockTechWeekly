"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"EnchantmentSlot",title:"Class: EnchantmentSlot",sidebar_label:"EnchantmentSlot",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/EnchantmentSlot",id:"sapi/preview/server/classes/EnchantmentSlot",title:"Class: EnchantmentSlot",description:"This enum represents the item slot or type that an",source:"@site/docs/sapi/preview/server/classes/EnchantmentSlot.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EnchantmentSlot",permalink:"/en/docs/sapi/preview/server/classes/EnchantmentSlot",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EnchantmentSlot",title:"Class: EnchantmentSlot",sidebar_label:"EnchantmentSlot",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EnchantmentList",permalink:"/en/docs/sapi/preview/server/classes/EnchantmentList"},next:{title:"EnchantmentType",permalink:"/en/docs/sapi/preview/server/classes/EnchantmentType"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"all",id:"all",level:3},{value:"armorFeet",id:"armorfeet",level:3},{value:"armorHead",id:"armorhead",level:3},{value:"armorLegs",id:"armorlegs",level:3},{value:"armorTorso",id:"armortorso",level:3},{value:"axe",id:"axe",level:3},{value:"bow",id:"bow",level:3},{value:"carrotStick",id:"carrotstick",level:3},{value:"cosmeticHead",id:"cosmetichead",level:3},{value:"crossbow",id:"crossbow",level:3},{value:"elytra",id:"elytra",level:3},{value:"fishingRod",id:"fishingrod",level:3},{value:"flintsteel",id:"flintsteel",level:3},{value:"gArmor",id:"garmor",level:3},{value:"gDigging",id:"gdigging",level:3},{value:"gTool",id:"gtool",level:3},{value:"hoe",id:"hoe",level:3},{value:"none",id:"none",level:3},{value:"pickaxe",id:"pickaxe",level:3},{value:"shears",id:"shears",level:3},{value:"shield",id:"shield",level:3},{value:"shovel",id:"shovel",level:3},{value:"spear",id:"spear",level:3},{value:"sword",id:"sword",level:3}],s={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This enum represents the item slot or type that an\nenchantment can be applied to."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"all"},"all"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"all"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"armorfeet"},"armorFeet"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"armorFeet"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"armorhead"},"armorHead"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"armorHead"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"armorlegs"},"armorLegs"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"armorLegs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"armortorso"},"armorTorso"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"armorTorso"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"axe"},"axe"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"axe"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"512")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bow"},"bow"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"bow"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"carrotstick"},"carrotStick"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"carrotStick"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"8192")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cosmetichead"},"cosmeticHead"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"cosmeticHead"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"262144")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"crossbow"},"crossbow"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"crossbow"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"65536")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"elytra"},"elytra"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"elytra"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"16384")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fishingrod"},"fishingRod"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"fishingRod"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"4096")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flintsteel"},"flintsteel"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"flintsteel"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"256")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"garmor"},"gArmor"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"gArmor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gdigging"},"gDigging"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"gDigging"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"3648")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gtool"},"gTool"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"gTool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"131520")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hoe"},"hoe"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hoe"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"none"},"none"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"none"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pickaxe"},"pickaxe"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"pickaxe"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"1024")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shears"},"shears"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"shears"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"128")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shield"},"shield"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"shield"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"131072")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shovel"},"shovel"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"shovel"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"2048")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spear"},"spear"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"spear"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"32768")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sword"},"sword"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"sword"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"16")))}k.isMDXComponent=!0}}]);