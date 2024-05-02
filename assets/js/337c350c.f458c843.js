"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11774,21824,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(67294),r=a(62706);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=l({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),d(o))}}),[u,c]=l({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},d=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||p()};return(0,n.useEffect)((()=>(i(),u(),t(r.p.isHidden()),()=>{s(),c()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>l});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=a(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},48163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.16/230/52/gameplay",id:"changelog_source/preview/1.16/230/52/gameplay",title:"gameplay",description:"Posted: 31st March 2021",source:"@site/docs/changelog_source/preview/1.16/230/52/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/230/52",slug:"/changelog_source/preview/1.16/230/52/gameplay",permalink:"/docs/changelog_source/preview/1.16/230/52/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/230/52/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Generation</strong>",id:"generation",level:2},{value:"<strong>Known Issues:</strong>",id:"known-issues",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>GameTest Framework updated interfaces:</strong>",id:"gametest-framework-updated-interfaces",level:2},{value:"<strong>Other known issues in this Beta</strong>",id:"other-known-issues-in-this-beta",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 31st March 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("h1",{id:"new-experimental-features"},"New Experimental Features!"),(0,r.kt)("p",null,"In this week's Caves and Cliffs beta we have added the cute (but deadly) axolotl, deepslate blocks, and fixed several bugs!"),(0,r.kt)("p",null,"As always with our Bedrock betas, you will need to enable the Caves and Cliffs Experimental Features Toggle to check out the features in your beta worlds (You can find out more about using the toggles at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),".)"),(0,r.kt)("p",null,"You can leave us your feedback for these features in the threads at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360091158772/axolotl_header_1170x500.jpg",alt:"axolotl_header_1170x500.jpg"})),(0,r.kt)("h1",{id:"axolotl"},"Axolotl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spawning - axolotls will spawn underground, in water"),(0,r.kt)("li",{parentName:"ul"},"Tempting & Breeding - Holding a bucket of tropical fish will cause nearby axolotls to follow the player on both land and water. Axolotls cannot be tamed but they can be bred by feeding them buckets of tropical fish"),(0,r.kt)("li",{parentName:"ul"},"Attacking - axolotls will attack fish, squid, drowned, and guardians!"),(0,r.kt)("li",{parentName:"ul"},"Colours - axolotls come in a variety of colours, all with an equal chance of spawning except for blue. Blue axolotls have a small chance of spawning as a mutation when breeding 2 axolotls"),(0,r.kt)("li",{parentName:"ul"},"Drying Out - axolotls can survive on dry land for a few minutes. After that they will start to dry out and take continuous damage until rehydrated"),(0,r.kt)("li",{parentName:"ul"},"Playing Dead - When taking damage, there is a chance that the axolotl will play dead. While playing dead, the axolotl will regenerate health and mobs will be unable to target the axolotl"),(0,r.kt)("li",{parentName:"ul"},"Combat Regeneration - When a player kills a mob that the axolotl was attacking, they are rewarded with the regeneration effect and their mining fatigue is removed if they have it"),(0,r.kt)("li",{parentName:"ul"},"Bucketing - axolotls can be picked up with buckets, like fish")),(0,r.kt)("h1",{id:"deepslate"},"Deepslate"),(0,r.kt)("p",null,"The following Deepslate blocks have been added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deepslate"),(0,r.kt)("li",{parentName:"ul"},"Cobbled Deepslate"),(0,r.kt)("li",{parentName:"ul"},"Cobbled Deepslate Slab"),(0,r.kt)("li",{parentName:"ul"},"Cobbled Deepslate Stairs"),(0,r.kt)("li",{parentName:"ul"},"Cobbled Deepslate Wall"),(0,r.kt)("li",{parentName:"ul"},"Polished Deepslate"),(0,r.kt)("li",{parentName:"ul"},"Polished Deepslate Slab"),(0,r.kt)("li",{parentName:"ul"},"Polished Deepslate Stairs"),(0,r.kt)("li",{parentName:"ul"},"Polished Deepslate Wall"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Tiles"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Tile Slab"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Tile Stairs"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Tile Wall"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Bricks"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Brick Slab"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Brick Stairs"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Brick Wall"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Lapis Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Iron Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Gold Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Redstone Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Diamond Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Coal Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Emerald Ore"),(0,r.kt)("li",{parentName:"ul"},"Deepslate Copper Ore"),(0,r.kt)("li",{parentName:"ul"},"CrackedDeepslateTiles"),(0,r.kt)("li",{parentName:"ul"},"CrackedDeepslateBricks"),(0,r.kt)("li",{parentName:"ul"},"Chiseled Deepslate")),(0,r.kt)("h2",{id:"generation"},(0,r.kt)("strong",{parentName:"h2"},"Generation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deepslate is generated in blobs below y = 16"),(0,r.kt)("li",{parentName:"ul"},"Ore is generated as normal, when ore is generated where Deepslate has been generated, Deepslate ore is generated instead")),(0,r.kt)("h2",{id:"known-issues"},(0,r.kt)("strong",{parentName:"h2"},"Known Issues:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axolotls don't spawn naturally in the world"),(0,r.kt)("li",{parentName:"ul"},"Leads attached to axolotls float too high above their heads")),(0,r.kt)("h1",{id:"bug-fixes-and-tweaks"},"Bug Fixes and Tweaks"),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved underwater visibility in all sorts of water, water-filled caverns in particular"),(0,r.kt)("li",{parentName:"ul"},"Oxidized Copper Block variants can now be waxed!"),(0,r.kt)("li",{parentName:"ul"},"Tweaked which blocks can be placed on pointed dripstone, to match the Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116098"},"MCPE-116098"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116056"},"MCPE-116056"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116050"},"MCPE-116050"),")"),(0,r.kt)("li",{parentName:"ul"},"Pointed dripstone now correctly breaks when pushed by piston (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116095"},"MCPE-116095"),")"),(0,r.kt)("li",{parentName:"ul"},"Dripstone and pointed dripstone now have correct sounds when walking/jumping on them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119694"},"MCPE-119694"),")"),(0,r.kt)("li",{parentName:"ul"},"Glow lichen is now under the nature category of the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122600"},"MCPE-122600"),")"),(0,r.kt)("li",{parentName:"ul"},"Lightning Rods now correctly activate Observers when struck by lightning"),(0,r.kt)("li",{parentName:"ul"},"Big dripleaf can now be waterlogged"),(0,r.kt)("li",{parentName:"ul"},"Big dripleaf now untilts correctly after getting hit by a projectile (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121666"},"MCPE-121666"),")"),(0,r.kt)("li",{parentName:"ul"},"Small dripleaf can now also be placed on dirt, farmland, grass, moss block, and podzol as long as its stem is underwater"),(0,r.kt)("li",{parentName:"ul"},"Moss block now blocks water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121796"},"MCPE-121796"),")"),(0,r.kt)("li",{parentName:"ul"},"Ladder, vines, twisting vines, weeping vines, sweet berry bush, nether sprouts, and fire can now be placed on Moss blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121828"},"MCPE-121828"),")"),(0,r.kt)("li",{parentName:"ul"},"Spore Blossom correctly drop itself when broken with Shears (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122054"},"MCPE-122054"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now pathfind across moss blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121967"},"MCPE-121967"),")"),(0,r.kt)("li",{parentName:"ul"},'Lush caves can now contain classic "jungle" vines'),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the screen reader did not read the focused button on some screens"),(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where English screen reader pronounced "A button" as "a button", now saying "Button A" instead'),(0,r.kt)("li",{parentName:"ul"},"Trident in Players' and Mobs' hands are now correctly positioned in all perspective modes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116681"},"MCPE-116681"),")"),(0,r.kt)("li",{parentName:"ul"},"Trident raising animation modified for first person to more closely match the previous version"),(0,r.kt)("li",{parentName:"ul"},"Water Buckets can now be used to pick up fish (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94520"},"MCPE-94520"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rabbits can now raid carrot crops (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-113321"},"MCPE-113321"),")"),(0,r.kt)("li",{parentName:"ul"},"Animals can no longer be fed infinitely until they are bred (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19309"},"MCPE-19309"),")")),(0,r.kt)("h1",{id:"technical-fixes-and-changes"},"Technical Fixes and Changes"),(0,r.kt)("h2",{id:"gametest-framework-updated-interfaces"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework updated interfaces:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GameTest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"function assertEntityData(position : BlockLocation, entityIdentifier : string, callback : function(entity: Entity)) - Asserts that the given condition is true for all entities of the given type at the given location"),(0,r.kt)("li",{parentName:"ul"},"function spawnItem(itemType : ItemStack, position : Location) - Spawns an item at the given location"),(0,r.kt)("li",{parentName:"ul"},"function assertIsWaterlogged(position : BlockLocation, isWaterlogged : bool) - Asserts that the block at the given location is waterlogged"),(0,r.kt)("li",{parentName:"ul"},"function assertRedstonePower(position : BlockLocation, power : number) - Asserts the redstone power level at the given location"),(0,r.kt)("li",{parentName:"ul"},"Added Commands.run"))),(0,r.kt)("li",{parentName:"ul"},"New Effect APIs on the Entity Type"),(0,r.kt)("li",{parentName:"ul"},"function getAmplifier() - Gets the effect's amplifier level"),(0,r.kt)("li",{parentName:"ul"},"function getDuration() - Gets the effect's remaining duration"),(0,r.kt)("li",{parentName:"ul"},"function addEffect(effectType : EffectType, duration : number, amplifier: number) - Adds an effect to the Entity"),(0,r.kt)("li",{parentName:"ul"},"function getEffect(effectType : EffectType) - Gets an effect from the Entity"),(0,r.kt)("li",{parentName:"ul"},"Updated constructor to ItemStack"),(0,r.kt)("li",{parentName:"ul"},"Updated ItemType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"constructor (x : number, y: number, z: number) - World coordinate"),(0,r.kt)("li",{parentName:"ul"},"function getName() - gets the item's name"))),(0,r.kt)("li",{parentName:"ul"},"Add new enumerations: Minecraft.Effects & Minecraft.Items")),(0,r.kt)("h2",{id:"other-known-issues-in-this-beta"},(0,r.kt)("strong",{parentName:"h2"},"Other known issues in this Beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Placing Glow lichen on all sides of a single block can cause a crash (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122599"},"MCPE-122599"),")")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905),o=a(31792),i=a(85162),s=a(18386);const u={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],h={toc:m};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{rightElement:(0,l.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(r.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},53343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(61499),o=a(48163);const i={sidebar_position:99999872,title:"1.16.230.52",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},s="Minecraft Beta - 1.16.230.52 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.16/230/52",id:"official_changelog/preview/1.16/230/52",title:"1.16.230.52",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/230/52.mdx",sourceDirName:"official_changelog/preview/1.16/230",slug:"/official_changelog/preview/1.16/230/52",permalink:"/docs/official_changelog/preview/1.16/230/52",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/230/52.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999872,frontMatter:{sidebar_position:99999872,title:"1.16.230.52",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.230.54",permalink:"/docs/official_changelog/preview/1.16/230/54"},next:{title:"1.16.230.50",permalink:"/docs/official_changelog/preview/1.16/230/50"}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11623052-xbox-onewindows-10android"},"Minecraft Beta - 1.16.230.52 (Xbox One/Windows 10/Android)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);