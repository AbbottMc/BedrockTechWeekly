"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56484,31164,29197],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||r;return n?t.createElement(d,o(o({ref:a},p),{},{components:n})):t.createElement(d,o({ref:a},p))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:n},a)}},18228:(e,a,n)=>{n.d(a,{A:()=>v});var t=n(58168),l=n(96540),r=n(20053),o=n(23104),i=n(56347),s=n(57485),u=n(31682),p=n(89466);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function g(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??c(n);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function h(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=g(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[s,u]=d({queryString:n,groupId:t}),[c,h]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,p.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),y=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var y=n(92303);const w={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(e){let{className:a,block:n,selectedValue:i,selectValue:s,tabValues:u,rightElement:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,o.a_)(),m=e=>{const a=e.currentTarget,n=c.indexOf(a),t=u[n].value;t!==i&&(g(a),s(t))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:o}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),n??a)})),p?l.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:a,children:n,selectedValue:t}=e;if(a){const e=n.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function N(e){const a=h(e);return l.createElement("div",{className:(0,r.A)("tabs-container",w.tabList)},l.createElement(f,(0,t.A)({},e,a)),l.createElement(b,(0,t.A)({},e,a)))}function v(e){const a=(0,y.A)();return l.createElement(N,(0,t.A)({key:String(a)},e))}},64773:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=n(58168),l=(n(96540),n(15680));const r={},o=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],p={toc:u},c="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(c,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,l.yg)("h2",{id:"new-features"},(0,l.yg)("strong",{parentName:"h2"},"New Features:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Llamas")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Shulker Boxes")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Illagers (Evokers & Vindicators)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Vex")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Woodland Mansions")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Concrete & concrete powder")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Glazed terracotta blocks")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Dyeable beds (and you can jump on them, too!)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Iron and Gold tools can now be smelted into Iron Nuggets and Gold Nuggets")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Adventure Mode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"New game rules: DoFireTick, DoMobSpawning, DoTileDrops, MobGriefing, DoEntityDrops, KeepInventory, DoMobLoot, DoDaylightCycle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Totem of Undying")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Off-hand slot (only works for arrows & the Totem of Undying)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Mending & Frostwalking enchantments")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Added a setting to toggle Smooth Lighting"))),(0,l.yg)("h2",{id:"tweaks"},(0,l.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Changes in world generation. Seeds which contain pre-generated structures such as ocean monuments & igloos may generate those structures in different places now."),(0,l.yg)("li",{parentName:"ul"},"CanPlaceOn & CanDestroy are now supported in the '/replaceitem' command"),(0,l.yg)("li",{parentName:"ul"},"Dampened the vertical look speed when using a controller"),(0,l.yg)("li",{parentName:"ul"},"Improved navigation of the settings screen when using a controller"),(0,l.yg)("li",{parentName:"ul"},"The X button can now be used to clear the hotbar on the Creative inventory screen when using a controller"),(0,l.yg)("li",{parentName:"ul"},"Improved controller input when selecting items on the Creative inventory screen"),(0,l.yg)("li",{parentName:"ul"},"Maps are now numbered so you can tell which map is which!"),(0,l.yg)("li",{parentName:"ul"},"Empty Maps with Compasses have been renamed to Locator Maps to distinguish between Empty Maps without Compasses"),(0,l.yg)("li",{parentName:"ul"},"New sleeping animation slowly lowers you into serene slumber"),(0,l.yg)("li",{parentName:"ul"},"Updated color palette for wool blocks and carpet"),(0,l.yg)("li",{parentName:"ul"},"Improved lead rope physics!"),(0,l.yg)("li",{parentName:"ul"},"Cave Spiders now attack with poison time based on difficulty"),(0,l.yg)("li",{parentName:"ul"},"Worlds will now show a screenshot in the main menu"),(0,l.yg)("li",{parentName:"ul"},"Eating animation can now be seen in third-person camera"),(0,l.yg)("li",{parentName:"ul"},"/locate command will now find more structures")),(0,l.yg)("h2",{id:"bug-fixes"},(0,l.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fixed a crash when importing certain resource packs"),(0,l.yg)("li",{parentName:"ul"},"Players can now see particles after other players fall from over three blocks high"),(0,l.yg)("li",{parentName:"ul"},"Leads no longer float above rabbits' heads"),(0,l.yg)("li",{parentName:"ul"},"Fixed special characters on signs being visible through walls"),(0,l.yg)("li",{parentName:"ul"},"Horses now make sounds when they jump! Neeeeigh!"),(0,l.yg)("li",{parentName:"ul"},"Fixed pressure plates and other Redstone items staying pressed when the player leaves the chunks"),(0,l.yg)("li",{parentName:"ul"},"Fixed Redstone that is placed below and beside a piston appear to connect to the piston"),(0,l.yg)("li",{parentName:"ul"},"Fixed Hoppers not pulling items from above if all slots were occupied"),(0,l.yg)("li",{parentName:"ul"},"The host and other players no longer get disconnected from the game session when the host minimizes the game (iOS only)"),(0,l.yg)("li",{parentName:"ul"},"Finally fixed the bug with MCPE not starting on some Android devices (Thank you, Tomas A!)"),(0,l.yg)("li",{parentName:"ul"},"Items shot from droppers and dispensers can now be picked up quickly"),(0,l.yg)("li",{parentName:"ul"},"Players can no longer place top slabs under them while standing on a bottom slab, preventing falling"),(0,l.yg)("li",{parentName:"ul"},"Fixed lava flowing too far in the Nether"),(0,l.yg)("li",{parentName:"ul"},"Shulkers will teleport away when placed on top of a piston"),(0,l.yg)("li",{parentName:"ul"},"Shulkers will no longer drop experience orbs after being killed using the /kill command"),(0,l.yg)("li",{parentName:"ul"},"Fixed Shulkers that are spawned with a dispenser under a top slab"),(0,l.yg)("li",{parentName:"ul"},"Mobs can now see players through non-solid blocks. No more hiding from Creepers in sugar cane!"),(0,l.yg)("li",{parentName:"ul"},"Fixed some shading/shadow issues with some Android devices (Xoom/Tegra2, we're looking at you!)"),(0,l.yg)("li",{parentName:"ul"},"Fixed mob spawning so it is now modified by the number of players in the game and where they are located in proximity to other players"),(0,l.yg)("li",{parentName:"ul"},"Fixed some issues with hit detections against entities"),(0,l.yg)("li",{parentName:"ul"},"You can now use whisper-like commands (/tell, /w, /message) on dead players"),(0,l.yg)("li",{parentName:"ul"},"Maps can again be zoomed out in the crafting table"),(0,l.yg)("li",{parentName:"ul"},"Green arrows no longer appear on all framed maps"),(0,l.yg)("li",{parentName:"ul"},"Green arrows are no longer left on the map after it is removed from an item frame"),(0,l.yg)("li",{parentName:"ul"},"Splash/lingering potions can now go into brewing stands from a hopper"),(0,l.yg)("li",{parentName:"ul"},"Creepers no longer sometimes get stuck inflating when a player hits it & then moves back"),(0,l.yg)("li",{parentName:"ul"},"The End Rod will now be greyed out in the Pocket UI crafting table if the player is lacking the necessary ingredients"),(0,l.yg)("li",{parentName:"ul"},"/stopsound & /playsound now name all players affected by those commands"),(0,l.yg)("li",{parentName:"ul"},'Fixed an issue when attempting to activate ""Wheel Turning"" in VR options (VR only)'),(0,l.yg)("li",{parentName:"ul"},"Pressing the tab key now finishes the typed command properly (Rift only)"),(0,l.yg)("li",{parentName:"ul"},"Renamed blocks/containers now have their names changed in menus/inventory"),(0,l.yg)("li",{parentName:"ul"},"Fixed some crashes when importing Add-ons"),(0,l.yg)("li",{parentName:"ul"},"Smite enchantment now affects all undead mobs"),(0,l.yg)("li",{parentName:"ul"},"Mobs that are lifted up by Shulker projectiles will now be shown lifting up properly"),(0,l.yg)("li",{parentName:"ul"},"Breaking a Shulker projectile will now show the effect"),(0,l.yg)("li",{parentName:"ul"},"Starting a sign message with \xa7\xa7 will no longer make the text invisible"),(0,l.yg)("li",{parentName:"ul"},"Elytra will now lose durability in Survival multiplayer games"),(0,l.yg)("li",{parentName:"ul"},"Mooshrooms will now respawn on mushroom islands"),(0,l.yg)("li",{parentName:"ul"},"Experience orbs no longer splash when they fall in water"),(0,l.yg)("li",{parentName:"ul"},"Having one spawn egg in Peaceful Creative mode will no longer consume the egg"),(0,l.yg)("li",{parentName:"ul"},"Crops will no longer yield a fixed amount after harvesting"),(0,l.yg)("li",{parentName:"ul"},"Click ","[","MMB","]"," on a flower pot containing a flower will now select the flower"),(0,l.yg)("li",{parentName:"ul"},"Adjusted the color of several blocks on maps"),(0,l.yg)("li",{parentName:"ul"},"Maps created in the Nether will now show red and gray patterns, not just gray"),(0,l.yg)("li",{parentName:"ul"},"Shulkers will no longer immediately attack when a player leaves cover"),(0,l.yg)("li",{parentName:"ul"},"Trees and giant mushrooms will no longer be missing blocks when spawned on the edge of a chunk"),(0,l.yg)("li",{parentName:"ul"},"The Wither will now play sound during its spawning animation"),(0,l.yg)("li",{parentName:"ul"},"/clear command now removes equipped armor"),(0,l.yg)("li",{parentName:"ul"},'No more ""crazy mouse"" - sensitivity should be correct now'),(0,l.yg)("li",{parentName:"ul"},"Ender Dragon's ender charge attack now has correct sound"),(0,l.yg)("li",{parentName:"ul"},"Cracking animation & particles now display correctly in multiplayer"),(0,l.yg)("li",{parentName:"ul"},"Fixed a start-up crash on some Android devices"),(0,l.yg)("li",{parentName:"ul"},"Player markers on a map no longer turn black and are left on the map after another player disconnects"),(0,l.yg)("li",{parentName:"ul"},"You no longer lose all your text to the right if you move your text cursor to the middle of the text box and press enter"),(0,l.yg)("li",{parentName:"ul"},"Covering a roof of a spawn chamber with half-slabs no longer severely reduces the mob spawn rate"),(0,l.yg)("li",{parentName:"ul"},"Items can again be pushed under an upper half-slab"),(0,l.yg)("li",{parentName:"ul"},"Virtual keyboard is now available in single player (Gear VR only)"),(0,l.yg)("li",{parentName:"ul"},"Fixed a crash when feeding adult animals to breed them with only one food item in a stack"),(0,l.yg)("li",{parentName:"ul"},"Feeding a tamed wolf will now restore the correct amount of health, depending on the type of meat used"),(0,l.yg)("li",{parentName:"ul"},'Dates of save games are now the proper format of ""day/month/year"" for Dutch language settings'),(0,l.yg)("li",{parentName:"ul"},"Polar bears no longer deal damage on Peaceful"),(0,l.yg)("li",{parentName:"ul"},"Donkeys and mules can no longer be tempted with food until they are tamed"),(0,l.yg)("li",{parentName:"ul"},"Lava buckets that are in a furnace's fuel slot will no longer turn into a water bucket when a wet sponge has finished drying"),(0,l.yg)("li",{parentName:"ul"},"Players no longer suffocate when the DrowingDamage gamerule is disabled"),(0,l.yg)("li",{parentName:"ul"},"Various mobs inside monster spawners will no longer be huge"),(0,l.yg)("li",{parentName:"ul"},"Fixed texture issues on anvils"),(0,l.yg)("li",{parentName:"ul"},"Fixed a graphical glitch when sand is falling"),(0,l.yg)("li",{parentName:"ul"},"FoV will now increase while sprinting and flying when FoV is set to max setting"),(0,l.yg)("li",{parentName:"ul"},"Fixed large oak trees spawning with birch wood"),(0,l.yg)("li",{parentName:"ul"},"Iron Golems will no longer attack a player after they are killed by the Iron Golem"),(0,l.yg)("li",{parentName:"ul"},"Particles now appear behind arrows when seeing another player shoot arrows"),(0,l.yg)("li",{parentName:"ul"},"Shearing a Mooshroom that is attached to a lead will no longer remove the lead"),(0,l.yg)("li",{parentName:"ul"},"Chicken jockeys will now walk with the speed of a baby zombie"),(0,l.yg)("li",{parentName:"ul"},"Mobs spinning in a monster spawner will no longer stutter"),(0,l.yg)("li",{parentName:"ul"},"Blazes will now stop burning after they stop targeting a player"),(0,l.yg)("li",{parentName:"ul"},"Blazes now perform melee attacks with the right damage"),(0,l.yg)("li",{parentName:"ul"},"Skeleton horses and zombie horses now drop the proper amount of bones or rotten flesh"),(0,l.yg)("li",{parentName:"ul"},"The panoramic image view for mash-up packs in the store can now be scrolled using a controller"),(0,l.yg)("li",{parentName:"ul"},"Farmland and crops are now destroyed when players jump on them"),(0,l.yg)("li",{parentName:"ul"},"Fixed the vignette at the edges of the screen in The End"),(0,l.yg)("li",{parentName:"ul"},"Items thrown by players no longer carry the player's momentum"),(0,l.yg)("li",{parentName:"ul"},"Conditional/Unconditional setting for Command Blocks will now copy when using ","[","Ctrl","]"," + ","[","MMB","]"),(0,l.yg)("li",{parentName:"ul"},"Fixed textures on the bottom of lead knots"),(0,l.yg)("li",{parentName:"ul"},"Fixed the height view distance when Beautiful Skies is enabled"),(0,l.yg)("li",{parentName:"ul"},"High-jumping horses will no longer take damage when they jump and land from the same height"),(0,l.yg)("li",{parentName:"ul"},"Mobs can no longer spawn on top of slabs"),(0,l.yg)("li",{parentName:"ul"},"Fixed a crash when interacting with skulls"),(0,l.yg)("li",{parentName:"ul"},"Mobs from the overworld will no longer spawn in The End"),(0,l.yg)("li",{parentName:"ul"},"Fixed falling blocks breaking and duplicating when falling onto pistons"),(0,l.yg)("li",{parentName:"ul"},"Armor Items are now equipped to mobs when dispensed"),(0,l.yg)("li",{parentName:"ul"},"Several Redstone components like buttons and levers can be now placed on top of fences and walls"),(0,l.yg)("li",{parentName:"ul"},"Color gradients of grass blocks no longer appear as large-square patterns"),(0,l.yg)("li",{parentName:"ul"},"Rails can no longer be duplicated using sticky pistons"),(0,l.yg)("li",{parentName:"ul"},"Fixed resource packs failing to import if there are colors in the name of the pack"),(0,l.yg)("li",{parentName:"ul"},"Fixed sounds with a variety of items"),(0,l.yg)("li",{parentName:"ul"},"Rain will no longer fill cauldrons with the last potion it was filled with"),(0,l.yg)("li",{parentName:"ul"},"Boats can now be broken when occupied by a horse"),(0,l.yg)("li",{parentName:"ul"},"Skulls will no longer be invisible when spawned with the /fill command"),(0,l.yg)("li",{parentName:"ul"},"Using the '/time query' command now returns more descriptive messages"),(0,l.yg)("li",{parentName:"ul"},"Fixed the consistency of death messages for all players when falling into the void"),(0,l.yg)("li",{parentName:"ul"},"The progress of brewing stands will now copy when using ","[","Ctrl","]"," + ","[","MMB","]"),(0,l.yg)("li",{parentName:"ul"},'Enchanted golden apples are now called ""Enchanted Apples""'),(0,l.yg)("li",{parentName:"ul"},"Executing an unfinished command now updates the chat with 'invalid command syntax' message"),(0,l.yg)("li",{parentName:"ul"},"Items can now be enchanted with the Unbreaking effect using the '/enchant' command"),(0,l.yg)("li",{parentName:"ul"},"An error message now appears when using the '/replaceitem' command with non-existent slot number or exceeds an item stack's boundaries"),(0,l.yg)("li",{parentName:"ul"},"Only the appropriate armor can be placed in each armor slot using the '/replaceitem' command"),(0,l.yg)("li",{parentName:"ul"},"Horses can no longer be equipped with any item in the saddle slot by using the '/replaceitem' command"),(0,l.yg)("li",{parentName:"ul"},"The correct error message is now shown for import failures of a non-ZIP Add-On files"),(0,l.yg)("li",{parentName:"ul"},"Sugar cane can once again be planted on podzol blocks"),(0,l.yg)("li",{parentName:"ul"},"The elder guardian's special attack to inflict mining fatigue will now play sound"),(0,l.yg)("li",{parentName:"ul"},"Baby Zombies, Baby Zombie Villagers, Baby Zombie Pigmen and Endermites will now attack players standing in fence corners"),(0,l.yg)("li",{parentName:"ul"},"Fixed Zombie villager transformation rate depending on difficulty"),(0,l.yg)("li",{parentName:"ul"},"Saplings that grow into trees will no longer replace other blocks with leaves"),(0,l.yg)("li",{parentName:"ul"},"The Wither's shield will now block all projectiles"),(0,l.yg)("li",{parentName:"ul"},"Fixed recipes containing charcoal that could not be selected in the Pocket UI when using a controller and coal was also in the player's inventory"),(0,l.yg)("li",{parentName:"ul"},"When using the '/replaceitem' command, all chat messages after the command is executed will display the proper item name"),(0,l.yg)("li",{parentName:"ul"},"Ice and packed ice are now properly destroyed in Creative mode"),(0,l.yg)("li",{parentName:"ul"},"Beacon beams now appear through clouds"),(0,l.yg)("li",{parentName:"ul"},"Mobs will no longer get stuck and spin around on top of chests"),(0,l.yg)("li",{parentName:"ul"},"Using the '/give' command with a damage value will now give the item the right durability"),(0,l.yg)("li",{parentName:"ul"},"The error message for too much power used in the '/effect' command now shows the amount of power, not time"),(0,l.yg)("li",{parentName:"ul"},'Fixed items received from the ""/replaceitem"" command, when executed after \'/clear\', not being visible until the inventory was opened'),(0,l.yg)("li",{parentName:"ul"},"The jump button will no longer disappear from the touch pad when pressing Fly Up and Fly Down buttons"),(0,l.yg)("li",{parentName:"ul"},"Fixed the throwing rate of snowballs to be consistent with the host of a game session"),(0,l.yg)("li",{parentName:"ul"},"Command blocks will now show all lines in the Previous Output field"),(0,l.yg)("li",{parentName:"ul"},"Fixed players having no sound when joining an Xbox Live game")))}g.isMDXComponent=!0},34922:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var t=n(58168),l=(n(96540),n(15680)),r=n(18228),o=n(19365);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],g={toc:c},m="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(m,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,l.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,l.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}d.isMDXComponent=!0},43197:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var t=n(58168),l=(n(96540),n(15680)),r=n(34922),o=n(64773);const i={sidebar_position:99999967,title:"MCPE Android Beta - 1.1 Build 1",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE Android Beta - 1.1 Build 1",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README",title:"MCPE Android Beta - 1.1 Build 1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999967,frontMatter:{sidebar_position:99999967,title:"MCPE Android Beta - 1.1 Build 1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.1 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_2/"},next:{title:"MCPE Android Beta - 1.0.6",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.6/"}},p={},c=[],g={toc:c},m="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(m,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"mcpe-android-beta---11-build-1"},"MCPE Android Beta - 1.1 Build 1"),(0,l.yg)(r.default,{gameplayChangelog:(0,l.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);