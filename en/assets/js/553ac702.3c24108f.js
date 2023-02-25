"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29049,64137,81791,9600,78068,83395,87058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,c(c({ref:t},u),{},{components:n})):a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),c=n(12466),l=n(16550),i=n(91980),s=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=n(72389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(d(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:p},c,{className:(0,o.Z)("tabs__item",b,c?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},94037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},c=void 0,l={unversionedId:"changelog_source/preview/1.19.70.24-25/gameplay",id:"changelog_source/preview/1.19.70.24-25/gameplay",title:"gameplay",description:"Features and Bug Fixes",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/gameplay",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Features and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:3},{value:"<strong>Technical Updates</strong>",id:"technical-updates",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Features and Bug Fixes")),(0,r.kt)("h3",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h3"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players now stop sneaking in Powder Snow after letting go of the sneak button (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166518"},"MCPE-166518"),")"),(0,r.kt)("li",{parentName:"ul"},"Temporarily reverted the changes related to 1.5 gap sneaking while we continue to improve the camera. The feature will be available in future Previews and Betas so please continue to send us your feedback")),(0,r.kt)("h2",{id:"technical-updates"},(0,r.kt)("strong",{parentName:"h2"},"Technical Updates")),(0,r.kt)("h3",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h3"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an error that could occur when clicking on a Minecoin bundle")))}d.isMDXComponent=!0},36073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(49935),c=n(40592),l=n(9071);const i={},s=void 0,u={unversionedId:"changelog_source/preview/1.19.70.24-25/tech",id:"changelog_source/preview/1.19.70.24-25/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech.mdx",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"<strong>Script API</strong>",id:"script-api",level:2}],g={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(c.default,{mdxType:"TechSapi"}),techSapiChangelog:(0,r.kt)(o.default,{mdxType:"TechSapiChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0},40592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},c=void 0,l={unversionedId:"changelog_source/preview/1.19.70.24-25/tech_sapi",id:"changelog_source/preview/1.19.70.24-25/tech_sapi",title:"tech_sapi",description:"Removed docs of some internal methods that were accidentally released before that were not actually accessible to the public (just a docs change)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech_sapi.md",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech_sapi",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech_sapi",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech_sapi.md",tags:[],version:"current",frontMatter:{}},i={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Removed docs of some internal methods that were accidentally released before that were not actually accessible to the public (just a docs change)"))}d.isMDXComponent=!0},49935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},c=void 0,l={unversionedId:"changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",id:"changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",title:"tech_sapi_changelog",description:"Changed module @minecraft/server-gametest@1.0.0-beta",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog.md",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Changed module <code>@minecraft/server-gametest@1.0.0-beta</code>",id:"changed-module-minecraftserver-gametest100-beta",level:3},{value:"Changed module <code>@minecraft/server-net@1.0.0-beta</code>",id:"changed-module-minecraftserver-net100-beta",level:3},{value:"Changed module <code>@minecraft/server@1.1.0-beta</code>",id:"changed-module-minecraftserver110-beta",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"changed-module-minecraftserver-gametest100-beta"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"h3"},"@minecraft/server-gametest@1.0.0-beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"li"},"SimulatedPlayer")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"sendTestSkin"))),(0,r.kt)("h3",{id:"changed-module-minecraftserver-net100-beta"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"h3"},"@minecraft/server-net@1.0.0-beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpClient")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"testOnly_fulfillRequest")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"testOnly_getRequests")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"testOnly_rejectRequest"))),(0,r.kt)("h3",{id:"changed-module-minecraftserver110-beta"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"h3"},"@minecraft/server@1.1.0-beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"li"},"MinecraftItemTypes")),(0,r.kt)("li",{parentName:"ul"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"li"},"debugStick"))))}d.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),c=n(85162);const l={},i=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(c.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),c=n(85162);const l={},i=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.kt)(c.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}g.isMDXComponent=!0},28013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),c=n(94037),l=n(36073);const i={sidebar_position:99999996,tags:["Official","Changelog","Preview","1.19"]},s="1.19.70.24/25",u={unversionedId:"official_changelog/preview/1.19.70.24-25",id:"official_changelog/preview/1.19.70.24-25",title:"1.19.70.24/25",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19.70.24-25.mdx",sourceDirName:"official_changelog/preview",slug:"/official_changelog/preview/1.19.70.24-25",permalink:"/en/docs/official_changelog/preview/1.19.70.24-25",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19.70.24-25.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999996,frontMatter:{sidebar_position:99999996,tags:["Official","Changelog","Preview","1.19"]},sidebar:"tutorialSidebar",previous:{title:"\u9884\u89c8\u7248\u66f4\u65b0",permalink:"/en/docs/category/\u9884\u89c8\u7248\u66f4\u65b0"},next:{title:"1.19.70.23",permalink:"/en/docs/official_changelog/preview/1.19.70.23"}},d={},p=[],g={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"119702425"},"1.19.70.24/25"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(c.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);