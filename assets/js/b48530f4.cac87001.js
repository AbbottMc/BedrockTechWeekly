"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27007],{45894:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453);const l={},i="Class: StructureManager",d={id:"sapi/preview/server/classes/StructureManager",title:"Class: StructureManager",description:"Manager for Structure related APIs. Includes APIs for",source:"@site/docs/sapi/preview/server/classes/StructureManager.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/StructureManager",permalink:"/docs/sapi/preview/server/classes/StructureManager",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/classes/StructureManager.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"Structure",permalink:"/docs/sapi/preview/server/classes/Structure"},next:{title:"System",permalink:"/docs/sapi/preview/server/classes/System"}},c={},h=[{value:"Constructors",id:"constructors",level:2},{value:"new StructureManager()",id:"new-structuremanager",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"createEmpty()",id:"createempty",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Throws",id:"throws",level:4},{value:"createFromWorld()",id:"createfromworld",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-1",level:4},{value:"Throws",id:"throws-1",level:4},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Remarks",id:"remarks-2",level:4},{value:"Throws",id:"throws-2",level:4},{value:"get()",id:"get",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Remarks",id:"remarks-3",level:4},{value:"getWorldStructureIds()",id:"getworldstructureids",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Remarks",id:"remarks-4",level:4},{value:"place()",id:"place",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Remarks",id:"remarks-5",level:4},{value:"Throws",id:"throws-3",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"class-structuremanager",children:"Class: StructureManager"}),"\n",(0,n.jsx)(r.p,{children:"Manager for Structure related APIs. Includes APIs for\ncreating, getting, placing and deleting Structures."}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-structuremanager",children:"new StructureManager()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"private"})," ",(0,n.jsx)(r.strong,{children:"new StructureManager"}),"(): ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/StructureManager",children:(0,n.jsx)(r.code,{children:"StructureManager"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/StructureManager",children:(0,n.jsx)(r.code,{children:"StructureManager"})})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"createempty",children:"createEmpty()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"createEmpty"}),"(",(0,n.jsx)(r.code,{children:"identifier"}),", ",(0,n.jsx)(r.code,{children:"size"}),", ",(0,n.jsx)(r.code,{children:"saveMode"}),"?): ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"identifier"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The name of the structure. A valid identifier must include a",(0,n.jsx)(r.br,{}),"namespace and must be unique."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"size"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/Vector3",children:(0,n.jsx)(r.code,{children:"Vector3"})})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The size of the structure. For example, to create a single",(0,n.jsx)(r.br,{}),"block structure the size should be {x:1, y:1, z:1}."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"saveMode"}),"?"]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/enumerations/StructureSaveMode",children:(0,n.jsx)(r.code,{children:"StructureSaveMode"})})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["How the Structure should be saved upon creation. Defaults to",(0,n.jsx)(r.br,{}),"StructureSaveMode.Memory."]})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})}),"\n",(0,n.jsx)(r.p,{children:"Returns the newly created Structure."}),"\n",(0,n.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Creates an empty Structure in memory. Use ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure#setblockpermutation",children:"Structure.setBlockPermutation"})," to populate the structure\nwith blocks and save changes with @minecraft/server.Structure.save."]}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.h4,{id:"throws",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"Throws if the identifier is invalid. A valid identifier must\ninclude a namespace and must be unique."}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.EngineError"}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.InvalidArgumentError"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"createfromworld",children:"createFromWorld()"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Beta"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"createFromWorld"}),"(",(0,n.jsx)(r.code,{children:"identifier"}),", ",(0,n.jsx)(r.code,{children:"dimension"}),", ",(0,n.jsx)(r.code,{children:"from"}),", ",(0,n.jsx)(r.code,{children:"to"}),", ",(0,n.jsx)(r.code,{children:"options"}),"?): ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"identifier"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The name of the structure. A valid identifier must include a",(0,n.jsx)(r.br,{}),"namespace and must be unique."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"dimension"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Dimension",children:(0,n.jsx)(r.code,{children:"Dimension"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The dimension where the blocks should be read from."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"from"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/Vector3",children:(0,n.jsx)(r.code,{children:"Vector3"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"to"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/Vector3",children:(0,n.jsx)(r.code,{children:"Vector3"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"options"}),"?"]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/StructureCreateOptions",children:(0,n.jsx)(r.code,{children:"StructureCreateOptions"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Additional options for creating a structure from the world."})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})}),"\n",(0,n.jsx)(r.p,{children:"Returns the newly created Structure."}),"\n",(0,n.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Creates a new Structure from blocks in the world. This is\nfunctionally equivalent to the /structure save command."}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.h4,{id:"throws-1",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"Throws if the identifier is invalid. A valid identifier must\ninclude a namespace and must be unique.\nThrows if the structure bounds exceed the maximum size.\nThrows if the structure bounds contains blocks outside the\nworld bounds."}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.InvalidArgumentError"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"delete",children:"delete()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"delete"}),"(",(0,n.jsx)(r.code,{children:"structure"}),"): ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"structure"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"string"})," | ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})]}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The structure identifier or Structure object that should be",(0,n.jsx)(r.br,{}),"deleted. Note, a Structure object will become invalid after",(0,n.jsx)(r.br,{}),"it is deleted."]})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.p,{children:"Returns whether the structure was removed."}),"\n",(0,n.jsx)(r.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Deletes a structure from memory and from the world if it\nexists."}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.h4,{id:"throws-2",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"Throws if a structure cannot be removed. For example, a\nstructure loaded from a Behavior Pack."}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.InvalidArgumentError"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"get",children:"get()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"get"}),"(",(0,n.jsx)(r.code,{children:"identifier"}),"): ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"identifier"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The name of the structure to get."})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})}),"\n",(0,n.jsx)(r.p,{children:"Returns a Structure if it exists, otherwise undefined."}),"\n",(0,n.jsx)(r.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Gets a Structure that is saved to memory or the world."}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getworldstructureids",children:"getWorldStructureIds()"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Beta"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getWorldStructureIds"}),"(): ",(0,n.jsx)(r.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"string"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"place",children:"place()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"place"}),"(",(0,n.jsx)(r.code,{children:"structure"}),", ",(0,n.jsx)(r.code,{children:"dimension"}),", ",(0,n.jsx)(r.code,{children:"location"}),", ",(0,n.jsx)(r.code,{children:"options"}),"?): ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"structure"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"string"})," | ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Structure",children:(0,n.jsx)(r.code,{children:"Structure"})})]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The structure's identifier or a Structure object."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"dimension"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/Dimension",children:(0,n.jsx)(r.code,{children:"Dimension"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The dimension where the Structure should be placed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"location"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/Vector3",children:(0,n.jsx)(r.code,{children:"Vector3"})})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The location within the dimension where the Structure should",(0,n.jsx)(r.br,{}),"be placed."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"options"}),"?"]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/StructurePlaceOptions",children:(0,n.jsx)(r.code,{children:"StructurePlaceOptions"})})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Additional options for Structure placement."})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Places a structure in the world. Structures placed in\nunloaded chunks will be queued for loading."}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(r.h4,{id:"throws-3",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"Throws if the integrity value is outside of the range [0,1]\nThrows if the integrity seed is invalid.\nThrows if the placement location contains blocks that are\noutside the world bounds."}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.ArgumentOutOfBoundsError"}),"\n",(0,n.jsx)(r.p,{children:"minecraftcommon.InvalidArgumentError"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/InvalidStructureError",children:"InvalidStructureError"})})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const s={},l=n.createContext(s);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);