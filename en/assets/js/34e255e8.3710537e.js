"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97734],{22740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(74848),l=t(28453);const r={id:"BlockPermutation",title:"Class: BlockPermutation",sidebar_label:"BlockPermutation",sidebar_position:0,custom_edit_url:null},i=void 0,c={id:"sapi/stable/server/classes/BlockPermutation",title:"Class: BlockPermutation",description:"Contains the combination of type BlockType and",source:"@site/docs/sapi/stable/server/classes/BlockPermutation.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockPermutation",permalink:"/en/docs/sapi/stable/server/classes/BlockPermutation",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockPermutation",title:"Class: BlockPermutation",sidebar_label:"BlockPermutation",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockLocationIterator",permalink:"/en/docs/sapi/stable/server/classes/BlockLocationIterator"},next:{title:"BlockPistonComponent",permalink:"/en/docs/sapi/stable/server/classes/BlockPistonComponent"}},o={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getAllStates",id:"getallstates",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getItemStack",id:"getitemstack",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getState",id:"getstate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getTags",id:"gettags",level:3},{value:"Returns",id:"returns-5",level:4},{value:"hasTag",id:"hastag",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"matches",id:"matches",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"withState",id:"withstate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"resolve",id:"resolve",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Contains the combination of type ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockType",children:"BlockType"})," and\nproperties (also sometimes called block state) which\ndescribe a block (but does not belong to a specific ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/Block",children:"Block"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// A function the creates a sign at the specified location with the specified text\nimport { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';\nimport { MinecraftBlockTypes } from '@minecraft/vanilla-data';\n\nfunction createSignAt(location: DimensionLocation) {\n    const signBlock = location.dimension.getBlock(location);\n\n    if (!signBlock) {\n        console.warn('Could not find a block at specified location.');\n        return;\n    }\n\n    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });\n    signBlock.setPermutation(signPerm); // Update block to be a sign\n\n    // Update the sign block's text\n    // with \"Steve's Head\"\n    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);\n    if (signComponent) {\n        signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new BlockPermutation"}),"(): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockType",children:(0,s.jsx)(n.code,{children:"BlockType"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockType",children:"BlockType"})," that the permutation has."]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"clone",children:"clone"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"clone"}),"(): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})}),"\n",(0,s.jsx)(n.p,{children:"A copy of the permutation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Creates a copy of this permutation."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getallstates",children:"getAllStates"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getAllStates"}),"(): ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Returns the list of all of the block states that the\npermutation has."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns all available block states associated with this\nblock."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getitemstack",children:"getItemStack"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getItemStack"}),"(",(0,s.jsx)(n.code,{children:"amount?"}),"): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"amount?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Number of instances of this block to place in the prototype item stack."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Retrieves a prototype item stack based on this block\npermutation that can be used with item\nContainer/ContainerSlot APIs."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getstate",children:"getState"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getState"}),"(",(0,s.jsx)(n.code,{children:"stateName"}),"): ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"stateName"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Name of the block state who's value is to be returned."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the state if the permutation has it, else\n",(0,s.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Gets a state for the permutation."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"gettags",children:"getTags"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getTags"}),"(): ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Creates a copy of the permutation."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hastag",children:"hasTag"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"hasTag"}),"(",(0,s.jsx)(n.code,{children:"tag"}),"): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"tag"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"true"})," if the permutation has the tag, else ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Checks to see if the permutation has a specific tag."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { world } from "@minecraft/server";\n\n// Fetch the block\nconst block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });\nconst blockPerm = block.getPermutation();\n\nconsole.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);\nconsole.log(`Block is wood: ${blockPerm.hasTag("wood")}`);\nconsole.log(`Block is stone: ${blockPerm.hasTag("stone")}`);\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"matches",children:"matches"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"matches"}),"(",(0,s.jsx)(n.code,{children:"blockName"}),", ",(0,s.jsx)(n.code,{children:"states?"}),"): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"blockName"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"An optional set of states to compare against."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"states?"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"}),">"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns a boolean whether a specified permutation matches\nthis permutation. If states is not specified, matches checks\nagainst the set of types more broadly."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"withstate",children:"withState"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"withState"}),"(",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"value"}),"): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Identifier of the block property."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Value of the block property."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns a derived BlockPermutation with a specific property\nset."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"resolve",children:"resolve"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"resolve"}),"(",(0,s.jsx)(n.code,{children:"blockName"}),", ",(0,s.jsx)(n.code,{children:"states?"}),"): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"blockName"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Identifier of the block to check."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"states?"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"boolean"}),">"]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/BlockPermutation",children:(0,s.jsx)(n.code,{children:"BlockPermutation"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Given a type identifier and an optional set of properties,\nwill return a BlockPermutation object that is usable in\nother block APIs (e.g., block.setPermutation)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { DimensionLocation, BlockPermutation } from '@minecraft/server';\nimport { MinecraftBlockTypes } from '@minecraft/vanilla-data';\n\nconst allWoolBlocks: string[] = [\n    MinecraftBlockTypes.WhiteWool,\n    MinecraftBlockTypes.OrangeWool,\n    MinecraftBlockTypes.MagentaWool,\n    MinecraftBlockTypes.LightBlueWool,\n    MinecraftBlockTypes.YellowWool,\n    MinecraftBlockTypes.LimeWool,\n    MinecraftBlockTypes.PinkWool,\n    MinecraftBlockTypes.GrayWool,\n    MinecraftBlockTypes.LightGrayWool,\n    MinecraftBlockTypes.CyanWool,\n    MinecraftBlockTypes.PurpleWool,\n    MinecraftBlockTypes.BlueWool,\n    MinecraftBlockTypes.BrownWool,\n    MinecraftBlockTypes.GreenWool,\n    MinecraftBlockTypes.RedWool,\n    MinecraftBlockTypes.BlackWool,\n];\n\nconst cubeDim = 7;\n\nfunction placeRainbowCube(location: DimensionLocation) {\n    let colorIndex = 0;\n    for (let x = 0; x <= cubeDim; x++) {\n        for (let y = 0; y <= cubeDim; y++) {\n            for (let z = 0; z <= cubeDim; z++) {\n                colorIndex++;\n                location.dimension\n                    .getBlock({ x: location.x + x, y: location.y + y, z: location.z + z })\n                    ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));\n            }\n        }\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);