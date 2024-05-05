"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34006,21032],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(58168),a=r(96540),o=r(20053),l=r(23104),c=r(56347),u=r(57485),s=r(31682),i=r(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var g=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:c,selectValue:u,tabValues:s,rightElement:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const t=e.currentTarget,r=d.indexOf(t),n=s[r].value;n!==c&&(p(t),u(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:m},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),r??t)})),i?a.createElement("div",{className:"w-full"},i):void 0)}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(y,(0,n.A)({},e,t)))}function T(e){const t=(0,g.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},52994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));r(57350);const o={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/0/32-33/tech",id:"changelog_source/preview/1.19/0/32-33/tech",title:"tech",description:"Blocks",source:"@site/docs/changelog_source/preview/1.19/0/32-33/tech.mdx",sourceDirName:"changelog_source/preview/1.19/0/32-33",slug:"/changelog_source/preview/1.19/0/32-33/tech",permalink:"/docs/changelog_source/preview/1.19/0/32-33/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/32-33/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],i={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"blocks"},(0,a.yg)("strong",{parentName:"h2"},"Blocks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed behavior of Command Blocks when cloning another Command Block onto self where the cloned Command Block would not execute its command until a Redstone signal is toggled  ")),(0,a.yg)("h2",{id:"gametest-framework-experimental"},(0,a.yg)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dedicated server has been updated to allow servers to explicitly list which script modules they want loaded when running scripts. A default configuration file is located at\xa0/config/default/permissions.json. Without this new file, all script modules are disabled by default")))}p.isMDXComponent=!0},57350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var n=r(58168),a=r(96540),o=r(15680),l=r(18228),c=r(19365);const u={},s=void 0,i={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},f="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(c.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.yg)(c.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.yg)(a.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);