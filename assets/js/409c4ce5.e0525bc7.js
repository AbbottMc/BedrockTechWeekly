"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44497,78264,29933,93665,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||l;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(67294),r=a(62706);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=l({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),d(o))}}),[c,u]=l({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),h=()=>{r.p.switchHidden(),t(r.p.isHidden())},d=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||h()};return(0,n.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:h},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>l});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function h(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??h(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=p({queryString:a,groupId:n}),[h,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??h;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=h.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=h.indexOf(e.currentTarget)+1;t=h[a]??h[0];break}case"ArrowLeft":{const a=h.indexOf(e.currentTarget)-1;t=h[a]??h[h.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>h.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},55376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.18/30/22-23/gameplay",id:"changelog_source/preview/1.18/30/22-23/gameplay",title:"gameplay",description:"Posted: 9 March 2022",source:"@site/docs/changelog_source/preview/1.18/30/22-23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/30/22-23",slug:"/changelog_source/preview/1.18/30/22-23/gameplay",permalink:"/docs/changelog_source/preview/1.18/30/22-23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/22-23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Information on the Minecraft Preview and Beta:\u202f\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"\xa0Known Issues",id:"known-issues",level:3},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:2},{value:"Sculk",id:"sculk",level:3},{value:"<strong>Please note:</strong> The Warden hasn\u2019t made its way into the game yet, but it\u2019s getting ready for its big debut!",id:"please-note-the-warden-hasnt-made-its-way-into-the-game-yet-but-its-getting-ready-for-its-big-debut",level:2},{value:"Darkness Effect",id:"darkness-effect",level:3},{value:"<strong>Updated Touch Controls</strong>",id:"updated-touch-controls",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Villagers</strong>",id:"villagers",level:3}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 9 March 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},"Information on the Minecraft Preview and Beta:\u202f\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preview Version: 1.18.30.23 (iOS: 1.18.30.24) | Beta Version: 1.18.30.22\u202f\xa0"),(0,r.kt)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content\u202f\xa0"),(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\u202f\xa0"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"),"\u202f\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see\u202f",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\u202ffor detailed instructions")),(0,r.kt)("p",null,"\u202f ",(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4675726978061/allay_beta16x9_resize.jpg",alt:"A Minecraft screenshot showing the new mob, the Allay!"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at\u202f",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),". We would love to hear what you think of the Allay, and you can send us your feedback ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/AllayBetaFeedback"},"here"),"."),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allay can collect the same items from the world as it holds in its hand"),(0,r.kt)("li",{parentName:"ul"},"If an Allay holds an item it got from a player, it will follow that player"),(0,r.kt)("li",{parentName:"ul"},"The Allay is able to drop items at nearby Note Blocks"),(0,r.kt)("li",{parentName:"ul"},"When playing a Note Block near an Allay, that Note Block becomes the Allays favourite Note Block for 30 seconds, and the Allay will attempt to drop off items at the Note Block rather than at the player"),(0,r.kt)("li",{parentName:"ul"},"If an Allay has items in its inventory, it will attempt to give them to its owner"),(0,r.kt)("li",{parentName:"ul"},"The Allay sometimes spawns in cages next to Pillager Outposts (similar to Iron Golem), and inside Woodland Mansions")),(0,r.kt)("h3",{id:"known-issues"},"\xa0Known Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Allay may get stuck in a loop collecting and delivering one item from its inventory, especially when similar block types are used (such as regular and red sand)")),(0,r.kt)("h2",{id:"deep-dark"},(0,r.kt)("strong",{parentName:"h2"},"Deep Dark")),(0,r.kt)("h3",{id:"sculk"},"Sculk"),(0,r.kt)("h2",{id:"please-note-the-warden-hasnt-made-its-way-into-the-game-yet-but-its-getting-ready-for-its-big-debut"},(0,r.kt)("strong",{parentName:"h2"},"Please note:")," The Warden hasn\u2019t made its way into the game yet, but it\u2019s getting ready for its big debut!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed Sculk Catalyst block to match recent redesign which is described below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A mysteriously soul-emitting block that blooms when mobs die within an 8-block radius"),(0,r.kt)("li",{parentName:"ul"},"Mobs that perish in the presence of the catalyst will not drop their experience"),(0,r.kt)("li",{parentName:"ul"},"Instead, a bubbling charge will be created at the place the mob perished"),(0,r.kt)("li",{parentName:"ul"},"This charge from mobs will spread through Sculk Veins and Sculk blocks in random directions until they find a valid substrate that they can convert into Sculk",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The value of the charge is directly proportional to the amount of XP the perished mob would have dropped, and each time a block is converted into Sculk, it will remove 1 value from that charge"),(0,r.kt)("li",{parentName:"ul"},"This charge in the Sculk blocks and Sculk Veins will eventually decay, but it will decay much, much slower in the close vicinity of the Sculk Catalyst, and much faster away from its host"),(0,r.kt)("li",{parentName:"ul"},"If the charge decays 4 blocks away from the catalyst, it has a chance of growing a Sculk Sensor or a Sculk Shrieker"),(0,r.kt)("li",{parentName:"ul"},"Charges and their values also merge when they move to the same position"))))),(0,r.kt)("li",{parentName:"ul"},"Made some changes to Sculk Sensors to be at parity with Java Edition",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They now make no activation sound when waterlogged"),(0,r.kt)("li",{parentName:"ul"},"Vibrations are now also occluded by Wool blocks")))),(0,r.kt)("h3",{id:"darkness-effect"},"Darkness Effect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new mob effect unique to the Warden and Sculk Shrieker, which will afflict players with the effect when nearby"),(0,r.kt)("li",{parentName:"ul"},"Lowers the gamma down at an equivalent of \u201cMoody\u201d while having this effect"),(0,r.kt)("li",{parentName:"ul"},"In periodic pulses, will lower the overall brightness of the world so that the darkness creeps up against light sources"),(0,r.kt)("li",{parentName:"ul"},"When the Warden is around, torches will be more important than ever!")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4675716512141/preview_beta_crosshair.png",alt:"A Minecraft screenshot showing updated mobile touch controls"})),(0,r.kt)("h2",{id:"updated-touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Updated Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enables preview of new touch control schemes for players on mobile devices"),(0,r.kt)("li",{parentName:"ul"},"These can be enabled by navigating to Settings ",">"," Touch ",">"," Enable New Touch Control Schemes"),(0,r.kt)("li",{parentName:"ul"},"Please let us know what you think ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MinecraftBetaFeedback"},"here"),"!")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the spawning logic for Iron Golems and Cats to make it easier for them to spawn in roofed areas, like underground villages (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142292"},"MCPE-142292"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding can no longer be placed without support on y=0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150765"},"MCPE-150765"),")"),(0,r.kt)("li",{parentName:"ul"},"Fire that exists before the Fire Tick game rule is enabled will continue to spread again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-140396"},"MCPE-140396"),")")),(0,r.kt)("h3",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h3"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shulkers now have a chance to spawn another Shulker when hit by a Shulker projectile (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104826"},"MCPE-104826"),")"),(0,r.kt)("li",{parentName:"ul"},'When a mob picks up an item, the item can be seen slightly "pulled" towards the mob right as it picks it up. This matches the behavior of Java Edition'),(0,r.kt)("li",{parentName:"ul"},"Blaze Fireball will deal knockback on impact"),(0,r.kt)("li",{parentName:"ul"},"Acacia Trees now grow Leaves on every branch below Y = 0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151386"},"MCPE-151386"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can no longer spawn on Campfires (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152770"},"MCPE-152770"),")")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow Lichen does not generate hanging in the air inside Strongholds anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123448"},"MCPE-123448)")),(0,r.kt)("li",{parentName:"ul"},"Glow Lichen now correctly checks for the face of the block they are attached to be full"),(0,r.kt)("li",{parentName:"ul"},"Glow Lichen can now be attached to Leaves"),(0,r.kt)("li",{parentName:"ul"},"Blocks such as Glow Lichen, Torches, and Redstone can no longer be placed on or attached to Brewing Stands\xa0"),(0,r.kt)("li",{parentName:"ul"},"Blocks such as Glow Lichen, Torches, and Redstone can now be placed on or attached to Trapdoors, depending on their state"),(0,r.kt)("li",{parentName:"ul"},"Azaleas and Lily Pads are now broken by flowing water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152040"},"MCPE-152040"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that would cause commands to affect players in all dimensions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152218"},"MCPE-152218"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed lighting bug where light level 1 incorrectly dropped to 0 when placing blocks in light level 1 with multiple light sources (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151266"},"MCPE-151266"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors and Magma Blocks are now visible in the darkness")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observers placed facing Double Chests no longer send out a Redstone pulse when reloading/re-entering a chunk")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where the "Invite" button was disabled incorrectly for clients'),(0,r.kt)("li",{parentName:"ul"},"Added Seed Templates to the advanced tab in the new Create New World screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151930"},"MCPE-151930)"))),(0,r.kt)("h3",{id:"villagers"},(0,r.kt)("strong",{parentName:"h3"},"Villagers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Villagers are no longer able to trade while on fire")))}h.isMDXComponent=!0},57762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.18/30/22-23/tech",id:"changelog_source/preview/1.18/30/22-23/tech",title:"tech",description:"Components",source:"@site/docs/changelog_source/preview/1.18/30/22-23/tech.mdx",sourceDirName:"changelog_source/preview/1.18/30/22-23",slug:"/changelog_source/preview/1.18/30/22-23/tech",permalink:"/docs/changelog_source/preview/1.18/30/22-23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/30/22-23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Technical Experimental</strong>",id:"technical-experimental",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"\xa0<strong>General</strong>",id:"general-1",level:2}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"components"},(0,r.kt)("strong",{parentName:"h2"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The trade screen will no longer open if the owner of the "minecraft:economy',"_","trade","_",'table" component is on fire')),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed block (Cactus, ChorusFlower, Crop, Grass, PointedDripstone, Sapling) tick rates to match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145612"},"MCPE-145612"),")"),(0,r.kt)("li",{parentName:"ul"},"Random tick positions will no longer be chosen below the world")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clarified documentation for query.is","_","item","_","name","_","any that the slot index is required when there is more than one slot, i.e. the hotbar")),(0,r.kt)("h2",{id:"technical-experimental"},(0,r.kt)("strong",{parentName:"h2"},"Technical Experimental")),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EntityType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0id: string- The identifier for the entity type"))),(0,r.kt)("li",{parentName:"ul"},"EntityTypes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0get(identifier: string): EntityType- Returns the corresponding EntityType for the given identifier"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0getAll(): EntityTypeIterator- Returns an iterator containing all registered entity types"))),(0,r.kt)("li",{parentName:"ul"},"MinecraftEntityTypes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provides EntityType constants for each standard Minecraft entity type")))),(0,r.kt)("h2",{id:"general-1"},"\xa0",(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed BlockImmovable, BlockBreakOnPushand BlockOnlyPistonPush components from data-driven blocks")))}h.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905),o=a(31792),i=a(85162),s=a(18386);const c={},u=void 0,h={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],p={toc:m};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{rightElement:(0,l.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(r.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),l=a(3905),o=a(31792),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},h={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(r.Fragment,null,a.techSapi)))}p.isMDXComponent=!0},71512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(61499),o=a(55376),i=a(57762);const s={sidebar_position:99999827,title:"1.18.30.22-23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},c="Minecraft Beta & Preview - 1.18.30.22/23",u={unversionedId:"official_changelog/preview/1.18/30/22-23",id:"official_changelog/preview/1.18/30/22-23",title:"1.18.30.22-23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.18/30/22-23.mdx",sourceDirName:"official_changelog/preview/1.18/30",slug:"/official_changelog/preview/1.18/30/22-23",permalink:"/docs/official_changelog/preview/1.18/30/22-23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/30/22-23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.18",permalink:"/docs/tags/1-18"}],version:"current",sidebarPosition:99999827,frontMatter:{sidebar_position:99999827,title:"1.18.30.22-23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.30.26-27",permalink:"/docs/official_changelog/preview/1.18/30/26-27"},next:{title:"1.18.30.20-21",permalink:"/docs/official_changelog/preview/1.18/30/20-21"}},h={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---118302223"},"Minecraft Beta & Preview - 1.18.30.22/23"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);