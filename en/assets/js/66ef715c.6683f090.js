"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95388,99142,57949,64137,81791,5099,58408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??m;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},92588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/70/21/gameplay",id:"changelog_source/preview/1.20/70/21/gameplay",title:"gameplay",description:"Posted: 31 January 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/70/21",slug:"/changelog_source/preview/1.20/70/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/70/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"Vault",id:"vault",level:2},{value:"Armadillo",id:"armadillo",level:2},{value:"Breeze",id:"breeze",level:2},{value:"Commands",id:"commands",level:2},{value:"Items",id:"items",level:2},{value:"Marketplace",id:"marketplace",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Realms",id:"realms",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 31 January 2024"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/23693972746253",alt:"A Minecraft scene of a trial chamber. There is a vault block in the front, with a trial key beside it. In the background are two breeze mobs."})),(0,r.kt)("p",null,"In this week\u2019s Bedrock Preview and Beta we\u2019re bringing you three things I am\xa0",(0,r.kt)("em",{parentName:"p"},"particularly"),"\xa0excited about. Grudge-bearing armadillos! (Now they\u2019ll\xa0",(0,r.kt)("em",{parentName:"p"},"remember"),"\xa0who hit them last and view that player as a threat.)\xa0 Breeze vs. iron golem battles! (The one we\u2019ve all been waiting for) And finally a brand new block: the vault! The vault is especially exciting for those who like playing multiplayer, as it makes it far more rewarding for everyone in your party \u2013 literally. That\u2019s because the vault (unlike chests) can be unlocked and looted by multiple players (although\xa0",(0,r.kt)("em",{parentName:"p"},"only once per player"),"). So no more crying over empty chests! Now you only need to cry if you accidentally hit an armadillo \u2013 because they\u2019ll remember. For 10 whole seconds!"),(0,r.kt)("p",null,"Here\u2019s a list of what\u2019s new. As always, we love to hear your feedback, so please let us know what you think ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/mcvaultsfeedback"},"here"),", and report any bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,r.kt)("h2",{id:"vault"},"Vault"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A block that holds locked treasure and loot - find the right key to eject its rewards",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Found throughout Trial Chambers, containing the structures' most valuable loot"),(0,r.kt)("li",{parentName:"ul"},"Vaults in Trial Chambers require a Trial Key to be unlocked"))),(0,r.kt)("li",{parentName:"ul"},"Can be unlocked by an unlimited amount of players",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After a player has unlocked a Vault, they cannot unlock that Vault again"),(0,r.kt)("li",{parentName:"ul"},"If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby"))),(0,r.kt)("li",{parentName:"ul"},"Has a keyhole that will be open or closed depending on the players nearby",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If any nearby player has not unlocked that Vault, the keyhole will be open"),(0,r.kt)("li",{parentName:"ul"},"If all nearby players have unlocked that Vault, the keyhole will be closed"))),(0,r.kt)("li",{parentName:"ul"},"Within its cage, it will cycle through and display items which are possible to eject from its loot table"),(0,r.kt)("li",{parentName:"ul"},"The rewards it ejects are randomized from its loot table each time it is unlocked"),(0,r.kt)("li",{parentName:"ul"},"Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This loot table is temporary and will be completely revised as development continues"))),(0,r.kt)("li",{parentName:"ul"},"Cannot be crafted or obtained in Survival mode, and does not drop anything when mined"),(0,r.kt)("li",{parentName:"ul"},"Explosion-resistant and cannot be moved")),(0,r.kt)("h2",{id:"armadillo"},"Armadillo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All sounds emitted by Armadillos are now audible even when the player is facing away\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Armadillos now keeps track of the last player who hit them, regarding them as a threat for 10 seconds"))),(0,r.kt)("li",{parentName:"ul"},"Hurt sounds emitted by rolled-up Armadillos have been updated\xa0")),(0,r.kt)("h2",{id:"breeze"},"Breeze"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breeze is now aggressive toward Iron Golems, in addition to players"),(0,r.kt)("li",{parentName:"ul"},"Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, and Slimes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The above mobs don't retaliate when hurt by the Breeze's Wind Charge projectile"))),(0,r.kt)("li",{parentName:"ul"},"Fixed the Breeze's run particles to pick up particle color/texture from Leaf blocks if that's the block immediately below the Breeze")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added "has',"_",'property" filter for entity target selector that allows for targeting based on the type and value of properties'),(0,r.kt)("li",{parentName:"ul"},"The /damage command no longer contains the damage type 'suicide'. It is replaced with 'self","_","destruct' (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174865"},"MCPE-174865"),")")),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Realms, attempting destruction of one Sea Turtle Egg on a stack of more than one in Creative no longer destroys two at once (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-10477"},"REALMS-10477"),")"),(0,r.kt)("li",{parentName:"ul"},'Spawn Eggs are now called "',"[","Mob","]",' Spawn Egg" instead of "Spawns ',"[","Mob","]",'" so that players can more easily search for them in the Creative inventory')),(0,r.kt)("h2",{id:"marketplace"},"Marketplace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could cause the loading screen to get stuck for some time at 41% (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175550"},"MCPE-175550"),")\xa0")),(0,r.kt)("h2",{id:"mobs"},"Mobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When fed, baby mobs now emit both sound and particles\xa0"),(0,r.kt)("li",{parentName:"ul"},"All sounds emitted by Phantoms are now audible even when the player is facing away (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-133125"},"MCPE-133125"),")"),(0,r.kt)("li",{parentName:"ul"},"All sounds emitted by Wardens are now audible even when the player is facing away (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159481"},"MCPE-159481"),")")),(0,r.kt)("h2",{id:"realms"},"Realms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a new story type called "Realm Events". These new stories are automatically posted to the feed when interesting events happen on your Realm. The more you play, the more you\'ll find.'),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with time stamps on Stories being centered instead of displaying in the top right corner."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash caused by Realms Stories pagination."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using a gamepad to go back from the Members tab in Realms Stories\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with time blocks not rendering correctly after changing the time zone on PlayStation."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with the screen reader narrating unavailable Realms pages."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where GUI scaling being turned off caused most of Realms Plus PDP text to be missing."),(0,r.kt)("li",{parentName:"ul"},'Fixed an issue where user would get an error message incorrectly displaying on the "Choose a Preview Realm" screen after they had backed out of the "Choose a Subscription" screen.')))}m.isMDXComponent=!0},93857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(84985),o=(a(32811),a(9071));const i={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/70/21/tech",id:"changelog_source/preview/1.20/70/21/tech",title:"tech",description:"Blocks",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/70/21",slug:"/changelog_source/preview/1.20/70/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/70/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"Blocks",id:"blocks",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"Items",id:"items",level:2},{value:"Molang",id:"molang",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Dimension",id:"dimension",level:2},{value:"Graphical",id:"graphical",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blocks"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"double',"_","wooden","_",'slab" block is now split into unique instances "oak',"_","double","_",'slab", "spruce',"_","double","_",'slab", "birch',"_","double","_",'slab", "jungle',"_","double","_",'slab", "acacia',"_","double","_",'slab", "dark',"_","oak","_","double","_",'slab"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'This requires a "format',"_",'version" of 1.20.70 or higher')))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"damage',"_",'sensor" component\'s "damage',"_",'modifier" and "damage',"_","multiplier\" fields are now properly considered during damage immunity calculations, so that damage adjusted to be lesser or equal to the highest damage received during an entity's immunity period will be accurately ignored (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167651"},"MCPE-167651"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This requires a world version of 1.20.70 or higher")))),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,r.kt)("p",null,"Learn ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," forum to engage with the team, and get started building extensions via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,r.kt)("p",null,"Fixes this week:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the reload modal failed to appear when pressing the button with multiple connected players")),(0,r.kt)("h2",{id:"entity-filters"},"Entity Filters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added new entity filter "was',"_","last","_","hurt","_",'by", which checks if the subject is the last player or mob to have recently attacked the entity')),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom armor attachables can now be trimmed with vanilla trims, and modified vanilla patterns can be applied to custom armor attachables and items  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Vanilla trim textures can be overridden via the attachable component"),(0,r.kt)("li",{parentName:"ul"},"Vanilla trims can be applied to custom geo armor via the attachable component"),(0,r.kt)("li",{parentName:"ul"},"Modified vanilla trim patterns (to fit the new geo armor) can be applied via the attachable component"),(0,r.kt)("li",{parentName:"ul"},"Armor trim patterns on custom armor requires the 1.20.60+ format version for the attachable and item")))),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"surface","_","particle","_","color"),", ",(0,r.kt)("em",{parentName:"li"},"query.surface","_","particle","_","texture","_","coordinate"),", and ",(0,r.kt)("em",{parentName:"li"},"query.surface","_","particle","_","texture","_","size")," are now versioned with 1.20.70 to allow the three queries to see leaf blocks as the surface texture below the block. Molang versions lower than 1.20.70 will continue to not see the leaf block below them"),(0,r.kt)("li",{parentName:"ul"},"This change takes effect for Molang queries in packs that have a manifest.json min","_","engine","_","version of 1.20.70 or higher.")),(0,r.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed ",(0,r.kt)("em",{parentName:"li"},"ItemFrameDropItemPacket"),"\xa0")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(o.default,{techSapi:(0,r.kt)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"dimension"},"Dimension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Dimension.getEntities")," now only returns the entities within the dimension that's being queried")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabled the Deferred Technical Preview for iOS devices"),(0,r.kt)("li",{parentName:"ul"},"Added Point Light Shadows to the Deferred Technical Preview. This new feature allows light sources such as torches and lanterns to cast shadows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note that depending on your current Shadows Quality setting, this feature may be disabled by default. A new label and tooltip have been added to the Deferred Graphics section in Video Settings to indicate if point light shadows are currently on/off."),(0,r.kt)("li",{parentName:"ul"},'Some instability may arise when using this new feature in tandem with "Ultra" settings for other features. If you experience crashes, then lowering some visual settings may help alleviate the issue until it is resolved.'))),(0,r.kt)("li",{parentName:"ul"},"Fixed the lighting of the Allay in Deferred Technical Preview")))}d.isMDXComponent=!0},84985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/70/21/tech_sapi_exp",id:"changelog_source/preview/1.20/70/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Entity Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/70/21",slug:"/changelog_source/preview/1.20/70/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entity Components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"EntityTypeFamilyComponent_with functions\xa0_getTypeFamilies(): string","[","]"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"hasTypeFamily(typeFamily: string): boolean")))),(0,r.kt)("li",{parentName:"ul"},"Item",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ItemFoodComponent_from\xa0_beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"matches(itemName: string, states?: Record\\<string, boolean | number | string",">","): boolean")))),(0,r.kt)("li",{parentName:"ul"},"Removed class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeUtils"),". Moving utility functions onto\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase_and\xa0_BlockVolume")),(0,r.kt)("li",{parentName:"ul"},"Added class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase"),". Is the base class from which block volumes will extend"),(0,r.kt)("li",{parentName:"ul"},"BlockVolume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Breaking Change")," Converted\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolume"),"\xa0from an interface to a class which extends\xa0",(0,r.kt)("em",{parentName:"li"},"BlockVolumeBase")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"@minecraft/server.Entity.playAnimation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved Entity.playAnimation from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"stable")))),(0,r.kt)("li",{parentName:"ul"},"Moved enum\xa0",(0,r.kt)("em",{parentName:"li"},"BlockPistonState_from\xa0_beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockPistonComponent_from\xa0_beta to 1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PistonActivateAfterEvent_from\xa0_beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.9.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PistonActivateAfterEventSignal_from\xa0_beta to 1.9.0"))))}m.isMDXComponent=!0},32811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/70/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/70/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/70/21",slug:"/changelog_source/preview/1.20/70/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},10815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),o=a(92588),i=a(93857);const s={sidebar_position:99999952,title:"1.20.70.21",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.70.21",u={unversionedId:"official_changelog/preview/1.20/70/21",id:"official_changelog/preview/1.20/70/21",title:"1.20.70.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/70/21.mdx",sourceDirName:"official_changelog/preview/1.20/70",slug:"/official_changelog/preview/1.20/70/21",permalink:"/en/docs/official_changelog/preview/1.20/70/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/70/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999952,frontMatter:{sidebar_position:99999952,title:"1.20.70.21",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.70.22",permalink:"/en/docs/official_changelog/preview/1.20/70/22"},next:{title:"1.20.70.20",permalink:"/en/docs/official_changelog/preview/1.20/70/20"}},m={},p=[],d={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1207021"},"Minecraft Beta & Preview - 1.20.70.21"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);