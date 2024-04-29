"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94557,64137,81513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",f,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},8418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.2/3/gameplay",id:"changelog_source/stable/1.2/3/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.2/3/gameplay.mdx",sourceDirName:"changelog_source/stable/1.2/3",slug:"/changelog_source/stable/1.2/3/gameplay",permalink:"/en/docs/changelog_source/stable/1.2/3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.2/3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>New Marketplace Content:</strong>",id:"new-marketplace-content",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a button to join a Realm using an invite code on the Friends tab, for platforms that can't click on Realms invite links")),(0,r.kt)("h2",{id:"new-marketplace-content"},(0,r.kt)("strong",{parentName:"h2"},"New Marketplace Content:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adventure Maps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Block & Seek by Polymaps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dr. Splice\u2019s Lab Escape by 57Digital")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mystery Lands: Scary Chunks by Pathway Studios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Cube Theater by Qwertyuiopthepie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Haunted Neighborhood by PixelHeads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Worlds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fall Fest by Blockception")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FightMe! By Pathway Studios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Land's End by Blockworks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SkyFair by Blockworks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Skin Packs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boo! by 57Digital")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cute But Spoopy by Eneija")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Onsie by Eneija")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Boo Crew by Razzleberries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lucha Libre by 57Digital")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spookfest by Irish")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sci-Fi Horror by Pathway Studios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Space Crew by InPvP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spooky Skeleton by Blockception"))),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pressing the A button on the Creative inventory will now place one item in the inventory, not a full stack. Pressing the Y button will place a full stack and X will clear the hotbar in Creative mode")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS render distance is no longer limited to 6 chunks on higher memory devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed an exploit that allowed child accounts to join servers when multiplayer permissions were disabled"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when the game was suspended (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred if a player with blocked multiplayer privileges was in a world and accepted an invite from another player (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when closing the skin picker"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when loading world chunks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when using the crafting screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when going through a Nether portal and then using a piston"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when crafting items while a split-screen player joined (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when pressing OK on the disconnect message after suspending and resuming the game (iOS only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred with Iron Golems on converted worlds"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when using the '/fill' command that caused to many spawned entities to fall"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when using uppercase letters in '/gamerule' commands"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on low memory iOS devices"),(0,r.kt)("li",{parentName:"ul"},"The game will no longer freeze if a second player joins with split-screen while the first player controller is disconnected (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Decreased the sensitivity of placing blocks"),(0,r.kt)("li",{parentName:"ul"},"The 'Sniper Duel' achievement is now unlockable (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"The 'Inception' achievement in now unlockable on all platforms"),(0,r.kt)("li",{parentName:"ul"},"Fixed an exploit that caused rails to be duplicated"),(0,r.kt)("li",{parentName:"ul"},"Fixed an exploit that caused Shulker boxes to be duplicated when broken by an explosion"),(0,r.kt)("li",{parentName:"ul"},"The Sign screen can now be closed if the cursor has been moved to the third line (iOS only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed worlds that were created on Xbox One not opening after being downloaded to another platform from Realms"),(0,r.kt)("li",{parentName:"ul"},"Fire Resistance effect will now properly protect players after quitting and rejoining a world"),(0,r.kt)("li",{parentName:"ul"},"The virtual keyboard no longer opens and can't be closed when opening Host Options (Fire TV only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed torches and other light sources giving off very little light when Smooth Lighting was enabled"),(0,r.kt)("li",{parentName:"ul"},"Attacking or mining with an enchanted book will no longer apply the book's enchantment"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer be targeted by mobs before loading into a world or dimension"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue causing transparency issues on several skins"),(0,r.kt)("li",{parentName:"ul"},"Pressing the A button no longer cancels Elytra flight and will now make the player ascend"),(0,r.kt)("li",{parentName:"ul"},"Players will no longer cease climbing stairs and slabs while flying"),(0,r.kt)("li",{parentName:"ul"},"Fixed Iron Golems not causing enough Knockback effect"),(0,r.kt)("li",{parentName:"ul"},"Servers will no longer briefly appear on the Friends tab"),(0,r.kt)("li",{parentName:"ul"},"Heavy blocks no longer break when falling on leaf blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed the texture offset of Mooshroom's udder layer"),(0,r.kt)("li",{parentName:"ul"},"Cobweb will now drop as an item when cut with shears"),(0,r.kt)("li",{parentName:"ul"},"Sheep no longer emit two sounds when dying"),(0,r.kt)("li",{parentName:"ul"},"Food particles now appear when feeding animals"),(0,r.kt)("li",{parentName:"ul"},"Items renamed in an anvil that have been placed will now retain their names after being mined"),(0,r.kt)("li",{parentName:"ul"},"Several improvements to handling split-screen controller assignments (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"The game will no longer accept input from the previous controller after changing controllers while the game is suspended (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Split-screen players are now correctly assigned\xa0after their\xa0controllers are disconnected and reconnect in\xa0a different\xa0order (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed Guardians not spawning in Ocean Monuments"),(0,r.kt)("li",{parentName:"ul"},"Leaves that have snow over them will no longer appear black"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause chat to freeze if there was a high amount of chat output"),(0,r.kt)("li",{parentName:"ul"},"Skulls can now be placed on the ground when a layer of snow is already there"),(0,r.kt)("li",{parentName:"ul"},"Endermen now take damage in filled cauldrons"),(0,r.kt)("li",{parentName:"ul"},"Doors, Wooden Buttons, Ladders and Fishing Rods can now be used as fuel in a Furnace"),(0,r.kt)("li",{parentName:"ul"},"Fixed some vines being destroyed when pressing right-click"),(0,r.kt)("li",{parentName:"ul"},"Fixed an incorrect controller tooltip when moving an item in the Creative inventory over the hotbar"),(0,r.kt)("li",{parentName:"ul"},"All mobs can now be spawned on water by players"),(0,r.kt)("li",{parentName:"ul"},"It's now easier to see the texture animation of flowing water"),(0,r.kt)("li",{parentName:"ul"},"Spider and Endermen eyes are now slightly visible when hit with invisibility potions"),(0,r.kt)("li",{parentName:"ul"},"Fixed no sound when filling a bottle with Dragon's Breath"),(0,r.kt)("li",{parentName:"ul"},'""Elytra Wings"" are now referred to simply as ""Elytra""'),(0,r.kt)("li",{parentName:"ul"},"Players with Fire Resistance will now receive damage from lightning"),(0,r.kt)("li",{parentName:"ul"},"Fixed a constant green highlight on the inventory screen of tamable mobs"),(0,r.kt)("li",{parentName:"ul"},"Pumpkins and mob heads can now be equipped directly from the Creative inventory on Pocket UI"),(0,r.kt)("li",{parentName:"ul"},"When placing layered snow, only one block will now be taken from the inventory"),(0,r.kt)("li",{parentName:"ul"},"Flint and Steel no longer takes damage when hitting mobs"),(0,r.kt)("li",{parentName:"ul"},"Using Pick Block on giant mushrooms will no longer give unobtainable mushroom blocks"),(0,r.kt)("li",{parentName:"ul"},"Arrows that are picked up will now join an existing stack in the offhand slot, not creating a separate stack"),(0,r.kt)("li",{parentName:"ul"},"Minecarts and boats can no longer be destroyed by Ender Pearls"),(0,r.kt)("li",{parentName:"ul"},"Door and fence gates can now be placed on dirt path blocks"),(0,r.kt)("li",{parentName:"ul"},"Items moving in flowing water will no longer have jittery movement"),(0,r.kt)("li",{parentName:"ul"},"Dead bushes can now be replaced when placing blocks and items"),(0,r.kt)("li",{parentName:"ul"},"Decreased the hitbox size on crops"),(0,r.kt)("li",{parentName:"ul"},"The hitbox size of Nether Wart will now increase as it grows"),(0,r.kt)("li",{parentName:"ul"},"Increased the distance that the Enchantment Table book will open when a player approaches it"),(0,r.kt)("li",{parentName:"ul"},"Runes no longer float from bookshelves to the Enchantment Table at the same time"),(0,r.kt)("li",{parentName:"ul"},"Fixed graphical issues with the experience bar when the Candy Texture Pack is applied"),(0,r.kt)("li",{parentName:"ul"},"Banners will now wave when daylight cycle is disabled"),(0,r.kt)("li",{parentName:"ul"},"Light Gray Shulker Boxes now have the proper name"),(0,r.kt)("li",{parentName:"ul"},"Shulker Boxes now only give a full Redstone signal when filled with 27 full item stacks"),(0,r.kt)("li",{parentName:"ul"},"Top snow is now destroyed immediately after\xa0placing water or lava over it"),(0,r.kt)("li",{parentName:"ul"},"Food particles no longer come out of players' foreheads"),(0,r.kt)("li",{parentName:"ul"},"Crafting and container screens now close when a player takes from another player or mob"),(0,r.kt)("li",{parentName:"ul"},"It is no longer possible for players to place a block in the same space they are sneaking, causing them to fall"),(0,r.kt)("li",{parentName:"ul"},"Uncraftable and unobtainable items no longer appear in the Recipe Book in Survival mode"),(0,r.kt)("li",{parentName:"ul"},'The tooltip for Stone variants in the Recipe Book now properly show they\'re in the ""Nature"" category'),(0,r.kt)("li",{parentName:"ul"},"Split-screen GUI Scale is now saved separately from Fullscreen GUI Scale (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Mooshroom now displays a particle effect when sheared"),(0,r.kt)("li",{parentName:"ul"},"Eating and drinking animations are now visible when a player is seen from third-person view while under the invisibility status effect"),(0,r.kt)("li",{parentName:"ul"},"Additional Map items are no longer lost when more than one Map is placed in an Anvil\u2019s input slot while creating a Locator Map"),(0,r.kt)("li",{parentName:"ul"},"Fixed player's camera Y-value from flickering up/down when the player teleports"),(0,r.kt)("li",{parentName:"ul"},'Fixed ""Custom"" skin name appearing as placeholder text on player skin change notifications'),(0,r.kt)("li",{parentName:"ul"},"Fixed the left leg being rotated the wrong way on armor stand poses"),(0,r.kt)("li",{parentName:"ul"},"Items replaced by a command are now visible instantly in the inventory"),(0,r.kt)("li",{parentName:"ul"},'The ""Choose Skin"" text no longer flickers on the Skin Picker (Android only)'),(0,r.kt)("li",{parentName:"ul"},"Scroll bars in menus no longer jitter when using the right stick to scroll"),(0,r.kt)("li",{parentName:"ul"},"Fixed low-speed movement occurring after controller thumbstick is released (VR only)"),(0,r.kt)("li",{parentName:"ul"},"When pressing tab to complete a command, the choices are now sorted correctly"),(0,r.kt)("li",{parentName:"ul"},"Adding a 'damage","_","sensor' to an entity type no longer prevents '/kill' from working")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},22825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),o=a(8418);const i={sidebar_position:99999990,title:"1.2.3",tags:["Official","Changelog","Stable","1.2"]},s="Minecraft - 1.2.3 (Bedrock)",c={unversionedId:"official_changelog/stable/1.2/3",id:"official_changelog/stable/1.2/3",title:"1.2.3",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.2/3.mdx",sourceDirName:"official_changelog/stable/1.2",slug:"/official_changelog/stable/1.2/3",permalink:"/en/docs/official_changelog/stable/1.2/3",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.2/3.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.2",permalink:"/en/docs/tags/1-2"}],version:"current",sidebarPosition:99999990,frontMatter:{sidebar_position:99999990,title:"1.2.3",tags:["Official","Changelog","Stable","1.2"]},sidebar:"changelogSidebar",previous:{title:"1.2.5",permalink:"/en/docs/official_changelog/stable/1.2/5"},next:{title:"1.2.2",permalink:"/en/docs/official_changelog/stable/1.2/2"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---123-bedrock"},"Minecraft - 1.2.3 (Bedrock)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);