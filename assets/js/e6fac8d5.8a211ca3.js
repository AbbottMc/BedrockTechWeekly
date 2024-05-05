"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32229],{42388:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var r=s(74848),i=s(28453);const t={id:"ContainerSlot",title:"Class: ContainerSlot",sidebar_label:"ContainerSlot",sidebar_position:0,custom_edit_url:null},l=void 0,d={id:"sapi/stable/server/classes/ContainerSlot",title:"Class: ContainerSlot",description:"Represents a slot within a broader container (e.g., entity",source:"@site/docs/sapi/stable/server/classes/ContainerSlot.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ContainerSlot",permalink:"/docs/sapi/stable/server/classes/ContainerSlot",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ContainerSlot",title:"Class: ContainerSlot",sidebar_label:"ContainerSlot",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Container",permalink:"/docs/sapi/stable/server/classes/Container"},next:{title:"DataDrivenEntityTriggerAfterEvent",permalink:"/docs/sapi/stable/server/classes/DataDrivenEntityTriggerAfterEvent"}},c={},h=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"isStackable",id:"isstackable",level:3},{value:"keepOnDeath",id:"keepondeath",level:3},{value:"lockMode",id:"lockmode",level:3},{value:"maxAmount",id:"maxamount",level:3},{value:"nameTag",id:"nametag",level:3},{value:"type",id:"type",level:3},{value:"typeId",id:"typeid",level:3},{value:"Methods",id:"methods",level:2},{value:"clearDynamicProperties",id:"cleardynamicproperties",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getCanDestroy",id:"getcandestroy",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getCanPlaceOn",id:"getcanplaceon",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getDynamicProperty",id:"getdynamicproperty",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getDynamicPropertyIds",id:"getdynamicpropertyids",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getDynamicPropertyTotalByteCount",id:"getdynamicpropertytotalbytecount",level:3},{value:"Returns",id:"returns-6",level:4},{value:"getItem",id:"getitem",level:3},{value:"Returns",id:"returns-7",level:4},{value:"getLore",id:"getlore",level:3},{value:"Returns",id:"returns-8",level:4},{value:"getTags",id:"gettags",level:3},{value:"Returns",id:"returns-9",level:4},{value:"hasItem",id:"hasitem",level:3},{value:"Returns",id:"returns-10",level:4},{value:"hasTag",id:"hastag",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-11",level:4},{value:"isStackableWith",id:"isstackablewith",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-12",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-13",level:4},{value:"setCanDestroy",id:"setcandestroy",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-14",level:4},{value:"setCanPlaceOn",id:"setcanplaceon",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-15",level:4},{value:"setDynamicProperty",id:"setdynamicproperty",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-16",level:4},{value:"setItem",id:"setitem",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-17",level:4},{value:"setLore",id:"setlore",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-18",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Represents a slot within a broader container (e.g., entity\ninventory.)"}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"new ContainerSlot"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ContainerSlot",children:(0,r.jsx)(n.code,{children:"ContainerSlot"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ContainerSlot",children:(0,r.jsx)(n.code,{children:"ContainerSlot"})})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"amount",children:"amount"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"amount"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Number of the items in the stack. Valid values range between\n1-255. The provided value will be clamped to the item's\nmaximum stack size."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the value is outside the range of 1-255."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isstackable",children:"isStackable"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"isStackable"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the item is stackable. An item is considered\nstackable if the item's maximum stack size is greater than 1\nand the item does not contain any custom data or properties."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"keepondeath",children:"keepOnDeath"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"keepOnDeath"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Gets or sets whether the item is kept on death."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"lockmode",children:"lockMode"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"lockMode"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/enums/ItemLockMode",children:(0,r.jsx)(n.code,{children:"ItemLockMode"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsxs)(n.p,{children:["Gets or sets the item's lock mode. The default value is\n",(0,r.jsx)(n.code,{children:"ItemLockMode.none"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"maxamount",children:"maxAmount"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"maxAmount"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The maximum stack size. This value varies depending on the\ntype of item. For example, torches have a maximum stack size\nof 64, while eggs have a maximum stack size of 16."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"nametag",children:"nameTag"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Optional"})," ",(0,r.jsx)(n.strong,{children:"nameTag"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsxs)(n.p,{children:["Given name of this stack of items. The name tag is displayed\nwhen hovering over the item. Setting the name tag to an\nempty string or ",(0,r.jsx)(n.code,{children:"undefined"})," will remove the name tag."]}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid. Also throws if\nthe length exceeds 255 characters."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ItemType",children:(0,r.jsx)(n.code,{children:"ItemType"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The type of the item."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:"minecraftcommon.EngineError"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the type of items for the stack. If a\nnamespace is not specified, 'minecraft:' is assumed.\nExamples include 'wheat' or 'apple'."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"cleardynamicproperties",children:"clearDynamicProperties"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"clearDynamicProperties"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Clears all dynamic properties that have been set on this\nitem stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getcandestroy",children:"getCanDestroy"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getCanDestroy"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getcanplaceon",children:"getCanPlaceOn"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getCanPlaceOn"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdynamicproperty",children:"getDynamicProperty"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getDynamicProperty"}),"(",(0,r.jsx)(n.code,{children:"identifier"}),"): ",(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"identifier"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The property identifier."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,r.jsx)(n.p,{children:"Returns the value for the property, or undefined if the\nproperty has not been set."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns a property value."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdynamicpropertyids",children:"getDynamicPropertyIds"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getDynamicPropertyIds"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"A string array of the dynamic properties set on this entity."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the available set of dynamic property identifiers\nthat have been used on this item stack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getdynamicpropertytotalbytecount",children:"getDynamicPropertyTotalByteCount"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getDynamicPropertyTotalByteCount"}),"(): ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the total size, in bytes, of all the dynamic\nproperties that are currently stored for this entity. This\nincludes the size of both the key and the value.  This can\nbe useful for diagnosing performance warning signs - if, for\nexample, an entity has many megabytes of associated dynamic\nproperties, it may be slow to load on various devices."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getitem",children:"getItem"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getItem"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns a copy of the item in the slot. Returns undefined if\nthe slot is empty."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Creates an exact copy of the item stack, including any\ncustom data or properties."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getlore",children:"getLore"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getLore"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"An array of lore strings. If the item does not have lore,\nreturns an empty array."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the lore value - a secondary display string - for an\nItemStack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"gettags",children:"getTags"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"getTags"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"Returns all tags for the item in the slot. Return an empty\narray if the the slot is empty."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns all tags for the item in the slot."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hasitem",children:"hasItem"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"hasItem"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hastag",children:"hasTag"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"hasTag"}),"(",(0,r.jsx)(n.code,{children:"tag"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"tag"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The item tag."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Returns false when the slot is empty or the item in the slot\ndoes not have the given tag."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the item in the slot slot has the given tag."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isstackablewith",children:"isStackableWith"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"isStackableWith"}),"(",(0,r.jsx)(n.code,{children:"itemStack"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"itemStack"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(n.code,{children:"ItemStack"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The ItemStack that is being compared."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns whether this item stack can be stacked with the\ngiven ",(0,r.jsx)(n.code,{children:"itemStack"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsxs)(n.p,{children:["Returns whether this item stack can be stacked with the\ngiven ",(0,r.jsx)(n.code,{children:"itemStack"}),". This is determined by comparing the item\ntype and any custom data and properties associated with the\nitem stacks. The amount of each item stack is not taken into\nconsideration."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the ContainerSlot is valid. The container\nslot is valid if the container exists and is loaded, and the\nslot index is valid."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setcandestroy",children:"setCanDestroy"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setCanDestroy"}),"(",(0,r.jsx)(n.code,{children:"blockIdentifiers?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"blockIdentifiers?"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The list of blocks, given by their identifiers."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The list of block types this item can break in Adventure\nmode. The block names are displayed in the item's tooltip.\nSetting the value to undefined will clear the list."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid. Also throws if\nany of the provided block identifiers are invalid."}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setcanplaceon",children:"setCanPlaceOn"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setCanPlaceOn"}),"(",(0,r.jsx)(n.code,{children:"blockIdentifiers?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"blockIdentifiers?"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The list of blocks, given by their identifiers."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-15",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The list of block types this item can be placed on in\nAdventure mode. This is only applicable to block items. The\nblock names are displayed in the item's tooltip. Setting the\nvalue to undefined will clear the list."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid. Also throws if\nany of the provided block identifiers are invalid."}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setdynamicproperty",children:"setDynamicProperty"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setDynamicProperty"}),"(",(0,r.jsx)(n.code,{children:"identifier"}),", ",(0,r.jsx)(n.code,{children:"value?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"identifier"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The property identifier."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"value?"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(n.code,{children:"Vector3"})})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Data value of the property to set."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-16",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Sets a specified property to a value."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setitem",children:"setItem"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setItem"}),"(",(0,r.jsx)(n.code,{children:"itemStack?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"itemStack?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(n.code,{children:"ItemStack"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The ItemStack to be placed in the slot."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-17",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Sets the given ItemStack in the slot, replacing any existing\nitem."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setlore",children:"setLore"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setLore"}),"(",(0,r.jsx)(n.code,{children:"loreList?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"loreList?"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"A list of lore strings. Setting this argument to undefined will clear the lore."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-18",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Sets the lore value - a secondary display string - for an\nItemStack."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"Throws if the slot's container is invalid."}),"\n",(0,r.jsx)(n.p,{children:"Error"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/InvalidContainerSlotError",children:"InvalidContainerSlotError"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);