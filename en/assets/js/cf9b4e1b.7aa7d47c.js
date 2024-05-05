"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84773,43115,13374,35415],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(58168),a=r(96540),o=r(20053),i=r(23104),l=r(56347),s=r(57485),c=r(31682),u=r(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:r,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var h=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==l&&(d(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(b,(0,n.A)({},e,t)))}function w(e){const t=(0,h.A)();return a.createElement(N,(0,n.A)({key:String(t)},e))}},77543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(15643),i=(r(63641),r(88502));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/30/22/tech",id:"changelog_source/preview/1.20/30/22/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"editor"},(0,a.yg)("strong",{parentName:"h2"},"Editor")),(0,a.yg)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels withed ",(0,a.yg)("strong",{parentName:"p"},"#BedrockEditor.")),(0,a.yg)("p",null,"Learn ",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.yg)("p",null,"Fixes this week:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Minor updates to the Reload button to Tool mode for reloading scripts and refreshing the UI"),(0,a.yg)("li",{parentName:"ul"},"IPropertyPane",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added property\xa0",(0,a.yg)("em",{parentName:"li"},"collapsed")," to check if the pane is expanded or collapsed"),(0,a.yg)("li",{parentName:"ul"},"Added functions\xa0",(0,a.yg)("em",{parentName:"li"},"collapse")," and\xa0",(0,a.yg)("em",{parentName:"li"},"expand"),"\xa0to control\xa0",(0,a.yg)("em",{parentName:"li"},"collapsed"),"\xa0state")))),(0,a.yg)("h2",{id:"items"},(0,a.yg)("strong",{parentName:"h2"},"Items")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Released the "minecraft:food" item component out of experimental in json formats 1.20.30 and higher\xa0'),(0,a.yg)("li",{parentName:"ul"},'Added "minecraft:interact',"_",'button" item component to enable and set text on the interact button in json formats 1.20.30 and above\xa0')),(0,a.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,a.yg)("h2",{id:"script-api"},(0,a.yg)("strong",{parentName:"h2"},"Script API")),(0,a.yg)(i.default,{techSapi:(0,a.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.yg)("h2",{id:"graphical"},(0,a.yg)("strong",{parentName:"h2"},"Graphical")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed lighting of items in hand in the Deferred Technical Preview\xa0"),(0,a.yg)("li",{parentName:"ul"},"Optimization and fixes for point light contributions")))}g.isMDXComponent=!0},15643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed issue where prototype properties are not possible to redefine using\xa0defineProperty (MCPE-174073)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed issue where prototype properties are not possible to redefine using\xa0",(0,a.yg)("em",{parentName:"li"},"defineProperty")," (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174073"},"MCPE-174073"),")\xa0"),(0,a.yg)("li",{parentName:"ul"},"ItemStack",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added\xa0",(0,a.yg)("em",{parentName:"li"},"getCanPlaceOn()")," and\xa0",(0,a.yg)("em",{parentName:"li"},"getCanDestroy()")),(0,a.yg)("li",{parentName:"ul"},"Added upper maximum limit of 255 to\xa0",(0,a.yg)("em",{parentName:"li"},"amount")," property - will throw if exceeds"))),(0,a.yg)("li",{parentName:"ul"},"Entity",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"getProperty(identifier: string): boolean | number | string | undefined"),"-"," Gets an Entity Property"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"setProperty(identifier: string, value: boolean | number | string): void"),"-"," Sets an Entity Property during the next tick"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"resetProperty(identifier: string): boolean | number | string;"),"-"," Resets an Entity Property to its default value during the next tick and returns the default value"))),(0,a.yg)("li",{parentName:"ul"},"beforeEvents",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added event/property\xa0",(0,a.yg)("em",{parentName:"li"},"removeEvent")))),(0,a.yg)("li",{parentName:"ul"},"afterEvents",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Renamed event/property\xa0",(0,a.yg)("em",{parentName:"li"},"removedEvent")," to\xa0",(0,a.yg)("em",{parentName:"li"},"removeEvent")))),(0,a.yg)("li",{parentName:"ul"},"Class\xa0",(0,a.yg)("em",{parentName:"li"},"EntityRemovedAfterEvent"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Renamed field\xa0",(0,a.yg)("em",{parentName:"li"},"removedEntity")," to\xa0",(0,a.yg)("em",{parentName:"li"},"removedEntityId"),":\xa0",(0,a.yg)("em",{parentName:"li"},"removedEntityId: string")),(0,a.yg)("li",{parentName:"ul"},"Added field\xa0",(0,a.yg)("em",{parentName:"li"},"typeId: string")))),(0,a.yg)("li",{parentName:"ul"},"Added class\xa0",(0,a.yg)("em",{parentName:"li"},"EntityRemovedBeforeEvent"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added field\xa0",(0,a.yg)("em",{parentName:"li"},"removedEntity: Entity")))),(0,a.yg)("li",{parentName:"ul"},"Moved\xa0",(0,a.yg)("em",{parentName:"li"},"EquipmentSlot")," to\xa0",(0,a.yg)("em",{parentName:"li"},"5.0"),"\xa0and changed enum values to uppercase"),(0,a.yg)("li",{parentName:"ul"},"Moved\xa0",(0,a.yg)("em",{parentName:"li"},"EntityEquippableComponent")," to\xa0",(0,a.yg)("em",{parentName:"li"},"5.0")),(0,a.yg)("li",{parentName:"ul"},"Scoreboard",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"setObjectiveAtDisplaySlot")," return type now correctly set to ",(0,a.yg)("em",{parentName:"li"},"ScoreboardObjective")," or undefined"))),(0,a.yg)("li",{parentName:"ul"},"ScoreboardIdentity",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"getEntity")," return type now correctly set to Entity or undefined"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"setWeather")," API can now take an optional duration parameter to set the weather duration"),(0,a.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,a.yg)("em",{parentName:"li"},"heightRange: NumberRange"),"-"," Gets min/max dimension height limits."),(0,a.yg)("li",{parentName:"ul"},"Adding Player.isSleeping and Player.isEmoting")))}d.isMDXComponent=!0},63641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},88502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(18228),i=r(19365);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.yg)(i.A,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.yg)(i.A,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}g.isMDXComponent=!0}}]);