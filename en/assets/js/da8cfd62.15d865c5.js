"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27303,31164,84774,43115,64768],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??g;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(v,(0,a.A)({},e,t)),r.createElement(b,(0,a.A)({},e,t)))}function k(e){const t=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},40936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/30/26-27/gameplay",id:"changelog_source/preview/1.18/30/26-27/gameplay",title:"gameplay",description:"Posted: 16 March 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/30/26-27/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/30/26-27",slug:"/changelog_source/preview/1.18/30/26-27/gameplay",permalink:"/en/docs/changelog_source/preview/1.18/30/26-27/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/26-27/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Information on the Minecraft Preview and Beta:\u202f\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Known Issues</strong>",id:"known-issues",level:2},{value:"<strong>Copper Horn</strong>",id:"copper-horn",level:2},{value:"<strong>Goat Horn</strong>",id:"goat-horn",level:2},{value:"<strong>Pillager Outpost</strong>",id:"pillager-outpost",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 16 March 2022"),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},"Information on the Minecraft Preview and Beta:\u202f\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Preview Version: 1.18.30.27 | Beta Version: 1.18.30.26"),(0,r.yg)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content\u202f\xa0"),(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\u202f\xa0"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"),"\u202f\xa0"),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see\u202f",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\u202ffor detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4847375150605/copper_horn_16x9.jpg",alt:"copper_horn_16x9.jpg"})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at\xa0",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("h2",{id:"known-issues"},(0,r.yg)("strong",{parentName:"h2"},"Known Issues")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Older worlds that have areas unexplored since before 1.18 may experience issues in those areas with below y=0 not generating correctly. We suggest that you make backup copies of your worlds, and avoid opening pre-1.18 worlds in this Beta/Preview build.")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"copper-horn"},(0,r.yg)("strong",{parentName:"h2"},"Copper Horn")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Added Copper Horn item, which is crafted using three Copper Ingots in a "v shape" with a Goat Horn in the middle'),(0,r.yg)("li",{parentName:"ul"},"Can play three different sounds, by looking up, crouching, and everything else"),(0,r.yg)("li",{parentName:"ul"},"Added special sounds for Copper Horns crafted from Goat Horns found from screaming Goats")),(0,r.yg)("h2",{id:"goat-horn"},(0,r.yg)("strong",{parentName:"h2"},"Goat Horn")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added additional Goat Horn sounds, which are random per goat"),(0,r.yg)("li",{parentName:"ul"},"Added special sounds for Screaming Goat"),(0,r.yg)("li",{parentName:"ul"},"Is always dropped when a Goat with at least one horn rams these blocks: Stone, Packed ice, Iron Ore, Copper Ore, Emerald Ore, or any kind of wood log from the Overworld"),(0,r.yg)("li",{parentName:"ul"},'Can be crafted into Copper Horn using 3 Copper Ingots in a "v shape" with a Goat Horn in the middle'),(0,r.yg)("li",{parentName:"ul"},"Goats have a small chance of spawning with only one horn (Baby Goats will always end up with two horns)")),(0,r.yg)("h2",{id:"pillager-outpost"},(0,r.yg)("strong",{parentName:"h2"},"Pillager Outpost")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Goat Horn and Copper Horns as loot")),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the hunger bar would not deplete on some Marketplace worlds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152533"},"MCPE-152533"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed Bad Omen effect not being applied after defeating a Pillager Captain (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152846"},"MCPE-152846"),")"),(0,r.yg)("li",{parentName:"ul"},"Mob hurt and death sounds no longer overlap (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152852"},"MCPE-152852"),")"),(0,r.yg)("li",{parentName:"ul"},"Knockback resistance now dampens the vertical lift received from the Iron Golem attack"),(0,r.yg)("li",{parentName:"ul"},"Save Structure Blocks now correctly detect Corner Structure Blocks at negative Y levels (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151511"},"MCPE-151511"),")")),(0,r.yg)("h3",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h3"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Nether Brick, Iron/Gold Nuggets, Red/Brown Mushroom Blocks, and Chorus Plant/Flower Blocks can no longer be used as fuel in Furnaces (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-114216"},"MCPE-114216"),")"),(0,r.yg)("li",{parentName:"ul"},"Camera now shakes the same way it does in Java Edition when the player receives damage (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-118510"},"MCPE-118510"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where some large mobs in Marketplace maps could get stuck")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When using the new touch controls on mobile devices, the size of the thumbstick can now be adjusted with the Button Size slider in the settings screen"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue in Pocket UI where items could be dropped unintentionally in blocks with custom UIs, and resized those screens to allow for dropping items on the sides instead"),(0,r.yg)("li",{parentName:"ul"},"Improved contrast on multiple UI elements"),(0,r.yg)("li",{parentName:"ul"},"Enabled the Behavior Packs tab in the new Create New World screen")))}p.isMDXComponent=!0},33252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));n(88502);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/30/26-27/tech",id:"changelog_source/preview/1.18/30/26-27/tech",title:"tech",description:"Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/30/26-27/tech.mdx",sourceDirName:"changelog_source/preview/1.18/30/26-27",slug:"/changelog_source/preview/1.18/30/26-27/tech",permalink:"/en/docs/changelog_source/preview/1.18/30/26-27/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/26-27/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"components"},(0,r.yg)("strong",{parentName:"h2"},"Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue in the Knockback goal where the incorrect owner was being passed into the filter evaluate function")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Limited the number of elements in the\xa0crafting","_","tagsfield of the\xa0 CraftingTableComponent to 64")),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when loading entities in a chunk that contained entities pre-1.18.30")),(0,r.yg)("h2",{id:"gametest-framework-experimental"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added event 'leverActivate' - fires when a lever is toggled"),(0,r.yg)("li",{parentName:"ul"},"Added optional argument showParticles: bool = trueto function addEffect")))}p.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},88502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}m.isMDXComponent=!0},65705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(34922),l=n(40936),i=n(33252);const s={sidebar_position:99999826,title:"1.18.30.26-27",tags:["Official","Changelog","Preview","1.18"]},c="Minecraft Beta & Preview - 1.18.30.26/27",u={unversionedId:"official_changelog/preview/1.18/30/26-27",id:"official_changelog/preview/1.18/30/26-27",title:"1.18.30.26-27",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.18/30/26-27.mdx",sourceDirName:"official_changelog/preview/1.18/30",slug:"/official_changelog/preview/1.18/30/26-27",permalink:"/en/docs/official_changelog/preview/1.18/30/26-27",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/30/26-27.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999826,frontMatter:{sidebar_position:99999826,title:"1.18.30.26-27",tags:["Official","Changelog","Preview","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.30.28-29",permalink:"/en/docs/official_changelog/preview/1.18/30/28-29"},next:{title:"1.18.30.22-23",permalink:"/en/docs/official_changelog/preview/1.18/30/22-23"}},g={},p=[],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---118302627"},"Minecraft Beta & Preview - 1.18.30.26/27"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);