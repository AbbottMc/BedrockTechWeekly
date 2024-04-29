"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[36107,5621,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function _(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(_,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay",title:"gameplay",description:"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds.",source:"@site/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay",permalink:"/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_4/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Feature:</strong>",id:"new-feature",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds."),(0,n.kt)("h2",{id:"new-feature"},(0,n.kt)("strong",{parentName:"h2"},"New Feature:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Shulker shells")),(0,n.kt)("h2",{id:"tweaks"},(0,n.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redstone dust again makes red particles instead of white particles when broken."),(0,n.kt)("li",{parentName:"ul"},"Chorus fruit and Ender pearls now have cooldown animations."),(0,n.kt)("li",{parentName:"ul"},"The game should start much quicker now and/or won't hang on a black screen (Android beta only)."),(0,n.kt)("li",{parentName:"ul"},"Tweaked Chorus fruit and Chorus plant icons."),(0,n.kt)("li",{parentName:"ul"},"Tweaked shulkers so natural armor is applied instead of absorption."),(0,n.kt)("li",{parentName:"ul"},"Silverfish's spawning behavior tweaked so it matches other versions."),(0,n.kt)("li",{parentName:"ul"},"Rabbits no longer spawn exponentially in ice biomes."),(0,n.kt)("li",{parentName:"ul"},"Polar bears don't sink into the snow as much anymore."),(0,n.kt)("li",{parentName:"ul"},"Glass should appear correctly again."),(0,n.kt)("li",{parentName:"ul"},"Tweaked igloos to use the correct ice blocks.")),(0,n.kt)("h2",{id:"bug-fixes"},(0,n.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed redstone repeaters so they don't fire too quickly."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue with pistons so they are not activated when adjacent to a not powered block that is adjacent to a power source."),(0,n.kt)("li",{parentName:"ul"},"Baby villagers now appear as grownup villagers when they grow up."),(0,n.kt)("li",{parentName:"ul"},"You no longer take damage due to lag when you move up or down (it's safe to run down stairs again!)"),(0,n.kt)("li",{parentName:"ul"},"Strays again have the 50% chance of dropping an Arrow of Slowness on death."),(0,n.kt)("li",{parentName:"ul"},"Painting items works correctly and doesn't crash your game."),(0,n.kt)("li",{parentName:"ul"},"Items in the pocket crafting screen that you don't have the ingredients for show up again."),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash when looking at the panorama after coming from the world template screen."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where you could respawn on the corner of a block rather than the center."),(0,n.kt)("li",{parentName:"ul"},"/tp or /teleport commands work again as expected."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where players would sometimes still have their experience levels that they did before they died."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug that caused the Store to get stuck on the loading screen (Kindle Fire only)."),(0,n.kt)("li",{parentName:"ul"},"Hoppers only pull in items from above them now."),(0,n.kt)("li",{parentName:"ul"},"Items you pick up will now not move items to your hotbar if it would combine in your inventory."),(0,n.kt)("li",{parentName:"ul"},"Game no longer crashes if your spawn position is at the top of the world."),(0,n.kt)("li",{parentName:"ul"},"Fixed the constant block highlight flickering again."),(0,n.kt)("li",{parentName:"ul"},"Shulker projectiles now emit sound when launched or exploding."),(0,n.kt)("li",{parentName:"ul"},"Chorus plants & Chorus fruit now have the correct sounds when placed & destroyed."),(0,n.kt)("li",{parentName:"ul"},"Looting swords no longer cause an invalid item to drop on occasion which would crash the game when this item was retrieved."),(0,n.kt)("li",{parentName:"ul"},"Fixed a pack import case where a zip contained a folder containing the pack."),(0,n.kt)("li",{parentName:"ul"},"Endermen no longer teleport after you kill them."),(0,n.kt)("li",{parentName:"ul"},"Iron golems no longer drown."),(0,n.kt)("li",{parentName:"ul"},"Players removed from the Realm whitelist who are in the Realm World are now always booted/removed from the world."),(0,n.kt)("li",{parentName:"ul"},"Trees that grow to full size from saplings are no longer invisible (Realms only)."),(0,n.kt)("li",{parentName:"ul"},"Arrows of Harming no longer bounce off of mobs."),(0,n.kt)("li",{parentName:"ul"},"Fixed crashes that occurred when importing some texture packs.")))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},40013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(118);const i={sidebar_position:99999957,title:"MCPE Android Beta - 1.0 build 4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE Android Beta - 1.0 build 4",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/README",title:"MCPE Android Beta - 1.0 build 4",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999957,frontMatter:{sidebar_position:99999957,title:"MCPE Android Beta - 1.0 build 4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.0 build 5",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_5/"},next:{title:"MCPE Android Beta - 1.0 build 3",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/"}},c={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mcpe-android-beta---10-build-4"},"MCPE Android Beta - 1.0 build 4"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);