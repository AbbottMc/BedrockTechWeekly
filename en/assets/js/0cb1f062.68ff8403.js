"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[8341,64137,37992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),c=n(16550),i=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=n(72389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==c&&(p(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},49221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.17/1/gameplay",id:"changelog_source/stable/1.17/1/gameplay",title:"gameplay",description:"This hotfix is available only\xa0for\xa0Nintendo Switch. Multiplayer is still fully compatible with players running on other devices with version 1.17.0.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.17/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.17/1",slug:"/changelog_source/stable/1.17/1/gameplay",permalink:"/en/docs/changelog_source/stable/1.17/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Fixes:</strong>\xa0",id:"fixes",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This hotfix is available only\xa0for\xa0Nintendo Switch. Multiplayer is still fully compatible with players running on other devices with version 1.17.0.  "),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed errors that occurred when logging into Featured Servers\xa0on Nintendo Switch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130282"},"MCPE-130282"),")",(0,r.kt)("br",{parentName:"li"}),"")),(0,r.kt)("p",null,"Please\xa0search for\xa0any bugs you find on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"\xa0and\xa0let us know what you think at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),"."))}p.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const c={},i=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},75719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),l=n(49221);const c={sidebar_position:99999922,title:"1.17.1",tags:["Official","Changelog","Stable","1.17"]},i="Minecraft - 1.17.1 (Switch Only)",s={unversionedId:"official_changelog/stable/1.17/1",id:"official_changelog/stable/1.17/1",title:"1.17.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.17/1.mdx",sourceDirName:"official_changelog/stable/1.17",slug:"/official_changelog/stable/1.17/1",permalink:"/en/docs/official_changelog/stable/1.17/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.17/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999922,frontMatter:{sidebar_position:99999922,title:"1.17.1",tags:["Official","Changelog","Stable","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.2",permalink:"/en/docs/official_changelog/stable/1.17/2"},next:{title:"1.17.0",permalink:"/en/docs/official_changelog/stable/1.17/0"}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---1171-switch-only"},"Minecraft - 1.17.1 (Switch Only)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);