"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[8974,31164,93391],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),u=a(31682),c=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(g(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function _(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(_,(0,n.A)({},e,t)))}function v(e){const t=(0,f.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},5146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay",title:"gameplay",description:"Important note: If you are participating in the 0.16 Beta, you will not have access to MCPE/Win10 Realms while you are in the Beta. To get access back to your Realm, you will need to opt-out of the Beta and revert to the 0.15.6 build.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_0.16_build_5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Important note: If you are participating in the 0.16 Beta, you will not have access to MCPE/Win10 Realms while you are in the Beta. To get access back to your Realm, you will need to opt-out of the Beta and revert to the 0.15.6 build."),(0,r.yg)("p",null,"If you find any bugs, be sure to report them here! Click here\xa0to give us feedback because we need your thoughts on what you think about this update (especially the new UI)! As this Beta is for Android only, some of the features & fixes may not apply as they are for other versions but it will give something for those players to look for in future updates."),(0,r.yg)("p",null,"New Features:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Wither!"),(0,r.yg)("li",{parentName:"ul"},"Nether star"),(0,r.yg)("li",{parentName:"ul"},"Beacon")),(0,r.yg)("p",null,"Tweaks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tweaked the elder guardian's hitbox."),(0,r.yg)("li",{parentName:"ul"},"Modified natural spawn rates for mobs to where they should be (wither skeleton)."),(0,r.yg)("li",{parentName:"ul"},"Fixed performance issues (FPS drop)."),(0,r.yg)("li",{parentName:"ul"},"Lots of work on horses."),(0,r.yg)("li",{parentName:"ul"},"Tweaked some UI spacing issues."),(0,r.yg)("li",{parentName:"ul"},"Tweaked some issues with arrows."),(0,r.yg)("li",{parentName:"ul"},"More piston work!")),(0,r.yg)("p",null,"Bug Fixes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mob steps can be heard again."),(0,r.yg)("li",{parentName:"ul"},"Players can fill buckets while underwater, even in creative."),(0,r.yg)("li",{parentName:"ul"},"Fixed it so that potions of harming will kill mobs rather than just making them drop loot."),(0,r.yg)("li",{parentName:"ul"},"Replaced placeholder with the correct names of items."),(0,r.yg)("li",{parentName:"ul"},"Guardian & elder guardian attack animations are visible again."),(0,r.yg)("li",{parentName:"ul"},"Fixed it where mobs don't get knocked back by splash potions of healing."),(0,r.yg)("li",{parentName:"ul"},"Fixed attribute inconsistencies in mobs & fixed multiple attribute loading bugs (some mobs ran too fast, some mobs had incorrect health, some mobs didn't show the correct health in their health bar."),(0,r.yg)("li",{parentName:"ul"},"Fixed crash after joining a LAN game."),(0,r.yg)("li",{parentName:"ul"},"Fixed randomly breaking boats."),(0,r.yg)("li",{parentName:"ul"},"Monster spawner no longer crashes the game when difficulty is set to peaceful."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when a player threw a snowball, egg, or splash potions."),(0,r.yg)("li",{parentName:"ul"},"Zombie pigmen no longer hostile towards mobs."),(0,r.yg)("li",{parentName:"ul"},"No more diving when riding a horse, pig, or donkey. (That's dangerous!)"),(0,r.yg)("li",{parentName:"ul"},"Guardian laser beams change color now."),(0,r.yg)("li",{parentName:"ul"},"Markers on maps now correctly show direction when riding (animal, minecart, etc.)"),(0,r.yg)("li",{parentName:"ul"},"Gamerule settings now persist in saved games."),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where some mobs no longer dropped items."),(0,r.yg)("li",{parentName:"ul"},'Players again spawn in ""safe places"" during initial world generation.'),(0,r.yg)("li",{parentName:"ul"},'Players no longer float above beds while sleeping. (""There is no Dana, only Zuul."")'),(0,r.yg)("li",{parentName:"ul"},"Fixed crash when server spawns guardians & elder guardians."),(0,r.yg)("li",{parentName:"ul"},"You can hear the laser sound for guardians & elder guardians again."),(0,r.yg)("li",{parentName:"ul"},"Fixed items dropping from mobs incorrectly (not dropping for some, dropping for some that shouldn't have drops)"),(0,r.yg)("li",{parentName:"ul"},"Chat window fixed- automatically updates messages when they come in."),(0,r.yg)("li",{parentName:"ul"},"Two zombie villagers no longer spawn when a single villager is turning into a zombie."),(0,r.yg)("li",{parentName:"ul"},"Status effects no longer present after a player's death."),(0,r.yg)("li",{parentName:"ul"},"Nether mobs no longer lose fire resistance."),(0,r.yg)("li",{parentName:"ul"},"Fixed projectiles so they can be shot in directions, not just at targets."),(0,r.yg)("li",{parentName:"ul"},"Invisible players can no longer be seen and attacked by mobs."),(0,r.yg)("li",{parentName:"ul"},"Creeper again makes hissing ignition sound."),(0,r.yg)("li",{parentName:"ul"},"Iron golem now has an attack animation again."),(0,r.yg)("li",{parentName:"ul"},"Lightning strikes have sounds again."),(0,r.yg)("li",{parentName:"ul"},"Fireballs fixed: Blaze fireballs set blocks on fire & large fireballs are visible again."),(0,r.yg)("li",{parentName:"ul"},"Fixed assorted crashes when loading/importing older worlds."),(0,r.yg)("li",{parentName:"ul"},"Projectiles no longer hurt the player when reflected."),(0,r.yg)("li",{parentName:"ul"},"Iron golems will attack aggressive mobs again to defend villagers, themselves."),(0,r.yg)("li",{parentName:"ul"},"Fixed rare case of mobs spawning without heads."),(0,r.yg)("li",{parentName:"ul"},"Fixed slime spawning size issues."),(0,r.yg)("li",{parentName:"ul"},"Zombie pigmen are again spawning with golden swords."),(0,r.yg)("li",{parentName:"ul"},"Elder guardian now attacks the player."),(0,r.yg)("li",{parentName:"ul"},"Player no longer gets disconnected from the Realm after suspending & resuming the device/game."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when skeleton horse trap got triggered on peaceful.")))}g.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},56166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(5146);const i={sidebar_position:99999944,title:"MCPE Android Beta - 0.16 build 5",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE Android Beta - 0.16 build 5",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/README",title:"MCPE Android Beta - 0.16 build 5",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999944,frontMatter:{sidebar_position:99999944,title:"MCPE Android Beta - 0.16 build 5",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 0.16.2",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.3",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.3/"}},c={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpe-android-beta---016-build-5"},"MCPE Android Beta - 0.16 build 5"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);