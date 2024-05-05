"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[55062,31164,43115,94409,19743],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,m=d["".concat(c,".").concat(p)]||d[p]||g[p]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),c=a(57485),s=a(31682),u=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=m({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=c??d;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==i&&(g(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},15599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/21/gameplay",id:"changelog_source/preview/1.17/20/21/gameplay",title:"gameplay",description:"Posted: 30 June 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/20/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Features and Bug Fixes</strong>\xa0",id:"features-and-bug-fixes",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Structure Blocks</strong>\xa0",id:"structure-blocks",level:2}],u={toc:s},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 30 June 2021"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.yg)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4404090082061/crystal_16x9.jpg",alt:"crystal_16x9.jpg"})),(0,r.yg)("h2",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Features and Bug Fixes"),"\xa0"),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur if a structure was placed with a command in an unloaded area,\xa0and that structure was deleted \xa0")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed text from signs drawing on maps when\xa0RTX\xa0is on \xa0")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Clock and Compass items no longer function in the Recipe Book (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36354"},"MCPE-36354"),") \xa0")),(0,r.yg)("h2",{id:"structure-blocks"},(0,r.yg)("strong",{parentName:"h2"},"Structure Blocks"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added Corner mode to Structure Blocks, which is used with Save mode's\xa0Detect button to automatically set the area you want to save \xa0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed tamed\xa0Wolves being transparent\xa0on the\xa0Structure\xa0Block\xa0screen"))))}g.isMDXComponent=!0},66851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));a(88502);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/21/tech",id:"changelog_source/preview/1.17/20/21/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}],u={toc:s},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"gametestframework-experimental"},(0,r.yg)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)\xa0"),(0,r.yg)("li",{parentName:"ul"},"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest is facing based on its structure rotation\xa0")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms \xa0"),(0,r.yg)("li",{parentName:"ul"},"Commands or structures being placed in a loaded area that is only partially loaded by a ticking area will now be considered loaded if the required chunks are loaded")))}g.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},c=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},3220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(15599),i=a(66851);const c={sidebar_position:99999859,title:"1.17.20.21",tags:["Official","Changelog","Preview","1.17"]},s="Minecraft Beta - 1.17.20.21 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/20/21",id:"official_changelog/preview/1.17/20/21",title:"1.17.20.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/20/21.mdx",sourceDirName:"official_changelog/preview/1.17/20",slug:"/official_changelog/preview/1.17/20/21",permalink:"/en/docs/official_changelog/preview/1.17/20/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/20/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999859,frontMatter:{sidebar_position:99999859,title:"1.17.20.21",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.20.22",permalink:"/en/docs/official_changelog/preview/1.17/20/22"},next:{title:"1.17.20.20",permalink:"/en/docs/official_changelog/preview/1.17/20/"}},d={},g=[],p={toc:g},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---1172021-xbox-onewindows-10android"},"Minecraft Beta - 1.17.20.21 (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);