"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(r),c=n,u=d["".concat(p,".").concat(c)]||d[c]||k[c]||l;return r?a.createElement(u,i(i({ref:t},m),{},{components:r})):a.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={id:"InventoryComponentContainer",title:"Class: InventoryComponentContainer",sidebar_label:"InventoryComponentContainer",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/InventoryComponentContainer",id:"sapi/preview/server/classes/InventoryComponentContainer",title:"Class: InventoryComponentContainer",description:"Represents a container that can hold stacks of items. Used",source:"@site/docs/sapi/preview/server/classes/InventoryComponentContainer.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/InventoryComponentContainer",permalink:"/docs/sapi/preview/server/classes/InventoryComponentContainer",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"InventoryComponentContainer",title:"Class: InventoryComponentContainer",sidebar_label:"InventoryComponentContainer",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"IntBlockProperty",permalink:"/docs/sapi/preview/server/classes/IntBlockProperty"},next:{title:"ItemCompleteChargeEvent",permalink:"/docs/sapi/preview/server/classes/ItemCompleteChargeEvent"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"emptySlotsCount",id:"emptyslotscount",level:3},{value:"Overrides",id:"overrides",level:4},{value:"size",id:"size",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Methods",id:"methods",level:2},{value:"addItem",id:"additem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"clearAll",id:"clearall",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"clearItem",id:"clearitem",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"getItem",id:"getitem",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"getSlot",id:"getslot",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"setItem",id:"setitem",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"swapItems",id:"swapitems",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"transferItem",id:"transferitem",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-9",level:4}],m={toc:o};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a container that can hold stacks of items. Used\nfor entities like players, chest minecarts, llamas, and\nmore."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},(0,n.kt)("inlineCode",{parentName:"a"},"Container"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"InventoryComponentContainer"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/PlayerInventoryComponentContainer"},(0,n.kt)("inlineCode",{parentName:"a"},"PlayerInventoryComponentContainer"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"emptyslotscount"},"emptySlotsCount"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"emptySlotsCount"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The number of empty slots in the container."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This property can throw when used."),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#emptyslotscount"},"emptySlotsCount")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"size"},"size"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"size"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Represents the size of the container. For example, a\nstandard single-block chest has a size of 27, for the 27\nslots in their inventory."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This property can throw when used."),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#size"},"size")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"additem"},"addItem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addItem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"itemStack"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds an item to the specified container. Items will be\nplaced in the first available empty slot. (Use ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/InventoryComponentContainer#setitem"},"setItem")," if you wish to set\nitems in a particular slot.)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"itemStack")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stack of items to add.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#additem"},"addItem")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clearall"},"clearAll"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clearAll"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Empties all items in this entities' inventory."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-3"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#clearall"},"clearAll")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clearitem"},"clearItem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clearItem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Clears out a specific item at the specified slot index."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"slot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-4"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#clearitem"},"clearItem")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getitem"},"getItem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getItem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Gets the item stack for the set of items at the specified\nslot. If the slot is empty, returns undefined. This method\ndoes not change or clear the contents of the specified slot."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"getItem.js"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'       const itemStack = rightChestContainer.getItem(0);\n       test.assert(itemStack.id === "apple", "Expected apple");\n       test.assert(itemStack.amount === 10, "Expected 10 apples");\n')),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"slot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to retrieve items from.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,n.kt)("h4",{id:"overrides-5"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#getitem"},"getItem")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getslot"},"getSlot"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getSlot"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ContainerSlot"},(0,n.kt)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns a slot object for specifically managing a slot\nwithin a broader inventory."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"slot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ContainerSlot"},(0,n.kt)("inlineCode",{parentName:"a"},"ContainerSlot"))),(0,n.kt)("h4",{id:"overrides-6"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#getslot"},"getSlot")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setitem"},"setItem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setItem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"itemStack?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets an item stack within a particular slot."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"slot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to set an item at.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"itemStack?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,n.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Stack of items to place within the specified slot.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-7"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#setitem"},"setItem")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"swapitems"},"swapItems"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"swapItems"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"otherSlot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"otherContainer"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Swaps items between two different slots within containers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"swapItems.js"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"       rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald\n\n")),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"slot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to swap from this container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"otherSlot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to swap with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"otherContainer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/Container"},(0,n.kt)("inlineCode",{parentName:"a"},"Container"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Target container to swap with. Note this can be the same container as this source.")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"overrides-8"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#swapitems"},"swapItems")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transferitem"},"transferItem"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"transferItem"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"fromSlot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toSlot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toContainer"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Moves an item from one slot to another, potentially across\ncontainers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"transferItem.js"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"       rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart\n\n")),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fromSlot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"toSlot")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zero-based index of the slot to move to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"toContainer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/Container"},(0,n.kt)("inlineCode",{parentName:"a"},"Container"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Target container to transfer to. Note this can be the same container as the source.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"overrides-9"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container"},"Container"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Container#transferitem"},"transferItem")))}d.isMDXComponent=!0}}]);