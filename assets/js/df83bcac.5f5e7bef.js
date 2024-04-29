"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2161,53833,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",k,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},56215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay",id:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2",slug:"/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay",permalink:"/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Several improvements to navigating the recipe book"),(0,r.kt)("li",{parentName:"ul"},"Improved performance when scrolling through the recipe book"),(0,r.kt)("li",{parentName:"ul"},"Improved performance when looking at many item frames"),(0,r.kt)("li",{parentName:"ul"},"Improved performance when encountering Blazes"),(0,r.kt)("li",{parentName:"ul"},"Fixed performance issue when holding a locator map while other players are nearby"),(0,r.kt)("li",{parentName:"ul"},"Player faces will no longer disappear from maps"),(0,r.kt)("li",{parentName:"ul"},"Fixed draw distance being limited to 6, even on high memory devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when crafting fireworks from the recipe book"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when loading into a single player world"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when traveling through Nether and End portals while the inventory screen was open"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when using the '/summon falling","_","block' command"),(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes when disconnecting from games"),(0,r.kt)("li",{parentName:"ul"},"Improved performance of chunk generation after teleporting and at game start"),(0,r.kt)("li",{parentName:"ul"},"Improved performance with oceans by removing dynamic water blocks"),(0,r.kt)("li",{parentName:"ul"},"Hoppers will now only send redstone signals upwards"),(0,r.kt)("li",{parentName:"ul"},"Fixed End Portal textures when viewed at a far distance"),(0,r.kt)("li",{parentName:"ul"},"Commands that target entities will no longer affect entities across all dimensions"),(0,r.kt)("li",{parentName:"ul"},"Slightly lowered the amount of hostile mobs that spawn"),(0,r.kt)("li",{parentName:"ul"},"Bed icons in the command chat now appear correctly"),(0,r.kt)("li",{parentName:"ul"},"Rideable mobs will no longer kick players from their backs when stepping into one-block-deep water"),(0,r.kt)("li",{parentName:"ul"},"Dying with items in a crafting area will no longer persist after death"),(0,r.kt)("li",{parentName:"ul"},"Beacons can now be tinted using stained glass panes"),(0,r.kt)("li",{parentName:"ul"},"Fixed parrots' names not appearing correctly when riding on a player"),(0,r.kt)("li",{parentName:"ul"},"Fixed newly joined players seeing riding parrots in the wrong positions"),(0,r.kt)("li",{parentName:"ul"},"Tamed parrots can no longer be taken by other players"),(0,r.kt)("li",{parentName:"ul"},"Redstone comparators now properly test for valid power sources"),(0,r.kt)("li",{parentName:"ul"},"Comparators will no longer trigger a short pulse when placed adjacent to a detector rail with a minecart on top"),(0,r.kt)("li",{parentName:"ul"},"Fixed the durability bar always staying green on enchantment table, furnace, and anvil screens"),(0,r.kt)("li",{parentName:"ul"},"Lightning no longer strikes biomes that don't rain"),(0,r.kt)("li",{parentName:"ul"},"Mobs can no longer detect players through solid non-transparent blocks"),(0,r.kt)("li",{parentName:"ul"},"Blazes and Endermites will now retaliate when attacked by other mobs"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused the description to clear in the 3D export screen (Windows 10 only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed missing texture on leather horse armor during 3D export (Windows 10 only)"),(0,r.kt)("li",{parentName:"ul"},"The '/give' command can now give multiple non-stacking items without failing"),(0,r.kt)("li",{parentName:"ul"},"Volume will now change while adjusting the volume sliders and sounds will no longer overlap while adjusting"),(0,r.kt)("li",{parentName:"ul"},"Fixed the item icon for broken Elytra Wings showing as another random item"),(0,r.kt)("li",{parentName:"ul"},"Firework star recipe will now appear in the recipe book while in survival and ingredients will appear in the crafting grid in creative"),(0,r.kt)("li",{parentName:"ul"},"Removed the recipe to craft white wool using bone meal and white wool"),(0,r.kt)("li",{parentName:"ul"},"Colored wool can now be dyed white with bone meal"),(0,r.kt)("li",{parentName:"ul"},"Fixed the item durability bar be dislocated when opening the inventory"),(0,r.kt)("li",{parentName:"ul"},"Light Blue Stained Glass and Stained Glass Pane no longer have placeholder names"),(0,r.kt)("li",{parentName:"ul"},"The text box will now appear when placing a sign that has been renamed using an anvil"),(0,r.kt)("li",{parentName:"ul"},"Fixed name tags over renamed entities always being visible"),(0,r.kt)("li",{parentName:"ul"},"Using pick block will no longer show the name of the previously held item"),(0,r.kt)("li",{parentName:"ul"},"When using the '/clone' command, overlapping chests and their contents will now be replaced, not merged"),(0,r.kt)("li",{parentName:"ul"},"Vines can no longer exist in only-bottom-side-block position"),(0,r.kt)("li",{parentName:"ul"},"The '/clear' command no longer activates if the conditions are not met"),(0,r.kt)("li",{parentName:"ul"},"Fixed players stopping hitting things if there is nothing to hit"),(0,r.kt)("li",{parentName:"ul"},"Fixed the transparency of the Ender Dragon wings on Vanilla textures"),(0,r.kt)("li",{parentName:"ul"},"Fixed horizontal seams that were visible around flames on burning entities"),(0,r.kt)("li",{parentName:"ul"},"Animals that have been fed an item for breeding can no longer be fed anymore until the cooldown wears off"),(0,r.kt)("li",{parentName:"ul"},"Fixed Silverfish not spawning from Monster Egg blocks"),(0,r.kt)("li",{parentName:"ul"},"Smoothed the animation of falling asleep"),(0,r.kt)("li",{parentName:"ul"},"The game will now launch in the language selected as the default device language with Android OS 6.0 and 7.0 (Android only)"),(0,r.kt)("li",{parentName:"ul"},"Pressing RB will no longer scroll through all skins in the skin picker")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(67294),i=n(3905),o=n(74866),l=n(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.kt)(r.Fragment,null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}h.isMDXComponent=!0},15538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(61499),o=n(56215);const l={sidebar_position:99999979,title:"Minecraft Win10/Android Beta - 1.2 Build 2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="Minecraft Win10/Android Beta - 1.2 Build 2",c={unversionedId:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/README",id:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/README",title:"Minecraft Win10/Android Beta - 1.2 Build 2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2",slug:"/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/",permalink:"/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999979,frontMatter:{sidebar_position:99999979,title:"Minecraft Win10/Android Beta - 1.2 Build 2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Win 10/Android Beta - 1.2 Build 3",permalink:"/docs/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_3/"},next:{title:"Minecraft Win10/Android Beta - 1.2 Build 1",permalink:"/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-win10android-beta---12-build-2"},"Minecraft Win10/Android Beta - 1.2 Build 2"),(0,r.kt)(i.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);