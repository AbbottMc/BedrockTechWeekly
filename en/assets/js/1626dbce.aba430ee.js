"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43082,64137,36327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),c=n(91980),u=n(67392),s=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=c??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(72389);const _="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(d(t),c(a))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:g,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",_)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},60430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay",title:"gameplay",description:"Please note that due a glitch in this release, it is possible for beta testers to access their Realms. However, accessing your Realm will upgrade it to 1.0.5 and any players on your Realm who are not in the beta will be unable to access your Realm until the full 1.0.5 release.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please note that due a glitch in this release, it is possible for beta testers to access their Realms. However, accessing your Realm will upgrade it to 1.0.5 and any players on your Realm who are not in the beta will be unable to access your Realm until the full 1.0.5 release.  "),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several bugs with the '/replaceitem' command\xa0"),(0,r.kt)("li",{parentName:"ul"},"Entities will no longer spawn in lava with the '/spreadplayers' command\xa0"),(0,r.kt)("li",{parentName:"ul"},"Chorus plants will now play the proper sound when they grow"),(0,r.kt)("li",{parentName:"ul"},"Maps zoomed out on an anvil now work the same for all players\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when attempting to place any irrelevant item in Horse Armor slot using '/replaceitem' command")))}d.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},55133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),l=n(60430);const i={sidebar_position:99999964,title:"MCPE Android Beta - 1.0.5 Build 3",tags:["Official","Changelog","Pocket","undefined"]},c="MCPE Android Beta - 1.0.5 Build 3",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/README",title:"MCPE Android Beta - 1.0.5 Build 3",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_3/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999964,frontMatter:{sidebar_position:99999964,title:"MCPE Android Beta - 1.0.5 Build 3",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.0.3",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.3/"},next:{title:"MCPE Android Beta - 1.0.5 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.5_Build_2/"}},s={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpe-android-beta---105-build-3"},"MCPE Android Beta - 1.0.5 Build 3"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);