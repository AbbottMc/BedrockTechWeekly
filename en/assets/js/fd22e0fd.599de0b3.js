"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90345,27172,81791,83877,7771,8508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(a),d=n,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return a?r.createElement(h,p(p({ref:t},m),{},{components:a})):r.createElement(h,p({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function p(e){let{children:t,hidden:a,className:p}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,p),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),o=a(86010),p=a(12466),i=a(16550),c=a(91980),l=a(67392),m=a(50012);function s(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=u(e),[p,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,l]=h({queryString:a,groupId:r}),[s,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=c??s;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:p,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),k(e)}),[l,k,o]),tabValues:o}}var f=a(72389);const g="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:l}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,p.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),r=l[a].value;r!==i&&(s(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:p}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:u},p,{className:(0,o.Z)("tabs__item",v,p?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function _(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(N,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(_,(0,r.Z)({key:String(t)},e))}},40391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(41200),p=a(40407),i=(a(67093),a(3135),a(9071));const c={},l=void 0,m={unversionedId:"changelog_source/preview/1.20/50/21/tech",id:"changelog_source/preview/1.20/50/21/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/50/21",slug:"/changelog_source/preview/1.20/50/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/50/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"General",id:"general",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],d={toc:u};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue with upgrading loaded values that have multiple string names")),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enhanced the bloom pipeline to utilize HDR scene information to more naturally emphasize bright pixels in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where shadows from non-existent mobs would be rendered in the Deferred Technical Preview\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when switching Dimensions in the Deferred Technical Preview\xa0")),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(p.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},40407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},p=void 0,i={unversionedId:"changelog_source/preview/1.20/50/21/tech_sapi_exp",id:"changelog_source/preview/1.20/50/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Moved\xa0PlayerLeaveBeforeEvent\xa0from\xa0beta\xa0to\xa01.7.0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/50/21",slug:"/changelog_source/preview/1.20/50/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/50/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"PlayerLeaveBeforeEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"NumberRange"),"\xa0interface to\xa0",(0,n.kt)("em",{parentName:"p"},"minecraft/common"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"heightRange: NumberRange"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"matches"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"clearDynamicProperties"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicProperties"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicPropertyIds"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"setDynamicProperty"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"clearDynamicProperties"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicProperties"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicPropertyIds"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved function\xa0",(0,n.kt)("em",{parentName:"p"},"setDynamicProperty"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TicksPerSecond")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved from beta to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"offset"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"above"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"below"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"north"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"east"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"south"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"west"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"center"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"bottomCenter"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0")))))}s.isMDXComponent=!0},3135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},p=void 0,i={unversionedId:"changelog_source/preview/1.20/50/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/50/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/50/21",slug:"/changelog_source/preview/1.20/50/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}))}s.isMDXComponent=!0},41200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},p=void 0,i={unversionedId:"changelog_source/preview/1.20/50/21/tech_sapi_stable",id:"changelog_source/preview/1.20/50/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Events",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/50/21",slug:"/changelog_source/preview/1.20/50/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/50/21/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"PlayerInteractWithBlockAfterEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"PlayerInteractWithBlockBeforeEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"PlayerInteractWithEntityAfterEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Moved\xa0",(0,n.kt)("em",{parentName:"p"},"PlayerInteractWithEntityBeforeEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"p"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"p"},"1.7.0")))))}s.isMDXComponent=!0},67093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},p=void 0,i={unversionedId:"changelog_source/preview/1.20/50/21/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/50/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/50/21",slug:"/changelog_source/preview/1.20/50/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/21/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}))}s.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),p=a(85162);const i={},c=void 0,l={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},s=[],u={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(p.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0}}]);