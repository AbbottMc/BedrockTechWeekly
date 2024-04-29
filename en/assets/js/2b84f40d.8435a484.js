"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17077,64137,83561],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},77122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/200/51/gameplay",id:"changelog_source/preview/1.16/200/51/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/200/51/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/200/51",slug:"/changelog_source/preview/1.16/200/51/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/200/51/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/200/51/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Accessibility Features",id:"accessibility-features",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Components",id:"components",level:2},{value:"Items",id:"items",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PLEASE READ before participating in the Minecraft Beta:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("h2",{id:"accessibility-features"},"Accessibility Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where UI screen reader did not read the screen title in-game"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the UI screen reader did not read the shortcut button on the Pause Screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the UI screen reader did not read the title on the Profile and Edit Character screens"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the numbering of buttons in the Pause screen was wrong when using text-to-speech"),(0,r.kt)("li",{parentName:"ul"},"Fixed several issues regarding text contrast")),(0,r.kt)("h2",{id:"gameplay"},"Gameplay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Death message bugfixes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-30360"},"MCPE-30360"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-116558"},"MC-116558"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Death message for being shot by Shulker is now "sniped by shulker" instead of "slain by shulkerBullet"'),(0,r.kt)("li",{parentName:"ul"},'Death message for being fireballed by Blaze or Ghast is now "fireballed by \\<Blaze | Ghast',">",'" instead of "slain by \\<Blaze | Ghast',">",'"'),(0,r.kt)("li",{parentName:"ul"},'Death message for being shot by Skeleton is now "shot by skeleton" instead of "shot by arrow"'),(0,r.kt)("li",{parentName:"ul"},'Death message for being spit at by Llama is now "spitballed by Llama" instead of "slain by Llama spit"'),(0,r.kt)("li",{parentName:"ul"},'Death message for being killed with a trident is now "was impaled to death by\xa0" instead of "slain by Trident"'))),(0,r.kt)("li",{parentName:"ul"},"Nether Brick Blocks are once again craftable (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101736"},"MCPE-101736"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the number of Nether Bricks in the Crafting Table (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101818"},"MCPE-101818"),")")),(0,r.kt)("h2",{id:"mobs"},"Mobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased allowed spawn distance for raid mobs as well as improved the ability to find a valid raid spawn position")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Armor with the lock in inventory component can now be placed in the armor slots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102244"},"MCPE-102244"),")")),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue of anyone using 'query.get","_","equipped","_","item","_","name' with an item that was renamed wouldn't get the right result. Now we tie this to vanilla versioning so that the old name will be returned if the world is tied to a specific vanilla version")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},5337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(77122);const i={sidebar_position:99999893,title:"1.16.200.51",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.200.51 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/200/51",id:"official_changelog/preview/1.16/200/51",title:"1.16.200.51",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/200/51.mdx",sourceDirName:"official_changelog/preview/1.16/200",slug:"/official_changelog/preview/1.16/200/51",permalink:"/en/docs/official_changelog/preview/1.16/200/51",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/200/51.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999893,frontMatter:{sidebar_position:99999893,title:"1.16.200.51",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.200.52",permalink:"/en/docs/official_changelog/preview/1.16/200/52"},next:{title:"1.16.100.60",permalink:"/en/docs/official_changelog/preview/1.16/100/60"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11620051-xbox-onewindows-10android"},"Minecraft Beta - 1.16.200.51 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);