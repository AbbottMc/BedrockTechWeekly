"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56295,64137,45779],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},58785:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/0/55/gameplay",id:"changelog_source/preview/1.16/0/55/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/0/55/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/55",slug:"/changelog_source/preview/1.16/0/55/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/0/55/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/55/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Known Issues in this beta:</strong>",id:"known-issues-in-this-beta",level:2},{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Graphics and Rendering</strong>",id:"graphics-and-rendering",level:2},{value:"<strong>Scripting and Add-ons</strong>",id:"scripting-and-add-ons",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This beta is a work in progress version of the full Nether Update. Some features seen in Java Edition snapshots may not yet be present."),(0,r.kt)("h2",{id:"known-issues-in-this-beta"},(0,r.kt)("strong",{parentName:"h2"},"Known Issues in this beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Thumbnail icons in the Marketplace are currently not loading in correctly")),(0,r.kt)("h1",{id:"fixes"},(0,r.kt)("strong",{parentName:"h1"},"Fixes:")),(0,r.kt)("h2",{id:"crashes-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Crashes and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when creating a new world on iOS\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when exiting a world with particles present\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed several crash issues related to the player entering water\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could happen when a mob's state changed\xa0")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Light propagation now works correctly, fixing hostile mob spawning (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49616"},"MCPE-49616"),")"),(0,r.kt)("li",{parentName:"ul"},"Chunks should no longer fail to load properly in +250MB worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58514"},"MCPE-58514"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug with light persisting after a block change"),(0,r.kt)("li",{parentName:"ul"},"Ticking areas can no longer be removed on the same tick they are created (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36769"},"MCPE-36769"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lighting now propagates correctly through chunk/subchunk borders (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58182"},"MCPE-58182"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause areas to show lighting errors on servers\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new overload for\xa0/replaceitem\xa0with an option for\xa0destroy\xa0(the old behavior) or\xa0keep\xa0(the command will return an error if an item occupies that slot)"),(0,r.kt)("li",{parentName:"ul"},"The smooth camera option (from full keyboard gameplay) is no longer jittery, and is smooth again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54969"},"MCPE-54969"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"The screen no longer twitches when the player dies in the Nether or End")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Water can now be collected from bubble columns using a bucket (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37571"},"MCPE-37571"),")"),(0,r.kt)("li",{parentName:"ul"},"Casting a fishing rod will no longer attach itself to a Parrot mounted on the player\u2019s shoulder (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60361"},"MCPE-60361"),")"),(0,r.kt)("li",{parentName:"ul"},"Fully grown Sweet Berry bushes can now be harvested when holding bone meal (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54206"},"MCPE-54206"),")"),(0,r.kt)("li",{parentName:"ul"},"Parity: Carrot on a stick, shield, and shovel now lose durability consistently in Bedrock\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fire charges are now consumed after lighting a tnt block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42938"},"MCPE-42938"),")"),(0,r.kt)("li",{parentName:"ul"},"Player icons no longer appear as white square on locator maps")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wall signs attached to doors are no longer left floating after the bottom half of the door is broken (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43748"},"MCPE-43748"),")\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creepers no longer lose aggro immediately after losing sight of its target (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32815"},"MCPE-32815"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Ghast hitbox now matches its rendering (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44326"},"MCPE-44326"),")"),(0,r.kt)("li",{parentName:"ul"},'Fixed the "MeleeAttackGoal" to allow entities to hit target entities beneath them'),(0,r.kt)("li",{parentName:"ul"},"The Iron Golem's legs don't swing as far anymore\xa0")),(0,r.kt)("h2",{id:"graphics-and-rendering"},(0,r.kt)("strong",{parentName:"h2"},"Graphics and Rendering")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Experience Orbs have been data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fireballs have been data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"NPC geometry and animations have been data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Items no longer flash green when being removed from a furnace"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where glass and water could be drawn incorrectly when close to each other\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the custom glint texture issue when added to compasses\xa0")),(0,r.kt)("h2",{id:"scripting-and-add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Scripting and Add-ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed\xa0type\xa0property from\xa0\u201cminecraft:shooter\u201d\xa0as it was never used"),(0,r.kt)("li",{parentName:"ul"},"Updated\xa0\u201cminecraft:spawn","_","entity\u201d\xa0to have an internal\xa0entities\xa0object or array"),(0,r.kt)("li",{parentName:"ul"},"Updated the \u201cminecraft:behavior.circle","_","around","_","anchor\u201dbehaviour"),(0,r.kt)("li",{parentName:"ul"},"Added \u201cattack","_","chance\u201d to the\xa0\u201cminecraft:behavior.defend","_","village","_","target\u201d\xa0goal"),(0,r.kt)("li",{parentName:"ul"},"Fixed removed or destroyed entities querying as valid in script\xa0"),(0,r.kt)("li",{parentName:"ul"},'Invalid items in the "spawn',"_",'item" field of a "minecraft:spawn',"_",'entity" now display an error\xa0'),(0,r.kt)("li",{parentName:"ul"},"\u201cStompEggGoal\u201d no longer uses \u201csearch","_","count\u201d as it now searches all blocks in the specified area\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0\u201cnavigation.walk\u201d\xa0to handle the case where it is used on a flying entity, so that the flying entity will not cause lag while it is touching the ground\xa0"),(0,r.kt)("li",{parentName:"ul"},"The\xa0\u201cminecraft:density","_","limit\u201d\xa0component is now documented in the Spawn Rules documentation section (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-61126"},"MCPE-61126"),")"),(0,r.kt)("li",{parentName:"ul"},"A content error will now show up if you provide an invalid item name to \u201cminecraft:interact\u201d in the \u201ctransform","_","to","_","item\u201d field")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},75125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(58785);const i={sidebar_position:99999922,title:"1.16.0.55",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.0.55  (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/0/55",id:"official_changelog/preview/1.16/0/55",title:"1.16.0.55",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/0/55.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/55",permalink:"/en/docs/official_changelog/preview/1.16/0/55",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/55.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999922,frontMatter:{sidebar_position:99999922,title:"1.16.0.55",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.57",permalink:"/en/docs/official_changelog/preview/1.16/0/57"},next:{title:"1.16.0.53",permalink:"/en/docs/official_changelog/preview/1.16/0/53"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---116055--xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.55  (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);