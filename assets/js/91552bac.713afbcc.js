"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[62944,6207,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(72389);const w="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},37993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.2/20/1/gameplay",id:"changelog_source/preview/1.2/20/1/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.2/20/1/gameplay.mdx",sourceDirName:"changelog_source/preview/1.2/20/1",slug:"/changelog_source/preview/1.2/20/1/gameplay",permalink:"/docs/changelog_source/preview/1.2/20/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.2/20/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Fixes for bugs introduced during Beta:</strong>",id:"fixes-for-bugs-introduced-during-beta",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Xbox One and Windows 10 players can opt in and out of the beta from the Xbox Insider Hub app. Android players can opt in and out from the Minecraft page of the Google Play Store"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all changes and fixes from the beta to preserve stability and may slip to a later release"),(0,r.kt)("li",{parentName:"ul"},"Report bugs to bugs.mojang.com and all feedback to feedback.minecraft.net")),(0,r.kt)("p",null,"This beta features a whole ocean of new features from the upcoming Update Aquatic! These features are work in progress and more are on the way but we wanted to take the opportunity to get early feedback from players. If you find any bugs, please report them on bugs.mojang.com and post all thoughts and suggestions to feedback.minecraft.net. Thanks for playing!  "),(0,r.kt)("h2",{id:"experimental-gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Gameplay:")),(0,r.kt)("p",null,"Some Update Aquatic features are more unstable and are currently behind the Experimental Gameplay toggle.  "),(0,r.kt)("p",null,"'Use Experimental Gameplay' can be toggled in World Settings. These features may break your world so a copy of your world will be created with \"\"","[","EX","]",'"" before the world name. This feature cannot be disabled once it is enabled for a world and any progress will not be saved to the original world.  '),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Water has a completely new look and it is now much easier to see above and underwater"),(0,r.kt)("li",{parentName:"ul"},"Dolphins"),(0,r.kt)("li",{parentName:"ul"},"Underwater ruins"),(0,r.kt)("li",{parentName:"ul"},"Underwater caves"),(0,r.kt)("li",{parentName:"ul"},"Sea Pickles can now be found on the ocean floor as a source of light"),(0,r.kt)("li",{parentName:"ul"},"Heart of the Sea and Nautilus Shell items. These items have no function yet but be sure to collect them for later!"),(0,r.kt)("li",{parentName:"ul"},"Minecraft: Education Edition Chemistry features can now be enabled! For tips on getting started, check out the Chemistry Lab Journal")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can now swim through 1x1 gaps"),(0,r.kt)("li",{parentName:"ul"},"Updated the model for Cod"),(0,r.kt)("li",{parentName:"ul"},"Updated the textures of Stripped Jungle Wood, Fish Spawn Eggs, Coral Fans, and Dried Kelp Blocks"),(0,r.kt)("li",{parentName:"ul"},"Items will now float to the top of water"),(0,r.kt)("li",{parentName:"ul"},"Shipwrecks now use a variety of Trapdoors"),(0,r.kt)("li",{parentName:"ul"},"Added a new animation when using a Trident with Riptide"),(0,r.kt)("li",{parentName:"ul"},"Cauldrons can now be used underwater if they have a Trapdoor on top"),(0,r.kt)("li",{parentName:"ul"},"Polar Bears and Strays now spawn in frozen oceans"),(0,r.kt)("li",{parentName:"ul"},"The breath meter now slowly regenerates after being underwater"),(0,r.kt)("li",{parentName:"ul"},"Fish Spawn Eggs are no longer behind the Experimental Gameplay toggle"),(0,r.kt)("li",{parentName:"ul"},"Spawn points can now be set using Beds during the day"),(0,r.kt)("li",{parentName:"ul"},"Baby Zombies now burn in daylight"),(0,r.kt)("li",{parentName:"ul"},"Zombies and Skeletons now burn in daylight while in boats")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several of the top crashes that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred after rating content in the Marketplace"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when importing an Add-On with an invalid manifest file"),(0,r.kt)("li",{parentName:"ul"},"Skin selections will once again save after closing the game or signing out"),(0,r.kt)("li",{parentName:"ul"},"Item names and descriptions will once again appear using touch controls on Classic UI"),(0,r.kt)("li",{parentName:"ul"},'""Destroy Block (vibrate)"" toggle once appears in Touch settings'),(0,r.kt)("li",{parentName:"ul"},"Fixed Villager trades becoming deactivated in certain cases when using touch controls"),(0,r.kt)("li",{parentName:"ul"},"Soul Sand and Gravel once again generate in the Nether"),(0,r.kt)("li",{parentName:"ul"},"Activated resource packs will now stay active upon downloading any other resource pack during world creation"),(0,r.kt)("li",{parentName:"ul"},"Disconnecting a controller while making input no longer continues that input until the controller is reconnected"),(0,r.kt)("li",{parentName:"ul"},"Lava with a block on top no longer prevents fire damage to entities and will fix Chicken cookers"),(0,r.kt)("li",{parentName:"ul"},"Fixed the appearance of bubbles around the Guardian laser attack"),(0,r.kt)("li",{parentName:"ul"},"Underwater effect is no longer applied when the player's head is above water"),(0,r.kt)("li",{parentName:"ul"},"Initiating World Template screen now shows a progress bar"),(0,r.kt)("li",{parentName:"ul"},"Water source blocks surrounding Glass and Sea Lanterns no longer turn into flowing water blocks"),(0,r.kt)("li",{parentName:"ul"},"Fire Resistance potions now protect Snow Golems from dying in warm biomes"),(0,r.kt)("li",{parentName:"ul"},"Disconnected water flows no longer visually show as connected"),(0,r.kt)("li",{parentName:"ul"},"Chroma Hills HD Texture Pack fonts now apply correctly"),(0,r.kt)("li",{parentName:"ul"},"Split-Screen controls are no longer mixed up when the game is launched while using keyboard and mouse input on Xbox One"),(0,r.kt)("li",{parentName:"ul"},'The default author for books are now set to ""Author Unknown""'),(0,r.kt)("li",{parentName:"ul"},"Buttons made from Oak or Stone are now displayed as Oak Button and Stone Button, respectively"),(0,r.kt)("li",{parentName:"ul"},"'/clear' will now clear items held in hand when playing in Classic UI"),(0,r.kt)("li",{parentName:"ul"},"Improvements to Store load times")),(0,r.kt)("h2",{id:"fixes-for-bugs-introduced-during-beta"},(0,r.kt)("strong",{parentName:"h2"},"Fixes for bugs introduced during Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred for the host of a multiplayer game when pressing Save & Quit"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred for multiplayer clients when Pufferfish inflated"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when opening chests from shipwrecks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when entering size coordinates into Remix 3D exporting on Windows 10"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when pushing/pulling a chest with a Sticky Piston underwater"),(0,r.kt)("li",{parentName:"ul"},"Increased performance in oceans"),(0,r.kt)("li",{parentName:"ul"},"Swimming controls no longer override Creative flying controls"),(0,r.kt)("li",{parentName:"ul"},"Adjustments to the camera view of the swimming animation"),(0,r.kt)("li",{parentName:"ul"},"Water in Cauldrons is no longer invisible"),(0,r.kt)("li",{parentName:"ul"},"Warm oceans are now easier to find"),(0,r.kt)("li",{parentName:"ul"},"Enchanted Tridents no longer flash red when set on fire"),(0,r.kt)("li",{parentName:"ul"},"Thrown Tridents no longer have a placeholder name"),(0,r.kt)("li",{parentName:"ul"},"Trident attack damage is now listed in its item tooltip"),(0,r.kt)("li",{parentName:"ul"},"Fixed strange Trident behavior when it's thrown into snow"),(0,r.kt)("li",{parentName:"ul"},"Players who are not the owner of a Trident with Loyalty can no longer pick it up"),(0,r.kt)("li",{parentName:"ul"},"Falling Sand is no longer affected by Tridents enchanted with Channeling"),(0,r.kt)("li",{parentName:"ul"},"Tridents can now be fire from Dispensers"),(0,r.kt)("li",{parentName:"ul"},"Tridents thrown underwater will no longer continue to produce bubbles"),(0,r.kt)("li",{parentName:"ul"},"Ocean Monuments now spawn in all deep ocean variants"),(0,r.kt)("li",{parentName:"ul"},"Fixed item name of Tropical Fish"),(0,r.kt)("li",{parentName:"ul"},"Improved Fish spawning and despawning"),(0,r.kt)("li",{parentName:"ul"},"Trees can now be stripped with an Axe when using touch controls"),(0,r.kt)("li",{parentName:"ul"},"Bone drop rate from Fish has been reduced to 25%"),(0,r.kt)("li",{parentName:"ul"},"Removed Sponges from the Drowned's loot table"),(0,r.kt)("li",{parentName:"ul"},"Items now float properly on the surface of water"),(0,r.kt)("li",{parentName:"ul"},"Increased the spawn rate of shipwrecks"),(0,r.kt)("li",{parentName:"ul"},"Removed underwater mega ravines"),(0,r.kt)("li",{parentName:"ul"},"Kelp no longer spawns in frozen oceans"),(0,r.kt)("li",{parentName:"ul"},"Kelp now stops growing when it reaches the surface"),(0,r.kt)("li",{parentName:"ul"},"Fish are no longer invisible on some devices"),(0,r.kt)("li",{parentName:"ul"},"Top Kelp blocks are no longer missing transparency when viewed at certain distances"),(0,r.kt)("li",{parentName:"ul"},"Redstone Dust will now properly light up when powered"),(0,r.kt)("li",{parentName:"ul"},"Water blocks between Bookshelves and Enchantment Tables will no longer affect the level of enchantments available"),(0,r.kt)("li",{parentName:"ul"},"Buckets of fish acquired with commands will now drop fish"),(0,r.kt)("li",{parentName:"ul"},"Villagers in Igloos can once again be traded with"),(0,r.kt)("li",{parentName:"ul"},"GUI Scale once again applies properly when launching the game"),(0,r.kt)("li",{parentName:"ul"},"Drowned now spawn properly in new ocean biomes"),(0,r.kt)("li",{parentName:"ul"},"Treasure Maps can now be obtained through commands when Experimental Gameplay is disabled"),(0,r.kt)("li",{parentName:"ul"},"Dried Kelp now appears in Miscellaneous Food of the Equipment tab in the Creative inventory"),(0,r.kt)("li",{parentName:"ul"},"Fixed Seagrass icon appearing as regular grass"),(0,r.kt)("li",{parentName:"ul"},"Fixed Seagrass spawning on icebergs"),(0,r.kt)("li",{parentName:"ul"},"Overworld mobs will no longer spawn underwater on Kelp and Seagrass"),(0,r.kt)("li",{parentName:"ul"},"Blocks moved by Pistons underwater are now filled with water"),(0,r.kt)("li",{parentName:"ul"},"Pistons and Sticky Pistons are now properly displayed underwater")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},85786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(37993);const i={sidebar_position:99999999,title:"1.2.20.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.2"]},s="Minecraft Beta - 1.2.20.1 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.2/20/1",id:"official_changelog/preview/1.2/20/1",title:"1.2.20.1",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.2/20/1.mdx",sourceDirName:"official_changelog/preview/1.2/20",slug:"/official_changelog/preview/1.2/20/1",permalink:"/docs/official_changelog/preview/1.2/20/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.2/20/1.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.2",permalink:"/docs/tags/1-2"}],version:"current",sidebarPosition:99999999,frontMatter:{sidebar_position:99999999,title:"1.2.20.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.2"]},sidebar:"changelogSidebar",previous:{title:"1.2.20.2",permalink:"/docs/official_changelog/preview/1.2/20/2"},next:{title:"1.20.80",permalink:"/docs/official_changelog/stable/1.20/80"}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---12201-xbox-onewindows-10android"},"Minecraft Beta - 1.2.20.1 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);