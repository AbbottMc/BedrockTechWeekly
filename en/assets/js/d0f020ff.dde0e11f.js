"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[67480,40301,64137,81791,48365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,g=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var b=a(72389);const f="tabList__CuJ",w="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=d(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},27890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/51/gameplay",id:"changelog_source/preview/1.16/100/51/gameplay",title:"gameplay",description:"12 August 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/51/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/51",slug:"/changelog_source/preview/1.16/100/51/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/51/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/51/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>12 August 2020</strong>",id:"12-august-2020",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>New Achievements Screen</strong>",id:"new-achievements-screen",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"12-august-2020"},(0,r.kt)("strong",{parentName:"h2"},"12 August 2020")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes if a player opens a Shulker Box they're standing on after rejoining a multiplayer session (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60856"},"MCPE-60856)"))),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sea Turtles now play a sound when they lay eggs"),(0,r.kt)("li",{parentName:"ul"},"Dolphins will now dry out at the same rate as they do in Java Edition; 120 seconds"),(0,r.kt)("li",{parentName:"ul"},"Undamaged Mending items will no longer prevent damaged Mending items from being repaired (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80156"},"MCPE-80156"),")"),(0,r.kt)("li",{parentName:"ul"},"Basalt can no longer be destroyed by Ghast fireballs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-75252"},"MCPE-75252"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Basalt blocks now take slightly more time to destroy"),(0,r.kt)("li",{parentName:"ul"},"TNT no longer activates when a Redstone Torch is placed directly on it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81258"},"MCPE-81258"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Experience Orbs now float in water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64039"},"MCPE-64039"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Adjusted Netherite movement in lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65372"},"MCPE-65372"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Trade discounts from Hero of the Village and Curing Zombie Villagers now match the Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70782"},"MCPE-70782"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Pistons can no longer be extended above the build height limit or into the void (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37825"},"MCPE-37825"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51067"},"MCPE-51067"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grindstone no longer shows a result unless it changes the item (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54256"},"MCPE-54256"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Water from bubble columns now flows as it should (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36463"},"MCPE-36463"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Custom named boats and minecarts will now save their name after placing and breaking. Their names will also be shown in the world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-25845"},"MCPE-25845"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Smelted items (prior to 1.13) no longer contain incorrect damage values and can be stacked (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54617"},"MCPE-54617"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Hostile mobs can now spawn in thunderstorms during the day (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-34409"},"MCPE-34409"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Shearing a Snow Golem now drops a carved pumpkin (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66967"},"MCPE-66967"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bees now leave their hive/nest after an allotted time in the End and Nether dimensions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58322"},"MCPE-58322"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Water now flows correctly near edges\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could cause falling blocks to duplicate near a portal (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68229"},"MCPE-68229"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Villagers no longer get locked into the wrong profession (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62080"},"MCPE-62080"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dragon Egg no longer disappears if placed on pedestal and Ender Dragon is respawned (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-78400"},"MCPE-78400"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Music is no longer interrupted when entering water in ocean biomes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76213"},"MCPE-76213"),")"),(0,r.kt)("li",{parentName:"ul"},"Saplings will no longer incorrectly transform into a bee nest when next to a tree and flowers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80543"},"MCPE-80543"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Hoppers with containers above them can no longer collect dropped items (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80555"},"MCPE-80555"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Gravity affected blocks no longer break when their supporting block is moved by a piston (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81106"},"MCPE-81106"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Podzol no longer generates below the top layer when spawning large spruce trees (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71995"},"MCPE-71995"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused rails to not be powered correctly along the x-axis (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81987"},"MCPE-81987"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Turtles and Dolphins on land will now successfully move towards water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44918"},"MCPE-44918"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Compass items will now point the correct direction when the player is in a boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-56876"},"MCPE-56876"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mob's inactivity timer is now reset when closer than 32 blocks from the nearest player\xa0"),(0,r.kt)("li",{parentName:"ul"},"Ghasts once again spawn in all light levels (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85747"},"MCPE-85747"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Vex movement along the x and z directions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41879"},"MCPE-41879"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Blaze now switch between melee attack and ranged attack based on the distance from the player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45469"},"MCPE-45469"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Falling blocks now break after falling for extended periods of time (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73124"},"MCPE-73124"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Name tags now work correctly again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65535"},"MCPE-65535"),")"),(0,r.kt)("li",{parentName:"ul"},"Collecting fish with a bucket now works more consistently\xa0\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a visual issue where clicking to edit the text box in the NPC dialog would not show the caret (Education Edition Features)")),(0,r.kt)("h2",{id:"new-achievements-screen"},(0,r.kt)("strong",{parentName:"h2"},"New Achievements Screen")),(0,r.kt)("p",null,"We have made some tweaks to the new achievements screen that is available to some beta players (through a gradual roll-out). Please continue to share your feedback on it in\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/mcAchievementBeta"},"this post"),"!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gamepad bumpers can now be used to switch tabs in the achievements screen\xa0"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the default focus on the tabs in the achievements screen\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added extra space between the end of the list and the "input legend" at the bottom'),(0,r.kt)("li",{parentName:"ul"},'The achievement detail screen now shows "Completed on other platform" section')))}p.isMDXComponent=!0},77121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/51/tech",id:"changelog_source/preview/1.16/100/51/tech",title:"tech",description:"-   Fix for ItemDescriptors",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/51/tech.mdx",sourceDirName:"changelog_source/preview/1.16/100/51",slug:"/changelog_source/preview/1.16/100/51/tech",permalink:"/en/docs/changelog_source/preview/1.16/100/51/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/51/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix for ItemDescriptors"),(0,r.kt)("li",{parentName:"ul"},'Item names of the format "minecraft:item.someitem" no longer need the "item." portion and it will be ignored'),(0,r.kt)("li",{parentName:"ul"},"Added Entity Movement Prediction")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}h.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}h.isMDXComponent=!0},67993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(27890),i=a(77121);const s={sidebar_position:99999906,title:"1.16.100.51",tags:["Official","Changelog","Preview","1.16"]},c="Minecraft Beta - 1.16.100.51 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.16/100/51",id:"official_changelog/preview/1.16/100/51",title:"1.16.100.51",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/100/51.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/51",permalink:"/en/docs/official_changelog/preview/1.16/100/51",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/51.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999906,frontMatter:{sidebar_position:99999906,title:"1.16.100.51",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.52",permalink:"/en/docs/official_changelog/preview/1.16/100/52"},next:{title:"1.16.100.50",permalink:"/en/docs/official_changelog/preview/1.16/100/50"}},p={},m=[],h={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11610051-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.51 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);