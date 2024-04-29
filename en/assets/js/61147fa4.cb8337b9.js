"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90447,64137,80746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),c=a(16550),s=a(91980),i=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,i]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==c&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},59570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.19/73/gameplay",id:"changelog_source/stable/1.19/73/gameplay",title:"gameplay",description:"Posted: March 29, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.19/73/gameplay.mdx",sourceDirName:"changelog_source/stable/1.19/73",slug:"/changelog_source/stable/1.19/73/gameplay",permalink:"/en/docs/changelog_source/stable/1.19/73/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/73/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," March 29, 2023"),(0,r.kt)("p",null,"An update has been released to fix several issues that addresses a few issues that occurred since the release of 1.19.70."),(0,r.kt)("p",null,"Please continue to upvote and report any new bugs at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net"},"feedback.minecraft.net"),".  "),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur with Command Blocks using teleport commands"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the player's aim height was not adjusting correctly when sneaking (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167559"},"MCPE-167559"),")"),(0,r.kt)("li",{parentName:"ul"},"The first player in a splitscreen game will no longer have their input interrupted by other players opening up a container or inventory screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168610"},"MCPE-168610"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Ghast volume and volume distance were too low (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168324"},"MCPE-168324"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed duplicate tooltips appearing when selecting item in the inventory while using touch controls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166866"},"MCPE-166866"),")")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const c={},s=void 0,i={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}g.isMDXComponent=!0},11160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(59570);const c={sidebar_position:99999997,title:"1.19.73",tags:["Official","Changelog","Stable","1.19"]},s="Minecraft - 1.19.73 (Bedrock)",i={unversionedId:"official_changelog/stable/1.19/73",id:"official_changelog/stable/1.19/73",title:"1.19.73",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.19/73.mdx",sourceDirName:"official_changelog/stable/1.19",slug:"/official_changelog/stable/1.19/73",permalink:"/en/docs/official_changelog/stable/1.19/73",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.19/73.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999997,frontMatter:{sidebar_position:99999997,title:"1.19.73",tags:["Official","Changelog","Stable","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.80",permalink:"/en/docs/official_changelog/stable/1.19/80"}},u={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---11973-bedrock"},"Minecraft - 1.19.73 (Bedrock)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);