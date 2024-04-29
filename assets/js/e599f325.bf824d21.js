"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[96603,29933,92601,4306,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},85865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/34-35/gameplay",id:"changelog_source/preview/1.19/0/34-35/gameplay",title:"gameplay",description:"Information on the Minecraft Preview and Beta:",source:"@site/docs/changelog_source/preview/1.19/0/34-35/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/0/34-35",slug:"/changelog_source/preview/1.19/0/34-35/gameplay",permalink:"/docs/changelog_source/preview/1.19/0/34-35/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/34-35/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Beta Version: 1.19.0.34 | Preview Version: 1.19.0.35 | Xbox Preview Version: 1.19.0.67"),(0,n.kt)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content"),(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,n.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/6343276220685/beta_19_7.jpg",alt:"A Minecraft screenshot"})),(0,n.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"accessibility"},(0,n.kt)("strong",{parentName:"h2"},"Accessibility")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Controller lost connection" popup will be shown after progress screen if controller was disconnected while on that screen')),(0,n.kt)("h2",{id:"deep-dark"},(0,n.kt)("strong",{parentName:"h2"},"Deep Dark")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sculk Shriekers and Sculk Catalyst now generate at the same rate in Java and Bedrock Editions (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153525"},"MCPE-153525"),")"),(0,n.kt)("li",{parentName:"ul"},"Sculk Patches in the Ancient Cities and Deep Dark are now larger and more frequent (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154229"},"MCPE-154229"),")"),(0,n.kt)("li",{parentName:"ul"},"Deep Dark Biome is now decorated with Sculk Patches regardless of y-level in world (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155213"},"MCPE-155213"),")")),(0,n.kt)("h2",{id:"marketplace"},(0,n.kt)("strong",{parentName:"h2"},"Marketplace")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when viewing wishlist"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that meant star rating icons would not be correctly filled sometimes"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that caused downloads to get stuck in queue (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54531"},"MCPE-54531"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that prevented players from using templates to create new worlds (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155883"},"MCPE-155883"),")")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Re-added the possibility to drop items in the dark grey area around an item grid in Pocket UI, in order to address a closely related bug that prevented items being dropped outside of some custom GUIs in the Classic UI (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155813"},"MCPE-155813"),")")))}p.isMDXComponent=!0},28438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/34-35/tech",id:"changelog_source/preview/1.19/0/34-35/tech",title:"tech",description:"Blocks",source:"@site/docs/changelog_source/preview/1.19/0/34-35/tech.mdx",sourceDirName:"changelog_source/preview/1.19/0/34-35",slug:"/changelog_source/preview/1.19/0/34-35/tech",permalink:"/docs/changelog_source/preview/1.19/0/34-35/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/34-35/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Blocks</strong>",id:"blocks",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a block serialization issue for some content packs where some blocks were changing to data value 0")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},65808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(85865),i=a(28438);const s={sidebar_position:99999816,title:"1.19.0.34-35",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.0.34/35",u={unversionedId:"official_changelog/preview/1.19/0/34-35",id:"official_changelog/preview/1.19/0/34-35",title:"1.19.0.34-35",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/0/34-35.mdx",sourceDirName:"official_changelog/preview/1.19/0",slug:"/official_changelog/preview/1.19/0/34-35",permalink:"/docs/official_changelog/preview/1.19/0/34-35",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/0/34-35.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999816,frontMatter:{sidebar_position:99999816,title:"1.19.0.34-35",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.10.20",permalink:"/docs/official_changelog/preview/1.19/10/20"},next:{title:"1.19.0.32-33",permalink:"/docs/official_changelog/preview/1.19/0/32-33"}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---11903435"},"Minecraft Beta & Preview - 1.19.0.34/35"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);