"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[19536,64137,52867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=a(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},30856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.16/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.  "),(0,r.kt)("p",null,"New Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ocean Monuments"),(0,r.kt)("li",{parentName:"ul"},"Guardians and Elder Guardians"),(0,r.kt)("li",{parentName:"ul"},"Prismarine, dark prismarine & prismarine bricks"),(0,r.kt)("li",{parentName:"ul"},"Prismarine shard & prismarine crystal"),(0,r.kt)("li",{parentName:"ul"},"Sea lantern"),(0,r.kt)("li",{parentName:"ul"},"The Wither!"),(0,r.kt)("li",{parentName:"ul"},"Nether star"),(0,r.kt)("li",{parentName:"ul"},"Beacon"),(0,r.kt)("li",{parentName:"ul"},"Wet & dry sponges"),(0,r.kt)("li",{parentName:"ul"},"You can now use slash commands (which have auto-complete now) by enabling cheats for a world in the options screen (but this will disable Xbox Live achievements for that world even if you are in survival)"),(0,r.kt)("li",{parentName:"ul"},"Good news for left-handed players - you can now do custom key binding for keyboard!"),(0,r.kt)("li",{parentName:"ul"},"You can now search in the Creative inventory"),(0,r.kt)("li",{parentName:"ul"},"Add-on section for world settings"),(0,r.kt)("li",{parentName:"ul"},"Search added in creative inventory"),(0,r.kt)("li",{parentName:"ul"},"You can change game modes in Realms (if you do this in world settings, it will restart the realm but if you individually change a player's game mode through commands, it won't restart the realm)"),(0,r.kt)("li",{parentName:"ul"},"Ability to upload & download worlds in Realms"),(0,r.kt)("li",{parentName:"ul"},"Ability to promote players as operators in Realms")),(0,r.kt)("p",null,"Tweaks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lots of cool, new UI changes!\xa0"),(0,r.kt)("li",{parentName:"ul"},"Performance improvements"),(0,r.kt)("li",{parentName:"ul"},"Tweaks to various mob action/behavior triggers, including fixing creeper explosions"),(0,r.kt)("li",{parentName:"ul"},"Elder guardian de-buff visuals fixed (feedback from Android beta)"),(0,r.kt)("li",{parentName:"ul"},"Fishing rods & arrows will fire in more than just one direction"),(0,r.kt)("li",{parentName:"ul"},"Lots of tweaks to water textures to make underwater more fun"),(0,r.kt)("li",{parentName:"ul"},"Tweaks to Realms settings"),(0,r.kt)("li",{parentName:"ul"},"Visual tweaks to sun, moon & stars when rendering in VR immersive mode")),(0,r.kt)("p",null,"Bug Fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the following Beta changelogs: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/mc16beta1"},"https://aka.ms/mc16beta1")," & ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/mc16beta5"},"https://aka.ms/mc16beta5")),(0,r.kt)("li",{parentName:"ul"},"Item durability updates correctly now."),(0,r.kt)("li",{parentName:"ul"},"Language subpacks for jp","_","JP & zh","_","TW now load correctly."),(0,r.kt)("li",{parentName:"ul"},"Mobs now spawn in accumulated snow & so spawn correctly in snow biomes."),(0,r.kt)("li",{parentName:"ul"},"Endermen no longer continue to attack the player after the player respawns."),(0,r.kt)("li",{parentName:"ul"},"Charged creepers have the correct size of explosion."),(0,r.kt)("li",{parentName:"ul"},"Splash potions no longer being dispensed like eggs instead of thrown potions."),(0,r.kt)("li",{parentName:"ul"},"You can now open your inventory using touch while riding horses/donkeys/mules/pigs/boats."),(0,r.kt)("li",{parentName:"ul"},"Game no longer crashes when a filled cauldron is moved by a piston."),(0,r.kt)("li",{parentName:"ul"},"Import/export function now works with non UTF-8 characters in the file path."),(0,r.kt)("li",{parentName:"ul"},"Horses can be dismounted while sneaking."),(0,r.kt)("li",{parentName:"ul"},"You can now see the camera shake from damage."),(0,r.kt)("li",{parentName:"ul"},"Guardians now spawning correctly inside ocean monuments (fix from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"TNT minecarts can be detonated by more than just flint & steel."),(0,r.kt)("li",{parentName:"ul"},"Hurt sounds have returned!"),(0,r.kt)("li",{parentName:"ul"},"When you feed ocelots to make baby ocelots, they actually eat the food now (and the amount you feed them is deducted from your stack of food in your inventory)."),(0,r.kt)("li",{parentName:"ul"},"Clouds no longer flicker when fog updates."),(0,r.kt)("li",{parentName:"ul"},"Behavior of activator rails corrected- no longer reversed & interact correctly with hopper minecarts."),(0,r.kt)("li",{parentName:"ul"},"If your computer is joined to a domain, you can now log in with a different account (for those of us who play Minecraft at work!)"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash on player spawn."),(0,r.kt)("li",{parentName:"ul"},"Fixed consistency of tipped arrows & healing."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Windows Phone (MCPE only)."),(0,r.kt)("li",{parentName:"ul"},"Shears fixed so you can use them on sheep & mooshroom even when they aren't at full durability."),(0,r.kt)("li",{parentName:"ul"},"Fixed untamed horses so you can't accidentally saddle them & lose the saddle."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash with item frames and compass/clocks."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when selecting a custom skin."),(0,r.kt)("li",{parentName:"ul"},'""Saddle up"" achievement should work now.'),(0,r.kt)("li",{parentName:"ul"},"Monster spawners no longer will occasionally spawn mobs in areas that are well-lit (and thus shouldn't be spawning hostile mobs)."),(0,r.kt)("li",{parentName:"ul"},"Wolves now attack other mobs with the appropriate frequency."),(0,r.kt)("li",{parentName:"ul"},"Wither skeletons inflict Wither I effect"),(0,r.kt)("li",{parentName:"ul"},"Removed the restrict distance from leads but functionality is maintained."),(0,r.kt)("li",{parentName:"ul"},"Fixed bugs with fireballs and large fireballs."),(0,r.kt)("li",{parentName:"ul"},"Beacon effects no longer disappear when re-entering a world (feedback from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a player accepted a Realms invite while playing in a world."),(0,r.kt)("li",{parentName:"ul"},"TNT Minecart's fuse timing fixed."),(0,r.kt)("li",{parentName:"ul"},"Fixed Wither's death animation (feedback from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"Fixed issue of sheep not always retaining their colors on spawn."),(0,r.kt)("li",{parentName:"ul"},'Fixed ""Archer"" achievement.'),(0,r.kt)("li",{parentName:"ul"},"Creepers can no longer explode while dying."),(0,r.kt)("li",{parentName:"ul"},"Walking up stairs no longer causes suffocation (but you will still hit your head)."),(0,r.kt)("li",{parentName:"ul"},"Wet sponges and bricks now show up on the furnace UI (MCPE only)."),(0,r.kt)("li",{parentName:"ul"},"Fixed experience accumulation bug- can't disconnect and reconnect from a world to get back your spent experience point levels."),(0,r.kt)("li",{parentName:"ul"},"Elder guardian mining fatigue sound plays (feedback from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"A player's mining sound is now only audible to the player."),(0,r.kt)("li",{parentName:"ul"},"Guardian beam attack sound at appropriate volume now (feedback from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"Strays again spawn in ice biomes."),(0,r.kt)("li",{parentName:"ul"},"Iron Golem damaged fixed to the appropriate amount."),(0,r.kt)("li",{parentName:"ul"},"Saddled pigs now drop the saddle when killed."),(0,r.kt)("li",{parentName:"ul"},"Dropped items no longer damage farmland (feedback from Android beta)."),(0,r.kt)("li",{parentName:"ul"},"Inventory no longer lost when language is changed to or from Japanese or Traditional Chinese.")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},30710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(30856);const i={sidebar_position:99999950,title:"MCPE/WIN 10/Gear VR - 0.16",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE/WIN 10/Gear VR - 0.16",u={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/README",title:"MCPE/WIN 10/Gear VR - 0.16",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999950,frontMatter:{sidebar_position:99999950,title:"MCPE/WIN 10/Gear VR - 0.16",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 0.15.10",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.10/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0/"}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpewin-10gear-vr---016"},"MCPE/WIN 10/Gear VR - 0.16"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);