"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42957,50302,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",w="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},34481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.5/0/10/gameplay",id:"changelog_source/preview/1.5/0/10/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.5/0/10/gameplay.mdx",sourceDirName:"changelog_source/preview/1.5/0/10",slug:"/changelog_source/preview/1.5/0/10/gameplay",permalink:"/docs/changelog_source/preview/1.5/0/10/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.5/0/10/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"Xbox One and Windows 10 players can opt in and out of the beta from the Xbox Insider Hub app. Android players can opt in and out from the Minecraft page of the Google Play Store"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all additions, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.kt)("p",null,"This beta features a whole ocean of new features from the upcoming Update Aquatic Phase 2! If you find any bugs, please report them on ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com"},"bugs.mojang.com")," and post all thoughts and suggestions to ",(0,r.kt)("a",{parentName:"p",href:"http://feedback.minecraft.net/"},"feedback.minecraft.net"),". Thanks for playing!  "),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several of the top crashes that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when placing Sea Turtle Eggs into the inventory"),(0,r.kt)("li",{parentName:"ul"},"Entities no longer become invisible based on the position of the observing player"),(0,r.kt)("li",{parentName:"ul"},"Improved performance around Ocean Monuments on Android devices"),(0,r.kt)("li",{parentName:"ul"},"Players will no longer gradually drift up or down when swimming straight ahead"),(0,r.kt)("li",{parentName:"ul"},"Fixed some Update Aquatic sound effects not playing on low memory devices"),(0,r.kt)("li",{parentName:"ul"},"Flowing water now angles properly when flowing down"),(0,r.kt)("li",{parentName:"ul"},"Flowing water touching Stairs that contains a water source no longer causes water to flow from the solid face of the Stairs"),(0,r.kt)("li",{parentName:"ul"},"Fixed rendering issues with flowing water and flowing lava"),(0,r.kt)("li",{parentName:"ul"},"Lava will now render when the player's perspective is right below the surface"),(0,r.kt)("li",{parentName:"ul"},"Fixed blocks that were removed underwater not creating source water blocks"),(0,r.kt)("li",{parentName:"ul"},"Dropped items no longer float against the water current"),(0,r.kt)("li",{parentName:"ul"},"Tridents no longer disappear when they hit Armour Stands"),(0,r.kt)("li",{parentName:"ul"},"Bubble Columns now reappear quickly if they were blocked by a solid block"),(0,r.kt)("li",{parentName:"ul"},"Decreased the time is takes to break Coral Fans in Survival"),(0,r.kt)("li",{parentName:"ul"},"Rain no longer severely limits view distance"),(0,r.kt)("li",{parentName:"ul"},"The drinking sound is no longer played twice when drinking a potion or Milk"),(0,r.kt)("li",{parentName:"ul"},"Guardians once again spawn in valid water source blocks"),(0,r.kt)("li",{parentName:"ul"},"The Mob Griefing game rule now converts properly from Console Edition worlds"),(0,r.kt)("li",{parentName:"ul"},"Powered Observers now convert properly from Console Edition worlds"),(0,r.kt)("li",{parentName:"ul"},"Fire Resistance once again protects players from Blaze ranged attacks"),(0,r.kt)("li",{parentName:"ul"},"Decreased the damage given by standing in lava when armor with Fire Protection and Protection enchantments is equipped"),(0,r.kt)("li",{parentName:"ul"},"Protection enchantments once again protects players from all types of damage"),(0,r.kt)("li",{parentName:"ul"},"Special symbols in a player\u2019s nickname no longer cause a syntax error when trying to teleport that player from the Host Options tab"),(0,r.kt)("li",{parentName:"ul"},"Woodland Explorer Maps once again point players correctly to Woodland Mansions"),(0,r.kt)("li",{parentName:"ul"},"Pumpkins are now consumed when creating an Iron Golem"),(0,r.kt)("li",{parentName:"ul"},"Top Snow falling on a Snow block no longer loses one layer"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with saved worlds not syncing properly between Xbox One consoles"),(0,r.kt)("li",{parentName:"ul"},"Increased the durability of Sea Turtle Eggs when items are dropped on them"),(0,r.kt)("li",{parentName:"ul"},"Zombies and Drowned no longer jitter while jumping on Sea Turtle Eggs. Why would they though!?"),(0,r.kt)("li",{parentName:"ul"},"Drowned will once again leave water to attack player at night, like they should!"),(0,r.kt)("li",{parentName:"ul"},"Ice placed on Magma blocks in the Nether no longer create water source blocks when melted"),(0,r.kt)("li",{parentName:"ul"},"Hay Bales now have the correct bottom texture when held or seen in Item Frames"),(0,r.kt)("li",{parentName:"ul"},"Arrows of the Turtle Master now apply the proper Resistance level to the target"),(0,r.kt)("li",{parentName:"ul"},"Active Conduits no longer have a black texture surrounding them on some devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed players losing ownership of tamed animals after updating to the latest beta version"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Sneak control not exiting a boat when using keyboard/mouse controls"),(0,r.kt)("li",{parentName:"ul"},"The player model in the skin picker no longer covers the rotate icons in certain GUI scales")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},77017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(34481);const i={sidebar_position:99999993,title:"1.5.0.10",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.5"]},s="Minecraft Beta - 1.5.0.10 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.5/0/10",id:"official_changelog/preview/1.5/0/10",title:"1.5.0.10",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.5/0/10.mdx",sourceDirName:"official_changelog/preview/1.5/0",slug:"/official_changelog/preview/1.5/0/10",permalink:"/docs/official_changelog/preview/1.5/0/10",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.5/0/10.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.5",permalink:"/docs/tags/1-5"}],version:"current",sidebarPosition:99999993,frontMatter:{sidebar_position:99999993,title:"1.5.0.10",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.5"]},sidebar:"changelogSidebar",previous:{title:"1.6.0.1",permalink:"/docs/official_changelog/preview/1.6/0/1"},next:{title:"1.5.0.7",permalink:"/docs/official_changelog/preview/1.5/0/7"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---15010-xbox-onewindows-10android"},"Minecraft Beta - 1.5.0.10 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);