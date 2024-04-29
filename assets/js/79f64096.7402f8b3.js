"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53053,30782,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},38838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/0/24/gameplay",id:"changelog_source/preview/1.20/0/24/gameplay",title:"gameplay",description:"Posted: May 11, 2023",source:"@site/docs/changelog_source/preview/1.20/0/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/0/24",slug:"/changelog_source/preview/1.20/0/24/gameplay",permalink:"/docs/changelog_source/preview/1.20/0/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Seed Picker</strong>",id:"seed-picker",level:2},{value:"<strong>Achievements</strong>",id:"achievements",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Sniffer</strong>",id:"sniffer",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," May 11, 2023"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," This week's Xbox version may be delayed. We apologize for the inconvenience and are working to resolve the issue."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/15681136376333",alt:"A Minecraft screenshot featuring a villager, a sniffer, a camel, and an allay. These are standing at the edge of a cherry grove."})),(0,n.kt)("p",null,"It\u2019s time for another Minecraft Preview, and this week we have some more changes and improvements to Trails & Tales features! We love to hear from you so please send us your ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),"! Take a look at the full list of changes below!"),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"gameplay"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Players no longer stop flying when teleporting into unloaded chunks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170070"},"MCPE-170070"),")")),(0,n.kt)("h2",{id:"seed-picker"},(0,n.kt)("strong",{parentName:"h2"},"Seed Picker")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the seed picker with a Cherry Grove biome option")),(0,n.kt)("h2",{id:"achievements"},(0,n.kt)("strong",{parentName:"h2"},"Achievements")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding \u201cSmithing with Style\u201d achievement")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trimmed armor icons are now rendered correctly in higher resolution texture packs (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169748"},"MCPE-169748"),")"),(0,n.kt)("li",{parentName:"ul"},"High resolution textures are now applied correctly to Sniffer Eggs and Pitcher Pods (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169604"},"MCPE-169604"),")")),(0,n.kt)("h2",{id:"sniffer"},(0,n.kt)("strong",{parentName:"h2"},"Sniffer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sniffer Egg item now makes sound when spawned from breeding (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169733"},"MCPE-169733"),")")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pigs can once again be found in most biomes, instead of only Meadows and Cherry Groves (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170275"},"MCPE-170275"),")")),(0,n.kt)("h2",{id:"stability-and-performance"},(0,n.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Game no longer crashes when an item starts/stops being used if the item is not available"),(0,n.kt)("li",{parentName:"ul"},"Fishing Rod will no longer crash the game upon breaking (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170021"},"MCPE-170021"),")")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The main menu background in now tilted downwards on all platforms")),(0,n.kt)("h2",{id:"add-ons"},(0,n.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that prevented custom entity spawn eggs from being supported in trade tables (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170184"},"MCPE-170184"),")")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},66374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(38838);const i={sidebar_position:99999767,title:"1.20.0.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},s="Minecraft Beta & Preview - 1.20.0.24",c={unversionedId:"official_changelog/preview/1.20/0/24",id:"official_changelog/preview/1.20/0/24",title:"1.20.0.24",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.20/0/24.mdx",sourceDirName:"official_changelog/preview/1.20/0",slug:"/official_changelog/preview/1.20/0/24",permalink:"/docs/official_changelog/preview/1.20/0/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/0/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999767,frontMatter:{sidebar_position:99999767,title:"1.20.0.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.0.25",permalink:"/docs/official_changelog/preview/1.20/0/25"},next:{title:"1.20.0.23",permalink:"/docs/official_changelog/preview/1.20/0/23"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---120024"},"Minecraft Beta & Preview - 1.20.0.24"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);