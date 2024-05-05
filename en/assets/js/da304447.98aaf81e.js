"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35772,43115],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(58168),a=r(96540),o=r(20053),l=r(23104),c=r(56347),u=r(57485),s=r(31682),i=r(89466);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=g({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:r,selectedValue:c,selectValue:u,tabValues:s,rightElement:i}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,r=m.indexOf(t),n=s[r].value;n!==c&&(d(t),u(n))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>m.push(e),onKeyDown:g,onClick:p},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),r??t)})),i?a.createElement("div",{className:"w-full"},i):void 0)}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(y,(0,n.A)({},e,t)),a.createElement(v,(0,n.A)({},e,t)))}function T(e){const t=(0,f.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},25263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));r(88502);const o={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/40/21/tech",id:"changelog_source/preview/1.19/40/21/tech",title:"tech",description:"Stability and Performance",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/40/21",slug:"/changelog_source/preview/1.19/40/21/tech",permalink:"/en/docs/changelog_source/preview/1.19/40/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}],i={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"stability-and-performance"},(0,a.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when using the ",(0,a.yg)("em",{parentName:"li"},"hasItem")," selector and specifying a negative value for the item's data (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152314"},"MCPE-152314"),")")),(0,a.yg)("h1",{id:"experimental-features"},(0,a.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,a.yg)("h2",{id:"commands"},(0,a.yg)("strong",{parentName:"h2"},"Commands")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Implemented the "/execute facing\xa0" and "/execute facing entity\xa0" commands'),(0,a.yg)("li",{parentName:"ul"},'Implemented the "/execute align\xa0" command')),(0,a.yg)("h2",{id:"data-driven-blocks"},(0,a.yg)("strong",{parentName:"h2"},"Data Driven Blocks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'"minecraft:direction" is no longer exposed as a data-driven blockProperty. Blocks throw a content error when the "minecraft" namespace is used')),(0,a.yg)("h2",{id:"gametest-framework"},(0,a.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Removed built-in GameTest Behavior Packs")),(0,a.yg)("h2",{id:"general"},(0,a.yg)("strong",{parentName:"h2"},"General")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added flag\xa0",(0,a.yg)("em",{parentName:"li"},"is","_","hidden","_","in","_","commands")," in\xa0",(0,a.yg)("em",{parentName:"li"},"menu","_","category"),"\xa0to control whether or not a block can be used in commands")))}d.isMDXComponent=!0},88502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=r(58168),a=(r(96540),r(15680)),o=r(18228),l=r(19365);const c={},u=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},i={},m=[],d={toc:m},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}g.isMDXComponent=!0}}]);