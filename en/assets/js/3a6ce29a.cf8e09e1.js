"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32691,64137,74001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(_,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},47911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay",id:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9",slug:"/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay",permalink:"/en/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Version:</strong> 1.2.0.31",id:"version-12031",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Fixes from Bugs in Beta:</strong>",id:"fixes-from-bugs-in-beta",level:2},{value:"<strong>Fixes from Bugs in Retail:</strong>",id:"fixes-from-bugs-in-retail",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"version-12031"},(0,r.kt)("strong",{parentName:"h2"},"Version:")," 1.2.0.31"),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Coordinates! Now available as a gamerule and a toggle under settings."),(0,r.kt)("li",{parentName:"ul"},'Copy world button is now next to ""delete world"" and ""export world"" (Xbox only)')),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a per entity type limit that only affects creepers and ghasts so they won't spawn if there's already a certain number in a 5x5 chunk area- no more overspawning of creepers & ghasts!"),(0,r.kt)("li",{parentName:"ul"},"Removed upload custom skin button in Xbox One beta until the console platforms complete the work to allow uploading of skins to the console."),(0,r.kt)("li",{parentName:"ul"},"Recipe book visibility status now saved separately for inventory & crafting"),(0,r.kt)("li",{parentName:"ul"},"Tweaked entity counting to improve performance"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the UI in the settings screen"),(0,r.kt)("li",{parentName:"ul"},"Changed the highlight slot image and adjusted layering to have it under the item")),(0,r.kt)("h2",{id:"fixes-from-bugs-in-beta"},(0,r.kt)("strong",{parentName:"h2"},"Fixes from Bugs in Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items are no longer deselected when the virtual keyboard closes"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash associated with storage"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when the host leaves the session while in split-screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when traveling through the End portal while the inventory window is open"),(0,r.kt)("li",{parentName:"ul"},"Players can again switch between skins from the same skin/mash-up pack"),(0,r.kt)("li",{parentName:"ul"},"Creepers should always explode now and won't stop exploding just because you hit them"),(0,r.kt)("li",{parentName:"ul"},"Can no longer attach blocks (like torches) to cocoa beans"),(0,r.kt)("li",{parentName:"ul"},"Fixed auto selecting after crafting to select the correct item"),(0,r.kt)("li",{parentName:"ul"},"Fixed some world conversion bugs"),(0,r.kt)("li",{parentName:"ul"},"No more crashes when attempting to use the skin picker with the Korean language selected"),(0,r.kt)("li",{parentName:"ul"},"Totem of Undying now protects you from fall damage"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Win 10 devices running an older Win 10 update"),(0,r.kt)("li",{parentName:"ul"},"Players are no longer transferred back to the play menu when attempting to connect via split-screen in a multiplayer game"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a player loaded a custom superflat world with the player located close to an Ocean Monument"),(0,r.kt)("li",{parentName:"ul"},"Players won't mine blocks anymore when using the touch-and-hold method to use a held item"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a player used an Ender pearl to teleport through an End gateway in a converted world"),(0,r.kt)("li",{parentName:"ul"},"Converted worlds with DLC applied again have the DLC applied when downloaded to another console on the same XBL account"),(0,r.kt)("li",{parentName:"ul"},"Splash text no longer pulses really quickly when cancelling out of a level load"),(0,r.kt)("li",{parentName:"ul"},"HUD opacity now changes to max for ~5 seconds and fades back to what you have set in options after changing hotbar slots"),(0,r.kt)("li",{parentName:"ul"},"Players should now get more correct messaging when blocked on connecting to a partner server"),(0,r.kt)("li",{parentName:"ul"},"Players can now reenter partner servers without having to restart the game (Android only)"),(0,r.kt)("li",{parentName:"ul"},"Drift has been reduced in creative flight mode and players won't drop out of flight by touching the ground."),(0,r.kt)("li",{parentName:"ul"},"Descending with the right joystick in creative mode is no longer super slow (Xbox only)"),(0,r.kt)("li",{parentName:"ul"},"No more blank profiles on Xbox Live profiles"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred after changing players"),(0,r.kt)("li",{parentName:"ul"},"Players again start with items in their inventory in creative mode"),(0,r.kt)("li",{parentName:"ul"},"If the hotbar is full and a player selects a creative item, it picks up the item and moves focus to the hotbar"),(0,r.kt)("li",{parentName:"ul"},"Fixed some chat bugs"),(0,r.kt)("li",{parentName:"ul"},"Off-hand items can be removed again"),(0,r.kt)("li",{parentName:"ul"},'Game no longer freezes on the ""saving world"" message if the player signs out of their profile while in a world')),(0,r.kt)("h2",{id:"fixes-from-bugs-in-retail"},(0,r.kt)("strong",{parentName:"h2"},"Fixes from Bugs in Retail:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cake now has a stack size of 64"),(0,r.kt)("li",{parentName:"ul"},"/execute\u2026detect now has the right position offsets")))}d.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}h.isMDXComponent=!0},32012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),i=n(47911);const l={sidebar_position:99999986,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9",tags:["Official","Changelog","Pocket","undefined"]},s="Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9",c={unversionedId:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/README",id:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/README",title:"Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9",slug:"/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/",permalink:"/en/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_9/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999986,frontMatter:{sidebar_position:99999986,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.3 Build 1",permalink:"/en/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.3_Build_1/"},next:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 8",permalink:"/en/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2_Build_8/"}},u={},d=[],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-xbox-onewin-10android-beta---12-build-9"},"Minecraft Xbox One/Win 10/Android Beta - 1.2 Build 9"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);