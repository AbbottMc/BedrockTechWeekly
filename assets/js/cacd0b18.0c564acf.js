"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[76011,21032,17128,60886,30116,89605],{28502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(74848),s=n(28453),i=n(1586),o=n(10518),l=(n(47250),n(80782),n(59938));const a={},c=void 0,d={id:"changelog_source/preview/1.20/80/22/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/80/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech",permalink:"/docs/changelog_source/preview/1.20/80/22/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...l.toc,{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...l.toc,{value:"<strong>Commands</strong>",id:"commands-1",level:2}];function m(e){const t={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(l.default,{techSapi:(0,r.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Updated /titleraw and /tellraw to include support for rendering input key glyphs"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"mobs",children:(0,r.jsx)(t.strong,{children:"Mobs"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Added spawn categories to Bedrock. They will be used in the future for mob spawning. Spawn categories have been enabled in entity behavior pack files, but are not yet functional"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fixed an issue where ",(0,r.jsx)(t.em,{children:"should_update_bones_and_effects_offscreen"})," and ",(0,r.jsx)(t.em,{children:"should_update_effects_offscreen"})," were being ignored"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(t.h2,{id:"graphical",children:(0,r.jsx)(t.strong,{children:"Graphical"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Improved texture filtering for renderchunks to smooth the transition between LODs"}),"\n",(0,r.jsxs)(t.li,{children:["Added a new feature to the Deferred Technical Preview: ",(0,r.jsx)(t.strong,{children:"Sky Reflections"}),". This new effect will reflect the sky on surfaces depending on their roughness and other surface properties. See the updated ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable",children:"Getting Started with Deferred Lighting"})," article on the Learning Portal for more information. Note that since these are reflections of the sky, reflections will not be visible when in caves, indoors or the Nether. Reflections for these scenarios and of other objects such as the terrain and entities will be added in future updates."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://feedback.minecraft.net/hc/article_attachments/24982320663565",alt:"reflections-b_before.png"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://feedback.minecraft.net/hc/article_attachments/24982312392205",alt:"reflections-b_after.png"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://feedback.minecraft.net/hc/article_attachments/24982320686221",alt:"reflections-a_before.png"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://feedback.minecraft.net/hc/article_attachments/24982320700813",alt:"reflections-a_after.png"})}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:(0,r.jsx)(t.strong,{children:"Editor"})}),"\n",(0,r.jsxs)(t.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.jsx)(t.strong,{children:"#BedrockEditor."})]}),"\n",(0,r.jsxs)(t.p,{children:["Learn ",(0,r.jsx)(t.a,{href:"https://aka.ms/LearnEditor",children:"how to use"})," the Editor, join the ",(0,r.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"})," forum to engage with the team, and get started building extensions via the ",(0,r.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Improvements this week:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added three classes: the IBlockPaletteItem interface and the ProbabilityBlockPaletteItem and SimpleBlockPaletteItem concrete classes. These classes will be used in the later implementation of the Block Palette"}),"\n",(0,r.jsx)(t.li,{children:"Tool mode screen layout will now be using a fixed drawer system rather than floating window panels. Drawers panels support drag to resize, expand/collapse, and show/hide behaviors"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"bindPropertyPane"})," API function will now only bind a single pane to the tool. Bound pane will be displayed in the layout drawer next to the tool rail on tool activation. It is recommended to update the pane state once it\u2019s associated with the tool to ensure it\u2019s displayed correctly"]}),"\n",(0,r.jsx)(t.li,{children:"Changed top level menus to show up only when they contain items"}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"uniqueId"})," property to ",(0,r.jsx)(t.em,{children:"IMenuCreationParams"})," API which will replace ",(0,r.jsx)(t.em,{children:"IMenu"})," id on creation"]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"menubar: IMenuContainer"})," property ",(0,r.jsx)(t.em,{children:"to IPlayerUISession"}),". ",(0,r.jsx)(t.em,{children:"IMenuContainer"})," will manage menu related operations","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"getMenu"})," method to ",(0,r.jsx)(t.em,{children:"IMenuContainer"})," to return an existing menu item. Predefined editor menus can be retrieved with the new ",(0,r.jsx)(t.em,{children:"CoreMenuType"})," enum"]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.em,{children:"createMenu"})," from ",(0,r.jsx)(t.em,{children:"IPlayerUISession"})," to ",(0,r.jsx)(t.em,{children:"IMenuContainer"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(l.default,{techSapi:(0,r.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"commands-1",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Improved performance for the /give and /replaceitemcommands. No server lag if there is no target (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-162190",children:"MCPE-162190"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Fixed the /hud command so that changes do not persist between sessions (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-179153",children:"MCPE-179153"}),")"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},10518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/80/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added BlockComponentStepOnEvent for beta",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const t={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"BlockComponentStepOnEvent"})," for ",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"BlockRegistry"})," for ",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"WorldInitializeBeforeEvent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"BlockCustomComponent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Dimension:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume"})," - Gets the blocks in a volume if it matches the filter"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean"})," - Returns true if the block in volume matches the filter, false otherwise"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.em,{children:"ItemCooldownComponent"})," from ",(0,r.jsx)(t.em,{children:"beta"})," to ",(0,r.jsx)(t.em,{children:"1.10.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"BlockComponentStepOffEvent"})," for ",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"onStepOff"})," to ",(0,r.jsx)(t.em,{children:"BlockCustomComponent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"BlockComponentRandomTickEvent"})," for ",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"onRandomTick"})," to ",(0,r.jsx)(t.em,{children:"BlockCustomComponent"})]}),"\n",(0,r.jsxs)(t.li,{children:["StructureManager:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"getIds(): string"})," - Returns a list of identifiers including all structures saved to memory and the world"]}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where the delete function would not remove structures that were previously saved to the world but not loaded"}),"\n",(0,r.jsxs)(t.li,{children:["Changed the default save mode of ",(0,r.jsx)(t.em,{children:"createEmpty"})," to ",(0,r.jsx)(t.em,{children:"StructureSaveMode.Memory"})]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},80782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/80/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},1586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/80/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Moved EntityType and EntityTypes from beta to 1.11.0",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const t={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.em,{children:"EntityType"})," and ",(0,r.jsx)(t.em,{children:"EntityTypes"})," from ",(0,r.jsx)(t.em,{children:"beta"})," to ",(0,r.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Released ",(0,r.jsx)(t.em,{children:"playMusic"}),"_,_",(0,r.jsx)(t.em,{children:"Player.queueMusic"}),", ",(0,r.jsx)(t.em,{children:"Player.stopMusic"})," from ",(0,r.jsx)(t.em,{children:"beta"})," to ",(0,r.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Removed ",(0,r.jsx)(t.em,{children:"BlockAreaSize"})," from ",(0,r.jsx)(t.em,{children:"beta"})," and replaced usages with ",(0,r.jsx)(t.em,{children:"Vector3"})]}),"\n",(0,r.jsxs)(t.li,{children:["Renamed parameter ",(0,r.jsx)(t.em,{children:"itemCategory"})," in ",(0,r.jsx)(t.em,{children:"getItemCooldown"})," and ",(0,r.jsx)(t.em,{children:"player.startItemCooldown"})," to ",(0,r.jsx)(t.em,{children:"cooldownCategory"})]}),"\n",(0,r.jsxs)(t.li,{children:["Changed ",(0,r.jsx)(t.em,{children:"type"})," to only ",(0,r.jsx)(t.em,{children:"EnchantmentType"})," to follow API guidelines"]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"EnchantmentSlot"})," and ",(0,r.jsx)(t.em,{children:"slots"})," to ",(0,r.jsx)(t.em,{children:"beta"})," for determining the enchantable slots of an item"]}),"\n",(0,r.jsx)(t.li,{children:"Added 'minecraft:custom_components' block component under the Beta APIs feature flag"}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},47250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/80/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=n(74848),s=n(28453),i=n(18228),o=n(19365);const l={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(96540),s=n(34164),i=n(23104),o=n(56347),l=n(205),a=n(57485),c=n(31682),d=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),s=l[n].value;s!==r&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),a?(0,j.jsx)("div",{className:"w-full",children:a}):void 0]})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function _(e){const t=(0,g.A)();return(0,j.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);