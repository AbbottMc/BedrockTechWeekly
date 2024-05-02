"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2172,14581,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(67294),r=a(62706);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,o]=l({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),p(s))}}),[u,c]=l({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),m=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||m()};return(0,n.useEffect)((()=>(i(),u(),t(r.p.isHidden()),()=>{o(),c()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:m},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>l});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),i=a(16550),o=a(91980),u=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=h({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=o??m;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function w(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u,rightElement:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==i&&(p(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:d},s,{className:(0,l.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},86599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},s=void 0,i={unversionedId:"changelog_source/stable/1.9/0/gameplay",id:"changelog_source/stable/1.9/0/gameplay",title:"gameplay",description:"New Features:",source:"@site/docs/changelog_source/stable/1.9/0/gameplay.mdx",sourceDirName:"changelog_source/stable/1.9/0",slug:"/changelog_source/stable/1.9/0/gameplay",permalink:"/docs/changelog_source/stable/1.9/0/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.9/0/gameplay.mdx",tags:[],version:"current",frontMatter:{}},o={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Current Experimental Features: (Work in progress features that are only available when Experimental Gameplay is enabled in world settings)</strong>",id:"current-experimental-features-work-in-progress-features-that-are-only-available-when-experimental-gameplay-is-enabled-in-world-settings",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new flowers: Lily of the Valley and Cornflower\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new signs for spruce, birch, jungle, acacia, and dark oak\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new stair, slab, and wall variants:\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Granite stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Granite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Diorite stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Diorite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Andesite stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Andesite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Sandstone walls"),(0,r.kt)("li",{parentName:"ul"},"Smooth Red Sandstone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Smooth Quartz stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Brick walls"),(0,r.kt)("li",{parentName:"ul"},"Stone Brick walls"),(0,r.kt)("li",{parentName:"ul"},"Mossy Stone Brick stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Nether Brick walls"),(0,r.kt)("li",{parentName:"ul"},"End Stone Brick stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Prismarine walls"),(0,r.kt)("li",{parentName:"ul"},"Red Sandstone walls"),(0,r.kt)("li",{parentName:"ul"},"Red Nether Brick stairs, slabs, and walls"),(0,r.kt)("li",{parentName:"ul"},"Smooth Sandstone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Mossy Cobblestone stairs and slabs"))),(0,r.kt)("li",{parentName:"ul"},"Added a new option to the /gamerule commands called 'showDeathMessages' which allows players to select whether a message appears in chat when a player or tamed mob dies\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added new "Immediate Respawn" option with associated /gamerule\xa0'),(0,r.kt)("li",{parentName:"ul"},"New feedback button in the pause menu - shows links to the Minecraft feedback site, MoJira bug tracker, and Mojang support")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added several new loading screen tips and trivia suggested by the community!\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added several new splash texts to the main menu\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added the ability to delete expired Realms from your worlds list"),(0,r.kt)("li",{parentName:"ul"},"Cauldrons can now hold Lava"),(0,r.kt)("li",{parentName:"ul"},"Tripwires are now activated when broken, unless broken with shears\xa0"),(0,r.kt)("li",{parentName:"ul"},"A notification is now sent to chat when a tamed animal dies (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35138"},"MCPE-35138"),")"),(0,r.kt)("li",{parentName:"ul"},"How to Play button is now visible from the in-game settings menu\xa0")),(0,r.kt)("h2",{id:"current-experimental-features-work-in-progress-features-that-are-only-available-when-experimental-gameplay-is-enabled-in-world-settings"},(0,r.kt)("strong",{parentName:"h2"},"Current Experimental Features: (Work in progress features that are only available when Experimental Gameplay is enabled in world settings)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minecraft Script Engine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Minecraft Script Engine uses the JavaScript language"),(0,r.kt)("li",{parentName:"ul"},"Scripts can be written and bundled with Behavior Packs to listen and respond to game events, get and modify data in components that entities have, and affect different parts of the game."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/minecraftaddons"},"Minecraft Wiki")," for reference guides and sample packs"),(0,r.kt)("li",{parentName:"ul"},"This functionality is currently only available on Windows 10 PCs"))),(0,r.kt)("li",{parentName:"ul"},"Pillagers\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bamboo is now generated in Jungle biomes\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lanterns"),(0,r.kt)("li",{parentName:"ul"},"New block placeholders: (Functionality will come in a later update)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cartography Table"),(0,r.kt)("li",{parentName:"ul"},"Fletching Table"),(0,r.kt)("li",{parentName:"ul"},"Grindstone"),(0,r.kt)("li",{parentName:"ul"},"Bell"),(0,r.kt)("li",{parentName:"ul"},"Barrel"),(0,r.kt)("li",{parentName:"ul"},"Smithing Table"),(0,r.kt)("li",{parentName:"ul"},"Smoker"),(0,r.kt)("li",{parentName:"ul"},"Blast Furnace"))),(0,r.kt)("li",{parentName:"ul"},"Crossbow weapon with new enchantments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multishot"),(0,r.kt)("li",{parentName:"ul"},"Piercing"),(0,r.kt)("li",{parentName:"ul"},"Quick Charge")))),(0,r.kt)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.kt)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated templates for 1.9.0 with new resources and behaviors can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"http://minecraft.net/addons"},"net/addons")),(0,r.kt)("li",{parentName:"ul"},"Added tags - Custom tags can be applied to entities and players to create more flexible selector groupings"),(0,r.kt)("li",{parentName:"ul"},'Added "has',"_",'tag" filter in components to allow checks to see if an entity has a specified tag\xa0'),(0,r.kt)("li",{parentName:"ul"},"Autocomplete in chat can be used for Tags\xa0"),(0,r.kt)("li",{parentName:"ul"},"The number of commands run through functions can be limited with the new gamerule 'functioncommandlimit' (default 10k) to limit performance issues\xa0"),(0,r.kt)("li",{parentName:"ul"},"Functions can now be run every tick, creating an update loop\xa0"),(0,r.kt)("li",{parentName:"ul"},"Template worlds with locked world settings now will also lock player permissions. As a reminder, either can be unlocked from the world settings screen\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added an option in the manifest for any world template to lock the world settings and player permissions (previously only available to Adventure templates). The new field is ","`","lock","_","template","_","options","`"," which has a default value of ","`","true","`"," for an Adventure template and a default value of ","`","false","`"," for other template types"),(0,r.kt)("li",{parentName:"ul"},"Implemented support for raw JSON text in commands, signs, titles, and books"),(0,r.kt)("li",{parentName:"ul"},"Implemented 'Translate' parameter for Raw JSON text, allowing creators to define strings in multiple languages and serve the correct string to the player based on their set language (if the string is defined in that language)\xa0")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when replacing a wooden door with an iron door (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37941"},"MCPE-37941"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using Pick Block on a chest filled with written books\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when pistons pushed blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could happen when changing network modes on Nintendo Switch\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when removing Gear VR headset during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when quickly signing in and out of Xbox Live\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when resuming the game on mobile devices\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when resuming the game on Windows 10 Mobile devices\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur after exiting the settings screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the game could become unresponsive after being disconnected from a multiplayer game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Shulker boxes in item frames no longer cause the game to crash"),(0,r.kt)("li",{parentName:"ul"},"Optimizations to chunk synchronization between client and server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Players can now join and play games with a minor version mismatch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38945"},"MCPE-38945"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer change their customized player permissions while playing multiplayer games\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed players spawning in mid-air and falling to their death when loading a world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38374"},"MCPE-38374"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed touch controls so players no longer get stuck in sneak position when underwater (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38212"},"MCPE-38212"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause a sudden change in direction on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35910"},"MCPE-35910"),")"),(0,r.kt)("li",{parentName:"ul"},"End gateway portals now work correctly, even if the destination area has already been generated (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19699"},"MCPE-19699"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with End gateway portals which could generate too closely, preventing travel back to the main island\xa0"),(0,r.kt)("li",{parentName:"ul"},"Defeating the Ender Dragon now drops the correct amount of XP and generates a Dragon Egg in converted worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28864"},"MCPE-28864"),")"),(0,r.kt)("li",{parentName:"ul"},"Auto-jump now works when trying to walk through scaffolding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38342"},"MCPE-38342"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed breaking blocks when trying to fire a crossbow on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38465"},"MCPE-38465"),")"),(0,r.kt)("li",{parentName:"ul"},"Touch controls now work correctly with scaffolding when using the 'swap jump and sneak' setting (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38063"},"MCPE-38063"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a rare instance of players being teleported into a boat while traveling near water"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could result in lost items when crafting from the recipe book with a full inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39621"},"MCPE-39621"),")"),(0,r.kt)("li",{parentName:"ul"},"Vines collected with silk touch tools can be used correctly in banner designs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35134"},"MCPE-35134"),")"),(0,r.kt)("li",{parentName:"ul"},"Dropped items are now correctly displaced by slabs and glass (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-12025"},"MCPE-12025"),")"),(0,r.kt)("li",{parentName:"ul"},"Dragon's Breath can now be quickly collected reliably in multiplayer games (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37815"},"MCPE-37815"),")"),(0,r.kt)("li",{parentName:"ul"},"Crossbows no longer fire accidentally when interacting with blocks or mobs on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38321"},"MCPE-38321"),")"),(0,r.kt)("li",{parentName:"ul"},"Charged crossbows can now be used to melee attack mobs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38314"},"MCPE-38314"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cats now spawn in villages generated prior to the 1.8.0 update"),(0,r.kt)("li",{parentName:"ul"},"Shulker boxes now push mobs when opening (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-22480"},"MCPE-22480"),")"),(0,r.kt)("li",{parentName:"ul"},"Pandas now panic when set on fire"),(0,r.kt)("li",{parentName:"ul"},"Slimes will once again spawn in slime chunks as expected (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38388"},"MCPE-38388"),")"),(0,r.kt)("li",{parentName:"ul"},"Endermen now make the scream sound when angered (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-26719"},"MCPE-26719"),")"),(0,r.kt)("li",{parentName:"ul"},"Phantoms now drop membranes correctly if killed with a fire aspect sword (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38493"},"MCPE-38493"),")"),(0,r.kt)("li",{parentName:"ul"},"Skeleton jockeys now sit correctly on spiders and skeleton horses (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40057"},"MCPE-40057"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the position of riders on mounts that allow multiple passengers\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Scaffolding can now be placed on glass\xa0"),(0,r.kt)("li",{parentName:"ul"},"More blocks can be placed on scaffolding including mob heads and flower pots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38942"},"MCPE-38942"),")"),(0,r.kt)("li",{parentName:"ul"},"Horizontal flowing water will no longer turn into bubble columns over soul sand"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Realms / Dedicated Server")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Operator permissions are now correctly granted as set in the "server.properties" file for Dedicated Servers\xa0'),(0,r.kt)("li",{parentName:"ul"},"Player permissions are no longer reset when rejoining a dedicated server\xa0"),(0,r.kt)("li",{parentName:"ul"},"Corrected an issue where large Realm downloads could be attempted when there was not enough storage space\xa0"),(0,r.kt)("li",{parentName:"ul"},"Optimized lighting processing on dedicated servers"),(0,r.kt)("li",{parentName:"ul"},"Realms subscriptions can now be successfully purchased on Xbox One"),(0,r.kt)("li",{parentName:"ul"},"Changing Realm game options now take effect after the owner presses the Play button\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Held items now show the correct texture when changing resource packs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38302"},"MCPE-38302"),")"),(0,r.kt)("li",{parentName:"ul"},"Clocks and compass items now load in correctly when joining a world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36952"},"MCPE-36952"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Texel Anti-Aliasing so that terrain blocks now have sharper textures"),(0,r.kt)("li",{parentName:"ul"},"Fixed items in hand sometimes appearing completely white\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beacon beams once again use the proper texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38148"},"MCPE-38148"),")"),(0,r.kt)("li",{parentName:"ul"},'Fixed the swimming animation of the "Syrena" skin in Pirates of the Caribbean Mash-up pack'),(0,r.kt)("li",{parentName:"ul"},"Fixed leg geometry for one-legged characters in various skin packs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Panda feeding animation\xa0"),(0,r.kt)("li",{parentName:"ul"},"Shulkers no longer turn black when attacking a player\xa0"),(0,r.kt)("li",{parentName:"ul"},"Sheep and Cats no longer appear black after being spawned with a spawn egg\xa0"),(0,r.kt)("li",{parentName:"ul"},"Tamed llamas no longer become bioluminescent creatures when their inventory is opened\xa0"),(0,r.kt)("li",{parentName:"ul"},"Strays once again have the correct texture layers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38155"},"MCPE-38155"),")"),(0,r.kt)("li",{parentName:"ul"},"Lit furnaces now show correctly when copied using Ctrl + Pick Block\xa0"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding textures no longer z-fight with leaves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38375"},"MCPE-38375"),")"),(0,r.kt)("li",{parentName:"ul"},"Particles produced by witches are now purple rather than black (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-30234"},"MCPE-30234"),")"),(0,r.kt)("li",{parentName:"ul"},"The trident throwing animation no longer gets mixed up with the new crossbow animation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38358"},"MCPE-38358"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Fixed missing "Save to Microsoft account" message when saving purchases on Nintendo Switch in handheld mode\xa0'),(0,r.kt)("li",{parentName:"ul"},'Slabs are no longer labelled "half slabs" in the creative inventory (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32542"},"MCPE-32542"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved text entry in various fields - text boxes can be highlighted and selected using the keyboard\xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated low disk space error message\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved the error messages that previously stated the player didn't have a licence for the game"),(0,r.kt)("li",{parentName:"ul"},"Error messages are now more informative when trying to join an unavailable world\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the scaling of the Mojang splash screen when resuming a split-screen game\xa0"),(0,r.kt)("li",{parentName:"ul"},"The skin picker menu now only displays progress/loading animation when online\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved marketplace navigation when using a controller or keyboard"),(0,r.kt)("li",{parentName:"ul"},"Marketplace content will now download correctly without getting stuck in the process (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37467"},"MCPE-37467"),")"),(0,r.kt)("li",{parentName:"ul"},"Custom modal forms now support two lines again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38705"},"MCPE-38705"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Functions are now pre-compiled, improving their performance at run-time"),(0,r.kt)("li",{parentName:"ul"},"Repeating command blocks now keep their 'always active' state when cloned (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36340"},"MCPE-36340"),")"),(0,r.kt)("li",{parentName:"ul"},"Commands from command blocks no longer extend to other dimensions (This fix won't affect existing command blocks) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33892"},"MCPE-33892"),")"),(0,r.kt)("li",{parentName:"ul"},'Special characters now display correctly when using the "/say" command'),(0,r.kt)("li",{parentName:"ul"},"Falling block entities can now be killed using commands (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38300"},"MCPE-38300"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed remaining commands that use relative coordinates that are below y3 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35130"},"MCPE-35130"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Horses will spawn as different variants (rather than just one type) when unspecified in the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Rideable entities that use the 'minecraft:explode' no component longer crash the game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Blocks in the inventory once again follow the textures set in blocks.json\xa0")))),(0,r.kt)("p",null,"If you missed a previous update, check out ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCChangelogs"},"aka.ms/MCChangelogs")," for a full list of updates."))}m.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>d});var n=a(87462),r=a(67294),l=a(3905),s=a(31792),i=a(85162),o=a(18386);const u={},c=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{rightElement:(0,l.kt)(o.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(r.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},57700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(61499),s=a(86599);const i={sidebar_position:99999961,title:"1.9.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.9"]},o="Minecraft - 1.9.0 (Bedrock)",u={unversionedId:"official_changelog/stable/1.9/0",id:"official_changelog/stable/1.9/0",title:"1.9.0",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.9/0.mdx",sourceDirName:"official_changelog/stable/1.9",slug:"/official_changelog/stable/1.9/0",permalink:"/docs/official_changelog/stable/1.9/0",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.9/0.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.9",permalink:"/docs/tags/1-9"}],version:"current",sidebarPosition:99999961,frontMatter:{sidebar_position:99999961,title:"1.9.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.9"]},sidebar:"changelogSidebar",previous:{title:"1.10.0",permalink:"/docs/official_changelog/stable/1.10/0"},next:{title:"1.8.1",permalink:"/docs/official_changelog/stable/1.8/1"}},c={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---190-bedrock"},"Minecraft - 1.9.0 (Bedrock)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);