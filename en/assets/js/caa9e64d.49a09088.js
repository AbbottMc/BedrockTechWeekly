"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52709,64137,81791,11839,7578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},14636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/20/27/gameplay",id:"changelog_source/preview/1.18/20/27/gameplay",title:"gameplay",description:"Posted: 17 February 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/20/27/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/20/27",slug:"/changelog_source/preview/1.18/20/27/gameplay",permalink:"/en/docs/changelog_source/preview/1.18/20/27/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/27/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Minecraft Preview:</strong>",id:"minecraft-preview",level:2},{value:"<strong>Known Issues:</strong>",id:"known-issues",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Character Creator</strong>",id:"character-creator",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 17 February 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work-in-progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview players may receive a slightly different version number, but the fixes and features here should be the same. More information can be found here:\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4438927740429/carrots_bees.jpg",alt:"carrots_bees.jpg"})),(0,r.kt)("p",null,"It's time for another update, and here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h2",{id:"minecraft-preview"},(0,r.kt)("strong",{parentName:"h2"},"Minecraft Preview:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview players on Windows and iOS can now join each other's games!")),(0,r.kt)("h2",{id:"known-issues"},(0,r.kt)("strong",{parentName:"h2"},"Known Issues:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We are aware that some Android devices may experience a crash when creating a world. This will only happen once at most, after which you can create worlds as usual.")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed actor definition identifiers not being recognized if the item or block name contains "."'),(0,r.kt)("li",{parentName:"ul"},"Damage is now calculated more accurately, we now properly calculate and store partial damage for larger damage"),(0,r.kt)("li",{parentName:"ul"},"Mobs across higher and lower difficulties have their damage adjusted slightly accordingly"),(0,r.kt)("li",{parentName:"ul"},"Armor and protection reduction calculations have been made more accurate"),(0,r.kt)("li",{parentName:"ul"},"Dragon's breath attack now properly deals damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94317"},"MCPE-94317"),")"),(0,r.kt)("li",{parentName:"ul"},"The player's position when rejoining a world will remain the same if they quit while in lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-82480"},"MCPE-82480"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now fly down through ladders and other climbable blocks such as vines in creative without stopping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-82480"},"MCPE-82480)")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where shield blocking animation stops playing smoothly after blocking once (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-149838"},"MCPE-149838"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where "carrots',"_","stage","_",'3" texture filename was incorrect and did not show up in-game (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152175"},"MCPE-152175"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bees no longer become angry when Beehives are destroyed by Silk Touch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-83550"},"MCPE-83550"),")"),(0,r.kt)("li",{parentName:"ul"},"Blaze fireballs, Fang attack damage, and Shulker bullets now deal consistent damage across all difficulties"),(0,r.kt)("li",{parentName:"ul"},"Small Magma Cubes do slightly more damage, from 2 to 3 on normal"),(0,r.kt)("li",{parentName:"ul"},"Spiders deal slightly less damage, from 3 to 2 on normal (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94878"},"MCPE-94878)")),(0,r.kt)("li",{parentName:"ul"},"Baby Zoglins deal slightly less damage, from 1 to 0.5 on normal"),(0,r.kt)("li",{parentName:"ul"},"Skeleton melee attack does slightly less damage, from 3 to 2 on normal"),(0,r.kt)("li",{parentName:"ul"},"Wolves deal slightly more damage, from 3 to 4 on normal"),(0,r.kt)("li",{parentName:"ul"},"Baby Hoglins no longer attack players"),(0,r.kt)("li",{parentName:"ul"},"Cows, Pigs, Chickens, and Sheep no longer spawn in cold taiga biomes")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Buttons in touch controls no longer get stuck in pressed state when players go outside of the button area (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151921"},"MCPE-151921"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where text would display incorrectly on certain Android devices in the new UI (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151916"},"MCPE-151916"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crashing issue that could occur when hovering over the search bar in the crafting menu when playing with a controller")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Coin Purchase Screen now includes \u201cCoin Starter Bundles\u201d for purchase on some platforms"),(0,r.kt)("li",{parentName:"ul"},'Game no longer hangs/crashes when clicking "View More"'),(0,r.kt)("li",{parentName:"ul"},"Marketplace tags now fit in description section"),(0,r.kt)("li",{parentName:"ul"},"Download popup no longer flickers when closed"),(0,r.kt)("li",{parentName:"ul"},"Client now supports multiple player count tags in Marketplace pages"),(0,r.kt)("li",{parentName:"ul"},"Added warning popup on Marketplace pages when attempting to equip skin pack skin while character creator item is equipped")),(0,r.kt)("h2",{id:"character-creator"},(0,r.kt)("strong",{parentName:"h2"},"Character Creator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused some emotes to have unintended rotations when near the end of their animation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-134328"},"MCPE-134328"),")")))}m.isMDXComponent=!0},25973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/20/27/tech",id:"changelog_source/preview/1.18/20/27/tech",title:"tech",description:"AI Goals",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/20/27/tech.mdx",sourceDirName:"changelog_source/preview/1.18/20/27",slug:"/changelog_source/preview/1.18/20/27/tech",permalink:"/en/docs/changelog_source/preview/1.18/20/27/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/27/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>mojang-gametest module:</strong>",id:"mojang-gametest-module",level:2},{value:"<strong>mojang-minecraft module:</strong>",id:"mojang-minecraft-module",level:2},{value:"<strong>Interact Component</strong>",id:"interact-component",level:2},{value:"<strong>Items</strong>",id:"items",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ai-goals"},(0,r.kt)("strong",{parentName:"h2"},"AI Goals")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Exposed new data parameter "calculate',"_","new","_","path","_",'radius" for the Go Home Goal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home'),(0,r.kt)("li",{parentName:"ul"},"Added Knockback Height Cap value to Knockback Roar Goal")),(0,r.kt)("h2",{id:"animation"},(0,r.kt)("strong",{parentName:"h2"},"Animation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where timeline events at 0.0 would sometimes not run in looping animations")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed command block failing to summon mob in Extreme Speed Runner Marketplace map")),(0,r.kt)("h1",{id:"technical-experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Due to engine limitations, "minecraft:geometry" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the ',"[","0,0,0","]"," to ","[","15,15,15","]"," space. Any blocks loaded from behavior packs that exceed this limit will render as the info","_","update block and show a content error in the log.")),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exposed the following components for Actors. Each of these has a\xa0valueproperty that contains the data of the component.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"minecraft:variant"),(0,r.kt)("li",{parentName:"ul"},"minecraft:skin","_","id"),(0,r.kt)("li",{parentName:"ul"},"minecraft:mark","_","variant"),(0,r.kt)("li",{parentName:"ul"},"minecraft:friction","_","modifier"),(0,r.kt)("li",{parentName:"ul"},"minecraft:ground","_","offset"),(0,r.kt)("li",{parentName:"ul"},"minecraft:scale"),(0,r.kt)("li",{parentName:"ul"},"minecraft:push","_","through")))),(0,r.kt)("h2",{id:"mojang-gametest-module"},(0,r.kt)("strong",{parentName:"h2"},"mojang-gametest module:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed\xa0radiusargument from command\xa0/gametest clearall"),(0,r.kt)("li",{parentName:"ul"},"Modified the behavior of function\xa0attack()to make the simulated player swing even when no target is found")),(0,r.kt)("h2",{id:"mojang-minecraft-module"},(0,r.kt)("strong",{parentName:"h2"},"mojang-minecraft module:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added event\xa0entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)- Fires when an entity or block is hit by another entity"),(0,r.kt)("li",{parentName:"ul"},"function playSound(soundID : String, soundOptions : SoundOptions) - plays a sound for a player, cannot be heard by entities other than that specific player  ")),(0,r.kt)("h2",{id:"interact-component"},(0,r.kt)("strong",{parentName:"h2"},"Interact Component")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now have two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Weapon events are correctly applied when the Weapons are used by Mobs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-118692"},"MCPE-118692"),")")))}m.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},65714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(14636),i=a(25973);const s={sidebar_position:99999830,title:"1.18.20.27",tags:["Official","Changelog","Preview","1.18"]},c="Minecraft Beta - 1.18.20.27 (Xbox / Windows / Android)",u={unversionedId:"official_changelog/preview/1.18/20/27",id:"official_changelog/preview/1.18/20/27",title:"1.18.20.27",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.18/20/27.mdx",sourceDirName:"official_changelog/preview/1.18/20",slug:"/official_changelog/preview/1.18/20/27",permalink:"/en/docs/official_changelog/preview/1.18/20/27",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/20/27.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999830,frontMatter:{sidebar_position:99999830,title:"1.18.20.27",tags:["Official","Changelog","Preview","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.20.29-30",permalink:"/en/docs/official_changelog/preview/1.18/20/29-30"},next:{title:"1.18.20.25",permalink:"/en/docs/official_changelog/preview/1.18/20/25"}},m={},p=[],d={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1182027-xbox--windows--android"},"Minecraft Beta - 1.18.20.27 (Xbox / Windows / Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);