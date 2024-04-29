"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77532,3198,95107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),c=r(16550),s=r(91980),i=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,i]=m({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var f=r(72389);const b="tabList__CuJ",k="tabItem_LNqP";function _(e){let{className:t,block:r,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==c&&(p(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":c===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(_,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},45445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,c={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay",permalink:"/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you find any bugs, be sure to ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/secure/Dashboard.jspa"},"report them here!")," Click here to give us feedback & tell us what you think about the update."),(0,n.kt)("h2",{id:"new-features"},(0,n.kt)("strong",{parentName:"h2"},"New Features:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fallout Mash-up Pack")),(0,n.kt)("h2",{id:"tweaks"},(0,n.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a warning if a resource pack cannot find the textures list file")),(0,n.kt)("h2",{id:"bug-fixes"},(0,n.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Wither is now one of the paintings you can get!"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that happened when a mob effect that doesn't exist is applied to a melee attack using Add-On"),(0,n.kt)("li",{parentName:"ul"},"Fixed the screen getting cut-off on smaller screens for the Redstone Mansion store description"),(0,n.kt)("li",{parentName:"ul"},"TNT no longer does damage to a player if the TNT is in water"),(0,n.kt)("li",{parentName:"ul"},"Fixed several skins on the Festive mash-up pack that appeared corrupted"),(0,n.kt)("li",{parentName:"ul"},"After a world with a texture/resource pack is uploaded to a Realm, the texture/resource pack is again displayed correctly. This also fixes the health & hunger bars"),(0,n.kt)("li",{parentName:"ul"},"Crashes shouldn't cause you to lose a lot of your progress anymore"),(0,n.kt)("li",{parentName:"ul"},"Fixed the quartz slab in the Candy texture pack"),(0,n.kt)("li",{parentName:"ul"},"Minecarts no longer bounce indefinitely on slime blocks")))}p.isMDXComponent=!0},61499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(87462),n=r(67294),o=r(3905),l=r(74866),c=r(85162);const s={},i=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],g={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},r.techChangelog),(0,o.kt)(c.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),r.gameplayChangelog,r.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),r.techChangelog):void 0))))}m.isMDXComponent=!0},60571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(61499),l=r(45445);const c={sidebar_position:99999935,title:"MCPE/WIN 10/Gear VR - 1.0.7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE/WIN 10/Gear VR - 1.0.7",i={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/README",title:"MCPE/WIN 10/Gear VR - 1.0.7",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999935,frontMatter:{sidebar_position:99999935,title:"MCPE/WIN 10/Gear VR - 1.0.7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 0.15.4",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/"},next:{title:"MCPE Android Beta - 0.15 build 2",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_0.15_build_2/"}},u={},p=[],d={toc:p};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mcpewin-10gear-vr---107"},"MCPE/WIN 10/Gear VR - 1.0.7"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);