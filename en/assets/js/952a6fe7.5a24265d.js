"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61250,64137,81791,30985,79509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},21714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/30/20-21/gameplay",id:"changelog_source/preview/1.18/30/20-21/gameplay",title:"gameplay",description:"Posted: 3 March 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/30/20-21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/30/20-21",slug:"/changelog_source/preview/1.18/30/20-21/gameplay",permalink:"/en/docs/changelog_source/preview/1.18/30/20-21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/20-21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Information on the Minecraft Preview and Beta:\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:3},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Villagers</strong>",id:"villagers",level:3},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 3 March 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},"Information on the Minecraft Preview and Beta:\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preview Version: 1.18.30.21 | Beta Version: 1.18.30.20"),(0,r.kt)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content"),(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4577434378125/beta18U3_1_16x9_resized.jpg",alt:"A Minecraft Village scene with armour stands"})),(0,r.kt)("p",null,"There is a lot of preparation that goes into any move. You need to make sure that there\u2019s enough space for the furniture you want to bring in, make room for new pieces, and make sure that the lighting is always at its most flattering. Luckily, this move is going quite smoothly. I can still move quickly and most importantly, loudly, because we are only bringing in Sculk blocks at this stage and don\u2019t need to worry about waking the Warden yet. So take the opportunity to get familiar with the Sculk block family in peace thanks to this Beta. But don\u2019t get too comfortable. The Warden will be joining the Deep Dark eventually. Here's a list of what is new in this week's beta! As always please search and report any bugs you may find at ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h3",{id:"deep-dark"},(0,r.kt)("strong",{parentName:"h3"},"Deep Dark")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented Shrieker tweaks in preparation for the Warden, which will be added at a later date!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sculk Shrieker now listens to Sculk Sensor tendril clicking"),(0,r.kt)("li",{parentName:"ul"},"The threat level which will cause the Warden to spawn in the future now decreases over time")))),(0,r.kt)("h1",{id:"non-experimental-features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Non-Experimental Features and Bug Fixes")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed possible crashes on Android when suspending or resuming the app")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vertical field of view is no longer halved in horizontal split screen, making items such as Book & Quill easier to view when playing in split screen"),(0,r.kt)("li",{parentName:"ul"},"Tweaked surrounding terrain for structures such as Villages during world generation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145659"},"MCPE-145659"),")"),(0,r.kt)("li",{parentName:"ul"},"TNT no longer disappears when ignited with the 'TNT Explodes' game rule disabled and the 'Fire Spreads' game rule enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-82485"},"MCPE-82485"),")"),(0,r.kt)("li",{parentName:"ul"},"Gravity affected blocks now fall on Top Snow when placed above it instead of hovering over it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151407"},"MCPE-151407"),")")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players flying in Creative mode are no longer pushed by liquid current (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84592"},"MCPE-84592"),")"),(0,r.kt)("li",{parentName:"ul"},"Farmer Villagers can now use Bone Meal on crops and can turn excess Seeds into Bone Meal at their Composter (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74079"},"MCPE-74079"),")"),(0,r.kt)("li",{parentName:"ul"},"Protection Enchantment now properly works on most damage types (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40651"},"MCPE-40651"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a desync issue that could sometimes cause health to regenerate only visually"),(0,r.kt)("li",{parentName:"ul"},"Landing on a Stalagmite is now properly considered fall damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151192"},"MCPE-151192"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed some issues in where damage invulnerability wasn't properly being applied"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the Protection enchantments mitigated too much damage. This has been changed to match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-113191"},"MCPE-113191"),")"),(0,r.kt)("li",{parentName:"ul"},"Absorption Hearts no longer stay yellow while under the Wither effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131852"},"MCPE-131852"),")"),(0,r.kt)("li",{parentName:"ul"},"Added armor toughness"),(0,r.kt)("li",{parentName:"ul"},"Diamond Armor and Netherite Armor now have a toughness value of 2 and 3 respectively"),(0,r.kt)("li",{parentName:"ul"},"Tweaked armor reduction calculation to account for toughness"),(0,r.kt)("li",{parentName:"ul"},"Netherite Armor will now reduce more damage than Diamond Armor"),(0,r.kt)("li",{parentName:"ul"},"Lowered the amount of knockback resistance granted by Netherite Armor (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109408"},"MCPE-109408"),")"),(0,r.kt)("li",{parentName:"ul"},"Punching deals less damage now, to better match the Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152713"},"MCPE-152713"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug in the Glow Squid's texture where the glow map in the alpha channel was incorrect, causing patches of non-glowing texture to be seen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117507"},"MCPE-117507"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the crosshair disappearing when Outline Selection for blocks is disabled"),(0,r.kt)("li",{parentName:"ul"},"Players that are on fire now render fire in front of the player on the inventory screen regardless of in-game camera perspective (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147777"},"MCPE-147777"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a highlight effect on Leather Armor appearing on paperdolls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-75321"},"MCPE-75321"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bucket of Tropical Fish no longer displays the incorrect name after catching a fish")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The skin equip warning prompt once again appears when equipping a skin from a product page")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Ravager now targets and attacks the Wandering Trader (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44606"},"MCPE-44606"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs spawned from a Dispenser are now persistent (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110521"},"MCPE-110521"),")"),(0,r.kt)("li",{parentName:"ul"},"Shulkers no longer like to occupy the same block as another Shulker (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43972"},"MCPE-43972"),")"),(0,r.kt)("li",{parentName:"ul"},"Shulkers now prioritize attaching to neighboring block faces before trying to teleport away"),(0,r.kt)("li",{parentName:"ul"},"Shulkers now stay attached to the current attached blockface if it is valid, instead of switching to upright position")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed text in certain languages not being correctly rendered in the new Create New World screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151948"},"MCPE-151948"),")")),(0,r.kt)("h3",{id:"villagers"},(0,r.kt)("strong",{parentName:"h3"},"Villagers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cartographers now always unlock Woodland Explorer Map trade (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152725"},"MCPE-152725"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Correct error output is now displayed when attempting to use the /loot spawn command passing in the position of an unloaded area and there is 0 loot to drop"),(0,r.kt)("li",{parentName:"ul"},"Added '/loot ' command insert loot and insert kill overload"),(0,r.kt)("li",{parentName:"ul"},"Title commands fired before a client was done joining will now show instead of being ignored")))}p.isMDXComponent=!0},40928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/30/20-21/tech",id:"changelog_source/preview/1.18/30/20-21/tech",title:"tech",description:"Experimental",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/30/20-21/tech.mdx",sourceDirName:"changelog_source/preview/1.18/30/20-21",slug:"/changelog_source/preview/1.18/30/20-21/tech",permalink:"/en/docs/changelog_source/preview/1.18/30/20-21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/20-21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental</strong>",id:"experimental",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>JumpToBlock Behavior</strong>",id:"jumptoblock-behavior",level:2},{value:"<strong>Block Components</strong>",id:"block-components",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"experimental"},(0,r.kt)("strong",{parentName:"h2"},"Experimental")),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BlockExplodeEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property destroyedBlockPermutation"))),(0,r.kt)("li",{parentName:"ul"},"World additions for music management:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"queueMusic(trackName : string, musicOptions : MusicOptions)"),(0,r.kt)("li",{parentName:"ul"},"playMusic(trackName : string, musicOptions : MusicOptions)"),(0,r.kt)("li",{parentName:"ul"},"stopMusic()"),(0,r.kt)("li",{parentName:"ul"},"Added MusicOptions JS class with volume, fadeSeconds and loop properties"))),(0,r.kt)("li",{parentName:"ul"},"Added event\xa0entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)- Fires when an entity takes damage"),(0,r.kt)("li",{parentName:"ul"},"Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Removed "preventsjumpingcomponent" from data-driven blocks')),(0,r.kt)("h2",{id:"graphics"},(0,r.kt)("strong",{parentName:"h2"},"Graphics")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testing RenderDragon on all Android and iOS devices")),(0,r.kt)("h2",{id:"jumptoblock-behavior"},(0,r.kt)("strong",{parentName:"h2"},"JumpToBlock Behavior")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JumpToBlock behavior is now correctly affected by JumpBoost mob effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137432"},"MCPE-137432"),")")),(0,r.kt)("h2",{id:"block-components"},(0,r.kt)("strong",{parentName:"h2"},"Block Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a case where experimental BlockCollisionComponents did not allow partial specification")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},63899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(21714),i=a(40928);const s={sidebar_position:99999828,title:"1.18.30.20-21",tags:["Official","Changelog","Preview","1.18"]},c="Minecraft Beta & Preview - 1.18.30.20/21",u={unversionedId:"official_changelog/preview/1.18/30/20-21",id:"official_changelog/preview/1.18/30/20-21",title:"1.18.30.20-21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.18/30/20-21.mdx",sourceDirName:"official_changelog/preview/1.18/30",slug:"/official_changelog/preview/1.18/30/20-21",permalink:"/en/docs/official_changelog/preview/1.18/30/20-21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/30/20-21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999828,frontMatter:{sidebar_position:99999828,title:"1.18.30.20-21",tags:["Official","Changelog","Preview","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.30.22-23",permalink:"/en/docs/official_changelog/preview/1.18/30/22-23"},next:{title:"1.18.20.29-30",permalink:"/en/docs/official_changelog/preview/1.18/20/29-30"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---118302021"},"Minecraft Beta & Preview - 1.18.30.20/21"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);