"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51382,81791,64295,64368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},15252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(81279),i=(r(1433),r(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/30/22/tech",id:"changelog_source/preview/1.20/30/22/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("strong",{parentName:"h2"},"Editor")),(0,a.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels withed ",(0,a.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,a.kt)("p",null,"Learn ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.kt)("p",null,"Fixes this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minor updates to the Reload button to Tool mode for reloading scripts and refreshing the UI"),(0,a.kt)("li",{parentName:"ul"},"IPropertyPane",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added property\xa0",(0,a.kt)("em",{parentName:"li"},"collapsed")," to check if the pane is expanded or collapsed"),(0,a.kt)("li",{parentName:"ul"},"Added functions\xa0",(0,a.kt)("em",{parentName:"li"},"collapse")," and\xa0",(0,a.kt)("em",{parentName:"li"},"expand"),"\xa0to control\xa0",(0,a.kt)("em",{parentName:"li"},"collapsed"),"\xa0state")))),(0,a.kt)("h2",{id:"items"},(0,a.kt)("strong",{parentName:"h2"},"Items")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Released the "minecraft:food" item component out of experimental in json formats 1.20.30 and higher\xa0'),(0,a.kt)("li",{parentName:"ul"},'Added "minecraft:interact',"_",'button" item component to enable and set text on the interact button in json formats 1.20.30 and above\xa0')),(0,a.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(i.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed lighting of items in hand in the Deferred Technical Preview\xa0"),(0,a.kt)("li",{parentName:"ul"},"Optimization and fixes for point light contributions")))}m.isMDXComponent=!0},81279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed issue where prototype properties are not possible to redefine using\xa0defineProperty (MCPE-174073)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue where prototype properties are not possible to redefine using\xa0",(0,a.kt)("em",{parentName:"li"},"defineProperty")," (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174073"},"MCPE-174073"),")\xa0"),(0,a.kt)("li",{parentName:"ul"},"ItemStack",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added\xa0",(0,a.kt)("em",{parentName:"li"},"getCanPlaceOn()")," and\xa0",(0,a.kt)("em",{parentName:"li"},"getCanDestroy()")),(0,a.kt)("li",{parentName:"ul"},"Added upper maximum limit of 255 to\xa0",(0,a.kt)("em",{parentName:"li"},"amount")," property - will throw if exceeds"))),(0,a.kt)("li",{parentName:"ul"},"Entity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getProperty(identifier: string): boolean | number | string | undefined"),"-"," Gets an Entity Property"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"setProperty(identifier: string, value: boolean | number | string): void"),"-"," Sets an Entity Property during the next tick"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"resetProperty(identifier: string): boolean | number | string;"),"-"," Resets an Entity Property to its default value during the next tick and returns the default value"))),(0,a.kt)("li",{parentName:"ul"},"beforeEvents",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added event/property\xa0",(0,a.kt)("em",{parentName:"li"},"removeEvent")))),(0,a.kt)("li",{parentName:"ul"},"afterEvents",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed event/property\xa0",(0,a.kt)("em",{parentName:"li"},"removedEvent")," to\xa0",(0,a.kt)("em",{parentName:"li"},"removeEvent")))),(0,a.kt)("li",{parentName:"ul"},"Class\xa0",(0,a.kt)("em",{parentName:"li"},"EntityRemovedAfterEvent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed field\xa0",(0,a.kt)("em",{parentName:"li"},"removedEntity")," to\xa0",(0,a.kt)("em",{parentName:"li"},"removedEntityId"),":\xa0",(0,a.kt)("em",{parentName:"li"},"removedEntityId: string")),(0,a.kt)("li",{parentName:"ul"},"Added field\xa0",(0,a.kt)("em",{parentName:"li"},"typeId: string")))),(0,a.kt)("li",{parentName:"ul"},"Added class\xa0",(0,a.kt)("em",{parentName:"li"},"EntityRemovedBeforeEvent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added field\xa0",(0,a.kt)("em",{parentName:"li"},"removedEntity: Entity")))),(0,a.kt)("li",{parentName:"ul"},"Moved\xa0",(0,a.kt)("em",{parentName:"li"},"EquipmentSlot")," to\xa0",(0,a.kt)("em",{parentName:"li"},"5.0"),"\xa0and changed enum values to uppercase"),(0,a.kt)("li",{parentName:"ul"},"Moved\xa0",(0,a.kt)("em",{parentName:"li"},"EntityEquippableComponent")," to\xa0",(0,a.kt)("em",{parentName:"li"},"5.0")),(0,a.kt)("li",{parentName:"ul"},"Scoreboard",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"setObjectiveAtDisplaySlot")," return type now correctly set to ",(0,a.kt)("em",{parentName:"li"},"ScoreboardObjective")," or undefined"))),(0,a.kt)("li",{parentName:"ul"},"ScoreboardIdentity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getEntity")," return type now correctly set to Entity or undefined"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"setWeather")," API can now take an optional duration parameter to set the weather duration"),(0,a.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.kt)("em",{parentName:"li"},"heightRange: NumberRange"),"-"," Gets min/max dimension height limits."),(0,a.kt)("li",{parentName:"ul"},"Adding Player.isSleeping and Player.isEmoting")))}p.isMDXComponent=!0},1433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),i=r(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);