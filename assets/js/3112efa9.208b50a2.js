"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[25082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=k(n),d=l,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var a=n(87462),l=(n(67294),n(3905));const r={id:"EntityDamageCause",title:"Enumeration: EntityDamageCause",sidebar_label:"EntityDamageCause",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/enums/EntityDamageCause",id:"sapi/preview/server/enums/EntityDamageCause",title:"Enumeration: EntityDamageCause",description:"Describes the source of damage from an Entity.",source:"@site/docs/sapi/preview/server/enums/EntityDamageCause.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/EntityDamageCause",permalink:"/docs/sapi/preview/server/enums/EntityDamageCause",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityDamageCause",title:"Enumeration: EntityDamageCause",sidebar_label:"EntityDamageCause",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityComponentTypes",permalink:"/docs/sapi/preview/server/enums/EntityComponentTypes"},next:{title:"EntityInitializationCause",permalink:"/docs/sapi/preview/server/enums/EntityInitializationCause"}},p={},k=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"anvil",id:"anvil",level:3},{value:"blockExplosion",id:"blockexplosion",level:3},{value:"campfire",id:"campfire",level:3},{value:"charging",id:"charging",level:3},{value:"contact",id:"contact",level:3},{value:"drowning",id:"drowning",level:3},{value:"entityAttack",id:"entityattack",level:3},{value:"entityExplosion",id:"entityexplosion",level:3},{value:"fall",id:"fall",level:3},{value:"fallingBlock",id:"fallingblock",level:3},{value:"fire",id:"fire",level:3},{value:"fireTick",id:"firetick",level:3},{value:"fireworks",id:"fireworks",level:3},{value:"flyIntoWall",id:"flyintowall",level:3},{value:"freezing",id:"freezing",level:3},{value:"lava",id:"lava",level:3},{value:"lightning",id:"lightning",level:3},{value:"magic",id:"magic",level:3},{value:"magma",id:"magma",level:3},{value:"none",id:"none",level:3},{value:"override",id:"override",level:3},{value:"piston",id:"piston",level:3},{value:"projectile",id:"projectile",level:3},{value:"ramAttack",id:"ramattack",level:3},{value:"selfDestruct",id:"selfdestruct",level:3},{value:"sonicBoom",id:"sonicboom",level:3},{value:"soulCampfire",id:"soulcampfire",level:3},{value:"stalactite",id:"stalactite",level:3},{value:"stalagmite",id:"stalagmite",level:3},{value:"starve",id:"starve",level:3},{value:"suffocation",id:"suffocation",level:3},{value:"suicide",id:"suicide",level:3},{value:"temperature",id:"temperature",level:3},{value:"thorns",id:"thorns",level:3},{value:"void",id:"void",level:3},{value:"wither",id:"wither",level:3}],s={toc:k};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Describes the source of damage from an Entity."),(0,l.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,l.kt)("h3",{id:"anvil"},"anvil"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"anvil")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"anvil"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by a falling anvil."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"blockexplosion"},"blockExplosion"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"blockExplosion")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"blockExplosion"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused from a non-Entity explosion. For example, an\nexploding bed."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"campfire"},"campfire"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"campfire")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"campfire"')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"charging"},"charging"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"charging")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"charging"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Unused."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"contact"},"contact"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"contact")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"contact"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by physically touching an Entity or Block. For\nexample, touching a Sweet Berry bush or Pufferfish."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"drowning"},"drowning"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"drowning")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"drowning"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity being out of air and inside a\nliquid block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"entityattack"},"entityAttack"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"entityAttack")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"entityAttack"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity attack."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"entityexplosion"},"entityExplosion"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"entityExplosion")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"entityExplosion"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity explosion. For example, a Creeper\nor Wither."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fall"},"fall"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fall")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"fall"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by falling onto the ground."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fallingblock"},"fallingBlock"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fallingBlock")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"fallingBlock"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by falling blocks. Note: Anvils and\nStalactites have their own damage causes."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fire"},"fire"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fire")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"fire"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by catching on fire."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"firetick"},"fireTick"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fireTick")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"fireTick"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by burning over time."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fireworks"},"fireworks"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fireworks")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"fireworks"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by fireworks."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"flyintowall"},"flyIntoWall"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"flyIntoWall")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"flyIntoWall"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by flying into a wall at high speed while\ngliding with Elytra."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"freezing"},"freezing"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"freezing")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"freezing"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by staying inside a Powder Snow block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lava"},"lava"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lava")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"lava"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by touching a Lava block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lightning"},"lightning"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lightning")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"lightning"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by being struck by lightning."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"magic"},"magic"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"magic")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"magic"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by magical attacks. For example, Evoker Fang\nor Conduit Block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"magma"},"magma"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"magma")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"magma"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by touching a Magma block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"none"},"none"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"none")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"none"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by no source. For example, from a command or\nscript."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"override"},"override"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"override")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"override"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an indirect source. For example, setting a\nmob's health to 0 in a behavior pack."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"piston"},"piston"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"piston")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"piston"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by a Piston."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"projectile"},"projectile"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"projectile")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"projectile"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by a projectile."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ramattack"},"ramAttack"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"ramAttack")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"ramAttack"')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selfdestruct"},"selfDestruct"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"selfDestruct")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"selfDestruct"')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sonicboom"},"sonicBoom"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"sonicBoom")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"sonicBoom"')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"soulcampfire"},"soulCampfire"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"soulCampfire")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"soulCampfire"')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stalactite"},"stalactite"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stalactite")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"stalactite"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by a falling Stalactite block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stalagmite"},"stalagmite"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stalagmite")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"stalagmite"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by touching a Stalagmite block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"starve"},"starve"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"starve")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"starve"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused over time by having an empty hunger bar."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"suffocation"},"suffocation"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"suffocation")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"suffocation"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity being out of air and inside a\nnon-liquid block."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"suicide"},"suicide"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"suicide")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"suicide"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity killing itself. For example, from\nthe /kill command."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"temperature"},"temperature"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"temperature")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"temperature"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by an Entity being in an inhabitable climate.\nFor example, a Snow Golem in a biome with a temperature\ngreater than 1."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thorns"},"thorns"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"thorns")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"thorns"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by the Thorns armor enchantment and by the\nGuardian thorns effect."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"void"},"void"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"void")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"void"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused over time by falling into the void."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wither"},"wither"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"wither")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"wither"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"Damage caused by the Wither effect. For example, from\ntouching a Wither Rose."))}m.isMDXComponent=!0}}]);