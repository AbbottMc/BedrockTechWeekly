"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[57050,31164,99321],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,h=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??g;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},17287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.2/1/gameplay",id:"changelog_source/stable/1.2/1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.2/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.2/1",slug:"/changelog_source/stable/1.2/1/gameplay",permalink:"/en/docs/changelog_source/stable/1.2/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.2/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>World Conversion Bug Fixes:</strong>",id:"world-conversion-bug-fixes",level:2}],u={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a free cursor to the inventory screen when navigating with a controller")),(0,r.yg)("h2",{id:"tweaks"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a video setting to toggle gameplay field of view changes"),(0,r.yg)("li",{parentName:"ul"},"When selecting an item from the Creative inventory when the hotbar is full and using a controller, the item will be placed on the cursor and focus will shift to the hotbar, offering them the opportunity to replace an existing item in the hotbar with the new item"),(0,r.yg)("li",{parentName:"ul"},"Adjusted block placement speed when using a controller"),(0,r.yg)("li",{parentName:"ul"},"Added a white outline to highlighted inventory slots and recipes")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Made several fixes to make navigating Settings, Create New World, Edit World, and How to Play screens more intuitive when using a controller"),(0,r.yg)("li",{parentName:"ul"},"Increased performance on third-party servers"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred due to rendering issues"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when changing to a user profile that had no save data"),(0,r.yg)("li",{parentName:"ul"},'Fixed a crash that occurred when ""Saving World"" message appeared and a player signed out of their profile while in a world'),(0,r.yg)("li",{parentName:"ul"},"Descriptions will now save if it is the last field interacted with before exporting to Remix 3D (Windows 10 only)"),(0,r.yg)("li",{parentName:"ul"},'Fixed the Recipe Book ""Search"" text marker becoming blocked in certain circumstances'),(0,r.yg)("li",{parentName:"ul"},'""@r"" will no longer target the oldest entity and will now target a random entity'),(0,r.yg)("li",{parentName:"ul"},"Fixed the particles and animation when using the '/summon' command to spawn a firework rocket"),(0,r.yg)("li",{parentName:"ul"},"Minecart with Command Block now has collision with other blocks after going off rails"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when going to the Settings screen after being disconnected from a server"),(0,r.yg)("li",{parentName:"ul"},"The menu no longer needs to be scrolled to see Adventure mode in the game mode dropdown menu"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer take fall damage when jumping into an End Portal in Creative mode"),(0,r.yg)("li",{parentName:"ul"},"Fixed the Creative inventory being empty after connecting to an external server"),(0,r.yg)("li",{parentName:"ul"},"Jumping into a minecart while directly under a block will no longer place the player above the block"),(0,r.yg)("li",{parentName:"ul"},"Fixed Settings sliders not appearing correctly"),(0,r.yg)("li",{parentName:"ul"},"Fixed navigation of the Villager trading screen when using a controller so it's a much more intuitive experience"),(0,r.yg)("li",{parentName:"ul"},"Slimes will once again spawn below layer 40, regardless of light level"),(0,r.yg)("li",{parentName:"ul"},"Experience orbs are now easier to pick up"),(0,r.yg)("li",{parentName:"ul"},"Fixed several issues with the MINECON 2015 Skin Pack"),(0,r.yg)("li",{parentName:"ul"},"Templates on the Create screen are now sorted by owned items first"),(0,r.yg)("li",{parentName:"ul"},"The GUI Scale slider will now adjust based on how many scales are available per device"),(0,r.yg)("li",{parentName:"ul"},"Fixed the transparency of several skins"),(0,r.yg)("li",{parentName:"ul"},"Music change is now synchronized when moving between dimensions"),(0,r.yg)("li",{parentName:"ul"},"Crop blocks will no longer break if a block is placed above them"),(0,r.yg)("li",{parentName:"ul"},"The player list in Host Options will now properly scroll (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed firework explosion sound range being too low"),(0,r.yg)("li",{parentName:"ul"},"Mobs will no longer play sound effects twice when being spawned"),(0,r.yg)("li",{parentName:"ul"},"The crosshair will no longer appear when in third-person camera modes"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with charged Creeper and Wither shields not appearing (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when gliding with Elytra wings in split-screen (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Players can now use the A button to remove items when the Open Containers permission is set"),(0,r.yg)("li",{parentName:"ul"},"Fixed the missing sound effect when combining two items on an anvil"),(0,r.yg)("li",{parentName:"ul"},"The Host Options button is now visible on the chat screen while playing Realms with cheats enabled"),(0,r.yg)("li",{parentName:"ul"},"Fixed the arrow texture of the Observer item being flipped 180 degrees"),(0,r.yg)("li",{parentName:"ul"},"Fixed mobs not spawning in parts of the overworld"),(0,r.yg)("li",{parentName:"ul"},"Fixed the jump animation of ignited TNT"),(0,r.yg)("li",{parentName:"ul"},"Using '/execute tp' will now work with tildes and positive coordinates"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when trying to load a Realms member list with a large amount of members (iOS only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed the player permissions screen in the pause menu showing no options"),(0,r.yg)("li",{parentName:"ul"},"Fixed the How to Play screen in the pause menu showing no text"),(0,r.yg)("li",{parentName:"ul"},"When giving a player an item in the same tick as a '/clear' command, the item is no longer invisible until the player right-clicks on a block"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when using 'spawn","_","entity' in an Add-On 'min","_","wait","_","time' and 'max","_","wait","_","time' is the same"),(0,r.yg)("li",{parentName:"ul"},"Using middle mouse button to collect blocks when the first hotbar slot is left empty no longer causes items to vanish from the hotbar"),(0,r.yg)("li",{parentName:"ul"},"Chunks will now reappear without having to do move after resuming the game (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when suspending the game (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Pages will no longer disappear when editing Book & Quill by saving the content upon pressing the next and previous arrows"),(0,r.yg)("li",{parentName:"ul"},"Footstep audio is no longer played twice when one player is moving on split-screen (Xbox One only)"),(0,r.yg)("li",{parentName:"ul"},"Certain mobs that attack from a distance can no longer fire projectiles from their sides or backs due to their rotation being too slow"),(0,r.yg)("li",{parentName:"ul"},"Fixed the error message that appeared when attempting to download content without an internet connection"),(0,r.yg)("li",{parentName:"ul"},"Fixed the running animation speed while flying in Creative mode after pressing Fly Up for Fly Down"),(0,r.yg)("li",{parentName:"ul"},"Magma blocks no longer make the area around them darker than other blocks do"),(0,r.yg)("li",{parentName:"ul"},"Slightly increased the spawn rate of Ghasts"),(0,r.yg)("li",{parentName:"ul"},"Fixed the length of explosion particle animations"),(0,r.yg)("li",{parentName:"ul"},"Fixed trees taking too long to grow from saplings"),(0,r.yg)("li",{parentName:"ul"},"Dying an undyed Shulker box will no longer destroy the items contained in it"),(0,r.yg)("li",{parentName:"ul"},"The Recipe Book can now be used to dye a Shulker box that has been placed in the world at least once"),(0,r.yg)("li",{parentName:"ul"},"Crops will now grow roughly twice as fast as they used to"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when dropping items"),(0,r.yg)("li",{parentName:"ul"},"The Global Resources list will now properly update after closing Settings"),(0,r.yg)("li",{parentName:"ul"},'Clicking ""Save & Quit"" will now quickly lead to the Leave Level screen and the saving icon animation has been smoothed out'),(0,r.yg)("li",{parentName:"ul"},'The Host Options menu can now be used to change weather when the \'doweathercycle\' game rule is ""false""'),(0,r.yg)("li",{parentName:"ul"},"Fixed the controller hint when opening and closing the Recipe Book"),(0,r.yg)("li",{parentName:"ul"},"Fixed placeholder names for several skin packs")),(0,r.yg)("h2",{id:"world-conversion-bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"World Conversion Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed Nether Fortresses missing parts of floors and walls after world conversion"),(0,r.yg)("li",{parentName:"ul"},"Converted Witches and Bats no longer move faster than non-converted Witches and Bats"),(0,r.yg)("li",{parentName:"ul"},"Fixed converted Vindicators not having axes"),(0,r.yg)("li",{parentName:"ul"},"Fixed converted hopper minecarts not picking up items"),(0,r.yg)("li",{parentName:"ul"},"Fixed converted tame wolves not acting tame, although they visually appear to be tamed"),(0,r.yg)("li",{parentName:"ul"},"Fixed converted Endermen, spiders, cave spiders, and polar bears not becoming aggressive"),(0,r.yg)("li",{parentName:"ul"},"Bed spawn points are no longer being reversed to world spawn point coordinates"),(0,r.yg)("li",{parentName:"ul"},"Players will now spawn where they left off, instead of the initial world spawn after conversion"),(0,r.yg)("li",{parentName:"ul"},"Fixed banners that were created before conversion not stacking with new banners"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when loading a converted world in the End after defeating the dragon"),(0,r.yg)("li",{parentName:"ul"},"Firework stars no longer have the black firework star icon after conversion")))}d.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],d={toc:g},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}h.isMDXComponent=!0},62948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),o=n(34922),l=n(17287);const i={sidebar_position:99999992,title:"1.2.1",tags:["Official","Changelog","Stable","1.2"]},s="Minecraft - 1.2.1 (Bedrock)",c={unversionedId:"official_changelog/stable/1.2/1",id:"official_changelog/stable/1.2/1",title:"1.2.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.2/1.mdx",sourceDirName:"official_changelog/stable/1.2",slug:"/official_changelog/stable/1.2/1",permalink:"/en/docs/official_changelog/stable/1.2/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.2/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.2",permalink:"/en/docs/tags/1-2"}],version:"current",sidebarPosition:99999992,frontMatter:{sidebar_position:99999992,title:"1.2.1",tags:["Official","Changelog","Stable","1.2"]},sidebar:"changelogSidebar",previous:{title:"1.2.2",permalink:"/en/docs/official_changelog/stable/1.2/2"},next:{title:"1.2",permalink:"/en/docs/official_changelog/stable/1.2/"}},u={},g=[],d={toc:g},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft---121-bedrock"},"Minecraft - 1.2.1 (Bedrock)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);