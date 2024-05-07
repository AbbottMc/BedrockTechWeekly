"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81922,21032,2352,97386,98392,11359],{76275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=t(74848),s=t(28453),i=t(45797),l=t(89103),o=(t(89547),t(88053),t(59938));const a={},c=void 0,d={id:"changelog_source/preview/1.21/0/20/tech",title:"tech",description:"Add-Ons",source:"@site/docs/changelog_source/preview/1.21/0/20/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/20",slug:"/changelog_source/preview/1.21/0/20/tech",permalink:"/docs/changelog_source/preview/1.21/0/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/20/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Trial Spawners</strong>",id:"trial-spawners",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Graphical</strong>",id:"graphical-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...o.toc,{value:"<strong>Commands</strong>",id:"commands",level:2}];function m(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"add-ons",children:(0,r.jsx)(n.strong,{children:"Add-Ons"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a crash when entity identifier was too complex\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:(0,r.jsx)(n.strong,{children:"Editor"})}),"\n",(0,r.jsxs)(n.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.jsx)(n.strong,{children:"#BedrockEditor."})]}),"\n",(0,r.jsxs)(n.p,{children:["Learn ",(0,r.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:(0,r.jsx)(n.strong,{children:"how to use"})})," the Editor, join the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:(0,r.jsx)(n.strong,{children:"GitHub Discussion"})})," forum to engage with the team, and get started building extensions via the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:(0,r.jsx)(n.strong,{children:"starter kit"})})," and ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:(0,r.jsx)(n.strong,{children:"samples"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Improvements this week:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated 'Pause Actors' to 'Pause Entities'"}),"\n",(0,r.jsx)(n.li,{children:"Added \u2018Time of Day\u2019 settings panel\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated block atlas file using different rendering technique\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated Line Tool with new functionality and widget support\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Added global block hotbar with updated block picker"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general",children:(0,r.jsx)(n.strong,{children:"General"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Removed 'server-authoritative-block-breaking' from the default server.properties"}),"\n",(0,r.jsx)(n.li,{children:"Removed 'server-authoritative-sound' from server.properties"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items",children:(0,r.jsx)(n.strong,{children:"Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a problem where teleporting while using an item with a long use duration could leave it in an unresponsive state until the use duration elapsed"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:(0,r.jsx)(n.strong,{children:"Graphical"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Changed the default Anti Aliasing setting to "2" instead of "4" for better performance with minimal visual degradation.'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"molang",children:(0,r.jsx)(n.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added Molang\xa0_state_time -> number_for animation controllers, which returns the time in seconds spent in the current controller state (inclusive of blend time). Requires 'Upcoming Creator Features' experimental toggle\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"touch-controls",children:(0,r.jsx)(n.strong,{children:"Touch Controls"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed bug where users could not navigate through inventory using keyboard in touch devices\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"trial-spawners",children:(0,r.jsx)(n.strong,{children:"Trial Spawners"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added optional\xa0_equipment_loot_table_to the spawn data present in\xa0",(0,r.jsx)(n.em,{children:"spawn_potentials"}),"\xa0of Trial Spawner configs","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If present, rolled items from the specified loot table will be equipped to the mob that spawns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:(0,r.jsx)(n.strong,{children:"User Interface"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On touch devices players can once again distribute a selected item stack over multiple slots by dragging it over them\xa0"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(n.h2,{id:"graphical-1",children:(0,r.jsx)(n.strong,{children:"Graphical"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Extended Texture Set support to Particles in the Deferred Technical Preview. See the updated ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable",children:"Getting Started with Deferred Lighting"})," article for more details"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed banner staffs not being lit while held in hand from first-person view in the Deferred Technical Preview\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api-1",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(l.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:(0,r.jsx)(n.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed hunger element so that its visibility can be changed with the hud command"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},89103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const i={},l=void 0,o={id:"changelog_source/preview/1.21/0/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added ItemComponentMineBlockEvent for beta",source:"@site/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/0/20",slug:"/changelog_source/preview/1.21/0/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added ItemComponentMineBlockEvent for beta"}),"\n",(0,r.jsxs)(n.li,{children:["Event Signals\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Unsubscribe is no longer marked as "@throws". It does not throw exceptions and never has.'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_getAll_to\xa0",(0,r.jsx)(n.em,{children:"beta"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_PlayerInputPermissions_and\xa0",(0,r.jsx)(n.em,{children:"inputPermissions"})," for enabling & disabling categories of player input permissions"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"InputPermissionCategory"})]}),"\n",(0,r.jsx)(n.li,{children:"Added\xa0_afterEvents.playerInputPermissionCategoryChange_for listening to changes to a players input permissions"}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_ignoreBlockCollision_to\xa0",(0,r.jsx)(n.em,{children:"EntityRaycastOptions"}),"\xa0which when true, will make the raycast not stop on block collision"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_includePassableBlocks_to\xa0",(0,r.jsx)(n.em,{children:"EntityRaycastOptions"}),"\xa0which when true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_includeLiquidBlocks_to\xa0",(0,r.jsx)(n.em,{children:"EntityRaycastOptions"}),"\xa0which when true, liquid blocks will be considered as blocks that stop the raycast"]}),"\n",(0,r.jsx)(n.li,{children:"Added ItemComponentHitEntityEvent and ItemComponentBeforeDurabilityDamageEvent for beta"}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},88053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const i={},l=void 0,o={id:"changelog_source/preview/1.21/0/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/20",slug:"/changelog_source/preview/1.21/0/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},45797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const i={},l=void 0,o={id:"changelog_source/preview/1.21/0/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   ScreenDisplay",source:"@site/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/20",slug:"/changelog_source/preview/1.21/0/20/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["ScreenDisplay\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_getHiddenHudElements(): HudElements[]_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_isForcedHidden(hudElement: HudElements): boolean_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_resetHudElements(): void_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_setHudVisibility(visible: HudVisibility, hudElements?: HudElements[]): void_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_hideAllExcept(hudElements?: HudElements[]): void_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["HudElement\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_HudElement_enum from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_HudElementsCount_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["HudVisibility\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_HudVisibility_enum from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_HudVisibilityCount_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0_WeatherChangeBeforeEvent_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"}),"\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:["BlockPermutation\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Removed function\xa0",(0,r.jsx)(n.em,{children:"clone"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Creator Settings UI\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Watchdog settings"}),"\n",(0,r.jsx)(n.li,{children:"Increase script hang threshold"}),"\n",(0,r.jsx)(n.li,{children:"Disable/Enable slow script warnings and adjust threshold"}),"\n",(0,r.jsx)(n.li,{children:"Disable/Enable script spike warnings and adjust threshold"}),"\n",(0,r.jsx)(n.li,{children:"Removed\xa0_disableWatchdog_method"}),"\n",(0,r.jsx)(n.li,{children:"Added\xa0_disableWatchdogTimingWarnings_to disable spike and slow warnings per behavior pack"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_ItemEnchantableComponent_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"11.0"}),"\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:["Released Enchantment APIs from\xa0_beta_to\xa0",(0,r.jsx)(n.em,{children:"11.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["interface\xa0",(0,r.jsx)(n.em,{children:"Enchantment"})]}),"\n",(0,r.jsxs)(n.li,{children:["enum\xa0",(0,r.jsx)(n.em,{children:"EnchantmentSlot"})]}),"\n",(0,r.jsxs)(n.li,{children:["class\xa0",(0,r.jsx)(n.em,{children:"EnchantmentType"})]}),"\n",(0,r.jsxs)(n.li,{children:["class\xa0",(0,r.jsx)(n.em,{children:"EnchantmentTypes"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added new interface\xa0_EntityFilter_with many of the existing options from\xa0",(0,r.jsx)(n.em,{children:"EntityRaycastOptions"})]}),"\n",(0,r.jsxs)(n.li,{children:["_EntityRaycastOptions_now inherits from\xa0",(0,r.jsx)(n.em,{children:"EntityFilter"})]}),"\n",(0,r.jsxs)(n.li,{children:["_EntityQueryOptions_now inherits from\xa0",(0,r.jsx)(n.em,{children:"EntityFilter"})]}),"\n",(0,r.jsxs)(n.li,{children:["Removed property\xa0",(0,r.jsx)(n.em,{children:"blockFilter"}),"(and several others, now moved to\xa0",(0,r.jsx)(n.em,{children:"EntityFilter"}),") from\xa0",(0,r.jsx)(n.em,{children:"BlockRaycastOptions"})]}),"\n",(0,r.jsxs)(n.li,{children:["_BlockRaycastOptions_now inherits from\xa0",(0,r.jsx)(n.em,{children:"BlockFilter"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_BlockFilter_to\xa0",(0,r.jsx)(n.em,{children:"4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_volume_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"v1.11.0"})]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},89547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const i={},l=void 0,o={id:"changelog_source/preview/1.21/0/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/20",slug:"/changelog_source/preview/1.21/0/20/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453),i=t(18228),l=t(19365);const o={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),i=t(23104),l=t(56347),o=t(205),a=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:t,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(d(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,j.jsx)("div",{className:"w-full",children:a}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(_,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);