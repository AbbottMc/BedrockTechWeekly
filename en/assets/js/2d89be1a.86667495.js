"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24088,64137,81791,75187,13645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,s]=g({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=n(72389);const b="tabList_TRJ7",v="tabItem_hGfb";function w(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==i&&(d(t),c(r))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(w,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},48504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/26/gameplay",id:"changelog_source/preview/1.19/70/26/gameplay",title:"gameplay",description:"Posted: 1 March, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/26/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/70/26",slug:"/changelog_source/preview/1.19/70/26/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/70/26/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/26/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>General</strong>",id:"general",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Posted:")," 1 March, 2023"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," This week's Android Beta version may be delayed. We apologize for the inconvenience and are working to resolve the issue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,a.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,a.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,a.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/13569661534989",alt:"A Minecraft screenshot of the sun going down, with a sniffer, a villager, and camels in the scene.\n"})),(0,a.kt)("p",null,"We have another 1.19.70 Beta/Preview this week while we work on a few more bugs! The good news is that we're very nearly ready to bring the cherry blossom biome and armour trims to Minecraft Preview as an experimental feature - thank you for bearing with us! It will be worth the wait and we're excited to hear your feedback once these features are ready to be tested out in preparation for 1.20, stay tuned for more updates.",(0,a.kt)("br",{parentName:"p"}),"\n","As always, you can send us all your feedback and ideas at\u202f",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\u202fand report any bugs to\u202f",(0,a.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed several issues that were affecting the gameplay experience and stability of the game"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue that prevented Boat paddling sounds from playing (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166558"},"MCPE-166558"),")"),(0,a.kt)("li",{parentName:"ul"},"Items no longer float away after they are thrown out of water (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167251"},"MCPE-167251"),")")))}p.isMDXComponent=!0},64131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/26/tech",id:"changelog_source/preview/1.19/70/26/tech",title:"tech",description:'-   Player projectiles no longer snap to the block grid when spawned from an event with "born" spawn\\_method',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/26/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/26",slug:"/changelog_source/preview/1.19/70/26/tech",permalink:"/en/docs/changelog_source/preview/1.19/70/26/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/26/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Player projectiles no longer snap to the block grid when spawned from an event with "born" spawn',"_","method")))}p.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},c=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,a.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,a.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}m.isMDXComponent=!0},80621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(88247),l=n(48504),i=n(64131);const c={sidebar_position:99999777,title:"1.19.70.26",tags:["Official","Changelog","Preview","1.19"]},s="Minecraft Beta & Preview - 1.19.70.26",u={unversionedId:"official_changelog/preview/1.19/70/26",id:"official_changelog/preview/1.19/70/26",title:"1.19.70.26",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/70/26.mdx",sourceDirName:"official_changelog/preview/1.19/70",slug:"/official_changelog/preview/1.19/70/26",permalink:"/en/docs/official_changelog/preview/1.19/70/26",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/70/26.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999777,frontMatter:{sidebar_position:99999777,title:"1.19.70.26",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.80.20",permalink:"/en/docs/official_changelog/preview/1.19/80/20"},next:{title:"1.19.70.24-25",permalink:"/en/docs/official_changelog/preview/1.19/70/24-25"}},p={},d=[],m={toc:d};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraft-beta--preview---1197026"},"Minecraft Beta & Preview - 1.19.70.26"),(0,a.kt)(o.default,{gameplayChangelog:(0,a.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,a.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);