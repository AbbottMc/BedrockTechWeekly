"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72677],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,c=m["".concat(s,".").concat(d)]||m[d]||y[d]||o;return n?a.createElement(c,l(l({ref:t},g),{},{components:n})):a.createElement(c,l({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={id:"Container",title:"Class: Container",sidebar_label:"Container",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/Container",id:"sapi/stable/server/classes/Container",title:"Class: Container",description:"Represents a container that can hold sets of items. Used",source:"@site/docs/sapi/stable/server/classes/Container.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/Container",permalink:"/en/docs/sapi/stable/server/classes/Container",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Container",title:"Class: Container",sidebar_label:"Container",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"CompoundBlockVolume",permalink:"/en/docs/sapi/stable/server/classes/CompoundBlockVolume"},next:{title:"ContainerSlot",permalink:"/en/docs/sapi/stable/server/classes/ContainerSlot"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"emptySlotsCount",id:"emptyslotscount",level:3},{value:"size",id:"size",level:3},{value:"Methods",id:"methods",level:2},{value:"addItem",id:"additem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"clearAll",id:"clearall",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getItem",id:"getitem",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getSlot",id:"getslot",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-4",level:4},{value:"moveItem",id:"moveitem",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"setItem",id:"setitem",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"swapItems",id:"swapitems",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"transferItem",id:"transferitem",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4}],g={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Represents a container that can hold sets of items. Used\nwith entities such as Players, Chest Minecarts, Llamas, and\nmore."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"containers.js"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location\nlet rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location\n\nconst chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });\n\nlet leftChestBlock = defaultDimension.getBlock(leftLocation);\nlet rightChestBlock = defaultDimension.getBlock(rightLocation);\n\nleftChestBlock.setType(MinecraftBlockTypes.chest);\nrightChestBlock.setType(MinecraftBlockTypes.chest);\n\nconst rightChestInventoryComp = rightChestBlock.getComponent("inventory");\nconst leftChestInventoryComp = leftChestBlock.getComponent("inventory");\nconst chestCartInventoryComp = chestCart.getComponent("inventory");\n\nconst rightChestContainer = rightChestInventoryComp.container;\nconst leftChestContainer = leftChestInventoryComp.container;\nconst chestCartContainer = chestCartInventoryComp.container;\n\nrightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));\ntest.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");\n\nrightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));\ntest.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");\n\ntest.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);\ntest.assert(\n  rightChestContainer.emptySlotsCount === 25,\n  "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount\n);\n\nconst itemStack = rightChestContainer.getItem(0);\ntest.assert(itemStack.id === "apple", "Expected apple");\ntest.assert(itemStack.amount === 10, "Expected 10 apples");\ntest.assert(itemStack.data === 0, "Expected 0 data");\n\nleftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));\n\nrightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart\nrightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald\n\ntest.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");\ntest.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");\ntest.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");\n\n')),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new Container"),"()"),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"emptyslotscount"},"emptySlotsCount"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"emptySlotsCount"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Count of the slots in the container that are empty."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"size"},"size"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"size"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The number of slots in this container. For example, a\nstandard single-block chest has a size of 27. Note, a\nplayer's inventory container contains a total of 36 slots, 9\nhotbar slots plus 27 inventory slots."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid."),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"additem"},"addItem"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"addItem"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"itemStack"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds an item to the container. The item is placed in the\nfirst available slot(s) and can be stacked with existing\nitems of the same type. Note, use ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Container#setitem"},"setItem"),"\nif you wish to set the item in a particular slot."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This function can throw errors."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"itemStack")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The stack of items to add.")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"clearall"},"clearAll"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"clearAll"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Clears all inventory items in the container."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getitem"},"getItem"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getItem"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"slot"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Gets an ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},"ItemStack")," of the item at the specified slot.\nIf the slot is empty, returns ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),". This method does\nnot change or clear the contents of the specified slot. To\nget a reference to a particular slot, see ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Container#getslot"},"getSlot"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid or if the ",(0,r.yg)("inlineCode",{parentName:"p"},"slot")," index is\nout of bounds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"getItem.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// A function that gets a copy of the first item in the player's hotbar\nimport { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';\n\nfunction getFirstHotbarItem(player: Player): ItemStack | undefined {\n    const inventory = player.getComponent(EntityInventoryComponent.componentId);\n    if (inventory && inventory.container) {\n        return inventory.container.getItem(0);\n    }\n    return undefined;\n}\n")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"slot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to retrieve items from.")))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getslot"},"getSlot"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getSlot"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"slot"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ContainerSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns a container slot. This acts as a reference to a slot\nat the given index for this container."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid or if the ",(0,r.yg)("inlineCode",{parentName:"p"},"slot")," index is\nout of bounds."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"slot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The index of the slot to return. This index must be within the bounds of the container.")))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ContainerSlot"},(0,r.yg)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"isvalid"},"isValid"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns whether a container object (or the entity or block\nthat this container is associated with) is still available\nfor use in this context."),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"moveitem"},"moveItem"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"moveItem"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"fromSlot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"toSlot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"toContainer"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Moves an item from one slot to another, potentially across\ncontainers."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if either this container or ",(0,r.yg)("inlineCode",{parentName:"p"},"toContainer")," are invalid\nor if the ",(0,r.yg)("inlineCode",{parentName:"p"},"fromSlot")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"toSlot")," indices out of bounds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"moveItem.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// A function that moves an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.moveItem(slotId, slotId, toInventory.container);\n    }\n}\n")),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"fromSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to transfer an item from, on this container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"toSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to transfer an item to, on ",(0,r.yg)("inlineCode",{parentName:"td"},"toContainer"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"toContainer")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/Container"},(0,r.yg)("inlineCode",{parentName:"a"},"Container"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target container to transfer to. Note this can be the same container as the source.")))),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setitem"},"setItem"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setItem"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"slot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"itemStack?"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Sets an item stack within a particular slot."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if the container is invalid or if the ",(0,r.yg)("inlineCode",{parentName:"p"},"slot")," index is\nout of bounds."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"slot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to set an item at.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"itemStack?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Stack of items to place within the specified slot. Setting ",(0,r.yg)("inlineCode",{parentName:"td"},"itemStack")," to undefined will clear the slot.")))),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"swapitems"},"swapItems"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"swapItems"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"slot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"otherSlot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"otherContainer"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Swaps items between two different slots within containers."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if either this container or ",(0,r.yg)("inlineCode",{parentName:"p"},"otherContainer")," are\ninvalid or if the ",(0,r.yg)("inlineCode",{parentName:"p"},"slot")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"otherSlot")," are out of bounds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"swapItems.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// A function that swaps an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.swapItems(slotId, slotId, toInventory.container);\n    }\n}\n")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"slot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to swap from this container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"otherSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to swap with.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"otherContainer")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/Container"},(0,r.yg)("inlineCode",{parentName:"a"},"Container"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target container to swap with. Note this can be the same container as this source.")))),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"transferitem"},"transferItem"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"transferItem"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"fromSlot"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"toContainer"),"): ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Moves an item from one slot to another container, or to the\nfirst available slot in the same container."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"Throws if either this container or ",(0,r.yg)("inlineCode",{parentName:"p"},"toContainer")," are invalid\nor if the ",(0,r.yg)("inlineCode",{parentName:"p"},"fromSlot")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"toSlot")," indices out of bounds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"transferItem.ts"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"// A function that moves an item from one slot of the player's inventory to another player's inventory\nimport { Player, EntityComponentTypes } from '@minecraft/server';\n\nfunction moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {\n    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);\n    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);\n\n    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {\n        fromInventory.container.transferItem(slotId, toInventory.container);\n    }\n}\n")),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"fromSlot")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to transfer an item from, on this container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"toContainer")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/Container"},(0,r.yg)("inlineCode",{parentName:"a"},"Container"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Target container to transfer to. Note this can be the same container as the source.")))),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,r.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,r.yg)("p",null,"An itemStack with the items that couldn't be transferred.\nReturns undefined if all items were transferred."))}y.isMDXComponent=!0}}]);