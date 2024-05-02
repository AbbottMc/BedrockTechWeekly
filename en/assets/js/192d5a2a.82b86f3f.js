"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[23882,63528,81791,1948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=n(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==i&&(m(t),c(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},44328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(27673),l=(n(27777),n(9071));const i={},c=void 0,s={unversionedId:"changelog_source/preview/1.19/70/21/tech",id:"changelog_source/preview/1.19/70/21/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech",permalink:"/en/docs/changelog_source/preview/1.19/70/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general-1",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Crafting Table component no longer appends "tile." when defaulting to use block name for crafting table label')),(0,a.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(l.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added optional\xa0",(0,a.kt)("em",{parentName:"li"},"searchDistance_parameter to\xa0_assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, searchDistance?: number, isPresent?: boolean)")),(0,a.kt)("li",{parentName:"ul"},"Added\xa0_assertEntityInstancePresentInArea(entity: Entity, isPresent?: boolean)_to check if an entity instance is present in the test area"),(0,a.kt)("li",{parentName:"ul"},"Made the\xa0",(0,a.kt)("em",{parentName:"li"},"searchDistance_parameter optional in\xa0_assertItemEntityPresent"))))),(0,a.kt)("h2",{id:"general-1"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'In JSON formats 1.19.70 and later, blocks fail to load if the "condition" field in Block Permutations is not a valid Molang string')))}d.isMDXComponent=!0},27673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/21/tech_sapi_exp",id:"changelog_source/preview/1.19/70/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added function playAnimation(animationName PlayAnimationOptions) - Plays the specified animation for an entity",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added ",(0,a.kt)("em",{parentName:"p"},"function playAnimation(animationName: string, options?: PlayAnimationOptions)")," - Plays the specified animation for an entity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ItemStack")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ItemStack"),"\xa0can now be constructed using a string identifier"),(0,a.kt)("li",{parentName:"ul"},"Removed constructor parameter data"),(0,a.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,a.kt)("em",{parentName:"li"},"data")),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,a.kt)("em",{parentName:"li"},"clearLore"),"-"," To clear lore, call\xa0",(0,a.kt)("em",{parentName:"li"},"setLore"),"\xa0with an empty array or\xa0",(0,a.kt)("em",{parentName:"li"},"undefined")),(0,a.kt)("li",{parentName:"ul"},"Setting\xa0_nameTag_to an empty string will now clear the name tag"),(0,a.kt)("li",{parentName:"ul"},"Setting\xa0_nameTag_to a string longer than 255 characters will now result in an exception"),(0,a.kt)("li",{parentName:"ul"},"Setting\xa0_amount_greater than the maximum stack size will now clamp the value to the maximum stack size"),(0,a.kt)("li",{parentName:"ul"},"Setting\xa0_amount_to a value less than 1 will now result in an exception"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ContainerSlot")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,a.kt)("em",{parentName:"li"},"clearItem"),"-"," To clear the item, call\xa0",(0,a.kt)("em",{parentName:"li"},"setItem"),"\xa0with\xa0",(0,a.kt)("em",{parentName:"li"},"undefined")),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,a.kt)("em",{parentName:"li"},"clearLore"),"-"," To clear lore, call\xa0",(0,a.kt)("em",{parentName:"li"},"setLore"),"\xa0with an empty array or\xa0",(0,a.kt)("em",{parentName:"li"},"undefined"))))))}p.isMDXComponent=!0},27777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/70/21",slug:"/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}d.isMDXComponent=!0}}]);