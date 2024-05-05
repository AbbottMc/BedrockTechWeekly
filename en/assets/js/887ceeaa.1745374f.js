"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44177,31164,98307],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(58168),a=r(96540),o=r(20053),l=r(23104),i=r(56347),c=r(57485),s=r(31682),u=r(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=m({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=c??d;return g({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),g=e=>{const t=e.currentTarget,r=d.indexOf(t),n=s[r].value;n!==i&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(y,(0,n.A)({},e,t)))}function k(e){const t=(0,h.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},91906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/0/23/gameplay",id:"changelog_source/preview/1.18/0/23/gameplay",title:"gameplay",description:"Posted: October 22, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/0/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/0/23",slug:"/changelog_source/preview/1.18/0/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.18/0/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/0/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>A new beta is now available for Android devices:</strong>",id:"a-new-beta-is-now-available-for-android-devices",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," October 22, 2021"),(0,a.yg)("h2",{id:"a-new-beta-is-now-available-for-android-devices"},(0,a.yg)("strong",{parentName:"h2"},"A new beta is now available for Android devices:")),(0,a.yg)("p",null,"Fixed worlds saved on external storage so they should once again appear on the world list"),(0,a.yg)("p",null,"If you have been encountering issues with this, we\u2019d like to hear from you about this fix on the Minecraft bug tracker (",(0,a.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-144801"},"MCPE-144801"),")."))}p.isMDXComponent=!0},34922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(58168),a=(r(96540),r(15680)),o=r(18228),l=r(19365);const i={},c=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},r.techChangelog),(0,a.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),r.gameplayChangelog,(0,a.yg)("h2",{className:"changelog_divider"},"Technical Update"),r.techChangelog))))}m.isMDXComponent=!0},54923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(58168),a=(r(96540),r(15680)),o=r(34922),l=r(91906);const i={sidebar_position:99999844,title:"1.18.0.23",tags:["Official","Changelog","Preview","1.18"]},c="Minecraft Beta - 1.18.0.23 (Android)",s={unversionedId:"official_changelog/preview/1.18/0/23",id:"official_changelog/preview/1.18/0/23",title:"1.18.0.23",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.18/0/23.mdx",sourceDirName:"official_changelog/preview/1.18/0",slug:"/official_changelog/preview/1.18/0/23",permalink:"/en/docs/official_changelog/preview/1.18/0/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/0/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999844,frontMatter:{sidebar_position:99999844,title:"1.18.0.23",tags:["Official","Changelog","Preview","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.0.24",permalink:"/en/docs/official_changelog/preview/1.18/0/24"},next:{title:"1.18.0.22",permalink:"/en/docs/official_changelog/preview/1.18/0/22"}},u={},d=[],p={toc:d},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-beta---118023-android"},"Minecraft Beta - 1.18.0.23 (Android)"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);