"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79662,64137,51780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},73715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.12/0/9/gameplay",id:"changelog_source/preview/1.12/0/9/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.12/0/9/gameplay.mdx",sourceDirName:"changelog_source/preview/1.12/0/9",slug:"/changelog_source/preview/1.12/0/9/gameplay",permalink:"/en/docs/changelog_source/preview/1.12/0/9/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.12/0/9/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"For Map Makers and Add-On Creators:",id:"for-map-makers-and-add-on-creators",level:2},{value:"Fixes:",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("h2",{id:"for-map-makers-and-add-on-creators"},"For Map Makers and Add-On Creators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed the byte order mark at the beginning of function files if it exists"),(0,r.kt)("li",{parentName:"ul"},"Updated ScriptHotbarContainerComponent's generateDocumentation function to say it checks the player's first hotbar item slot, not their third"),(0,r.kt)("li",{parentName:"ul"},"Removing a timer component and adding a new one should no longer have the new timer inherit the old timer's time value"),(0,r.kt)("li",{parentName:"ul"},"Included a fix to allow for json content that refers to blocks with 'tile.' at the front of it to be looked up successfully\xa0")),(0,r.kt)("h2",{id:"fixes"},"Fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur on Nintendo Switch when the game was saving or loading (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45862"},"MCPE-45862"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a marketplace issue that could result in the game getting stuck or crashing when loading in content"),(0,r.kt)("li",{parentName:"ul"},"Made further performance improvements when opening inventory screens (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27167"},"MCPE-27167"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when signing in to Xbox Live"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when breaking a bell (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46636"},"MCPE-46636"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause the game to freeze or stop responding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46654"},"MCPE-46654"),")"),(0,r.kt)("li",{parentName:"ul"},"Made some further performance improvements around Villages and job sites"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when changing skinsFixed a crash that could occur when loading in a roaming skin"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur on SwitchSeveral other performance improvements, included some related to mob AI pathfinding\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The marketplace search screen now displays the proper pack icons"),(0,r.kt)("li",{parentName:"ul"},"Fixed Marketplace sale items not showing the discount percentage"),(0,r.kt)("li",{parentName:"ul"},"Marketplace sale items not longer change size when hovered over"),(0,r.kt)("li",{parentName:"ul"},"The 'New' tag will be properly removed from a Marketplace collection once it has been viewed"),(0,r.kt)("li",{parentName:"ul"},"Replaced some missing Marketplace screenshots"),(0,r.kt)("li",{parentName:"ul"},"Made improvements to the patch notes to make sure the correct ones show up after an update"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with skins not loading in correctly after restarting the game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Several fixes and improvements related to game invites:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that would prevent a player from creating or loading a world, or cause a crash, after attempting and failing to join another world via an invite"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented the player from joining a world or server after receiving an invite"),(0,r.kt)("li",{parentName:"ul"},'Players should no longer see the "Unable to connect to World" message when trying to enter own Realm or any area from Friends tab after failed attempt to join a game'))),(0,r.kt)("li",{parentName:"ul"},"Fixed a loading screen issue that could prevent split screen players on console from joining the world correctly\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was preventing players from feeding hay bales to animals in order to breed them"),(0,r.kt)("li",{parentName:"ul"},"Players now respawn at the correct spawn point when they die"),(0,r.kt)("li",{parentName:"ul"},"Players can now respawn successfully without having to exit and re-join the world first\xa0\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Iron Golems now sway when walking\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed the sitting model for cats that were previously tamed ocelots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41929"},"MCPE-41929"),")"),(0,r.kt)("li",{parentName:"ul"},"Enchanted armor and bows now show their shimmering effect again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45750"},"MCPE-45750"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a controller bug when navigating through the Marketplace"),(0,r.kt)("li",{parentName:"ul"},"The crafting grid no longer clears when the gamepad cursor moves to any non-recipe book slot\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was preventing custom blocks from registering successfully"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with custom items and blocks not requiring the namespace for slash commands")))))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},69170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(73715);const i={sidebar_position:99999959,title:"1.12.0.9",tags:["Official","Changelog","Preview","1.12"]},s="Minecraft Beta - 1.12.0.9 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.12/0/9",id:"official_changelog/preview/1.12/0/9",title:"1.12.0.9",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.12/0/9.mdx",sourceDirName:"official_changelog/preview/1.12/0",slug:"/official_changelog/preview/1.12/0/9",permalink:"/en/docs/official_changelog/preview/1.12/0/9",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.12/0/9.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.12",permalink:"/en/docs/tags/1-12"}],version:"current",sidebarPosition:99999959,frontMatter:{sidebar_position:99999959,title:"1.12.0.9",tags:["Official","Changelog","Preview","1.12"]},sidebar:"changelogSidebar",previous:{title:"1.12.0.10",permalink:"/en/docs/official_changelog/preview/1.12/0/10"},next:{title:"1.12.0.6",permalink:"/en/docs/official_changelog/preview/1.12/0/6"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11209-xbox-onewindows-10android"},"Minecraft Beta - 1.12.0.9 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);