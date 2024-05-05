"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44938,31164,30521],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(a),p=r,m=g["".concat(i,".").concat(p)]||g[p]||d[p]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[g]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),c=a(56347),i=a(57485),s=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:a,groupId:n}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=i??g;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=a(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:a,selectedValue:c,selectValue:i,tabValues:s,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=g.indexOf(t),n=s[a].value;n!==c&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(y,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,h.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},5313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.20/62/gameplay",id:"changelog_source/stable/1.20/62/gameplay",title:"gameplay",description:"Posted: February 15, 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/62/gameplay.mdx",sourceDirName:"changelog_source/stable/1.20/62",slug:"/changelog_source/stable/1.20/62/gameplay",permalink:"/en/docs/changelog_source/stable/1.20/62/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/62/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:s},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," February 15, 2024"),(0,r.yg)("p",null,"A new update is now available to address crash issues introduced with the 1.20.60 update. In addition, Minecraft Preview is now available on PlayStation 4, so read about that below!"),(0,r.yg)("p",null,"Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),".  "),(0,r.yg)("h1",{id:"playstation-4-preview"},(0,r.yg)("strong",{parentName:"h1"},"PlayStation 4 Preview:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is now available on PlayStation 4! Get Minecraft Preview to experience the latest and greatest upcoming Minecraft features and provide feedback to the Mojang team"),(0,r.yg)("li",{parentName:"ul"},"To access the Preview, load into Minecraft, navigate to Settings, and select Preview in the sidebar to open the download page on PlayStation Store. Minecraft Preview is not available for disk owners of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview runs as a separate game on PlayStation so you can continue to play both versions on your PS4 or PS5 (through backwards compatibility)")),(0,r.yg)("p",null,"To view the latest update changelog for Minecraft Preview, please visit ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MinecraftBeta"},"aka.ms/MinecraftBeta"),"  "),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay")))}d.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const c={},i=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],d={toc:g},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},6415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(5313);const c={sidebar_position:99999864,title:"1.20.62",tags:["Official","Changelog","Stable","1.20"]},i="Minecraft - 1.20.62 (Bedrock)",s={unversionedId:"official_changelog/stable/1.20/62",id:"official_changelog/stable/1.20/62",title:"1.20.62",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.20/62.mdx",sourceDirName:"official_changelog/stable/1.20",slug:"/official_changelog/stable/1.20/62",permalink:"/en/docs/official_changelog/stable/1.20/62",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.20/62.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999864,frontMatter:{sidebar_position:99999864,title:"1.20.62",tags:["Official","Changelog","Stable","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.70-71",permalink:"/en/docs/official_changelog/stable/1.20/70-71"},next:{title:"1.20.60",permalink:"/en/docs/official_changelog/stable/1.20/60"}},u={},g=[],d={toc:g},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft---12062-bedrock"},"Minecraft - 1.20.62 (Bedrock)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);