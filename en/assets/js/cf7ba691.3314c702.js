"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52656,64137,57525],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},75599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.16/1/gameplay",id:"changelog_source/stable/1.16/1/gameplay",title:"gameplay",description:"Posted:\xa0June 29, 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.16/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.16/1",slug:"/changelog_source/stable/1.16/1/gameplay",permalink:"/en/docs/changelog_source/stable/1.16/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.16/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>16th July 2020 - 1.16.1 Hotfix Update (PlayStation 4)</strong>",id:"16th-july-2020---1161-hotfix-update-playstation-4",level:2},{value:"<strong>8th July 2020 - 1.16.1 Hotfix Update (PlayStation 4)</strong>",id:"8th-july-2020---1161-hotfix-update-playstation-4",level:2},{value:"<strong>29th June 2020</strong>\xa0 <strong>- 1.16.1 Hotfix</strong>",id:"29th-june-2020---1161-hotfix",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:"),"\xa0June 29, 2020"),(0,r.kt)("p",null,"Our developers have been hard at work getting top issues addressed for this hotfix. Several of these were reported by players, so keep those reports coming at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"! Even more fixes are already in the works for another update coming soon."),(0,r.kt)("h2",{id:"16th-july-2020---1161-hotfix-update-playstation-4"},(0,r.kt)("strong",{parentName:"h2"},"16th July 2020 - 1.16.1 Hotfix Update (PlayStation 4)")),(0,r.kt)("p",null,"We're releasing a new hotfix for the 1.16.1.04 update on PlayStation 4 that greatly improves stability in the game.\xa0Be sure to check below for the full list of fixes on all platforms.  "),(0,r.kt)("h2",{id:"8th-july-2020---1161-hotfix-update-playstation-4"},(0,r.kt)("strong",{parentName:"h2"},"8th July 2020 - 1.16.1 Hotfix Update (PlayStation 4)")),(0,r.kt)("p",null,"Today we are releasing a hotfix for PlayStation 4 that will enable you to clear your sign in data when launching the game, which we hope will avoid the issue where the game is getting stuck on the loading screen and potentially crashing.\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented a workaround button combination on startup to clear the player's download cache on PS4 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84790"},"MCPE-84790"),")")),(0,r.kt)("p",null,"You may wish to try the following after the game has updated to version 1.16.1.03:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch Minecraft"),(0,r.kt)("li",{parentName:"ol"},"When the initial loading screen appears, hold the following buttons:"),(0,r.kt)("li",{parentName:"ol"},"Button combination is ",(0,r.kt)("strong",{parentName:"li"},"L1 + R1 + L2 + R2 + OPTIONS + Touch Pad"),", and must be held until the initial splash screen is removed  ")),(0,r.kt)("h2",{id:"29th-june-2020---1161-hotfix"},(0,r.kt)("strong",{parentName:"h2"},"29th June 2020"),"\xa0 ",(0,r.kt)("strong",{parentName:"h2"},"- 1.16.1 Hotfix")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several issues with Netherite items being lost in\xa0fire or\xa0lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70774"},"MCPE-70774"),",\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79753"},"MCPE-79753"),",\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84796"},"MCPE-84796"),")"),(0,r.kt)("li",{parentName:"ul"},"Recipe Select button prompt shows when hovering over a non-craftable recipe book item using controller\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79725"},"MCPE-79725"),")"),(0,r.kt)("li",{parentName:"ul"},"Recipe selected items put in\xa0the\xa0crafting input grid can now be hovered over with\xa0the\xa0controller to see their tooltip names"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0a\xa0crash that could occur when playing an emote and suspending the game\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73325"},"MCPE-73325"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred on PlayStation 4 due to other players using custom skins"),(0,r.kt)("li",{parentName:"ul"},"Emotes can no longer be equipped before unlocking them\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84810"},"MCPE-84810"),")"),(0,r.kt)("li",{parentName:"ul"},"Custom skins\xa0once again work properly on multiplayer\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48207"},"MCPE-48207"),")")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],h={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},11930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(75599);const i={sidebar_position:99999939,title:"1.16.1",tags:["Official","Changelog","Stable","1.16"]},s="Minecraft - 1.16.1 (Bedrock)",c={unversionedId:"official_changelog/stable/1.16/1",id:"official_changelog/stable/1.16/1",title:"1.16.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.16/1.mdx",sourceDirName:"official_changelog/stable/1.16",slug:"/official_changelog/stable/1.16/1",permalink:"/en/docs/official_changelog/stable/1.16/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.16/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999939,frontMatter:{sidebar_position:99999939,title:"1.16.1",tags:["Official","Changelog","Stable","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.10",permalink:"/en/docs/official_changelog/stable/1.16/10"},next:{title:"1.16.0",permalink:"/en/docs/official_changelog/stable/1.16/0"}},u={},p=[],h={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---1161-bedrock"},"Minecraft - 1.16.1 (Bedrock)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);