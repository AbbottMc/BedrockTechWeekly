"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43221,63326,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},63044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay",title:"gameplay",description:"Just smashing bugs with reckless abandon! If you find any, be sure to report them on Jira",source:"@site/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay",permalink:"/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks-1",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes-1",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Just smashing bugs with reckless abandon! If you find any, be sure to report them on Jira"),(0,r.kt)("p",null,"Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xbox Live sign-in now says that it's free to create an account. (English only)"),(0,r.kt)("li",{parentName:"ul"},"Tweaked some back-end performance issues.")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your Realm expires, you should now get a screen asking if you want to renew."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Android when it sent previous offline data.")),(0,r.kt)("p",null,"For those of you on iOS, we're also including the changelog for 0.15.1 below as it was included in your 0.15.2 release."),(0,r.kt)("h2",{id:"tweaks-1"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some tweaks to localization."),(0,r.kt)("li",{parentName:"ul"},"Tweaked some back-end performance issues."),(0,r.kt)("li",{parentName:"ul"},"UI tweaks for different screen sizes."),(0,r.kt)("li",{parentName:"ul"},"Strays and husks have names for the death message now."),(0,r.kt)("li",{parentName:"ul"},"Back-end fixes to chunk loading & chunk data saving."),(0,r.kt)("li",{parentName:"ul"},"Added option to play Realms & multiplayer when not on wi-fi.")),(0,r.kt)("h2",{id:"bug-fixes-1"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed bug with extended pistons being overwritten when a sticky piston pulled another block into the piston."),(0,r.kt)("li",{parentName:"ul"},"Fixed the bug a few of you were still experiencing when you walk near a button and get the suffocation overlay."),(0,r.kt)("li",{parentName:"ul"},"Fixed spawning in trees in Gear VR."),(0,r.kt)("li",{parentName:"ul"},"City texture pack textures for still lava & oak doors fixed."),(0,r.kt)("li",{parentName:"ul"},"Fixed splash potions of harming & arrows of harming so they kill mobs."),(0,r.kt)("li",{parentName:"ul"},"Fixed trapdoors so they don't harm/push players."),(0,r.kt)("li",{parentName:"ul"},"You can access the chat screen while sleeping in a bed again."),(0,r.kt)("li",{parentName:"ul"},"Fixed the crash when a player put armor on a horse."),(0,r.kt)("li",{parentName:"ul"},"Fixed the teleporting bug if you died while riding a horse."),(0,r.kt)("li",{parentName:"ul"},"Fixed players floating on donkeys and mules."),(0,r.kt)("li",{parentName:"ul"},"Fixed some issues with pistons not properly pushing or moving items."),(0,r.kt)("li",{parentName:"ul"},'""Leave bed"" button now working on touch controls.'),(0,r.kt)("li",{parentName:"ul"},"Fixed some login issues on Android.")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],g={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}m.isMDXComponent=!0},44556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(63044);const i={sidebar_position:99999999,title:"MCPE/WIN 10/Gear VR - 0.15.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE/WIN 10/Gear VR - 0.15.2",u={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/README",title:"MCPE/WIN 10/Gear VR - 0.15.2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.2/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999999,frontMatter:{sidebar_position:99999999,title:"MCPE/WIN 10/Gear VR - 0.15.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"1.1",permalink:"/docs/official_changelog/stable/1.1/"},next:{title:"MCPE for Google Play only - 0.15.3",permalink:"/docs/official_changelog/pocket/MCPE_for_Google_Play_only_-_0.15.3/"}},c={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpewin-10gear-vr---0152"},"MCPE/WIN 10/Gear VR - 0.15.2"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);