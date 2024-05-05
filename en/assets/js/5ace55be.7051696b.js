"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94428,31164,1460],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(a),d=n,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>C});var r=a(58168),n=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??g;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,a=g.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function C(e){const t=(0,f.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},34415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/210/54/gameplay",id:"changelog_source/preview/1.16/210/54/gameplay",title:"gameplay",description:"Posted: 7 January, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/210/54/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/210/54",slug:"/changelog_source/preview/1.16/210/54/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/210/54/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/210/54/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Character Creator</strong>",id:"character-creator",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Scoreboards</strong>",id:"scoreboards",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Posted:")," 7 January, 2021"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,n.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,n.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,n.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,n.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,n.yg)("h2",{id:"general"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added text-to-speech volume slider"),(0,n.yg)("li",{parentName:"ul"},"Ink Sac from Wandering Trader can now be used for crafting and it can be stacked (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101087"},"MCPE-101087"),")")),(0,n.yg)("h2",{id:"character-creator"},(0,n.yg)("strong",{parentName:"h2"},"Character Creator")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Emote wheel now supports Screen Reader on Android and iOS devices"),(0,n.yg)("li",{parentName:"ul"},"Split-screen characters are now stored in memory and re-joining the game will keep the character that the player had (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58640"},"MCPE-58640"),")")),(0,n.yg)("h2",{id:"marketplace"},(0,n.yg)("strong",{parentName:"h2"},"Marketplace")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed upgrade path for 'format","_","version' 1.13.0 boats to be properly upgraded to 1.16.100, which resolves a bug where boats in templated worlds with a version lower than 1.16.100 had no gravity (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104934"},"MCPE-104934"),")")),(0,n.yg)("h2",{id:"commands"},(0,n.yg)("strong",{parentName:"h2"},"Commands")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Documentation for Bedrock Server Commands has been updated to show the correct commands for permission reloading and listing (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-2341"},"BDS-2341"),")"),(0,n.yg)("li",{parentName:"ul"},"Teleport command now correctly aligns your rotation with the destination entity (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35979"},"MCPE-35979"),")"),(0,n.yg)("li",{parentName:"ul"},"Selector argument options can again be seen and auto-completed correctly after specifying one (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59794"},"MCPE-59794"),")"),(0,n.yg)("li",{parentName:"ul"},"Spawn events now show as suggestions for the '/summon' command (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101112"},"MCPE-101112"),")"),(0,n.yg)("li",{parentName:"ul"},"'SendCommandFeedback' no longer prevents display of outgoing messages (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-95217"},"MCPE-95217"),")"),(0,n.yg)("li",{parentName:"ul"},"Multiple\xa0'/tickingarea add'\xa0or\xa0'/tickingarea remove'\xa0commands performed during the same tick will no longer result in inaccurate messages about the number of ticking areas in use"),(0,n.yg)("li",{parentName:"ul"},"Players can no longer overrun the maximum number of standalone ticking areas in use by adding them all in the same tick"),(0,n.yg)("li",{parentName:"ul"},"Added stop action to the '/screenshake' command"),(0,n.yg)("li",{parentName:"ul"},"Structures can now be deleted from the saved structure list using the new '/structure delete \\<name",">","' command")),(0,n.yg)("h2",{id:"scoreboards"},(0,n.yg)("strong",{parentName:"h2"},"Scoreboards")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Score values on the scoreboard now align on the right of the table (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64973"},"MCPE-64973"),")")))}p.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},19516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),o=a(34922),l=a(34415);const i={sidebar_position:99999884,title:"1.16.210.54",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.210.54 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/210/54",id:"official_changelog/preview/1.16/210/54",title:"1.16.210.54",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/210/54.mdx",sourceDirName:"official_changelog/preview/1.16/210",slug:"/official_changelog/preview/1.16/210/54",permalink:"/en/docs/official_changelog/preview/1.16/210/54",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/210/54.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999884,frontMatter:{sidebar_position:99999884,title:"1.16.210.54",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.210.55",permalink:"/en/docs/official_changelog/preview/1.16/210/55"},next:{title:"1.16.210.53",permalink:"/en/docs/official_changelog/preview/1.16/210/53"}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"minecraft-beta---11621054-xbox-onewindows-10android"},"Minecraft Beta - 1.16.210.54 (Xbox One/Windows 10/Android)"),(0,n.yg)(o.default,{gameplayChangelog:(0,n.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);