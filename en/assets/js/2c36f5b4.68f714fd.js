"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[58384,64137,64501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},76998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.5/0/4/gameplay",id:"changelog_source/preview/1.5/0/4/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.5/0/4/gameplay.mdx",sourceDirName:"changelog_source/preview/1.5/0/4",slug:"/changelog_source/preview/1.5/0/4/gameplay",permalink:"/en/docs/changelog_source/preview/1.5/0/4/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.5/0/4/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Xbox One and Windows 10 players can opt in and out of the beta from the Xbox Insider Hub app. Android players can opt in and out from the Minecraft page of the Google Play Store"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all changes and fixes from the beta to preserve stability and may slip to a later release"),(0,r.kt)("li",{parentName:"ul"},"Report bugs to\xa0",(0,r.kt)("a",{parentName:"li",href:"http://bugs.mojang.com/",title:"Link: http://bugs.mojang.com/"},"bugs.mojang.com"),"\xa0and all feedback to\xa0",(0,r.kt)("a",{parentName:"li",href:"http://feedback.minecraft.net/",title:"Link: http://feedback.minecraft.net/"},"feedback.minecraft.net"))),(0,r.kt)("p",null,"This beta features a whole ocean of new features from the upcoming Update Aquatic! These features are work in progress and more are on the way but we wanted to take the opportunity to get early feedback from players. If you find any bugs, please report them on bugs.mojang.com and post all thoughts and suggestions to feedback.minecraft.net. Thanks for playing!\xa0  "),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bubble Columns (Work in progress)"),(0,r.kt)("li",{parentName:"ul"},"Sea Turtles"),(0,r.kt)("li",{parentName:"ul"},"Sea Turtle Eggs"),(0,r.kt)("li",{parentName:"ul"},"Scute and Turtle Shell items"),(0,r.kt)("li",{parentName:"ul"},"Potion of the Turtle Master")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A fresh, new menu background for Update Aquatic"),(0,r.kt)("li",{parentName:"ul"},"Coral blocks will no longer die as long as one side is touching water"),(0,r.kt)("li",{parentName:"ul"},"Updated the texture of the top of Kelp"),(0,r.kt)("li",{parentName:"ul"},"Updated the texture of Cooked Fish"),(0,r.kt)("li",{parentName:"ul"},"Default Field of View has been reduced from 70 to 60 and can be adjusted in Video Settings")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several of that top crashes that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when a Piston pushed a block"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when too many Sea Pickles filled an area"),(0,r.kt)("li",{parentName:"ul"},"Increased performance when viewing particles from the Ender Dragon's attack and lingering potions"),(0,r.kt)("li",{parentName:"ul"},"Guardians and Elder Guardians are no longer stuck as benthic creatures"),(0,r.kt)("li",{parentName:"ul"},"Fixed Conduit Power not affecting players that were swimming through a 1x1 space and in range of a Conduit"),(0,r.kt)("li",{parentName:"ul"},"Cached Data once again appears on the Storage screen"),(0,r.kt)("li",{parentName:"ul"},"Players will no longer inherit the host's spawn, inventory, and location when rejoining a world with a Resource Pack removed"),(0,r.kt)("li",{parentName:"ul"},"Tropical Fish textures now appear properly on Android devices"),(0,r.kt)("li",{parentName:"ul"},"The coordinates of Buried Treasure are now accurate when using the '/locate' command"),(0,r.kt)("li",{parentName:"ul"},"Pressing down on the controller no longer loses focus on the chat field"),(0,r.kt)("li",{parentName:"ul"},"Fixed water flow being inconsistent and suspended around caves and ravines"),(0,r.kt)("li",{parentName:"ul"},"Beacons and Conduits now have sound effects"),(0,r.kt)("li",{parentName:"ul"},"Command Blocks can now be modified when set to 'Repeat' and 'Always Active'"),(0,r.kt)("li",{parentName:"ul"},"Lava falling onto a water block with Seagrass or Kelp from will now become Stone"),(0,r.kt)("li",{parentName:"ul"},"Redstone, Torches, and Redstone Torches can no longer be placed on Seagrass underwater"),(0,r.kt)("li",{parentName:"ul"},"Fixed Tridents damaging multiple mobs in a single throw"),(0,r.kt)("li",{parentName:"ul"},"Passengers in boats will now take damage when falling from a high place"),(0,r.kt)("li",{parentName:"ul"},"It is now easier to attack mobs while swimming"),(0,r.kt)("li",{parentName:"ul"},"Fixed the cracking animation not appearing when mining blocks through the water surface"),(0,r.kt)("li",{parentName:"ul"},"Leather Horse Armor no longer loses its dyed color after world conversion"),(0,r.kt)("li",{parentName:"ul"},"Mutated Savanna Plateau and Mutated Mesa Plateau biomes now convert properly from old worlds"),(0,r.kt)("li",{parentName:"ul"},"Fixed water coloring in mutated biomes"),(0,r.kt)("li",{parentName:"ul"},"Fixed the controller not being detected when resuming the game from suspended state after changing the profile"),(0,r.kt)("li",{parentName:"ul"},"Map items now have the proper name displayed in chat for players when using commands"),(0,r.kt)("li",{parentName:"ul"},"Fixed some chunk rendering that caused players to see through the ground at certain angles"),(0,r.kt)("li",{parentName:"ul"},"Minimized animation delays with large stacks of falling blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed experience orbs not always being picked up by players"),(0,r.kt)("li",{parentName:"ul"},"Fixed Drowned spinning in place"),(0,r.kt)("li",{parentName:"ul"},"Zombies that transform into Drowned will now drop items when they die"),(0,r.kt)("li",{parentName:"ul"},"Dolphins and Cod no longer get the jitters when swimming in groups"),(0,r.kt)("li",{parentName:"ul"},"Silverfish can once again enter Stone blocks"),(0,r.kt)("li",{parentName:"ul"},"Arrows fired by Skeletons and Strays can now damage the Wither"),(0,r.kt)("li",{parentName:"ul"},"The paper doll no longer sticks out of the frame on the inventory screen while swimming"),(0,r.kt)("li",{parentName:"ul"},"Tridents fired from a Dispenser no longer have the exact same trajectory and will now lose durability"),(0,r.kt)("li",{parentName:"ul"},"Fixed textures on low-end devices when the Education toggle was enabled"),(0,r.kt)("li",{parentName:"ul"},"Fixed issues with Zombie pathfinding and not attacking players"),(0,r.kt)("li",{parentName:"ul"},"Pistons once again have the proper texture underneath them when placed horizontally"),(0,r.kt)("li",{parentName:"ul"},"TNT can no long deal damage\xa0or destroy blocks underwater when placed on non-full blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed the hitbox of Coral Fans"),(0,r.kt)("li",{parentName:"ul"},'The "Manage who can send you invites" button in Profile settings now points to the proper location'),(0,r.kt)("li",{parentName:"ul"},"Fixed two Elder Guardians sometimes spawning in each chamber of an Ocean Monument"),(0,r.kt)("li",{parentName:"ul"},"Fixed spelling errors for Anemone and Red Lipped Blenny tropical fish"),(0,r.kt)("li",{parentName:"ul"},"The 'Controls' section of How to Play now updates after remapping the Sneak button")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},23593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(76998);const i={sidebar_position:99999995,title:"1.5.0.4",tags:["Official","Changelog","Preview","1.5"]},s="Minecraft Beta - 1.5.0.4 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.5/0/4",id:"official_changelog/preview/1.5/0/4",title:"1.5.0.4",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.5/0/4.mdx",sourceDirName:"official_changelog/preview/1.5/0",slug:"/official_changelog/preview/1.5/0/4",permalink:"/en/docs/official_changelog/preview/1.5/0/4",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.5/0/4.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.5",permalink:"/en/docs/tags/1-5"}],version:"current",sidebarPosition:99999995,frontMatter:{sidebar_position:99999995,title:"1.5.0.4",tags:["Official","Changelog","Preview","1.5"]},sidebar:"changelogSidebar",previous:{title:"1.5.0.7",permalink:"/en/docs/official_changelog/preview/1.5/0/7"},next:{title:"1.5.0.1",permalink:"/en/docs/official_changelog/preview/1.5/0/1"}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1504-xbox-onewindows-10android"},"Minecraft Beta - 1.5.0.4 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);