"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6779,56636,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(_,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},13791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay",id:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2",slug:"/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay",permalink:"/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows Mixed Reality support"),(0,r.kt)("li",{parentName:"ul"},"Mixer Interaction: Game commands can now be linked to interactive buttons for viewers to interact directly with the game. Learn more at blog.mixer.com/Minecraft-beta"),(0,r.kt)("li",{parentName:"ul"},"Mobile Broadcasting: Native broadcasting for several streaming services has been added. Look for the new Broadcast button directly in-game")),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moved store offers on several screens. Thanks to all of our players who gave us feedback on this!"),(0,r.kt)("li",{parentName:"ul"},"Improvements to the Create screen for available templates"),(0,r.kt)("li",{parentName:"ul"},"Further adjustments to the sensitivity of block placement")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when loading a Realm that contains banners"),(0,r.kt)("li",{parentName:"ul"},"The arrow marker on a map no longer becomes a dot when a player walks out of the map bounds"),(0,r.kt)("li",{parentName:"ul"},"Tools will no longer lose durability faster than mobs take damage"),(0,r.kt)("li",{parentName:"ul"},"Creepers standing in double tallgrass now deal appropriate damage"),(0,r.kt)("li",{parentName:"ul"},"Fixed a corrupted audio loop when pointing at an item frame in Adventure mode"),(0,r.kt)("li",{parentName:"ul"},"Fall height is no longer compounded the next time a player takes fall damage when chorus fruit teleports a player from a higher elevation"),(0,r.kt)("li",{parentName:"ul"},"Fixed chests, pumpkins, and stairs not facing the right direction in hand"),(0,r.kt)("li",{parentName:"ul"},"Entities and particles are now properly lit in the Nether when playing in split-screen (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer take damage when walking backwards and placing blocks at head level"),(0,r.kt)("li",{parentName:"ul"},"Hostile mobs will no longer spawn on top or inside transparent blocks"),(0,r.kt)("li",{parentName:"ul"},"Starting maps will now upgrade correctly on an anvil"),(0,r.kt)("li",{parentName:"ul"},"After running out of materials for torches, books, or bookshelves, cursor focus no longer moves to another item"),(0,r.kt)("li",{parentName:"ul"},"Fixed the timing of pistons interacting with other pistons"),(0,r.kt)("li",{parentName:"ul"},"Decreased explosion resistance of slabs"),(0,r.kt)("li",{parentName:"ul"},"Players will no longer spawn at a the position of a destroyed bed when leaving the End"),(0,r.kt)("li",{parentName:"ul"},"Parrots no longer choose the same mob to follow repeatedly"),(0,r.kt)("li",{parentName:"ul"},"Lily pads can now be broken by boats when colliding from any direction"),(0,r.kt)("li",{parentName:"ul"},"Tamed horses, donkeys, and mules can now be ridden immediately if mounted while eating grass"),(0,r.kt)("li",{parentName:"ul"},"Banners in item frames no longer change patterns based on the banner that the player in holding"),(0,r.kt)("li",{parentName:"ul"},"Bed recipe will now appear in the Recipe Book when only one ingredient is present in the inventory"),(0,r.kt)("li",{parentName:"ul"},"Observers now properly redirect Redstone Dust"),(0,r.kt)("li",{parentName:"ul"},"Observers powering Redstone Dust below will now power components adjacent to the dust"),(0,r.kt)("li",{parentName:"ul"},"Daylight sensors no longer output power at night when they have no view of the sky"),(0,r.kt)("li",{parentName:"ul"},"Skeletons now turn before shooting"),(0,r.kt)("li",{parentName:"ul"},"Fixed the sound when throwing items"),(0,r.kt)("li",{parentName:"ul"},"Fixed parrots losing their sitting status when loading a world, and incidentally fixed chickens flapping their wings after spawn"),(0,r.kt)("li",{parentName:"ul"},"Editing 'options.txt' can once again be used to increase chunk render distance"),(0,r.kt)("li",{parentName:"ul"},"Arrow of Decay can now be given using the '/give' command"),(0,r.kt)("li",{parentName:"ul"},"Natural Regeneration can now be disabled on Peaceful difficulty"),(0,r.kt)("li",{parentName:"ul"},"Having the PvP game rule disabled no longer makes players immune to the '/kill' command"),(0,r.kt)("li",{parentName:"ul"},"Fixed hopper minecarts not filling from chests when slightly clipped into a block"),(0,r.kt)("li",{parentName:"ul"},"The camera no longer flickers along the Y-axis after teleporting"),(0,r.kt)("li",{parentName:"ul"},"Items on the cursor will now be dropped when the inventory is full and the inventory screen is closed"),(0,r.kt)("li",{parentName:"ul"},"Improved navigation of the inventory screen when using the controller cursor"),(0,r.kt)("li",{parentName:"ul"},"Settings sliders can no longer be adjusted with the D-pad until the A button is used to select them"),(0,r.kt)("li",{parentName:"ul"},'Controller hints will now say ""Place"" while sneaking and aiming at a container'),(0,r.kt)("li",{parentName:"ul"},"Fixed the rendering of borders on the Skin Picker screen"),(0,r.kt)("li",{parentName:"ul"},"Scroll bars are now visible after switching tabs on the Settings screen")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905),i=n(74866),l=n(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},45657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),i=n(13791);const l={sidebar_position:99999989,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2",c={unversionedId:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/README",id:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/README",title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2",slug:"/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/",permalink:"/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999989,frontMatter:{sidebar_position:99999989,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",permalink:"/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/"},next:{title:"Minecraft Android Beta - 1.2.5 Build 1",permalink:"/docs/official_changelog/pocket/Minecraft_Android_Beta_-_1.2.5_Build_1/"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-xbox-onewin-10android-beta---125-build-2"},"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);