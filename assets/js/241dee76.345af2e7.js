"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17497,95107,68420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},73343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/24/gameplay",id:"changelog_source/preview/1.19/10/24/gameplay",title:"gameplay",description:"Posted: 22nd June 2022",source:"@site/docs/changelog_source/preview/1.19/10/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/10/24",slug:"/changelog_source/preview/1.19/10/24/gameplay",permalink:"/docs/changelog_source/preview/1.19/10/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Experimental features</strong>",id:"experimental-features",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 22nd June 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/7119665882765/beta19U1_5_16x9.jpg",alt:"A Minecraft screenshot of a dancing Allay mob"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed the Vanilla Experiment toggle since it has no active experimental content"),(0,r.kt)("li",{parentName:"ul"},"Removed the Wild Experiment toggle since it has no active experimental content")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allay duplication cooldown is now 5 minutes (up from 2.5 minutes)")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused an empty Trader Llama Spawn Egg to appear in the Creative menu in pre 1.19.10 worlds")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when assigning an invalid entity to Mob Spawners")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed touch control's right d-pad button not working when the d-pad area overlapped with the hotbar area (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156103"},"MCPE-156103"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved the performance of the locate biome command to mitigate stalls on the server while searching for a biome that is far away. (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157609"},"MCPE-157609"),")")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},91046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(73343);const i={sidebar_position:99999811,title:"1.19.10.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},s="Minecraft Beta & Preview - 1.19.10.24",c={unversionedId:"official_changelog/preview/1.19/10/24",id:"official_changelog/preview/1.19/10/24",title:"1.19.10.24",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.19/10/24.mdx",sourceDirName:"official_changelog/preview/1.19/10",slug:"/official_changelog/preview/1.19/10/24",permalink:"/docs/official_changelog/preview/1.19/10/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/10/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999811,frontMatter:{sidebar_position:99999811,title:"1.19.10.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.20.20-21",permalink:"/docs/official_changelog/preview/1.19/20/20-21"},next:{title:"1.19.10.23",permalink:"/docs/official_changelog/preview/1.19/10/23"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1191024"},"Minecraft Beta & Preview - 1.19.10.24"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);