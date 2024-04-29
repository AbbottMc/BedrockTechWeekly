"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40702,10679,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),c=a(91980),s=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=c??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function _(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(_,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},76340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay",id:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay",title:"gameplay",description:"Welcome to Version 1.9!\xa0This will be the last update for Minecraft: New Nintendo 3DS Edition.",source:"@site/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9",slug:"/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay",permalink:"/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Note:</strong>\xa0Please remember that the game is not backwards compatible from this patch and deleting this patch on your system after it is applied will make all saves created with this patch unusable.\xa0If you accidentally deleted the patch, downloading and applying the patch again will enable your save data to become usable.",id:"noteplease-remember-that-the-game-is-not-backwards-compatible-from-this-patch-and-deleting-this-patch-on-your-system-after-it-is-applied-will-make-all-saves-created-with-this-patch-unusableif-you-accidentally-deleted-the-patch-downloading-and-applying-the-patch-again-will-enable-your-save-data-to-become-usable",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to Version 1.9!\xa0This will be the last update for Minecraft: New Nintendo 3DS Edition."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Woodland Mansions"),(0,r.kt)("li",{parentName:"ul"},"Explorer maps"),(0,r.kt)("li",{parentName:"ul"},"Iron & gold nugget smelting"))),(0,r.kt)("li",{parentName:"ul"},"New blocks / items",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Concrete"),(0,r.kt)("li",{parentName:"ul"},"Concrete powder"),(0,r.kt)("li",{parentName:"ul"},"Glazed Terracotta"),(0,r.kt)("li",{parentName:"ul"},"Shulker box"),(0,r.kt)("li",{parentName:"ul"},"Frosted ice"),(0,r.kt)("li",{parentName:"ul"},"Totem of Undying"),(0,r.kt)("li",{parentName:"ul"},"Iron nuggets"),(0,r.kt)("li",{parentName:"ul"},"Magma block"),(0,r.kt)("li",{parentName:"ul"},"Bone block"),(0,r.kt)("li",{parentName:"ul"},"Nether wart block"),(0,r.kt)("li",{parentName:"ul"},"Red Nether brick"),(0,r.kt)("li",{parentName:"ul"},"Spawn eggs (llama, Vindicator, Evoker, Vex)"))),(0,r.kt)("li",{parentName:"ul"},"New entities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Llamas"),(0,r.kt)("li",{parentName:"ul"},"Vindicators"),(0,r.kt)("li",{parentName:"ul"},"Evokers"),(0,r.kt)("li",{parentName:"ul"},"Vexes"),(0,r.kt)("li",{parentName:"ul"},"Cartographer Villagers"))),(0,r.kt)("li",{parentName:"ul"},"World generation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Underground fossils"),(0,r.kt)("li",{parentName:"ul"},"Natural magma block generation in the Nether"))),(0,r.kt)("li",{parentName:"ul"},"New enchantments",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Frost Walker"),(0,r.kt)("li",{parentName:"ul"},"Mending"))),(0,r.kt)("li",{parentName:"ul"},"New achievements"),(0,r.kt)("li",{parentName:"ul"},"Numerous bug fixes from previous builds")),(0,r.kt)("h2",{id:"noteplease-remember-that-the-game-is-not-backwards-compatible-from-this-patch-and-deleting-this-patch-on-your-system-after-it-is-applied-will-make-all-saves-created-with-this-patch-unusableif-you-accidentally-deleted-the-patch-downloading-and-applying-the-patch-again-will-enable-your-save-data-to-become-usable"},(0,r.kt)("strong",{parentName:"h2"},"Note:"),"\xa0Please remember that the game is not backwards compatible from this patch and deleting this patch on your system after it is applied will make all saves created with this patch unusable.\xa0If you accidentally deleted the patch, downloading and applying the patch again will enable your save data to become usable."))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const c={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},95917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(76340);const i={sidebar_position:99999922,title:"Minecraft: New Nintendo 3DS Edition - 1.9",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},c="Minecraft: New Nintendo 3DS Edition - 1.9",s={unversionedId:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/README",id:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/README",title:"Minecraft: New Nintendo 3DS Edition - 1.9",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9",slug:"/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999922,frontMatter:{sidebar_position:99999922,title:"Minecraft: New Nintendo 3DS Edition - 1.9",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft: New Nintendo 3DS Edition - 1.8",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.8/"},next:{title:"Education Edition - 1.0.1",permalink:"/docs/official_changelog/pocket/Education_Edition_-_1.0.1/"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-new-nintendo-3ds-edition---19"},"Minecraft: New Nintendo 3DS Edition - 1.9"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);