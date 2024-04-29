"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[16244,29933,3909,72406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=r(72389);const v="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},69891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(50881),i=(r(63527),r(47153));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/60/22/tech",id:"changelog_source/preview/1.19/60/22/tech",title:"tech",description:"Components",source:"@site/docs/changelog_source/preview/1.19/60/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/22",slug:"/changelog_source/preview/1.19/60/22/tech",permalink:"/docs/changelog_source/preview/1.19/60/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>General</strong>",id:"general",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"components"},(0,n.kt)("strong",{parentName:"h2"},"Components")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Added "inventory" as a possible "domain" value for the "has',"_","equipment\" filter, which allows to check for items stored in the actor's inventory"),(0,n.kt)("li",{parentName:"ul"},'Added an "equip',"_","item","_",'slot" field to the "interact" component',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If set, an item held by the player will be equipped to the specified slot upon successful interaction"),(0,n.kt)("li",{parentName:"ul"},"If an item is already present in the specified slot, it will be moved to the player's inventory"),(0,n.kt)("li",{parentName:"ul"},"Equipping an item removes it from the player's inventory, unless the player is in Creative Mode")))),(0,n.kt)("h1",{id:"technical-experimental-features"},(0,n.kt)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"general"},(0,n.kt)("strong",{parentName:"h2"},"General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure Block Permutation Conditions cannot have side effects (i.e. 'math.random', 'math.random","_","integer', and variable assignment)")))}m.isMDXComponent=!0},50881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/60/22/tech_sapi_stable",id:"changelog_source/preview/1.19/60/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Block",source:"@site/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/22",slug:"/changelog_source/preview/1.19/60/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getRedstonePower(): number"),"-"," Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined"))),(0,n.kt)("li",{parentName:"ul"},"Added /scriptevent command as part of the Beta APIs experiment. This is what will trigger system.events.scriptEventReceive events (see below)  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Usage: /scriptevent \\<messsageId: string",">"," ","[","message: ???","]"),(0,n.kt)("li",{parentName:"ul"},'messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my',"_","scripts:spawn","_",'sheep")'),(0,n.kt)("li",{parentName:"ul"},"message is optional, with a max length of 256 characters  "))),(0,n.kt)("li",{parentName:"ul"},"events.scriptEventReceive",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added system event\xa0",(0,n.kt)("em",{parentName:"li"},"events.scriptEventReceive")),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"id: String__","-")," The namespaced ID of the event"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0message: String- The content of the message the event was sent with"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"sourceBlock: Block"),"-"," The command block that triggered/executed the command call if applicable, otherwise undefined"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"sourceEntity: Entity"),"-"," The player/entity that executed the command call if applicable, otherwise undefined"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"initiator: Entity"),"-"," The player that caused an NPC to execute the command call if applicable, otherwise undefined"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"sourceType: MessageSourceType"),"-"," The type of source the event was triggered by"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"subscribe()_can filter by valid namespace string using the\xa0_ScriptEventMessageFilterOptions"),"\xa0class  "))),(0,n.kt)("li",{parentName:"ul"},"ScriptEventMessageFilterOptions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"ScriptEventMessageFilterOptions")," class"),(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"namespaces: string","[","]"),"-"," An array of namespaces to filter on"))),(0,n.kt)("li",{parentName:"ul"},"Simulated Player",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"isSprinting"),"-"," Used to get or set if the sprinting state of the simulated player is set to true")))))}p.isMDXComponent=!0},63527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/60/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/60/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/60/22",slug:"/changelog_source/preview/1.19/60/22/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(87462),n=r(67294),o=r(3905),i=r(74866),l=r(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(n.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);