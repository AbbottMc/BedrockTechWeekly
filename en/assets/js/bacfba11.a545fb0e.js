"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99050,31164,43115,26114,579,30089,58768],{40542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/20/21/gameplay",title:"gameplay",description:"Posted: 27 June 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/20/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.21/20/21",slug:"/changelog_source/preview/1.21/20/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.21/20/21/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/20/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>NOTE:</strong>\xa0This week&#39;s update may may be delayed on Windows 10/11. We apologize for the inconvenience and are working to resolve the issue.",id:"notethis-weeks-update-may-may-be-delayed-on-windows-1011-we-apologize-for-the-inconvenience-and-are-working-to-resolve-the-issue",level:3},{value:"Banners",id:"banners",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Realms",id:"realms",level:2},{value:"Updated Realms Tab",id:"updated-realms-tab",level:2},{value:"Sound",id:"sound",level:2},{value:"Music",id:"music",level:2},{value:"Structure Block",id:"structure-block",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Vanilla Parity",id:"vanilla-parity",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Posted:"})," 27 June 2024"]}),"\n",(0,r.jsxs)(n.h3,{id:"notethis-weeks-update-may-may-be-delayed-on-windows-1011-we-apologize-for-the-inconvenience-and-are-working-to-resolve-the-issue",children:[(0,r.jsx)(n.strong,{children:"NOTE:"}),"\xa0This week's update may may be delayed on Windows 10/11. We apologize for the inconvenience and are working to resolve the issue."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Information on Minecraft Preview and Beta:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These work-in-progress versions can be unstable and may not be representative of final version quality"}),"\n",(0,r.jsxs)(n.li,{children:["Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at ",(0,r.jsx)(n.a,{href:"https://aka.ms/PreviewFAQ",children:"aka.ms/PreviewFAQ"})]}),"\n",(0,r.jsxs)(n.li,{children:["The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.jsx)(n.a,{href:"https://aka.ms/JoinMCBeta",children:"aka.ms/JoinMCBeta"}),"\xa0for detailed instructions"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://feedback.minecraft.net/hc/article_attachments/27935763024781",alt:"A Minecraft village with ice plains in the background"})}),"\n",(0,r.jsx)(n.p,{children:"Greetings, dear readers! This week, we begin the 1.21.20.21 Betas and Previews, and we know that many of you who follow the update versions closely will be expecting a retail update soon. However, after careful consideration we have decided that we will be skipping the 1.21.10 update. Instead, we will focus on 1.21.20 to prioritize more quality and stability improvements. But fear not \u2013 all of the tweaks from recent Betas and Previews won't be lost! They will also be included in 1.21.20, and we will be assessing and addressing critical bugs in hotfixes as we did with 1.21.1. Thank you for your patience and understanding, and please keep sending us your feedback and bug reports. We really appreciate your input!"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s the list for what\u2019s new this week:"}),"\n",(0,r.jsx)(n.h1,{id:"features-and-bug-fixes",children:"Features and Bug Fixes"}),"\n",(0,r.jsx)(n.h2,{id:"banners",children:"Banners"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Mirrored the back side of Skull, Guster, and Flow banner textures (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-179894",children:"MCPE-179894"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed an issue with the Quartz Slab's texture (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-182604",children:"MCPE-182604"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Texture overrides that intended to target all block variants no longer only override the default variant"}),"\n",(0,r.jsx)(n.li,{children:'"light_block" block is now split into unique instances: "light_block_0", "light_block_1", "light_block_2", "light_block_3", "light_block_4", "light_block_5", "light_block_6", "light_block_7", "light_block_8", "light_block_9", "light_block_10", "light_block_11", "light_block_12", "light_block_13", "light_block_14" and "light_block_15"'}),"\n",(0,r.jsxs)(n.li,{children:['The "minecraft',":yellow",'_flower" block has been renamed to "minecraft',":dandelion",'", the old name is still understood from commands and data']}),"\n",(0,r.jsxs)(n.li,{children:['"sandstone" block is now split into unique instances "sandstone", "chiseled_sandstone", "cut_sandstone" and "smooth_sandstone"',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"smooth_sandstone" destroy time changed from 0.8 to 2.0, and explosion resistance from 0.8 to 6.0'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed issue with Trial Spawners not ejecting loot in older worlds (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-182758",children:"MCPE-182758"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Mobs spawned by Ominous Trial Spawners now drop items they picked up (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-182630",children:"MCPE-182630"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Area Effect Clouds no longer shrink when entered by entities immune to the effect"}),"\n",(0,r.jsx)(n.li,{children:'Fixed a recipe bug where "chiseled_sandstone" and "cut_sandstone" sandstone variants could be used in a furnace to craft "smooth_sandstone". It can now only accept normal "sandstone" and no other types of sandstone'}),"\n",(0,r.jsxs)(n.li,{children:['Fixed Vanilla recipes involving "red_sandstone_slab" as an ingredient or result item, they would incorrectly use "red_sandstone" instead',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:0"'}),"\n",(0,r.jsx)(n.li,{children:'"red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:1"'}),"\n",(0,r.jsx)(n.li,{children:'"red_sandstone:1" can now be crafted again with 2 vertical "red_sandstone_slab"'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where the Breeze could get stuck in one place when beneath a roof of blocks while attacking"}),"\n",(0,r.jsx)(n.li,{children:"Wind Charges thrown by Players no longer have a chance of dealing more than 1 damage per hit"}),"\n",(0,r.jsx)(n.li,{children:"Jumping no longer overrides any previous greater upward velocity, and therefore doesn't cancel momentum from a Wind Burst explosion when both happen at the same time"}),"\n",(0,r.jsx)(n.li,{children:"Using Trident with Riptide enchantment now correctly cancels fall damage reduction from Wind Charge"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where the fall damage protection from a Wind Charge incorrectly prevented fall damage when landing a second time"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"realms",children:"Realms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Players are no longer kicked from the Realm if the owner enters and exits the Realms Settings screen without modifying packs while multiple Add-Ons are applied"}),"\n",(0,r.jsx)(n.li,{children:"Navigating away from the Realms Stories Story Feed tab upon reading the first page of stories will remove the unread stories badge as the user has seen the most recent posts."}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where brand new Realm Events wouldn't display properly the first time the Story Feed is opened."}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug that locks players on an infinite loop after cancelling the process of joining a recently claimed Preview Realm"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"updated-realms-tab",children:"Updated Realms Tab"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ve introduced a brand-new Realms tab. It is found in the New Play Screen, but unfortunately there is an issue with actually joining a Realm this way! (Sorry!) You will have to switch to the old UI in order to join Realms in the Preview - we hope to have this issue resolved as soon as possible."}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s what you can expect showing up over next couple of previews:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"List of Realms: Easily view all the Realms you own or have joined."}),"\n",(0,r.jsx)(n.li,{children:"Start Playing: Launch your Realm directly from this screen."}),"\n",(0,r.jsx)(n.li,{children:"Online Player Count: See how many players are currently online in each Realm."}),"\n",(0,r.jsx)(n.li,{children:"Realm Management: Take control of your owned Realms by editing worlds and managing subscriptions."}),"\n",(0,r.jsx)(n.li,{children:"Add or Join Realms: Explore new Realms by adding or joining them."}),"\n",(0,r.jsx)(n.li,{children:"Realm Stories: View Realm stories."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We\u2019ll continue improving the Realms tab in future releases. Please send us your feedback at ",(0,r.jsx)(n.a,{href:"https://aka.ms/realmstabfeedback",children:"aka.ms/realmstabfeedback"})]}),"\n",(0,r.jsx)(n.h2,{id:"sound",children:"Sound"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Crafter craft and fail sounds now have a random pitch offset"}),"\n",(0,r.jsx)(n.li,{children:"Crafter fail sound now has a max distance of 3 blocks instead of 5"}),"\n",(0,r.jsx)(n.li,{children:"Copper Bulb break, place and hit sounds are now pitched differently"}),"\n",(0,r.jsx)(n.li,{children:"Copper Grate break, place and hit sounds are now pitched differently)"}),"\n",(0,r.jsx)(n.li,{children:"Copper Grate step sounds play at a lower volume"}),"\n",(0,r.jsx)(n.li,{children:'Copper door\'s "open" sound is now pitched differently'}),"\n",(0,r.jsx)(n.li,{children:"Trial Spawner break and place sounds are now pitched differently"}),"\n",(0,r.jsx)(n.li,{children:"Vault break and place sounds are now pitched differently"}),"\n",(0,r.jsx)(n.li,{children:"Break, place and hit sounds now pitch differently for Tuff, Tuff Bricks, and Polished Tuff Blocks"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"music",children:"Music"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"Echo in the Wind" now plays in Lush Caves biome (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-182278",children:"MCPE-182278"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:['"5", "Otherside", "Relic", "Creator", "Creator (Music Box)" & "Precipice" are now assigned to the Jukebox / Noteblock slider (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-169933",children:"MCPE-169933"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"structure-block",children:"Structure Block"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed issue where player ID was not being saved on structure blocks when saving and exiting the level (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-149183",children:"MCPE-149183"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"From versions 1.21.20, the player ID given to tamed mobs loaded from a structure block will always be the original owner's ID"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The water breathing effect icon and timer no longer flicker while wearing the Turtle Helmet (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-142173",children:"MCPE-142173"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Enabled the new version of the Bed Screen. The user can opt-in or opt-out using a feature toggle under Settings-Video Tab. (Preview only)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vanilla-parity",children:"Vanilla Parity"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Naturally spawned Mushroom stems no longer drop Mushrooms when mined (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-71123",children:"MCPE-71123"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"The chance of dropping Mushrooms (max of 2) from Brown and Red Mushroom Block was increased to match Java, from 10% per Mushroom to 11.11%"}),"\n",(0,r.jsxs)(n.li,{children:["Pufferfish now gives Nausea I effect instead of Nausea II when consumed. (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-98458",children:"MCPE-98458"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Zoglins now play angry sounds when chasing the player or mobs (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-95523",children:"MCPE-95523"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Bees now start taking drowning damage after one second when underwater (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-114688",children:"MCPE-114688"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Crafting with Oxidized Cut Copper in Stonecutter now yields two slabs instead of one (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-136077",children:"MCPE-136077"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Crafting Quartz Bricks from Blocks of Quartz now yield 4 Quartz Bricks instead of 1 (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-69281",children:"MCPE-69281"}),")"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(41174),a=(t(99694),t(74450));const o={},l=void 0,c={id:"changelog_source/preview/1.21/20/21/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/20/21/tech.mdx",sourceDirName:"changelog_source/preview/1.21/20/21",slug:"/changelog_source/preview/1.21/20/21/tech",permalink:"/en/docs/changelog_source/preview/1.21/20/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/20/21/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"AI Goals",id:"ai-goals",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Graphical",id:"graphical",level:2},{value:"API",id:"api",level:2},{value:"Graphical",id:"graphical-1",level:2},{value:"Blocks",id:"blocks",level:2}];function u(e){const n={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed a bug where having an Add-On applied to a dedicated server would force players to download all resource packs applied to that server in order to join. Note: If you downloaded unwanted packs as a result of this issue, you may have to delete them locally from your device to avoid having them apply when joining a world (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-180344",children:"MCPE-180344"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:['Updated the "minecraft',":geometry",'" block component to validate whether geometries fit within the 30/16 unit bounds and have at least 1/16 of their length within the unit cube on each axis. This validation occurs for all geometry components on all blocks using json version 1.21.0 or later. (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-178607",children:"MCPE-178607"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ai-goals",children:"AI Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Exposed "minecraft',":behavior",'.swim_up_for_breath" AI goal component which allows a mob to try to move to a location where it can breathe air once it is close to running out of its breathable supply. In Vanilla, this is used by the Dolphin. Any custom content built off of the Vanilla dolphin at or above version 1.21.20 will need to manually add this component to enable this AI behavior.']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["2 Channel textures in resource packs are now properly supported. When loaded they will always use the first channel to represent all three color channels and the second channel for alpha (I.E A normal texture would be\xa0",(0,r.jsx)(n.em,{children:"(R, G, B, A)"})," where a 2 channel texture will always be treated as\xa0",(0,r.jsx)(n.em,{children:"(R, R, R, A)"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed bug where culling rules for data driven blocks did not rotate with the transformation component"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"technical-experimental-features",children:"Technical Experimental Features"}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["EntityBreathableComponent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Changed function\xa0",(0,r.jsx)(n.em,{children:"setAirSupply(value: number): void"})," to property\xa0",(0,r.jsx)(n.em,{children:"airSupply: number"}),"\xa0in beta"]}),"\n",(0,r.jsxs)(n.li,{children:["Added property\xa0",(0,r.jsx)(n.em,{children:"readonly canBreathe: boolean"})," to beta"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"isHardcore"})," to ",(0,r.jsx)(n.em,{children:"1.14.0 beta"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"graphical-1",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Custom skyboxes are now supported in Deferred Technical Preview (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-174200",children:"MCPE-174200"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed a bug where blank white thumbnails were being generated for worlds with the Deferred Technical Preview enabled (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-178373",children:"MCPE-178373"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where certain objects from the world would be visible through the gamma calibration menu in the Deferred Technical Preview"}),"\n",(0,r.jsx)(n.li,{children:"The extension EXT_texture_cube_map_array is now required to run Deferred Technical Preview on Android devices that support GLES 3.1. Some devices will lose support, however most devices should be unaffected"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside minecraft',":geometry",", and requires format_version 1.21.20","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default values example:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"item_display_transforms": {',(0,r.jsx)(n.br,{}),"\n",'"gui" : {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "translation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rotation": [30, 225, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "scale": [0.625, 0.625, 0.625]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "firstperson_righthand": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "translation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rotation": [0, 45, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "scale": [0.4, 0.4, 0.4]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "firstperson_lefthand": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "translation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [0, -135, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [0.4, 0.4, 0.4]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "thirdperson_righthand": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "translation": [0, 2.5, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [75, 45, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [0.375, 0.375, 0.375]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "thirdperson_lefthand": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "translation": [0, 2.5, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [75, 45, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [0.375, 0.375, 0.375]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "ground": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "translation": [0, 3.0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [0.25, 0.25, 0.25]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "fixed": {',(0,r.jsx)(n.br,{}),"\n",'\xa0 \xa0\xa0"translation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [0.5, 0.5, 0.5]',(0,r.jsx)(n.br,{}),"\n","\xa0 },",(0,r.jsx)(n.br,{}),"\n",'\xa0 "head": {',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "translation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "rotation": [0, 0, 0],',(0,r.jsx)(n.br,{}),"\n",'\xa0\xa0\xa0 "scale": [1, 1, 1]',(0,r.jsx)(n.br,{}),"\n","\xa0 }",(0,r.jsx)(n.br,{}),"\n","}"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},41174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/20/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   EntityLeashableComponent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/20/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/20/21",slug:"/changelog_source/preview/1.21/20/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/20/21/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/20/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Blocks",id:"blocks",level:2},{value:"Editor",id:"editor",level:2},{value:"General",id:"general",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["EntityLeashableComponent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0",(0,r.jsx)(n.em,{children:"EntityLeashableComponent"})," from beta to\xa0",(0,r.jsx)(n.em,{children:"1.13.0"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"infested_stone" and its derivatives now have their block sound defined (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-182290",children:"MCPE-182290"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.jsx)(n.strong,{children:"#BedrockEditor."}),"\xa0"]}),"\n",(0,r.jsxs)(n.p,{children:["Learn ",(0,r.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:"how to use"})," the Editor, join the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"})," forum to engage with the team, and get started building extensions via the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),".\xa0"]}),"\n",(0,r.jsx)(n.p,{children:"Updates this week:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added settings panel to modify atmospheric, global illumination, and color grading settings for deferred lighting (requires deferred lighting resource pack and settings to be enabled)\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Known issue: shadows are cast from the UI elements. You can toggle crosshair mode via CTRL+TAB as a workaround"}),"\n",(0,r.jsx)(n.li,{children:"Known issue: paste preview (CTRL+SHIFT+V) does not render properly when deferred lighting is enabled."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://feedback.minecraft.net/hc/article_attachments/27938232806029",alt:"editorPicture1.png"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"Input Mappings"})," action bar item that opens a modal displaying all available key bindings and input contexts.\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Key bindings can be reconfigured using the shortcut field, which detects key presses to set the binding. Pending changes will highlight the text until saved or cleared. Closing the modal reverts any pending changes."}),"\n",(0,r.jsx)(n.li,{children:"Right-clicking on a selected shortcut field clears the binding, or clear button next to the field can be used."}),"\n",(0,r.jsxs)(n.li,{children:["Added a toggle for exclusive (",(0,r.jsx)(n.em,{children:"None"})," in API) key actions to support advanced input scenarios."]}),"\n",(0,r.jsx)(n.li,{children:"Modified bindings can be restored by clicking restore buttons for the binding, active context, and all modified bindings."}),"\n",(0,r.jsx)(n.li,{children:"Saved bindings are accessible across different editor projects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://feedback.minecraft.net/hc/article_attachments/27938262668685",alt:"editorPicture2.png"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extended game options to include more export options as well as applying options to export level data"}),"\n",(0,r.jsxs)(n.li,{children:["Added an optional\xa0",(0,r.jsx)(n.em,{children:"KeyBindingInfo"})," argument to the key binding registration API functions to assign additional information to shortcuts."]}),"\n",(0,r.jsxs)(n.li,{children:["Added new\xa0",(0,r.jsx)(n.em,{children:"BlockList"})," UI element to Property Pane API."]}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"inputContextId"})," and\xa0",(0,r.jsx)(n.em,{children:"inputContextLabel"}),"\xa0optional properties to\xa0",(0,r.jsx)(n.em,{children:"ModalToolCreationParameters"}),"\xa0API to represent user defined modal tool identifiers for modal tools."]}),"\n",(0,r.jsxs)(n.li,{children:["Added interface\xa0",(0,r.jsx)(n.em,{children:"KeyBinding"})," and modified key binding registration API methods to take this object."]}),"\n",(0,r.jsx)(n.li,{children:"Dropdown menus will attempt to open in the opposite direction when they extend beyond the window bounds."}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"variant: ColorPickerVariant"})," optional property to\xa0",(0,r.jsx)(n.em,{children:"IPropertyItemOptionsColorPicker"}),"\xa0API to support different types of color picker property items. Changed the default variant to respect the pane layout. Moved gradient selector for\xa0",(0,r.jsx)(n.em,{children:"Default"}),"\xa0and\xa0",(0,r.jsx)(n.em,{children:"Inline"}),"\xa0variants to a popup, accessible by clicking the selected color box."]}),"\n",(0,r.jsx)(n.li,{children:"Updated set of entities that appear within the Editor picker"}),"\n",(0,r.jsx)(n.li,{children:"Updated set of blocks that appear within the Editor picker"}),"\n",(0,r.jsx)(n.li,{children:'Introduced a new filter "is_navigating" that checks to see if the entity is currently pathfinding. This requires a "minecraft:navigation" component'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated schema documentation for Filter Groups"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},99694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/20/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/20/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/20/21",slug:"/changelog_source/preview/1.21/20/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/20/21/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/20/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},93302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(18228),a=t(19365);const o={},l=void 0,c={id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){const n={div:"div",h2:"h2",...(0,i.R)(),...e.components};return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"Technical Update",children:e.techChangelog}),(0,r.jsx)(a.A,{value:"Full Changelog",children:(0,r.jsxs)(n.div,{children:[(0,r.jsx)(n.h2,{className:"changelog_divider",children:"Gameplay Update"}),e.gameplayChangelog,(0,r.jsx)(n.h2,{className:"changelog_divider",children:"Technical Update"}),e.techChangelog]})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(18228),a=t(19365);const o={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(a.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},46711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(74848),i=t(28453),s=t(93302),a=t(40542),o=t(24410);const l={sidebar_position:99999712,title:"1.21.20.21",tags:["Official","Changelog","Preview","1.21"]},c="Minecraft Beta & Preview - 1.21.20.21",d={id:"official_changelog/preview/1.21/20/21",title:"1.21.20.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.21/20/21.mdx",sourceDirName:"official_changelog/preview/1.21/20",slug:"/official_changelog/preview/1.21/20/21",permalink:"/en/docs/official_changelog/preview/1.21/20/21",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.21/20/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.21",permalink:"/en/docs/tags/1-21"}],version:"current",sidebarPosition:99999712,frontMatter:{sidebar_position:99999712,title:"1.21.20.21",tags:["Official","Changelog","Preview","1.21"]},sidebar:"changelogSidebar",previous:{title:"1.21.20.22",permalink:"/en/docs/official_changelog/preview/1.21/20/22"},next:{title:"1.21.10.24",permalink:"/en/docs/official_changelog/preview/1.21/10/24"}},h={},u=[...s.toc];function p(e){const n={h1:"h1",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"minecraft-beta--preview---1212021",children:"Minecraft Beta & Preview - 1.21.20.21"}),"\n",(0,r.jsx)(s.default,{gameplayChangelog:(0,r.jsx)(a.default,{}),techChangelog:(0,r.jsx)(o.default,{})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(34164),s=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==r&&(d(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);