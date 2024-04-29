"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[83945,57031,29933,29450,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},77472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/20/23/gameplay",id:"changelog_source/preview/1.19/20/23/gameplay",title:"gameplay",description:"Posted: 20th July 2022",source:"@site/docs/changelog_source/preview/1.19/20/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/20/23",slug:"/changelog_source/preview/1.19/20/23/gameplay",permalink:"/docs/changelog_source/preview/1.19/20/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Accessibility Features</strong>",id:"accessibility-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Player</strong>",id:"player",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Audio</strong>",id:"audio",level:3},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 20th July 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/7814071288845/beta19U2_3_1600x900.jpg",alt:"A Minecraft screenshot showing increased sculk patches in an Ancient City."})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"accessibility-features"},(0,r.kt)("strong",{parentName:"h2"},"Accessibility Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D-Pad Left can now be held down again to move the cursor left in menus (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155976"},"MCPE-155976"),")")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduced Sculk Catalyst experience drop from 20 to 5"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Log, Mangrove Wood, and Stripped Mangrove Wood can now be used to craft a Campfire with Charcoal (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157271"},"MCPE-157271"),")")),(0,r.kt)("h2",{id:"deep-dark"},(0,r.kt)("strong",{parentName:"h2"},"Deep Dark")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ancient Cities have more frequent Sculk Patch generation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154229"},"MCPE-154229"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Patch Features can now be placed on additional block types (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156669"},"MCPE-156669"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player textures and UI elements should no longer turn pink after playing for an extended period time on highly populated servers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105487"},"MCPE-105487"),")"),(0,r.kt)("li",{parentName:"ul"},"Instantaneous effects (Potions, Tipped Arrows) can no longer be applied to dead mobs and players"),(0,r.kt)("li",{parentName:"ul"},"Player no longer takes damage from entering a Nether portal if it is placed at Y=-21 or below (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154888"},"MCPE-154888"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So Below music track now plays in Basalt Deltas (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70890"},"MCPE-70890"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where scores on scoreboards were not being ordered properly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-141427"},"MCPE-141427"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where fishing hooks would drop loot when killed with the /kill command (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142329"},"MCPE-142329"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing baby mobs with the ",(0,r.kt)("em",{parentName:"li"},"minecraft:behavior.sleep")," goal to have a shrunken hitbox (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46040"},"MCPE-46040"),")"),(0,r.kt)("li",{parentName:"ul"},"Allays and Bees are now less likely to get stuck in non-full blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155777"},"MCPE-155777"),")"),(0,r.kt)("li",{parentName:"ul"},"Wardens can now detect a player sneaking on top of a Sculk Sensor (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155804"},"MCPE-155804"),")"),(0,r.kt)("li",{parentName:"ul"},"Warden can now let itself fall up to 20 blocks down, instead of just 3 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158304"},"MCPE-158304"),")"),(0,r.kt)("li",{parentName:"ul"},"Allays can now pick up armor pieces with a different durability than the one they are holding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158339"},"MCPE-158339"),")")),(0,r.kt)("h2",{id:"player"},(0,r.kt)("strong",{parentName:"h2"},"Player")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player\u2019s Soul Speed is now properly activated and de-activated on Soul Sand (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157152"},"MCPE-157152"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing health","_","boost to display incorrect health values, causing the player to turn invisible and unable to interact with the world on dying")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug which could cause mobs to not load into the world if their saved y-position was greater than or equal to 25")),(0,r.kt)("h3",{id:"audio"},(0,r.kt)("strong",{parentName:"h3"},"Audio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When trading, the Villager plays the correct sound based on the item in the input slot (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152555"},"MCPE-152555"),")")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Skulls in Ancient Cities now better match the orientation they have in Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153547"},"MCPE-153547"),")"),(0,r.kt)("li",{parentName:"ul"},"Goat Horn sound is now placed in the Jukebox/Note Blocks sound category in Settings (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154885"},"MCPE-154885"),")")))}p.isMDXComponent=!0},73151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/20/23/tech",id:"changelog_source/preview/1.19/20/23/tech",title:"tech",description:"Add-Ons",source:"@site/docs/changelog_source/preview/1.19/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/20/23",slug:"/changelog_source/preview/1.19/20/23/tech",permalink:"/docs/changelog_source/preview/1.19/20/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable event filters in the root definition to be evaluated independent of sequence or randomize when a ",(0,r.kt)("em",{parentName:"li"},"format","_","version")," of 1.19.20 or higher is specified")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when exploring multiple categories in Marketplace on Xbox and PlayStation")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System Events",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added event\xa0",(0,r.kt)("em",{parentName:"li"},"beforeWatchdogTerminate"),"-"," Shuts down the server when a critical scripting exception occurs (e.g. script hang). Can be canceled to prevent shutdown"),(0,r.kt)("li",{parentName:"ul"},"Added enum\xa0",(0,r.kt)("em",{parentName:"li"},"WatchdogTerminateReason"),"-"," Specifies the reason for watchdog termination"),(0,r.kt)("li",{parentName:"ul"},"Added new properties to\xa0_properties_for watchdog configuration on Bedrock Dedicated Server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"script-watchdog-enable-exception-handling"),"-"," Enables watchdog exception handling via the\xa0",(0,r.kt)("em",{parentName:"li"},"events.beforeWatchdogTerminate"),"\xa0event (default = true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"script-watchdog-enable-shutdown"),"-"," Enables server shutdown in the case of an unhandled watchdog exception (default = true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"script-watchdog-hang-exception"),"-"," Throws a critical exception when a hang occurs (default = true)")))))),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed the component\xa0",(0,r.kt)("em",{parentName:"li"},"minecraft:unwalkable")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"'minecraft:explosion","_","resistance'")," to ",(0,r.kt)("em",{parentName:"li"},"'minecraft:destructible","_","by","_","explosion'")," and restructured the component to be either defined as a boolean or as an object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Setting the component to true will give the block the default ",(0,r.kt)("em",{parentName:"li"},"explosion","_","resistance")," and setting it to false will make the block indestructible by explosion"),(0,r.kt)("li",{parentName:"ul"},"Setting the component as an object will let users define the resistance of the block to a base explosion")))))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},66609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(77472),i=a(73151);const s={sidebar_position:99999808,title:"1.19.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.20.23",u={unversionedId:"official_changelog/preview/1.19/20/23",id:"official_changelog/preview/1.19/20/23",title:"1.19.20.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/20/23.mdx",sourceDirName:"official_changelog/preview/1.19/20",slug:"/official_changelog/preview/1.19/20/23",permalink:"/docs/official_changelog/preview/1.19/20/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/20/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999808,frontMatter:{sidebar_position:99999808,title:"1.19.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.20.24",permalink:"/docs/official_changelog/preview/1.19/20/24"},next:{title:"1.19.20.22",permalink:"/docs/official_changelog/preview/1.19/20/22"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1192023"},"Minecraft Beta & Preview - 1.19.20.23"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);