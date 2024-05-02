"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35551,18480,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>l});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),d=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,a.useEffect)((()=>(l(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function w(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},24041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.16/220/50/gameplay",id:"changelog_source/preview/1.16/220/50/gameplay",title:"gameplay",description:"Posted: 4th March 2021",source:"@site/docs/changelog_source/preview/1.16/220/50/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/220/50",slug:"/changelog_source/preview/1.16/220/50/gameplay",permalink:"/docs/changelog_source/preview/1.16/220/50/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/220/50/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Experimental Features:</strong>",id:"new-experimental-features",level:2},{value:"<strong>Please note:</strong> The blending between the old generation and the new generation in this beta is not finalized yet. We want to make sure we respect players&#39; old worlds being upgraded to the new world generation and are working hard to improve the biome blending for the full Caves and Cliffs release!",id:"please-note-the-blending-between-the-old-generation-and-the-new-generation-in-this-beta-is-not-finalized-yet-we-want-to-make-sure-we-respect-players-old-worlds-being-upgraded-to-the-new-world-generation-and-are-working-hard-to-improve-the-biome-blending-for-the-full-caves-and-cliffs-release",level:2},{value:"<strong>Mountains</strong>",id:"mountains",level:2},{value:"<strong>Glow Squid</strong>",id:"glow-squid",level:2},{value:"<strong>Dripstone Fixes:</strong>",id:"dripstone-fixes",level:2},{value:"<strong>Performance and Stability:</strong>",id:"performance-and-stability",level:2},{value:"<strong>General:</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Villages</strong>",id:"villages",level:2},{value:"<strong>Technical Fixes and Changes</strong>",id:"technical-fixes-and-changes",level:2},{value:"<strong>Various updates to GameTest Framework:</strong>",id:"various-updates-to-gametest-framework",level:2},{value:"<strong>Movement prediction</strong>",id:"movement-prediction",level:2},{value:"<strong>Other:</strong>",id:"other",level:2},{value:"<strong>Network Packets</strong>",id:"network-packets",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 4th March 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions\xa0")),(0,r.kt)("h2",{id:"new-experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"New Experimental Features:")),(0,r.kt)("p",null,'In this week\'s beta we have some exciting new Caves and Cliffs features that are accessible by enabling the "Experimental Features" toggle on your worlds! (You can find out more about using the toggles at ',(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),".)"),(0,r.kt)("h2",{id:"please-note-the-blending-between-the-old-generation-and-the-new-generation-in-this-beta-is-not-finalized-yet-we-want-to-make-sure-we-respect-players-old-worlds-being-upgraded-to-the-new-world-generation-and-are-working-hard-to-improve-the-biome-blending-for-the-full-caves-and-cliffs-release"},(0,r.kt)("strong",{parentName:"h2"},"Please note:")," The blending between the old generation and the new generation in this beta is not finalized yet. We want to make sure we respect players' old worlds being upgraded to the new world generation and are working hard to improve the biome blending for the full Caves and Cliffs release!"),(0,r.kt)("p",null,"You can leave us your feedback for these features in the threads at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360088354971/img_752.JPG",alt:"img_752.JPG"})),(0,r.kt)("h2",{id:"mountains"},(0,r.kt)("strong",{parentName:"h2"},"Mountains")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introducing the new mountain sub biomes: Lofty Peaks, Snow Capped Peaks, Snowy Slopes, Mountain Grove, and Mountain Meadow!"),(0,r.kt)("li",{parentName:"ul"},"To accommodate the new Mountains we are raising the world height from 256 to 320 blocks with new Mountain generation up to a maximum of 256 blocks height"),(0,r.kt)("li",{parentName:"ul"},"For true alpinists: Iron, Coal and Emerald ores are generated in mountains"),(0,r.kt)("li",{parentName:"ul"},"Updated textures for Iron, Coal, Emerald, Diamond, Gold, Lapis, Copper, and Redstone ores"),(0,r.kt)("li",{parentName:"ul"},"Mountain terrain will now generate as part of Overworld world generation"),(0,r.kt)("li",{parentName:"ul"},"Move goat spawn from Extreme Hills to Snowy Slopes and allow rabbits to spawn in Mountain Grove")),(0,r.kt)("h2",{id:"glow-squid"},(0,r.kt)("strong",{parentName:"h2"},"Glow Squid")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The glow squid has been reintroduced to the beta!"),(0,r.kt)("li",{parentName:"ul"},"Glow Squid now emits glow colored ink particles when hurt (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117500"},"MCPE-117500"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now use dye to color sign text"),(0,r.kt)("li",{parentName:"ul"},"Squid's model is no longer offset in the -Y direction (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-114253"},"MCPE-114253"),")"),(0,r.kt)("li",{parentName:"ul"},"Added Glow Squid, Glow Ink Sacs and Glow Item Frames")),(0,r.kt)("h1",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Bug Fixes")),(0,r.kt)("h2",{id:"dripstone-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Dripstone Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Placing Pointed Dripstone blocks in water no longer results in the water being removed"),(0,r.kt)("li",{parentName:"ul"},"When hanging Pointed Dripstones start falling their position now has the correct offset"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the visual shape of Pointed Dripstone to match Java"),(0,r.kt)("li",{parentName:"ul"},"Crouching while placing pointed dripstone prevents the opposing stalactite and stalagmite to merge"),(0,r.kt)("li",{parentName:"ul"},"Standing on a Stalagmite and jumping will cause half heart fall damage when landing"),(0,r.kt)("li",{parentName:"ul"},"Pointed Dripstone now has the correct hitbox"),(0,r.kt)("li",{parentName:"ul"},"Pointed Dripstone blocks are no longer destroyed by flowing lava"),(0,r.kt)("li",{parentName:"ul"},"Pointed Dripstone now has the correct size and rotation when held in hand"),(0,r.kt)("li",{parentName:"ul"},"Stalactite death message is no longer ending with a dot"),(0,r.kt)("li",{parentName:"ul"},"Falling stalactite now deals correct fall damage"),(0,r.kt)("li",{parentName:"ul"},"Pointed Dripstone drips only lava in the Nether (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115393"},"MCPE-115393"),")"),(0,r.kt)("li",{parentName:"ul"},"Being killed by dripstone now displays correct death message"),(0,r.kt)("li",{parentName:"ul"},"Correct sounds are now played for Dripstone and Pointed Dripstone blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115283"},"MCPE-115283"),")"),(0,r.kt)("li",{parentName:"ul"},"Cauldrons can now fill up with water or lava when below stalactites that are dripping one of those liquids (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115363"},"MCPE-115363"),")"),(0,r.kt)("li",{parentName:"ul"},"Throwing a trident on a pointed dripstone block breaks it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115281"},"MCPE-115281"),")"),(0,r.kt)("li",{parentName:"ul"},"Added Dripstone block. It can be crafted from four Pointed Dripstones")),(0,r.kt)("h2",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance and Stability:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when trying to rename a map on anvil while having its second slot occupied (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-112905"},"MCPE-112905"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Powder Snow can no longer be placed in positions that already contain other blocks, such as Fence Posts or Iron Bars"),(0,r.kt)("li",{parentName:"ul"},"Glow signs are no longer unlit on DX11 and Mobile platforms (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117524"},"MCPE-117524"),")"),(0,r.kt)("li",{parentName:"ul"},"Actor selectors no longer allow self selection with cheats disabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92635"},"MCPE-92635"),")"),(0,r.kt)("li",{parentName:"ul"},"Projectiles now pass through Structure Void blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-103579"},"MCPE-103579"),")"),(0,r.kt)("li",{parentName:"ul"},"Zombie, Zombie Villager, Husk, Pillager, Vindicator use correct bone to attach shields (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98606"},"MCPE-98606"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs that pick up Shield now place it to their off-hand"),(0,r.kt)("li",{parentName:"ul"},"Visitors now drop inventory on death (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47563"},"MCPE-47563"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved placement rules for placing blocks on sides of Stair, Slab and Top Snow block"),(0,r.kt)("li",{parentName:"ul"},'Controllers are now able to select the "Button Mode" toggle in the Advanced Settings NPC screen in the Jurassic World pack (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66446"},"MCPE-66446"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command block in a command block chain will list the correct amount of ticking areas when a new ticking area is added before listing"),(0,r.kt)("li",{parentName:"ul"},"Title command no longer duplicates % symbols in message (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51033"},"MCPE-51033"),")"),(0,r.kt)("li",{parentName:"ul"},"Using teleport with execute command now uses the dimension of the origin for its operations (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44104"},"MCPE-44104"),")")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Results" field for search within the marketplace inventory now updates properly between different sections within the screen')),(0,r.kt)("h2",{id:"accessibility"},(0,r.kt)("strong",{parentName:"h2"},"Accessibility")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabled screen narration with touch input on the new achievements screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Text-to-speech read the wrong text while using VR")),(0,r.kt)("h2",{id:"villages"},(0,r.kt)("strong",{parentName:"h2"},"Villages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Villagers are no longer able to go through walls to sleep in a bed if the bed is adjacent to them")),(0,r.kt)("h2",{id:"technical-fixes-and-changes"},(0,r.kt)("strong",{parentName:"h2"},"Technical Fixes and Changes")),(0,r.kt)("h2",{id:"various-updates-to-gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"Various updates to GameTest Framework:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Blocks shorthand helpers to be camelCase"),(0,r.kt)("li",{parentName:"ul"},"Updated Blocks shorthand to only include vanilla blocks"),(0,r.kt)("li",{parentName:"ul"},"Added Blocks.get to fetch a block and return null if it doesn't exist"),(0,r.kt)("li",{parentName:"ul"},"Added BlockStates to enumerate all block states"),(0,r.kt)("li",{parentName:"ul"},"Added setState to Block to update its block state"),(0,r.kt)("li",{parentName:"ul"},"Added BlockPos class"),(0,r.kt)("li",{parentName:"ul"},"Added ItemStack class GameTest Module:"),(0,r.kt)("li",{parentName:"ul"},"Added Tags to enumerate all built-in tags"),(0,r.kt)("li",{parentName:"ul"},"Updated all methods that took x, y, z position to take a BlockPos"),(0,r.kt)("li",{parentName:"ul"},"Exposed padding when registering game test"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where previous failed GameTest markers still show up in new worlds")),(0,r.kt)("h2",{id:"movement-prediction"},(0,r.kt)("strong",{parentName:"h2"},"Movement prediction")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed projectiles on 3rd-party servers ignoring server movement packets"),(0,r.kt)("li",{parentName:"ul"},"The server will adjust the player's fall distance to take into account the client player's position when a player movement correction or anomaly is detected")),(0,r.kt)("h2",{id:"other"},(0,r.kt)("strong",{parentName:"h2"},"Other:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the way GameTest packs are loaded. Additional files are referenced by the primary file as specified by the 'entry' field in the manifest.json"),(0,r.kt)("li",{parentName:"ul"},"A black screen no longer covers the player icon in the pause menu in some worlds. Content creators no longer need to override both focus","_","border","_","frame.png and pause","_","screen","_","border.png for correct behavior"),(0,r.kt)("li",{parentName:"ul"},"Assertion is changed to content log error for the missing textures caused by the outdated resource packs of the Marketplace world templates"),(0,r.kt)("li",{parentName:"ul"},'Items can now have the "transparentattachable" tag applied to make attachable items not render for the player wearing them in the first person perspective'),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where V2 Villagers were not properly updating their molang variables on initialization")),(0,r.kt)("h2",{id:"network-packets"},(0,r.kt)("strong",{parentName:"h2"},"Network Packets")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed cipher algorithm to AESGCM256 for UDP stream")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905),i=n(31792),l=n(85162),s=n(18386);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],h={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},57874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),i=n(24041);const l={sidebar_position:99999876,title:"1.16.220.50",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},s="Minecraft Beta - 1.16.220.50 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/220/50",id:"official_changelog/preview/1.16/220/50",title:"1.16.220.50",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/220/50.mdx",sourceDirName:"official_changelog/preview/1.16/220",slug:"/official_changelog/preview/1.16/220/50",permalink:"/docs/official_changelog/preview/1.16/220/50",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/220/50.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999876,frontMatter:{sidebar_position:99999876,title:"1.16.220.50",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.220.51",permalink:"/docs/official_changelog/preview/1.16/220/51"},next:{title:"1.16.210.61",permalink:"/docs/official_changelog/preview/1.16/210/61"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11622050-xbox-onewindows-10android"},"Minecraft Beta - 1.16.220.50 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);