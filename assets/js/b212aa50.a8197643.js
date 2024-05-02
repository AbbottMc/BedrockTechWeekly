"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44153,29933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),c=r(67392),u=r(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=m.indexOf(t),n=c[r].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},24474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/10/21/tech",id:"changelog_source/preview/1.18/10/21/tech",title:"tech",description:"Stability and Performance",source:"@site/docs/changelog_source/preview/1.18/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/21",slug:"/changelog_source/preview/1.18/10/21/tech",permalink:"/docs/changelog_source/preview/1.18/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>JumpToBlockGoal</strong>",id:"jumptoblockgoal",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>mojang-minecraft</strong>",id:"mojang-minecraft",level:3},{value:"<strong>mojang-gametest</strong>",id:"mojang-gametest",level:3}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"stability-and-performance"},(0,a.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved performance when executing commands")),(0,a.kt)("h2",{id:"animation"},(0,a.kt)("strong",{parentName:"h2"},"Animation")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where animation controller events defined in the default state would get skipped if the controller immediately transitioned to another state (This is a versioned change that will only be applied for animation controllers starting at format","_","version 1.18.10)")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Order of function calls triggered by /execute inside a function are now consistent (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-111849"},"MCPE-111849"),")"),(0,a.kt)("li",{parentName:"ul"},"Added /loot command with spawn loot overload")),(0,a.kt)("h2",{id:"jumptoblockgoal"},(0,a.kt)("strong",{parentName:"h2"},"JumpToBlockGoal")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JumpToBlockGoal can no longer be used when the mob is in water")),(0,a.kt)("h1",{id:"experimental-features"},(0,a.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("h3",{id:"mojang-minecraft"},(0,a.kt)("strong",{parentName:"h3"},"mojang-minecraft")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"World",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added blockBreak and blockPlace events, which are called when a player breaks or places a block in the world"))),(0,a.kt)("li",{parentName:"ul"},"BlockExplodeEvent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0destroyedBlock to\xa0block"))),(0,a.kt)("li",{parentName:"ul"},"Player",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added method startItemCooldown(itemCategory : string, durationTicks : int) - Starts or resets a cooldown on an item category (e.g., ender","_","pearl) for the given duration in ticks"),(0,a.kt)("li",{parentName:"ul"},"Added method getItemCooldown(itemCategory : string) - Returns the remaining duration in ticks that this player has of the given item category. If no cooldown is present, returns 0."))),(0,a.kt)("li",{parentName:"ul"},"ItemCooldownComponent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Added ItemCooldownComponent (item.getComponent("minecraft:cooldown"))'),(0,a.kt)("li",{parentName:"ul"},"Read-only property cooldownCategory : string - Represents the cooldown category of this item."),(0,a.kt)("li",{parentName:"ul"},"Read-only property cooldownTicks : int - Represents the cooldown time in ticks for this item if cooldown is enabled"),(0,a.kt)("li",{parentName:"ul"},"method startCooldown(player : Player) - Starts or resets a cooldown for this item on the given player if cooldown is enabled for this item"))),(0,a.kt)("li",{parentName:"ul"},"ItemType",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removed getName method and added read-only property .id")))),(0,a.kt)("h3",{id:"mojang-gametest"},(0,a.kt)("strong",{parentName:"h3"},"mojang-gametest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added gameMode: GameModeparameter to spawnSimulatedPlayer method"))),(0,a.kt)("li",{parentName:"ul"},"SimulatedPlayer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0destroyBlockto\xa0breakBlock"),(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0stopDestroyingBlockto\xa0stopBreakingBlock"),(0,a.kt)("li",{parentName:"ul"},"Removed selectSlot method"),(0,a.kt)("li",{parentName:"ul"},"Added property selectedSlot : int - Gets or sets the currently selected hotbar slot for the player")))))}m.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),a=r(67294),o=r(3905),l=r(31792),i=r(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],p={toc:d};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(a.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);