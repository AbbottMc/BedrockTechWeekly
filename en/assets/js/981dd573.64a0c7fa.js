"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35384,31164,71905],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==i&&(g(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function v(e){const t=(0,y.A)();return r.createElement(_,(0,a.A)({key:String(t)},e))}},7985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_Build_5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2}],u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.yg)("h2",{id:"tweaks"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Text in buttons in the Realms update screen should now be properly aligned.")),(0,r.yg)("p",null,"\xa0 ",(0,r.yg)("strong",{parentName:"p"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Exiting the crafting grid will not drop items on the ground unless the inventory is full."),(0,r.yg)("li",{parentName:"ul"},"Mobs no longer get stuck in corners of fences."),(0,r.yg)("li",{parentName:"ul"},"Slimes & Magma Cubes again have the correct movement."),(0,r.yg)("li",{parentName:"ul"},"The /say command in command blocks no longer gives an incorrect message."),(0,r.yg)("li",{parentName:"ul"},"Ender dragon movement is no longer really jittery when in flight."),(0,r.yg)("li",{parentName:"ul"},"Shulker boxes drop one shulker box when mined with a silk touch pickaxe."),(0,r.yg)("li",{parentName:"ul"},"All mobs should now be affected by the speed effect."),(0,r.yg)("li",{parentName:"ul"},"Name auto-complete in commands works again."),(0,r.yg)("li",{parentName:"ul"},'""Diamonds to You!"" achievement again unlocks in multiplayer.'),(0,r.yg)("li",{parentName:"ul"},"Resource Pack purchase screen download progress bars now appear after purchasing DLC."),(0,r.yg)("li",{parentName:"ul"},"Anvils no longer drop as items when they fall on torches - and they stack now, too."),(0,r.yg)("li",{parentName:"ul"},"Multiple coin offers are no longer highlighted at once when navigating the Marketplace with a controller."),(0,r.yg)("li",{parentName:"ul"},"Cave spider spawners now generate more often in abandoned mineshafts."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when chests & cauldrons collided with each other."),(0,r.yg)("li",{parentName:"ul"},"Arrows no longer stutter when fired while riding an animal."),(0,r.yg)("li",{parentName:"ul"},"Increased the speed and range of the Evoker's Fang attack."),(0,r.yg)("li",{parentName:"ul"},"Template worlds will once again appear on the create world screen."),(0,r.yg)("li",{parentName:"ul"},"Rideable mobs can only be ridden when equipped with a saddle."),(0,r.yg)("li",{parentName:"ul"},"Particles traveling from bookshelves to enchantment tables will now travel over blocks."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when attempting to type more than four lines on a sign."),(0,r.yg)("li",{parentName:"ul"},"The 'Boost' button is\xa0now visible when riding a Pig with Carrot on a Stick in hand. (Pocket Edition only)"),(0,r.yg)("li",{parentName:"ul"},"Chest on donkey/mule can now\xa0be accessed with a controller in\xa0Pocket UI."),(0,r.yg)("li",{parentName:"ul"},"Fixed texture orientation on command blocks."),(0,r.yg)("li",{parentName:"ul"},'Fixed ""Broadcast to LAN"" not toggling off.'),(0,r.yg)("li",{parentName:"ul"},"Horses' heads no longer clip through player's face when moving up single blocks."),(0,r.yg)("li",{parentName:"ul"},"Redstone torches now have sound when burning out."),(0,r.yg)("li",{parentName:"ul"},"The on-screen chat keyboard can now be re-opened."),(0,r.yg)("li",{parentName:"ul"},"Repeaters now properly handle delay-based pulse generation."),(0,r.yg)("li",{parentName:"ul"},"Various layout adjustments to the Marketplace screen."),(0,r.yg)("li",{parentName:"ul"},"Pressing 'Enter' on the keyboard will now move to the next line when making a sign (Android only)."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when trying to open a chest that was pushed or pulled by a sticky."),(0,r.yg)("li",{parentName:"ul"},"Fixed texture colors of fences and fence gates."),(0,r.yg)("li",{parentName:"ul"},"Fixed 0xfe RakNet wrapper packet compression."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when standing in an End Portal as it is completed."),(0,r.yg)("li",{parentName:"ul"},"Lava will no longer flow towards drops it cannot reach."),(0,r.yg)("li",{parentName:"ul"},"Once again have fixed mobs going out of fences when reloading a world."),(0,r.yg)("li",{parentName:"ul"},'Fixed the ""Leave Boat"" button missing from the screen.'),(0,r.yg)("li",{parentName:"ul"},"Minecarts will no longer jump off downward-sloping rails."),(0,r.yg)("li",{parentName:"ul"},"Fixed the height of shulker boxes."),(0,r.yg)("li",{parentName:"ul"},"Fixed Totem of Undying lighting issues."),(0,r.yg)("li",{parentName:"ul"},"Milk buckets will no longer disappear from a full hotbar after milking a cow."),(0,r.yg)("li",{parentName:"ul"},"Fixed inventory and player icons for Exploration Maps."),(0,r.yg)("li",{parentName:"ul"},"/Replaceitem will now work with the off-hand slot."),(0,r.yg)("li",{parentName:"ul"},"You can again craft dispensers using the Pocket UI."),(0,r.yg)("li",{parentName:"ul"},"Vexes will still have their swords when you reload a world."),(0,r.yg)("li",{parentName:"ul"},"Fixed melon slices so they don't turn into more melons\u2026 oops! #tommobrokeit #tommofixedit"),(0,r.yg)("li",{parentName:"ul"},"Ender crystal explosion is now data driven for added world security."),(0,r.yg)("li",{parentName:"ul"},"Copying a block now places the copied block in the empty item slot when holding an item in hand and having an empty slot in the hotbar."),(0,r.yg)("li",{parentName:"ul"},'Fixed a crash when clicking on the ""Sign in for Free"" button while trying to download game music.'),(0,r.yg)("li",{parentName:"ul"},"Download of Redstone Mansion now updates the action button properly."),(0,r.yg)("li",{parentName:"ul"},"Panoramas now load properly."),(0,r.yg)("li",{parentName:"ul"},"All players can now ride mounts when it is on a lead, not just the owners."),(0,r.yg)("li",{parentName:"ul"},"/locate village command now returns coordinates of the nearest village."),(0,r.yg)("li",{parentName:"ul"},"All Resource packs should now be displayed in the Global Resource list, both in the settings menu & create world menu."),(0,r.yg)("li",{parentName:"ul"},"Players are again able to push mobs into minecarts & boats."),(0,r.yg)("li",{parentName:"ul"},"Blazes should no longer be able to one-hit kill players with a small fireball. (We hope this fixed it!)"),(0,r.yg)("li",{parentName:"ul"},"/fill command changes should now be saved.")))}g.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},73633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(34922),l=n(7985);const i={sidebar_position:99999971,title:"MCPE Android Beta - 1.1 Build 5",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE Android Beta - 1.1 Build 5",c={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/README",title:"MCPE Android Beta - 1.1 Build 5",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_5/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999971,frontMatter:{sidebar_position:99999971,title:"MCPE Android Beta - 1.1 Build 5",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.1 build 6",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_6/"},next:{title:"MCPE Android Beta - 1.1 Build 4",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_Build_4/"}},u={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpe-android-beta---11-build-5"},"MCPE Android Beta - 1.1 Build 5"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);