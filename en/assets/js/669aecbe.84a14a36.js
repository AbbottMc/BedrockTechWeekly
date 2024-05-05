"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89378,31164,1922],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||o;return t?n.createElement(d,l(l({ref:a},u),{},{components:t})):n.createElement(d,l({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>N});var n=t(58168),r=t(96540),o=t(20053),l=t(23104),i=t(56347),s=t(57485),c=t(31682),u=t(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,c]=d({queryString:t,groupId:n}),[g,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=s??g;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const a=e.currentTarget,t=g.indexOf(a),n=c[t].value;n!==i&&(p(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;a=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;a=g[t]??g[g.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>g.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),t??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(w,(0,n.A)({},e,a)))}function N(e){const a=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},45424:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.12/0/3/gameplay",id:"changelog_source/preview/1.12/0/3/gameplay",title:"gameplay",description:"Posted: May 1, 2019",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.12/0/3/gameplay.mdx",sourceDirName:"changelog_source/preview/1.12/0/3",slug:"/changelog_source/preview/1.12/0/3/gameplay",permalink:"/en/docs/changelog_source/preview/1.12/0/3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.12/0/3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>For Add-On Creators:</strong>",id:"for-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c},g="wrapper";function p(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," May 1, 2019"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The "Store" button on the main menu has been renamed to "Marketplace"')),(0,r.yg)("h2",{id:"for-add-on-creators"},(0,r.yg)("strong",{parentName:"h2"},"For Add-On Creators:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Behavior Pack template once again contains the 'spawn","_","rules' folder"),(0,r.yg)("li",{parentName:"ul"},"Recipe and item JSON files have been added to the Behavior Pack template"),(0,r.yg)("li",{parentName:"ul"},"Grab the latest Behavior Pack template at ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MinecraftAddons"},"aka.ms/MinecraftAddons"))),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when loading certain marketplace worlds"),(0,r.yg)("li",{parentName:"ul"},"Improved performance around villages and villager job sites"),(0,r.yg)("li",{parentName:"ul"},"Fixed a memory leak that occurred with the Script Engine"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updated the main menu splash text"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where consuming the last item in a stack to unlock an achievement could cause the achievement not to unlock"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Player models no longer have flipped arms and legs. Ouch! (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44718"},"MCPE-44718"),")"),(0,r.yg)("li",{parentName:"ul"},"The Haggler achievement once again unlocks when requirements are met"),(0,r.yg)("li",{parentName:"ul"},"Villager trading now properly takes away items from the second slot, when applicable"),(0,r.yg)("li",{parentName:"ul"},"Shields and tridents are no longer invisible when held (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44647"},"MCPE-44647"),")"),(0,r.yg)("li",{parentName:"ul"},"Players no longer see through the world when clipping into blocks after leaving a boat (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42593"},"MCPE-42593"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Tamed tuxedo cats now use the proper texture (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43527"},"MCPE-43527"),")"),(0,r.yg)("li",{parentName:"ul"},"Stray cats can no longer claim beds in villages for worlds converted from version 1.10 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44299"},"MCPE-44299"),")"),(0,r.yg)("li",{parentName:"ul"},"Villagers now always spawn as V1 when using template worlds, including Marketplace worlds"),(0,r.yg)("li",{parentName:"ul"},"Witches no longer jump when attacking"),(0,r.yg)("li",{parentName:"ul"},"Fixed some geometry animation issues for various skin packs"),(0,r.yg)("li",{parentName:"ul"},"The ghast spinning model in monster spawners is now the correct size"),(0,r.yg)("li",{parentName:"ul"},"Improved pathing for variable sized mobs"),(0,r.yg)("li",{parentName:"ul"},"Zombies and vindicators now break doors down faster :D"),(0,r.yg)("li",{parentName:"ul"},"Fixed wandering trader podzol and coral trades"),(0,r.yg)("li",{parentName:"ul"},"Fletchers now trade 16 arrows instead of 5"),(0,r.yg)("li",{parentName:"ul"},"Changed the cost of butcher's cooked rabbit trade"),(0,r.yg)("li",{parentName:"ul"},"Leatherworker's saddle trade is lowered from 10 to 6 emeralds"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Flowing lava once again turns into cobblestone when hit by water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43990"},"MCPE-43990"),")"),(0,r.yg)("li",{parentName:"ul"},"Frosted ice blocks can now be broken (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41256"},"MCPE-41256"),")"),(0,r.yg)("li",{parentName:"ul"},"Slabs and other non-solid blocks once again prevent grass from growing on dirt (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42975"},"MCPE-42975"),")"),(0,r.yg)("li",{parentName:"ul"},"Logs can once again be turned into stripped logs with axes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44680"},"MCPE-44680"),")"),(0,r.yg)("li",{parentName:"ul"},"Rails at a T-junction once again change directions when powered by redstone (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44735"},"MCPE-44735"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed smokers not having the correct texture underneath (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43944"},"MCPE-43944"),")"),(0,r.yg)("li",{parentName:"ul"},"Armor stands can once again hold armor stand items"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Correct colors of wool are now displayed as a material required to create colored banners in the recipe book"),(0,r.yg)("li",{parentName:"ul"},"Fixed several items not losing durability when used"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Graphical")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The player's arm is no longer displaced in first person view after eating food (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40135"},"MCPE-40135"),")"),(0,r.yg)("li",{parentName:"ul"},"Composter growth particles now appear in the correct location"),(0,r.yg)("li",{parentName:"ul"},"Fixed animated textures for flowing lava and water on several texture packs"),(0,r.yg)("li",{parentName:"ul"},"Bamboo Leaves are now lighter and match the Java texture (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42635"},"MCPE-42635"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed gray textures that sometimes appeared on doors and trapdoors"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Attempting to combine stacks of the same item no longer swaps them instead on touch controls"),(0,r.yg)("li",{parentName:"ul"},"Items are no longer lost when swapping to and from the off-hand slot on touch controls (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44706"},"MCPE-44706"),")"),(0,r.yg)("li",{parentName:"ul"},"The How to Play button on the Cartography Table now directs to the proper screen"),(0,r.yg)("li",{parentName:"ul"},"Sweet berries no longer disappear on the hotbar when they are highlight"),(0,r.yg)("li",{parentName:"ul"},"Killing a wandering trader's llama can no longer show their inventory screen"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Commands")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed \"tile\" prefix in the '/give' command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44667"},"MCPE-44667"),")"),(0,r.yg)("li",{parentName:"ul"},'Blocks and entities that aren\'t available in the Creative inventory no longer require the "minecraft" namespace when used as parameters in slash commands'),(0,r.yg)("li",{parentName:"ul"},"Commands can now be auto-completed on command blocks without leading with a / (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44679"},"MCPE-44679"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"'minecraft:entity","_","use","_","item' documentation now generates correctly"),(0,r.yg)("li",{parentName:"ul"},"Corrected Block Event descriptions"),(0,r.yg)("li",{parentName:"ul"},"Custom entities now correctly re-evaluate current target validity"),(0,r.yg)("li",{parentName:"ul"},"'getBlocks' now returns a 3D array of block objects"),(0,r.yg)("li",{parentName:"ul"},"Fixed incorrect component name for entities with the new 'water","_","movement 'component"),(0,r.yg)("li",{parentName:"ul"},"getBlock and getBlocks now correctly handle getting a block when given an actor position (or any non-integer position)")))))}p.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),o=t(18228),l=t(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},95425:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),o=t(34922),l=t(45424);const i={sidebar_position:99999962,title:"1.12.0.3",tags:["Official","Changelog","Preview","1.12"]},s="Minecraft Beta - 1.12.0.3 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.12/0/3",id:"official_changelog/preview/1.12/0/3",title:"1.12.0.3",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.12/0/3.mdx",sourceDirName:"official_changelog/preview/1.12/0",slug:"/official_changelog/preview/1.12/0/3",permalink:"/en/docs/official_changelog/preview/1.12/0/3",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.12/0/3.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.12",permalink:"/en/docs/tags/1-12"}],version:"current",sidebarPosition:99999962,frontMatter:{sidebar_position:99999962,title:"1.12.0.3",tags:["Official","Changelog","Preview","1.12"]},sidebar:"changelogSidebar",previous:{title:"1.12.0.4",permalink:"/en/docs/official_changelog/preview/1.12/0/4"},next:{title:"1.12.0.2",permalink:"/en/docs/official_changelog/preview/1.12/0/2"}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11203-xbox-onewindows-10android"},"Minecraft Beta - 1.12.0.3 (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);