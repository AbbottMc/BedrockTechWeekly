"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[15017,64137,34185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(_,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},66630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay",title:"gameplay",description:"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds."),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Villager Trading!"),(0,r.kt)("li",{parentName:"ul"},"New Add-On format. All of your old Add-Ons will automatically update. You may see warnings on those Add-Ons but they will be fully functional")),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The models for the Shulker and Ender Dragon can now be edited using Add-Ons"),(0,r.kt)("li",{parentName:"ul"},"Husks are now a little bit taller than Zombies"),(0,r.kt)("li",{parentName:"ul"},"Baby Villagers now have adorable, larger-sized heads")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed chunks that can't be refreshed completely when the client receives new chunk data"),(0,r.kt)("li",{parentName:"ul"},"Fixed dying twice when hit with two different sources of damage\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed medium/large-sized Slimes and Magma Cubes not having jumping or landing sounds\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed infinitely burning fires that would cause gradual slowdown and spread more often"),(0,r.kt)("li",{parentName:"ul"},"Fixed the hitbox on Stone and Wooden Buttons so they can no longer be stepped on by players and other mobs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Donkeys once again spawn in the Plains biome"),(0,r.kt)("li",{parentName:"ul"},"Chiseled and Smooth sandstone now have the correct bottom textures"),(0,r.kt)("li",{parentName:"ul"},"Zombie Villagers of different variants now keep their professions when importing a world from 0.15.9 or earlier"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where players could not sleep through the night if there were players in another dimension"),(0,r.kt)("li",{parentName:"ul"},"Destroying a painting no longer destroys the block behind it"),(0,r.kt)("li",{parentName:"ul"},"Mobs should really no longer walk in circles if they spawn or walk on a block made from two slabs"),(0,r.kt)("li",{parentName:"ul"},"Lava will no longer leak out of a Blacksmith's house"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that was caused by Ocean Monuments and Nether Bridges generating\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a player changes dimension and there are other nearby players"),(0,r.kt)("li",{parentName:"ul"},"Fixed the positioning of mobs that are sitting on other mobs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Ridden mobs (ie. Spider Jockeys) can now be pulled into Minecarts"),(0,r.kt)("li",{parentName:"ul"},"Spider Jockeys will now properly spawn with Strays or Wither Skeletons if the conditions are correct"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Villagers would no longer breed"),(0,r.kt)("li",{parentName:"ul"},"Items that must be placed on blocks (ie. Rails and Torches) can now be properly placed on top Slabs"),(0,r.kt)("li",{parentName:"ul"},"The Nether Star can no longer be destroyed by explosions"),(0,r.kt)("li",{parentName:"ul"},"Villagers will now run slower when attacked"),(0,r.kt)("li",{parentName:"ul"},"Fixed the message that appears after flying into a wall with Elytra"),(0,r.kt)("li",{parentName:"ul"},"Fixed several texture issues in the Candy Texture Pack"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when importing a file into the game (iOS only)"),(0,r.kt)("li",{parentName:"ul"},"Players who receive more than one stack with the /give command now see the correct number of items received in the chat"),(0,r.kt)("li",{parentName:"ul"},"Fixed mobs going out of fences when reloading a world"),(0,r.kt)("li",{parentName:"ul"},"Capes will no longer appear when wearing Elytra\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed rotated item texture on dropped Anvils"),(0,r.kt)("li",{parentName:"ul"},"Villagers spawned using the /summon command will no longer just spawn as Farmers"),(0,r.kt)("li",{parentName:"ul"},"Shulkers placed upside down will no longer appear unattached from the block they're placed on"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when exiting a game session"),(0,r.kt)("li",{parentName:"ul"},"Arrows will no longer turn black after hitting opaque blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed crashes when launching a world with Behavior Packs and Resource Packs that had errors in the pack manifests"),(0,r.kt)("li",{parentName:"ul"},"Fixed the End Gateway in The End regenerating repeatedly\xa0"),(0,r.kt)("li",{parentName:"ul"},'""The End\u2026 Again\u2026"" achievement will now unlock properly\xa0'),(0,r.kt)("li",{parentName:"ul"},"Villagers no longer wander too far away from their Village")))}d.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},29630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(66630);const i={sidebar_position:99999960,title:"MCPE Android Beta - 1.0.4 Build 1",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE Android Beta - 1.0.4 Build 1",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/README",title:"MCPE Android Beta - 1.0.4 Build 1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999960,frontMatter:{sidebar_position:99999960,title:"MCPE Android Beta - 1.0.4 Build 1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.0.4 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0.4_Build_2/"},next:{title:"MCPE Android Beta - 1.0 build 6",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_6/"}},c={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpe-android-beta---104-build-1"},"MCPE Android Beta - 1.0.4 Build 1"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);