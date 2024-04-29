"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84436,64137,72921],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},49279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.12/0/3/gameplay",id:"changelog_source/preview/1.12/0/3/gameplay",title:"gameplay",description:"Posted: May 1, 2019",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.12/0/3/gameplay.mdx",sourceDirName:"changelog_source/preview/1.12/0/3",slug:"/changelog_source/preview/1.12/0/3/gameplay",permalink:"/en/docs/changelog_source/preview/1.12/0/3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.12/0/3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>For Add-On Creators:</strong>",id:"for-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," May 1, 2019"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Store" button on the main menu has been renamed to "Marketplace"')),(0,r.kt)("h2",{id:"for-add-on-creators"},(0,r.kt)("strong",{parentName:"h2"},"For Add-On Creators:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Behavior Pack template once again contains the 'spawn","_","rules' folder"),(0,r.kt)("li",{parentName:"ul"},"Recipe and item JSON files have been added to the Behavior Pack template"),(0,r.kt)("li",{parentName:"ul"},"Grab the latest Behavior Pack template at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MinecraftAddons"},"aka.ms/MinecraftAddons"))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when loading certain marketplace worlds"),(0,r.kt)("li",{parentName:"ul"},"Improved performance around villages and villager job sites"),(0,r.kt)("li",{parentName:"ul"},"Fixed a memory leak that occurred with the Script Engine"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updated the main menu splash text"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where consuming the last item in a stack to unlock an achievement could cause the achievement not to unlock"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Player models no longer have flipped arms and legs. Ouch! (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44718"},"MCPE-44718"),")"),(0,r.kt)("li",{parentName:"ul"},"The Haggler achievement once again unlocks when requirements are met"),(0,r.kt)("li",{parentName:"ul"},"Villager trading now properly takes away items from the second slot, when applicable"),(0,r.kt)("li",{parentName:"ul"},"Shields and tridents are no longer invisible when held (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44647"},"MCPE-44647"),")"),(0,r.kt)("li",{parentName:"ul"},"Players no longer see through the world when clipping into blocks after leaving a boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42593"},"MCPE-42593"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tamed tuxedo cats now use the proper texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43527"},"MCPE-43527"),")"),(0,r.kt)("li",{parentName:"ul"},"Stray cats can no longer claim beds in villages for worlds converted from version 1.10 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44299"},"MCPE-44299"),")"),(0,r.kt)("li",{parentName:"ul"},"Villagers now always spawn as V1 when using template worlds, including Marketplace worlds"),(0,r.kt)("li",{parentName:"ul"},"Witches no longer jump when attacking"),(0,r.kt)("li",{parentName:"ul"},"Fixed some geometry animation issues for various skin packs"),(0,r.kt)("li",{parentName:"ul"},"The ghast spinning model in monster spawners is now the correct size"),(0,r.kt)("li",{parentName:"ul"},"Improved pathing for variable sized mobs"),(0,r.kt)("li",{parentName:"ul"},"Zombies and vindicators now break doors down faster :D"),(0,r.kt)("li",{parentName:"ul"},"Fixed wandering trader podzol and coral trades"),(0,r.kt)("li",{parentName:"ul"},"Fletchers now trade 16 arrows instead of 5"),(0,r.kt)("li",{parentName:"ul"},"Changed the cost of butcher's cooked rabbit trade"),(0,r.kt)("li",{parentName:"ul"},"Leatherworker's saddle trade is lowered from 10 to 6 emeralds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Flowing lava once again turns into cobblestone when hit by water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43990"},"MCPE-43990"),")"),(0,r.kt)("li",{parentName:"ul"},"Frosted ice blocks can now be broken (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41256"},"MCPE-41256"),")"),(0,r.kt)("li",{parentName:"ul"},"Slabs and other non-solid blocks once again prevent grass from growing on dirt (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42975"},"MCPE-42975"),")"),(0,r.kt)("li",{parentName:"ul"},"Logs can once again be turned into stripped logs with axes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44680"},"MCPE-44680"),")"),(0,r.kt)("li",{parentName:"ul"},"Rails at a T-junction once again change directions when powered by redstone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44735"},"MCPE-44735"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed smokers not having the correct texture underneath (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43944"},"MCPE-43944"),")"),(0,r.kt)("li",{parentName:"ul"},"Armor stands can once again hold armor stand items"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Correct colors of wool are now displayed as a material required to create colored banners in the recipe book"),(0,r.kt)("li",{parentName:"ul"},"Fixed several items not losing durability when used"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The player's arm is no longer displaced in first person view after eating food (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40135"},"MCPE-40135"),")"),(0,r.kt)("li",{parentName:"ul"},"Composter growth particles now appear in the correct location"),(0,r.kt)("li",{parentName:"ul"},"Fixed animated textures for flowing lava and water on several texture packs"),(0,r.kt)("li",{parentName:"ul"},"Bamboo Leaves are now lighter and match the Java texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42635"},"MCPE-42635"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed gray textures that sometimes appeared on doors and trapdoors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Attempting to combine stacks of the same item no longer swaps them instead on touch controls"),(0,r.kt)("li",{parentName:"ul"},"Items are no longer lost when swapping to and from the off-hand slot on touch controls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44706"},"MCPE-44706"),")"),(0,r.kt)("li",{parentName:"ul"},"The How to Play button on the Cartography Table now directs to the proper screen"),(0,r.kt)("li",{parentName:"ul"},"Sweet berries no longer disappear on the hotbar when they are highlight"),(0,r.kt)("li",{parentName:"ul"},"Killing a wandering trader's llama can no longer show their inventory screen"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed \"tile\" prefix in the '/give' command (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44667"},"MCPE-44667"),")"),(0,r.kt)("li",{parentName:"ul"},'Blocks and entities that aren\'t available in the Creative inventory no longer require the "minecraft" namespace when used as parameters in slash commands'),(0,r.kt)("li",{parentName:"ul"},"Commands can now be auto-completed on command blocks without leading with a / (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44679"},"MCPE-44679"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'minecraft:entity","_","use","_","item' documentation now generates correctly"),(0,r.kt)("li",{parentName:"ul"},"Corrected Block Event descriptions"),(0,r.kt)("li",{parentName:"ul"},"Custom entities now correctly re-evaluate current target validity"),(0,r.kt)("li",{parentName:"ul"},"'getBlocks' now returns a 3D array of block objects"),(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect component name for entities with the new 'water","_","movement 'component"),(0,r.kt)("li",{parentName:"ul"},"getBlock and getBlocks now correctly handle getting a block when given an actor position (or any non-integer position)")))))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},84324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(49279);const i={sidebar_position:99999962,title:"1.12.0.3",tags:["Official","Changelog","Preview","1.12"]},s="Minecraft Beta - 1.12.0.3 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.12/0/3",id:"official_changelog/preview/1.12/0/3",title:"1.12.0.3",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.12/0/3.mdx",sourceDirName:"official_changelog/preview/1.12/0",slug:"/official_changelog/preview/1.12/0/3",permalink:"/en/docs/official_changelog/preview/1.12/0/3",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.12/0/3.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.12",permalink:"/en/docs/tags/1-12"}],version:"current",sidebarPosition:99999962,frontMatter:{sidebar_position:99999962,title:"1.12.0.3",tags:["Official","Changelog","Preview","1.12"]},sidebar:"changelogSidebar",previous:{title:"1.12.0.4",permalink:"/en/docs/official_changelog/preview/1.12/0/4"},next:{title:"1.12.0.2",permalink:"/en/docs/official_changelog/preview/1.12/0/2"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11203-xbox-onewindows-10android"},"Minecraft Beta - 1.12.0.3 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);