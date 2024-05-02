"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27200,64137,30984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=c??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=n(72389);const b="tabList_TRJ7",v="tabItem_hGfb";function y(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(d(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},82414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.7/0/5/gameplay",id:"changelog_source/preview/1.7/0/5/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.7/0/5/gameplay.mdx",sourceDirName:"changelog_source/preview/1.7/0/5",slug:"/changelog_source/preview/1.7/0/5/gameplay",permalink:"/en/docs/changelog_source/preview/1.7/0/5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.7/0/5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release  ")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Phantoms now definitely swoop down and attack people so watch out! (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36673"},"MCPE-36673"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed blocks often disappearing after being placed or reappearing after being destroyed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31596"},"MCPE-31596"),")"),(0,r.kt)("li",{parentName:"ul"},"Several fixes to reduce lag in multiplayer games"),(0,r.kt)("li",{parentName:"ul"},"Guests rejoining in a different order than they joined for the first time no longer generate different progress during split-screen gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect button focus on the chat screen"),(0,r.kt)("li",{parentName:"ul"},"Isotropic settings are once again respected when altered in blocks.json"),(0,r.kt)("li",{parentName:"ul"},"Blocks in the inventory once again follow the textures set in blocks.json"),(0,r.kt)("li",{parentName:"ul"},"Blockshapes are once again included in blocks.json")))}p.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},c=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},83887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),l=n(82414);const i={sidebar_position:99999985,title:"1.7.0.5",tags:["Official","Changelog","Preview","1.7"]},c="Minecraft Beta - 1.7.0.5 (Xbox One/Windows 10/Android)",s={unversionedId:"official_changelog/preview/1.7/0/5",id:"official_changelog/preview/1.7/0/5",title:"1.7.0.5",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.7/0/5.mdx",sourceDirName:"official_changelog/preview/1.7/0",slug:"/official_changelog/preview/1.7/0/5",permalink:"/en/docs/official_changelog/preview/1.7/0/5",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.7/0/5.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.7",permalink:"/en/docs/tags/1-7"}],version:"current",sidebarPosition:99999985,frontMatter:{sidebar_position:99999985,title:"1.7.0.5",tags:["Official","Changelog","Preview","1.7"]},sidebar:"changelogSidebar",previous:{title:"1.7.0.7",permalink:"/en/docs/official_changelog/preview/1.7/0/7"},next:{title:"1.7.0.3",permalink:"/en/docs/official_changelog/preview/1.7/0/3"}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1705-xbox-onewindows-10android"},"Minecraft Beta - 1.7.0.5 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);