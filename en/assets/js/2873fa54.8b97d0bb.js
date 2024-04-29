"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[62263,64137,81791,60400,73481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},75560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/20/gameplay",id:"changelog_source/preview/1.19/50/20/gameplay",title:"gameplay",description:"Posted: 13th October 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/50/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/50/20",slug:"/changelog_source/preview/1.19/50/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/50/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Minecraft Live Mob Vote:</strong> To participate in the Minecraft Live mob vote, you will need to be on Bedrock version 1.19.31.",id:"minecraft-live-mob-vote-to-participate-in-the-minecraft-live-mob-vote-you-will-need-to-be-on-bedrock-version-11931",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mob Effects</strong>",id:"mob-effects",level:2},{value:"<strong>Mobile Data</strong>",id:"mobile-data",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 13th October 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/9857667786893",alt:"A Minecrfat screenshot showing how the world looks when flying through the terrain using spectator game mode"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and feel free to send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h2",{id:"minecraft-live-mob-vote-to-participate-in-the-minecraft-live-mob-vote-you-will-need-to-be-on-bedrock-version-11931"},(0,r.kt)("strong",{parentName:"h2"},"Minecraft Live Mob Vote:")," To participate in the Minecraft Live mob vote, you will need to be on Bedrock version 1.19.31."),(0,r.kt)("p",null,"You can opt out of the Android Beta on the Google Play Store and uninstall/reinstall Minecraft to get back to the 1.19.31 version - Remember to make a backup of your worlds if you do this!"),(0,r.kt)("p",null,"You will also be able to vote via the Minecraft Launcher or via web browser at ",(0,r.kt)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/live"},"minecraft.net/live"),". The vote will be open for 24 hours starting October 14 at 12pm EDT!"),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("h3",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h3"},"Spectator Mode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spectator Mode has moved from an experimental toggle into the base game",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please remember worlds that have used Experimental toggles will always be flagged as Experimental. We recommend keeping these Experimental worlds separate from your main saves. More information can be found in ",(0,r.kt)("a",{parentName:"li",href:"https://feedback.minecraft.net/hc/en-us/articles/4403610710797"},"this article"),"."))),(0,r.kt)("li",{parentName:"ul"},"Players can go in and out of Spectator Mode using the Personal game mode in the Settings Menu or the '/gamemode spectator' command, if cheats are enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156688"},"MCPE-156688"),")"),(0,r.kt)("li",{parentName:"ul"},"Spectators have a reduced HUD that does not show the crosshair, hotbar, XP, health, hunger, or armor UI elements"),(0,r.kt)("li",{parentName:"ul"},"Player's inventory, health, held items etc are unchanged when switching into Spectator Mode and when you leave Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Spectators are always flying and cannot be grounded"),(0,r.kt)("li",{parentName:"ul"},"Spectators pass through solid blocks and entities without collision"),(0,r.kt)("li",{parentName:"ul"},"Spectators can see out of solid objects when inside blocks"),(0,r.kt)("li",{parentName:"ul"},"Spectators cannot take damage and are not affected by any blocks, mobs, items, portals or effects"),(0,r.kt)("li",{parentName:"ul"},"Spectators cannot use items or interact with blocks or mobs"),(0,r.kt)("li",{parentName:"ul"},"Spectators cannot open their inventory or interact with block UIs like chests"),(0,r.kt)("li",{parentName:"ul"},"Spectators cannot be seen by mobs or other players except other players in Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Spectators are not needed to sleep to pass the night"),(0,r.kt)("li",{parentName:"ul"},"Spectators appear as a transparent floating head to other players in Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"When playing in first person, spectators do not see their arm or held item"),(0,r.kt)("li",{parentName:"ul"},"Spectators generate chunks if they fly to new chunks"),(0,r.kt)("li",{parentName:"ul"},"Spectators do not spawn any mobs"),(0,r.kt)("li",{parentName:"ul"},"Non-persistent mobs around spectators will check for distance to any non-spectators when deciding if they should despawn"),(0,r.kt)("li",{parentName:"ul"},"Commands can select and act on spectators"),(0,r.kt)("li",{parentName:"ul"},"Open container, Command Block or Structure Block screens now close when players enter Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Spectator Mode now appears on the list of Personal Game Modes in Settings (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156688"},"MCPE-156688"),")")),(0,r.kt)("h3",{id:"blocks"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dirt Path and Farmland collision are now one pixel lower (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-12109"},"MCPE-12109"),")"),(0,r.kt)("li",{parentName:"ul"},"Players swimming above Mud will not have their screen covered (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153737"},"MCPE-153737"),")"),(0,r.kt)("li",{parentName:"ul"},"Projectiles landing on Mud will not repeatedly shake (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153744"},"MCPE-153744"),")"),(0,r.kt)("li",{parentName:"ul"},"Amphibious mobs no longer have trouble pathfinding around Mud Blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153961"},"MCPE-153961"),")"),(0,r.kt)("li",{parentName:"ul"},"Mud and Soul Sand Block bounding boxes now matches their visual bounding boxes for when a player places the blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162252"},"MCPE-162252"),")"),(0,r.kt)("li",{parentName:"ul"},"Sugar Cane will break on next random tick when its water source is removed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162351"},"MCPE-162351"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where placed Light Blocks were invisible even while selecting a Light Block")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed blocks flickering when moved by Pistons"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where breeding mobs with applied effects would result in the offspring having the effect bonuses permanently applied (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81890"},"MCPE-81890"),")"),(0,r.kt)("li",{parentName:"ul"},"Piston's arm now extends more smoothly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155987"},"MCPE-155987"),")"),(0,r.kt)("li",{parentName:"ul"},"Blocks attached to Pistons now move more smoothly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-146597"},"MCPE-146597"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could cause the player to teleport back to a portal after exiting it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157494"},"MCPE-157494"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where signs would not play a placement sound when placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65423"},"MCPE-65423"),")"),(0,r.kt)("li",{parentName:"ul"},"Maps corrupted by black pixels can now be repaired by revisiting corrupted areas. Previously affected maps can now be repaired by holding in main or off hand (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162421"},"MCPE-162421"),")"),(0,r.kt)("li",{parentName:"ul"},"Huge Fungus blocks will no longer replace partial blocks when growing from Nylium (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65661"},"MCPE-65661"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Bat resting location being offset when at negative world height"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where fully charged items were lost when going through a portal (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55279"},"MCPE-55279"),")"),(0,r.kt)("li",{parentName:"ul"},"Bubble columns are now properly generated above underwater Magma Blocks")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applied ambient light to blocks moved by Pistons (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-136928"},"MCPE-136928"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the brightness of the night sky when enabling RTX (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162445"},"MCPE-162445"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Freshly crafted tools and armor now work the first time they are used (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161151"},"MCPE-161151"),")"),(0,r.kt)("li",{parentName:"ul"},"Weapons, tools, and armor can now be dropped from the players inventory the first time after being renamed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162132"},"MCPE-162132"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where an entity at coordinate 0,0,0 prevented Pressure Plates from being placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161377"},"MCPE-161377"),")")),(0,r.kt)("h2",{id:"mob-effects"},(0,r.kt)("strong",{parentName:"h2"},"Mob Effects")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jump Boost now consistently affects mobs ridden by players (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45823"},"MCPE-45823"),")"),(0,r.kt)("li",{parentName:"ul"},"Slow Falling now consistently affects mobs ridden by players (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126604"},"MCPE-126604"),")")),(0,r.kt)("h2",{id:"mobile-data"},(0,r.kt)("strong",{parentName:"h2"},"Mobile Data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new Mobile Data Blocked screen on Android/iOS when mobile data is available but disabled in-game and Wi-Fi is not connected")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased Enderman follow range from 32 to 64 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35306"},"MCPE-35306"),")")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Preview, we've re-enabled the new stack splitting functionality for touch devices"),(0,r.kt)("li",{parentName:"ul"},'"Split Control" option will only appear in Classic control mode and only affect the Classic control scheme'),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where hotbar slots could not be touched in Crosshair and Touch control schemes in certain situations"),(0,r.kt)("li",{parentName:"ul"},"Scrolling the inventory screen is easier as the dwell time has been increased to 180 milliseconds (was 120 previously). The dwell time is the length of time an item must be held before a drag action begins"),(0,r.kt)("li",{parentName:"ul"},'Untangled the connections between "Lock Joystick", "Joystick Always Visible", and "Joystick Visible When Unused"'),(0,r.kt)("li",{parentName:"ul"},'Added toggle "Delayed Block Breaking (Creative Only)" in Touch Settings to control this functionality'),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where double tapping touch control buttons can be difficult on high refresh rate screens (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156351"},"MCPE-156351"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved the way that button presses and camera movements work in tandem in the new Touch Controls"),(0,r.kt)("li",{parentName:"ul"},"Action buttons now show up when in a Boat while using Crosshair mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159376"},"MCPE-159376"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the boss bar name would not update when the boss's name changed until the bar was reloaded by the player"),(0,r.kt)("li",{parentName:"ul"},"A warning now appears when the player is about to lose changes when moving away from the Create New World screen"),(0,r.kt)("li",{parentName:"ul"},"Changed the error handling of copying worlds to display a modal pop-up instead of a toast notification"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing the HUD to not rotate with the player's direction while riding in a Boat in VR"),(0,r.kt)("li",{parentName:"ul"},"Changed the color of the description text for the \u201cAllow mobile data for online play\u201d option to be more readable (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162459"},"MCPE-162459"),")"),(0,r.kt)("li",{parentName:"ul"},"Hotbar item text background is now affected by the Text Background Opacity slider (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79331"},"MCPE-79331"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the '/enchant' command to apply the same level of enchantment no longer results in a higher level being applied (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153204"},"MCPE-153204"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where ",(0,r.kt)("em",{parentName:"li"},"hasItem")," wouldn't correctly detect an item with a data value if ",(0,r.kt)("em",{parentName:"li"},"hasItem")," wasn't provided a data value (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162460"},"MCPE-162460"),")")))}p.isMDXComponent=!0},43521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/20/tech",id:"changelog_source/preview/1.19/50/20/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/50/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/50/20",slug:"/changelog_source/preview/1.19/50/20/tech",permalink:"/en/docs/changelog_source/preview/1.19/50/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Networking</strong>",id:"networking",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Scripting, APIs, and GameTest Framework</strong>",id:"scripting-apis-and-gametest-framework",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Min/Max distance values in sound events now only affect the sound event and not all events using the same sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154376"},"MCPE-154376"),")"),(0,r.kt)("li",{parentName:"ul"},"Added client-side-chunk-generation-enabled toggle to server.properties")),(0,r.kt)("h2",{id:"networking"},(0,r.kt)("strong",{parentName:"h2"},"Networking")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added server property 'enable-lan-visibility' to disable the explicit LAN discovery by clients. This will prevent unexpected port conflicts when running multiple dedicated servers on a single host. Clarified port use in server logs and made error messaging more clear (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-1094"},"BDS-1094"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that would occur if the ",(0,r.kt)("em",{parentName:"li"},"texture","_","index")," of a spawn egg was out of bounds. Now a content log error will be presented instead"),(0,r.kt)("li",{parentName:"ul"},"Added null ptr check when retrieving actor ref in CameraAPI to prevent crashing"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where game would crash when Ender Dragon breath attack hadn't hit blocks or fell into the void (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161204"},"MCPE-161204"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when navigating down in the Villager screen with the keyboard")),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"general-1"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crafting Table UI updates when a block changes to a permutation with a different\xa0_minecraft:crafting","_","table_block component  ")),(0,r.kt)("h2",{id:"scripting-apis-and-gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"Scripting, APIs, and GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed wireframes still rendering after using the /gametest clearall for distant gametest structures command"),(0,r.kt)("li",{parentName:"ul"},"Entity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"runCommand"),". Consider ",(0,r.kt)("em",{parentName:"li"},"runCommandAsync")," as an alternative"))),(0,r.kt)("li",{parentName:"ul"},"Dimension",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"runCommand"),". Consider ",(0,r.kt)("em",{parentName:"li"},"runCommandAsync")," as an alternative"))),(0,r.kt)("li",{parentName:"ul"},"Converted BlockRaycastOptions to an interface"),(0,r.kt)("li",{parentName:"ul"},"Converted EntityEventOptions to an interface"),(0,r.kt)("li",{parentName:"ul"},"Converted ScoreboardObjectiveDisplayOptions to an interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Location type updated to IVec3"))),(0,r.kt)("li",{parentName:"ul"},"Vector",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"cross - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"distance - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"divide - updated\xa0_a_argument to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"lerp - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"max - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"min - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"multiply - updated\xa0_a_argument to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"slerp - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a_and\xa0_b")," arguments to accept an IVec3 interface type"),(0,r.kt)("li",{parentName:"ul"},"subtract - updated\xa0",(0,r.kt)("em",{parentName:"li"},"a"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"b"),"\xa0arguments to accept an IVec3 interface type")))))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},60501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(75560),i=a(43521);const s={sidebar_position:99999795,title:"1.19.50.20",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.50.20",u={unversionedId:"official_changelog/preview/1.19/50/20",id:"official_changelog/preview/1.19/50/20",title:"1.19.50.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/50/20.mdx",sourceDirName:"official_changelog/preview/1.19/50",slug:"/official_changelog/preview/1.19/50/20",permalink:"/en/docs/official_changelog/preview/1.19/50/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/50/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999795,frontMatter:{sidebar_position:99999795,title:"1.19.50.20",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.50.21",permalink:"/en/docs/official_changelog/preview/1.19/50/21"},next:{title:"1.19.40.24",permalink:"/en/docs/official_changelog/preview/1.19/40/24"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1195020"},"Minecraft Beta & Preview - 1.19.50.20"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);