"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[4717,31164,6188],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),g=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=g(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=g(n),c=r,d=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return n?t.createElement(d,i(i({ref:a},u),{},{components:n})):t.createElement(d,i({ref:a},u))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},a)}},18228:(e,a,n)=>{n.d(a,{A:()=>v});var t=n(58168),r=n(96540),l=n(20053),i=n(23104),o=n(56347),s=n(57485),g=n(31682),u=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function m(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,g.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function c(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:n}=e;const t=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[s,g]=d({queryString:n,groupId:t}),[p,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,u.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),h=(()=>{const e=s??p;return c({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),g(e),y(e)}),[g,y,l]),tabValues:l}}var h=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:n,selectedValue:o,selectValue:s,tabValues:g,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),c=e=>{const a=e.currentTarget,n=p.indexOf(a),t=g[n].value;t!==o&&(m(a),s(t))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;a=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;a=p[n]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},a)},g.map((e=>{let{value:a,label:n,attributes:i}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:c},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a}),style:{wordBreak:"keep-all"}}),n??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function N(e){let{lazy:a,children:n,selectedValue:t}=e;if(a){const e=n.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function w(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,t.A)({},e,a)),r.createElement(N,(0,t.A)({},e,a)))}function v(e){const a=(0,h.A)();return r.createElement(w,(0,t.A)({key:String(a)},e))}},78003:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var t=n(58168),r=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.11/0/1/gameplay",id:"changelog_source/preview/1.11/0/1/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.11/0/1/gameplay.mdx",sourceDirName:"changelog_source/preview/1.11/0/1",slug:"/changelog_source/preview/1.11/0/1/gameplay",permalink:"/en/docs/changelog_source/preview/1.11/0/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.11/0/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"PLEASE READ before participating in the Minecraft Beta:",id:"please-read-before-participating-in-the-minecraft-beta",level:2},{value:"<strong>Known Issues:</strong>",id:"known-issues",level:3},{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:3},{value:"<strong>New Features:</strong>",id:"new-features",level:3},{value:"<strong>Changes:</strong>",id:"changes",level:3},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:3},{value:"<strong>Fixes:</strong>",id:"fixes",level:3}],u={toc:g},p="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(p,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"please-read-before-participating-in-the-minecraft-beta"},"PLEASE READ before participating in the Minecraft Beta:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/JoinMCBeta"},"ms/JoinMCBeta")," for detailed instructions"),(0,r.yg)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.yg)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.yg)("h3",{id:"known-issues"},(0,r.yg)("strong",{parentName:"h3"},"Known Issues:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In this Beta there is a known issue with dragging and splitting stacks of items in the crafting grid and inventory. We are aware of the issue and a fix will be included in the next beta - in the meantime stacks can still be split in half using right click, or long-press for touch screen users.")),(0,r.yg)("h3",{id:"experimental-gameplay"},(0,r.yg)("strong",{parentName:"h3"},"Experimental Gameplay:")),(0,r.yg)("p",null,"(Work in progress features that are only available when Experimental Gameplay is enabled in world settings)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"New Villager Trade UI for Classic and Pocket UI profiles"),(0,r.yg)("li",{parentName:"ul"},"Pillager Raids\xa0 - Added some of the base features in preparation for Raids to be fully implemented in a future update!",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"New base mob effects for the raid: Bad Omen and Hero of the Village effects (Currently available only through commands)"),(0,r.yg)("li",{parentName:"ul"},"Illagers and Ravagers do not kill baby villagers\xa0"),(0,r.yg)("li",{parentName:"ul"},"Placeholder 'horn' sound\xa0"),(0,r.yg)("li",{parentName:"ul"},"Placeholder explosion sound to indicate successful raid defense"),(0,r.yg)("li",{parentName:"ul"},"Adding the dweller component to raiders"))),(0,r.yg)("li",{parentName:"ul"},"Villagers in existing worlds now convert to new Villagers (if they are not part of a marketplace template world)"),(0,r.yg)("li",{parentName:"ul"},"Various Villager bug fixes and changes:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Farmers choose their profession based on composter blocks rather than farmland blocks"),(0,r.yg)("li",{parentName:"ul"},"Farmers and Librarians properly go to work"),(0,r.yg)("li",{parentName:"ul"},"Work goal is properly cleaned up between schedule changes"),(0,r.yg)("li",{parentName:"ul"},"Fixed work goal to have a cooldown, max active time, and better ranges"),(0,r.yg)("li",{parentName:"ul"},"Fixed preferred job sites being lost after reloading worlds"),(0,r.yg)("li",{parentName:"ul"},"Increased job site goal distances"),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer get launched from their beds"),(0,r.yg)("li",{parentName:"ul"},"Village structures no longer generate on top of one another (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41220"},"MCPE-41220"),")"))),(0,r.yg)("li",{parentName:"ul"},"Various Village generation bug fixes:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Village chests now all have loot (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41235"},"MCPE-41235"),")"),(0,r.yg)("li",{parentName:"ul"},"Grass, bell, and trapdoor placement fixes"),(0,r.yg)("li",{parentName:"ul"},"Village town centres now generate at or above water level"),(0,r.yg)("li",{parentName:"ul"},"Sand blocks now have supportive sandstone blocks underneath"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug causing some Village elements to be buried underground"),(0,r.yg)("li",{parentName:"ul"},"Balanced the number of job sites generated in villages"),(0,r.yg)("li",{parentName:"ul"},"Flowing water is no longer generated in villages\xa0"),(0,r.yg)("li",{parentName:"ul"},"Lava in Blacksmiths is no longer a fire hazard!"),(0,r.yg)("li",{parentName:"ul"},"Animals can spawn in Villages again"),(0,r.yg)("li",{parentName:"ul"},"Fixed rotation of terracotta blocks"),(0,r.yg)("li",{parentName:"ul"},"Balanced sea pickle generation"),(0,r.yg)("li",{parentName:"ul"},"Bell block and crop block fixes\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with snow layer generation"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with ravines near desert Villages"))),(0,r.yg)("li",{parentName:"ul"},"Renamed Illager Beast to Ravager\xa0"),(0,r.yg)("li",{parentName:"ul"},"Ravagers now tread more carefully around blocks that can inflict damage, such as berry bushes"),(0,r.yg)("li",{parentName:"ul"},"Added Ravager Stun and Roar attacks"),(0,r.yg)("li",{parentName:"ul"},"Added Ravager Bite Attack\xa0"),(0,r.yg)("li",{parentName:"ul"},"Ravagers can be ridden by Pillagers and Vindicators.\xa0"),(0,r.yg)("li",{parentName:"ul"},"Ravager Environment Interaction",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When running, the Ravager will break all of the following blocks around it, similar to how the Wither works:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Berry Bushes"),(0,r.yg)("li",{parentName:"ul"},"Dead Bushes"),(0,r.yg)("li",{parentName:"ul"},"Leaf Blocks"),(0,r.yg)("li",{parentName:"ul"},"Melons"),(0,r.yg)("li",{parentName:"ul"},"Pumpkins (including Carved/Lit)"),(0,r.yg)("li",{parentName:"ul"},"Beetroot"),(0,r.yg)("li",{parentName:"ul"},"Wheat"),(0,r.yg)("li",{parentName:"ul"},"Potatoes"),(0,r.yg)("li",{parentName:"ul"},"Carrots"),(0,r.yg)("li",{parentName:"ul"},"Stem Blocks"),(0,r.yg)("li",{parentName:"ul"},"Sugarcane/Reeds"),(0,r.yg)("li",{parentName:"ul"},"Bamboo"),(0,r.yg)("li",{parentName:"ul"},"Chorus Plants"),(0,r.yg)("li",{parentName:"ul"},"Chorus Flowers/Fruits"),(0,r.yg)("li",{parentName:"ul"},"Tall Grass"),(0,r.yg)("li",{parentName:"ul"},"Ferns"),(0,r.yg)("li",{parentName:"ul"},"Vines"),(0,r.yg)("li",{parentName:"ul"},"Lily Pads"),(0,r.yg)("li",{parentName:"ul"},"Turtle Eggs"),(0,r.yg)("li",{parentName:"ul"},"Mushrooms"),(0,r.yg)("li",{parentName:"ul"},"Flowers"),(0,r.yg)("li",{parentName:"ul"},"Top Snow/Snow Layers"),(0,r.yg)("li",{parentName:"ul"},"Saplings (including Bamboo)"))),(0,r.yg)("li",{parentName:"ul"},"Added Ravager Sounds\xa0"),(0,r.yg)("li",{parentName:"ul"},"Illager Captain",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Pillager Outposts now spawn Captains\xa0"),(0,r.yg)("li",{parentName:"ul"},"Implemented Illager Captain Banner\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added Illager Captain Banner to creative menu"))),(0,r.yg)("li",{parentName:"ul"},"Iron Golem no longer generates outside of its cage in Pillager Outpost"),(0,r.yg)("li",{parentName:"ul"},"Pillager Outpost now no longer generate embedded in the ground too much"),(0,r.yg)("li",{parentName:"ul"},"Reduced the number of Pillager Outposts"),(0,r.yg)("li",{parentName:"ul"},"Added Village new economy supply and demand system",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The Supply of trades is only restored when the Villager is given the opportunity to work at their Work Station. (This feature is not complete in this beta, but villagers can access a resupply using the command /resupply)"),(0,r.yg)("li",{parentName:"ul"},"When the Villager's trades are restored to full, it takes whatever Supply was used up (number of trades), and converts that into a price increase called Demand. Demand goes up by the number of Supply used, and down by the number of Supply not used"),(0,r.yg)("li",{parentName:"ul"},"When villagers make trades, they gain experience. When they gain enough experience, they level up. Levelling up unlocks new trades, which are locked until the Villager is at the appropriate level (currently one trade equals one level up, this will be changed in a future update)"),(0,r.yg)("li",{parentName:"ul"},"The economy system is still in development and more features and changes will be added later on"))),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer teleport through walls or get stuck in walls when trying to sleep")))),(0,r.yg)("h3",{id:"new-features"},(0,r.yg)("strong",{parentName:"h3"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pillager Patrols now spawn in the world\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added basic Composter functionality, sounds, and particles",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Hopper functionality will be added at a later date"))),(0,r.yg)("li",{parentName:"ul"},"Added Grindstone UI, functionality, and sounds"),(0,r.yg)("li",{parentName:"ul"},"Added Bell functionality",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"New bell sounds"),(0,r.yg)("li",{parentName:"ul"},"Bell is no longer behind experimental features"),(0,r.yg)("li",{parentName:"ul"},"Bells ring when players interact with them or they are powered by redstone"),(0,r.yg)("li",{parentName:"ul"},"Bells break when pushed by a piston"),(0,r.yg)("li",{parentName:"ul"},"Arrows bounce off Bells"))),(0,r.yg)("li",{parentName:"ul"},"Added more campfire functionality!",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Campfire Cooking!"),(0,r.yg)("li",{parentName:"ul"},"Added particles and sounds"),(0,r.yg)("li",{parentName:"ul"},"Campfires smoke when they are extinguished"),(0,r.yg)("li",{parentName:"ul"},"Campfires produce more smoke when placed on a haybale"),(0,r.yg)("li",{parentName:"ul"},"Axes break campfires more quickly"))),(0,r.yg)("li",{parentName:"ul"},"Added Stonecutter functionality\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added Cartography Table UI"),(0,r.yg)("li",{parentName:"ul"},"Added Sweet Berry Bush sounds"),(0,r.yg)("li",{parentName:"ul"},"Lecterns now emit a redstone signal when used",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Players can use a comparator and each page turn emits one redstone signal"))),(0,r.yg)("li",{parentName:"ul"},"Added Lantern sounds"),(0,r.yg)("li",{parentName:"ul"},"Added Barrel basic functionality and sounds")),(0,r.yg)("h3",{id:"changes"},(0,r.yg)("strong",{parentName:"h3"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bamboo generation is no longer behind the experimental gameplay toggle"),(0,r.yg)("li",{parentName:"ul"},"Cartography tables and grindstones can now be crafted with multiple wooden plank types"),(0,r.yg)("li",{parentName:"ul"},"Adding missing recipes for campfires, including wood blocks, stripped wood blocks, and stripped logs"),(0,r.yg)("li",{parentName:"ul"},"Moved all stonecutter recipes to the normal recipe list with tags")),(0,r.yg)("h3",{id:"for-map-makers-and-add-on-creators"},(0,r.yg)("strong",{parentName:"h3"},"For Map Makers and Add-On Creators:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Data Driven Furnace Recipes",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Custom furnace recipes can be added to the game using JSON"),(0,r.yg)("li",{parentName:"ul"},"Furnace recipes are 1 per file just like all other craft recipes."),(0,r.yg)("li",{parentName:"ul"},"Added tags to furnace recipes and made the UI screens use them to filter the recipes down"))),(0,r.yg)("li",{parentName:"ul"},"Recipes now have tags so they can be filtered by crafting type"),(0,r.yg)("li",{parentName:"ul"},"Leash positions now use vanilla positions if not specified in the pack"),(0,r.yg)("li",{parentName:"ul"},"Fixed baby Zombie Pigman sword scale in marketplace content"),(0,r.yg)("li",{parentName:"ul"},"Sound Event is now displayed in the scripting documentation"),(0,r.yg)("li",{parentName:"ul"},"Renamed blocks in resource packs now keep their custom names")),(0,r.yg)("h3",{id:"fixes"},(0,r.yg)("strong",{parentName:"h3"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when enabling Texel Anti-Aliasing"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur if a villager trade was too expensive"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when spawning a villager in the Luxury Life marketplace pack."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when loading in new villages"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when trading with the Wandering Trader"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when replacing a world with an unsynced world"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when loading in mob geometry"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when interacting with villagers with custom trades"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Global resource packs will now stay applied if you revisit the settings screen after restarting the game, and then restarting the game"),(0,r.yg)("li",{parentName:"ul"},"The Shield hotbar item now only shakes when durability is lost"),(0,r.yg)("li",{parentName:"ul"},"Fishing float now sits slightly higher in water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32976"},"MCPE-32976"),")"),(0,r.yg)("li",{parentName:"ul"},"The Treasure Hunter Achievement will now unlock when the map is placed the in the off-hand slot (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33382"},"MCPE-33382"),")"),(0,r.yg)("li",{parentName:"ul"},"Global resource reset message now shows up if the load screen is taking too long on some devices"),(0,r.yg)("li",{parentName:"ul"},'The "No Available Space" message no longer shows unexpectedly when downloading marketplace bundles'),(0,r.yg)("li",{parentName:"ul"},"Renamed empty maps will now stay named after becoming a filled map"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Players on split-screen no longer have limited visibility underwater (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39539"},"MCPE-39539"),")"),(0,r.yg)("li",{parentName:"ul"},"Scaffolding that is placed over the void now supports the player (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38064"},"MCPE-38064"),")"),(0,r.yg)("li",{parentName:"ul"},"Chorus fruit now plays teleport sound after eating it\xa0"),(0,r.yg)("li",{parentName:"ul"},"Farmer villagers no longer produce infinite amounts of bread (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33608"},"MCPE-33608"),")"),(0,r.yg)("li",{parentName:"ul"},"Signs can now be used as fuel in furnaces\xa0"),(0,r.yg)("li",{parentName:"ul"},"Players can now climb vines and ladders using the jump button again"),(0,r.yg)("li",{parentName:"ul"},"Lightning no longer has a downward area of effect when hitting blocks, so will no longer strike mobs sheltering underneath blocks"),(0,r.yg)("li",{parentName:"ul"},"Creative players no longer get additional buckets when collecting water or lava"),(0,r.yg)("li",{parentName:"ul"},"Renaming items using an anvil no longer increases the prior work penalty (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36931"},"MCPE-36931"),")"),(0,r.yg)("li",{parentName:"ul"},"Sweet berry bushes no longer supply infinite amounts of berries (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41211"},"MCPE-41211"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"World Generation")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed mineshaft generation - no longer generate in a giant cluster and should more closely resemble those found in the Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28485"},"MCPE-28485"),")"),(0,r.yg)("li",{parentName:"ul"},"Mesa Plateau biomes now generate more like those in the Java Edition"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Panda eating animation is now faster (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40743"},"MCPE-40743"),")"),(0,r.yg)("li",{parentName:"ul"},"Shulkers now have a chance to drop more shulker shells when killed with looting (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39893"},"MCPE-39893"),")"),(0,r.yg)("li",{parentName:"ul"},"Vexes no longer attack baby Villagers\xa0"),(0,r.yg)("li",{parentName:"ul"},"Vindicators no longer become passive when renamed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27927"},"MCPE-27927"),")"),(0,r.yg)("li",{parentName:"ul"},"Baby Villagers can no longer show trade options in hand"),(0,r.yg)("li",{parentName:"ul"},"Guardians no longer spawn outside water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39941"},"MCPE-39941"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed villager scheduling - Villagers now spend less time standing around doing nothing!"),(0,r.yg)("li",{parentName:"ul"},"Pandas no longer roll into dangerous blocks when spawned\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug related to the Polar Bear attack animation (legs are now 100% more attached!)"),(0,r.yg)("li",{parentName:"ul"},"The Polar Bear hitbox is no longer offset, and is positioned properly when riding a boat (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41299"},"MCPE-41299"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed Wither boss armour geometry"),(0,r.yg)("li",{parentName:"ul"},"Creepers now flash white during their pre-explosion animation (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41258"},"MCPE-41258"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed Polar bear model size being too small"),(0,r.yg)("li",{parentName:"ul"},"Snow golems now take damage when walking over campfires\xa0"),(0,r.yg)("li",{parentName:"ul"},"Creepers can now spawn in a 1.8 high space (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-24120"},"MCPE-24120"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Grindstone can no longer support Scaffolding"),(0,r.yg)("li",{parentName:"ul"},"Grass now spreads to normal dirt blocks, not coarse dirt (\xa0",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41198"},"MCPE-41198"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed Firework Stars and Firework Rockets now display their new names"),(0,r.yg)("li",{parentName:"ul"},"Leather horse armour is now properly colored (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40124"},"MCPE-40124"),")"),(0,r.yg)("li",{parentName:"ul"},"Banners no longer render as wall variants when held (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41228"},"MCPE-41228"),")"),(0,r.yg)("li",{parentName:"ul"},"Shields held in the off-hand are no longer upside-down\xa0 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41221"},"MCPE-41221"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Graphical")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed issues with the Armorer and Cleric textures\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed Armorer villager arm texture\xa0"),(0,r.yg)("li",{parentName:"ul"},"Surrounded leaves are now the correct color\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Items can now be split if they are spread in a crafting grid on touch devices"),(0,r.yg)("li",{parentName:"ul"},"Stonecutter now only makes a noise when there's something to take"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Commands")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Different cauldron types will no longer overwrite each other in the player's inventory when using the give command"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"A component group is now correctly removed on second activation of minecraft:damage","_","sensor"),(0,r.yg)("li",{parentName:"ul"},"Target selectors are no longer case-specific"),(0,r.yg)("li",{parentName:"ul"},"Scoreboard scores are no longer saved earlier than other information when exiting a world")))))}m.isMDXComponent=!0},34922:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>g,toc:()=>p});var t=n(58168),r=(n(96540),n(15680)),l=n(18228),i=n(19365);const o={},s=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p},c="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(i.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}d.isMDXComponent=!0},94972:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>g,toc:()=>p});var t=n(58168),r=(n(96540),n(15680)),l=n(34922),i=n(78003);const o={sidebar_position:99999971,title:"1.11.0.1",tags:["Official","Changelog","Preview","1.11"]},s="Minecraft Beta - 1.11.0.1 (Xbox One/Windows 10/Android)",g={unversionedId:"official_changelog/preview/1.11/0/1",id:"official_changelog/preview/1.11/0/1",title:"1.11.0.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.11/0/1.mdx",sourceDirName:"official_changelog/preview/1.11/0",slug:"/official_changelog/preview/1.11/0/1",permalink:"/en/docs/official_changelog/preview/1.11/0/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.11/0/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.11",permalink:"/en/docs/tags/1-11"}],version:"current",sidebarPosition:99999971,frontMatter:{sidebar_position:99999971,title:"1.11.0.1",tags:["Official","Changelog","Preview","1.11"]},sidebar:"changelogSidebar",previous:{title:"1.11.0.3",permalink:"/en/docs/official_changelog/preview/1.11/0/3"},next:{title:"1.10.0.4",permalink:"/en/docs/official_changelog/preview/1.10/0/4"}},u={},p=[],m={toc:p},c="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11101-xbox-onewindows-10android"},"Minecraft Beta - 1.11.0.1 (Xbox One/Windows 10/Android)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);