"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98159,14950,64137,81791,74532,25389,4341,12330,63664],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=p[a].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},50432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/22/gameplay",id:"changelog_source/preview/1.20/50/22/gameplay",title:"gameplay",description:"Posted: 25 October 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/50/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"Copper Block Family",id:"copper-block-family",level:2},{value:"Chiseled Copper",id:"chiseled-copper",level:2},{value:"Copper Grate",id:"copper-grate",level:2},{value:"Copper Bulb",id:"copper-bulb",level:2},{value:"Copper Doors and Trapdoors",id:"copper-doors-and-trapdoors",level:2},{value:"Tuff Block Family",id:"tuff-block-family",level:2},{value:"Known Issues for these Experimental Blocks:",id:"known-issues-for-these-experimental-blocks",level:2},{value:"Bat",id:"bat",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Decorated Pots",id:"decorated-pots",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Touch Controls",id:"touch-controls",level:2},{value:"User Interface",id:"user-interface",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 25 October 2023"),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/20699846496141",alt:"The new copper and tuff blocks in the Minecraft Preview. There are some redstone builds in the scene, and a bat in the foreground sporting a new look"})),(0,n.kt)("p",null,"It\u2019s October in Sweden, and the leaves outside are changing from green to orange faster than copper can oxidize! I could spend this whole changelog waxing lyrical about the new decorative blocks coming to experimental testing this week, but instead how about I tell you to look out for the copper trapdoor, copper door, copper grate, and chiseled copper block! All of these can be waxed, chiseled, and scraped to your heart\u2019s content, so you can color co-ordinate with pumpkins\xa0",(0,n.kt)("em",{parentName:"p"},"or"),"\xa0creepers. Also coming to testing is a new set of tuff blocks (finally, tuff stairs!) and, a new bat texture! As ever, we\u2019d love your feedback on these new features. Send us your thoughts\xa0",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/Minecraft121Feedback"},"here"),"\xa0and report any bugs at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"!"),(0,n.kt)("p",null,"_(",(0,n.kt)("strong",{parentName:"p"},"Please note:")," Thanks for your patience! This Preview and Beta has now started rolling out.)  "),(0,n.kt)("p",null,"_"),(0,n.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,n.kt)("h2",{id:"copper-block-family"},"Copper Block Family"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Copper family of blocks has been expanded, including:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chiseled Copper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Grate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Bulb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Door")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Trapdoor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Oxidized and waxed variants of all the above"))),(0,n.kt)("h2",{id:"chiseled-copper"},"Chiseled Copper"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crafted with 2 Cut Copper Slabs of a shared oxidation level"),(0,n.kt)("li",{parentName:"ul"},"Can be crafted in the Stonecutter")),(0,n.kt)("h2",{id:"copper-grate"},"Copper Grate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A new type of decorative block unique to the Copper family")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crafted with 4 Copper Blocks of a shared oxidation level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Can be crafted in the Stonecutter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Properties:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transparent and allows light to pass through")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mobs cannot suffocate inside them")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cannot conduct Redstone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hostile mobs cannot naturally spawn on them"))),(0,n.kt)("h2",{id:"copper-bulb"},"Copper Bulb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A light-emitting block that can toggle its light emission through Redstone pulses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Oxidizes like other Copper blocks, and emits less light the more oxidized they are")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Bulb: Light level 15")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Exposed Copper Bulb: Light level 12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Weathered Copper Bulb: Light level 8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Oxidized Copper Bulb: Light level 4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When placed, its light is off by default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Comparators will read a signal strength of 15 if the Copper Bulb's light is on")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Does not conduct Redstone power")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Can craft 4 Copper Bulbs with:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3 Copper Blocks of a shared oxidation level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1 Blaze Rod")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1 Redstone Dust"))),(0,n.kt)("h2",{id:"copper-doors-and-trapdoors"},"Copper Doors and Trapdoors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copper variants of Doors and Trapdoors that can oxidize over time and be waxed"),(0,n.kt)("li",{parentName:"ul"},"Works like wooden Doors in that they can be opened and closed with interaction as well as Redstone"),(0,n.kt)("li",{parentName:"ul"},"Crafted with Copper Blocks of a shared oxidation level")),(0,n.kt)("h2",{id:"tuff-block-family"},"Tuff Block Family"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tuff has been expanded to have its own family of blocks, including:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stair, Slab, Wall, and Chiseled variants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tuff Bricks with Stair, Slab, Wall, and Chiseled variants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Polished Tuff with Stair, Slab, and Wall variants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All Tuff variants can be crafted in the Stonecutter"))),(0,n.kt)("h2",{id:"known-issues-for-these-experimental-blocks"},"Known Issues for these Experimental Blocks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Waxed Copper Grate\xa0- can be crafted on the Crafting Table with Honeycomb, but crafting directly from Waxed Copper Blocks isn't working for the Crafting Table or Stonecutter"),(0,n.kt)("li",{parentName:"ul"},"Chiseled Copper -\xa0can't be crafted via the Crafting Table"),(0,n.kt)("li",{parentName:"ul"},"Waxed Chiseled Copper\xa0- can be crafted on the Crafting Table with Honeycomb, but crafting directly from Waxed Copper Blocks isn't working for the Crafting Table or Stonecutter"),(0,n.kt)("li",{parentName:"ul"},"Tuff Blocks\xa0- can't be crafted via the Crafting Table but can via the Stonecutter")),(0,n.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Known issue in this update: Creative Flight speed is greatly reduced after touching the ground")),(0,n.kt)("h2",{id:"bat"},"Bat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Bat now has a new look, thanks to an updated model, animations, and texture")),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Sticky Piston pulling a retracting Sticky Piston that is pulling a player and another block no longer crashes the game (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175790"},"MCPE-175790"),")"),(0,n.kt)("li",{parentName:"ul"},"Chorus Flowers can now be destroyed by any projectile, which will no longer disappear after impact\xa0")),(0,n.kt)("h2",{id:"decorated-pots"},"Decorated Pots"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The sounds emitted by Decorated Pots breaking have been made "smashier"\xa0')),(0,n.kt)("h2",{id:"gameplay"},"Gameplay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where players couldn't block with a shield after releasing to use an item that had left their inventory (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-171346"},"MCPE-171346"),")\xa0")),(0,n.kt)("h2",{id:"mobs"},"Mobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leads will no longer break if a leashed mob is not in the same chunk as the leash holder upon reloading a world (",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-157182"},"MCPE-157182"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mobs on fire no longer spread fire to their target when holding something in their main hand\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The mobs affected by this change are Axolotl, Bee, Blaze, Cave Spider, Dolphin, Drowned, Enderman, Endermite, Fox, Hoglin, Husk, Iron Golem, Panda, Piglin, Piglin Brute, Pillager, Silverfish, Skeleton, Spider, Stray, Vindicator, Warden, Wither Skeleton, Wolf, Zoglin, Zombie, Zombie Pigman, and Zombie Villager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The new reach calculation is the attacking mob's bounding box extended by 0.8 blocks horizontally. If this extended box overlaps the target's bounding box, then the attack can reach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This change does not affect the reach of players"))),(0,n.kt)("h2",{id:"touch-controls"},"Touch Controls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the player could enter touch control customization without having touch controls (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175530"},"MCPE-175530"),")\xa0")),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The loading screen now displays 3 categories of tips based on player progression")))}u.isMDXComponent=!0},73109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(8302),i=a(16856),l=(a(38428),a(77805),a(9071));const s={},p=void 0,c={unversionedId:"changelog_source/preview/1.20/50/22/tech",id:"changelog_source/preview/1.20/50/22/tech",title:"tech",description:"Cameras",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/50/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Cameras",id:"cameras",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Editor",id:"editor",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Items",id:"items",level:2},{value:"Gametest",id:"gametest",level:2},{value:"Graphical",id:"graphical-1",level:2},{value:"Script API",id:"script-api-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-2",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cameras"},"Cameras"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a content warning for when the camera is placed outside of the player's chunk radius\xa0")),(0,n.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a\xa0",(0,n.kt)("em",{parentName:"li"},"Clear"),"\xa0button to the content log screen")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn\xa0",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use"),"\xa0the Editor,\xa0join the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion"),"\xa0discussion forum to engage with the team, and get started building extensions via the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit"),"\xa0and\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,n.kt)("p",null,"Updates this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added API class\xa0SettingsManager\xa0which will contain settings categories as properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added property\xa0settings: SettingsManager\xa0to\xa0ExtensionContext\xa0API.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added API class\xa0GraphicsSettings\xa0with\xa0get,\xa0getAll,\xa0set\xa0and\xa0setAll\xa0functions to manage graphics settings properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added API enum\xa0GraphicsSettingsProperty\xa0and type\xa0GraphicsSettingsPropertyTypeMap\xa0for available graphics settings properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updated Grapple \u201cQuick Teleport\u201d functionality to use Camera API. Grapple to fast teleport to a target block using \u201cG.\u201d Grapple to frame up a Selection using \u201cF.\u201d"))),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When a particle emitter is added to an entity but particles simulate in world, particles now correctly collide with the world")),(0,n.kt)("h2",{id:"items"},"Items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Renamed "minecraft:use',"_",'duration" to "minecraft:use',"_",'modifiers" and added a "movement',"_",'modifier" parameter in json format versions 1.20.50 and higher\xa0'),(0,n.kt)("li",{parentName:"ul"},'Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use',"_",'modifiers" instead for "movement',"_",'modifier" behavior')),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"gametest"},"Gametest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"SimulatedPlayer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"stopUsingItem"),"\xa0now returns the item that was being used"))),(0,n.kt)("h2",{id:"graphical-1"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed heightmaps appearing inverted in the deferred technical preview\xa0")),(0,n.kt)("h2",{id:"script-api-1"},"Script API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-ui"),"\xa0forms not correctly rendering player scoreboard information when embedded in rawtext")),(0,n.kt)("h2",{id:"script-api-2"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},16856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/22/tech_sapi_exp",id:"changelog_source/preview/1.20/50/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed\xa0target\xa0property to be of type\xa0Entity\xa0or\xa0undefined\xa0as the entity may not have a target",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/50/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed\xa0",(0,n.kt)("em",{parentName:"p"},"target"),"\xa0property to be of type\xa0",(0,n.kt)("em",{parentName:"p"},"Entity"),"\xa0or\xa0",(0,n.kt)("em",{parentName:"p"},"undefined"),"\xa0as the entity may not have a target\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"EntityHitInformation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed\xa0",(0,n.kt)("em",{parentName:"p"},"entity"),"\xa0property to be of type\xa0",(0,n.kt)("em",{parentName:"p"},"Entity"),"\xa0or\xa0",(0,n.kt)("em",{parentName:"p"},"undefined"),"\xa0as the entity may be undefined\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"EntityInventoryComponent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"container"),"\xa0member variable now correctly reflects it can be a Container or undefined\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"entity"),"\xa0member variable now correctly reflects it can be a Entity or undefined\xa0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"ItemStartUseOnAfterEvent"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"itemStack"),"\xa0is now optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"ItemStopUseAfterEvent"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"itemStack"),"\xa0is now optional"))))}u.isMDXComponent=!0},77805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/50/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},8302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/22/tech_sapi_stable",id:"changelog_source/preview/1.20/50/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added initial NPC support to scripting with the\xa0EntityNpcComponent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/50/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added initial NPC support to scripting with the\xa0",(0,n.kt)("em",{parentName:"li"},"EntityNpcComponent"))))}u.isMDXComponent=!0},38428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/50/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/50/22",slug:"/changelog_source/preview/1.20/50/22/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},80073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88247),i=a(50432),l=a(73109);const s={sidebar_position:99999744,title:"1.20.50.22",tags:["Official","Changelog","Preview","1.20"]},p="Minecraft Beta & Preview - 1.20.50.22",c={unversionedId:"official_changelog/preview/1.20/50/22",id:"official_changelog/preview/1.20/50/22",title:"1.20.50.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/50/22.mdx",sourceDirName:"official_changelog/preview/1.20/50",slug:"/official_changelog/preview/1.20/50/22",permalink:"/en/docs/official_changelog/preview/1.20/50/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/50/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999744,frontMatter:{sidebar_position:99999744,title:"1.20.50.22",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.50.23",permalink:"/en/docs/official_changelog/preview/1.20/50/23"},next:{title:"1.20.50.21",permalink:"/en/docs/official_changelog/preview/1.20/50/21"}},u={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1205022"},"Minecraft Beta & Preview - 1.20.50.22"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);