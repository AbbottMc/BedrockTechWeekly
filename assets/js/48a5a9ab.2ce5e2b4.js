"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92570],{31979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const i={id:"Container",title:"Class: Container",sidebar_label:"Container",sidebar_position:0,custom_edit_url:null},l=void 0,o={id:"sapi/preview/server/classes/Container",title:"Class: Container",description:"Represents a container that can hold sets of items. Used",source:"@site/docs/sapi/preview/server/classes/Container.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Container",permalink:"/docs/sapi/preview/server/classes/Container",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Container",title:"Class: Container",sidebar_label:"Container",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"CompoundBlockVolume",permalink:"/docs/sapi/preview/server/classes/CompoundBlockVolume"},next:{title:"ContainerSlot",permalink:"/docs/sapi/preview/server/classes/ContainerSlot"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"emptySlotsCount",id:"emptyslotscount",level:3},{value:"size",id:"size",level:3},{value:"Methods",id:"methods",level:2},{value:"addItem",id:"additem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"clearAll",id:"clearall",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getItem",id:"getitem",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getSlot",id:"getslot",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-5",level:4},{value:"moveItem",id:"moveitem",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"setItem",id:"setitem",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"swapItems",id:"swapitems",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"transferItem",id:"transferitem",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Represents a container that can hold sets of items. Used\nwith entities such as Players, Chest Minecarts, Llamas, and\nmore."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location\nlet rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location\n\nconst chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });\n\nlet leftChestBlock = defaultDimension.getBlock(leftLocation);\nlet rightChestBlock = defaultDimension.getBlock(rightLocation);\n\nleftChestBlock.setType(MinecraftBlockTypes.chest);\nrightChestBlock.setType(MinecraftBlockTypes.chest);\n\nconst rightChestInventoryComp = rightChestBlock.getComponent("inventory");\nconst leftChestInventoryComp = leftChestBlock.getComponent("inventory");\nconst chestCartInventoryComp = chestCart.getComponent("inventory");\n\nconst rightChestContainer = rightChestInventoryComp.container;\nconst leftChestContainer = leftChestInventoryComp.container;\nconst chestCartContainer = chestCartInventoryComp.container;\n\nrightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));\ntest.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");\n\nrightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));\ntest.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");\n\ntest.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);\ntest.assert(\n  rightChestContainer.emptySlotsCount === 25,\n  "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount\n);\n\nconst itemStack = rightChestContainer.getItem(0);\ntest.assert(itemStack.id === "apple", "Expected apple");\ntest.assert(itemStack.amount === 10, "Expected 10 apples");\ntest.assert(itemStack.data === 0, "Expected 0 data");\n\nleftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));\n\nrightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart\nrightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald\n\ntest.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");\ntest.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");\ntest.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new Container"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container",children:(0,s.jsx)(n.code,{children:"Container"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container",children:(0,s.jsx)(n.code,{children:"Container"})})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"emptyslotscount",children:"emptySlotsCount"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"emptySlotsCount"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Count of the slots in the container that are empty."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"Throws if the container is invalid."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"size",children:"size"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"size"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"The number of slots in this container. For example, a\nstandard single-block chest has a size of 27. Note, a\nplayer's inventory container contains a total of 36 slots, 9\nhotbar slots plus 27 inventory slots."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"Throws if the container is invalid."}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"additem",children:"addItem"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"addItem"}),"(",(0,s.jsx)(n.code,{children:"itemStack"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"itemStack"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The stack of items to add."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsxs)(n.p,{children:["Adds an item to the container. The item is placed in the\nfirst available slot(s) and can be stacked with existing\nitems of the same type. Note, use ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container#setitem",children:"Container.setItem"}),"\nif you wish to set the item in a particular slot."]}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"clearall",children:"clearAll"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"clearAll"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Clears all inventory items in the container."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"Throws if the container is invalid."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getitem",children:"getItem"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getItem"}),"(",(0,s.jsx)(n.code,{children:"slot"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"slot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to retrieve items from."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsxs)(n.p,{children:["Gets an ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:"ItemStack"})," of the item at the specified slot.\nIf the slot is empty, returns ",(0,s.jsx)(n.code,{children:"undefined"}),". This method does\nnot change or clear the contents of the specified slot. To\nget a reference to a particular slot, see ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container#getslot",children:"Container.getSlot"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if the container is invalid or if the ",(0,s.jsx)(n.code,{children:"slot"})," index is\nout of bounds."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// A function that gets a copy of the first item in the player's hotbar\nimport { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';\n\nfunction getFirstHotbarItem(player: Player): ItemStack | undefined {\n    const inventory = player.getComponent(EntityInventoryComponent.componentId);\n    if (inventory && inventory.container) {\n        return inventory.container.getItem(0);\n    }\n    return undefined;\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getslot",children:"getSlot"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getSlot"}),"(",(0,s.jsx)(n.code,{children:"slot"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ContainerSlot",children:(0,s.jsx)(n.code,{children:"ContainerSlot"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"slot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The index of the slot to return. This index must be within the bounds of the container."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ContainerSlot",children:(0,s.jsx)(n.code,{children:"ContainerSlot"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns a container slot. This acts as a reference to a slot\nat the given index for this container."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if the container is invalid or if the ",(0,s.jsx)(n.code,{children:"slot"})," index is\nout of bounds."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"isValid"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns whether a container object (or the entity or block\nthat this container is associated with) is still available\nfor use in this context."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"moveitem",children:"moveItem"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"moveItem"}),"(",(0,s.jsx)(n.code,{children:"fromSlot"}),", ",(0,s.jsx)(n.code,{children:"toSlot"}),", ",(0,s.jsx)(n.code,{children:"toContainer"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"fromSlot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to transfer an item from, on this container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"toSlot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Zero-based index of the slot to transfer an item to, on ",(0,s.jsx)(n.code,{children:"toContainer"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"toContainer"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container",children:(0,s.jsx)(n.code,{children:"Container"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Target container to transfer to. Note this can be the same container as the source."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Moves an item from one slot to another, potentially across\ncontainers."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if either this container or ",(0,s.jsx)(n.code,{children:"toContainer"})," are invalid\nor if the ",(0,s.jsx)(n.code,{children:"fromSlot"})," or ",(0,s.jsx)(n.code,{children:"toSlot"})," indices out of bounds."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// A function that moves an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.moveItem(slotId, slotId, toInventory.container);\n    }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"setitem",children:"setItem"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"setItem"}),"(",(0,s.jsx)(n.code,{children:"slot"}),", ",(0,s.jsx)(n.code,{children:"itemStack?"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"slot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to set an item at."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"itemStack?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Stack of items to place within the specified slot. Setting ",(0,s.jsx)(n.code,{children:"itemStack"})," to undefined will clear the slot."]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Sets an item stack within a particular slot."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if the container is invalid or if the ",(0,s.jsx)(n.code,{children:"slot"})," index is\nout of bounds."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"swapitems",children:"swapItems"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"swapItems"}),"(",(0,s.jsx)(n.code,{children:"slot"}),", ",(0,s.jsx)(n.code,{children:"otherSlot"}),", ",(0,s.jsx)(n.code,{children:"otherContainer"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"slot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to swap from this container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"otherSlot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to swap with."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"otherContainer"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container",children:(0,s.jsx)(n.code,{children:"Container"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Target container to swap with. Note this can be the same container as this source."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Swaps items between two different slots within containers."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if either this container or ",(0,s.jsx)(n.code,{children:"otherContainer"})," are\ninvalid or if the ",(0,s.jsx)(n.code,{children:"slot"})," or ",(0,s.jsx)(n.code,{children:"otherSlot"})," are out of bounds."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// A function that swaps an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.swapItems(slotId, slotId, toInventory.container);\n    }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transferitem",children:"transferItem"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"transferItem"}),"(",(0,s.jsx)(n.code,{children:"fromSlot"}),", ",(0,s.jsx)(n.code,{children:"toContainer"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"fromSlot"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Zero-based index of the slot to transfer an item from, on this container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"toContainer"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Container",children:(0,s.jsx)(n.code,{children:"Container"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Target container to transfer to. Note this can be the same container as the source."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,s.jsx)(n.p,{children:"An itemStack with the items that couldn't be transferred.\nReturns undefined if all items were transferred."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Moves an item from one slot to another container, or to the\nfirst available slot in the same container."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsxs)(n.p,{children:["Throws if either this container or ",(0,s.jsx)(n.code,{children:"toContainer"})," are invalid\nor if the ",(0,s.jsx)(n.code,{children:"fromSlot"})," or ",(0,s.jsx)(n.code,{children:"toSlot"})," indices out of bounds."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// A function that moves an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.transferItem(slotId, toInventory.container);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);