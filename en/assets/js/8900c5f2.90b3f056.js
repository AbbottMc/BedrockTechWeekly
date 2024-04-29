"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68727,31798,64137,81791,77470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},14165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/23/gameplay",id:"changelog_source/preview/1.19/50/23/gameplay",title:"gameplay",description:"Posted: 3rd November 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/50/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/50/23",slug:"/changelog_source/preview/1.19/50/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/50/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>API</strong>",id:"api",level:2},{value:"<strong>Bamboo Woodset</strong>",id:"bamboo-woodset",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Camel</strong>",id:"camel",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Sound</strong>",id:"sound",level:2},{value:"<strong>Features</strong> <strong>and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay-1",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Realms</strong>",id:"realms",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User</strong> <strong>Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 3rd November 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/10309737817741",alt:"Picture1.jpg"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Features")),(0,r.kt)("h2",{id:"api"},(0,r.kt)("strong",{parentName:"h2"},"API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where property velocity would return incorrect values in certain situations (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152715"},"MCPE-152715"),")"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"canPlace")," - Returns if it is valid to place the desired block type or block permutation at a specified location (and optional face of the block)"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"trySetPermutation")," - Attempts to place the desired block permutation at a location by first checking ",(0,r.kt)("em",{parentName:"li"},"canPlace"))),(0,r.kt)("h2",{id:"bamboo-woodset"},(0,r.kt)("strong",{parentName:"h2"},"Bamboo Woodset")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name displayed for \u201cBamboo Raft with Chest\u201d is now \u201cRaft with Chest\u201d (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163327"},"MCPE-163327"),")"),(0,r.kt)("li",{parentName:"ul"},"When dismounting from Raft and Raft with Chest the correct tooltip is now shown (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163326"},"MCPE-163326"),")")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Place" prompt is now displayed correctly for all variations of Sign and Hanging Sign when using a controller'),(0,r.kt)("li",{parentName:"ul"},"Mobs now pathfind properly on top of side-attached Hanging Signs")),(0,r.kt)("h2",{id:"camel"},(0,r.kt)("strong",{parentName:"h2"},"Camel")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can no longer ride Camels through/in deep water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163608"},"MCPE-163608"),")"),(0,r.kt)("li",{parentName:"ul"},"Sitting Camels do not play the sitting down animation on load anymore, instead they are loaded already sitting"),(0,r.kt)("li",{parentName:"ul"},"Camels can now auto step up one and a half blocks without jumping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163322"},"MCPE-163322"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running '/execute as' from Command Blocks no longer inherits rotation from entity (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162680"},"MCPE-162680"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs could replace Spore Blossoms and Big Dripleaf"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs could attach to Bamboo Saplings"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where using pick-block on a double Bamboo Mosaic Slab or breaking it would give a Bamboo Slab (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163906"},"MCPE-163906"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Bamboo Saplings not breaking when pushed by Pistons")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Chain Command Blocks would not activate when Delay in Ticks was greater than 0")),(0,r.kt)("h2",{id:"sound"},(0,r.kt)("strong",{parentName:"h2"},"Sound")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs would not be affected by block volume  ")),(0,r.kt)("h2",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Features")," ",(0,r.kt)("strong",{parentName:"h2"},"and Bug Fixes")),(0,r.kt)("h2",{id:"gameplay-1"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boats and Boats with Chest are no longer teleported to (0, 0, 0) when pushed by a Piston (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163330"},"MCPE-163330"),")")),(0,r.kt)("h2",{id:"general-1"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed improper LevelChunk blending when upgrading pre-1.18 worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162480"},"MCPE-162480"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added D3D12 support for Intel Integrated/Dedicated Graphics for compatible drivers")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issues with Book & Quill not able to be signed and closed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163325"},"MCPE-163325"),")")),(0,r.kt)("h2",{id:"realms"},(0,r.kt)("strong",{parentName:"h2"},"Realms")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shortened text when uploading worlds and add-ons so it fits in the dialog"),(0,r.kt)("li",{parentName:"ul"},"You will no longer get an error message when joining a Realm that has been empty for several minutes")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigating through the Recipe Book when the player had items that contain mobs in their inventory no longer causes significant drops in performance (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-146462"},"MCPE-146462"),")"),(0,r.kt)("li",{parentName:"ul"},"Reduced server lag with items going in and out of Hoppers\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68796"},"MCPE-68796"),")")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the Dismount button in the New Touch Control Schemes looking blurry (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156722"},"MCPE-156722"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User")," ",(0,r.kt)("strong",{parentName:"h2"},"Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug in Pocket UI Inventory screen, where items could not be dropped back to inventory in Creative Mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug in Pocket UI Inventory screen, where the \u2018Craftable/All\u2019 toggle could only be changed in the Search tab but not in any other tab"),(0,r.kt)("li",{parentName:"ul"},"On Xbox, camera movement with mouse no longer changes mouse position when menu is reopened (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162890"},"MCPE-162890"),")"),(0,r.kt)("li",{parentName:"ul"},"Text color for a selected item stack count is now white instead of yellow")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting killed by a mob with a renamed weapon no longer produces a death message with a redundant 's' at the end (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163283"},"MCPE-163283"),")")),(0,r.kt)("h2",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h2"},"Spectator Mode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When entering Spectator Mode while typing on a Sign, the Sign text screen now closes"),(0,r.kt)("li",{parentName:"ul"},"If you swap into Spectator Mode while standing alone on a Pressure Plate, you lose weight and the Pressure Plate releases (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163177"},"MCPE-163177"),")")))}m.isMDXComponent=!0},36966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/23/tech",id:"changelog_source/preview/1.19/50/23/tech",title:"tech",description:"Stability and Performance",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/50/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/50/23",slug:"/changelog_source/preview/1.19/50/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/50/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Xbox controller stick deadzone and sensitivity (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162847"},"MCPE-162847"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed the Upcoming Creator Features requirement for the new execute command syntax"),(0,r.kt)("li",{parentName:"ul"},"Version 1.19.50 is now required to run the new command syntax"),(0,r.kt)("li",{parentName:"ul"},"Creators currently using the new execute command syntax in command blocks will have to go modify those command blocks in order to update those commands"),(0,r.kt)("li",{parentName:"ul"},"Creators currently using the new execute command in behavior packs will need to change the min engine version to 1.19.50"),(0,r.kt)("li",{parentName:"ul"},"The previous execute command syntax can still be used by using version 1.19.40 or less")))}m.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},33928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(14165),i=a(36966);const s={sidebar_position:99999792,title:"1.19.50.23",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.50.23",u={unversionedId:"official_changelog/preview/1.19/50/23",id:"official_changelog/preview/1.19/50/23",title:"1.19.50.23",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/50/23.mdx",sourceDirName:"official_changelog/preview/1.19/50",slug:"/official_changelog/preview/1.19/50/23",permalink:"/en/docs/official_changelog/preview/1.19/50/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/50/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999792,frontMatter:{sidebar_position:99999792,title:"1.19.50.23",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.50.24",permalink:"/en/docs/official_changelog/preview/1.19/50/24"},next:{title:"1.19.50.22",permalink:"/en/docs/official_changelog/preview/1.19/50/22"}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1195023"},"Minecraft Beta & Preview - 1.19.50.23"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);