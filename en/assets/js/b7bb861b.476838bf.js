"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[75580,64137,57809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==s&&(m(t),i(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},23187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/stable/1.14/30/gameplay",id:"changelog_source/stable/1.14/30/gameplay",title:"gameplay",description:"Posted:\xa0February 11, 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.14/30/gameplay.mdx",sourceDirName:"changelog_source/stable/1.14/30",slug:"/changelog_source/stable/1.14/30/gameplay",permalink:"/en/docs/changelog_source/stable/1.14/30/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.14/30/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Realms Fixes:</strong>",id:"realms-fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:"),"\xa0February 11, 2020"),(0,n.kt)("p",null,"Our developers have been hard at work getting top issues addressed for this hotfix. Several of these were reported by players, so keep those reports coming at ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"! This update is still multiplayer compatible with devices running any version of 1.14."),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cr**"),"ashes / Performance**"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during\xa0gameplay"),(0,n.kt)("li",{parentName:"ul"},"256x\xa0resolution\xa0packs are now restricted on Xbox One to prevent crashing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a temporary solution until we have the crashing issue resolved"))),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur in certain worlds (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59756"},"MCPE-59756"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"General")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Split-screen will now display a message to join when the main controller is disconnected"),(0,n.kt)("li",{parentName:"ul"},"Realms can no longer be purchased if not logged into Xbox Live"),(0,n.kt)("li",{parentName:"ul"},"Players that are not linked to a Nintendo account on Switch are once again able to edit characters"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where joinable friends on Nintendo Switch were still visible after the world has been closed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gameplay")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Auto-jump will no longer trigger unexpectedly when trying to walk through\xa0open\xa0doors (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52213"},"MCPE-52213"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Further\xa0fixes\xa0will be\xa0made\xa0in the future to allow auto-jump to work more consistently, for example,\xa0when trying to jump up\xa0one block\xa0through an open door"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Blocks")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Restored kelp growth to its proper, faster rate (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57330"},"MCPE-57330"),")"),(0,n.kt)("li",{parentName:"ul"},"Bamboo in Flower Pots are no longer empty after converting a world from Editions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Items")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Crafting multiple Honey Blocks now returns the correct amount of empty glass bottles on a 2x2 grid (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58579"},"MCPE-58579"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"User Interface")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The 'Sign In' button is now scaled properly on all platforms"),(0,n.kt)("li",{parentName:"ul"},"Fixed placeholder text appearing on the pause menu when hosting a game without an internet connection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add-Ons")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Entities no longer stop moving when the 'circle","_","around","_","anchor' behavior is added via a component group added by an event and/or there was a block close to their hitbox")))),(0,n.kt)("h2",{id:"realms-fixes"},(0,n.kt)("strong",{parentName:"h2"},"Realms Fixes:")),(0,n.kt)("p",null,"We released an update to Realms on February 25th to fix several issues that players encountered. No game update needed!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when playing on Realms (278539)"),(0,n.kt)("li",{parentName:"ul"},"Fixed chunks regenerating to their original state (289459 / ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2619"},"REALMS-2619"),", 289087 / ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59490"},"MCPE-59490"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed issues with Realms crashing and rolling back progress (238225 / ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2393"},"REALMS-2393"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed some world chunks failing to load in larger worlds (132620 / ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58514"},"MCPE-58514"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed issues with Realms not saving backups (232416 / ",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2142"},"REALMS-2142"),")")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(31792),l=a(85162);const s={},i=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},15660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(88247),l=a(23187);const s={sidebar_position:99999943,title:"1.14.30",tags:["Official","Changelog","Stable","1.14"]},i="Minecraft - 1.14.30 (Bedrock)",c={unversionedId:"official_changelog/stable/1.14/30",id:"official_changelog/stable/1.14/30",title:"1.14.30",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.14/30.mdx",sourceDirName:"official_changelog/stable/1.14",slug:"/official_changelog/stable/1.14/30",permalink:"/en/docs/official_changelog/stable/1.14/30",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.14/30.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.14",permalink:"/en/docs/tags/1-14"}],version:"current",sidebarPosition:99999943,frontMatter:{sidebar_position:99999943,title:"1.14.30",tags:["Official","Changelog","Stable","1.14"]},sidebar:"changelogSidebar",previous:{title:"1.14.41",permalink:"/en/docs/official_changelog/stable/1.14/41"},next:{title:"1.14.20",permalink:"/en/docs/official_changelog/stable/1.14/20"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft---11430-bedrock"},"Minecraft - 1.14.30 (Bedrock)"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);