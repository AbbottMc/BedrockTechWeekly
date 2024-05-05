"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[62563,31164,46644],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||o;return t?n.createElement(d,l(l({ref:a},u),{},{components:t})):n.createElement(d,l({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>N});var n=t(58168),r=t(96540),o=t(20053),l=t(23104),i=t(56347),s=t(57485),c=t(31682),u=t(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,c]=d({queryString:t,groupId:n}),[g,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=s??g;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const a=e.currentTarget,t=g.indexOf(a),n=c[t].value;n!==i&&(p(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;a=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;a=g[t]??g[g.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>g.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),t??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(w,(0,n.A)({},e,a)))}function N(e){const a=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},35474:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/0/61/gameplay",id:"changelog_source/preview/1.16/0/61/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/0/61/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/61",slug:"/changelog_source/preview/1.16/0/61/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/0/61/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/61/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2}],u={toc:c},g="wrapper";function p(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.yg)("h1",{id:"fixes"},"Fixes"),(0,r.yg)("h2",{id:"crashes-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Crashes and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash at launch on Samsung Galaxy S Duos 2"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur in the End\xa0"),(0,r.yg)("li",{parentName:"ul"},"The game no longer crashes when the /kill command is used while the dragon is respawning"),(0,r.yg)("li",{parentName:"ul"},"Fixed some crashes that occurred when changing dimensions, including going through portals with tamed animals"),(0,r.yg)("li",{parentName:"ul"},"Using the /fill command with Soul Fire no longer causes the game to crash (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65672"},"MCPE-65672"),")")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue when reloading characters wearing classic skins\xa0"),(0,r.yg)("li",{parentName:"ul"},"Improved reliability of loading characters (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55968"},"MCPE-55968"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Improved offline support for characters"),(0,r.yg)("li",{parentName:"ul"},"Classic skins are now loaded before Character Creator skins on multiplayer servers"),(0,r.yg)("li",{parentName:"ul"},"An error message will now appear when the uploading and downloading world file size exceeds maximum"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could cause a failure when trying to import large worlds with limited space available on Windows 10")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Changed mob population cap to only count mobs with spawn rules (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54378"},"MCPE-54378"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Mob despawn range is now tied to Simulation Range (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65570"},"MCPE-65570"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Villagers to not link up to job sites correctly in multiplayer worlds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49580"},"MCPE-49580"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could cause overlapping Villages to be repeatedly created and destroyed\xa0"),(0,r.yg)("li",{parentName:"ul"},"Parity: Water now freezes from the edges, matching the Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Fall damage protection will now work as expected from tall heights\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")"),(0,r.yg)("li",{parentName:"ul"},"Flying too fast with elytra into an unloaded chunk will no longer cause death by kinetic energy\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55671"},"MCPE-55671"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed ravines not being positioned correctly compared to older versions"),(0,r.yg)("li",{parentName:"ul"},"Fixed players being able to duplicate items by closing the title while on the respawn menu\xa0"),(0,r.yg)("li",{parentName:"ul"},"Dropping items enchanted with Vanishing now works correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65649"},"MCPE-65649"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Players can now only enchant one compass at a time, using an anvil in Survival"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Redstone torches to get stuck on or off when reloading a world (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could cause Kelp to stop growing too soon - Kelp now checks the block in the ticking queue when attempting to add itself (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57330"},"MCPE-57330"),")"),(0,r.yg)("li",{parentName:"ul"},"Feather Falling and Protection enchantments now give the correct player damage protection (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")\xa0")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Parrots no longer get stuck in flight mode\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64370"},"MCPE-64370"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Mobs that panic now do so for all damage types\xa0"),(0,r.yg)("li",{parentName:"ul"},"Mobs that can pick up armour now prioritise Iron over Chainmail\xa0")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Walls now connect to most blocks placed above them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65404"},"MCPE-65404"),")"),(0,r.yg)("li",{parentName:"ul"},"Falling blocks are now broken by partial blocks that are placed above piston arms facing up"),(0,r.yg)("li",{parentName:"ul"},"Mushroom Stems now drop the correct block when mined with a Silk Touch tool (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Target block redstone signal duration is based on projectile type, long for trident and arrows, short for other projectiles\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65413"},"MCPE-65413"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Redstone torches will no longer get stuck on or off when reloading the world\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Conditional setting for command blocks is now saved when copying via Structure Block\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue which allowed Jack 'o Lanterns to be placed on the side of blocks, breaking some Marketplace content\xa0"),(0,r.yg)("li",{parentName:"ul"},"Mushroom stems no longer drop brown mushroom blocks when silk touched (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where chunks would flicker after altering render distance values"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that caused maps to become invisible (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76166"},"MCPE-76166"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Paintings now render correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69652"},"MCPE-69652"),")"),(0,r.yg)("li",{parentName:"ul"},"Beacon beams now render correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")"),(0,r.yg)("li",{parentName:"ul"},"The flame animation now shows correctly on burning mobs and flame arrows (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that stopped animated textures working correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76180"},"MCPE-76180"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that prevented firework particles from appearing correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76341"},"MCPE-76341"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Tooltip backgrounds and the controller cursor now render correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76154"},"MCPE-76154"),", ",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76168"},"MCPE-76168"),")\xa0")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that caused enchanted items to flicker with cursor movement"),(0,r.yg)("li",{parentName:"ul"},"Fixed an unhelpful error message that appeared when trying to play online without proper account permissions\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed getting stuck loading resources after pressing 'Back' while on the\xa0'Your Realm will soon be updated screen\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that prevented native text/character input when using Korean or Chinese virtual keyboards (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62596"},"MCPE-62596"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed text on signs extending past the edge of the sign (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64315"},"MCPE-64315"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed account error number -9 being displayed when launching the game while signed into an account, but no network connection\xa0"),(0,r.yg)("li",{parentName:"ul"},"Parity: Anvils now read \u201cEnchantment Cost\u201d rather than \u201cXP Cost\u201d\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that occasionally prevented inventory items being selected when using touch controls with classic UI\xa0")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with teleporting 'tick","_","world' entities over large distances could cause them to disappear\xa0"),(0,r.yg)("li",{parentName:"ul"},"Now when teleporting an Armor Stand to a player, it rotates the Armor Stand to the player's orientation\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35979"},"MCPE-35979"),")")),(0,r.yg)("h2",{id:"add-ons"},(0,r.yg)("strong",{parentName:"h2"},"Add-Ons")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Elytra is now data-driven"),(0,r.yg)("li",{parentName:"ul"},"Custom bones in geometry now respect their custom parent bones' transformations\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed particles spawning with lifetimes that were less than 2x the current frame time would often not draw at all. This affected the ghost trail for the Advanced Mining content, and any other content that has particles with lifetimes that are really short")))}p.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),o=t(18228),l=t(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},72235:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),o=t(34922),l=t(35474);const i={sidebar_position:99999916,title:"1.16.0.61",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/0/61",id:"official_changelog/preview/1.16/0/61",title:"1.16.0.61",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/0/61.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/61",permalink:"/en/docs/official_changelog/preview/1.16/0/61",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/61.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999916,frontMatter:{sidebar_position:99999916,title:"1.16.0.61",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.63",permalink:"/en/docs/official_changelog/preview/1.16/0/63"},next:{title:"1.16.0.60",permalink:"/en/docs/official_changelog/preview/1.16/0/60"}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---116061-xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);