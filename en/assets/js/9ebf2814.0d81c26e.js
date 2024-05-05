"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11248],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=s(n),u=r,d=y["".concat(o,".").concat(u)]||y[u]||g[u]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[y]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={id:"EntityEquippableComponent",title:"Class: EntityEquippableComponent",sidebar_label:"EntityEquippableComponent",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"sapi/stable/server/classes/EntityEquippableComponent",id:"sapi/stable/server/classes/EntityEquippableComponent",title:"Class: EntityEquippableComponent",description:"Provides access to a mob's equipment slots. This component",source:"@site/docs/sapi/stable/server/classes/EntityEquippableComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityEquippableComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityEquippableComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityEquippableComponent",title:"Class: EntityEquippableComponent",sidebar_label:"EntityEquippableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityDieAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/EntityDieAfterEventSignal"},next:{title:"EntityFireImmuneComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityFireImmuneComponent"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getEquipment",id:"getequipment",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getEquipmentSlot",id:"getequipmentslot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"setEquipment",id:"setequipment",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}],m={toc:s},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Provides access to a mob's equipment slots. This component\nexists for all mob entities."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"givePlayerElytra.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// Gives the player Elytra\nimport { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';\nimport { MinecraftItemTypes } from '@minecraft/vanilla-data';\n\nfunction giveEquipment(player: Player) {\n    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);\n    if (equipmentCompPlayer) {\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));\n    }\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"givePlayerEquipment.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// Gives the player some equipment\nimport { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';\nimport { MinecraftItemTypes } from '@minecraft/vanilla-data';\n\nfunction giveEquipment(player: Player) {\n    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);\n    if (equipmentCompPlayer) {\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));\n    } else {\n        console.warn('No equipment component found on player');\n    }\n}\n")),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"EntityEquippableComponent"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new EntityEquippableComponent"),"()"),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"entity"},"entity"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"entity"),": ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"typeid"},"typeId"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"typeId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Identifier of the component."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"componentid"},"componentId"),(0,r.yg)("p",null,"\u25aa ",(0,r.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"componentId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},'"minecraft:equippable"')),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"getequipment"},"getEquipment"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getEquipment"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"equipmentSlot"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Gets the equipped item for the given EquipmentSlot."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"equipmentSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/EquipmentSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"EquipmentSlot"))),(0,r.yg)("td",{parentName:"tr",align:"left"},'The equipment slot. e.g. "head", "chest", "offhand"')))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,"Returns the item equipped to the given EquipmentSlot. If\nempty, returns undefined."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getequipmentslot"},"getEquipmentSlot"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getEquipmentSlot"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"equipmentSlot"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ContainerSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Gets the ContainerSlot corresponding to the given\nEquipmentSlot."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"equipmentSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/EquipmentSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"EquipmentSlot"))),(0,r.yg)("td",{parentName:"tr",align:"left"},'The equipment slot. e.g. "head", "chest", "offhand".')))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ContainerSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,r.yg)("p",null,"Returns the ContainerSlot corresponding to the given\nEquipmentSlot."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"isvalid"},"isValid"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Whether the component is valid."),(0,r.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setequipment"},"setEquipment"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setEquipment"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"equipmentSlot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"itemStack?"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Replaces the item in the given EquipmentSlot."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"equipmentSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/EquipmentSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"EquipmentSlot"))),(0,r.yg)("td",{parentName:"tr",align:"left"},'The equipment slot. e.g. "head", "chest", "offhand".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"itemStack?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The item to equip. If undefined, clears the slot.")))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")))}g.isMDXComponent=!0}}]);