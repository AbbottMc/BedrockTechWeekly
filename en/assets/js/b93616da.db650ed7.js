"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[55267,62977,2326,55957,30627,20378,71781],{57812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={},a=void 0,o={id:"changelog_source/preview/1.21/80/21/gameplay",title:"gameplay",description:"Posted: 18 March 2025",source:"@site/docs/changelog_source/preview/1.21/80/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.21/80/21/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Experimental Features",id:"experimental-features",level:2},{value:"User Interface",id:"user-interface",level:3},{value:"Features and Bug Fixes",id:"features-and-bug-fixes",level:2},{value:"Blocks",id:"blocks",level:3},{value:"Gameplay",id:"gameplay",level:3},{value:"Mobs",id:"mobs",level:3},{value:"User Interface",id:"user-interface-1",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Posted:"})," 18 March 2025"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Information on Minecraft Preview and Beta:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These work-in-progress versions can be unstable and may not be representative of final version quality"}),"\n",(0,i.jsxs)(n.li,{children:["Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at\xa0",(0,i.jsx)(n.a,{href:"https://aka.ms/PreviewFAQ",children:"aka.ms/PreviewFAQ"}),"\xa0"]}),"\n",(0,i.jsxs)(n.li,{children:["The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,i.jsx)(n.a,{href:"https://aka.ms/JoinMCBeta",children:"aka.ms/JoinMCBeta"}),"\xa0\xa0for detailed instructions"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we\u2019re keen to get your feedback on these new features at\xa0",(0,i.jsx)(n.a,{href:"http://feedback.minecraft.net/",children:"feedback.minecraft.net"}),", and you can report any bugs at\xa0",(0,i.jsx)(n.a,{href:"http://bugs.mojang.com/",children:"bugs.mojang.com"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"experimental-features",children:"Experimental Features"}),"\n",(0,i.jsx)(n.h3,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Player Dots on the Locator Bar now show correctly regardless of Simulation Distance"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features-and-bug-fixes",children:"Features and Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Due to unexpected codebase issues identified during Preview, we have reverted a recent change that caused "invincible pet" mobs to despawn (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-190466",children:"MCPE-188731"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mobs in worlds opened during Preview may have despawned, but players updating to the upcoming 1.21.70 release should be unaffected"}),"\n",(0,i.jsx)(n.li,{children:"As always, remember to keep backups of your worlds before major updates"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Removed access to Virtual and Mixed Reality gameplay"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"blocks",children:"Blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix ambient occlusion issue for non 1x1x1 blocks","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When a block around any of these smaller non 1x1x1 blocks is broken, the AO computation is correctly applied to the face in the direction of that broken block. Previously the wrong face could be seen getting lightened/darkened."}),"\n",(0,i.jsx)(n.li,{children:"A list of blocks affected: stairs, walls, gates, buttons, cakes, plates, fences, anvil, grindstone, hopper, bell, lectern, eggs, brewing stand"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"gameplay",children:"Gameplay"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed server client desync issue during portal travel on Realms (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-188731",children:"MCPE-188731"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Added 'music_definition' field to 'minecraft",":biome","_music' component in client_biome json files to control the music played in the biome. The default music will be determined by the dimension if the biome_music component or music_definition property is left off. An empty string can be used if the biome is intended to be silent"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mobs",children:"Mobs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Farm animal spawn eggs used in the Mangrove Swamp biome will now spawn the same variants of Chicken, Cow, and Pig as seen in the Java Edition (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-190750",children:"MCPE-190750"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"user-interface-1",children:"User Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Worlds are no longer missing from the Storage menu"}),"\n",(0,i.jsx)(n.li,{children:"Bundle tooltip no longer sometimes renders as if having a different amount of items"}),"\n",(0,i.jsx)(n.li,{children:'Adding "Manage Storage" button if download fails due to lack of space with instructions on what needs to be cleared out'}),"\n",(0,i.jsx)(n.li,{children:'Adding "Clear Download Cache" button to storage for clearing files that got stuck due to a downloading error'}),"\n",(0,i.jsx)(n.li,{children:"Auto clearing the download cache on startup if it detects that it is running out of space"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},96912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(74848),s=t(28453),r=t(52028),a=t(37828),o=(t(83340),t(99684),t(59938));const l={},c=void 0,d={id:"changelog_source/preview/1.21/80/21/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/80/21/tech.mdx",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/tech",permalink:"/en/docs/changelog_source/preview/1.21/80/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.RM,{value:"Blocks",id:"blocks",level:3},{value:"Components",id:"components",level:3},{value:"Editor",id:"editor",level:3},{value:"Mobs",id:"mobs",level:3},{value:"Molang",id:"molang",level:3},{value:"Stability and Performance",id:"stability-and-performance",level:3},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...o.RM,{value:"Blocks",id:"blocks-1",level:3},{value:"Graphical",id:"graphical",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"script-api",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(o.Ay,{techSapi:(0,i.jsx)(r.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h3,{id:"blocks",children:"Blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Blocks using the\xa0",(0,i.jsx)(n.code,{children:"minecraft:block_placer"})," component now can get added as loose items in the creative inventory and recipe book again"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Content errors will log missing texture references in the "minecraft',":icon",'" item component']}),"\n",(0,i.jsxs)(n.li,{children:['The "minecraft',":rideable","\" component's Seat definition now has two additional fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"third_person_camera_radius" can be used to set a different camera radius when in third person or third person front camera. The value needs to be in the range [1.0, 64.0]. Value 0.0 is ignored'}),"\n",(0,i.jsx)(n.li,{children:'"camera_relax_distance_smoothing" adds springiness to the camera movement when the camera moves back to its radius after being pushed closer to the player by and obstacle. A higher value means a stiffer spring. The value needs to be in the range [1.0, 32.0]. Value 0.0 is ignored'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['The "minecraft',":leashable",'" component now support multiple presets:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'A list of presets can be defined in the new "presets" field'}),"\n",(0,i.jsx)(n.li,{children:"Each preset determines how the entity behaves when leashed to another entity"}),"\n",(0,i.jsx)(n.li,{children:"A preset is selected when the entity is leashed and remains active until it is leashed to something else"}),"\n",(0,i.jsx)(n.li,{children:'The first preset whose "filter" conditions are met will be applied'}),"\n",(0,i.jsx)(n.li,{children:"If no presets match, a default configuration is used instead"}),"\n",(0,i.jsxs)(n.li,{children:["The following fields are now part of each preset:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"filter": Defines the condition that selects this preset out of all the presets upon leashing'}),"\n",(0,i.jsx)(n.li,{children:'"soft_distance": Distance at which the spring effect begins'}),"\n",(0,i.jsx)(n.li,{children:'"hard_distance": Distance at which the leash stiffens'}),"\n",(0,i.jsx)(n.li,{children:'"max_distance": Distance at which the leash breaks'}),"\n",(0,i.jsx)(n.li,{children:'"can_be_stolen": Determines if a player can steal the leashed entity using a Lead'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"editor",children:"Editor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added a new toggle group for\xa0",(0,i.jsx)(n.code,{children:"Trim Actions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added 2 new trim actions\xa0",(0,i.jsx)(n.code,{children:"Trim"}),"\xa0(shrink the selection bounding volume to include only the specified non-air blocks) and\xa0",(0,i.jsx)(n.code,{children:"Remove Air"}),"(remove all air blocks (and specified blocks) from the selection to create a new selection containing only the specified blocks)"]}),"\n",(0,i.jsxs)(n.li,{children:["Added a new\xa0",(0,i.jsx)(n.code,{children:"editorConstants"}),"\xa0object to the player context. This provides access to a number of constant values and methods that are commonly used across Editor (both in TypeScript and Native code)"]}),"\n",(0,i.jsx)(n.li,{children:"Added game rules to Export: Limited Crafting, Show Death Message, Show Item Tags, Command Block Output, Send Command Feedback, Max Command Chain Length, Fire Damage, Freeze Damage, Fall Damage, Drowning Damage, Insomnia, Show Border Effect, Function Command Limit"}),"\n",(0,i.jsx)(n.li,{children:"Fixed a bug where visualizations beyond 100x100x100 in the Repeater tool would appear"}),"\n",(0,i.jsx)(n.li,{children:"Fixed Crash on exit editor when selection volume is visible"}),"\n",(0,i.jsx)(n.li,{children:"Fixed the brush visualization reset when jumping from matches to no matches (artifacts of the old match state were left attached to the visualization)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mobs",children:"Mobs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Spawn Eggs from Custom Mobs from Behavior Packs now show up again in the spawn eggs group (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-190620",children:"MCPE-190620"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"molang",children:"Molang"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Added the "query.leashed_entity_count" Molang query, which allows querying how many entities have the given entity as their leash holder'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stability-and-performance",children:"Stability and Performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make friends drawer and play screen more performant using a cached view."}),"\n"]}),"\n",(0,i.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,i.jsx)(n.h2,{id:"script-api-1",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(o.Ay,{techSapi:(0,i.jsx)(a.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h3,{id:"blocks-1",children:"Blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Block using the minecraft",":destruction","_particles component will now correctly be sent to player connecting to a host"]}),"\n",(0,i.jsxs)(n.li,{children:['Always add a missing Destruction Particles component to blocks that have a Material Instances component, using the "down" material as reference',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The "texture" field in "minecraft',":destruction",'_particles" is now optional; if not provided or empty, it will be populated from the Material Instances component']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graphical",children:"Graphical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enforced minimum Android and iOS requirements for devices running the Deferred Technical Preview for maintained performance, stability, and visuals moving forward. For Android, a Adreno 640, Mali-G68, Mali-G77, or Xclipse 530 GPU or higher is required. On iOS devices, an A12 or M1 or higher device is required"}),"\n",(0,i.jsx)(n.li,{children:"Disabled local exposure on all platforms while we investigate a bug that can cause massive visual corruption in the Deferred Technical Preview. We will re-enable the technology in a future update once the issue has been resolved"}),"\n",(0,i.jsx)(n.li,{children:"Fixed a bug that caused the Editor to crash when the Deferred Technical Preview was enabled"}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},37828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={},a=void 0,o={id:"changelog_source/preview/1.21/80/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityMarkVariantComponent has been changed to read-only in version 2.0 beta",source:"@site/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EntityMarkVariantComponent"})," has been changed to read-only in version 2.0 beta"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},99684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={},a=void 0,o={id:"changelog_source/preview/1.21/80/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},52028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={},a=void 0,o={id:"changelog_source/preview/1.21/80/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Moved the following Player methods from\xa0beta\xa0to\xa0v1.18.0",source:"@site/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved the following Player methods from\xa0",(0,i.jsx)(n.code,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.code,{children:"v1.18.0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"setPropertyOverrideForEntity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"removePropertyOverrideForEntity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"clearPropertyOverridesForEntity"})}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},83340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={},a=void 0,o={id:"changelog_source/preview/1.21/80/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/80/21",slug:"/changelog_source/preview/1.21/80/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/80/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},64070:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>l});var i=t(74848),s=t(28453),r=t(18228),a=t(19365),o=t(8249);const l=[];function c(e){const n={div:"div",h2:"h2",...(0,s.R)(),...e.components};return(0,i.jsxs)(r.A,{rightElement:(0,i.jsx)(o.p,{}),children:[(0,i.jsx)(a.A,{value:"\u6280\u672f\u66f4\u65b0",children:e.techChangelog}),(0,i.jsx)(a.A,{value:"\u5b8c\u6574\u65e5\u5fd7",children:(0,i.jsxs)(n.div,{children:[(0,i.jsx)(n.h2,{className:"changelog_divider",children:"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"}),e.gameplayChangelog,e.techChangelog?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{className:"changelog_divider",children:"\u6280\u672f\u66f4\u65b0"}),e.techChangelog]}):void 0]})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59938:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var i=t(74848),s=t(28453),r=t(18228),a=t(19365);const o=[];function l(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(r.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(a.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(a.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},31149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(74848),s=t(28453),r=t(64070),a=t(57812),o=t(96912);const l={sidebar_position:99999678,title:"1.21.80.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.21"]},c="Minecraft Beta & Preview - 1.21.80.21",d={id:"official_changelog/preview/1.21/80/21",title:"1.21.80.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.21/80/21.mdx",sourceDirName:"official_changelog/preview/1.21/80",slug:"/official_changelog/preview/1.21/80/21",permalink:"/en/docs/official_changelog/preview/1.21/80/21",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.21/80/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/en/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/en/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/en/docs/tags/\u9884\u89c8\u7248"},{label:"1.21",permalink:"/en/docs/tags/1-21"}],version:"current",sidebarPosition:99999678,frontMatter:{sidebar_position:99999678,title:"1.21.80.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.21"]},sidebar:"changelogSidebar",previous:{title:"\u5b98\u65b9\u66f4\u65b0\u65e5\u5fd7",permalink:"/en/docs/official_changelog/"},next:{title:"1.21.80.20",permalink:"/en/docs/official_changelog/preview/1.21/80/20"}},h={},u=[...r.RM];function p(e){const n={h1:"h1",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"minecraft-beta--preview---1218021",children:"Minecraft Beta & Preview - 1.21.80.21"}),"\n",(0,i.jsx)(r.Ay,{gameplayChangelog:(0,i.jsx)(a.default,{}),techChangelog:(0,i.jsx)(o.default,{})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},8249:(e,n,t)=>{t.d(n,{p:()=>l});var i=t(96540),s=t(8045);function r(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}var a=t(74848);const o=[];function l(){const[e,n]=(0,i.useState)(),t=["ControlLeft","ShiftLeft","KeyS"],[l,c]=r({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),p(o))}}),[d,h]=r({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),u=()=>{s.k.switchHidden(),n(s.k.isHidden())},p=e=>{e.length!==t.length||e.some((e=>!t.includes(e)))||u()};return(0,i.useEffect)((()=>(l(),d(),n(s.k.isHidden()),()=>{c(),h()})),[]),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u,children:(0,a.jsx)("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})})})}},58409:(e,n,t)=>{t.d(n,{v:()=>r});class i{events={};static defaultMaxListeners=64;_maxListeners=i.defaultMaxListeners;on(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].push(n),this}once(e,n){var t=this;const i=function(){n(...arguments),t.off(e,i)};return this.on(e,i),this}emit(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];const s=this.events[e];return s&&s.forEach((e=>{e(...t)})),this}off(e,n){const t=this.events[e];if(!t)return this;if(!n)return delete this.events[e],this;const i=t.indexOf(n);return-1!==i&&t.splice(i,1),0===t.length&&delete this.events[e],this}listenerCount(e){const n=this.events[e];return n?n.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(n),this}prependOnceListener(e,n){var t=this;const i=function(){n(...arguments),t.off(e,i)};return this.prependListener(e,i),this}removeListener(e,n){const t=this.events[e];return t.splice(t.indexOf(n),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||i.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const s=new i;function r(e){return[()=>{e.listener&&s.on(e.name,e.listener)},()=>{e.listener&&s.off(e.name,e.listener)},function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];s.emit(e.name,...t)}]}},18228:(e,n,t)=>{t.d(n,{A:()=>_});var i=t(96540),s=t(34164),r=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=f({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==i&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;if(n){const e=t.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function _(e){const n=(0,g.A)();return(0,x.jsx)(w,{...e},String(n))}},8045:(e,n,t)=>{t.d(n,{k:()=>s});var i=t(58409);class s{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),n=(0,i.v)({name:"hiddenSwitch"})[2];this.setHidden(e),n(e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);