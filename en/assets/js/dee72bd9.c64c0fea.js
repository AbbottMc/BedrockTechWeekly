"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88795,31164,58508],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,p=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==i&&(g(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/59/gameplay",id:"changelog_source/preview/1.16/100/59/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/59/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/59",slug:"/changelog_source/preview/1.16/100/59/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/59/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/59/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Changes</strong>",id:"changes",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Technical Changes</strong>",id:"technical-changes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add Block</strong>",id:"add-block",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Item Icon Component</strong>",id:"item-icon-component",level:2},{value:"<strong>Data Driven Blocks</strong>",id:"data-driven-blocks",level:2}],u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions  ")),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"RenderDragon has been re-enabled in this beta  ")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that occurred during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occasionally occur while flying or moving around the game world")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Signs can no longer be placed on end rods"),(0,r.yg)("li",{parentName:"ul"},"Blocks that can only be obtained with commands no longer have a placeholder tooltip (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100760"},"MCPE-100760"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed Crimson Roots, Warped Roots and Nether Sprouts not generating in the Nether (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100614"},"MCPE-100614"),")"),(0,r.yg)("li",{parentName:"ul"},"Walls converted from Console Edition saves are now joined properly")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Item lock icon and tooltip no longer appear when the Show Tags game rule is false"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing some item recipes to be missing from the crafting window (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100257"},"MCPE-100257"),")"),(0,r.yg)("li",{parentName:"ul"},"Armor no longer gets stuck in the hot bar after interacting with an armor stand (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84368"},"MCPE-84368"),")"),(0,r.yg)("li",{parentName:"ul"},"Added Book & Quill back to the Creative item inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100361"},"MCPE-100361"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the 'Profile' button in the Pause Menu not being sized correctly  ")),(0,r.yg)("h2",{id:"technical-changes"},(0,r.yg)("strong",{parentName:"h2"},"Technical Changes")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added the ability to pick between different shake types using the '/camerashake'"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where custom items were not added to the Creative item inventory and therefore could not be used with commands"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where a request queued with '/schedule' would not clear out when executed and would execute when re-entering a level"),(0,r.yg)("li",{parentName:"ul"},"Added to the '/schedule on","_","area","_","loaded' command an overload that allows you to track a circular area, by specifying a center and a radius. Also added serialization for the queue of requests"),(0,r.yg)("li",{parentName:"ul"},"Fixed issues with the '/schedule' command that would consider an area loaded before it was actually loaded, and the command now respects which dimension it is queued in")),(0,r.yg)("h2",{id:"add-block"},(0,r.yg)("strong",{parentName:"h2"},"Add Block")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed issue with Blocks sync"),(0,r.yg)("li",{parentName:"ul"},"Add Block content is not allowed to use Vanilla Block identifiers to avoid content collisions"),(0,r.yg)("li",{parentName:"ul"},"'SetBlockAtPos' does not modify the block position from incoming parameters")),(0,r.yg)("h2",{id:"components"},(0,r.yg)("strong",{parentName:"h2"},"Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a Lock in Inventory component that can be applied to an item via the 'give' and 'replaceitem' commands. This prevents the item from being removed from the player's inventory, dropped, or crafted with. Example of use: ","`",'/give @s apple 1 0 {"item',"_",'lock": {"mode": "lock',"_","in","_",'inventory"}}',"`"),(0,r.yg)("li",{parentName:"ul"},"Added a Lock in Slot component that can be applied to an item via the 'give' and 'replaceitem' commands. This prevents the item from being moved or removed from its slot in the player's inventory, dropped, or crafted with. Example of use: '/give @s apple 1 0 {\"item","_",'lock": {"mode": "lock',"_","in","_","slot\"}}'"),(0,r.yg)("li",{parentName:"ul"},"Added a Keep on Death component which can be applied to an item via the 'give' and 'replaceitem' commands. This component prevents the item from being dropped when the player dies. Example of use: '/give @s apple 1 0 {\"keep","_","on","_","death\": {}}'")),(0,r.yg)("h2",{id:"item-icon-component"},(0,r.yg)("strong",{parentName:"h2"},"Item Icon Component")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Items now have an easy way to set the icon for an item for displaying in the user interface"),(0,r.yg)("li",{parentName:"ul"},"Component Variables",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'"texture": Full path to icon image to use as item\'s icon. No default'),(0,r.yg)("li",{parentName:"ul"},'"frame": Molang script to be executed at runtime to determine the icon\'s current frame. Can be a constant, defaults to: 0'),(0,r.yg)("li",{parentName:"ul"},'"legacy',"_","texture","_",'id": The name of the texture used on legacy items. No default'),(0,r.yg)("li",{parentName:"ul"},'"legacy',"_","frame\": Molang script to be executed at runtime to determine the icon's current frame. Can be a constant, defaults to: 0")))),(0,r.yg)("h2",{id:"data-driven-blocks"},(0,r.yg)("strong",{parentName:"h2"},"Data Driven Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added the BlockDisplayNameComponent to allow display names to be configured in the localization table"),(0,r.yg)("li",{parentName:"ul"},"Made 'entity","_","collision' and 'pick","_","collision' take into account the rotation on a block"),(0,r.yg)("li",{parentName:"ul"},"Fixed animations not running on mobs spawned with custom events"),(0,r.yg)("li",{parentName:"ul"},"Added support for the 'on","_","interact' trigger component"),(0,r.yg)("li",{parentName:"ul"},"Improved support for 'on","_","interact' modifying the item used, e.g. change durability or set into another item"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where 'on","_","interact' would duplicate the item used if an event response killed the player"),(0,r.yg)("li",{parentName:"ul"},"Fixed custom items functioning or rendering correctly on the client in a client/server scenario")))}g.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],g={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}p.isMDXComponent=!0},45641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(34922),l=n(8400);const i={sidebar_position:99999896,title:"1.16.100.59",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.100.59 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/59",id:"official_changelog/preview/1.16/100/59",title:"1.16.100.59",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/100/59.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/59",permalink:"/en/docs/official_changelog/preview/1.16/100/59",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/59.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999896,frontMatter:{sidebar_position:99999896,title:"1.16.100.59",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.60",permalink:"/en/docs/official_changelog/preview/1.16/100/60"},next:{title:"1.16.100.58",permalink:"/en/docs/official_changelog/preview/1.16/100/58"}},u={},d=[],g={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11610059-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.59 (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);