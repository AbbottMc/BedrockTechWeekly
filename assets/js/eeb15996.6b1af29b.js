"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3045,33970,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},3254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.8/0/11/gameplay",id:"changelog_source/preview/1.8/0/11/gameplay",title:"gameplay",description:"24 October 2018",source:"@site/docs/changelog_source/preview/1.8/0/11/gameplay.mdx",sourceDirName:"changelog_source/preview/1.8/0/11",slug:"/changelog_source/preview/1.8/0/11/gameplay",permalink:"/docs/changelog_source/preview/1.8/0/11/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.8/0/11/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>24 October 2018</strong>",id:"24-october-2018",level:2},{value:"PLEASE READ before participating in the Minecraft Beta:",id:"please-read-before-participating-in-the-minecraft-beta",level:2},{value:"Changes:",id:"changes",level:2},{value:"Fixes:",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"24-october-2018"},(0,r.kt)("strong",{parentName:"h2"},"24 October 2018")),(0,r.kt)("h2",{id:"please-read-before-participating-in-the-minecraft-beta"},"PLEASE READ before participating in the Minecraft Beta:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.kt)("h2",{id:"changes"},"Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changes and tweaks to Pandas:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All default pandas now bite once when attacked"),(0,r.kt)("li",{parentName:"ul"},"Aggressive pandas defend other pandas"),(0,r.kt)("li",{parentName:"ul"},"Added new aggressive panda skin"),(0,r.kt)("li",{parentName:"ul"},"Pandas now broadcast their anger to aggressive pandas"),(0,r.kt)("li",{parentName:"ul"},"Aggressive pandas will now defend baby pandas that get hit")))),(0,r.kt)("h2",{id:"fixes"},"Fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that occurred during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when joining multiplayer games\xa0"),(0,r.kt)("li",{parentName:"ul"},"The player's arm now moves at the correct speed when breaking blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38041"},"MCPE-38041"),")"),(0,r.kt)("li",{parentName:"ul"},"Custom entities can now correctly use the 'minecraft:shooter' component (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38263"},"MCPE-38263"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now correctly use scaffolding that is in or near water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38054"},"MCPE-38054"),")"),(0,r.kt)("li",{parentName:"ul"},"Flight controls on mobile devices now work correctly after climbing scaffolding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38059"},"MCPE-38059"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused horses (and variants) to show flashing colors on certain devices (no more disco horses!) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31726"},"MCPE-31726"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused a significant performance drop when rendering chunks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37192"},"MCPE-37192"),")"),(0,r.kt)("li",{parentName:"ul"},"Gamerule slash commands can now only be changed by operators\xa0"),(0,r.kt)("li",{parentName:"ul"},"Falling blocks (such as sand) will no longer cause scaffolding extensions to fall (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38098"},"MCPE-38098"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could result in a player's spawn point being changed inadvertently\xa0"),(0,r.kt)("li",{parentName:"ul"},'Pressing the "Go Back" button in "Turn Off Achievements" window no longer changes the game mode in World Settings (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38278"},"MCPE-38278"),")"),(0,r.kt)("li",{parentName:"ul"},"Pandas no longer become stuck in a sitting position after reloading the world\xa0"),(0,r.kt)("li",{parentName:"ul"},"Newly equipped player skins now apply correctly to the paper-doll model\xa0"),(0,r.kt)("li",{parentName:"ul"},"Endermen no longer have a missing jaw when attacking\xa0"),(0,r.kt)("li",{parentName:"ul"},"Blocks now disappear more quickly when broken quickly in creative\xa0"),(0,r.kt)("li",{parentName:"ul"},"Search results in the Marketplace are now more consistent when searching through all content\xa0"),(0,r.kt)("li",{parentName:"ul"},'Only templates are suggested in the "Get More Templates" menu now\xa0'),(0,r.kt)("li",{parentName:"ul"},"Using a bucket of fish in a dispenser no longer crashes the game (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38194"},"MCPE-38194"),")"),(0,r.kt)("li",{parentName:"ul"},"Dyed beds now have the correct crafting recipe\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the bug where the player would unexpectedly turn in a random direction (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35910"},"MCPE-35910"),")"),(0,r.kt)("li",{parentName:"ul"},"Double slabs will now create the correct type of block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38107"},"MCPE-38107"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the world could crash if the player exited the world whilst using a nether portal\xa0"),(0,r.kt)("li",{parentName:"ul"},"Selecting an unowned skin now directs you to the expanded skin picker menu")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},21269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(3254);const i={sidebar_position:99999980,title:"1.8.0.11",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.8"]},s="Minecraft Beta - 1.8.0.11 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.8/0/11",id:"official_changelog/preview/1.8/0/11",title:"1.8.0.11",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.8/0/11.mdx",sourceDirName:"official_changelog/preview/1.8/0",slug:"/official_changelog/preview/1.8/0/11",permalink:"/docs/official_changelog/preview/1.8/0/11",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.8/0/11.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.8",permalink:"/docs/tags/1-8"}],version:"current",sidebarPosition:99999980,frontMatter:{sidebar_position:99999980,title:"1.8.0.11",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.8"]},sidebar:"changelogSidebar",previous:{title:"1.8.0.13",permalink:"/docs/official_changelog/preview/1.8/0/13"},next:{title:"1.8.0.10",permalink:"/docs/official_changelog/preview/1.8/0/10"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---18011-xbox-onewindows-10android"},"Minecraft Beta - 1.8.0.11 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);