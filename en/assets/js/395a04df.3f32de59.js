"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82980,64137,87432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=d({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(72389);const f="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},83985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.9/0/2/gameplay",id:"changelog_source/preview/1.9/0/2/gameplay",title:"gameplay",description:"28 November 2018",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.9/0/2/gameplay.mdx",sourceDirName:"changelog_source/preview/1.9/0/2",slug:"/changelog_source/preview/1.9/0/2/gameplay",permalink:"/en/docs/changelog_source/preview/1.9/0/2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.9/0/2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>28 November 2018</strong>",id:"28-november-2018",level:2},{value:"<strong>Experimental Gameplay:</strong> (Only available when Experimental Gameplay is enabled in world settings)",id:"experimental-gameplay-only-available-when-experimental-gameplay-is-enabled-in-world-settings",level:3},{value:"<strong>New Features:</strong>",id:"new-features",level:3},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"28-november-2018"},(0,r.kt)("strong",{parentName:"h2"},"28 November 2018")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.kt)("h3",{id:"experimental-gameplay-only-available-when-experimental-gameplay-is-enabled-in-world-settings"},(0,r.kt)("strong",{parentName:"h3"},"Experimental Gameplay:")," (Only available when Experimental Gameplay is enabled in world settings)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added new blocks:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cartography Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fletching Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Grindstone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Barrel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smithing Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smoker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blast Furnace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lantern"))),(0,r.kt)("h3",{id:"new-features"},(0,r.kt)("strong",{parentName:"h3"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cauldrons can now be used to hold Lava\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added tags - custom tags can be applied to entities and players to create more flexible selector groupings\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added "has',"_",'tag" filter in components to allow checks to see if an entity has a specified tag\xa0'),(0,r.kt)("li",{parentName:"ul"},"Autocomplete can be used for Tags\xa0"),(0,r.kt)("li",{parentName:"ul"},"The number of commands run through functions can be limited with a new gamerule (default 10k) to limit performance issues\xa0"),(0,r.kt)("li",{parentName:"ul"},"Functions can now be run every tick creating an update loop\xa0"),(0,r.kt)("li",{parentName:"ul"},"New feedback button in pause menu - shows links to the Minecraft feedback site, MoJira bug tracker, and Mojang support\xa0"),(0,r.kt)("li",{parentName:"ul"},"How to Play button is now visible from the in-game settings menu\xa0")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed default sign text colour back to black\xa0"),(0,r.kt)("li",{parentName:"ul"},"Sign variants are now grouped in their own inventory category\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can now join and play games with a minor version mismatch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38945"},"MCPE-38945)"))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shulker boxes in item frames no longer cause the game to crash\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with wrong items showing in partnered server stores\xa0"),(0,r.kt)("li",{parentName:"ul"},"Corrected the head size of baby zombies\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when pistons pushed blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could happen when suspending and resuming the game"),(0,r.kt)("li",{parentName:"ul"},"Improved the error messages that previously stated the player didn't have a licence for the game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the positioning of the snow golem's arms\xa0"),(0,r.kt)("li",{parentName:"ul"},"Pandas now stop eating when set on fire\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when resuming the game on Android\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed mouse selection issues when clicking items or text boxes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39283"},"MCPE-39283"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with end gateway portals which could generate too closely, preventing travel back to the main island"),(0,r.kt)("li",{parentName:"ul"},"Slimes will once again spawn in slime chunks as expected (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38388"},"MCPE-38388"),")"),(0,r.kt)("li",{parentName:"ul"},"Endermen now make the scream sound when angered (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/projects/MCPE/issues/MCPE-26719?filter=allopenissues"},"MCPE-26719"),")"),(0,r.kt)("li",{parentName:"ul"},"Phantoms now drop membranes correctly if killed with a fire aspect sword (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38493"},"MCPE-38493"),")"),(0,r.kt)("li",{parentName:"ul"},"Auto-jump now works when trying to walk through scaffolding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38342"},"MCPE-38342"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding can now be placed on glass\xa0"),(0,r.kt)("li",{parentName:"ul"},"More blocks can be placed on scaffolding including mob heads and flower pots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38942"},"MCPE-38942"),")"),(0,r.kt)("li",{parentName:"ul"},"Horizontal flowing water will no longer turn into bubble columns over soul sand\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when removing Gear VR headset during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occasionally happens when resuming the game"),(0,r.kt)("li",{parentName:"ul"},"Fixed leg geometry for one-legged characters in various skin packs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when quickly signing in and out of Xbox Live\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dragons breath can now be quickly collected reliably in multiplayer games (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37815"},"MCPE-37815"),")"),(0,r.kt)("li",{parentName:"ul"},"Pandas now panic when set on fire\xa0"),(0,r.kt)("li",{parentName:"ul"},"Animation and sounds can now be heard and seen when pillagers charge their crossbows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39095"},"MCPE-39095"),")"),(0,r.kt)("li",{parentName:"ul"},"Cobblestone stairs are generated in Jungle Temples and Villages instead of stone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39102"},"MCPE-39102"),")"),(0,r.kt)("li",{parentName:"ul"},"Lit furnaces now show correctly when copied using Ctrl + Pickblock\xa0"),(0,r.kt)("li",{parentName:"ul"},"Custom modal forms now support two lines again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38705"},"MCPE-38705"),")"),(0,r.kt)("li",{parentName:"ul"},'Special characters now display correctly when using the "/say" command'),(0,r.kt)("li",{parentName:"ul"},"Touch controls now work correctly with scaffolding when using the 'swap jump and sneak' setting (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38063"},"MCPE-38063"),")"),(0,r.kt)("li",{parentName:"ul"},"Particles produced by witches are now purple rather than black (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-30234"},"MCPE-30234"),")"),(0,r.kt)("li",{parentName:"ul"},'Slabs are no longer labelled "half slabs" in the creative inventory (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32542"},"MCPE-32542"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding textures no longer z-fight with leaves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38375"},"MCPE-38375"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs in boats no longer shake when trying to turn to look at the player\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bubble columns no longer extend up above the surface of the water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39085"},"MCPE-39085"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with items being repeatedly dropped from the hotbar on touchscreen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-15010"},"MCPE-15010"),")"),(0,r.kt)("li",{parentName:"ul"},"Breaking smooth stone no longer drops cobblestone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39164"},"MCPE-39164"),")"),(0,r.kt)("li",{parentName:"ul"},"Doors no longer drop as two items when broken (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39165"},"MCPE-39165"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the scaling of the Mojang splash screen when resuming a split screen game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Ghast projectile firing animation"),(0,r.kt)("li",{parentName:"ul"},"Commands from command blocks no longer extend to other dimensions (This fix won't affect existing command blocks) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33892"},"MCPE-33892"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the game could become unresponsive after being disconnected from a multiplayer game"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash issue on Xbox One\xa0"),(0,r.kt)("li",{parentName:"ul"},"Worlds no longer become stuck in offline mode after toggling the multiplayer option (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39194"},"MCPE-39194"),")"),(0,r.kt)("li",{parentName:"ul"},"Slabs can be correctly placed on top of each other again after reloading the world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39067"},"MCPE-39067"),")"),(0,r.kt)("li",{parentName:"ul"},"Changing game mode and reloading a world no longer removes resource packs"),(0,r.kt)("li",{parentName:"ul"},"Fixed the arm position for mobs in the Mutant Battle Arena marketplace pack")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}g.isMDXComponent=!0},42351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(83985);const i={sidebar_position:99999976,title:"1.9.0.2",tags:["Official","Changelog","Preview","1.9"]},s="Minecraft Beta - 1.9.0.2 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.9/0/2",id:"official_changelog/preview/1.9/0/2",title:"1.9.0.2",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.9/0/2.mdx",sourceDirName:"official_changelog/preview/1.9/0",slug:"/official_changelog/preview/1.9/0/2",permalink:"/en/docs/official_changelog/preview/1.9/0/2",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.9/0/2.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.9",permalink:"/en/docs/tags/1-9"}],version:"current",sidebarPosition:99999976,frontMatter:{sidebar_position:99999976,title:"1.9.0.2",tags:["Official","Changelog","Preview","1.9"]},sidebar:"changelogSidebar",previous:{title:"1.9.0.3",permalink:"/en/docs/official_changelog/preview/1.9/0/3"},next:{title:"1.9.0.0",permalink:"/en/docs/official_changelog/preview/1.9/0/"}},c={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1902-xbox-onewindows-10android"},"Minecraft Beta - 1.9.0.2 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);