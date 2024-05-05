"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2447],{31086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(74848),s=t(28453);const r={id:"EntityEquippableComponent",title:"Class: EntityEquippableComponent",sidebar_label:"EntityEquippableComponent",sidebar_position:0,custom_edit_url:null},l=void 0,d={id:"sapi/preview/server/classes/EntityEquippableComponent",title:"Class: EntityEquippableComponent",description:"Provides access to a mob's equipment slots. This component",source:"@site/docs/sapi/preview/server/classes/EntityEquippableComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityEquippableComponent",permalink:"/docs/sapi/preview/server/classes/EntityEquippableComponent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityEquippableComponent",title:"Class: EntityEquippableComponent",sidebar_label:"EntityEquippableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityDieAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/EntityDieAfterEventSignal"},next:{title:"EntityFireImmuneComponent",permalink:"/docs/sapi/preview/server/classes/EntityFireImmuneComponent"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getEquipment",id:"getequipment",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getEquipmentSlot",id:"getequipmentslot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"setEquipment",id:"setequipment",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Provides access to a mob's equipment slots. This component\nexists for all mob entities."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Example"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Gives the player Elytra\nimport { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';\nimport { MinecraftItemTypes } from '@minecraft/vanilla-data';\n\nfunction giveEquipment(player: Player) {\n    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);\n    if (equipmentCompPlayer) {\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Example"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Gives the player some equipment\nimport { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';\nimport { MinecraftItemTypes } from '@minecraft/vanilla-data';\n\nfunction giveEquipment(player: Player) {\n    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);\n    if (equipmentCompPlayer) {\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));\n        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));\n    } else {\n        console.warn('No equipment component found on player');\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent",children:(0,i.jsx)(n.code,{children:"EntityComponent"})})}),"\n",(0,i.jsxs)(n.p,{children:["\u21b3 ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"EntityEquippableComponent"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"new EntityEquippableComponent"}),"(): ",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityEquippableComponent",children:(0,i.jsx)(n.code,{children:"EntityEquippableComponent"})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityEquippableComponent",children:(0,i.jsx)(n.code,{children:"EntityEquippableComponent"})})}),"\n",(0,i.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent#constructor",children:"constructor"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.code,{children:"Readonly"})," ",(0,i.jsx)(n.strong,{children:"entity"}),": ",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Entity",children:(0,i.jsx)(n.code,{children:"Entity"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent#entity",children:"entity"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.code,{children:"Readonly"})," ",(0,i.jsx)(n.strong,{children:"typeId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent#typeid",children:"typeId"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,i.jsxs)(n.p,{children:["\u25aa ",(0,i.jsx)(n.code,{children:"Static"})," ",(0,i.jsx)(n.code,{children:"Readonly"})," ",(0,i.jsx)(n.strong,{children:"componentId"}),": ",(0,i.jsx)(n.code,{children:'"minecraft:equippable"'})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"getequipment",children:"getEquipment"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getEquipment"}),"(",(0,i.jsx)(n.code,{children:"equipmentSlot"}),"): ",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,i.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"equipmentSlot"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/enums/EquipmentSlot",children:(0,i.jsx)(n.code,{children:"EquipmentSlot"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:'The equipment slot. e.g. "head", "chest", "offhand"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,i.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,i.jsx)(n.p,{children:"Returns the item equipped to the given EquipmentSlot. If\nempty, returns undefined."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"Gets the equipped item for the given EquipmentSlot."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Throws"})})}),"\n",(0,i.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getequipmentslot",children:"getEquipmentSlot"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"getEquipmentSlot"}),"(",(0,i.jsx)(n.code,{children:"equipmentSlot"}),"): ",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ContainerSlot",children:(0,i.jsx)(n.code,{children:"ContainerSlot"})})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"equipmentSlot"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/enums/EquipmentSlot",children:(0,i.jsx)(n.code,{children:"EquipmentSlot"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:'The equipment slot. e.g. "head", "chest", "offhand".'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ContainerSlot",children:(0,i.jsx)(n.code,{children:"ContainerSlot"})})}),"\n",(0,i.jsx)(n.p,{children:"Returns the ContainerSlot corresponding to the given\nEquipmentSlot."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"Gets the ContainerSlot corresponding to the given\nEquipmentSlot."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Throws"})})}),"\n",(0,i.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"isValid"}),"(): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EntityComponent#isvalid",children:"isValid"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"setequipment",children:"setEquipment"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"setEquipment"}),"(",(0,i.jsx)(n.code,{children:"equipmentSlot"}),", ",(0,i.jsx)(n.code,{children:"itemStack?"}),"): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"equipmentSlot"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/enums/EquipmentSlot",children:(0,i.jsx)(n.code,{children:"EquipmentSlot"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:'The equipment slot. e.g. "head", "chest", "offhand".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"itemStack?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,i.jsx)(n.code,{children:"ItemStack"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The item to equip. If undefined, clears the slot."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,i.jsx)(n.p,{children:"Replaces the item in the given EquipmentSlot."}),"\n",(0,i.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Throws"})})}),"\n",(0,i.jsx)(n.p,{children:"This function can throw errors."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);