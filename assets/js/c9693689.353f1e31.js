"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47426,57513,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>s});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),m=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||m()};return(0,a.useEffect)((()=>(s(),c(),t(r.p.isHidden()),()=>{l(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:m},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},88817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.16/0/61/gameplay",id:"changelog_source/preview/1.16/0/61/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.16/0/61/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/61",slug:"/changelog_source/preview/1.16/0/61/gameplay",permalink:"/docs/changelog_source/preview/1.16/0/61/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/61/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h1",{id:"fixes"},"Fixes"),(0,r.kt)("h2",{id:"crashes-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Crashes and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash at launch on Samsung Galaxy S Duos 2"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur in the End\xa0"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when the /kill command is used while the dragon is respawning"),(0,r.kt)("li",{parentName:"ul"},"Fixed some crashes that occurred when changing dimensions, including going through portals with tamed animals"),(0,r.kt)("li",{parentName:"ul"},"Using the /fill command with Soul Fire no longer causes the game to crash (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65672"},"MCPE-65672"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue when reloading characters wearing classic skins\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved reliability of loading characters (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55968"},"MCPE-55968"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved offline support for characters"),(0,r.kt)("li",{parentName:"ul"},"Classic skins are now loaded before Character Creator skins on multiplayer servers"),(0,r.kt)("li",{parentName:"ul"},"An error message will now appear when the uploading and downloading world file size exceeds maximum"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause a failure when trying to import large worlds with limited space available on Windows 10")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed mob population cap to only count mobs with spawn rules (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54378"},"MCPE-54378"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mob despawn range is now tied to Simulation Range (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65570"},"MCPE-65570"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Villagers to not link up to job sites correctly in multiplayer worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49580"},"MCPE-49580"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause overlapping Villages to be repeatedly created and destroyed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Parity: Water now freezes from the edges, matching the Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fall damage protection will now work as expected from tall heights\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")"),(0,r.kt)("li",{parentName:"ul"},"Flying too fast with elytra into an unloaded chunk will no longer cause death by kinetic energy\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55671"},"MCPE-55671"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed ravines not being positioned correctly compared to older versions"),(0,r.kt)("li",{parentName:"ul"},"Fixed players being able to duplicate items by closing the title while on the respawn menu\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dropping items enchanted with Vanishing now works correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65649"},"MCPE-65649"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can now only enchant one compass at a time, using an anvil in Survival"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that sometimes caused Redstone torches to get stuck on or off when reloading a world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause Kelp to stop growing too soon - Kelp now checks the block in the ticking queue when attempting to add itself (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57330"},"MCPE-57330"),")"),(0,r.kt)("li",{parentName:"ul"},"Feather Falling and Protection enchantments now give the correct player damage protection (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74561"},"MCPE-74561"),")\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parrots no longer get stuck in flight mode\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64370"},"MCPE-64370"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs that panic now do so for all damage types\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs that can pick up armour now prioritise Iron over Chainmail\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Walls now connect to most blocks placed above them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65404"},"MCPE-65404"),")"),(0,r.kt)("li",{parentName:"ul"},"Falling blocks are now broken by partial blocks that are placed above piston arms facing up"),(0,r.kt)("li",{parentName:"ul"},"Mushroom Stems now drop the correct block when mined with a Silk Touch tool (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Target block redstone signal duration is based on projectile type, long for trident and arrows, short for other projectiles\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65413"},"MCPE-65413"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Redstone torches will no longer get stuck on or off when reloading the world\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48054"},"MCPE-48054"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Conditional setting for command blocks is now saved when copying via Structure Block\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue which allowed Jack 'o Lanterns to be placed on the side of blocks, breaking some Marketplace content\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mushroom stems no longer drop brown mushroom blocks when silk touched (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69012"},"MCPE-69012"),")\xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where chunks would flicker after altering render distance values"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused maps to become invisible (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76166"},"MCPE-76166"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Paintings now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69652"},"MCPE-69652"),")"),(0,r.kt)("li",{parentName:"ul"},"Beacon beams now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")"),(0,r.kt)("li",{parentName:"ul"},"The flame animation now shows correctly on burning mobs and flame arrows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76224"},"MCPE-76224"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that stopped animated textures working correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76180"},"MCPE-76180"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented firework particles from appearing correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76341"},"MCPE-76341"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Tooltip backgrounds and the controller cursor now render correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76154"},"MCPE-76154"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76168"},"MCPE-76168"),")\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused enchanted items to flicker with cursor movement"),(0,r.kt)("li",{parentName:"ul"},"Fixed an unhelpful error message that appeared when trying to play online without proper account permissions\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed getting stuck loading resources after pressing 'Back' while on the\xa0'Your Realm will soon be updated screen\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented native text/character input when using Korean or Chinese virtual keyboards (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62596"},"MCPE-62596"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed text on signs extending past the edge of the sign (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64315"},"MCPE-64315"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed account error number -9 being displayed when launching the game while signed into an account, but no network connection\xa0"),(0,r.kt)("li",{parentName:"ul"},"Parity: Anvils now read \u201cEnchantment Cost\u201d rather than \u201cXP Cost\u201d\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that occasionally prevented inventory items being selected when using touch controls with classic UI\xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with teleporting 'tick","_","world' entities over large distances could cause them to disappear\xa0"),(0,r.kt)("li",{parentName:"ul"},"Now when teleporting an Armor Stand to a player, it rotates the Armor Stand to the player's orientation\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35979"},"MCPE-35979"),")")),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elytra is now data-driven"),(0,r.kt)("li",{parentName:"ul"},"Custom bones in geometry now respect their custom parent bones' transformations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed particles spawning with lifetimes that were less than 2x the current frame time would often not draw at all. This affected the ghost trail for the Advanced Mining content, and any other content that has particles with lifetimes that are really short")))}m.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905),i=n(31792),s=n(85162),l=n(18386);const c={},u=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},96983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),i=n(88817);const s={sidebar_position:99999916,title:"1.16.0.61",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},l="Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/0/61",id:"official_changelog/preview/1.16/0/61",title:"1.16.0.61",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/0/61.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/61",permalink:"/docs/official_changelog/preview/1.16/0/61",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/61.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999916,frontMatter:{sidebar_position:99999916,title:"1.16.0.61",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.63",permalink:"/docs/official_changelog/preview/1.16/0/63"},next:{title:"1.16.0.60",permalink:"/docs/official_changelog/preview/1.16/0/60"}},u={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---116061-xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.61 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);