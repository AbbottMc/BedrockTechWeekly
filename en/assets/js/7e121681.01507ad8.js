"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27445,64137,81791,79294,14336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},14348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/22/gameplay",id:"changelog_source/preview/1.19/10/22/gameplay",title:"gameplay",description:"Posted: 8th June 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/10/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/10/22",slug:"/changelog_source/preview/1.19/10/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/10/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:3},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Allay Duplication</strong>",id:"allay-duplication",level:2},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:2},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:3},{value:"<strong>Sculk Catalyst</strong>",id:"sculk-catalyst",level:2},{value:"<strong>Warden</strong>",id:"warden",level:3},{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Mobile Controls</strong>",id:"mobile-controls",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Player</strong>",id:"player",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity-1",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 8th June 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/6757809355277/beta19U1_3_16x9.jpg",alt:"Minecraft Allay Mobs"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Renamed "Flowered Azalea Leaves" to "Flowering Azalea Leaves"'),(0,r.kt)("li",{parentName:"ul"},"Goat Horn now has the same sound for the \u201cCall\u201d variant as Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154886"},"MCPE-154886"),")"),(0,r.kt)("li",{parentName:"ul"},"The last sound for Goat Horn was renamed from \u201cResist\u201d to \u201cDream\u201d to match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155059"},"MCPE-155059"),")")),(0,r.kt)("h3",{id:"spectator-mode-experimental"},(0,r.kt)("strong",{parentName:"h3"},"Spectator Mode (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While in Spectator Mode, actors in other chunks are no longer culled away")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allays can now follow players through Nether portals (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155678"},"MCPE-155678"),")")),(0,r.kt)("h2",{id:"allay-duplication"},(0,r.kt)("strong",{parentName:"h2"},"Allay Duplication")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When an Allay hears a Jukebox playing, it will do a dance animation"),(0,r.kt)("li",{parentName:"ul"},"If the Jukebox stops playing, or if the allay gets too far away from the Jukebox, it will stop dancing"),(0,r.kt)("li",{parentName:"ul"},"If the Allay is given an Amethyst Shard while dancing, it will play a small amethyst sound, make a heart, and duplicate into another Allay"),(0,r.kt)("li",{parentName:"ul"},"After duplication, both Allays will have a 2.5-minute cooldown before being able to duplicate again")),(0,r.kt)("h2",{id:"deep-dark"},(0,r.kt)("strong",{parentName:"h2"},"Deep Dark")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amethyst Clusters are no longer destroyed if attached to a Sculk Sensor")),(0,r.kt)("h3",{id:"sculk-shrieker"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Shrieker")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Shrieker particles are now correctly rendered from behind (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153591"},"MCPE-153591"),")")),(0,r.kt)("h2",{id:"sculk-catalyst"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Catalyst")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a mob dies in proximity of multiple Sculk Catalysts, only the closest one will bloom"),(0,r.kt)("li",{parentName:"ul"},'The "It Spreads" achievement is no longer unlocked when a Sculk Catalysts blooms after the death of a mob which carries no XP')),(0,r.kt)("h3",{id:"warden"},(0,r.kt)("strong",{parentName:"h3"},"Warden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No more graphical artifacts from the Warden emerge or dig particle effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153580"},"MCPE-153580"),")")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frogs no longer lay Frogspawn on shallow, flowing water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152559"},"MCPE-152559"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issues with mobs disappearing after going through Nether portals (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155678"},"MCPE-155678"),")"),(0,r.kt)("li",{parentName:"ul"},"Resistance effect is no longer one level weaker than it should be (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156012"},"MCPE-156012"),")"),(0,r.kt)("li",{parentName:"ul"},"Haste I will now properly increase the player's mining speed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102237"},"MCPE-102237"),")"),(0,r.kt)("li",{parentName:"ul"},"Conduit Power I now grants the effect of Haste I instead of Haste II"),(0,r.kt)("li",{parentName:"ul"},"Container entities like Boat with Chest can now be opened on mobile devices without crouching if all the seats are occupied")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lapis Lazuli Block is now named Block of Lapis Lazuli (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105452"},"MCPE-105452"),")"),(0,r.kt)("li",{parentName:"ul"},"Cut Copper Slab and its variants can now be placed on the top half of a block on the first attempt (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154302"},"MCPE-154302"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pillagers and Vindicator Captains spawned with commands are once again hostile by default (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116971"},"MCPE-116971"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ensured content errors are not ignored when loading entity JSON schemas with invalid value types for following fields: The "Runtime',"_",'Identifier", "Is',"_",'Spawnable" and "Is',"_",'Summonable" fields for "description", the "component',"_",'groups" field and the "event" field for "events" (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151381"},"MCPE-151381"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where new users given Operator permissions by default were not able to use operator commands"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where worlds that give Operator permissions to new users only give Member permissions")),(0,r.kt)("h2",{id:"mobile-controls"},(0,r.kt)("strong",{parentName:"h2"},"Mobile Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated icon for Interact Button")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fog setting with negative fog start will no longer cause flame on player model in UI get tainted by fog color"),(0,r.kt)("li",{parentName:"ul"},"\u201cparticles","_","blend\u201d material is no longer culled in RenderDragon")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Carved Pumpkins launched from Dispensers weren't equipping to nearby mobs")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parrots once again are poisoned by Cookies (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151671"},"MCPE-151671"),")")),(0,r.kt)("h2",{id:"player"},(0,r.kt)("strong",{parentName:"h2"},"Player")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The player no longer endlessly jumps after entering a boat while holding down the jump button (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155774"},"MCPE-155774"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur if a mob has the flocking component")),(0,r.kt)("h2",{id:"vanilla-parity-1"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")))}p.isMDXComponent=!0},1551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/22/tech",id:"changelog_source/preview/1.19/10/22/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/10/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/10/22",slug:"/changelog_source/preview/1.19/10/22/tech",permalink:"/en/docs/changelog_source/preview/1.19/10/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/22/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Hunger</strong>",id:"hunger",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where projectiles with an offset weren't spawned based on the player's rotation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153880"},"MCPE-153880"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cake blocks emit blockChange game events when slices are eaten")),(0,r.kt)("h2",{id:"hunger"},(0,r.kt)("strong",{parentName:"h2"},"Hunger")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exhaustion component now uses new correct default values (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154238"},"MCPE-154238"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please note, add-on packs that alter the player.json may need to ensure that the player saturation rate is set correctly to match the default values if required")))),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"general-1"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed the 'minecraft:block","_","light","_","filter' component to 'minecraft:light","_","dampening'"),(0,r.kt)("li",{parentName:"ul"},"Renamed the 'part visibility' component's field 'rules' to 'conditions'"),(0,r.kt)("li",{parentName:"ul"},"Renamed the 'crafting","_","table' component's field 'custom","_","description' to 'table","_","name'")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loading a world no longer takes a very long time when having the Holiday Creator Features toggle enabled")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},90322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(14348),i=a(1551);const s={sidebar_position:99999813,title:"1.19.10.22",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.10.22",u={unversionedId:"official_changelog/preview/1.19/10/22",id:"official_changelog/preview/1.19/10/22",title:"1.19.10.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/10/22.mdx",sourceDirName:"official_changelog/preview/1.19/10",slug:"/official_changelog/preview/1.19/10/22",permalink:"/en/docs/official_changelog/preview/1.19/10/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/10/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999813,frontMatter:{sidebar_position:99999813,title:"1.19.10.22",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.10.23",permalink:"/en/docs/official_changelog/preview/1.19/10/23"},next:{title:"1.19.10.21",permalink:"/en/docs/official_changelog/preview/1.19/10/21"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1191022"},"Minecraft Beta & Preview - 1.19.10.22"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);