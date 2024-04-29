"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46418,64137,56310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),c=n(16550),l=n(91980),u=n(67392),s=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=g({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??d;return f({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var h=n(72389);const b="tabList__CuJ",_="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==c&&(d(t),l(r))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:p},i,{className:(0,o.Z)("tabs__item",_,i?.className,{"tabs__item--active":c===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function O(e){const t=(0,h.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},25388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay",id:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6",slug:"/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay",permalink:"/en/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,a.kt)("h2",{id:"tweaks"},(0,a.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated look for Horses, Mules, and Donkeys")))}d.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const c={},l=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,a.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,a.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}f.isMDXComponent=!0},75957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(88247),i=n(25388);const c={sidebar_position:99999991,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.6",tags:["Official","Changelog","Pocket","undefined"]},l="Minecraft Xbox One/Win 10/Android Beta - 1.2.6",u={unversionedId:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/README",id:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/README",title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.6",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6",slug:"/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/",permalink:"/en/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999991,frontMatter:{sidebar_position:99999991,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.6",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Beta - 1.2.14.3 (Xbox One/Windows 10/Android)",permalink:"/en/docs/official_changelog/pocket/Minecraft_Beta_-_1.2.14.3_/"},next:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",permalink:"/en/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/"}},s={},d=[],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraft-xbox-onewin-10android-beta---126"},"Minecraft Xbox One/Win 10/Android Beta - 1.2.6"),(0,a.kt)(o.default,{gameplayChangelog:(0,a.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}f.isMDXComponent=!0}}]);