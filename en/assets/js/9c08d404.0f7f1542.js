"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51332,64137,10655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(72389);const f="tabList_TRJ7",k="tabItem_hGfb";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},77563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/0/61/gameplay",id:"changelog_source/preview/1.16/0/61/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/0/61/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/61",slug:"/changelog_source/preview/1.16/0/61/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/0/61/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/61/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h1",{id:"fixes"},"Fixes"),(0,r.kt)("h2",{id:"crashes-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Crashes and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash at launch on Samsung Galaxy S Duos 2"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur in the End\xa0"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when the /kill command is used while the dragon is respawning"),(0,r.kt)("li",{parentName:"ul"},"Fixed some crashes that occurred when changing dimensions, including going through portals with tamed animals"),(0,r.kt)("li",{parentName:"ul"},"Using the /fill command with Soul Fire no longer causes the game to crash (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65672"},"MCPE-65672"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue when reloading characters wearing classic skins\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved reliability of loading characters (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55968"},"MCPE-55968"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved offline support for characters"),(0,r.kt)("li",{parentName:"ul"},"Classic skins are now loaded before Character Creator skins on multiplayer servers"),(0,r.kt)("li",{parentName:"ul"},"An error message will now appear when the uploading and downloading world file size exceeds maximum"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause a failure when trying to import large worlds with limited space available on Windows 10")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed mob population cap to only count mobs with spawn rules (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54378"},"MCPE-54378"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mob despawn range is now tied to Simulation Range (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65570"},"MCPE-65570"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Villagers to not link up to job sites correctly in multiplayer worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49580"},"MCPE-49580"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause overlapping Villages to be repeatedly created and destroyed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Parity: Water now freezes from the edges, matching the Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fall damage protection will now work as expected from tall heights\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")"),(0,r.kt)("li",{parentName:"ul"},"Flying too fast with elytra into an unloaded chunk will no longer cause death by kinetic energy\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55671"},"MCPE-55671"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed ravines not being positioned correctly compared to older versions"),(0,r.kt)("li",{parentName:"ul"},"Fixed players being able to duplicate items by closing the title while on the respawn menu\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dropping items enchanted with Vanishing now works correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65649"},"MCPE-65649"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can now only enchant one compass at a time, using an anvil in Survival"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Redstone torches to get stuck on or off when reloading a world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause Kelp to stop growing too soon - Kelp now checks the block in the ticking queue when attempting to add itself (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57330"},"MCPE-57330"),")"),(0,r.kt)("li",{parentName:"ul"},"Feather Falling and Protection enchantments now give the correct player damage protection (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parrots no longer get stuck in flight mode\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64370"},"MCPE-64370"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs that panic now do so for all damage types\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs that can pick up armour now prioritise Iron over Chainmail\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Walls now connect to most blocks placed above them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65404"},"MCPE-65404"),")"),(0,r.kt)("li",{parentName:"ul"},"Falling blocks are now broken by partial blocks that are placed above piston arms facing up"),(0,r.kt)("li",{parentName:"ul"},"Mushroom Stems now drop the correct block when mined with a Silk Touch tool (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Target block redstone signal duration is based on projectile type, long for trident and arrows, short for other projectiles\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65413"},"MCPE-65413"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Redstone torches will no longer get stuck on or off when reloading the world\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Conditional setting for command blocks is now saved when copying via Structure Block\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue which allowed Jack 'o Lanterns to be placed on the side of blocks, breaking some Marketplace content\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mushroom stems no longer drop brown mushroom blocks when silk touched (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where chunks would flicker after altering render distance values"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused maps to become invisible (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76166"},"MCPE-76166"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Paintings now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69652"},"MCPE-69652"),")"),(0,r.kt)("li",{parentName:"ul"},"Beacon beams now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")"),(0,r.kt)("li",{parentName:"ul"},"The flame animation now shows correctly on burning mobs and flame arrows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that stopped animated textures working correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76180"},"MCPE-76180"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented firework particles from appearing correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76341"},"MCPE-76341"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Tooltip backgrounds and the controller cursor now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76154"},"MCPE-76154"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76168"},"MCPE-76168"),")\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused enchanted items to flicker with cursor movement"),(0,r.kt)("li",{parentName:"ul"},"Fixed an unhelpful error message that appeared when trying to play online without proper account permissions\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed getting stuck loading resources after pressing 'Back' while on the\xa0'Your Realm will soon be updated screen\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented native text/character input when using Korean or Chinese virtual keyboards (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62596"},"MCPE-62596"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed text on signs extending past the edge of the sign (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64315"},"MCPE-64315"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed account error number -9 being displayed when launching the game while signed into an account, but no network connection\xa0"),(0,r.kt)("li",{parentName:"ul"},"Parity: Anvils now read \u201cEnchantment Cost\u201d rather than \u201cXP Cost\u201d\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that occasionally prevented inventory items being selected when using touch controls with classic UI\xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with teleporting 'tick","_","world' entities over large distances could cause them to disappear\xa0"),(0,r.kt)("li",{parentName:"ul"},"Now when teleporting an Armor Stand to a player, it rotates the Armor Stand to the player's orientation\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35979"},"MCPE-35979"),")")),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elytra is now data-driven"),(0,r.kt)("li",{parentName:"ul"},"Custom bones in geometry now respect their custom parent bones' transformations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed particles spawning with lifetimes that were less than 2x the current frame time would often not draw at all. This affected the ghost trail for the Advanced Mining content, and any other content that has particles with lifetimes that are really short")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},46692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(77563);const i={sidebar_position:99999916,title:"1.16.0.61",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/0/61",id:"official_changelog/preview/1.16/0/61",title:"1.16.0.61",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/0/61.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/61",permalink:"/en/docs/official_changelog/preview/1.16/0/61",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/61.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999916,frontMatter:{sidebar_position:99999916,title:"1.16.0.61",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.63",permalink:"/en/docs/official_changelog/preview/1.16/0/63"},next:{title:"1.16.0.60",permalink:"/en/docs/official_changelog/preview/1.16/0/60"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---116061-xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);