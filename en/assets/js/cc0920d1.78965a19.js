"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51435],{85014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=s(74848),r=s(28453);const t={},o=void 0,l={id:"changelog_source/preview/1.19.80.20/gameplay",title:"gameplay",description:"Experimental Features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.80.20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19.80.20",slug:"/changelog_source/preview/1.19.80.20/gameplay",permalink:"/en/docs/changelog_source/preview/1.19.80.20/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.80.20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},a={},h=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Cherry Grove</strong>",id:"cherry-grove",level:3},{value:"<strong>Decorated Pot</strong>",id:"decorated-pot",level:3},{value:"<strong>Brush</strong>",id:"brush",level:3},{value:"<strong>Suspicious Sand</strong>",id:"suspicious-sand",level:3},{value:"<strong>Camel</strong>",id:"camel",level:3},{value:"<strong>1.5 Sneak</strong>",id:"15-sneak",level:3},{value:"<strong>Features and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Gameplay</strong>",id:"gameplay",level:3},{value:"<strong>General</strong>",id:"general",level:3},{value:"<strong>Graphical</strong>",id:"graphical",level:3},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:3},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:3},{value:"<strong>User Interface</strong>",id:"user-interface",level:3},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:3},{value:"<strong>Commands</strong>",id:"commands",level:3}];function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"experimental-features",children:(0,i.jsx)(n.strong,{children:"Experimental Features"})}),"\n",(0,i.jsx)(n.h3,{id:"cherry-grove",children:(0,i.jsx)(n.strong,{children:"Cherry Grove"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introducing the Cherry Grove biome, with pretty Cherry Blossom trees. You can find it in the mountains, like Meadows"}),"\n",(0,i.jsx)(n.li,{children:"It has a new flower, Pink Petals, as ground cover, which can be crafted into Pink Dye"}),"\n",(0,i.jsx)(n.li,{children:"Pigs, Rabbits, Sheep, and Bees spawn there"}),"\n",(0,i.jsx)(n.li,{children:"Comes with a new wood set for the Cherry Blossom trees"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"decorated-pot",children:(0,i.jsx)(n.strong,{children:"Decorated Pot"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Tweaked the Decorated Pot neck based on feedback (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167168",children:"MCPE-167168"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"With the former pot, we decided that the pot's neck would clip with blocks so it would be extra flexible to build with. However, we've had some Z-fighting issues which means that 2 objects are in the same exact position and this causes flickering. With this new block model we prevent that and the pot looks a little bit more complex!"}),"\n",(0,i.jsxs)(n.li,{children:["Decorated Pot no longer provides support for blocks wanting to attach to its side faces (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167165",children:"MCPE-167165"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Decorated Pot is not stackable in Inventory (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167223",children:"MCPE-167223"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Base recipe for the Decorated Pot now shows up in the Survival recipe book"}),"\n",(0,i.jsx)(n.li,{children:"Decorated Pot particle is now based on the default Decorated Pot side texture"}),"\n",(0,i.jsx)(n.li,{children:"Updated archer Pottery Shard texture"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"brush",children:(0,i.jsx)(n.strong,{children:"Brush"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Changed the Brush recipe to use a Feather, Copper Ingot, and Stick (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167619",children:"MCPE-167619"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Breaking animations now work when holding a Brush in third person view (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167183",children:"MCPE-167183"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Added a slight cooldown for particles and sounds when using the Brush item"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"suspicious-sand",children:(0,i.jsx)(n.strong,{children:"Suspicious Sand"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Suspicious Sand is no longer waterloggable (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167222",children:"MCPE-167222"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Suspicious Sand now connects to Fence blocks"}),"\n",(0,i.jsxs)(n.li,{children:["Suspicious Sand now turns into regular Sand after it's been destroyed with a Brush (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167166",children:"MCPE-167166"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Suspicious Sand now emits particles when broken by Pistons"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed an issue that caused the item inside Suspicious Sand to flicker while brushing (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167180",children:"MCPE-167180"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Additionally, blocks that were previously not emitting particles when destroyed by pistons now do! (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-109293",children:"MCPE-109293"}),", ",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-126257",children:"MCPE-126257"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"camel",children:(0,i.jsx)(n.strong,{children:"Camel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Camels now stop dashing when entering a rideable entity (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-164065",children:"MCPE-164065"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"15-sneak",children:(0,i.jsx)(n.strong,{children:"1.5 Sneak"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ability to sneak under 1.5 block gaps is now behind the Short Sneak toggle. Enable the toggle to continue to test out the feature while we continue polishing it"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features-and-bug-fixes",children:(0,i.jsx)(n.strong,{children:"Features and Bug Fixes"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Updated \u201cYou Died\u201d experience"}),"\nStarting today, we\u2019re rolling out some changes to the screen you see when you die in Minecraft. This design is available to everyone in Preview/Beta, except if you have add-ons applied. We\u2019d love to hear what you think! Please share your feedback with us ",(0,i.jsx)(n.a,{href:"https://aka.ms/MinecraftPDScreen",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://feedback.minecraft.net/hc/article_attachments/13817265642253",alt:"Mobile version of the \u201cYou died\u201d screen"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Image: Mobile version of the \u201cYou died\u201d screen."})}),"\n",(0,i.jsx)(n.p,{children:"To use the old screen instead, go to Settings -> Video, and turn off \u2018New \u201cYou Died\u201d Screen (Experimental)\u2019."}),"\n",(0,i.jsx)(n.h3,{id:"accessibility",children:(0,i.jsx)(n.strong,{children:"Accessibility"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Text-to-speech no longer reads previously selected items after moving to new one"}),"\n",(0,i.jsx)(n.li,{children:"Text-to-speech no longer gets stuck on reading accessibility tab while the user switches between different tabs"}),"\n",(0,i.jsx)(n.li,{children:"A glint strength slider that adjusts how transparent the visual glint is on enchanted items has been added to the Accessibility Settings"}),"\n",(0,i.jsx)(n.li,{children:"A glint speed slider that adjusts how fast the visual glint shimmers across enchanted items has been added to the Accessibility Settings"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"blocks",children:(0,i.jsx)(n.strong,{children:"Blocks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mangrove, Bamboo, and Polished Blackstone buttons are no longer visible on maps"}),"\n",(0,i.jsx)(n.li,{children:"Flowers are once again displayed immediately when placed inside a Flower Pot"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"gameplay",children:(0,i.jsx)(n.strong,{children:"Gameplay"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed the player moving in the wrong direction after exiting a container screen while using a gamepad (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-121565",children:"MCPE-121565"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Players can no longer sneak while flying (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-166834",children:"MCPE-166834"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed an issue where unnecessary black boxes appeared in VR while around partial blocks"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed animation transition between swimming and walking (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-166769",children:"MCPE-166769"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed a bug where command blocks could cause actors within a level chunk to freeze (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-162011",children:"MCPE-162011"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["The health boost effect will no longer fully replenish the player's health after the effect runs out (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-165434",children:"MCPE-165434"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"general",children:(0,i.jsx)(n.strong,{children:"General"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed ambient cave sounds to no longer play when the player enters or loads into The End (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-141493",children:"MCPE-141493"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Cooking Chorus Fruit in a Furnace will now generate experience (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-68127",children:"MCPE-68127"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Nether Portals can now replace blocks other than just air when being generated. This includes blocks such as Grass and Snow layers (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-162272",children:"MCPE-162272"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Light Blocks can no longer have their light levels changed in Survival or Adventure modes (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-138868",children:"MCPE-138868"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Campfire sounds are now louder and more clear (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-122296",children:"MCPE-122296"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graphical",children:(0,i.jsx)(n.strong,{children:"Graphical"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed the issue where multiple light sources (such as torches) were incorrectly emitting white light in RTX (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-166947",children:"MCPE-166947"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Boots do not z-fight anymore when worn by Player"}),"\n",(0,i.jsx)(n.li,{children:'The "leg" and "belt" parts of Leggings do not z-fight anymore when worn by Player'}),"\n",(0,i.jsxs)(n.li,{children:["Capes no longer flash red when getting damaged (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-105347",children:"MCPE-105347"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed a visible gap in Hopper model (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-55122",children:"MCPE-55122"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed alignment of the output slot of Crafting Table (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-143255",children:"MCPE-143255"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Halved the default visibility of the glint on enchanted items, which can now be modified in the Accessibility Settings (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-167814",children:"MCPE-167814"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stability-and-performance",children:(0,i.jsx)(n.strong,{children:"Stability and Performance"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed a bug where invalid Banner Patterns were causing players in render distance to crash (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-164478",children:"MCPE-164478"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"touch-controls",children:(0,i.jsx)(n.strong,{children:"Touch Controls"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed an issue where items could get stuck in the Crafting Table when using touch input"}),"\n",(0,i.jsx)(n.li,{children:"If the player is underwater and Auto-Jump is enabled, as they approach a block that is 1 level higher than the current level, they will rise. This also allows auto-jumping out of water onto land"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"user-interface",children:(0,i.jsx)(n.strong,{children:"User Interface"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added a header and title for the inventory tab in inventory screen while using Pocket UI"}),"\n",(0,i.jsx)(n.li,{children:"Increased the spacing between headers in the settings screen to increase readability"}),"\n",(0,i.jsx)(n.li,{children:"Touchpad scrolling now matches the operating system's scroll direction"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vanilla-parity",children:(0,i.jsx)(n.strong,{children:"Vanilla Parity"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Renamed and enchanted weapons are now displayed in respawn and chat windows with color when a player is killed by an entity using it (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-162679",children:"MCPE-162679"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Weighted Pressure Plates now produce the same sound as in Java Edition (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-164912",children:"MCPE-164912"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed the character limit for scoreboard objective names and objective display names (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-165064",children:"MCPE-165064"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Melons and Pumpkins can now grow onto Mud, Podzol, Rooted Dirt, and Muddy Mangrove Roots"}),"\n",(0,i.jsxs)(n.li,{children:["Nylium blocks are now grouped with Netherrack in the Creative inventory (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-163587",children:"MCPE-163587"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Armor Stands now vanish with no sound effects when killed with the /kill command (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-159136",children:"MCPE-159136"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mobs",children:(0,i.jsx)(n.strong,{children:"Mobs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mobs can now enter a Boat only if they are smaller than the Boat itself"}),"\n",(0,i.jsx)(n.li,{children:"Villagers will now generate green particles when a successful trade is completed"}),"\n",(0,i.jsx)(n.li,{children:"Mobs no longer play the player eat sound when fed breeding materials"}),"\n",(0,i.jsx)(n.li,{children:"Slightly decreased Panda collision box to match Java Edition"}),"\n",(0,i.jsx)(n.li,{children:"Slightly increased Polar Bear collision box to match Java Edition"}),"\n",(0,i.jsxs)(n.li,{children:["Turtles can now enter Boats and Boats with Chest (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-65719",children:"MCPE-65719"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Hoglins, Polar Bears, and Spiders can no longer enter Boats and Boats with Chest (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-161197",children:"MCPE-161197"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"commands",children:(0,i.jsx)(n.strong,{children:"Commands"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The /execute command will now display an appropriate error message when there is an error in the second or subsequent subcommand target selector (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-164304",children:"MCPE-164304"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Provide auto-complete support for block states"}),"\n",(0,i.jsx)(n.li,{children:"Added two new overloads to the summon command :"}),"\n",(0,i.jsx)(n.li,{children:"/summon [spawnPos : x y z] facing <position: x y z> [spawnEvent: string] [nametag: string]"}),"\n",(0,i.jsx)(n.li,{children:"/summon [spawnPos : x y z] facing <lookAtEntity: target> [spawnEvent: string] [nametag: string]"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed an issue where the paste button in the Command Block UI would remember extra presses from failed pastes (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-163705",children:"MCPE-163705"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);