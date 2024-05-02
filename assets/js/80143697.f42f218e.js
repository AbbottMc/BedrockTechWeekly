"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[55417,75734,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>s});var n=a(67294),r=a(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),m(i))}}),[u,c]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||p()};return(0,n.useEffect)((()=>(s(),u(),t(r.p.isHidden()),()=>{l(),c()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>o});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=d({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??p;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var k=a(72389);const b="tabList_TRJ7",w="tabItem_hGfb";function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(m(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:h},i,{className:(0,o.Z)("tabs__item",w,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},19419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.16/0/63/gameplay",id:"changelog_source/preview/1.16/0/63/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.16/0/63/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/63",slug:"/changelog_source/preview/1.16/0/63/gameplay",permalink:"/docs/changelog_source/preview/1.16/0/63/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/63/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add-Ons and Scripting</strong>",id:"add-ons-and-scripting",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h2",{id:"crashes-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Crashes and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when auto crafting 64 honey blocks from recipe book in survival\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68604"},"MCPE-68604")),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could occur if the player equipped any piece of netherite armor, used a clear command to clear it, and then equipped another piece of netherite armor of the same type\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could happen when a mob's state changed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0navigation.walk\xa0to handle the case where it is used on a flying entity, so that the flying entity will not cause lag while it is touching the ground")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Mojang Studios loading screens"),(0,r.kt)("li",{parentName:"ul"},"Nether biome distribution now better matches that in Minecraft: Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where players on Xbox One may have errors accessing the Marketplace\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved reliability of loading characters\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55968"},"MCPE-55968")),(0,r.kt)("li",{parentName:"ul"},"Fixed an instance where a character can be lost when offline"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented achievements from being unlocked offline after reconnecting\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fix issue of incorrect player hand animations when using fishing rod in third person\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63088"},"MCPE-63088"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Xbox main menu getting stuck forever after cancelling the sync popup box ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53266"},"MCPE-53266")),(0,r.kt)("li",{parentName:"ul"},"Secondary players in a splitscreen game will now animate properly when you look at them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Suspending and resuming the game will no longer make a player's model disappear\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63119"},"MCPE-63119"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"The second player's hands in a split screen game will no longer disappear when you look at them with the first player\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58806"},"MCPE-58806"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Nether Bricks texture has been updated\xa0"),(0,r.kt)("li",{parentName:"ul"},"Chiseled Netherbrick and Quartz Bricks textures are updated"),(0,r.kt)("li",{parentName:"ul"},"Crimson Trap Door is now called Crimson Trapdoor"),(0,r.kt)("li",{parentName:"ul"},"Warped Forest are now more rare compared to other Nether biomes\xa0"),(0,r.kt)("li",{parentName:"ul"},"When players enter Warped Forest, the previous music track now plays until it's finished\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bedrock Credits have been updated\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where experimental mode was not being enabled for clients when the server level has it enabled\xa0"),(0,r.kt)("li",{parentName:"ul"},'Optimised sound loading - "load',"_","on","_","low","_",'memory" is now deprecated in sound',"_","definitions.json, as all audio can now play on low memory devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed a world conversion issue that was causing some items in chunks to convert to Bedrock incorrectly\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dyeing shulker boxes no longer causes items to vanish ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64164"},"MCPE-64164")),(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect spawn position when set on top of a pressure plate\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65487"},"MCPE-65487")),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where taking Arrows, Fireworks, or Nautilus shells into the offhand will break the offhand UI slot\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64227"},"MCPE-64227")),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where lava would drop uncooked food\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74767"},"MCPE-74767")),(0,r.kt)("li",{parentName:"ul"},"Added fallback to world spawn if the Respawn Anchor spawn is obstructed"),(0,r.kt)("li",{parentName:"ul"},'"You home bed was missing or obstructed" message shows again'),(0,r.kt)("li",{parentName:"ul"},'"Respawn point set" message is now displayed for the Respawn Anchor in all cases\xa0',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73159"},"MCPE-73159"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Respawn Anchors can be charged without setting respawn point and without exploding outside the Nether\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69044"},"MCPE-69044"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"The Respawn Anchor can now have blocks placed against if it contains no charge"),(0,r.kt)("li",{parentName:"ul"},"Villagers will now harvest crops regardless of what crop amounts they have in their inventory\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-67694"},"MCPE-67694"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"XP orbs shoot in random directions once again\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58715"},"MCPE-58715")),(0,r.kt)("li",{parentName:"ul"},"It's now impossible to use beds if there is no room for the player to stand next to or on top of the bed when they wake up ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42881"},"MCPE-42881")),(0,r.kt)("li",{parentName:"ul"},"It's now impossible to interact with Piglins who are admiring golden items ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69861"},"MCPE-69861"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Respawn anchors no longer destroy blocks when detonated underwater\xa0"),(0,r.kt)("li",{parentName:"ul"},"Respawn Anchor now plays an appropriate sound when it depletes ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69265"},"MCPE-69265"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lodestone Compass is now supported in commands\xa0 ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68994"},"MCPE-68994"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Barrier blocks no longer generate in Bastion Remnants"),(0,r.kt)("li",{parentName:"ul"},"Chests in Bastion Remnants now always generate with loot\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69003"},"MCPE-69003"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs no longer consume one of two Swords of the same material dropped in the same place\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Smithing table sound not playing while being used\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69066"},"MCPE-69066"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Respawn Anchor charging sound no longer plays in Basalt Delta biome\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69189"},"MCPE-69189"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lodestone and compass now play an appropriate sound\xa0"),(0,r.kt)("li",{parentName:"ul"},"Twisting Vines Block is now called Twisting Vines"),(0,r.kt)("li",{parentName:"ul"},"'Oooh, shiny!' achievement now unlock when distracting a Piglin with a Gold Ingot by right-clicking\xa0"),(0,r.kt)("li",{parentName:"ul"},"Twisting Vines and Weeping Vines are now destroyed, and popped as items, immediately when flooded\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mined Nether Sprouts no longer produce an invalid item that could not be used ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74339"},"MCPE-74339"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fire now properly converts to Soul Fire on Soul Sand and Soul Soil when Fire ticking is turned off\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69823"},"MCPE-69823"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Campfires can now be crafted with charcoal\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70862"},"MCPE-70862"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using Quartz Block in a stonecutter now produces Quartz Slabs instead of Smooth Quartz slabs\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57925"},"MCPE-57925"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dispenser now uses 1 glowstone when filling Respawn Anchor\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72686"},"MCPE-72686"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Silk touch enchant now works on Respawn Anchor\xa0"),(0,r.kt)("li",{parentName:"ul"},"Silk touch enchant and setBlock command now works on Crimson button, Warped button, Crimson hyphae, Stripped crimson hyphae, Warped hyphae, Stripped warped hyphae, Weeping vines, Twisting vines, Blackstone pressure plate, Polished blackstone button\xa0"),(0,r.kt)("li",{parentName:"ul"},"Chains can now be pushed by Pistons without breaking"),(0,r.kt)("li",{parentName:"ul"},"Soul Torches can now also be crafted with charcoal\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70585"},"MCPE-70585"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Warped Fungus on a Stick can now be enchanted similar to Carrot on a Stick\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70948"},"MCPE-70948"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Striders now take falling damage\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70886"},"MCPE-70886"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Baby Strider sitting on an adult Strider now freeze when its parent is on land\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71413"},"MCPE-71413"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Striders movement speed has been adjusted to closer match Minecraft Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Netherite items will not catch fire because they are fire resistant\xa0"),(0,r.kt)("li",{parentName:"ul"},"Large Basalt Columns can no longer be over 10 blocks tall"),(0,r.kt)("li",{parentName:"ul"},"Basalt Deltas now have the correct blocks generating in the biome\xa0"),(0,r.kt)("li",{parentName:"ul"},"Blackstone Buttons, Pressure Plates, Slabs and Walls now have the right appearance on Maps\xa0"),(0,r.kt)("li",{parentName:"ul"},"Respawn Anchor can now only be mined by Diamond or Netherite Pickaxe ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72102"},"MCPE-72102"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs now prefer Stone Sword over Gold Sword (except for Piglins!)"),(0,r.kt)("li",{parentName:"ul"},"Twisting Vines and Weeping Vines now emit correct sounds when broken\xa0"),(0,r.kt)("li",{parentName:"ul"},"Chain now plays correct sound when placed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lodestone now requires a Pickaxe to be mined\xa0"),(0,r.kt)("li",{parentName:"ul"},"Many doors had their texture updated"),(0,r.kt)("li",{parentName:"ul"},"Warped Stem and Crimson Stem now have the same mining time as Oak Log\xa0"),(0,r.kt)("li",{parentName:"ul"},"Warped Planks or Crimson Plank slabs no longer appear as default in recipes for some items\xa0"),(0,r.kt)("li",{parentName:"ul"},"Player no longer spawns on a block after relaunching the world while falling\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause the player to respawn underwater\xa0"),(0,r.kt)("li",{parentName:"ul"},"Netherite shovel can now be used to extinguish campfires ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65730"},"MCPE-65730"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Soul soul can be mined more quickly with shovels now ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65382"},"MCPE-65382")),(0,r.kt)("li",{parentName:"ul"},"Crimson and Warped Hyphae (including stripped) can now be crafted into planks in Bedrock ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73099"},"MCPE-73099"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Weeping Vines can now be grown using bone meal with dispensers ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65660"},"MCPE-65660"),"\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where chickens on slabs wouldn't take damage from lava\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74990"},"MCPE-74990")),(0,r.kt)("li",{parentName:"ul"},"Hoglins should now always be pacified after fleeing from Warped Fungus\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now pathfind on Soul Sand blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"Piglins can now outrun Hoglins\xa0"),(0,r.kt)("li",{parentName:"ul"},"Hoglins will retaliate against crossbow wielding Piglins less frequently\xa0"),(0,r.kt)("li",{parentName:"ul"},"Villagers no longer drop items they pick up\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using Pickblock on Zoglin now gives Zoglin spawn egg\xa0"),(0,r.kt)("li",{parentName:"ul"},"Netherite helmet now renders properly on Piglins\xa0"),(0,r.kt)("li",{parentName:"ul"},"Hoglins and Zoglins are now more resistant to knockback\xa0"),(0,r.kt)("li",{parentName:"ul"},"Piglins now make a retreating sound while fleeing from Soul Fire Torches, Soul Fire Lanterns and Soul Fire\xa0"),(0,r.kt)("li",{parentName:"ul"},"Piglins and Hoglins behavior while fleeing has been improved\xa0"),(0,r.kt)("li",{parentName:"ul"},"Zoglin and Zombified Piglin no longer drown in lava"),(0,r.kt)("li",{parentName:"ul"},"Changed many mobs' behavior while drowning in lava\xa0"),(0,r.kt)("li",{parentName:"ul"},"Aggravated Piglins no longer barter\xa0"),(0,r.kt)("li",{parentName:"ul"},"Gold Ingot now always properly render in Piglins hand during bartering\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs should no longer consume items they pick up\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71542"},"MCPE-71542")),(0,r.kt)("li",{parentName:"ul"},"Piglin now become angry when Trapped Chests are destroyed"),(0,r.kt)("li",{parentName:"ul"},"Hoglins no longer flee from Zoglins"),(0,r.kt)("li",{parentName:"ul"},"The Zombified Piglin texture has been updated"),(0,r.kt)("li",{parentName:"ul"},"Mobs that can equip helmet armor can now also equip Turtle Shell\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where tamed pets would occasionally disappear after transferring to or from the nether\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66978"},"MCPE-66978")),(0,r.kt)("li",{parentName:"ul"},"Angry Bees are now slower ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53689"},"MCPE-53689"))),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Iron Bars and Glass Panes now connect to Walls\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73989"},"MCPE-73989"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Hyphae blocks can now be crafted into their respective planks ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73099"},"MCPE-73099")),(0,r.kt)("li",{parentName:"ul"},"Moving blocks now have the correct collision box\xa0\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62419"},"MCPE-62419"))),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed low light emitting block items not matching the placed blocks brightness\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed mobs in mob spawners not being visible\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-56879"},"MCPE-56879"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Maps in item frames no longer have lines through them\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46154"},"MCPE-46154")),(0,r.kt)("li",{parentName:"ul"},"Fixed maps missing textures after reloading world\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54228"},"MCPE-54228"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where lighting wasn't refreshed when going through portals back into overworld\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69037"},"MCPE-69037")),(0,r.kt)("li",{parentName:"ul"},"Fixed the excessive hand bob motion caused by playing an animation on the hand and camera together\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54072"},"MCPE-54072")),(0,r.kt)("li",{parentName:"ul"},"Items held by mobs should now render correctly\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lodestone Compass now renders properly in the inventory\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tweaked Server Tab navigation"),(0,r.kt)("li",{parentName:"ul"},"Creative Recipe Books show item groupings again"),(0,r.kt)("li",{parentName:"ul"},'Added a background to title and subtitle text with adjustable opacity Opacity can be changed in the "Accessibility" tab in the Settings menu\xa0'),(0,r.kt)("li",{parentName:"ul"},"Added a background to the actionbar text used in the /title command The same background is also applied to the item text above the hotbar\xa0"),(0,r.kt)("li",{parentName:"ul"},"Smithing Table UI has been updated")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where bees and other new mobs were missing a non-"minecraft:" version for /summon commands. You should be able to spawn vanilla mobs without it!\xa0',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58557"},"MCPE-58557")),(0,r.kt)("li",{parentName:"ul"},"Added new overload for\xa0/replaceitem\xa0with an option for\xa0destroy\xa0(the old behavior) or\xa0keep\xa0(the command will return an error if an item occupies that slot)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where the clear command would not clear damaged tools\xa0"),(0,r.kt)("li",{parentName:"ul"},"/setblock command fails on the new blocks if attempted with non-default state ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65395"},"MCPE-65395")),(0,r.kt)("li",{parentName:"ul"},"/setblock\xa0command now works for more block states\xa0")),(0,r.kt)("h2",{id:"add-ons-and-scripting"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Scripting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed knockback issue that stopped crates in \u201cRescue Mission Lava Town\u201d Marketplace pack from moving when hit\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added a new loop mode to animations: now instead of omitting "loop" to have it stop playing when finished, or setting\xa0"loop": true\xa0to have it loop when finished, you can now say\xa0"loop": "hold',"_","on","_","last","_",'frame"\xa0to keep applying the last frame of animation\xa0'),(0,r.kt)("li",{parentName:"ul"},"A content error will now show up if a Range json node is defined as an array with a single value\xa0"),(0,r.kt)("li",{parentName:"ul"},"A content error will now show up if you use more than one Move Control Component, Jump Control Component, or Navigation Component\xa0"),(0,r.kt)("li",{parentName:"ul"},"Functions with a mix of invalid and valid commands will only execute the valid ones with command version 1.15 and below In these cases, the function name will not show up in the auto-suggestion list but can still be executed if typed out"),(0,r.kt)("li",{parentName:"ul"},"Starting on 1.16, functions with any invalid commands (for example incorrect selector syntax) will no longer register and cannot be called\xa0"),(0,r.kt)("li",{parentName:"ul"},'When setting the json variables\xa0"attack',"_","interval","_",'min"\xa0and\xa0"attack',"_","interval","_",'max", the component will now correctly throw a content error if the max is less than the min\xa0',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63542"},"MCPE-63542")),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where sounds would sometimes have incorrect settings applied to them leading to 2D sounds to play as 3D and vice versa\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue that was cutting off playing sound incorrectly, though can still easily occur if audio is loaded up that takes up a lot of memory\xa0"),(0,r.kt)("li",{parentName:"ul"},"Comments in JSON arrays no longer cause an error ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40873"},"MCPE-40873"))))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var n=a(87462),r=a(67294),o=a(3905),i=a(31792),s=a(85162),l=a(18386);const u={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],d={toc:h};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},67688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),i=a(19419);const s={sidebar_position:99999915,title:"1.16.0.63",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},l="Minecraft Beta - 1.16.0.63 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.16/0/63",id:"official_changelog/preview/1.16/0/63",title:"1.16.0.63",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/0/63.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/63",permalink:"/docs/official_changelog/preview/1.16/0/63",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/63.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999915,frontMatter:{sidebar_position:99999915,title:"1.16.0.63",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.64",permalink:"/docs/official_changelog/preview/1.16/0/64"},next:{title:"1.16.0.61",permalink:"/docs/official_changelog/preview/1.16/0/61"}},c={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---116063-xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.63 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);