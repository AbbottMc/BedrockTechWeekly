"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[37954,29933,17561,66953,9357,95107,42105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},38060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/40/23/gameplay",id:"changelog_source/preview/1.20/40/23/gameplay",title:"gameplay",description:"Posted: 27 September 2023",source:"@site/docs/changelog_source/preview/1.20/40/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/40/23",slug:"/changelog_source/preview/1.20/40/23/gameplay",permalink:"/docs/changelog_source/preview/1.20/40/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Audio",id:"audio",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Graphics",id:"graphics",level:2},{value:"Items",id:"items",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"User Interface",id:"user-interface",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 27 September 2023"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/19882985673613",alt:"A Minecraft screenshot of Zuri standing next to a goat and a cauldron."})),(0,n.kt)("p",null,"Here\u2019s a list of what\u2019s new in this week\u2019s Minecraft Preview and Beta! As always, we really want to hear your thoughts on these fixes and features, so please send your feedback and ideas to\xa0",(0,n.kt)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\xa0and report any bugs to\xa0",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,n.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.kt)("h2",{id:"audio"},"Audio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The updated splash sounds now play on Android as well (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174524"},"MCPE-174524"),")\xa0")),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Third person camera no longer phases through the lower part of Cauldron (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173010"},"MCPE-173010"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Falling in Powder Snow no longer causes any damage, no matter the height fallen from (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174859"},"MCPE-174859"),")"),(0,n.kt)("li",{parentName:"ul"},"Lightweight mobs and entities wearing Leather Boots once again sink into the top layer of Powder Snow when falling from a height of more than two and a half blocks")),(0,n.kt)("h2",{id:"gameplay"},"Gameplay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Goat Horn sound is now considered a Jukebox/Note Block sound again (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175156"},"MCPE-175156"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the game would lock up if a mob would move on a block with 0 friction (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173073"},"MCPE-173073"),")")),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Random lights no longer appear in the world without a source (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169001"},"MCPE-169001"),")\xa0")),(0,n.kt)("h2",{id:"graphics"},"Graphics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Splash particles are now emitted at an actor's waist instead of above their head")),(0,n.kt)("h2",{id:"items"},"Items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Warped Fungus on a Stick is no longer held backwards in first person view (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169765"},"MCPE-169765"),")\xa0")),(0,n.kt)("h2",{id:"mobs"},"Mobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the Sniffer ended digging as soon as item was created, not at the end of the specified dig duration\xa0")),(0,n.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a crash related to tessellation of water blocks")),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Placing invalid items into offhand slot will no longer cause them to drop")))}d.isMDXComponent=!0},46842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(96775),i=(a(3960),a(47153));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/40/23/tech",id:"changelog_source/preview/1.20/40/23/tech",title:"tech",description:"EDU Features",source:"@site/docs/changelog_source/preview/1.20/40/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/40/23",slug:"/changelog_source/preview/1.20/40/23/tech",permalink:"/docs/changelog_source/preview/1.20/40/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"EDU Features",id:"edu-features",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Graphical",id:"graphical",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"edu-features"},"EDU Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug that prevented summon NPC commands from working if the users did not have worldbuilder permissions where the base version of the world was before 1.19.80")),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,n.kt)("p",null,"Fixed this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug that prevented the Origin Vector3 item in the Selection pane from updating when the movement gizmo was dragged.")),(0,n.kt)("h2",{id:"entity-components"},"Entity Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unlocked \u201cbehavior.random","_","search","_","and","_","dig\u201d for creators to use"),(0,n.kt)("li",{parentName:"ul"},'"target',"_",'blocks" field added. List of blocks that the mob can dig on. Default if "target',"_","blocks\" isn't added is Dirt, Grass, Podzol, Dirt with Roots, Moss, Mud, and Muddy Mangrove Roots"),(0,n.kt)("li",{parentName:"ul"},'"item',"_",'table" field added. Path to a loot table that specifies what the mob can dig up. "item',"_",'table" takes precedence over "items"'),(0,n.kt)("li",{parentName:"ul"},'Content errors added if the behavior has trouble reading or finding "item',"_",'table" and if unable to get an item from "items"'),(0,n.kt)("li",{parentName:"ul"},"'on","_","item","_","found' event now fires on item found AND digging finished. Before the event firing caused the digging to stop early")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"High emissive values (",">"," 0.25) no longer obscure surface detail in the Deferred Technical Preview")))}m.isMDXComponent=!0},96775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/40/23/tech_sapi_exp",id:"changelog_source/preview/1.20/40/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added\xa0matches function called on an entity, which takes in\xa0EntityQueryOptions and returns true if the entity matches and false otherwise.",source:"@site/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/40/23",slug:"/changelog_source/preview/1.20/40/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"matches")," function called on an entity, which takes in\xa0",(0,n.kt)("em",{parentName:"li"},"EntityQueryOptions")," and returns true if the entity matches and false otherwise."),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"getRotation")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta")," to 1.",(0,n.kt)("em",{parentName:"li"},"6.0")),(0,n.kt)("li",{parentName:"ul"},"Move\xa0",(0,n.kt)("em",{parentName:"li"},"setRotation")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta")," to 1.",(0,n.kt)("em",{parentName:"li"},"6.0")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerLeaveBeforeEvent"),"-"," This event fires when a player leaves the server, before the Player object is removed"),(0,n.kt)("li",{parentName:"ul"},"Releasing PlayerDimensionChangeAfterEvent beta to ",(0,n.kt)("em",{parentName:"li"},"1__.6.0"))))}d.isMDXComponent=!0},3960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/40/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/40/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/40/23",slug:"/changelog_source/preview/1.20/40/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},30796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),i=a(38060),l=a(46842);const s={sidebar_position:99999748,title:"1.20.40.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.40.23",u={unversionedId:"official_changelog/preview/1.20/40/23",id:"official_changelog/preview/1.20/40/23",title:"1.20.40.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/40/23.mdx",sourceDirName:"official_changelog/preview/1.20/40",slug:"/official_changelog/preview/1.20/40/23",permalink:"/docs/official_changelog/preview/1.20/40/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/40/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999748,frontMatter:{sidebar_position:99999748,title:"1.20.40.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.40.24",permalink:"/docs/official_changelog/preview/1.20/40/24"},next:{title:"1.20.40.22",permalink:"/docs/official_changelog/preview/1.20/40/22"}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1204023"},"Minecraft Beta & Preview - 1.20.40.23"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);