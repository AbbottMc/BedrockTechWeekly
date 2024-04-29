"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3869,81791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},26462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.17/40/tech",id:"changelog_source/stable/1.17/40/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.17/40/tech.mdx",sourceDirName:"changelog_source/stable/1.17/40",slug:"/changelog_source/stable/1.17/40/tech",permalink:"/en/docs/changelog_source/stable/1.17/40/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/40/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Data-Driven Blocks</strong>\xa0",id:"data-driven-blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Molang</strong>\xa0",id:"molang",level:2},{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>GameTestSequence</strong>\xa0",id:"gametestsequence",level:2},{value:"<strong>Player</strong>\xa0",id:"player",level:2},{value:"<strong>Block</strong>\xa0",id:"block",level:2},{value:"<strong>BlockType</strong>",id:"blocktype",level:2},{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updated-add-on-template-packs"},(0,n.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.17.40 are available for download with new resources, behaviors, and documentation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Resource Pack Template: ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ResourcePackTemplate"},"aka.ms/ResourcePackTemplate")),(0,n.kt)("li",{parentName:"ul"},"Behavior Pack Template (Includes documentation): ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/BehaviorPackTemplate"},"aka.ms/BehaviorPackTemplate"))))),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed display only entity destruction in chunk discard scenarios"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug that caused animations to be restarted when changing render controllers")),(0,n.kt)("h2",{id:"data-driven-blocks"},(0,n.kt)("strong",{parentName:"h2"},"Data-Driven Blocks"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated documentation for the Block Rotation component"),(0,n.kt)("li",{parentName:"ul"},"Updated documentation for 'BlockExplosionResistance'"),(0,n.kt)("li",{parentName:"ul"},"Added required toggles to documentation and to content error for block components")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a content error for using a material but not providing the required number of textures to the render controller")),(0,n.kt)("h2",{id:"molang"},(0,n.kt)("strong",{parentName:"h2"},"Molang"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed 'item","_","remaining","_","use","_","duration'having improperly scaled or inverted results (This fix is a Versioned Change as of engine version 1.17.30)"),(0,n.kt)("li",{parentName:"ul"},"Add new compile errors for expressions like\u202f'text' + 3, which were previously ignored (This is a Versioned Change as of engine version 1.17.40)"),(0,n.kt)("li",{parentName:"ul"},"Molang expressions that contain capital letters are properly evaluated now"),(0,n.kt)("li",{parentName:"ul"},"'query.get","_","equipped","_","item","_","name' will now recognize Sea Lanterns (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-67893"},"MCPE-67893"),")"),(0,n.kt)("li",{parentName:"ul"},"Added new compile errors for expressions like 1 + (9 10), which were previously ignored (This is a Versioned Change as of engine version 1.17.40)")),(0,n.kt)("h2",{id:"gametestframework-experimental"},(0,n.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renamed method 'succeedWhenBlockTypePresent' to 'succeedWhenBlockPresent'"),(0,n.kt)("li",{parentName:"ul"},'Fixed a bug where property\u202fid\u202fwould return "Unknown" for custom entities (',(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137786"},"MCPE-137786"),")"),(0,n.kt)("li",{parentName:"ul"},"Identifier strings returned from property\u202fid\u202fnow include the item's namespace"),(0,n.kt)("li",{parentName:"ul"},"Updated the GameTest Framework interface and added a new SimulatedPlayer capability:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added\xa0'SimulatedPlayer'class to GameTest. This class enables GameTest to simulate a variety of player behaviors such as movement, using items, and interacting with blocks and entities. See the\xa0",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest"},"GameTest API"),"\xa0reference documentation for more details",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function\xa0spawnSimulatedPlayer(blockLocation: BlockLocation, name: string): SimulatedPlayer"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("br",{parentName:"li"}),"removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void"))),(0,n.kt)("li",{parentName:"ul"},"mojang-gametest.Test type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed signature of function\xa0assertEntityInstancePresent(entity: Entity, blockLocation: BlockLocation, isPresent: boolean = true)"))),(0,n.kt)("li",{parentName:"ul"},"mojang-minecraft components",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Component\xa0'inventory'now works with\xa0Player\xa0inventories")))))),(0,n.kt)("h2",{id:"gametestsequence"},(0,n.kt)("strong",{parentName:"h2"},"GameTestSequence"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed method\xa0'thenWaitWithDelay'"),(0,n.kt)("li",{parentName:"ul"},"Added method\xa0'thenWaitAfter(delayTicks: number,\xa0callback: () =",">"," undefined)'- After a delay, executes the given\xa0callback\xa0every tick until it succeeds. Exceptions thrown within the\xa0callback\xa0will end sequence execution")),(0,n.kt)("h2",{id:"player"},(0,n.kt)("strong",{parentName:"h2"},"Player"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the location property would return an incorrect height for players"),(0,n.kt)("li",{parentName:"ul"},"Added property\u202f'id'")),(0,n.kt)("h2",{id:"block"},(0,n.kt)("strong",{parentName:"h2"},"Block"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'getLocation'\u202fwith property\u202f'location'"),(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202fgetPermutation\u202fwith property\u202f'permutation'"),(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'getType'\u202fwith property\u202f'type'"),(0,n.kt)("li",{parentName:"ul"},"Replaced methods\u202f'isWaterlogged'\u202fand\u202f'setWaterlogged'\u202fwith property 'isWaterlogged'"),(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'getBlockData'\u202fwith property\u202f'permutation'"),(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'isEmpty' with property\u202f'isEmpty'"),(0,n.kt)("li",{parentName:"ul"},"Removed property\u202f'canBeWaterlogged'")),(0,n.kt)("h2",{id:"blocktype"},(0,n.kt)("strong",{parentName:"h2"},"BlockType")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'getName'\u202fwith property\u202f'id'"),(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'canBeWaterlogged'\u202fwith property\u202f'canBeWaterlogged'")),(0,n.kt)("h2",{id:"blockpermutation"},(0,n.kt)("strong",{parentName:"h2"},"BlockPermutation")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Replaced method\u202f'getType'\u202fwith property\u202f'type'")))}p.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0}}]);