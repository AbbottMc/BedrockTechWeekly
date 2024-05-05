"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77344,31164,10885],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(58168),r=t(96540),l=t(20053),o=t(23104),i=t(56347),s=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function g(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=g(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,u]=d({queryString:t,groupId:n}),[p,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),y=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var y=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,o.a_)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==i&&(g(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),t??a)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(w,(0,n.A)({},e,a)))}function v(e){const a=(0,y.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},80060:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(58168),r=(t(96540),t(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.14/0/1/gameplay",id:"changelog_source/preview/1.14/0/1/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.14/0/1/gameplay.mdx",sourceDirName:"changelog_source/preview/1.14/0/1",slug:"/changelog_source/preview/1.14/0/1/gameplay",permalink:"/en/docs/changelog_source/preview/1.14/0/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.14/0/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:3},{value:"<strong>Changes:</strong>",id:"changes",level:3},{value:"<strong>Known Issues in this beta that will be fixe**</strong>d in a future update:**",id:"known-issues-in-this-beta-that-will-be-fixed-in-a-future-update",level:3},{value:"<strong>Fixes:</strong>",id:"fixes",level:3}],c={toc:u},p="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("h3",{id:"new-features"},(0,r.yg)("strong",{parentName:"h3"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Added Bees!"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bees are cute, fuzzy, neutral mobs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Don\u2019t hurt them, they don\u2019t want to hurt you")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If a bee does sting you, it will leave its stinger in you and eventually die, dropping nothing :(")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bees love pretty flowers and spend their lives gathering pollen from them")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After gathering pollen, bees fly back to their home nest")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bees help you by growing crops while carrying pollen back to the nest")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bees can be bred using flowers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If a bee can't find nectar, after a while it will return home for a bit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If a bee doesn\u2019t have a home nest, it will wander around until it finds one it can use")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bees don\u2019t like the rain and they sleep at night. They will go back to the nest in these cases")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Added Beehives and Nests")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Bee Nests spawn naturally in Flower Forests, Plains, and Sunflower Plains biomes"),(0,r.yg)("li",{parentName:"ul"},"When a bee visits a nest and completes its journey undisturbed, the level of honey increases"),(0,r.yg)("li",{parentName:"ul"},"Max of 5 levels of honey"),(0,r.yg)("li",{parentName:"ul"},"Beehives are crafted by players using honeycomb and wood planks"),(0,r.yg)("li",{parentName:"ul"},"Use a silk touch tool to get the block with the bees stored inside"),(0,r.yg)("li",{parentName:"ul"},"Bee Nests will be destroyed unless you use silk touch"),(0,r.yg)("li",{parentName:"ul"},"Use shears when at full honey to get honeycomb"),(0,r.yg)("li",{parentName:"ul"},"Use a bottle when at full honey to get a honey bottle"),(0,r.yg)("li",{parentName:"ul"},"Campfire smoke calms bees - place one underneath the nest / hive to keep them in chill mode"),(0,r.yg)("li",{parentName:"ul"},"Redstone-friendly!"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Added Honeycomb and Honey Bottles")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Use an empty glass bottle on a hive or nest that is full of honey to get a bottle of honey!"),(0,r.yg)("li",{parentName:"ul"},"Dispensers can now fill bottles with water and honey"),(0,r.yg)("li",{parentName:"ul"},"Dispensers can now shear honeycombs from Bee Nests and Hives"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Added Honeycomb blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"A decorative block that can be crafted with honeycombs!"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Added Honey blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Greatly reduces movement speed and jump height, but also reduce fall damage"),(0,r.yg)("li",{parentName:"ul"},"You can \u201cslide\u201d down a wall of honey blocks to slow your fall (parkour ftw!)"),(0,r.yg)("li",{parentName:"ul"},"Honey Block effects carry through up to \\< 1 block above"),(0,r.yg)("li",{parentName:"ul"},"When a honey block is piston-moved, adjacent blocks are moved too"),(0,r.yg)("li",{parentName:"ul"},"When a honey block is piston-moved, entities on top are moved along with it"),(0,r.yg)("li",{parentName:"ul"},"Sticky Block Support. Use the \u2018BlockProperty::PreventsJumping\u2019 to make it so that the pathfinder won't jump if on one of these blocks and players can't jump when on one of these blocks. Also hooked up level event that spawns terrain particles when prevented from jumping and plays the jump.prevent block sound\xa0")))),(0,r.yg)("h3",{id:"changes"},(0,r.yg)("strong",{parentName:"h3"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Leads can now be used on Polar Bears, Parrots, Ocelots, and Dolphins (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46866"},"MCPE-46866"),")"),(0,r.yg)("li",{parentName:"ul"},"Tweaked the amount of XP dropped by animals to match the Java Edition",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Most animals will now drop 1-3 XP when killed, but Dolphins now drop 0 XP\xa0")))),(0,r.yg)("h3",{id:"known-issues-in-this-beta-that-will-be-fixed-in-a-future-update"},(0,r.yg)("strong",{parentName:"h3"},"Known Issues in this beta that will be fixe**"),"d in a future update:**"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Equipped armour is not visible on player\u2019s character")),(0,r.yg)("h3",{id:"fixes"},(0,r.yg)("strong",{parentName:"h3"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with kelp growth causing lag in specific chunks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50175"},"MCPE-50175"),")\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed the breaking animation for glass on certain packs"),(0,r.yg)("li",{parentName:"ul"},"Capes now appear correctly in the skin picker"),(0,r.yg)("li",{parentName:"ul"},'Fixed an issue that was preventing the "Beam Me Up" achievement from being obtained (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-21425"},"MCPE-21425"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with that caused some skins to show a solid white cape (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52005"},"MCPE-52005"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a render distance issue that could cause an old style (limited) world to not load correctly if a player logged out in a specific corner of that world"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing some capes to not scale to skins correctly in the character creator"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that would cause some selections in the character creator to become unresponsive"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing scripting error messages to show on the Alien Worlds Marketplace pack\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Minecart sounds now load and play correctly"),(0,r.yg)("li",{parentName:"ul"},"Waterlogged blocks are no longer ticked by other Redstone circuits in the same chunk\xa0"),(0,r.yg)("li",{parentName:"ul"},"Armour can once again be equipped correctly from the creative inventory on touch screen devices (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52413"},"MCPE-52413"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing the crossbow to fire immediately after being loaded (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52179"},"MCPE-52179"),")"),(0,r.yg)("li",{parentName:"ul"},"The Frost Walker enchantment once again freezes water correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52788"},"MCPE-52788"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that could cause players to fall from the sky after riding a entity in creative (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52957"},"MCPE-52957"),")"),(0,r.yg)("li",{parentName:"ul"},"Arrows or tridents no longer fall through the ground after being deflected by a shield (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44721"},"MCPE-44721"),")"),(0,r.yg)("li",{parentName:"ul"},"Farmland blocks once again revert into a dirt block when the player jumps on them"),(0,r.yg)("li",{parentName:"ul"},"Placing Armour on an Armour Stand in Creative no longer equips it on the player as well\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Reduced the Fox attack radius to match the Java edition"),(0,r.yg)("li",{parentName:"ul"},"Items held by Foxes are no longer invisible (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51993"},"MCPE-51993"),")"),(0,r.yg)("li",{parentName:"ul"},"Horses now use the correct (newer) model again"),(0,r.yg)("li",{parentName:"ul"},"Improved the accuracy of pathfinding for flying mobs"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The Compass and Clock are now animated correctly again when in the hotbar (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52901"},"MCPE-52901"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Equipped carpets now appear correctly in the Llama inventory again\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The boss health bar now shows correctly when creating custom wither entities\xa0"),(0,r.yg)("li",{parentName:"ul"},"Custom entities once again show the health bar correctly while being ridden")))))}g.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(18228),o=t(19365);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],g={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},81133:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(34922),o=t(80060);const i={sidebar_position:99999943,title:"1.14.0.1",tags:["Official","Changelog","Preview","1.14"]},s="Minecraft Beta - 1.14.0.1 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.14/0/1",id:"official_changelog/preview/1.14/0/1",title:"1.14.0.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.14/0/1.mdx",sourceDirName:"official_changelog/preview/1.14/0",slug:"/official_changelog/preview/1.14/0/1",permalink:"/en/docs/official_changelog/preview/1.14/0/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.14/0/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.14",permalink:"/en/docs/tags/1-14"}],version:"current",sidebarPosition:99999943,frontMatter:{sidebar_position:99999943,title:"1.14.0.1",tags:["Official","Changelog","Preview","1.14"]},sidebar:"changelogSidebar",previous:{title:"1.14.0.2",permalink:"/en/docs/official_changelog/preview/1.14/0/2"},next:{title:"1.13.0.18",permalink:"/en/docs/official_changelog/preview/1.13/0/18"}},c={},p=[],g={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11401-xbox-onewindows-10android"},"Minecraft Beta - 1.14.0.1 (Xbox One/Windows 10/Android)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);