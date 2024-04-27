"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97999],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={id:"MinecraftDimensionTypes",title:"Class: MinecraftDimensionTypes",sidebar_label:"MinecraftDimensionTypes",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/stable/server/classes/MinecraftDimensionTypes",id:"sapi/stable/server/classes/MinecraftDimensionTypes",title:"Class: MinecraftDimensionTypes",description:"DEPRECATED",source:"@site/docs/sapi/stable/server/classes/MinecraftDimensionTypes.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/MinecraftDimensionTypes",permalink:"/en/docs/sapi/stable/server/classes/MinecraftDimensionTypes",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MinecraftDimensionTypes",title:"Class: MinecraftDimensionTypes",sidebar_label:"MinecraftDimensionTypes",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"MessageReceiveAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/MessageReceiveAfterEvent"},next:{title:"MolangVariableMap",permalink:"/en/docs/sapi/stable/server/classes/MolangVariableMap"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"nether",id:"nether",level:3},{value:"overworld",id:"overworld",level:3},{value:"theEnd",id:"theend",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DEPRECATED\nUse @minecraft/vanilla-data.MinecraftDimensionTypes\nA collection of default Minecraft dimension types."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new MinecraftDimensionTypes"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"nether"},"nether"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"nether"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:nether"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The Nether is a collection of biomes separate from the\nOverworld, including Soul Sand Valleys and Crimson forests.\nNether fortresses contain exclusive resources. Mobs such as\nBlaze, Hoglins, Piglins, and Ghasts congregate here."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overworld"},"overworld"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"overworld"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:overworld"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The overworld is a collection of biomes, including forests,\nplains, jungles, mountains, deserts, taiga, and more. This\nis the default starter dimension for Minecraft. Mobs such as\nAxolotl, Cows, Creepers, and Zombies congregate here."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"theend"},"theEnd"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"theEnd"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:the_end"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The End is separate from the Overworld and the Nether and is\ngenerated whenever you create an End portal. Here, a giant\ncenter island is surrounded by several smaller areas and\nislands. You can find Endermen here. End midlands are larger\nareas that transition you from the center to the outer edges\nof the End. They contain Shulkers, Endermen, End gateway\nportals, and End cities. End gateway portals are commonly\nfound at the outermost edge of the void. You usually find\nEnd barrens toward the edges of the main areas or land in\nthe End."))}d.isMDXComponent=!0}}]);