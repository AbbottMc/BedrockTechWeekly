"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70476,64137,14394,81791,80086,95650,84363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),k=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,n.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var k=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(m(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",f)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},63948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.19/80/21/gameplay",id:"changelog_source/preview/1.19/80/21/gameplay",title:"gameplay",description:"Posted: 15 March, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/80/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Armor Trims</strong>",id:"armor-trims",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Archaeology feature set:</strong>",id:"archaeology-feature-set",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Netherite Equipment</strong>",id:"netherite-equipment",level:2},{value:"<strong>Smithing Templates</strong>",id:"smithing-templates",level:2},{value:"<strong>Accessibility Features</strong>",id:"accessibility-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Villagers</strong>",id:"villagers",level:3}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 15 March, 2023"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\xa0"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0 for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/14012233762061",alt:"A Minecraft screenshot featuring an armor stand with armor trims. The scene is set in a cherry grove with a sniffer in the background."})),(0,n.kt)("p",null,"The days of your anonymous armor are over, because armor trims are coming to Bedrock as experimental features this week! Templates for the different trims can be found all over the Minecraft world, so stock up on supplies and start searching! Once you get your hands on a template, use the smithing table to dye and apply it to a helmet, leggings, chest plate, or boots. Now you are not only stylish and colourful, but also humble since you no longer need to use words to brag about your adventurous travels! Check out armor trims along with suspicious gravel and other new features that will join Minecraft in the Trails & Tales Update later this year. Don\u2019t forget to send us all your feedback and ideas at\xa0",(0,n.kt)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\xa0and report any bugs to\xa0",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")),(0,n.kt)("h1",{id:"experimental-features"},(0,n.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,n.kt)("h2",{id:"armor-trims"},(0,n.kt)("strong",{parentName:"h2"},"Armor Trims")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can now visually customize your armor with a variety of unique trims at the Smithing Table"),(0,n.kt)("li",{parentName:"ul"},"Armor Trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings, and Boots",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material"),(0,n.kt)("li",{parentName:"ul"},"To check which trim pattern a piece of armor has, you can hover over it in the inventory"))),(0,n.kt)("li",{parentName:"ul"},"Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pillager Outpost",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sentry Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Desert Pyramid",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dune Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Shipwreck",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Coast Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Jungle Temple",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Wild Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Ocean Monument",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tide Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Ancient City",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ward Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Woodland Mansion",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Vex Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Nether Fortress",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rib Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Bastion Remnant",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Snout Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Stronghold",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Eye Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"End City",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Spire Armor Trim"))),(0,n.kt)("li",{parentName:"ul"},"Smithing Templates are found in Chests in their respective structure, except for the Ocean Monument. Instead of finding it in Chests, Elder Guardians sometimes drop a Smithing Template when defeated"),(0,n.kt)("li",{parentName:"ul"},"Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!"),(0,n.kt)("li",{parentName:"ul"},"An Armor Trim has two properties: a pattern and a material",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim"),(0,n.kt)("li",{parentName:"ul"},"The material is defined by what ingredient you used to apply the trim, and represents the color of the trim"))),(0,n.kt)("li",{parentName:"ul"},"The viable ingredients you can use to define the color of your Armor Trim are the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Iron"),(0,n.kt)("li",{parentName:"ul"},"Copper"),(0,n.kt)("li",{parentName:"ul"},"Gold"),(0,n.kt)("li",{parentName:"ul"},"Lapis"),(0,n.kt)("li",{parentName:"ul"},"Emerald"),(0,n.kt)("li",{parentName:"ul"},"Diamond"),(0,n.kt)("li",{parentName:"ul"},"Netherite"),(0,n.kt)("li",{parentName:"ul"},"Redstone"),(0,n.kt)("li",{parentName:"ul"},"Amethyst"),(0,n.kt)("li",{parentName:"ul"},"Quartz")))))),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Piglin Head Block's ears now flap when the wearer is Riding a vehicle"),(0,n.kt)("li",{parentName:"ul"},"Cherry Stripped Wood can now be crafted from Cherry Stripped Log (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168053"},"MCPE-168053"),")"),(0,n.kt)("li",{parentName:"ul"},"Updated Cherry Leaves & Cherry Sign textures (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168059"},"MCPE-168059"),")")),(0,n.kt)("h3",{id:"archaeology-feature-set"},(0,n.kt)("strong",{parentName:"h3"},"Archaeology feature set:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the Suspicious Gravel block")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Frogs born in the Cherry Grove biome are now the temperate variant instead of the cold variant (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168083"},"MCPE-168083"),")")),(0,n.kt)("h2",{id:"netherite-equipment"},(0,n.kt)("strong",{parentName:"h2"},"Netherite Equipment")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template"),(0,n.kt)("li",{parentName:"ul"},"Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant"),(0,n.kt)("li",{parentName:"ul"},"This change was made for a variety of reasons:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Increases the time players utilize Diamond equipment before Netherite"),(0,n.kt)("li",{parentName:"ul"},"Make Netherite equipment a more significant achievement in the game's progression"),(0,n.kt)("li",{parentName:"ul"},"Adapts Netherite more naturally into the new Smithing Table crafting system")))),(0,n.kt)("h2",{id:"smithing-templates"},(0,n.kt)("strong",{parentName:"h2"},"Smithing Templates")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications"),(0,n.kt)("li",{parentName:"ul"},"Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates"),(0,n.kt)("li",{parentName:"ul"},"Smithing Templates define what type of upgrade you will be making to equipment",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade"),(0,n.kt)("li",{parentName:"ul"},"There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade"))),(0,n.kt)("li",{parentName:"ul"},"Smithing Templates are consumed when used to upgrade an item in the Smithing Table"),(0,n.kt)("li",{parentName:"ul"},"You can craft a copy of a Smithing Template in the Crafting Table with 7 Diamonds + 1 block of material that the template is made out of + 1 Smithing Template, which will output 2 of the same Smithing Template")),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"accessibility-features"},(0,n.kt)("strong",{parentName:"h2"},"Accessibility Features")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Potions no longer have an enchantment glint due to it obscuring the color of the potion contents"),(0,n.kt)("li",{parentName:"ul"},"Potions have had their colors adjusted to make them more distinguishable from each other"),(0,n.kt)("li",{parentName:"ul"},"Decreased the default visibility of the glint on enchanted items, which can now be modified in the Accessibility Settings")),(0,n.kt)("h2",{id:"blocks-1"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"fence" block is now split into unique names, "oak',"_",'fence", "acacia',"_",'fence", "birch',"_",'fence", "dark',"_","oak","_",'fence", "jungle',"_",'fence", and "spruce',"_",'fence"'),(0,n.kt)("li",{parentName:"ul"},'Commands will still work with "fence", but only new fence name will be suggested in the command prompt')),(0,n.kt)("h2",{id:"gameplay"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed experience orb position desync after teleport (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59584"},"MCPE-59584"),")"),(0,n.kt)("li",{parentName:"ul"},"Going into lava in third person view no longer causes the camera to turn black (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166861"},"MCPE-166861"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where players load incorrect data when loading a local game after connecting to a server or Realm (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164765"},"MCPE-164765"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the player camera height was incorrect with or without the sneak toggle (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167559"},"MCPE-167559"),")")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LevelChunks no longer flicker in The End dimension when Clientside Chunk Generation is enabled")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Corrected toggle navigation in Edit World menu while using gamepad or keyboard that were previously skipped"),(0,n.kt)("li",{parentName:"ul"},"Updated designs for sign in and sign up screens in preview")),(0,n.kt)("h2",{id:"vanilla-parity"},(0,n.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search bar in Creative inventory screen is now automatically selected while using a keyboard")),(0,n.kt)("h3",{id:"villagers"},(0,n.kt)("strong",{parentName:"h3"},"Villagers")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Villagers will now wake up in a valid position and will not phase though blocks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142544"},"MCPE-142544"),")")))}m.isMDXComponent=!0},60737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(17138),o=(a(54274),a(9071));const l={},s=void 0,u={unversionedId:"changelog_source/preview/1.19/80/21/tech",id:"changelog_source/preview/1.19/80/21/tech",title:"tech",description:"AI Goals",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech",permalink:"/en/docs/changelog_source/preview/1.19/80/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>ItemStack</strong>",id:"itemstack",level:2},{value:"<strong>EntityEquipmentInventoryComponent</strong>",id:"entityequipmentinventorycomponent",level:3},{value:"<strong>ItemDurabilityComponent</strong>",id:"itemdurabilitycomponent",level:3},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ai-goals"},(0,n.kt)("strong",{parentName:"h2"},"AI Goals")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Added "cooldown" field to target descriptors in "minecraft:behavior.nearest',"_","attackable","_",'target" goal')),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sponges no longer emit water drop particles underwater (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122138"},"MCPE-122138"),")")),(0,n.kt)("h2",{id:"commands"},(0,n.kt)("strong",{parentName:"h2"},"Commands")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'For worlds using game version 1.19.80 and above, acquiring a custom spawn egg through a command can only succeed with their full name rather than with an aux value, eg. "/give @s namespace:actor',"_","spawn","_",'egg"'),(0,n.kt)("li",{parentName:"ul"},"Removed requirement for blockState argument(s) when using other optional args in /fill /setblock and /clone (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167959"},"MCPE-167959"),")"),(0,n.kt)("li",{parentName:"ul"},'Implemented the "inputpermission" command, which allows for setting the player\'s camera or movement as enabled or disabled',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Syntax: /inputpermission set \\<target: player",">"," \\<permission: camera | movement",">"," \\<state: enabled | disabled",">"))),(0,n.kt)("li",{parentName:"ul"},'Implemented the "haspermission" target selector, which allows for selection based on player permission levels')),(0,n.kt)("h2",{id:"general"},(0,n.kt)("strong",{parentName:"h2"},"General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'For behavior packs using version 1.19.80 and above, recipes no longer accept a Molang query for the item\'s data field, instead use the item\'s full name, eg. use { "item": "namespace:actor',"_","spawn","_",'egg" } instead of { "item": "spawn',"_",'egg", "data": "query.get',"_","actor","_","info","_","id('namespace:actor')\" }")),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"editor"},(0,n.kt)("strong",{parentName:"h2"},"Editor")),(0,n.kt)("p",null,"The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Join our Discussion forum, post bugs, view more detailed release notes, and share your creations on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor"},"GitHub.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom blocks are now listed in the block selector"),(0,n.kt)("li",{parentName:"ul"},"Fixed z-fighting on paste preview over selection volume")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(o.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"itemstack"},(0,n.kt)("strong",{parentName:"h2"},"ItemStack")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getTags(): string","[","]"),"-"," Returns all tags for the item"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"hasTag(tag: string): boolean"),"-"," Returns true if the item has the specified tag")),(0,n.kt)("h3",{id:"entityequipmentinventorycomponent"},(0,n.kt)("strong",{parentName:"h3"},"EntityEquipmentInventoryComponent")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This component is used to manipulate the equipment of mobs and players. To use it, call\xa0",(0,n.kt)("em",{parentName:"li"},"getComponent('equipment","_","inventory')")),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined__","-")," Returns the item in the given equipment slot"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot"),"-"," Returns the container slot for the given equipment slot"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void"),"-"," Sets the item in the given equipment slot")),(0,n.kt)("h3",{id:"itemdurabilitycomponent"},(0,n.kt)("strong",{parentName:"h3"},"ItemDurabilityComponent")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ItemDurabilityComponent now works with all damageable items, not just custom items"),(0,n.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,n.kt)("em",{parentName:"li"},"damageRange")),(0,n.kt)("li",{parentName:"ul"},"Setting damage will now throw an exception if it is outside of the range ","[","0, maxDurability","]")),(0,n.kt)("h2",{id:"gametest-framework"},(0,n.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update specific GameTest exceptions to be thrown as GameTestError error objects")))}d.isMDXComponent=!0},17138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.19/80/21/tech_sapi_exp",id:"changelog_source/preview/1.19/80/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Form promises are now rejected using typed errors, vs. strings as used previously",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Form promises are now rejected using typed errors, vs. strings as used previously")))}m.isMDXComponent=!0},54274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},97452:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(88247),o=a(63948),l=a(60737);const s={sidebar_position:99999775,title:"1.19.80.21",tags:["Official","Changelog","Preview","1.19"]},u="Minecraft Beta & Preview - 1.19.80.21",c={unversionedId:"official_changelog/preview/1.19/80/21",id:"official_changelog/preview/1.19/80/21",title:"1.19.80.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/80/21.mdx",sourceDirName:"official_changelog/preview/1.19/80",slug:"/official_changelog/preview/1.19/80/21",permalink:"/en/docs/official_changelog/preview/1.19/80/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/80/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999775,frontMatter:{sidebar_position:99999775,title:"1.19.80.21",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.80.22",permalink:"/en/docs/official_changelog/preview/1.19/80/22"},next:{title:"1.19.80.20",permalink:"/en/docs/official_changelog/preview/1.19/80/20"}},m={},p=[],d={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1198021"},"Minecraft Beta & Preview - 1.19.80.21"),(0,n.kt)(i.default,{gameplayChangelog:(0,n.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);