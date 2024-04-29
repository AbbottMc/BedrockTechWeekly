"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97020,64137,81791,13570,80677,93122,21535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},49158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/80/22/gameplay",id:"changelog_source/preview/1.19/80/22/gameplay",title:"gameplay",description:"Posted: 22 March, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/80/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Calibrated Sculk Sensors</strong>",id:"calibrated-sculk-sensors",level:2},{value:"<strong>Vibration Resonance</strong>",id:"vibration-resonance",level:2},{value:"<strong>Sign Improvements</strong>",id:"sign-improvements",level:2},{value:"<strong>Armor Trims</strong>",id:"armor-trims",level:2},{value:"<strong>Archaeology</strong>",id:"archaeology",level:2},{value:"<strong>Cherry Blossom Biome</strong>",id:"cherry-blossom-biome",level:2},{value:"<strong>Accessibility Features</strong>",id:"accessibility-features",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 22 March, 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0 for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/14204520125197",alt:"A Minecraft screenshot featuring cherry trees, a calibrated sculk sensor, decorated pots and armour trims."})),(0,r.kt)("p",null,"Do you know what a writer\u2019s worst fear is? No, not rejection \u2013 typos! Luckily this week\u2019s experimental features for Minecraft: Bedrock Edition include the ability to edit your signs, write on both sides, and even lock your text by applying wax! Once you\u2019ve rewritten all your signs, you can point them towards the new suspicious gravel block being added in this week\u2019s changelog, or even fill them with crafting instructions for the new sculk sensor. The choice is yours! Discover the new sign customization along with suspicious gravel and other new features that will join Minecraft in the Trails & Tales Update later this year. Don\u2019t forget to send us all your feedback and ideas at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\xa0and report any bugs to\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"calibrated-sculk-sensors"},(0,r.kt)("strong",{parentName:"h2"},"Calibrated Sculk Sensors")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level. They are not found naturally and can only be crafted"),(0,r.kt)("li",{parentName:"ul"},"They can be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table"),(0,r.kt)("li",{parentName:"ul"},"One side of the Calibrated Sculk Sensor can receive a Redstone signal as input",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The strength of that Redstone signal is the only vibration frequency the Sculk Sensor will listen to"))),(0,r.kt)("li",{parentName:"ul"},"Leave us your feedback for this feature here!")),(0,r.kt)("h2",{id:"vibration-resonance"},(0,r.kt)("strong",{parentName:"h2"},"Vibration Resonance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location"),(0,r.kt)("li",{parentName:"ul"},"This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally")))),(0,r.kt)("h2",{id:"sign-improvements"},(0,r.kt)("strong",{parentName:"h2"},"Sign Improvements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signs have improved customization options"),(0,r.kt)("li",{parentName:"ul"},"Sign text can now be edited after being placed in the world",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This can be done by interacting with the Sign"))),(0,r.kt)("li",{parentName:"ul"},"Both sides of the Sign can now have separate text and colors, allowing for further customization options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"By default, a Sign will prompt you to input the front side's text when placed"),(0,r.kt)("li",{parentName:"ul"},"To apply text to the back-side, you must walk to the other side and interact with that face to edit it"))),(0,r.kt)("li",{parentName:"ul"},"Signs can now also be waxed with Honeycomb, preventing any further edits to its text"),(0,r.kt)("li",{parentName:"ul"},"Send us your feedback on these improvements here!")),(0,r.kt)("h2",{id:"armor-trims"},(0,r.kt)("strong",{parentName:"h2"},"Armor Trims")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added 5 new armor trims")),(0,r.kt)("p",null,"New armor trim smithing templates have been added to the following structures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trail Ruins",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wayfinder Armor Trim"),(0,r.kt)("li",{parentName:"ul"},"Raiser Armor Trim"),(0,r.kt)("li",{parentName:"ul"},"Shaper Armor Trim"),(0,r.kt)("li",{parentName:"ul"},"Host Armor Trim"))),(0,r.kt)("li",{parentName:"ul"},"Ancient City",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Silence Armor Trim")))),(0,r.kt)("p",null,"The following changes have been made to existing Armor Trims:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dune Armor Trim now has a brand-new pattern and Smithing Template icon"),(0,r.kt)("li",{parentName:"ul"},"Dune Armor Trim's old pattern is now used by the Sentry Armor Trim",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A new icon has been made for the Sentry Armor Trim smithing template to fit this pattern"))),(0,r.kt)("li",{parentName:"ul"},"Sentry Armor Trim's old pattern is now used by the new Shaper Armor Trim")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/14204520125965",alt:"A Minecraft screenshot of the Trail Ruins structure"})),(0,r.kt)("h2",{id:"archaeology"},(0,r.kt)("strong",{parentName:"h2"},"Archaeology")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the Trail Ruins, a buried structure from a lost culture",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please tell us what you think of this feature ",(0,r.kt)("a",{parentName:"li",href:"https://feedback.minecraft.net/hc/en-us/community/posts/14203420132109-Let-s-talk-about-Trail-Ruins-"},"here"),"!"))),(0,r.kt)("li",{parentName:"ul"},"Added Suspicious Sand to Warm Ocean Ruins"),(0,r.kt)("li",{parentName:"ul"},"Added Suspicious Gravel to Cold Ocean Ruins"),(0,r.kt)("li",{parentName:"ul"},"Added 16 Pottery Shards (Now 20 Pottery Shards in total)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These have been distributed between the five Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins"))),(0,r.kt)("li",{parentName:"ul"},"Looted items should now reveal themselves properly from suspicious blocks when brushed, regardless of which item is contained (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168396"},"MCPE-168396"),")")),(0,r.kt)("h2",{id:"cherry-blossom-biome"},(0,r.kt)("strong",{parentName:"h2"},"Cherry Blossom Biome")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New petal particles for Cherry Leaves"),(0,r.kt)("li",{parentName:"ul"},"Pink Petals now make a sound when adding more petals to them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168022"},"MCPE-168022"),")"),(0,r.kt)("li",{parentName:"ul"},'The sound "step.pink',"_",'petals" is now in the "Players" category instead of "Blocks" (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168092"},"MCPE-168092"),")")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"accessibility-features"},(0,r.kt)("strong",{parentName:"h2"},"Accessibility Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporarily reverted the recent adjustments made to Potion effect colors, as they were not compatible with custom content nor with the textures used for Potions and Tipped Arrows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168357"},"MCPE-168357"),")"),(0,r.kt)("li",{parentName:"ul"},"Focus indicator is now automatically visible on menu items while using a keyboard")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The player\u2019s camera no longer appears inside blocks when sprint and swim are held (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166565"},"MCPE-166565"),")"),(0,r.kt)("li",{parentName:"ul"},"Players are now forced to stop flying when forced into a 1.5 block tall space"),(0,r.kt)("li",{parentName:"ul"},"Sneaking without the experimental toggle no longer overrides custom collision boxes")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shipwreck supply chests are no longer missing Moss Block as loot (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168376"},"MCPE-168376"),")")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Wishlist feature has been added to select clients for testing so that players can save things to purchase at a later time")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed clipping error inside Hopper (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168024"},"MCPE-168024"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs will again take damage when standing on an incomplete block next to a Campfire (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167479"},"MCPE-167479"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused the text on Signs not to be displayed with Ray Tracing enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167638"},"MCPE-167638)"))),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabled the new stack splitting UI")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when opening the My Packs tab with a broken pack (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165806"},"MCPE-165806"),")"),(0,r.kt)("li",{parentName:"ul"},"New first-time sign in screen will no longer appear on subsequent launches if you don't sign in"),(0,r.kt)("li",{parentName:"ul"},'Fixed an issue where a gamepad icon would overlap the "Feedback" window'),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where selecting an item in the Creative inventory would snap the cursor to the search bar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168355"},"MCPE-168355"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated designs for sign in and sign up screens"),(0,r.kt)("li",{parentName:"ul"},"Fixed duplicate tooltips appearing when selecting item in the inventory while using touch controls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166866"},"MCPE-166866"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the crosshair could be visible on the new death screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where text formatting codes would be shown on the new death screen")))}p.isMDXComponent=!0},9466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(46871),i=(a(68051),a(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/80/22/tech",id:"changelog_source/preview/1.19/80/22/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech",permalink:"/en/docs/changelog_source/preview/1.19/80/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"editor"},(0,r.kt)("strong",{parentName:"h2"},"Editor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issues with UI not scaling properly when the resolution or game window size is updated."),(0,r.kt)("li",{parentName:"ul"},"Item drops have been disabled in Editor. This allows for Undo/Redo and Cut/Copy/Paste to work properly.\xa0 Items will no longer be left floating in the world."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Tool mode would use the 3rd person camera if it was the active camera. when switching from Crosshair mode. The 1st person camera is always used in Tool mode."),(0,r.kt)("li",{parentName:"ul"},"Fixed issues where camera control was disabled when using a Nether or End Portal in Crosshair mode."),(0,r.kt)("li",{parentName:"ul"},"Removed the old stonecutter and Nether reactor core from the block picker.")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Changed the debug HUD text available in Preview & Beta builds to append "RTX" to the renderer information only when RTX content is being played instead of when the GPU is capable of running RTX content. As a consequence, the DXR-capable D3D12 backend will now report itself as "D3D12+"')),(0,r.kt)("h1",{id:"technical-experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added two new commands:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/gametest stopall used to manually stop all tests while they are running"),(0,r.kt)("li",{parentName:"ul"},"/gametest runsetuntilfail used to run a set of tests but will automatically stop if any of the tests fail")))))}d.isMDXComponent=!0},46871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/80/22/tech_sapi_stable",id:"changelog_source/preview/1.19/80/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Signs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where text set on Signs using\xa0",(0,r.kt)("em",{parentName:"li"},"setText")," wasn't reflected on Signs on the client until the Sign was reloaded"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getComponent('minecraft:sign')")," now works with Hanging Signs")))),(0,r.kt)("p",null,"The following APIs have been moved from beta to stable @minecraft/server (1.1.0):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"dimension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"typeId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getVelocity()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"location")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getHeadLocation()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"nameTag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getViewDirection()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getEntities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getEntitiesAtBlockLocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getPlayers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"EntityQueryOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"EntityQueryScoreOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"GameType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getPlayers"))))}p.isMDXComponent=!0},68051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},34502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),i=a(49158),l=a(9466);const s={sidebar_position:99999774,title:"1.19.80.22",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.80.22",u={unversionedId:"official_changelog/preview/1.19/80/22",id:"official_changelog/preview/1.19/80/22",title:"1.19.80.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/80/22.mdx",sourceDirName:"official_changelog/preview/1.19/80",slug:"/official_changelog/preview/1.19/80/22",permalink:"/en/docs/official_changelog/preview/1.19/80/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/80/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999774,frontMatter:{sidebar_position:99999774,title:"1.19.80.22",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.80.23",permalink:"/en/docs/official_changelog/preview/1.19/80/23"},next:{title:"1.19.80.21",permalink:"/en/docs/official_changelog/preview/1.19/80/21"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1198022"},"Minecraft Beta & Preview - 1.19.80.22"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);