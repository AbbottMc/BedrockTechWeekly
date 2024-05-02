"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52064,64137,74122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),c=a(16550),i=a(91980),s=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=i??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=a(72389);const b="tabList_TRJ7",v="tabItem_hGfb";function y(e){let{className:t,block:a,selectedValue:c,selectValue:i,tabValues:s,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),g=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==c&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},33049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.20/62/gameplay",id:"changelog_source/stable/1.20/62/gameplay",title:"gameplay",description:"Posted: February 15, 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/62/gameplay.mdx",sourceDirName:"changelog_source/stable/1.20/62",slug:"/changelog_source/stable/1.20/62/gameplay",permalink:"/en/docs/changelog_source/stable/1.20/62/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/62/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," February 15, 2024"),(0,r.kt)("p",null,"A new update is now available to address crash issues introduced with the 1.20.60 update. In addition, Minecraft Preview is now available on PlayStation 4, so read about that below!"),(0,r.kt)("p",null,"Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),".  "),(0,r.kt)("h1",{id:"playstation-4-preview"},(0,r.kt)("strong",{parentName:"h1"},"PlayStation 4 Preview:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is now available on PlayStation 4! Get Minecraft Preview to experience the latest and greatest upcoming Minecraft features and provide feedback to the Mojang team"),(0,r.kt)("li",{parentName:"ul"},"To access the Preview, load into Minecraft, navigate to Settings, and select Preview in the sidebar to open the download page on PlayStation Store. Minecraft Preview is not available for disk owners of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview runs as a separate game on PlayStation so you can continue to play both versions on your PS4 or PS5 (through backwards compatibility)")),(0,r.kt)("p",null,"To view the latest update changelog for Minecraft Preview, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBeta"},"aka.ms/MinecraftBeta"),"  "),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay")))}d.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const c={},i=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}g.isMDXComponent=!0},65007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(33049);const c={sidebar_position:99999864,title:"1.20.62",tags:["Official","Changelog","Stable","1.20"]},i="Minecraft - 1.20.62 (Bedrock)",s={unversionedId:"official_changelog/stable/1.20/62",id:"official_changelog/stable/1.20/62",title:"1.20.62",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.20/62.mdx",sourceDirName:"official_changelog/stable/1.20",slug:"/official_changelog/stable/1.20/62",permalink:"/en/docs/official_changelog/stable/1.20/62",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.20/62.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999864,frontMatter:{sidebar_position:99999864,title:"1.20.62",tags:["Official","Changelog","Stable","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.70-71",permalink:"/en/docs/official_changelog/stable/1.20/70-71"},next:{title:"1.20.60",permalink:"/en/docs/official_changelog/stable/1.20/60"}},u={},d=[],p={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---12062-bedrock"},"Minecraft - 1.20.62 (Bedrock)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);