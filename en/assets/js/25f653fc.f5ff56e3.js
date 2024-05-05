"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66481,31164,17535],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(58168),a=r(96540),o=r(20053),l=r(23104),i=r(56347),c=r(57485),s=r(31682),u=r(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function g(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=g(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=m({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=s[r].value;n!==i&&(g(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(y,(0,n.A)({},e,t)),a.createElement(v,(0,n.A)({},e,t)))}function T(e){const t=(0,h.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},69895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.15/0/9/gameplay",id:"changelog_source/preview/1.15/0/9/gameplay",title:"gameplay",description:"Posted: April 28, 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.15/0/9/gameplay.mdx",sourceDirName:"changelog_source/preview/1.15/0/9",slug:"/changelog_source/preview/1.15/0/9/gameplay",permalink:"/en/docs/changelog_source/preview/1.15/0/9/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.15/0/9/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," April 28, 2020"),(0,a.yg)("p",null,"Several improvements and fixes have been made to the Minecraft with RTX beta for Windows 10. Be sure to check out the ",(0,a.yg)("a",{parentName:"p",href:"https://help.minecraft.net/hc/en-us/articles/360042255511-Minecraft-with-RTX-Beta-Known-Issues-List"},"Known Issues List")," and ",(0,a.yg)("a",{parentName:"p",href:"https://help.minecraft.net/hc/en-us/articles/360041035092-Minecraft-NVIDIA-RTX-FAQ"},"Frequently Asked Questions")," for the latest details."),(0,a.yg)("h2",{id:"fixes"},(0,a.yg)("strong",{parentName:"h2"},"Fixes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Crash fixes"),(0,a.yg)("li",{parentName:"ul"},"Items in hand look identical to the same items placed in the world"),(0,a.yg)("li",{parentName:"ul"},"Sun shadows and god rays look brighter and more correct through glass"),(0,a.yg)("li",{parentName:"ul"},"Performance enhancements"),(0,a.yg)("li",{parentName:"ul"},"Tweaks to address the brightness at night"),(0,a.yg)("li",{parentName:"ul"},"Fix for per-pixel emissives on low resolution textures"),(0,a.yg)("li",{parentName:"ul"},"Fix for better looking glass in reflections")))}g.isMDXComponent=!0},34922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(18228),l=r(19365);const i={},c=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},r.techChangelog),(0,a.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),r.gameplayChangelog,(0,a.yg)("h2",{className:"changelog_divider"},"Technical Update"),r.techChangelog))))}m.isMDXComponent=!0},99200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(34922),l=r(69895);const i={sidebar_position:99999919,title:"1.15.0.9",tags:["Official","Changelog","Preview","1.15"]},c="Minecraft with RTX Beta - 1.15.0.9 (Windows 10)",s={unversionedId:"official_changelog/preview/1.15/0/9",id:"official_changelog/preview/1.15/0/9",title:"1.15.0.9",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.15/0/9.mdx",sourceDirName:"official_changelog/preview/1.15/0",slug:"/official_changelog/preview/1.15/0/9",permalink:"/en/docs/official_changelog/preview/1.15/0/9",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.15/0/9.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.15",permalink:"/en/docs/tags/1-15"}],version:"current",sidebarPosition:99999919,frontMatter:{sidebar_position:99999919,title:"1.15.0.9",tags:["Official","Changelog","Preview","1.15"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.51",permalink:"/en/docs/official_changelog/preview/1.16/0/51"},next:{title:"1.15.0.56",permalink:"/en/docs/official_changelog/preview/1.15/0/56"}},u={},p=[],g={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-with-rtx-beta---11509-windows-10"},"Minecraft with RTX Beta - 1.15.0.9 (Windows 10)"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);