"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74432,64137,52606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},96857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/55/gameplay",id:"changelog_source/preview/1.16/100/55/gameplay",title:"gameplay",description:"Posted:\xa010 September 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/55/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/55",slug:"/changelog_source/preview/1.16/100/55/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/55/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/55/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>New Achievement Screens</strong>",id:"new-achievement-screens",level:2},{value:"<strong>Technical Changes</strong>",id:"technical-changes",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Audio</strong>",id:"audio",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:"),"\xa010 September 2020"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h1",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Bug Fixes")),(0,r.kt)("h2",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Game no longer crashes if a player opens a Shulker Box they're standing on after rejoining a multiplayer session"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash when using /fill command with Portal to fill huge amount of blocks")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Baby Zoglins now have cute oversized heads (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65454"},"MCPE-65454"),")"),(0,r.kt)("li",{parentName:"ul"},"Shroomlight block can now be used with the Composter (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-82999"},"MCPE-82999"),")"),(0,r.kt)("li",{parentName:"ul"},"Crimson Fungus and Warped Fungus can now be placed on Mycelium blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-88588"},"MCPE-88588"),")"),(0,r.kt)("li",{parentName:"ul"},"Observers will no longer get stuck in an active state when moved by a piston (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-61175"},"MCPE-61175"),")"),(0,r.kt)("li",{parentName:"ul"},'The "Thing" banner can now be crafted at the Loom (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70449"},"MCPE-70449"),")"),(0,r.kt)("li",{parentName:"ul"},"All expected blocks and items can now be composted again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94671"},"MCPE-94671"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Portal blocks placed with /setblock or /fill commands that are not part of a valid portal structure will only exist for 1 second before they are removed"),(0,r.kt)("li",{parentName:"ul"},"Foxes will no longer take damage when falling on berries (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-82273"},"MCPE-82273"),")"),(0,r.kt)("li",{parentName:"ul"},"Text and background for the title command (Title, Subtitle, and Actionbar) have been adjusted and spaced out"),(0,r.kt)("li",{parentName:"ul"},"Dressing room now shows cached Character Creator items when offline"),(0,r.kt)("li",{parentName:"ul"},"24 bit PNGs without an alpha channel are no longer accepted as valid custom skins (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50094"},"MCPE-50094"),")"),(0,r.kt)("li",{parentName:"ul"},"Added a native splash screen with the new Mojang Studios logo on Android (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79353"},"MCPE-79353"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boots enchanted with Soul Speed no longer become stuck on mobs or the player after breaking (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-75375"},"MCPE-75375"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglin Brutes preserve equipment when zombified (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-83683"},"MCPE-83683"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The Smithing Table screen now contains hammer icon and UI elements appear correctly when using the "Pocket" UI profile setting (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79541"},"MCPE-79541"),")")),(0,r.kt)("h2",{id:"new-achievement-screens"},(0,r.kt)("strong",{parentName:"h2"},"New Achievement Screens")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Made the reward frame on the list item the same as the art frame"),(0,r.kt)("li",{parentName:"ul"},"Improved the tap visual feedback"),(0,r.kt)("li",{parentName:"ul"},"Decreased safe zone size"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where it was impossible to move focus away from Back button using a keyboard"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the new achievement screens would sometimes incorrectly apply safe zone along the split in split screen mode, instead of just at the window edges")),(0,r.kt)("h2",{id:"technical-changes"},(0,r.kt)("strong",{parentName:"h2"},"Technical Changes")),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bandwidth optimization: make sure level event packets only broadcast locally"),(0,r.kt)("li",{parentName:"ul"},'Spatial Bandwidth Optimizations are now exposed through a component, "minecraft:conditional',"_","bandwidth","_",'optimization"'),(0,r.kt)("li",{parentName:"ul"},'Spatial Bandwidth Optimizations are now utilized by every actor using "minecraft:conditional',"_","bandwidth","_",'optimization"'),(0,r.kt)("li",{parentName:"ul"},"Added the selector component to raw text which can be used to print entity names in commands such as 'tellraw' and 'titleraw'"),(0,r.kt)("li",{parentName:"ul"},"Structures are no longer cut off when loaded using the /structure command")),(0,r.kt)("h2",{id:"audio"},(0,r.kt)("strong",{parentName:"h2"},"Audio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xa0FMOD music channel now sets its priority to 0 when music is played to prevent FMOD virtual channel from stealing it when a regular sound is played in game (default priority is 128)")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},53442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(96857);const i={sidebar_position:99999901,title:"1.16.100.55",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.100.55 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/55",id:"official_changelog/preview/1.16/100/55",title:"1.16.100.55",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/100/55.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/55",permalink:"/en/docs/official_changelog/preview/1.16/100/55",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/55.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999901,frontMatter:{sidebar_position:99999901,title:"1.16.100.55",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.56",permalink:"/en/docs/official_changelog/preview/1.16/100/56"},next:{title:"1.16.100.54",permalink:"/en/docs/official_changelog/preview/1.16/100/54"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11610055-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.55 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);