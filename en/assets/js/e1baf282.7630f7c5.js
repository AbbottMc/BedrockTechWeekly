"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47671,64137,81791,11262,63519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/22/gameplay",id:"changelog_source/preview/1.17/20/22/gameplay",title:"gameplay",description:"Posted: 14 July 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/20/22",slug:"/changelog_source/preview/1.17/20/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/20/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Stability and Performance</strong>\xa0",id:"stability-and-performance",level:2},{value:"<strong>Blocks</strong>\xa0",id:"blocks",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>User Interface</strong>\xa0",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 14 July 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4404990171661/Screen_Shot_07-13-21_at_01.43_PM.PNG",alt:"Screen_Shot_07-13-21_at_01.43_PM.PNG"})),(0,r.kt)("p",null,"We have another Bedrock Beta update today, and we've fixed a bunch of bugs! Also, we've made a\xa0fairly significant\xa0change to the way\xa0hostile\xa0mobs spawn - to test this out you'll need to enable the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/hc/en-us/community/posts/360075718432"},"Caves and Cliffs Experimental Features"),". We're hoping this change will make your cave spelunking trips slightly\xa0safer, but you'll still need to avoid falling in lava with a hotbar full of diamonds. Not that that ever happens, right?\xa0"),(0,r.kt)("p",null,"Please send us your feedback in the threads at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"https://aka.ms/CavesCliffsFeedback"),", and search and report any new bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"https://bugs.mojang.com"),".\xa0\xa0"),(0,r.kt)("h1",{id:"experimentalfeatures"},(0,r.kt)("strong",{parentName:"h1"},"Experimental\xa0Features"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monsters will only spawn in complete\u202fdarkness\xa0\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This change is being made to balance the player's ability to light up the new larger caves and make them safe from monster spawning\xa0"),(0,r.kt)("li",{parentName:"ul"},"Note that this change only affects block-light and not\xa0sky-light\xa0"),(0,r.kt)("li",{parentName:"ul"},"Please send us your feedback on this change at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/CCMobSpawningFeedback"},"aka.ms/CCMobSpawningFeedback"),"!\xa0")))),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes"),"\xa0"),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0several crashes that could occur during gameplay\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amethyst Cluster\xa0block can no longer be placed on\xa0Grass\xa0Path blocks\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Corrected Deepslate Lapis Lazuli\xa0Ore\xa0block\xa0name from Deepslate Lapis\xa0Ore\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123605"},"MCPE-123605"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Dispensers now remove bubble columns when removing water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-56462"},"MCPE-56462"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Sea Pickles now change light depending on being in water or not (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131642"},"MCPE-131642"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Snow layers are now melted by light from\xa0torches, etc.\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131272"},"MCPE-131272"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Vanilla Parity:\xa0Falling gravity blocks will no longer break when landing on certain blocks\xa0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-20109"},"MCPE-20109"),") \xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vanilla Parity: Using Bone Meal on Moss Blocks now also replaces Tuff blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125922"},"MCPE-125922"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Vanilla Parity: Fixed Light Block not being displayed correctly when being held (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123249"},"MCPE-123249"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed held items not disappearing visually to other players after a player dies when the Keep Inventory gamerule is enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64235"},"MCPE-64235"),")"),(0,r.kt)("li",{parentName:"ul"},"Nether\xa0Portals\xa0placed between chunks no longer break when leaving the\xa0Nether (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74333"},"MCPE-74333"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Shears now correctly cut Vines and Glow Lichen faster (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123139"},"MCPE-123139"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Weeping and Twisting Vines now grow\xa0correctly\xa0after the player breaks them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-90932"},"MCPE-90932"),") \xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjusted padding for HD Textures in mipmaps level 1 in texture atlas to fix texture bleeding \xa0"),(0,r.kt)("li",{parentName:"ul"},"Half of the Enchantment\xa0Table book doesn't render dark anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106627"},"MCPE-106627"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Blocks moved by a Piston are no longer white while moving (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66250"},"MCPE-66250"),") \xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axolotl spawns only when there is stone up to 10 blocks under them, and not in bubble columns \xa0"),(0,r.kt)("li",{parentName:"ul"},"Armor Stands now drop equipped items when destroyed by fire or lava\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94603"},"MCPE-94603"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Limited the maximum number of\xa0Phantom\xa0mobs that can\xa0spawn\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106557"},"MCPE-106557"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},'Goats now play their "impact 3" sound (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127757"},"MCPE-127757"),") \xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recipe Book\xa0crafting estimates no longer differ from the actual results \xa0"),(0,r.kt)("li",{parentName:"ul"},"Experimental warning message is no longer displayed inconsistently when loading beta worlds\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Cursor items no longer count towards recipe ingredient in\xa0Recipe\xa0Book\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Selected recipe is now deselected when the player runs out of ingredients \xa0"),(0,r.kt)("li",{parentName:"ul"},"Non-craftable recipes no longer displayed in\xa0Recipe\xa0Book when search mechanism is used\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Nether blocks now appear in\xa0the\xa0crafting grid if any other ingredient is unavailable \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0a wireless\xa0network connection error message\xa0that appeared when players were connected via a wired network\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed various spelling errors in Character Creator \xa0"),(0,r.kt)("li",{parentName:"ul"},"Hover of widget buttons were showing corrupted appearance before full load was complete \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0a\xa0legibility\xa0issue with\xa0some\xa0Japanese\xa0font\xa0characters\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Riding an animal now displays the correct\xa0tooltip\xa0term when played on a non-touch screen")))}p.isMDXComponent=!0},95647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/22/tech",id:"changelog_source/preview/1.17/20/22/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/22/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/22",slug:"/changelog_source/preview/1.17/20/22/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/22/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>Spawning</strong>\xa0",id:"spawning",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gametestframework-experimental"},(0,r.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0BlockTypes\xa0class to\xa0MinecraftBlockTypes\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed Effects class to\xa0MinecraftEffectTypes\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed Items class to\xa0MinecraftItemTypes\xa0"),(0,r.kt)("li",{parentName:"ul"},"Events\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0currentTick\xa0to tick event - Returns the current server tick\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0createEntity\xa0to\xa0entityCreate\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0addEffect\xa0to\xa0effectAdd\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0activatePiston\xa0to\xa0pistonActivate\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0beforeActivatePiston\xa0to\xa0beforePistonActivate\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0explodeBlock\xa0to\xa0blockExplode\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0changeWeather\xa0to\xa0weatherChange\xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target selectors\xa0ry\xa0and\xa0rym\xa0now support wrapping around north \xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Killing a custom\xa0mob with an unknown loot table entry type will no longer cause a crash, and will now throw a content error (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129006"},"MCPE-129006"),") \xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rabbit with\xa0initialEvent\xa0specified now scales properly to adult rabbit size\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76643"},"MCPE-76643"),") \xa0")),(0,r.kt)("h2",{id:"spawning"},(0,r.kt)("strong",{parentName:"h2"},"Spawning"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Similar to\xa0the\xa0spawns","_","on","_","block","_","filter, the\xa0spawns","_","above","_","block","_",'filter\xa0specifies a list of blocks and a distance. The mob can then spawn only if the nearest block within the specified distance below the desired\xa0spawnpoint\xa0is in that list (water and air not included). "minecraft:spawns',"_","above","_","block","_",'filter": { "blocks": "minecraft:stone", "distance": 10 }')))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},40229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(62570),i=a(95647);const s={sidebar_position:99999858,title:"1.17.20.22",tags:["Official","Changelog","Preview","1.17"]},c="Minecraft Beta - 1.17.20.22 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/20/22",id:"official_changelog/preview/1.17/20/22",title:"1.17.20.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/20/22.mdx",sourceDirName:"official_changelog/preview/1.17/20",slug:"/official_changelog/preview/1.17/20/22",permalink:"/en/docs/official_changelog/preview/1.17/20/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/20/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999858,frontMatter:{sidebar_position:99999858,title:"1.17.20.22",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.20.23",permalink:"/en/docs/official_changelog/preview/1.17/20/23"},next:{title:"1.17.20.21",permalink:"/en/docs/official_changelog/preview/1.17/20/21"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1172022-xbox-onewindows-10android"},"Minecraft Beta - 1.17.20.22 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);