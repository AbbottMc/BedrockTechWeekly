"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[31516,21032,46047,37623],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),n=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var a=r(58168),n=r(96540),o=r(20053),l=r(23104),i=r(56347),c=r(57485),s=r(31682),u=r(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=d({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=c??p;return g({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),g=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==i&&(m(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:g},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},n.createElement(v,(0,a.A)({},e,t)),n.createElement(b,(0,a.A)({},e,t)))}function _(e){const t=(0,f.A)();return n.createElement(w,(0,a.A)({key:String(t)},e))}},75914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(96540),r(15680)),o=r(69426),l=(r(23666),r(57350));const i={},c=void 0,s={unversionedId:"changelog_source/preview/1.19/70/21/tech",id:"changelog_source/preview/1.19/70/21/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.19/70/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech",permalink:"/docs/changelog_source/preview/1.19/70/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general-1",level:2}],m={toc:p},g="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"general"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Crafting Table component no longer appends "tile." when defaulting to use block name for crafting table label')),(0,n.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.yg)("h2",{id:"script-api"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(l.default,{techSapi:(0,n.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"gametest-framework"},(0,n.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Test",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added optional\xa0",(0,n.yg)("em",{parentName:"li"},"searchDistance_parameter to\xa0_assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, searchDistance?: number, isPresent?: boolean)")),(0,n.yg)("li",{parentName:"ul"},"Added\xa0_assertEntityInstancePresentInArea(entity: Entity, isPresent?: boolean)_to check if an entity instance is present in the test area"),(0,n.yg)("li",{parentName:"ul"},"Made the\xa0",(0,n.yg)("em",{parentName:"li"},"searchDistance_parameter optional in\xa0_assertItemEntityPresent"))))),(0,n.yg)("h2",{id:"general-1"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'In JSON formats 1.19.70 and later, blocks fail to load if the "condition" field in Block Permutations is not a valid Molang string')))}d.isMDXComponent=!0},69426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/21/tech_sapi_exp",id:"changelog_source/preview/1.19/70/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added function playAnimation(animationName PlayAnimationOptions) - Plays the specified animation for an entity",source:"@site/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Added ",(0,n.yg)("em",{parentName:"p"},"function playAnimation(animationName: string, options?: PlayAnimationOptions)")," - Plays the specified animation for an entity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"ItemStack")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"ItemStack"),"\xa0can now be constructed using a string identifier"),(0,n.yg)("li",{parentName:"ul"},"Removed constructor parameter data"),(0,n.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,n.yg)("em",{parentName:"li"},"data")),(0,n.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,n.yg)("em",{parentName:"li"},"clearLore"),"-"," To clear lore, call\xa0",(0,n.yg)("em",{parentName:"li"},"setLore"),"\xa0with an empty array or\xa0",(0,n.yg)("em",{parentName:"li"},"undefined")),(0,n.yg)("li",{parentName:"ul"},"Setting\xa0_nameTag_to an empty string will now clear the name tag"),(0,n.yg)("li",{parentName:"ul"},"Setting\xa0_nameTag_to a string longer than 255 characters will now result in an exception"),(0,n.yg)("li",{parentName:"ul"},"Setting\xa0_amount_greater than the maximum stack size will now clamp the value to the maximum stack size"),(0,n.yg)("li",{parentName:"ul"},"Setting\xa0_amount_to a value less than 1 will now result in an exception"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"ContainerSlot")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,n.yg)("em",{parentName:"li"},"clearItem"),"-"," To clear the item, call\xa0",(0,n.yg)("em",{parentName:"li"},"setItem"),"\xa0with\xa0",(0,n.yg)("em",{parentName:"li"},"undefined")),(0,n.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,n.yg)("em",{parentName:"li"},"clearLore"),"-"," To clear lore, call\xa0",(0,n.yg)("em",{parentName:"li"},"setLore"),"\xa0with an empty array or\xa0",(0,n.yg)("em",{parentName:"li"},"undefined"))))))}m.isMDXComponent=!0},23666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},57350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=r(58168),n=r(96540),o=r(15680),l=r(18228),i=r(19365);const c={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],g={toc:m},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(n.Fragment,null,void 0!==r.techSapiDiff?(0,o.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.yg)(n.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);