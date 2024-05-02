"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[58779,64137,75236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},93714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.  "),(0,r.kt)("p",null,"New Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cartoon texture pack!")),(0,r.kt)("p",null,"Tweaks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tweaked the Elder Guardian debuff attack visuals."),(0,r.kt)("li",{parentName:"ul"},"Fixed the black tearing effect along the waterline when a submerged player tilts. (VR only)"),(0,r.kt)("li",{parentName:"ul"},"Various minor fixes to mobs whose attributes weren't consistent with previous versions."),(0,r.kt)("li",{parentName:"ul"},"Tweaked creeper explosion/detonation so they no longer blow up 5 or more blocks away from the player & is now consistent with other"),(0,r.kt)("li",{parentName:"ul"},"versions."),(0,r.kt)("li",{parentName:"ul"},"Various tweaks to skins to prevent them from clipping through armor.")),(0,r.kt)("p",null,"Bug Fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can again open your inventory while using touch while riding a tamed horse/donkey/mule."),(0,r.kt)("li",{parentName:"ul"},"You can again open your inventory while riding a pig/minecart/boat."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a cauldron was moved by a piston."),(0,r.kt)("li",{parentName:"ul"},"Fixed import/export for worlds with non UTF-8 characters in the path."),(0,r.kt)("li",{parentName:"ul"},"Horses can be dismounted while sneaking again."),(0,r.kt)("li",{parentName:"ul"},"Clients can now see camera shake from damage."),(0,r.kt)("li",{parentName:"ul"},"Guardians again spawn inside Ocean Monuments."),(0,r.kt)("li",{parentName:"ul"},"Fishing rods no longer only fire in one direction."),(0,r.kt)("li",{parentName:"ul"},"Add-ons no longer appear twice when editing a world that already has that Add-on applied."),(0,r.kt)("li",{parentName:"ul"},"Depended upon resource packs are now saved in the world","_","resource","_","packs.json file."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when a player used the /summon command."),(0,r.kt)("li",{parentName:"ul"},"Minecarts with TNT can be detonated by appropriate detonators other than just flint & steel."),(0,r.kt)("li",{parentName:"ul"},"Hurt sounds are again played when hurt events occur."),(0,r.kt)("li",{parentName:"ul"},"Food items used when feeding ocelots for breeding."),(0,r.kt)("li",{parentName:"ul"},"Clouds no longer flicker when fog updates."),(0,r.kt)("li",{parentName:"ul"},"Sun, moon & stars draw in front of terrain in immersive VR. (VR only)."),(0,r.kt)("li",{parentName:"ul"},"The behavior of activator rails is no longer reversed."),(0,r.kt)("li",{parentName:"ul"},"A creeper's fuse time no longer resets every time flint & steel is used on it."),(0,r.kt)("li",{parentName:"ul"},"Arrows are no longer flipping directions visually when shot from a bow. The similar issue with fishing rods should also be fixed."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when you respawn."),(0,r.kt)("li",{parentName:"ul"},"Game no longer fails to launch when there is an active global texture pack."),(0,r.kt)("li",{parentName:"ul"},'Commands beginning with ""w"" now appear in the auto-complete list when you type ""w""'),(0,r.kt)("li",{parentName:"ul"},"You can now rename a Wither with a nametag (and it no longer crashes your game)."),(0,r.kt)("li",{parentName:"ul"},"The Wither's health bar no longer disappears when your game unloads and then reloads a chunk where a Wither is."),(0,r.kt)("li",{parentName:"ul"},"Enchanted bows again have their extra bonuses."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Windows Phone. (Windows Phone only)"),(0,r.kt)("li",{parentName:"ul"},"Hopper minecarts in older saved game files should work again."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash with item frames & compasses/clocks."),(0,r.kt)("li",{parentName:"ul"},"Fixed texture changes on cats, zombie villagers, villagers when loading a world created before 0.16."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash from invalid pack","_","manifest.json files in an Add-on folder."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when players closed settings in a game with resource packs active."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when you attempt to select a custom skin."),(0,r.kt)("li",{parentName:"ul"},'""Saddle up"" achievement should work again.'),(0,r.kt)("li",{parentName:"ul"},"Mob spawners should no longer be spawning mobs in properly lit areas."),(0,r.kt)("li",{parentName:"ul"},"Wolves should again attack rabbits, skeletons & sheep more frequently."),(0,r.kt)("li",{parentName:"ul"},"You can again open a crafting table multiple times on mobile (MCPE only)."),(0,r.kt)("li",{parentName:"ul"},"Horses no longer lose their equipment when importing a 0.15.9 world."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash caused by fire arrows.")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},10103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(93714);const i={sidebar_position:99999945,title:"MCPE/WIN 10/Gear VR - 0.16.2",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE/WIN 10/Gear VR - 0.16.2",u={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/README",title:"MCPE/WIN 10/Gear VR - 0.16.2",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.2/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999945,frontMatter:{sidebar_position:99999945,title:"MCPE/WIN 10/Gear VR - 0.16.2",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 1.0.2",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.2/"},next:{title:"MCPE Android Beta - 0.16 build 5",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_0.16_build_5/"}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpewin-10gear-vr---0162"},"MCPE/WIN 10/Gear VR - 0.16.2"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);