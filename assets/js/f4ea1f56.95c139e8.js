"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[28730,8304,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>o});var n=a(67294),r=a(62706);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function o(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[o,s]=l({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),m(i))}}),[u,c]=l({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||p()};return(0,n.useEffect)((()=>(o(),u(),t(r.p.isHidden()),()=>{s(),c()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>l});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},81122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.14/0/gameplay",id:"changelog_source/stable/1.14/0/gameplay",title:"gameplay",description:"Posted:\xa0December 10, 2019",source:"@site/docs/changelog_source/stable/1.14/0/gameplay.mdx",sourceDirName:"changelog_source/stable/1.14/0",slug:"/changelog_source/stable/1.14/0/gameplay",permalink:"/docs/changelog_source/stable/1.14/0/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.14/0/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:"),"\xa0December 10, 2019"),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PlayStation\xae4")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Welcome PlayStation\xae4 players to the Bedrock version of Minecraft! All Bedrock platforms can now cross-play with PS4\u2122 consoles. More information can be found in the ",(0,r.kt)("a",{parentName:"li",href:"https://help.minecraft.net/hc/en-us/articles/360037725571-Minecraft-for-PlayStation-TM-4-FAQ"},"Minecraft for PlayStation\xae4 FAQ"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bees!")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bees are cute, fuzzy, neutral mobs"),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t hurt them, they don\u2019t want to hurt you"),(0,r.kt)("li",{parentName:"ul"},"Bees love pretty flowers and spend their lives gathering pollen from them"),(0,r.kt)("li",{parentName:"ul"},"After gathering pollen, bees fly back to their nest"),(0,r.kt)("li",{parentName:"ul"},"If a bee can't find pollen, it will return home"),(0,r.kt)("li",{parentName:"ul"},"If a bee doesn\u2019t have a home nest, it will wander around until it finds one it can use"),(0,r.kt)("li",{parentName:"ul"},"Bees don\u2019t like the rain and they sleep at night. They will return to their nest in these cases"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bee Nests and Beehives")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bee Nests generate in Flower Forests, Plains, and Sunflower Plains biomes"),(0,r.kt)("li",{parentName:"ul"},"When a bee visits a nest and completes its journey undisturbed, the level of honey increases"),(0,r.kt)("li",{parentName:"ul"},"Using shears on a full hive or nest will harvest Honeycomb and using a glass bottle will give a Honey Bottle"),(0,r.kt)("li",{parentName:"ul"},"Campfire smoke calms bees - Place one underneath the nest or hive to keep them in chill mode"),(0,r.kt)("li",{parentName:"ul"},"Redstone friendly! Dispensers can shear honeycombs from hives and nests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Honey Block")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Greatly reduces movement speed and jump height, but also reduces fall damage"),(0,r.kt)("li",{parentName:"ul"},"You can \u201cslide\u201d down a wall of honey blocks to slow your fall (Parkour FTW!)"),(0,r.kt)("li",{parentName:"ul"},"When a honey block is piston-moved, adjacent blocks also move"),(0,r.kt)("li",{parentName:"ul"},"When a honey block is piston-moved, entities on top are moved along with it"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Honeycomb Block")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A decorative block that can be crafted with Honeycomb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New Achievements")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bee our guest - Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees (15G)"),(0,r.kt)("li",{parentName:"ul"},"Total Beelocation - Move and place a Bee Nest, with 3 bees inside, using Silk Touch (30G)"),(0,r.kt)("li",{parentName:"ul"},"Sticky Situation - Slide down a honey block to slow your fall (30G)")))),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated to a fresh menu background full of bees"),(0,r.kt)("li",{parentName:"ul"},"Leads can now be used on Polar Bears, Parrots, Ocelots, and Dolphins (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46866"},"MCPE-46866"),")"),(0,r.kt)("li",{parentName:"ul"},"Dispensers can now fill bottles with water and honey"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the amount of XP dropped by animals to match Java Edition",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Most animals will now drop 1-3 XP when killed, but Dolphins now drop 0 XP"))),(0,r.kt)("li",{parentName:"ul"},"Item tags can now be hidden in the inventory using the '/gamerule\xa0showtags' command")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cr**"),"ashes / Performance**"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when signing into Xbox Live on Android"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with kelp growth causing lag in specific chunks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50175"},"MCPE-50175"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a render distance issue that could cause an old style (limited) world to not load correctly if a player logged out in a specific corner of that world"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was causing scripting error messages to show on the Alien Worlds Marketplace world"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that was sometimes causing chests to become invisible (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52790"},"MCPE-52790"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could sometimes cause touch screen controls to become inverted (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50256"},"MCPE-50256"),")"),(0,r.kt)("li",{parentName:"ul"},"Players once again experience kinetic energy and get dead upon gliding into walls at high speed with Elytra (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-21141"},"MCPE-21141"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer initiate swimming in shallow water"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Improved the accuracy of pathfinding for flying mobs"),(0,r.kt)("li",{parentName:"ul"},"Pillager Patrols can no longer spawn in the End or Nether dimensions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51481"},"MCPE-51481"),")"),(0,r.kt)("li",{parentName:"ul"},"Baby Pigmen now hold their swords in their hands, rather than around their necks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53454"},"MCPE-53454"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updated the Slime Block texture to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was causing sugar cane to break when a nearby water source became waterlogged (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52314"},"MCPE-52314"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Arrows and tridents no longer fall through the ground after being deflected by a shield (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44721"},"MCPE-44721"),")"),(0,r.kt)("li",{parentName:"ul"},"Dragon Heads now appear at the correct height (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53129"},"MCPE-53129"),")"),(0,r.kt)("li",{parentName:"ul"},"Buckets can once again be used to milk cows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54623"},"MCPE-54623"),")"),(0,r.kt)("li",{parentName:"ul"},"Milk buckets can again be used to craft cakes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52774"},"MCPE-52774"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed acacia leaves sometimes becoming stuck in the inventory\xa0hotbar"),(0,r.kt)("li",{parentName:"ul"},"Placing Armor on an Armor Stand in Creative mode no longer equips it on the player as well"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Character Creator")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Various fixes to the Character Creator"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was causing worn items to transfer between Character Creator models unexpectedly"),(0,r.kt)("li",{parentName:"ul"},"Adding or removing the Founder's Cape now updates the skin in-game without needing to restart"),(0,r.kt)("li",{parentName:"ul"},"Platform restricted skins can now be previewed in the Character Creator"),(0,r.kt)("li",{parentName:"ul"},"Fixed capes not rendering in some skin packs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54181"},"MCPE-54181"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed another issue that was causing player skins to revert to a default Alex or Steve after relaunching the game"),(0,r.kt)("li",{parentName:"ul"},"Skins that don't roam to Minecraft Earth no longer display 'Usable Everywhere' in the Character Creator"),(0,r.kt)("li",{parentName:"ul"},"Equipping a new custom skin will now update the player model without needing to restart the game"),(0,r.kt)("li",{parentName:"ul"},"Optimized the size of Character Creator skins to improve performance when playing in multiplayer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed the held item bobbing animation when moving in first person view (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51212"},"MCPE-51212"),")"),(0,r.kt)("li",{parentName:"ul"},"The block breaking animation will again show if a block is below water when the player is above"),(0,r.kt)("li",{parentName:"ul"},"The player's hand no longer disappears when gliding with Elytra (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53092"},"MCPE-53092"),")"),(0,r.kt)("li",{parentName:"ul"},"Water now renders correctly when Kelp is placed next to a Glass block"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a navigation issue that could cause an incorrect focus change when choosing an option from the pause menu"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause menu flickering when navigating through the Character Creator"),(0,r.kt)("li",{parentName:"ul"},"The 'See Pack in Store' button in the Character Creator can now be highlighted and selected when using a controller"),(0,r.kt)("li",{parentName:"ul"},"Fixed some misspelled splash text"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Custom entities once again show their health bar correctly while being ridden"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with particle billboarding that was causing them to appear flipped in the wrong direction"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with pivot points for custom geometry cube models"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that was causing tamed entity damage to be counted as coming from mounted players")))),(0,r.kt)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.kt)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated templates for 1.14.0 with new resources, BEEhaviors, documentation, and example packs can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"https://minecraft.net/addons"},"minecraft.net/addons"))))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(67294),l=a(3905),i=a(31792),o=a(85162),s=a(18386);const u={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],h={toc:d};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{rightElement:(0,l.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(o.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(r.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},15750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(61499),i=a(81122);const o={sidebar_position:99999947,title:"1.14.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.14"]},s="Minecraft - Buzzy Bees - 1.14.0 (Bedrock)",u={unversionedId:"official_changelog/stable/1.14/0",id:"official_changelog/stable/1.14/0",title:"1.14.0",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.14/0.mdx",sourceDirName:"official_changelog/stable/1.14",slug:"/official_changelog/stable/1.14/0",permalink:"/docs/official_changelog/stable/1.14/0",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.14/0.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.14",permalink:"/docs/tags/1-14"}],version:"current",sidebarPosition:99999947,frontMatter:{sidebar_position:99999947,title:"1.14.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.14"]},sidebar:"changelogSidebar",previous:{title:"1.14.1",permalink:"/docs/official_changelog/stable/1.14/1"},next:{title:"1.14.0",permalink:"/docs/official_changelog/stable/1.14/0"}},c={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---buzzy-bees---1140-bedrock"},"Minecraft - Buzzy Bees - 1.14.0 (Bedrock)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);