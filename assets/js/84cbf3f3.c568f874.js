"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[10264,21032],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),c=a(57485),u=a(31682),s=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=g({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=c??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:u,rightElement:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(m(t),c(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),s?r.createElement("div",{className:"w-full"},s):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,h.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));a(57350);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.19/50/20/tech",id:"changelog_source/preview/1.19/50/20/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.19/50/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/50/20",slug:"/changelog_source/preview/1.19/50/20/tech",permalink:"/docs/changelog_source/preview/1.19/50/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/20/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Networking</strong>",id:"networking",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Scripting, APIs, and GameTest Framework</strong>",id:"scripting-apis-and-gametest-framework",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Min/Max distance values in sound events now only affect the sound event and not all events using the same sound (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154376"},"MCPE-154376"),")"),(0,r.yg)("li",{parentName:"ul"},"Added client-side-chunk-generation-enabled toggle to server.properties")),(0,r.yg)("h2",{id:"networking"},(0,r.yg)("strong",{parentName:"h2"},"Networking")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added server property 'enable-lan-visibility' to disable the explicit LAN discovery by clients. This will prevent unexpected port conflicts when running multiple dedicated servers on a single host. Clarified port use in server logs and made error messaging more clear (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-1094"},"BDS-1094"),")")),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that would occur if the ",(0,r.yg)("em",{parentName:"li"},"texture","_","index")," of a spawn egg was out of bounds. Now a content log error will be presented instead"),(0,r.yg)("li",{parentName:"ul"},"Added null ptr check when retrieving actor ref in CameraAPI to prevent crashing"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where game would crash when Ender Dragon breath attack hadn't hit blocks or fell into the void (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161204"},"MCPE-161204"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when navigating down in the Villager screen with the keyboard")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"general-1"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Crafting Table UI updates when a block changes to a permutation with a different\xa0_minecraft:crafting","_","table_block component  ")),(0,r.yg)("h2",{id:"scripting-apis-and-gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"Scripting, APIs, and GameTest Framework")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed wireframes still rendering after using the /gametest clearall for distant gametest structures command"),(0,r.yg)("li",{parentName:"ul"},"Entity",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,r.yg)("em",{parentName:"li"},"runCommand"),". Consider ",(0,r.yg)("em",{parentName:"li"},"runCommandAsync")," as an alternative"))),(0,r.yg)("li",{parentName:"ul"},"Dimension",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,r.yg)("em",{parentName:"li"},"runCommand"),". Consider ",(0,r.yg)("em",{parentName:"li"},"runCommandAsync")," as an alternative"))),(0,r.yg)("li",{parentName:"ul"},"Converted BlockRaycastOptions to an interface"),(0,r.yg)("li",{parentName:"ul"},"Converted EntityEventOptions to an interface"),(0,r.yg)("li",{parentName:"ul"},"Converted ScoreboardObjectiveDisplayOptions to an interface",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Location type updated to IVec3"))),(0,r.yg)("li",{parentName:"ul"},"Vector",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"add - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"cross - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"distance - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"divide - updated\xa0_a_argument to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"lerp - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"max - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"min - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b"),"\xa0arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"multiply - updated\xa0_a_argument to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"slerp - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a_and\xa0_b")," arguments to accept an IVec3 interface type"),(0,r.yg)("li",{parentName:"ul"},"subtract - updated\xa0",(0,r.yg)("em",{parentName:"li"},"a"),"\xa0and\xa0",(0,r.yg)("em",{parentName:"li"},"b"),"\xa0arguments to accept an IVec3 interface type")))))}m.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=a(58168),r=a(96540),l=a(15680),o=a(18228),i=a(19365);const c={},u=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m},g="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(g,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.yg)(r.Fragment,null,a.techSapi)))}y.isMDXComponent=!0}}]);