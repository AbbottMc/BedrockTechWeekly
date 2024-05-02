"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68362,29933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),s=r(16550),c=r(91980),i=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,i]=h({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var b=r(72389);const g="tabList_TRJ7",v="tabItem_hGfb";function k(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:i,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=i[r].value;n!==s&&(m(t),c(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},65437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(47153);const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.17/20/22/tech",id:"changelog_source/preview/1.17/20/22/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/docs/changelog_source/preview/1.17/20/22/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/22",slug:"/changelog_source/preview/1.17/20/22/tech",permalink:"/docs/changelog_source/preview/1.17/20/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/22/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},i=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>Spawning</strong>\xa0",id:"spawning",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gametestframework-experimental"},(0,a.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0BlockTypes\xa0class to\xa0MinecraftBlockTypes\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed Effects class to\xa0MinecraftEffectTypes\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed Items class to\xa0MinecraftItemTypes\xa0"),(0,a.kt)("li",{parentName:"ul"},"Events\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added read-only property\xa0currentTick\xa0to tick event - Returns the current server tick\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0createEntity\xa0to\xa0entityCreate\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0addEffect\xa0to\xa0effectAdd\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0activatePiston\xa0to\xa0pistonActivate\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0beforeActivatePiston\xa0to\xa0beforePistonActivate\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0explodeBlock\xa0to\xa0blockExplode\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed event\xa0changeWeather\xa0to\xa0weatherChange\xa0")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target selectors\xa0ry\xa0and\xa0rym\xa0now support wrapping around north \xa0")),(0,a.kt)("h2",{id:"items"},(0,a.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Killing a custom\xa0mob with an unknown loot table entry type will no longer cause a crash, and will now throw a content error (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129006"},"MCPE-129006"),") \xa0")),(0,a.kt)("h2",{id:"mobs"},(0,a.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rabbit with\xa0initialEvent\xa0specified now scales properly to adult rabbit size\xa0(",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76643"},"MCPE-76643"),") \xa0")),(0,a.kt)("h2",{id:"spawning"},(0,a.kt)("strong",{parentName:"h2"},"Spawning"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Similar to\xa0the\xa0spawns","_","on","_","block","_","filter, the\xa0spawns","_","above","_","block","_",'filter\xa0specifies a list of blocks and a distance. The mob can then spawn only if the nearest block within the specified distance below the desired\xa0spawnpoint\xa0is in that list (water and air not included). "minecraft:spawns',"_","above","_","block","_",'filter": { "blocks": "minecraft:stone", "distance": 10 }')))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905),l=r(31792),s=r(85162);const c={},i=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(s.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(a.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);