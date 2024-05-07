"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99560],{47979:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(74848),r=i(28453);const o={},a=void 0,l={id:"changelog_source/preview/1.16/100/54/gameplay",title:"gameplay",description:"Posted:\xa03 September 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/54/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/54",slug:"/changelog_source/preview/1.16/100/54/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/54/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/54/gameplay.mdx",tags:[],version:"current",frontMatter:{}},t={},c=[{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Technical Changes</strong>",id:"technical-changes",level:2},{value:"<strong>minecraft.send_event Changes</strong>",id:"minecraftsend_event-changes",level:2},{value:"<strong>minecraft.summon_entity Changes</strong>",id:"minecraftsummon_entity-changes",level:2},{value:"<strong>Molang Script Expression query.spellcolor</strong>",id:"molang-script-expression-queryspellcolor",level:2},{value:"<strong>SendEventGoal</strong>",id:"sendeventgoal",level:2}];function h(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Posted:"}),"\xa03 September 2020"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"PLEASE READ before participating in the Minecraft Beta:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Joining the beta will replace your game with a work in progress version of Minecraft"}),"\n",(0,s.jsx)(n.li,{children:"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"}),"\n",(0,s.jsx)(n.li,{children:"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"}),"\n",(0,s.jsx)(n.li,{children:"Beta builds can be unstable and are not representative of final version quality"}),"\n",(0,s.jsxs)(n.li,{children:["The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,s.jsx)(n.a,{href:"https://aka.ms/JoinMCBeta",children:"aka.ms/JoinMCBeta"}),"\xa0for detailed instructions"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"performance-and-stability",children:(0,s.jsx)(n.strong,{children:"Performance and Stability"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fixed issue where the game could crash if player joined the game in a sleeping state (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-79465",children:"MCPE-79465"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Fixed a bug which would cause a crash after killing an Elder Guardian or Guardian (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-94176",children:"MCPE-94176"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Fixed a crash that could sometimes occur when using fireworks to propel elytra\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vanilla-parity",children:(0,s.jsx)(n.strong,{children:"Vanilla Parity"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It's now possible to place chains so that they are aligned horizontally\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Floor and ceiling surface generation now correctly match Java\xa0","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Soul Sand Valleys now have ceilings covered with Soul Soil and Soul Sand (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-69159",children:"MCPE-69159"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Basalt Deltas now have Basalt ceilings (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-79608",children:"MCPE-79608"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Striders with riders can now be tempted\xa0"}),"\n",(0,s.jsxs)(n.li,{children:['Piglins now drop their inventory when "zombified" (',(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-81503",children:"MCPE-81503"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Piglin Brutes now give 20xp instead of 10 when killed by player (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-94089",children:"MCPE-94089"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Allow Piglin to preserve equipment when zombified \xa0(",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-83683",children:"MCPE-83683"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Lanterns can now be placed underwater and do not pop when a water source block is placed on them"}),"\n",(0,s.jsxs)(n.li,{children:["The Piglin in Bedrock will now offer similar bartering items as it does in Java (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-92662",children:"MCPE-92662"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Soul Fire now doesn't melt snow or ice blocks (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-74901",children:"MCPE-74901"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Soul Campfires now does twice as much damage as regular campfires (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-81499",children:"MCPE-81499"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Zombified Piglin is no longer floating above the strider while riding (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-80188",children:"MCPE-80188"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Warped Fungus can now grow in Crimson Forest on Bedrock\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Piglins can no longer drop Nether Brick Blocks after bartering on Bedrock (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-74395",children:"MCPE-74395"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Baby Zoglin and Baby Hoglin now have drops after being killed by the Player"}),"\n",(0,s.jsxs)(n.li,{children:["Wither Skeletons now automatically attack Piglins and Piglin Brutes (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-65456",children:"MCPE-65456"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Hoglins will now flee from Respawn Anchors (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-71534",children:"MCPE-71534"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Iron Golems now attack Hoglins on Bedrock (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-73838",children:"MCPE-73838"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Zoglins now take damage from Healing effect and heal from Harming effect\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["If Ruined Portal chests contain glistening melon slices they no longer contain only a single melon slice (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-92675",children:"MCPE-92675"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Zombified Piglins that are jockeys on Striders now hold a Warped Fungus on a Stick\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Piglin Brutes no longer have enchanted Golden Axes to have parity with Java\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Nether Sprouts can be used in the Composter again (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-78026",children:"MCPE-78026"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Soul Speed Enchant found in chests is now limited to Bastion Remnant chests"}),"\n",(0,s.jsxs)(n.li,{children:["Netherite armour items no longer takes durability loss from player standing on magma (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-76532",children:"MCPE-76532"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Soul Campfires now drop Soul Soil instead of Charcoal when mined (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-74709",children:"MCPE-74709"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Strider health is now on parity with the Java version (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-76425",children:"MCPE-76425"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Piglins can now equip Shields, Elytra, Turtle Shells, and various Mob Heads. (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-75863",children:"MCPE-75863"}),")\xa0"]}),"\n",(0,s.jsxs)(n.li,{children:["Piglin Brutes no longer become angry from specific blocks being broken, they still always attack a player on sight though (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-94106",children:"MCPE-94106"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Zombified baby piglins now correctly display items held in their hands\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Quick crafting Piston will now work with Warped planks and Crimson planks (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-87659",children:"MCPE-87659"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Baby Hoglins now deal appropriate damage\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Piglins now spawn naturally in Nether Wastes on Peaceful difficulty\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"general",children:(0,s.jsx)(n.strong,{children:"General"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updated Splash texts and loading screen tips\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Added screen reader support to gamepad helpers on main menu\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Corrected map color representation for multiple blocks (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-19228",children:"MCPE-19228,"}),"\xa0",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-83797",children:"MCPE-83797"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Nether and Warped wart blocks are no longer in an unfolding section in the creative menu\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Totem of Undying now applies the correct effects upon dying (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-52364",children:"MCPE-52364"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Loading screen hints now have punctuation (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-85381",children:"MCPE -85381"}),")\xa0"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"gameplay",children:(0,s.jsx)(n.strong,{children:"Gameplay"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mobs can no longer power Minecarts they stand in (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-46804",children:"MCPE-46804"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Fixed a bug where the player and mobs wouldn't take damage when walking through sweet berry bushes\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Slimes can climb ladders again\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Fixed bug where ladders were not displayed in special cases when placed next to each other\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Killing mobs that have armour equipped with ranged weapons now result in armour loot (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-44408",children:"MCPE-44408"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Compass with custom name retains its name when linked to a Lodestone\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Lodestone Compasses can now be enchanted with the Curse of Vanishing using an Anvil (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-74016",children:"MCPE-74016"}),")\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Compasses with Curse of Vanishing now retain their enchantment when linked to a Lodestone\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["Slimes now spawn in slime chunks inside frozen biomes (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-49303",children:"MCPE-49303"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Iron pickaxe can now be dropped during raids (",(0,s.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-44417",children:"MCPE-44417"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Brown and Red Mushrooms can now be grown into huge mushrooms on Nylium\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Crimson and warped fungus can now be placed on Mycelium\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"graphical",children:(0,s.jsx)(n.strong,{children:"Graphical"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Striders now have a separate texture mapping for each leg, and their leg textures are properly mirrored\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Created an updated biomes_client.json file for 1.16.100 that links each biome to a fog definition identifier"}),"\n",(0,s.jsx)(n.li,{children:"Created /fog command for managing active fog settings for players; these fog settings override fog driven from the client such as biome location of player camera\xa0"}),"\n",(0,s.jsx)(n.li,{children:'Created a json file for each fog definition which contains the new "fog_start", "fog_end", "fog_color", and "render_distance_type" settings for parity with previous data and hardcoded values\xa0'}),"\n",(0,s.jsx)(n.li,{children:'Added child object "volumetric" which contains "density" and "media_coefficients" objects. These hold the data values used for the volumetric fog\xa0'}),"\n",(0,s.jsx)(n.li,{children:"This beta includes Render Dragon on W10\xa0"}),"\n",(0,s.jsxs)(n.li,{children:["This beta includes OpenXR for W10 VR\xa0","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"While we are in the process of reworking the VR part of the codebase to work with RenderDragon, there will be optimizations that have not yet been ported to the new rendering system. Until we have finished, you may encounter performance differences in various gameplay scenarios, but we are excited to make this transition and bring you even more improvements in the future"}),"\n",(0,s.jsx)(n.li,{children:"For W10 VR, the input work is still in progress, including for mouse input"}),"\n",(0,s.jsx)(n.li,{children:"Oculus players may experience issues with suspending and resuming the game\xa0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"technical-changes",children:(0,s.jsx)(n.strong,{children:"Technical Changes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The MoveToLiquidGoal has been changed to use data for its target block\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Striders now correctly executes the move_to_liquid goal\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"minecraftsend_event-changes",children:(0,s.jsxs)(n.strong,{children:["minecraft",":behavior",".send_event Changes"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["minecraft",":behavior",".send_event no longer uses -1 in max_activation_range as a value to indicate unlimited range, the default has been changed to 32\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Added content log warnings for when min_activation_range and max_activation_range is less than 0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Added content log warnings for when min_activation_range is greater than max_activation_range\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"minecraftsummon_entity-changes",children:(0,s.jsxs)(n.strong,{children:["minecraft",":behavior",".summon_entity Changes"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["minecraft",":behavior",".summon_entity no longer uses -1 in max_activation_range as a value to indicate unlimited range, the default has been changed to 32\xa0"]}),"\n",(0,s.jsx)(n.li,{children:"Added content log warnings for when min_activation_range and max_activation_range is less than 0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Added content log warnings for when min_activation_range is greater than max_activation_range\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"molang-script-expression-queryspellcolor",children:(0,s.jsx)(n.strong,{children:"Molang Script Expression query.spellcolor"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed a difference with the default return type of the script function, which differed from the usual return type\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sendeventgoal",children:(0,s.jsx)(n.strong,{children:"SendEventGoal"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed a crash that could occur if the SendEventGoal is defined with incomplete json fields\xa0"}),"\n",(0,s.jsx)(n.li,{children:"Fixed a crash that could occur if a SendEventGoal stage is defined with a delay of 0"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);