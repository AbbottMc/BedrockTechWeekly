"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[45536,81791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),c=r(67392),s=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=h({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=r(72389);const b="tabList_TRJ7",v="tabItem_hGfb";function w(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:c,rightElement:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=d.indexOf(t),n=c[r].value;n!==i&&(p(t),u(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),s?a.createElement("div",{className:"w-full"},s):void 0)}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(w,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},67117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/0/56/tech",id:"changelog_source/preview/1.17/0/56/tech",title:"tech",description:'-   Fixed issue with\xa0Simburbia\xa0world\xa0where standing next to a windows shutter block would obscure the view with the "update" texture',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/0/56/tech.mdx",sourceDirName:"changelog_source/preview/1.17/0/56",slug:"/changelog_source/preview/1.17/0/56/tech",permalink:"/en/docs/changelog_source/preview/1.17/0/56/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/56/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Graphical\xa0",id:"graphical",level:3},{value:"Summon Prefix Fixes\xa0",id:"summon-prefix-fixes",level:3},{value:"Items\xa0",id:"items",level:3},{value:"Projectiles\xa0",id:"projectiles",level:3},{value:"Dedicated Server\xa0",id:"dedicated-server",level:3}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fixed issue with\xa0Simburbia\xa0world\xa0where standing next to a windows shutter block would obscure the view with the "update" texture\xa0 \xa0'),(0,a.kt)("li",{parentName:"ul"},"Fixed a crash that occurred\xa0when using the '/stopsound' command to stop the\xa0elytra.loop\xa0sound\xa0(",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120336"},"MCPE-120336"),")\xa0")),(0,a.kt)("h3",{id:"graphical"},"Graphical\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a crash on Windows 10 that can occur in ray tracing mode due to a stale pointer reference \xa0"),(0,a.kt)("li",{parentName:"ul"},"Fixed various cases when ray tracing textures would not be reloaded (resolution switching, upscaling mode switching, ray tracing on/off toggling) \xa0"),(0,a.kt)("li",{parentName:"ul"},"Fixed\xa0Enchanted Bow's textures being\xa0too dark (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119701"},"MCPE-119701"),")\xa0")),(0,a.kt)("h3",{id:"summon-prefix-fixes"},"Summon Prefix Fixes\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a merge bug when loading json definitions for\xa0Vanilla\xa0mobs\xa0"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with the summonable property of overridden vanilla mobs pre JSON version 1.8.0, which caused Bees to not be summonable\xa0(",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58557"},"MCPE-58557"),")\xa0\xa0 \xa0")),(0,a.kt)("h3",{id:"items"},"Items\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "has',"_",'equipment" filter will now properly evaluate custom entity spawn eggs \xa0\xa0')),(0,a.kt)("h3",{id:"projectiles"},"Projectiles\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The\xa0\"ImpactDamageSubcomponent\"\xa0will again only prevent damage from being dealt to fire immune mobs if the\xa0'catchFire'\xa0field is true and the projectile is on fire\xa0 \xa0\xa0")),(0,a.kt)("h3",{id:"dedicated-server"},"Dedicated Server\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The dedicated server log will now list all\xa0Experiments enabled in a world when loading it")))}d.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(31792),l=r(85162);const i={},u=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);