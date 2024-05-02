"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69852,64137,93682],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=l,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var k=a(72389);const w="tabList_TRJ7",f="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},o,{className:(0,r.Z)("tabs__item",f,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?l.createElement("div",{className:"w-full"},p):void 0)}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",w)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return l.createElement(N,(0,n.Z)({key:String(t)},e))}},41112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={},o=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,l.kt)("h2",{id:"new-features"},(0,l.kt)("strong",{parentName:"h2"},"New Features:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Llamas")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shulker Boxes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Illagers (Evokers & Vindicators)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vex")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Woodland Mansions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Concrete & concrete powder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Glazed terracotta blocks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dyeable beds (and you can jump on them, too!)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Iron and Gold tools can now be smelted into Iron Nuggets and Gold Nuggets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adventure Mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New game rules: DoFireTick, DoMobSpawning, DoTileDrops, MobGriefing, DoEntityDrops, KeepInventory, DoMobLoot, DoDaylightCycle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Totem of Undying")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Off-hand slot (only works for arrows & the Totem of Undying)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mending & Frostwalking enchantments")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added a setting to toggle Smooth Lighting"))),(0,l.kt)("h2",{id:"tweaks"},(0,l.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Changes in world generation. Seeds which contain pre-generated structures such as ocean monuments & igloos may generate those structures in different places now."),(0,l.kt)("li",{parentName:"ul"},"CanPlaceOn & CanDestroy are now supported in the '/replaceitem' command"),(0,l.kt)("li",{parentName:"ul"},"Dampened the vertical look speed when using a controller"),(0,l.kt)("li",{parentName:"ul"},"Improved navigation of the settings screen when using a controller"),(0,l.kt)("li",{parentName:"ul"},"The X button can now be used to clear the hotbar on the Creative inventory screen when using a controller"),(0,l.kt)("li",{parentName:"ul"},"Improved controller input when selecting items on the Creative inventory screen"),(0,l.kt)("li",{parentName:"ul"},"Maps are now numbered so you can tell which map is which!"),(0,l.kt)("li",{parentName:"ul"},"Empty Maps with Compasses have been renamed to Locator Maps to distinguish between Empty Maps without Compasses"),(0,l.kt)("li",{parentName:"ul"},"New sleeping animation slowly lowers you into serene slumber"),(0,l.kt)("li",{parentName:"ul"},"Updated color palette for wool blocks and carpet"),(0,l.kt)("li",{parentName:"ul"},"Improved lead rope physics!"),(0,l.kt)("li",{parentName:"ul"},"Cave Spiders now attack with poison time based on difficulty"),(0,l.kt)("li",{parentName:"ul"},"Worlds will now show a screenshot in the main menu"),(0,l.kt)("li",{parentName:"ul"},"Eating animation can now be seen in third-person camera"),(0,l.kt)("li",{parentName:"ul"},"/locate command will now find more structures")),(0,l.kt)("h2",{id:"bug-fixes"},(0,l.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when importing certain resource packs"),(0,l.kt)("li",{parentName:"ul"},"Players can now see particles after other players fall from over three blocks high"),(0,l.kt)("li",{parentName:"ul"},"Leads no longer float above rabbits' heads"),(0,l.kt)("li",{parentName:"ul"},"Fixed special characters on signs being visible through walls"),(0,l.kt)("li",{parentName:"ul"},"Horses now make sounds when they jump! Neeeeigh!"),(0,l.kt)("li",{parentName:"ul"},"Fixed pressure plates and other Redstone items staying pressed when the player leaves the chunks"),(0,l.kt)("li",{parentName:"ul"},"Fixed Redstone that is placed below and beside a piston appear to connect to the piston"),(0,l.kt)("li",{parentName:"ul"},"Fixed Hoppers not pulling items from above if all slots were occupied"),(0,l.kt)("li",{parentName:"ul"},"The host and other players no longer get disconnected from the game session when the host minimizes the game (iOS only)"),(0,l.kt)("li",{parentName:"ul"},"Finally fixed the bug with MCPE not starting on some Android devices (Thank you, Tomas A!)"),(0,l.kt)("li",{parentName:"ul"},"Items shot from droppers and dispensers can now be picked up quickly"),(0,l.kt)("li",{parentName:"ul"},"Players can no longer place top slabs under them while standing on a bottom slab, preventing falling"),(0,l.kt)("li",{parentName:"ul"},"Fixed lava flowing too far in the Nether"),(0,l.kt)("li",{parentName:"ul"},"Shulkers will teleport away when placed on top of a piston"),(0,l.kt)("li",{parentName:"ul"},"Shulkers will no longer drop experience orbs after being killed using the /kill command"),(0,l.kt)("li",{parentName:"ul"},"Fixed Shulkers that are spawned with a dispenser under a top slab"),(0,l.kt)("li",{parentName:"ul"},"Mobs can now see players through non-solid blocks. No more hiding from Creepers in sugar cane!"),(0,l.kt)("li",{parentName:"ul"},"Fixed some shading/shadow issues with some Android devices (Xoom/Tegra2, we're looking at you!)"),(0,l.kt)("li",{parentName:"ul"},"Fixed mob spawning so it is now modified by the number of players in the game and where they are located in proximity to other players"),(0,l.kt)("li",{parentName:"ul"},"Fixed some issues with hit detections against entities"),(0,l.kt)("li",{parentName:"ul"},"You can now use whisper-like commands (/tell, /w, /message) on dead players"),(0,l.kt)("li",{parentName:"ul"},"Maps can again be zoomed out in the crafting table"),(0,l.kt)("li",{parentName:"ul"},"Green arrows no longer appear on all framed maps"),(0,l.kt)("li",{parentName:"ul"},"Green arrows are no longer left on the map after it is removed from an item frame"),(0,l.kt)("li",{parentName:"ul"},"Splash/lingering potions can now go into brewing stands from a hopper"),(0,l.kt)("li",{parentName:"ul"},"Creepers no longer sometimes get stuck inflating when a player hits it & then moves back"),(0,l.kt)("li",{parentName:"ul"},"The End Rod will now be greyed out in the Pocket UI crafting table if the player is lacking the necessary ingredients"),(0,l.kt)("li",{parentName:"ul"},"/stopsound & /playsound now name all players affected by those commands"),(0,l.kt)("li",{parentName:"ul"},'Fixed an issue when attempting to activate ""Wheel Turning"" in VR options (VR only)'),(0,l.kt)("li",{parentName:"ul"},"Pressing the tab key now finishes the typed command properly (Rift only)"),(0,l.kt)("li",{parentName:"ul"},"Renamed blocks/containers now have their names changed in menus/inventory"),(0,l.kt)("li",{parentName:"ul"},"Fixed some crashes when importing Add-ons"),(0,l.kt)("li",{parentName:"ul"},"Smite enchantment now affects all undead mobs"),(0,l.kt)("li",{parentName:"ul"},"Mobs that are lifted up by Shulker projectiles will now be shown lifting up properly"),(0,l.kt)("li",{parentName:"ul"},"Breaking a Shulker projectile will now show the effect"),(0,l.kt)("li",{parentName:"ul"},"Starting a sign message with \xa7\xa7 will no longer make the text invisible"),(0,l.kt)("li",{parentName:"ul"},"Elytra will now lose durability in Survival multiplayer games"),(0,l.kt)("li",{parentName:"ul"},"Mooshrooms will now respawn on mushroom islands"),(0,l.kt)("li",{parentName:"ul"},"Experience orbs no longer splash when they fall in water"),(0,l.kt)("li",{parentName:"ul"},"Having one spawn egg in Peaceful Creative mode will no longer consume the egg"),(0,l.kt)("li",{parentName:"ul"},"Crops will no longer yield a fixed amount after harvesting"),(0,l.kt)("li",{parentName:"ul"},"Click ","[","MMB","]"," on a flower pot containing a flower will now select the flower"),(0,l.kt)("li",{parentName:"ul"},"Adjusted the color of several blocks on maps"),(0,l.kt)("li",{parentName:"ul"},"Maps created in the Nether will now show red and gray patterns, not just gray"),(0,l.kt)("li",{parentName:"ul"},"Shulkers will no longer immediately attack when a player leaves cover"),(0,l.kt)("li",{parentName:"ul"},"Trees and giant mushrooms will no longer be missing blocks when spawned on the edge of a chunk"),(0,l.kt)("li",{parentName:"ul"},"The Wither will now play sound during its spawning animation"),(0,l.kt)("li",{parentName:"ul"},"/clear command now removes equipped armor"),(0,l.kt)("li",{parentName:"ul"},'No more ""crazy mouse"" - sensitivity should be correct now'),(0,l.kt)("li",{parentName:"ul"},"Ender Dragon's ender charge attack now has correct sound"),(0,l.kt)("li",{parentName:"ul"},"Cracking animation & particles now display correctly in multiplayer"),(0,l.kt)("li",{parentName:"ul"},"Fixed a start-up crash on some Android devices"),(0,l.kt)("li",{parentName:"ul"},"Player markers on a map no longer turn black and are left on the map after another player disconnects"),(0,l.kt)("li",{parentName:"ul"},"You no longer lose all your text to the right if you move your text cursor to the middle of the text box and press enter"),(0,l.kt)("li",{parentName:"ul"},"Covering a roof of a spawn chamber with half-slabs no longer severely reduces the mob spawn rate"),(0,l.kt)("li",{parentName:"ul"},"Items can again be pushed under an upper half-slab"),(0,l.kt)("li",{parentName:"ul"},"Virtual keyboard is now available in single player (Gear VR only)"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when feeding adult animals to breed them with only one food item in a stack"),(0,l.kt)("li",{parentName:"ul"},"Feeding a tamed wolf will now restore the correct amount of health, depending on the type of meat used"),(0,l.kt)("li",{parentName:"ul"},'Dates of save games are now the proper format of ""day/month/year"" for Dutch language settings'),(0,l.kt)("li",{parentName:"ul"},"Polar bears no longer deal damage on Peaceful"),(0,l.kt)("li",{parentName:"ul"},"Donkeys and mules can no longer be tempted with food until they are tamed"),(0,l.kt)("li",{parentName:"ul"},"Lava buckets that are in a furnace's fuel slot will no longer turn into a water bucket when a wet sponge has finished drying"),(0,l.kt)("li",{parentName:"ul"},"Players no longer suffocate when the DrowingDamage gamerule is disabled"),(0,l.kt)("li",{parentName:"ul"},"Various mobs inside monster spawners will no longer be huge"),(0,l.kt)("li",{parentName:"ul"},"Fixed texture issues on anvils"),(0,l.kt)("li",{parentName:"ul"},"Fixed a graphical glitch when sand is falling"),(0,l.kt)("li",{parentName:"ul"},"FoV will now increase while sprinting and flying when FoV is set to max setting"),(0,l.kt)("li",{parentName:"ul"},"Fixed large oak trees spawning with birch wood"),(0,l.kt)("li",{parentName:"ul"},"Iron Golems will no longer attack a player after they are killed by the Iron Golem"),(0,l.kt)("li",{parentName:"ul"},"Particles now appear behind arrows when seeing another player shoot arrows"),(0,l.kt)("li",{parentName:"ul"},"Shearing a Mooshroom that is attached to a lead will no longer remove the lead"),(0,l.kt)("li",{parentName:"ul"},"Chicken jockeys will now walk with the speed of a baby zombie"),(0,l.kt)("li",{parentName:"ul"},"Mobs spinning in a monster spawner will no longer stutter"),(0,l.kt)("li",{parentName:"ul"},"Blazes will now stop burning after they stop targeting a player"),(0,l.kt)("li",{parentName:"ul"},"Blazes now perform melee attacks with the right damage"),(0,l.kt)("li",{parentName:"ul"},"Skeleton horses and zombie horses now drop the proper amount of bones or rotten flesh"),(0,l.kt)("li",{parentName:"ul"},"The panoramic image view for mash-up packs in the store can now be scrolled using a controller"),(0,l.kt)("li",{parentName:"ul"},"Farmland and crops are now destroyed when players jump on them"),(0,l.kt)("li",{parentName:"ul"},"Fixed the vignette at the edges of the screen in The End"),(0,l.kt)("li",{parentName:"ul"},"Items thrown by players no longer carry the player's momentum"),(0,l.kt)("li",{parentName:"ul"},"Conditional/Unconditional setting for Command Blocks will now copy when using ","[","Ctrl","]"," + ","[","MMB","]"),(0,l.kt)("li",{parentName:"ul"},"Fixed textures on the bottom of lead knots"),(0,l.kt)("li",{parentName:"ul"},"Fixed the height view distance when Beautiful Skies is enabled"),(0,l.kt)("li",{parentName:"ul"},"High-jumping horses will no longer take damage when they jump and land from the same height"),(0,l.kt)("li",{parentName:"ul"},"Mobs can no longer spawn on top of slabs"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when interacting with skulls"),(0,l.kt)("li",{parentName:"ul"},"Mobs from the overworld will no longer spawn in The End"),(0,l.kt)("li",{parentName:"ul"},"Fixed falling blocks breaking and duplicating when falling onto pistons"),(0,l.kt)("li",{parentName:"ul"},"Armor Items are now equipped to mobs when dispensed"),(0,l.kt)("li",{parentName:"ul"},"Several Redstone components like buttons and levers can be now placed on top of fences and walls"),(0,l.kt)("li",{parentName:"ul"},"Color gradients of grass blocks no longer appear as large-square patterns"),(0,l.kt)("li",{parentName:"ul"},"Rails can no longer be duplicated using sticky pistons"),(0,l.kt)("li",{parentName:"ul"},"Fixed resource packs failing to import if there are colors in the name of the pack"),(0,l.kt)("li",{parentName:"ul"},"Fixed sounds with a variety of items"),(0,l.kt)("li",{parentName:"ul"},"Rain will no longer fill cauldrons with the last potion it was filled with"),(0,l.kt)("li",{parentName:"ul"},"Boats can now be broken when occupied by a horse"),(0,l.kt)("li",{parentName:"ul"},"Skulls will no longer be invisible when spawned with the /fill command"),(0,l.kt)("li",{parentName:"ul"},"Using the '/time query' command now returns more descriptive messages"),(0,l.kt)("li",{parentName:"ul"},"Fixed the consistency of death messages for all players when falling into the void"),(0,l.kt)("li",{parentName:"ul"},"The progress of brewing stands will now copy when using ","[","Ctrl","]"," + ","[","MMB","]"),(0,l.kt)("li",{parentName:"ul"},'Enchanted golden apples are now called ""Enchanted Apples""'),(0,l.kt)("li",{parentName:"ul"},"Executing an unfinished command now updates the chat with 'invalid command syntax' message"),(0,l.kt)("li",{parentName:"ul"},"Items can now be enchanted with the Unbreaking effect using the '/enchant' command"),(0,l.kt)("li",{parentName:"ul"},"An error message now appears when using the '/replaceitem' command with non-existent slot number or exceeds an item stack's boundaries"),(0,l.kt)("li",{parentName:"ul"},"Only the appropriate armor can be placed in each armor slot using the '/replaceitem' command"),(0,l.kt)("li",{parentName:"ul"},"Horses can no longer be equipped with any item in the saddle slot by using the '/replaceitem' command"),(0,l.kt)("li",{parentName:"ul"},"The correct error message is now shown for import failures of a non-ZIP Add-On files"),(0,l.kt)("li",{parentName:"ul"},"Sugar cane can once again be planted on podzol blocks"),(0,l.kt)("li",{parentName:"ul"},"The elder guardian's special attack to inflict mining fatigue will now play sound"),(0,l.kt)("li",{parentName:"ul"},"Baby Zombies, Baby Zombie Villagers, Baby Zombie Pigmen and Endermites will now attack players standing in fence corners"),(0,l.kt)("li",{parentName:"ul"},"Fixed Zombie villager transformation rate depending on difficulty"),(0,l.kt)("li",{parentName:"ul"},"Saplings that grow into trees will no longer replace other blocks with leaves"),(0,l.kt)("li",{parentName:"ul"},"The Wither's shield will now block all projectiles"),(0,l.kt)("li",{parentName:"ul"},"Fixed recipes containing charcoal that could not be selected in the Pocket UI when using a controller and coal was also in the player's inventory"),(0,l.kt)("li",{parentName:"ul"},"When using the '/replaceitem' command, all chat messages after the command is executed will display the proper item name"),(0,l.kt)("li",{parentName:"ul"},"Ice and packed ice are now properly destroyed in Creative mode"),(0,l.kt)("li",{parentName:"ul"},"Beacon beams now appear through clouds"),(0,l.kt)("li",{parentName:"ul"},"Mobs will no longer get stuck and spin around on top of chests"),(0,l.kt)("li",{parentName:"ul"},"Using the '/give' command with a damage value will now give the item the right durability"),(0,l.kt)("li",{parentName:"ul"},"The error message for too much power used in the '/effect' command now shows the amount of power, not time"),(0,l.kt)("li",{parentName:"ul"},'Fixed items received from the ""/replaceitem"" command, when executed after \'/clear\', not being visible until the inventory was opened'),(0,l.kt)("li",{parentName:"ul"},"The jump button will no longer disappear from the touch pad when pressing Fly Up and Fly Down buttons"),(0,l.kt)("li",{parentName:"ul"},"Fixed the throwing rate of snowballs to be consistent with the host of a game session"),(0,l.kt)("li",{parentName:"ul"},"Command blocks will now show all lines in the Previous Output field"),(0,l.kt)("li",{parentName:"ul"},"Fixed players having no sound when joining an Xbox Live game")))}c.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(31792),o=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,l.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},16506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(88247),o=a(41112);const i={sidebar_position:99999967,title:"MCPE Android Beta - 1.1 Build 1",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE Android Beta - 1.1 Build 1",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README",title:"MCPE Android Beta - 1.1 Build 1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999967,frontMatter:{sidebar_position:99999967,title:"MCPE Android Beta - 1.1 Build 1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.1 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_2/"},next:{title:"MCPE Android Beta - 1.0.6",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.6/"}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mcpe-android-beta---11-build-1"},"MCPE Android Beta - 1.1 Build 1"),(0,l.kt)(r.default,{gameplayChangelog:(0,l.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);