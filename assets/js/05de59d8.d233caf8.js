"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74385],{76833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453);const i={id:"ItemEnchantableComponent",title:"Class: ItemEnchantableComponent",sidebar_label:"ItemEnchantableComponent",sidebar_position:0,custom_edit_url:null},c=void 0,d={id:"sapi/preview/server/classes/ItemEnchantableComponent",title:"Class: ItemEnchantableComponent",description:"When present on an item, this item can have enchantments",source:"@site/docs/sapi/preview/server/classes/ItemEnchantableComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemEnchantableComponent",permalink:"/docs/sapi/preview/server/classes/ItemEnchantableComponent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemEnchantableComponent",title:"Class: ItemEnchantableComponent",sidebar_label:"ItemEnchantableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemDurabilityComponent",permalink:"/docs/sapi/preview/server/classes/ItemDurabilityComponent"},next:{title:"ItemFoodComponent",permalink:"/docs/sapi/preview/server/classes/ItemFoodComponent"}},l={},h=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"slots",id:"slots",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"addEnchantment",id:"addenchantment",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"addEnchantments",id:"addenchantments",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"canAddEnchantment",id:"canaddenchantment",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getEnchantment",id:"getenchantment",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getEnchantments",id:"getenchantments",level:3},{value:"Returns",id:"returns-5",level:4},{value:"hasEnchantment",id:"hasenchantment",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"removeAllEnchantments",id:"removeallenchantments",level:3},{value:"Returns",id:"returns-8",level:4},{value:"removeEnchantment",id:"removeenchantment",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"When present on an item, this item can have enchantments\napplied to it."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Example"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Spawns a bunch of item stacks\nimport { EnchantmentType, ItemComponentTypes, ItemStack, Player } from '@minecraft/server';\nimport { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';\n\nfunction giveFireSword(player: Player) {\n    const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);\n\n    const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);\n    if (enchantments) {\n        enchantments.addEnchantment({ type: new EnchantmentType(MinecraftEnchantmentTypes.FireAspect), level: 1 });\n    }\n\n    const inventory = player.getComponent('minecraft:inventory');\n    if (inventory === undefined || inventory.container === undefined) {\n        return;\n    }\n    inventory.container.setItem(0, ironFireSword);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent",children:(0,r.jsx)(n.code,{children:"ItemComponent"})})}),"\n",(0,r.jsxs)(n.p,{children:["\u21b3 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ItemEnchantableComponent"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"new ItemEnchantableComponent"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemEnchantableComponent",children:(0,r.jsx)(n.code,{children:"ItemEnchantableComponent"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemEnchantableComponent",children:(0,r.jsx)(n.code,{children:"ItemEnchantableComponent"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent#constructor",children:"constructor"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"slots",children:"slots"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"slots"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/enums/EnchantmentSlot",children:(0,r.jsx)(n.code,{children:"EnchantmentSlot"})}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent#typeid",children:"typeId"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,r.jsxs)(n.p,{children:["\u25aa ",(0,r.jsx)(n.code,{children:"Static"})," ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"componentId"}),": ",(0,r.jsx)(n.code,{children:'"minecraft:enchantable"'})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"addenchantment",children:"addEnchantment"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"addEnchantment"}),"(",(0,r.jsx)(n.code,{children:"enchantment"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantment"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The enchantment interface to be added."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Adds an enchantment to the item stack."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if the\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown\nif the enchantment level is outside the allowable range for\nthe given enchantment type."}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentTypeNotCompatibleError: Exception\nthrown if the enchantment is not compatible with the item\nstack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentLevelOutOfBoundsError",children:"EnchantmentLevelOutOfBoundsError"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeNotCompatibleError",children:"EnchantmentTypeNotCompatibleError"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"addenchantments",children:"addEnchantments"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"addEnchantments"}),"(",(0,r.jsx)(n.code,{children:"enchantments"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantments"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})}),"[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The list of enchantments to be added."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Adds a list of enchantments to the item stack."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if any\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown\nif any enchantment level is outside the allowable range for\nthe given enchantment type."}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentTypeNotCompatibleError: Exception\nthrown if any enchantment is not compatible with the item\nstack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentLevelOutOfBoundsError",children:"EnchantmentLevelOutOfBoundsError"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeNotCompatibleError",children:"EnchantmentTypeNotCompatibleError"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"canaddenchantment",children:"canAddEnchantment"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"canAddEnchantment"}),"(",(0,r.jsx)(n.code,{children:"enchantment"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantment"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The enchantment interface to be added."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the enchantment can be added to the item\nstack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Checks whether an enchantment can be added to the item\nstack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if the\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown\nif the enchantment level is outside the allowable range for\nthe given enchantment type."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentLevelOutOfBoundsError",children:"EnchantmentLevelOutOfBoundsError"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getenchantment",children:"getEnchantment"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getEnchantment"}),"(",(0,r.jsx)(n.code,{children:"enchantmentType"}),"): ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantmentType"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentType",children:(0,r.jsx)(n.code,{children:"EnchantmentType"})})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The enchantment type to get."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the enchantment if it exists on the item stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Gets the enchantment of a given type from the item stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if the\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getenchantments",children:"getEnchantments"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getEnchantments"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/Enchantment",children:(0,r.jsx)(n.code,{children:"Enchantment"})}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"Returns a list of enchantments on the item stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Gets all enchantments on the item stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hasenchantment",children:"hasEnchantment"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"hasEnchantment"}),"(",(0,r.jsx)(n.code,{children:"enchantmentType"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantmentType"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentType",children:(0,r.jsx)(n.code,{children:"EnchantmentType"})})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The enchantment type to check for."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the item stack has the enchantment type."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Checks whether an item stack has a given enchantment type."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if the\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemComponent#isvalid",children:"isValid"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"removeallenchantments",children:"removeAllEnchantments"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"removeAllEnchantments"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Removes all enchantments applied to this item stack."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"removeenchantment",children:"removeEnchantment"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"removeEnchantment"}),"(",(0,r.jsx)(n.code,{children:"enchantmentType"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enchantmentType"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentType",children:(0,r.jsx)(n.code,{children:"EnchantmentType"})})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The enchantment type to remove."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Removes an enchantment of the given type."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"ScriptItemEnchantmentUnknownIdError: Exception thrown if the\nenchantment type does not exist."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/EnchantmentTypeUnknownIdError",children:"EnchantmentTypeUnknownIdError"})}),"\n",(0,r.jsx)(n.p,{children:"Error"})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);