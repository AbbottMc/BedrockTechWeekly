"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84591,31164,43115,53095,80016],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),o=a(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>C});var n=a(58168),o=a(96540),r=a(20053),l=a(23104),i=a(56347),s=a(57485),c=a(31682),u=a(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function g(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=g(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=d({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(g(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?o.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.A)("tabs-container",y.tabList)},o.createElement(v,(0,n.A)({},e,t)),o.createElement(b,(0,n.A)({},e,t)))}function C(e){const t=(0,f.A)();return o.createElement(w,(0,n.A)({key:String(t)},e))}},53127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const r={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/0/54/gameplay",id:"changelog_source/preview/1.17/0/54/gameplay",title:"gameplay",description:"Posted: May 06, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/0/54/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/0/54",slug:"/changelog_source/preview/1.17/0/54/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/0/54/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/54/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Caves &amp; Cliffs - Experimental Features",id:"caves--cliffs---experimental-features",level:2},{value:"Caves &amp; Cliffs - Non-Experimental",id:"caves--cliffs---non-experimental",level:2},{value:"Axolotl",id:"axolotl",level:3},{value:"Powder Snow",id:"powder-snow",level:3},{value:"Azalea Leaf",id:"azalea-leaf",level:3},{value:"Caves and Cliffs",id:"caves-and-cliffs",level:3},{value:"Spore Blossom",id:"spore-blossom",level:3},{value:"Copper",id:"copper",level:3},{value:"Glow Squid",id:"glow-squid",level:3},{value:"Goat",id:"goat",level:3},{value:"Items",id:"items",level:3},{value:"Pointed Dripstone",id:"pointed-dripstone",level:3},{value:"Raw Gold",id:"raw-gold",level:3},{value:"Rooted Dirt",id:"rooted-dirt",level:3},{value:"Spyglass",id:"spyglass",level:3},{value:"Vanilla Parity",id:"vanilla-parity",level:3},{value:"User Interface",id:"user-interface",level:3},{value:"Commands",id:"commands",level:3},{value:"Multiplayer",id:"multiplayer",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Posted:")," May 06, 2021"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,o.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,o.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,o.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,o.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,o.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,o.yg)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,o.yg)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,o.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360094726072/img_874.JPG",alt:"img_874.JPG"})),(0,o.yg)("h2",{id:"caves--cliffs---experimental-features"},"Caves & Cliffs - Experimental Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Minecarts with Chests can also appear in Mineshafts at -y"),(0,o.yg)("li",{parentName:"ul"},"Strongholds will be more hidden in larger caves"),(0,o.yg)("li",{parentName:"ul"},"Fixed a bug where Shulkers would not teleport below y=0 (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121810"},"MCPE-121810"),")")),(0,o.yg)("h2",{id:"caves--cliffs---non-experimental"},"Caves & Cliffs - Non-Experimental"),(0,o.yg)("h3",{id:"axolotl"},"Axolotl"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Axolotl can no longer move on its own while playing dead (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124128"},"MCPE-124128"),")"),(0,o.yg)("li",{parentName:"ul"},"Axolotls no longer play dead on land")),(0,o.yg)("h3",{id:"powder-snow"},"Powder Snow"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Dispensers can now dispense a Powder Snow Block using a Powder Snow Bucket"),(0,o.yg)("li",{parentName:"ul"},"Skeletons no longer freeze when standing inside of Powder Snow, and will transform into strays after 45 seconds (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116781"},"MCPE-116781"),")"),(0,o.yg)("li",{parentName:"ul"},"Mobs can now pathfind properly on top of Powder Snow (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-118214"},"MCPE-118214"),")"),(0,o.yg)("li",{parentName:"ul"},"Vanilla Parity: Powder Snow can no longer support Scaffolding (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120947"},"MCPE-120947"),")"),(0,o.yg)("li",{parentName:"ul"},"Vanilla Parity: Mining time of Powder Snow Block now matches mining time in Java Edition"),(0,o.yg)("li",{parentName:"ul"},"Players can no longer Jump on top of Powder Snow to avoid sinking (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-112023"},"MCPE-112023"),")")),(0,o.yg)("h3",{id:"azalea-leaf"},"Azalea Leaf"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Azalea and Flowering Azalea leaves now drop themself when mined with Silk Touch tools")),(0,o.yg)("h3",{id:"caves-and-cliffs"},"Caves and Cliffs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Infested variants of Deepslate can be found in Extreme Hills biome"),(0,o.yg)("li",{parentName:"ul"},"Block of Copper is now crafted with 9 Copper Ingots"),(0,o.yg)("li",{parentName:"ul"},"Block of Copper can be crafted down into 9 Copper Ingots"),(0,o.yg)("li",{parentName:"ul"},"Copper Ore and Deepslate Copper now drop 2-3 Raw Copper"),(0,o.yg)("li",{parentName:"ul"},"Raw Iron, Copper, and Gold item textures have been updated"),(0,o.yg)("li",{parentName:"ul"},"Block of Raw Iron, Copper, and Gold textures have been updated"),(0,o.yg)("li",{parentName:"ul"},"Compass and Clock textures have been updated")),(0,o.yg)("h3",{id:"spore-blossom"},"Spore Blossom"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Spore Blossom no longer survives in water")),(0,o.yg)("h3",{id:"copper"},"Copper"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Copper now has correct graphical and sound effects when waxing/dewaxing (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121827"},"MCPE-121827"),")"),(0,o.yg)("li",{parentName:"ul"},"Underside of leaves now render correctly when placed on top of Copper Slabs")),(0,o.yg)("h3",{id:"glow-squid"},"Glow Squid"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Squid and Glow Squid now make a specific sound when they let ink out"),(0,o.yg)("li",{parentName:"ul"},"Old signs no longer glow when being dyed (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117835"},"MCPE-117835"),")")),(0,o.yg)("h3",{id:"goat"},"Goat"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Increased chances of getting screamer goat by breeding screamer goat with non-screamer goat")),(0,o.yg)("h3",{id:"items"},"Items"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Fixed an issue where first person offhand items were rendered when zooming in with the Spyglass (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125825"},"MCPE-125825"),")")),(0,o.yg)("h3",{id:"pointed-dripstone"},"Pointed Dripstone"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Stalactites now drip water a bit more often when filling Cauldrons")),(0,o.yg)("h3",{id:"raw-gold"},"Raw Gold"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Piglins now admire Block of Raw Gold"),(0,o.yg)("li",{parentName:"ul"},"Piglins now admire Raw Gold")),(0,o.yg)("h3",{id:"rooted-dirt"},"Rooted Dirt"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Tiling Rooted Dirt turns does no longer instantly turn it into Farmland block")),(0,o.yg)("h3",{id:"spyglass"},"Spyglass"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Spyglass is now part of the "Equipment" category in the Creative inventory (',(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126079"},"MCPE-126079"),")")),(0,o.yg)("h3",{id:"vanilla-parity"},"Vanilla Parity"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Falling blocks now break when landing on Shulkers")),(0,o.yg)("h3",{id:"user-interface"},"User Interface"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Fixed controller cursor sensitivity scaling (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33868"},"MCPE-33868"),")"),(0,o.yg)("li",{parentName:"ul"},"Fixed a bug preventing users from reassigning key 'E' in \"Keyboard & Mouse\" settings (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124224"},"MCPE-124224"),")")),(0,o.yg)("h3",{id:"commands"},"Commands"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Fixed issue where Minecart with Command Block was not affected by the 'CommandBlocksEnabled' gamerule (",(0,o.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-93666"},"MCPE-93666"),")")),(0,o.yg)("h3",{id:"multiplayer"},"Multiplayer"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The '/kick' command works properly if cheats and command blocks are disabled, and it no longer uses target selectors")))}g.isMDXComponent=!0},94587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));a(88502);const r={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/0/54/tech",id:"changelog_source/preview/1.17/0/54/tech",title:"tech",description:"New Experimental Feature: Volumes!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/0/54/tech.mdx",sourceDirName:"changelog_source/preview/1.17/0/54",slug:"/changelog_source/preview/1.17/0/54/tech",permalink:"/en/docs/changelog_source/preview/1.17/0/54/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/54/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"New Experimental Feature: Volumes!\xa0",id:"new-experimental-feature-volumes",level:3},{value:"Mobs",id:"mobs",level:3},{value:"GameTest Framework",id:"gametest-framework",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"new-experimental-feature-volumes"},"New Experimental Feature: Volumes!\xa0"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Create volumes in your world: simply create a "volumes" folder in a saved world, and put json files in there - 1 json file per volume. More\xa0information\xa0can be found on the\xa0beta behaviour pack documentation\xa0'),(0,o.yg)("li",{parentName:"ul"},"Currently, you can attach a fog -\xa0minecraft\xa0or your own custom fog - to a volume. When the player enters the volume, the fog will take effect\xa0")),(0,o.yg)("p",null,"General"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Added AddVolumeEntityPacket that contains information of a volume entity including its net ID and NBT containing information about the volume's definition and components, which will be added to the client's registry"),(0,o.yg)("li",{parentName:"ul"},"Added RemoveVolumeEntityPacket that contains a volume entity's net ID to remove it from the client's registry")),(0,o.yg)("h3",{id:"mobs"},"Mobs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Added a new optional flag "use',"_","simplified","_",'breeding" to "minecraft:genetics" component. When this flag is set to true, the offspring never inherits hidden alleles of parents as main alleles and main as hidden. This allows to implement simple breeding logic easier')),(0,o.yg)("h3",{id:"gametest-framework"},"GameTest Framework"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Components"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"[","Removed","]"," function setColor(color : Number)"),(0,o.yg)("li",{parentName:"ul"},"property value : Number - Gets or sets the color of the entity"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Added additional component interfaces. movement, navigation, healable, breathable, ageable, and tameable components can be referenced via entity.getComponent(componentName : string).")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"minecraft:color")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'Container - New interface for interacting with entity containers. Can be referenced via entity.getComponent("inventory").container')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function setItem(slot : Number, itemStack : ItemStack) - Adds itemStack to the container at the given slot")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function getItem(slot : Number) : ItemStack - Gets the itemStack at the given slot")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function addItem(itemStack : ItemStack) - Adds the given itemStack to the first available slot of the container")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function transferItem(fromSlot : Number, toSlot : Number, toContainer : Container) - Transfers an ItemStack from fromSlot of the container to toSlot of toContainer")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function swapItems(slot : Number, otherSlot : Number, otherContainer : Container) - Swaps ItemStacks between slot of the container and otherSlot of otherContainer")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function worldLocation(relativeLocation : BlockLocation) - Transforms the coordinates of given GameTest location to its corresponding world location")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"function relativeLocation(worldLocation : BlockLocation) - Transforms the coordinates of given world location to its corresponding GameTest location"))))}g.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(58168),o=(a(96540),a(15680)),r=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.A,{mdxType:"Tabs"},(0,o.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,o.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(58168),o=(a(96540),a(15680)),r=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,o.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},84232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var n=a(58168),o=(a(96540),a(15680)),r=a(34922),l=a(53127),i=a(94587);const s={sidebar_position:99999867,title:"1.17.0.54",tags:["Official","Changelog","Preview","1.17"]},c="Minecraft Beta - 1.17.0.54 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/0/54",id:"official_changelog/preview/1.17/0/54",title:"1.17.0.54",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/0/54.mdx",sourceDirName:"official_changelog/preview/1.17/0",slug:"/official_changelog/preview/1.17/0/54",permalink:"/en/docs/official_changelog/preview/1.17/0/54",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/0/54.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999867,frontMatter:{sidebar_position:99999867,title:"1.17.0.54",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.0.56",permalink:"/en/docs/official_changelog/preview/1.17/0/56"},next:{title:"1.17.0.52",permalink:"/en/docs/official_changelog/preview/1.17/0/52"}},p={},g=[],m={toc:g},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"minecraft-beta---117054-xbox-onewindows-10android"},"Minecraft Beta - 1.17.0.54 (Xbox One/Windows 10/Android)"),(0,o.yg)(r.default,{gameplayChangelog:(0,o.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,o.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);