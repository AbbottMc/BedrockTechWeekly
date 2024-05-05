"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[26404,95315,21032,92608,34914,47425],{83477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=t(74848),i=t(28453),s=t(39719),l=t(64221),o=(t(41917),t(34419),t(59938));const a={},c=void 0,d={id:"changelog_source/preview/1.20/60/21/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.20/60/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech",permalink:"/docs/changelog_source/preview/1.20/60/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"AI Goals",id:"ai-goals",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"Biomes",id:"biomes",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"General",id:"general",level:2},{value:"Molang",id:"molang",level:2},{value:"Performance and Stability",id:"performance-and-stability",level:2},{value:"Picture2.jpg",id:"picture2jpg",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...o.toc];function p(e){const n={a:"a",em:"em",h2:"h2",img:"img",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added a\xa0_Project Through Liquid_property to the 3D Block Cursor"}),"\n",(0,r.jsx)(n.li,{children:"Added a\xa0_CursorPropertiesChangeAfterEvent_to notify Editor script when the cursor properties are changed"}),"\n",(0,r.jsxs)(n.li,{children:["Wandering Traders can now correctly display custom entity spawn eggs in their trade menus (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-170184",children:"MCPE-170184"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ai-goals",children:"AI Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"behavior.breed" now interrupts navigation on stop for content using engine version 1.20.60 or higher'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"biomes",children:"Biomes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Biome JSON files no longer support inheriting fields from other Biome JSON files. If this affects any content those files should be updated by manually copying the desired JSON text"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'The "entity_sensor" component now supports multiple "subsensors":'}),"\n",(0,r.jsx)(n.li,{children:'"event", "require_all", "minimum_count", "maximum_count", "range" and "event_filter" are now individually configurable fields of each subsensor'}),"\n",(0,r.jsx)(n.li,{children:'Subsensors also have a new "cooldown" field, which defines how often each subsensor should sense for entities'}),"\n",(0,r.jsx)(n.li,{children:'All these changes require a "format_version" of 1.20.60 or higher'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fix in ",(0,r.jsx)(n.em,{children:"CompoundBlockVolumeIterator"})," that removes the addition of an extra block location in certain ",(0,r.jsx)(n.em,{children:"CompoundBlockVolume"})," configurations"]}),"\n",(0,r.jsx)(n.li,{children:"Update Pause Actors in world options menu using stateful menus"}),"\n",(0,r.jsx)(n.li,{children:"Added tool grouping support to Tool Rail"}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_toolGroupId_property to\xa0",(0,r.jsx)(n.em,{children:"ExtensionOptionalParameters"}),"\xa0API for organizing tools created in an extension"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"name"}),",\xa0",(0,r.jsx)(n.em,{children:"description"}),",\xa0_notes_and\xa0",(0,r.jsx)(n.em,{children:"defaultToolGroupId"}),"\xa0properties to\xa0",(0,r.jsx)(n.em,{children:"Extension"}),"\xa0API"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_extensionInfo: Extension_property to\xa0",(0,r.jsx)(n.em,{children:"ExtensionContext"}),"\xa0API and removed\xa0",(0,r.jsx)(n.em,{children:"extensionName"}),"\xa0property"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"entity-filters",children:"Entity Filters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Added new entity filter "is_panicking", which checks if the entity is executing "behavior.panic"'}),"\n",(0,r.jsx)(n.li,{children:'Added new entity filter "is_sprinting", which checks if the entity is sprinting'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Renamed _water_spash_manual._",(0,r.jsx)(n.em,{children:"json"})," to\xa0",(0,r.jsx)(n.em,{children:"water_splash_manual.json"}),"\xa0in\xa0",(0,r.jsx)(n.em,{children:"resource_packs\\vanilla\\particles"}),"\xa0(",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-176784",children:"MCPE-176784"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"molang",children:"Molang"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved the context of content logs when an evaluated Molang expressions results in an error"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-and-stability",children:"Performance and Stability"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Require block_id for each block in the StartGamePacket blockProperties"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(n.h2,{id:"picture2jpg",children:(0,r.jsx)(n.img,{src:"https://feedback.minecraft.net/hc/article_attachments/21755225955725",alt:"Picture2.jpg"})}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed texture z-fighting issues in Deferred Technical Preview"}),"\n",(0,r.jsxs)(n.li,{children:["Added Volumetric Fog and Light Shafts to the Deferred Technical Preview. This new feature works by approximating the scattering that occurs as light rays travel through the air, resulting in more realistic fog and a greater sense of scene depth. It also plugs into existing data-driving capabilities in Resource Packs for fog and volumes, so that Creators can customize the look and feel of fog under a variety of conditions; see the updated ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable",children:"Getting Started with Deferred Lighting"})," article on the Minecraft Creator Portal for more information"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api-1",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(l.default,{}),techSapiDiff:void 0})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},64221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.20/60/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error",source:"@site/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error"}),"\n",(0,r.jsxs)(n.li,{children:["Updated ",(0,r.jsx)(n.em,{children:"SimulatedPlayer"})," so it can continuously build"]}),"\n",(0,r.jsxs)(n.li,{children:["Updated ",(0,r.jsx)(n.em,{children:"SimulatedPlayer"})," so it can Move and look in different directions"]}),"\n",(0,r.jsxs)(n.li,{children:["ChatSendAfter & ChatSendBeforeEvent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Changed\xa0",(0,r.jsx)(n.em,{children:"message"}),"\xa0and\xa0",(0,r.jsx)(n.em,{children:"sender"}),"\xa0to readonly properties"]}),"\n",(0,r.jsxs)(n.li,{children:["Removed\xa0",(0,r.jsx)(n.em,{children:"setTargets"}),",\xa0",(0,r.jsx)(n.em,{children:"getTargets"}),",\xa0",(0,r.jsx)(n.em,{children:"sendToTargets"}),"\xa0and replaced with an optional player list property\xa0",(0,r.jsx)(n.em,{children:"targets"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Class ItemDurabilityComponent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.em,{children:"unbreaking"})," to ",(0,r.jsx)(n.em,{children:"unbreakingEnchantmentLevel"})]}),"\n",(0,r.jsxs)(n.li,{children:["Renmaed ",(0,r.jsx)(n.em,{children:"getDamageRange"})," to ",(0,r.jsx)(n.em,{children:"getDamageChanceRange"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["EntityTypes\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Changed\xa0",(0,r.jsx)(n.em,{children:"getAll"}),"\xa0return type from\xa0",(0,r.jsx)(n.em,{children:"EntityTypeIterator"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"EntityType[]"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["EntityEquippableComponent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed an issue where functions ",(0,r.jsx)(n.em,{children:"getEquipment"})," and ",(0,r.jsx)(n.em,{children:"getEquipmentSlot"}),' could not be called within "before" event handlers']}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where an ItemStack could not be stacked after clearing its lore"}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},34419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},39719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.20/60/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Released DataDrivenEntityTriggerAfterEvent from\xa0beta\xa0to\xa01.8.0",source:"@site/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Released ",(0,r.jsx)(n.em,{children:"DataDrivenEntityTriggerAfterEvent"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released ",(0,r.jsx)(n.em,{children:"DataDrivenEntityTriggerAfterEventSignal"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released ",(0,r.jsx)(n.em,{children:"DataDrivenEntityTriggerAfterEventSignalOptions"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released ",(0,r.jsx)(n.em,{children:"DefinitionModifier"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released ",(0,r.jsx)(n.em,{children:"WorldAfterEvents"}),".dataDrivenEntityTrigger from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"EffectAddBeforeEvent"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"EffectAddAfterEvent"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"EffectAddAfterEvent"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"getTags"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"hasTag"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.8.0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"RGBA"})," interface now inherits from ",(0,r.jsx)(n.em,{children:"RGB"})]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},41917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(18228),l=t(19365);const o={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(34164),s=t(23104),l=t(56347),o=t(205),a=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==r&&(d(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,j.jsx)("div",{className:"w-full",children:a}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function _(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(_,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);