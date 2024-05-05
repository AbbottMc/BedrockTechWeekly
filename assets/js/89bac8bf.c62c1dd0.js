"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60400,72562,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>p});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,p=c["".concat(s,".").concat(h)]||c[h]||g[h]||o;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>i});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),g(l))}}),[u,d]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),c=()=>{r.k.switchHidden(),t(r.k.isHidden())},g=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||c()};return(0,n.useEffect)((()=>(i(),u(),t(r.k.isHidden()),()=>{s(),d()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:c},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),u=a(31682),d=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=p({queryString:a,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(g(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),d?r.createElement("div",{className:"w-full"},d):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(w,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},58500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay",title:"gameplay",description:"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds.",source:"@site/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay",permalink:"/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.0_build_3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],d={toc:u},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Please remember that this beta is for Android only. The bug fixes and changes made for other platforms will not reflect until the full release of this update. Also, we advise all of our beta players to make back-ups of their saved games before running them on new beta builds."),(0,r.yg)("h2",{id:"tweaks"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tweaked the renderchunks cache so it is now built in the background and on demand."),(0,r.yg)("li",{parentName:"ul"},"Shulkers now teleport smoother."),(0,r.yg)("li",{parentName:"ul"},"Health bars for bosses now update and appear properly."),(0,r.yg)("li",{parentName:"ul"},"Tweaked the flight time of elytra so it should behave as expected with the Unbreaking enchantment, also tweaked other elytra durability issues."),(0,r.yg)("li",{parentName:"ul"},"Moved position of chat messages so they don't cover life points, armor, etc."),(0,r.yg)("li",{parentName:"ul"},"Tweaked lighting in The End so it doesn't look upside down."),(0,r.yg)("li",{parentName:"ul"},"Tweaked the time it takes to catch something with a fishing rod so it doesn't take longer than other versions."),(0,r.yg)("li",{parentName:"ul"},"Moving between tabs in menus while using the LB/RB on a controller now behaves as expected."),(0,r.yg)("li",{parentName:"ul"},"The /locate command was added back but it only works for strongholds."),(0,r.yg)("li",{parentName:"ul"},"Removed bold headings from the Manifest Validation screen."),(0,r.yg)("li",{parentName:"ul"},"Fixed the Ender dragon's shadow so it isn't extraordinarily large."),(0,r.yg)("li",{parentName:"ul"},"Pumpkin & melon seed textures now render correctly."),(0,r.yg)("li",{parentName:"ul"},"Fixed lighting for water."),(0,r.yg)("li",{parentName:"ul"},"Added a message on the World Templates screen to tell players how you can upload a world to your Realm.")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Furnaces and enchanting tables no longer melt igloos."),(0,r.yg)("li",{parentName:"ul"},"You can ride on tamed horses that are on leads."),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the top part of a chorus plant would appear as if it was there after the chorus plant was broken (even though that part wasn't actually there anymore)."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred after selecting the Seed Picker."),(0,r.yg)("li",{parentName:"ul"},'Fixed an issue where you got an ""unable to connect to the store"" message instead of being able to get skin packs and texture packs (Rift & Gear VR only).'),(0,r.yg)("li",{parentName:"ul"},"Using LB/RB on a controller to select tabs in options now correctly highlights any tab that has behavior or resource packs."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could happen if you logged out while in the End Poem, logged back into the End Poem, and had global entities in the world."),(0,r.yg)("li",{parentName:"ul"},"Fence gates, daylight sensors, and observers no longer stop redstone wire from transferring the signal any further."),(0,r.yg)("li",{parentName:"ul"},"End rods can now be placed on the bottom of blocks even if there are blocks around them."),(0,r.yg)("li",{parentName:"ul"},"Eyes of Ender are no longer duplicated when placed in an End Portal frame on an infinite world."),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where mobs would take fall damage when teleported."),(0,r.yg)("li",{parentName:"ul"},"Vertically placed end rods now break gravity-affected blocks that fall on them."),(0,r.yg)("li",{parentName:"ul"},"Ender dragon audio is no longer present in the Overworld when a player is in The End."),(0,r.yg)("li",{parentName:"ul"},"Gliding on elytra can now be cancelled by jumping or by running into walls or ladders."),(0,r.yg)("li",{parentName:"ul"},"When in third-person view, your character non longer looks like it's spinning around when you look up and down while gliding on elytra."),(0,r.yg)("li",{parentName:"ul"},"Fixed some issues with Realms invites and toast notifications of invites."),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer run exceptionally fast after being hit."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash on the host player's device when one of their connected friends left a LAN game."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could happen when attaching a graphics debugger."),(0,r.yg)("li",{parentName:"ul"},"The dragon's head texture no longer changes color when in your hand."),(0,r.yg)("li",{parentName:"ul"},"Endermen again teleport when a splash potion is thrown at them."),(0,r.yg)("li",{parentName:"ul"},"End gateway fountain now always appears when the Ender dragon is killed."),(0,r.yg)("li",{parentName:"ul"},"Boss music is now present during the Ender dragon fight."),(0,r.yg)("li",{parentName:"ul"},"Light level below blocks placed at build limit height now correctly updates after the blocks are broken."),(0,r.yg)("li",{parentName:"ul"},"Fixed The End crashing when a player went through an End Portal."),(0,r.yg)("li",{parentName:"ul"},"The sound effect for an ender pearl now plays correctly and can be heard."),(0,r.yg)("li",{parentName:"ul"},"Water can now protect obsidian blocks from getting destroyed by the Wither's spawn explosion."),(0,r.yg)("li",{parentName:"ul"},"The invisibility effect is no longer affected by a player's personal game mode changing."),(0,r.yg)("li",{parentName:"ul"},"Shulkers that are hanging from the ceilings in End Cities no longer die of suffocation."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when a player attacked the Wither with a melee attack."),(0,r.yg)("li",{parentName:"ul"},"The cancel button now appears on the music download dialog."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when there was any input from a controller while the game was launching (Android & Fire only)."),(0,r.yg)("li",{parentName:"ul"},"Gear VR hotbar is no longer stuck at the center of view (Gear VR only)."),(0,r.yg)("li",{parentName:"ul"},"Slime blocks again display when held in your hand (VR only)."),(0,r.yg)("li",{parentName:"ul"},"You can no longer duplicate items with item frames."),(0,r.yg)("li",{parentName:"ul"},"Global texture packs with custom UI textures now apply on the start screen without having to restart the game."),(0,r.yg)("li",{parentName:"ul"},"The Ender dragon's death sequence now looks the same whether you are hosting a game or playing on someone else's game."),(0,r.yg)("li",{parentName:"ul"},"You now need to stop riding a pig or a minecart in order to use an End Portal to travel to The End."),(0,r.yg)("li",{parentName:"ul"},"The End Portal now always teleports a player immediately (even if you fly into it)."),(0,r.yg)("li",{parentName:"ul"},"Bottles o' Enchanting & splash potions no longer jitter in the air when thrown."),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where if a player went to sleep while it was raining in a Realm, it would continue raining when the player woke up but the rain would be visually gone. This made it appear as though sun was not burning zombies/skeletons, fires went out quickly without explanation, and made cauldrons fill up mysteriously. Now it actually does stop raining!"),(0,r.yg)("li",{parentName:"ul"},"Villages now spawn again naturally with different types of villagers instead of just farmers."),(0,r.yg)("li",{parentName:"ul"},"Iron bar cages around Ender crystals now respawn when the Ender dragon is respawned."),(0,r.yg)("li",{parentName:"ul"},"Lingering potions now have a throwing sound."),(0,r.yg)("li",{parentName:"ul"},"All kinds of chests no longer have flickering sides in Cartoon, City, and Natural texture packs. The front of trapped chests is now correct in texture packs as well."),(0,r.yg)("li",{parentName:"ul"},"Arrows no longer turn black after hitting opaque blocks."),(0,r.yg)("li",{parentName:"ul"},"Arrows now bounce when hitting closed shulkers instead of disappearing."),(0,r.yg)("li",{parentName:"ul"},"Redstone comparator interaction with highly powered opaque blocks now works the way it does on other versions."),(0,r.yg)("li",{parentName:"ul"},"Pressure plates no longer get stuck in a pressed down position."),(0,r.yg)("li",{parentName:"ul"},"Farmer villagers now harvest fully grown carrots and potatoes."),(0,r.yg)("li",{parentName:"ul"},"Shulkers now lift gravity-affected blocks by opening & closing which causes the block to drop instead of teleporting away from the block."),(0,r.yg)("li",{parentName:"ul"},"Donkeys/mules/horses now make appropriate reactions to different food items."),(0,r.yg)("li",{parentName:"ul"},"If you use commands to try to give a player a stack of items greater than the max stack size, you now only get one max stack of the item instead of an error."),(0,r.yg)("li",{parentName:"ul"},"When a player gets hit by a shulker and levitates, the player now sees the correct levitation effect icon."),(0,r.yg)("li",{parentName:"ul"},"The appearance of leaves blocks is now consistent no matter what blocks you place next to them."),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where elytra activation was delayed."),(0,r.yg)("li",{parentName:"ul"},"Various bug fixes for the Plastic, Fantasy, City, Cartoon, and Natural texture packs."),(0,r.yg)("li",{parentName:"ul"},"Fog now implemented for End Portals & End Gateways."),(0,r.yg)("li",{parentName:"ul"},'""Could not connect: outdated server"" message now displays when you try to join a pre-0.16 version server instead of the incorrect ""Disconnected from Server"" message.'),(0,r.yg)("li",{parentName:"ul"},"Elytra now has roll animations."),(0,r.yg)("li",{parentName:"ul"},"Mobs now behave properly regardless of block type (no more spinning on blocks made of half-blocks!)"),(0,r.yg)("li",{parentName:"ul"},"Tamed animals now teleport with the player into The End or the Nether (if they aren't sitting)."),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer get stuck up ladders."),(0,r.yg)("li",{parentName:"ul"},"End Portals can no longer be activated in existing Old World types."),(0,r.yg)("li",{parentName:"ul"},"Enchanted items have shiny effects again (VR only)."),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where standing on a block next to an End Portal would teleport you as if you deliberately went into an End Portal."),(0,r.yg)("li",{parentName:"ul"},"Snow layers placed against other non-full blocks no longer delete the adjacent block."),(0,r.yg)("li",{parentName:"ul"},"Using spawn eggs in Survival mode now results in an egg being used and removed from your inventory."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when you teleported away from the Ender dragon during the summoning process."),(0,r.yg)("li",{parentName:"ul"},"You can't just walk through shulkers anymore."),(0,r.yg)("li",{parentName:"ul"},"Worlds downloaded from Realms now correctly display the world name."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when you selected a Realm invite message multiple times and then accepted or declined the invitation."),(0,r.yg)("li",{parentName:"ul"},'""You haven\'t added anyone to your friend\'s list!"" message in Realms now displays properly (Android Galaxy Tablet only).'),(0,r.yg)("li",{parentName:"ul"},"Head icons are now visible on the hotbar when the inventory is opened."),(0,r.yg)("li",{parentName:"ul"},"Mobs no longer jump and spin around if they move on to a bed."),(0,r.yg)("li",{parentName:"ul"},"You can see the point-of-view change when sneaking/crouching in immersive mode (VR only)."),(0,r.yg)("li",{parentName:"ul"},"Chat messages now only show up once!"),(0,r.yg)("li",{parentName:"ul"},"UI performance no longer gets worse the longer you use the UI when deleting items."),(0,r.yg)("li",{parentName:"ul"},"Sliders now behave properly on Android & iOS devices when using a controller."),(0,r.yg)("li",{parentName:"ul"},"The End Poem now has a skip button appear if you tap on the screen on devices without a back button."),(0,r.yg)("li",{parentName:"ul"},"The End Dragon continues to move/update regardless of how far away you are from it."),(0,r.yg)("li",{parentName:"ul"},"Dragon breath clouds are now the correct color."),(0,r.yg)("li",{parentName:"ul"},"All file extension types we support on Android now should work on Gear VR (Gear VR only)."),(0,r.yg)("li",{parentName:"ul"},"The hunger bar no longer depletes exceptionally fast when in a Realm."),(0,r.yg)("li",{parentName:"ul"},"Fixed some lag issues when placing gravity-affected blocks in multiplayer."),(0,r.yg)("li",{parentName:"ul"},"Chorus fruit and ender pearls now have a cooldown of 1 second."),(0,r.yg)("li",{parentName:"ul"},"When filled with lingering potions, dispensers now correctly shoot them (instead of magically transforming them into eggs when they shoot out!)"),(0,r.yg)("li",{parentName:"ul"},"Tools make breaking noises when they break again (Realms only)."),(0,r.yg)("li",{parentName:"ul"},"Dragon eggs now teleport when you try to mine them in Survival."),(0,r.yg)("li",{parentName:"ul"},"Fixed a duplication glitch when hitting something."),(0,r.yg)("li",{parentName:"ul"},"Game no longer hangs when saving a Realm to a device (Realms only)."),(0,r.yg)("li",{parentName:"ul"},"You are now teleported when you eat chorus fruit."),(0,r.yg)("li",{parentName:"ul"},"Blocks held in your hand are no longer larger than they should be."),(0,r.yg)("li",{parentName:"ul"},"Bows can no longer be pulled back if you're out of arrows."),(0,r.yg)("li",{parentName:"ul"},"Squid no longer disappear as soon as they reach the surface of water (Realms only)."),(0,r.yg)("li",{parentName:"ul"},"Diamonds can now be found randomly in generated blacksmith chests."),(0,r.yg)("li",{parentName:"ul"},"Lingering potions of decay now have the correct texture."),(0,r.yg)("li",{parentName:"ul"},"Various zombie bug fixes."),(0,r.yg)("li",{parentName:"ul"},"Various rabbit bug fixes."),(0,r.yg)("li",{parentName:"ul"},"Various chorus plant fixes."),(0,r.yg)("li",{parentName:"ul"},"If you hit a spider in the daytime, nearby spiders won't try to attack you as well."),(0,r.yg)("li",{parentName:"ul"},"You no longer keep your armor when you die (it drops like everything else)."),(0,r.yg)("li",{parentName:"ul"},"Fixed shulker health."),(0,r.yg)("li",{parentName:"ul"},"Rain, smoke particles, and shadows are no longer visible when you're inside lava."),(0,r.yg)("li",{parentName:"ul"},"Chests no longer get stuck looking as though they are open."),(0,r.yg)("li",{parentName:"ul"},"Mobs again spawn with enchanted items & with the appropriate spawn/drop rate."),(0,r.yg)("li",{parentName:"ul"},"Endermites no longer gain super speed after reloading a world."),(0,r.yg)("li",{parentName:"ul"},"Undead mobs no longer burn at night when they're close to The Wither."),(0,r.yg)("li",{parentName:"ul"},"End gateways now make the appropriate beams when created/used."),(0,r.yg)("li",{parentName:"ul"},"World generation from seeds is now totally consistent between PE & Win 10."),(0,r.yg)("li",{parentName:"ul"},"Fixed signs and mob heads so they are placed facing direction based on the player's direction from a block."),(0,r.yg)("li",{parentName:"ul"},"Pig saddle sounds can now be heard."),(0,r.yg)("li",{parentName:"ul"},"You can now hear the summoning sound of the Wither."),(0,r.yg)("li",{parentName:"ul"},"Experience orbs no longer orbit your head when you pick up many of them at once."),(0,r.yg)("li",{parentName:"ul"},"Iron golems you create will no longer ever attack you."),(0,r.yg)("li",{parentName:"ul"},"Undead mobs no longer burn in The End."),(0,r.yg)("li",{parentName:"ul"},"The Ender dragon no longer looks like it's taking fire damage when it is hit with an arrow while sitting."),(0,r.yg)("li",{parentName:"ul"},"Resource pack images no longer show up in your device's picture gallery (Android only)."),(0,r.yg)("li",{parentName:"ul"},"Clouds are no longer rendered on top of players who are at or above cloud altitude."),(0,r.yg)("li",{parentName:"ul"},"Shulker bullets are now destroyed when attacked."),(0,r.yg)("li",{parentName:"ul"},"Shulkers now deal the correct amount of damage."),(0,r.yg)("li",{parentName:"ul"},"Trapped chests no longer look the same as normal chests in your inventory, hotbar, or when dropped in the world."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that happened when a player got out of a minecart and then destroyed it."),(0,r.yg)("li",{parentName:"ul"},"Tamed animals no longer take damage when you take damage from a potion."),(0,r.yg)("li",{parentName:"ul"},"Endermen no longer have status effects applied from tipped arrows (because they teleported away before they were hit)."),(0,r.yg)("li",{parentName:"ul"},"Enchanted flame & power bows work again & apply the effect/damage to mobs correctly."),(0,r.yg)("li",{parentName:"ul"},"You can no longer destroy an End portal with water."),(0,r.yg)("li",{parentName:"ul"},"You can again walk from a slab to a block with carpet on top of it."),(0,r.yg)("li",{parentName:"ul"},"Arrows fired from dispensers can be retrieved again."),(0,r.yg)("li",{parentName:"ul"},"Boats and minecarts now make sounds when they are broken (MCPE only)."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when a player would spam the Sign in For Free button on the Xbox Live sign-in screen."),(0,r.yg)("li",{parentName:"ul"},"The first hotbar slot is no longer always highlighted after re-entering a world."),(0,r.yg)("li",{parentName:"ul"},"When you have a piece of armor in your hand and right click, it equips it if that slot is free."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when accessing settings on Realms (Realms only)."),(0,r.yg)("li",{parentName:"ul"},"Players can now sleep in partially-covered beds without suffocating."),(0,r.yg)("li",{parentName:"ul"},"Ghast fireballs set blocks on fire again."),(0,r.yg)("li",{parentName:"ul"},"Endermen again teleport after taking damage."),(0,r.yg)("li",{parentName:"ul"},"You hear the sound again when you are taking damage from drowning."),(0,r.yg)("li",{parentName:"ul"},"You can now hear the bubbling sound of fresh, hot lava!"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where items wouldn't get placed correctly into item frames."),(0,r.yg)("li",{parentName:"ul"},"Fixed the textures for the furnace, dispenser, and dropper when dropped in the world, in your hand, or in an item frame."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that happened when hostile mobs died."),(0,r.yg)("li",{parentName:"ul"},"Now only the shulker's shell turns invisible when under the invisibility status effect."),(0,r.yg)("li",{parentName:"ul"},"The Wither is now healed by Arrows of Harming."),(0,r.yg)("li",{parentName:"ul"},"Endermites now despawn after 2 minutes unless you name them with a name tag."),(0,r.yg)("li",{parentName:"ul"},"TTS now reads output from say, tell, and whisper commands."),(0,r.yg)("li",{parentName:"ul"},"Cave spiders now apply the poison effect when they attack you."),(0,r.yg)("li",{parentName:"ul"},"The /toggledownfall command now toggles off rain on Realms (Realms only)."),(0,r.yg)("li",{parentName:"ul"},"You can no longer join a game that has multiplayer disabled by manually adding the IP address."),(0,r.yg)("li",{parentName:"ul"},"You can again connect to a Xbox Live account on Fire TV (Fire TV only)."),(0,r.yg)("li",{parentName:"ul"},"Cursor keys now work on Android (Android only)."),(0,r.yg)("li",{parentName:"ul"},"Fixed item transfer so it automatically moves the stack of items (MCPE only)."),(0,r.yg)("li",{parentName:"ul"},"Brewing stands will now stop looking like they're still brewing even when they are not."),(0,r.yg)("li",{parentName:"ul"},"When using the MCPE UI on Win 10, scrolling no longer changes the hot bar selection (Win 10 only)."),(0,r.yg)("li",{parentName:"ul"},"Fixed lag when riding an animal/minecart."),(0,r.yg)("li",{parentName:"ul"},"Hovering over the chat with touch controls while controlling the camera no longer stops the camera from turning."),(0,r.yg)("li",{parentName:"ul"},"Destroying an ice block no longer also destroys the block underneath it."),(0,r.yg)("li",{parentName:"ul"},"Fixed biome graphics issues when loading older worlds.")))}g.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var n=a(58168),r=a(96540),o=a(15680),l=a(18228),i=a(19365),s=a(8249);const u={},d=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},h=[],p={toc:h},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},31020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),l=a(58500);const i={sidebar_position:99999956,title:"MCPE Android Beta - 1.0 build 3",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE Android Beta - 1.0 build 3",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/README",title:"MCPE Android Beta - 1.0 build 3",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_3/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999956,frontMatter:{sidebar_position:99999956,title:"MCPE Android Beta - 1.0 build 3",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.0 build 4",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_4/"},next:{title:"MCPE Android Beta - 1.0 build 2",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.0_build_2/"}},d={},c=[],g={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(h,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpe-android-beta---10-build-3"},"MCPE Android Beta - 1.0 build 3"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);