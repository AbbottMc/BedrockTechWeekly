"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40066,91176,58990,21032,34079,1964],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(96540),n=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(58168),n=r(96540),o=r(20053),i=r(23104),l=r(56347),s=r(57485),c=r(31682),u=r(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),a=c[r].value;a!==l&&(d(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},n.createElement(v,(0,a.A)({},e,t)),n.createElement(b,(0,a.A)({},e,t)))}function w(e){const t=(0,f.A)();return n.createElement(_,(0,a.A)({key:String(t)},e))}},78462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(58168),n=(r(96540),r(15680)),o=r(23450),i=r(50990),l=(r(72138),r(40246),r(57350));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/60/20/tech",id:"changelog_source/preview/1.20/60/20/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/60/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech",permalink:"/docs/changelog_source/preview/1.20/60/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Items",id:"items",level:2},{value:"Loot Tables",id:"loot-tables",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],m={toc:d},g="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"script-api"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(l.default,{techSapi:(0,n.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"editor"},"Editor"),(0,n.yg)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,n.yg)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.yg)("p",null,"Learn\xa0",(0,n.yg)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},(0,n.yg)("strong",{parentName:"a"},"how to use")),"\xa0the Editor,\xa0join the\xa0",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},(0,n.yg)("strong",{parentName:"a"},"GitHub Discussion")),"\xa0discussion forum to engage with the team, and get started building extensions via the\xa0",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},(0,n.yg)("strong",{parentName:"a"},"starter kit")),"\xa0and\xa0",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},(0,n.yg)("strong",{parentName:"a"},"samples")),"."),(0,n.yg)("p",null,"Updates this week:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed editor screen freeze bug caused by CTRL+TAB shortcut.\xa0"),(0,n.yg)("li",{parentName:"ul"},"New API! Simulation paused state is now available for editor scripting via the\xa0editor\xa0global object's\xa0simulation\xa0property.\xa0"),(0,n.yg)("li",{parentName:"ul"},"Menu items now have a\xa0checked\xa0property, of type\xa0boolean | undefined. If the value is defined, the menu will show a checkmark if the value is true."),(0,n.yg)("li",{parentName:"ul"},"Added an ","`","all","`"," optional parameter to the ","`","/reload","`"," slash command when running in Editor mode which enables a full warm reload of the entire Editor.\xa0")),(0,n.yg)("h2",{id:"entity-components"},"Entity Components"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Entity event response run","_","command has been renamed to queue","_","command and has been released out of experimental. Commands run via queue","_","command may be deferred until the next tick. If the entity is removed before the command is run, the command will not execute. Content using run","_","command under experimental will still work for now but the experimental feature is now considered deprecated")),(0,n.yg)("h2",{id:"items"},"Items"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Unrecognized fields in component item jsons will now give a warning to the content log in format versions 1.20.60 and higher")),(0,n.yg)("h2",{id:"loot-tables"},"Loot Tables"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Decorated Pots now support the use of loot tables")),(0,n.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.yg)("h2",{id:"graphical"},"Graphical"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Improved performance by fixing a GPU resource allocation bug that resulted in constant reallocations every frame in the Deferred Technical Preview")),(0,n.yg)("h2",{id:"script-api-1"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(l.default,{techSapi:(0,n.yg)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},50990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_exp",id:"changelog_source/preview/1.20/60/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PlayerPlaceBlockBeforeEvent",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Removed\xa0",(0,n.yg)("em",{parentName:"p"},"itemStack: ItemStack"),"\xa0from event")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Added\xa0",(0,n.yg)("em",{parentName:"p"},"readonly permutationBeingPlaced: BlockPermutation"),"\xa0to event")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Updating\xa0",(0,n.yg)("em",{parentName:"p"},"createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)"),"\xa0to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Class Player")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Added method\xa0",(0,n.yg)("em",{parentName:"p"},"spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;"),"."))))}d.isMDXComponent=!0},40246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},23450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_stable",id:"changelog_source/preview/1.20/60/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed\xa0itemStack\xa0in\xa0ItemReleaseUseAfterEvent\xa0to be optional",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Changed\xa0",(0,n.yg)("em",{parentName:"li"},"itemStack"),"\xa0in\xa0",(0,n.yg)("em",{parentName:"li"},"ItemReleaseUseAfterEvent"),"\xa0to be optional"),(0,n.yg)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEvent from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.8.0")),(0,n.yg)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEventSignal from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.8.0")),(0,n.yg)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEventSignalOptions from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.8.0")),(0,n.yg)("li",{parentName:"ul"},"Released DefinitionModifier from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.8.0")),(0,n.yg)("li",{parentName:"ul"},"Released WorldAfterEvents.dataDrivenEntityTriggerEvent from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.8.0")),(0,n.yg)("li",{parentName:"ul"},'Improved error messages for "Unsupported or out of bounds value." errors to include the bounds')))}d.isMDXComponent=!0},72138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},57350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(58168),n=r(96540),o=r(15680),i=r(18228),l=r(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},g="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(n.Fragment,null,void 0!==r.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.yg)(n.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);