"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3769,29933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),c=r(16550),i=r(91980),u=r(67392),s=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=r(72389);const v="tabList_TRJ7",b="tabItem_hGfb";function k(e){let{className:t,block:r,selectedValue:c,selectValue:i,tabValues:u,rightElement:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==c&&(m(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),r??t)})),s?a.createElement("div",{className:"w-full"},s):void 0)}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},4928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(47153);const o={},l=void 0,c={unversionedId:"changelog_source/preview/1.18/30/20-21/tech",id:"changelog_source/preview/1.18/30/20-21/tech",title:"tech",description:"Experimental",source:"@site/docs/changelog_source/preview/1.18/30/20-21/tech.mdx",sourceDirName:"changelog_source/preview/1.18/30/20-21",slug:"/changelog_source/preview/1.18/30/20-21/tech",permalink:"/docs/changelog_source/preview/1.18/30/20-21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/20-21/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>Experimental</strong>",id:"experimental",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>JumpToBlock Behavior</strong>",id:"jumptoblock-behavior",level:2},{value:"<strong>Block Components</strong>",id:"block-components",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"experimental"},(0,a.kt)("strong",{parentName:"h2"},"Experimental")),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BlockExplodeEvent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removed property destroyedBlockPermutation"))),(0,a.kt)("li",{parentName:"ul"},"World additions for music management:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"queueMusic(trackName : string, musicOptions : MusicOptions)"),(0,a.kt)("li",{parentName:"ul"},"playMusic(trackName : string, musicOptions : MusicOptions)"),(0,a.kt)("li",{parentName:"ul"},"stopMusic()"),(0,a.kt)("li",{parentName:"ul"},"Added MusicOptions JS class with volume, fadeSeconds and loop properties"))),(0,a.kt)("li",{parentName:"ul"},"Added event\xa0entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)- Fires when an entity takes damage"),(0,a.kt)("li",{parentName:"ul"},"Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'")),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Removed "preventsjumpingcomponent" from data-driven blocks')),(0,a.kt)("h2",{id:"graphics"},(0,a.kt)("strong",{parentName:"h2"},"Graphics")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing RenderDragon on all Android and iOS devices")),(0,a.kt)("h2",{id:"jumptoblock-behavior"},(0,a.kt)("strong",{parentName:"h2"},"JumpToBlock Behavior")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JumpToBlock behavior is now correctly affected by JumpBoost mob effect (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137432"},"MCPE-137432"),")")),(0,a.kt)("h2",{id:"block-components"},(0,a.kt)("strong",{parentName:"h2"},"Block Components")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a case where experimental BlockCollisionComponents did not allow partial specification")))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905),l=r(31792),c=r(85162);const i={},u=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(c.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(a.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);