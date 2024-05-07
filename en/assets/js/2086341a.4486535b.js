"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60796],{16938:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=o(74848),n=o(28453);const s={},c=void 0,i={id:"changelog_source/preview/1.19.70.23/tech_sapi",title:"tech_sapi",description:"BlockPermutation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.23/tech_sapi.md",sourceDirName:"changelog_source/preview/1.19.70.23",slug:"/changelog_source/preview/1.19.70.23/tech_sapi",permalink:"/en/docs/changelog_source/preview/1.19.70.23/tech_sapi",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.23/tech_sapi.md",tags:[],version:"current",frontMatter:{}},l={},a=[{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:3},{value:"<strong>BlockProperties</strong>",id:"blockproperties",level:3},{value:"<strong>BlockPropertyType</strong>",id:"blockpropertytype",level:3}];function d(e){const t={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"blockpermutation",children:(0,r.jsx)(t.strong,{children:"BlockPermutation"})}),"\n",(0,r.jsxs)(t.p,{children:["BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the ",(0,r.jsx)(t.em,{children:"XBlockProperty"})," classes and now directly return properties ",(0,r.jsxs)(t.em,{children:["(",(0,r.jsx)(t.strong,{children:"boolean | number | string"}),")"]})," or a while collection of properties ",(0,r.jsxs)(t.em,{children:["(",(0,r.jsx)(t.strong,{children:"Record<string, boolean | number | string>"}),")"]}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added method ",(0,r.jsx)(t.em,{children:"matches(blockName: string, properties?: BlockProperties): boolean"})," which is used to match a block with optional states against a BlockPermutation."]}),"\n",(0,r.jsxs)(t.li,{children:["Added method ",(0,r.jsx)(t.em,{children:"withProperty(name: string, value: boolean | number | string): BlockPermutation;"})," which returns a new block permutation with a given property set to a specific value. Throws if the provided data cannot be resolved as a valid block permutation."]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"function"})," ",(0,r.jsx)(t.em,{children:"static resolve(blockName: string, properties?: BlockProperties): BlockPermutation"})," which resolve a BlockPermutation from a block name and optional states. Throws if the provided data cannot be resolved as a valid block permutation."]}),"\n",(0,r.jsxs)(t.li,{children:["Updated methods ",(0,r.jsx)(t.em,{children:"getProperty"})," and ",(0,r.jsx)(t.em,{children:"getAllProperties"})," to return values directly instead of wrapped into class objects. Example code:"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();\nblockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone_brick';\nblockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true; \n"})}),"\n",(0,r.jsx)(t.p,{children:"Now:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const blockPermutation = BlockPermutation.resolve( 'minecraft:stone_slab', { stone_slab_type: 'stone_brick',  top_slot_bit: true});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"blockproperties",children:(0,r.jsx)(t.strong,{children:"BlockProperties"})}),"\n",(0,r.jsxs)(t.p,{children:["Added new class to expose ",(0,r.jsx)(t.em,{children:"BlockPropertyType"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"blockpropertytype",children:(0,r.jsx)(t.strong,{children:"BlockPropertyType"})}),"\n",(0,r.jsx)(t.p,{children:'Added new class to track "definitional" data about block properties. This is how you can find which values are valid for each block property.'})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>i});var r=o(96540);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);