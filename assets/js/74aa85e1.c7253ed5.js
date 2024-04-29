"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[28625,45100,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(w,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},75207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.13/0/2/gameplay",id:"changelog_source/preview/1.13/0/2/gameplay",title:"gameplay",description:"Posted:\xa0July 10, 2019",source:"@site/docs/changelog_source/preview/1.13/0/2/gameplay.mdx",sourceDirName:"changelog_source/preview/1.13/0/2",slug:"/changelog_source/preview/1.13/0/2/gameplay",permalink:"/docs/changelog_source/preview/1.13/0/2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.13/0/2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:"),"\xa0July 10, 2019"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,n.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,n.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,n.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur while downloading multiple marketplace items at the same time on some iOS devices\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a drop in performance when flying with elytra in The End"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when Villagers tried to pathfind\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when exiting the game after a multiplayer session\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when trying to join a server\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using a Phantom spawn egg on a mob spawner block\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when loading in Ocean Monuments\xa0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"General")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Corrected the arm movement on Oculus Rift immersive mode\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed various text to speech reader issues"),(0,n.kt)("li",{parentName:"ul"},"Chat instructions no longer appear on screen each time the player travels through a portal (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45073"},"MCPE-45073"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed the spacing of some of the menu buttons"),(0,n.kt)("li",{parentName:"ul"},"Fixed sneaking while sleeping bug"),(0,n.kt)("li",{parentName:"ul"},"Fixed the positioning of several held items"),(0,n.kt)("li",{parentName:"ul"},"Fixed the hand placement for various Marketplace skins when holding an item\xa0"),(0,n.kt)("li",{parentName:"ul"},"Structure block wireframe toggle now properly hides and shows the wireframe"),(0,n.kt)("li",{parentName:"ul"},"Fixed zombie pigman sword position\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed camera position when the player sleeps"),(0,n.kt)("li",{parentName:"ul"},"Fixed elytra position for Marketplace skins that don\u2019t use the standard humanoid model\xa0"),(0,n.kt)("li",{parentName:"ul"},"Structure block load mode now has include entities and remove blocks options"),(0,n.kt)("li",{parentName:"ul"},"Players no longer lose items when moving stacks of items into a cartography table"),(0,n.kt)("li",{parentName:"ul"},"Fixed some text characters with accents showing up as spaces instead (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47908"},"MCPE-47908"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed hand position when switching from item to bare hand in first person"),(0,n.kt)("li",{parentName:"ul"},"Adjusted position of player arms while holding maps for certain Marketplace skins with short and long arms\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where using Education Edition in a world would also change the menus and options (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47952"},"MCPE-47952"),")\xa0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gameplay")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed issues related to unloaded chunks that could appear in Realms and Local worlds\xa0 (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-1553"},"REALMS-1553"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the player could get stuck in the loading screen when trying to join a world or use a nether portal (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44816"},"MCPE-44816"),")"),(0,n.kt)("li",{parentName:"ul"},"Leaves collected with silk touch now stack correctly with other leaves of the same type (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32347"},"MCPE-32347"),")"),(0,n.kt)("li",{parentName:"ul"},"Parrots now sit correctly on a player's shoulder when passing by\xa0"),(0,n.kt)("li",{parentName:"ul"},"Jukeboxes now stop playing music after being broken"),(0,n.kt)("li",{parentName:"ul"},"Wither health bar no longer disappears during the fight if the player moves away (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40881"},"MCPE-40881"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed the default recipe for beds"),(0,n.kt)("li",{parentName:"ul"},"Joining a Realm through the 'joinable friends' list now loads the Realms UI rather than the normal multiplayer UI (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47731"},"MCPE-47731"),")"),(0,n.kt)("li",{parentName:"ul"},"Eating when using a nether portal can cause the player to teleport to a random location (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39147"},"MCPE-39147"),")\xa0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Mobs")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Foxes no longer run away from players that are sneaking"),(0,n.kt)("li",{parentName:"ul"},"Foxes no longer run away instead of being tempted\xa0"),(0,n.kt)("li",{parentName:"ul"},"Foxes now move at the same speed in Bedrock and Java\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added back the blue effect from Charged Creeper to Wither shield\xa0"),(0,n.kt)("li",{parentName:"ul"},"Foxes are no longer tempted by the player holding food\xa0"),(0,n.kt)("li",{parentName:"ul"},"Breeding two red Foxes in a snowy biome now makes a red Fox baby\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed Fox nap goal cooldown\xa0"),(0,n.kt)("li",{parentName:"ul"},"Foxes no longer drown themselves while trying to catch and eat fish\xa0"),(0,n.kt)("li",{parentName:"ul"},"Villagers can now reach their job sites correctly (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47884"},"MCPE-47884"),")"),(0,n.kt)("li",{parentName:"ul"},"Trusted Foxes now correctly lose aggro after getting revenge"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Blocks")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Horizontal wood blocks now drop the correct version of block"),(0,n.kt)("li",{parentName:"ul"},"TNT can now crafted from red sand as well as normal sand"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"User Interface")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed duplicated 'Sign In' messages that were overlapping"),(0,n.kt)("li",{parentName:"ul"},"Removed duplicated download progress bar\xa0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Blocks no longer stutter while falling when a script uses getBlocks\xa0"),(0,n.kt)("li",{parentName:"ul"},"Scripting: Ticking areas now have a property showing whether they are fully loaded or not\xa0"),(0,n.kt)("li",{parentName:"ul"},"Custom rideable entities now show the correct action hint when added")))))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},24171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(75207);const i={sidebar_position:99999952,title:"1.13.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},s="Minecraft Beta - 1.13.0.2 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.13/0/2",id:"official_changelog/preview/1.13/0/2",title:"1.13.0.2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.13/0/2.mdx",sourceDirName:"official_changelog/preview/1.13/0",slug:"/official_changelog/preview/1.13/0/2",permalink:"/docs/official_changelog/preview/1.13/0/2",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.13/0/2.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.13",permalink:"/docs/tags/1-13"}],version:"current",sidebarPosition:99999952,frontMatter:{sidebar_position:99999952,title:"1.13.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},sidebar:"changelogSidebar",previous:{title:"1.13.0.4",permalink:"/docs/official_changelog/preview/1.13/0/4"},next:{title:"1.13.0.1",permalink:"/docs/official_changelog/preview/1.13/0/1"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta---11302-xbox-onewindows-10android"},"Minecraft Beta - 1.13.0.2 (Xbox One/Windows 10/Android)"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);