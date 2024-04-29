"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[85388,64137,81791,11533,63284,42127,13694,51007,89777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},84481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/gameplay",id:"changelog_source/preview/1.20/80/20/gameplay",title:"gameplay",description:"Posted: February 29, 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/80/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Known Issue:</strong>\xa0Players are unable to connect to Preview Realms on Xbox One and PlayStation 4 in this version.",id:"known-issueplayers-are-unable-to-connect-to-preview-realms-on-xbox-one-and-playstation-4-in-this-version",level:2},{value:"Vault",id:"vault",level:2},{value:"Trial Chambers",id:"trial-chambers",level:2},{value:"Coming Soon: Hardcore Mode",id:"coming-soon-hardcore-mode",level:2},{value:"Wolf Armor",id:"wolf-armor",level:2},{value:"Wolves",id:"wolves",level:2},{value:"Armadillo",id:"armadillo",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Realms Stories",id:"realms-stories",level:2},{value:"User Interface",id:"user-interface",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," February 29, 2024  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/24554985642253",alt:"patchnotes_u8-1.png"})),(0,r.kt)("p",null,"There\u2019s so much packed into this week\u2019s preview and beta release that I need a code to remember it all. What about \u201cwolf armor-dillos\u201d? Because in this week\u2019s preview and beta, you\u2019ll not only find updated wolf armor (it\u2019s stronger! and repairable! and awesome!) you\u2019ll be able to dye it any color you want. If that wasn\u2019t enough, the armadillo has been de-experimentified (definitely a word) and we\u2019ve taken the first steps towards working on something exciting (more on that below). Was that everything? Maybe I should\u2019ve made a list, instead of a code. Anyway! As always, we want to hear your thoughts and feedback, so please let us know what you think\xa0",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"here"),", and report any bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,r.kt)("h2",{id:"known-issueplayers-are-unable-to-connect-to-preview-realms-on-xbox-one-and-playstation-4-in-this-version"},(0,r.kt)("strong",{parentName:"h2"},"Known Issue:"),"\xa0Players are unable to connect to Preview Realms on Xbox One and PlayStation 4 in this version."),(0,r.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,r.kt)("h2",{id:"vault"},"Vault"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vault hit sound pitch corrected to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Updated Vault visuals")),(0,r.kt)("h2",{id:"trial-chambers"},"Trial Chambers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trial Chambers will now be placed in the same location and configuration as Java Edition")),(0,r.kt)("h2",{id:"coming-soon-hardcore-mode"},"Coming Soon: Hardcore Mode"),(0,r.kt)("p",null,"We're excited to say we're working on Hardcore mode for Bedrock Edition, and we hope it'll be ready for testing sometime in the Spring. Hardcore mode is a subcategory of Survival, where you only get one life, and no chance to respawn. Not only that, in Hardcore mode the difficulty is locked to the highest setting!"),(0,r.kt)("p",null,"With such high stakes, we want to ensure we get Hardcore mode right before releasing it into the retail version of Bedrock Edition, so once it goes into testing it\u2019ll stay in Preview until we\u2019re confident the experience is smooth for both players and creators. You\u2019ll be able to help us test Hardcore mode by submitting bugs at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"\xa0and giving us your feedback on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/minecraft"},"Discord"),"\xa0or at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://feedback.minecraft.net/"},"feedback.minecraft.net"),"!"),(0,r.kt)("p",null,"We're also happy to announce, when we are ready, Hardcore mode will be available in Realms for both Java and Bedrock.  "),(0,r.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,r.kt)("h2",{id:"wolf-armor"},"Wolf Armor"),(0,r.kt)("p",null,"Since the initial release of the Wolf Armor, we have been working on improving it to increase its protection, usability and add customization. For protection there is a new approach to armor, which considers the player\u2019s need to quickly see the state of the armor without using UI elements, and the ability to act quickly to help their pet Wolf if needed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wolf Armor has been de-experimentified and is now available during normal gameplay"),(0,r.kt)("li",{parentName:"ul"},"Wolf Armor can now be dyed"),(0,r.kt)("li",{parentName:"ul"},"Wolf Armor now acts as a shield, absorbing most damage directed to the Wolf:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Wolf Armor now has 64 durability"),(0,r.kt)("li",{parentName:"ul"},"More cracks appear on the Wolf Armor as it takes more damage"),(0,r.kt)("li",{parentName:"ul"},"If the Wolf Armor is dealt damage beyond 0 durability, it will break"),(0,r.kt)("li",{parentName:"ul"},"But no worries, the Wolf Armor can now be repaired by using Armadillo Scutes on a sitting Wolf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Known Issue:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wolves wearing Wolf Armor don\u2019t trigger post-damage invulnerability, resulting in the Wolf Armor being rapidly destroyed by continuous sources of damage, such as lava, Slimes, and Magma Cubes")))),(0,r.kt)("h2",{id:"wolves"},"Wolves"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The collars of tamed Wolves are now properly shaded (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178351"},"MCPE-178351"),")"),(0,r.kt)("li",{parentName:"ul"},"Wolves\u2019 tails are now correctly positioned when sitting (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31121"},"MCPE-31121"),")")),(0,r.kt)("h2",{id:"armadillo"},"Armadillo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Armadillo has been de-experimentified and is now available during normal gameplay"),(0,r.kt)("li",{parentName:"ul"},"Breeding cooldown is no longer reset after roll-up"),(0,r.kt)("li",{parentName:"ul"},"Spiders and Cave Spiders now fear Armadillos even when experiments are turned on (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178887"},"MCPE-178887"),")")),(0,r.kt)("h2",{id:"blocks"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sweet Berry Bush now drops up to 6 Sweet Berries when mined using a Fortune enchanted tool (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172622"},"MCPE-172622"),")"),(0,r.kt)("li",{parentName:"ul"},"Fully grown Cocoa Pods now consistently drop 3 Cocoa Beans"),(0,r.kt)("li",{parentName:"ul"},"Double Slabs can once again be created when stacking two of the same Slabs together (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179187"},"MCPE-179187"),")")),(0,r.kt)("h2",{id:"gameplay"},"Gameplay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed vertical position of tamed mobs from the clients/guests perspective after they teleport to their owner (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139168"},"MCPE-139168"),")"),(0,r.kt)("li",{parentName:"ul"},"Horses and Boats no longer slide to unexpected previous locations upon mounting or dismounting")),(0,r.kt)("h2",{id:"realms-stories"},"Realms Stories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the Realms Stories button would lose focus on the play screen"),(0,r.kt)("li",{parentName:"ul"},"The Members and Timeline tabs are now limited to rendering at most 300 Realm players, to avoid performance issues on large Realms. All players will still be searchable in the Members tab"),(0,r.kt)("li",{parentName:"ul"},"When adding a new story, the text box is no longer cleared when the player leaves the Add Story screen. Essentially, players can save a draft of their Story"),(0,r.kt)("li",{parentName:"ul"},"When posting a Realm Story, the player\u2019s avatar will only have the Online badge if they\u2019re currently playing in a game hosted by a Realm"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Realms Stories \u2018Opt In\u2019 screen sometimes appearing visually broken"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where selecting the same screenshot again would de-select the screenshot instead of just keeping the selected one"),(0,r.kt)("li",{parentName:"ul"},"Added screen reader narration to Realms Stories \u2018Opt In\u2019 screen"),(0,r.kt)("li",{parentName:"ul"},"Added info button to Timeline tab"),(0,r.kt)("li",{parentName:"ul"},"Updated description text of certain Realms Stories settings"),(0,r.kt)("li",{parentName:"ul"},"Added unread story indicator on Story Feed tab"),(0,r.kt)("li",{parentName:"ul"},"Added a Realms Stories page to How to Play section of Minecraft")),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The feedback button has been moved from Main Menu to the Settings screen under the General tab with label \u201cHelp Center\u201d"),(0,r.kt)("li",{parentName:"ul"},"Added a toggle for enabling/disabling game tips and a button for restarting them in the Settings under the General section"),(0,r.kt)("li",{parentName:"ul"},"Increased the time interval for showing a standard loading tip"),(0,r.kt)("li",{parentName:"ul"},"Add \u201cImport Retail Worlds\u201d button to the Settings/Storage screen"),(0,r.kt)("li",{parentName:"ul"},"Increased range for the \u201cmove up\u201d button, such that you can now slide off slowly to the near buttons without stopping the movement (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178399"},"MCPE-178399"),")"),(0,r.kt)("li",{parentName:"ul"},"Worlds imported in the new Play screen now has a space before the \u201c(imported)\u201d suffix (Preview only)"),(0,r.kt)("li",{parentName:"ul"},"On touch devices, when items are swapped the icons now move in the correct direction"),(0,r.kt)("li",{parentName:"ul"},"Custom Decorated Pots and dyed Banners are now rendered correctly in Crafter output slot"),(0,r.kt)("li",{parentName:"ul"},"On touch devices, the selected item now has a blue background on all screens"),(0,r.kt)("li",{parentName:"ul"},"Flying item animation is no longer missing in touch-screen versions of Beacon, Cartography, and Smithing Table screens")))}d.isMDXComponent=!0},19819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(95225),i=a(76235),l=(a(413),a(17390),a(9071));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/80/20/tech",id:"changelog_source/preview/1.20/80/20/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Cameras",id:"cameras",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"Molang",id:"molang",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"Blocks",id:"blocks-1",level:2},{value:"Commands",id:"commands",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"blocks"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201csapling\u201d block is now split into unique instances: \u201coak","_","sapling\u201d, \u201cspruce","_","sapling\u201d, \u201cbirch","_","sapling\u201d, \u201cjungle","_","sapling\u201d, \u201cacacia","_","sapling\u201d and \u201cdark","_","oak","_","sapling\u201d."),(0,r.kt)("li",{parentName:"ul"},"\u201ccoral","_","fan\u201d block is now split into unique instances: \u201ctube","_","coral","_","fan\u201d, \u201cbrain","_","coral","_","fan\u201d, \u201cbubble","_","coral","_","fan\u201d, \u201cfire","_","coral","_","fan\u201d and \u201chorn","_","coral","_","fan\u201d")),(0,r.kt)("h2",{id:"cameras"},"Cameras"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the \u201cextend","_","player","_","rendering\u201d camera component which allows for players (and any entities they are connected to through riding and leashes) to be rendered even if they are beyond the max entity render distance"),(0,r.kt)("li",{parentName:"ul"},"Added \u201cextend","_","player","_","rendering\u201d component to the \u201cminecraft:free\u201d camera",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This component is intended to be an enhancement and improvement to current functionality and as such will be \u201cset to true\u201d by default"),(0,r.kt)("li",{parentName:"ul"},"Setting this component to false will remove the added rendering capability. Documentation will be undated prior to release"))),(0,r.kt)("li",{parentName:"ul"},"The server now sends chunks and actors around the camera to the client if that information already exists on the server even when the camera is placed far away from the player")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The \u201cinteract\u201d component\u2019s fields \u201cequip","_","item","_","slot\u201d and \u201cdrop","_","item","_","slot\u201d now support both armor and inventory slots:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Armor slots are specified as \u2018slot.armor.head\u2019, \u2018slot.armor.chest\u2019, \u2018slot.armor.legs\u2019, and \u2018slot.armor.feet\u2019"),(0,r.kt)("li",{parentName:"ul"},"Inventory slots are specified as positive numbers, now expressed as strings"),(0,r.kt)("li",{parentName:"ul"},"This change requires a world version of 1.20.80 or higher"))),(0,r.kt)("li",{parentName:"ul"},"Added \u201crepair","_","entity","_","item\u201d field to the \u201cinteract\u201d component, which allows to repair an item in one of the entity\u2019s inventory or armor slots")),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added support for addImage to property pane"),(0,r.kt)("li",{parentName:"ul"},"Added icon property to IPropertyItemOptionsButton API to display icons in buttons"),(0,r.kt)("li",{parentName:"ul"},"Added the concept of WidgetManager and CustomWidget - allowing the server to instantiate in-world widgets which should facilitate manipulation of world tools. We currently only support CustomWidgets (which are server driven Custom Entities)"),(0,r.kt)("li",{parentName:"ul"},"Adjusted default editor UI scale to optimize screen space")),(0,r.kt)("h2",{id:"entity-filters"},"Entity Filters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new entity filter \u201cis","_","sitting\u201d, which checks if the entity is sitting"),(0,r.kt)("li",{parentName:"ul"},"Added new entity filter \u201chas","_","damaged","_","equipment\u201d, which checks if the entity has a certain damaged piece of equipment in the specified slot")),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new query \u201cquery.armor","_","slot","_","damage\u201d, which returns the damage value of the armor item in the specified slot")),(0,r.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed\xa0",(0,r.kt)("em",{parentName:"li"},"FilterTextPacket"),"  ")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"blocks-1"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added \u2018minecraft:custom","_","components\u2019 block component under the Beta APIs feature flag")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed /hud command so that changes only effect the targeted player(s)")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partially fixed full block shapes (e.g. Redstone Lamps, Froglights, Glowstone, etc.) that are marked as point lights in resource packs in the Deferred Technical Preview. They can still be turned into point lights, but will not have occlusion/shadows"),(0,r.kt)("li",{parentName:"ul"},"Added a dedicated quality slider for Point Light Shadows in the Deferred Video Settings menu"),(0,r.kt)("li",{parentName:"ul"},"Added a new feature to the lighting model in the Deferred Technical Preview: Sub Surface Scattering. This effect approximates rays of light passing through translucent surfaces. For now, this feature is limited to only affect Leaves"),(0,r.kt)("li",{parentName:"ul"},"Increased the contrast and saturation of the world in the Deferred Technical Preview")),(0,r.kt)("h2",{id:"script-api-1"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},76235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_exp",id:"changelog_source/preview/1.20/80/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Block Custom Components \u2013 see\xa0https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block Custom Components \u2013 see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents"},"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents"),"\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"BlockComponentStepOnEvent"),"\xa0for\xa0",(0,r.kt)("em",{parentName:"li"},"beta")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"BlockRegistry"),"\xa0for\xa0",(0,r.kt)("em",{parentName:"li"},"beta")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"WorldInitializeBeforeEvent")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"BlockCustomComponent")))),(0,r.kt)("li",{parentName:"ul"},"Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command"),(0,r.kt)("li",{parentName:"ul"},"Added class\xa0",(0,r.kt)("em",{parentName:"li"},"ListBlockVolume"),"\xa0which extends\xa0",(0,r.kt)("em",{parentName:"li"},"BaseBlockVolume"),"\xa0","-"," A volume that stores multiple block locations"),(0,r.kt)("li",{parentName:"ul"},"Structure",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed class\xa0",(0,r.kt)("em",{parentName:"li"},"StructureTemplate"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"Structure")),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"size: Vector3"),"\xa0- Returns the size of the structure in blocks"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockPermutation(location: Vector3): BlockPermutation | undefined;"),"\xa0- Returns the block permutation at the given location within the structure"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"isValid(): boolean"),"\xa0- Returns false if the structure has been deleted"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getIsWaterlogged(location: Vector3): boolean;"),"\xa0- Returns whether the block at the given location is waterlogged")))))}d.isMDXComponent=!0},17390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},95225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_stable",id:"changelog_source/preview/1.20/80/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Removed\xa0EntityHealableComponent.filters\xa0as they currently have no backing implementation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed\xa0",(0,r.kt)("em",{parentName:"li"},"EntityHealableComponent.filters"),"\xa0as they currently have no backing implementation"),(0,r.kt)("li",{parentName:"ul"},"Fixing some component\xa0",(0,r.kt)("em",{parentName:"li"},"isValid"),"\xa0methods where they didn\u2019t properly return false in cases where the component had been removed from the Entity."),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"PaletteColor"),"\xa0enum to\xa0",(0,r.kt)("em",{parentName:"li"},"beta"),"\xa0for use with\xa0",(0,r.kt)("em",{parentName:"li"},"ItemColorComponent/ItemColor2Component")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"ItemColor2Component"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"beta"),"\xa0for reading\xa0",(0,r.kt)("em",{parentName:"li"},"minecraft:color2")),(0,r.kt)("li",{parentName:"ul"},"Setting a dynamic property with a key larger than 32kb now will result in an exception")))}d.isMDXComponent=!0},413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},75673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),i=a(84481),l=a(19819);const s={sidebar_position:99999948,title:"1.20.80.20",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.80.20",u={unversionedId:"official_changelog/preview/1.20/80/20",id:"official_changelog/preview/1.20/80/20",title:"1.20.80.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/80/20.mdx",sourceDirName:"official_changelog/preview/1.20/80",slug:"/official_changelog/preview/1.20/80/20",permalink:"/en/docs/official_changelog/preview/1.20/80/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/80/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999948,frontMatter:{sidebar_position:99999948,title:"1.20.80.20",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.80.21",permalink:"/en/docs/official_changelog/preview/1.20/80/21"},next:{title:"1.20.70.25",permalink:"/en/docs/official_changelog/preview/1.20/70/25"}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1208020"},"Minecraft Beta & Preview - 1.20.80.20"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);