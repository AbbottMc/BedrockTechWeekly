"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[67821,21032,30439,63835,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=r,d=g["".concat(i,".").concat(p)]||g[p]||m[p]||o;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function l(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,i]=o({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),m(s))}}),[c,u]=o({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},m=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,n.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{i(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),s=a(23104),l=a(56347),i=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=d({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=i??g;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),p=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==l&&(m(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},96963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},s=void 0,l={unversionedId:"changelog_source/preview/1.19/30/22/gameplay",id:"changelog_source/preview/1.19/30/22/gameplay",title:"gameplay",description:"Posted: 17th August 2022",source:"@site/docs/changelog_source/preview/1.19/30/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/30/22",slug:"/changelog_source/preview/1.19/30/22/gameplay",permalink:"/docs/changelog_source/preview/1.19/30/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Please Note:</strong> The Beta update on Android will be delayed by at least 24 hours, thank you for your patience!",id:"please-note-the-beta-update-on-android-will-be-delayed-by-at-least-24-hours-thank-you-for-your-patience",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:3},{value:"<strong>Chest Boats</strong>",id:"chest-boats",level:3},{value:"<strong>Items</strong>",id:"items",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items-1",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Mobs</strong>",id:"mobs-1",level:2},{value:"<strong>Music</strong>",id:"music",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 17th August 2022"),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions\xa0")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/8485735950989/beta19U3_3_16x9.jpg",alt:"A Minecraft screenshot featuring a chestboat and allays"})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and send us ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.yg)("h2",{id:"please-note-the-beta-update-on-android-will-be-delayed-by-at-least-24-hours-thank-you-for-your-patience"},(0,r.yg)("strong",{parentName:"h2"},"Please Note:")," The Beta update on Android will be delayed by at least 24 hours, thank you for your patience!"),(0,r.yg)("h1",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h1"},"Vanilla Parity")),(0,r.yg)("h3",{id:"spectator-mode-experimental"},(0,r.yg)("strong",{parentName:"h3"},"Spectator Mode (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players in Spectator Mode are no longer affected by the Powder Snow fog effect (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156683"},"MCPE-156683"),")"),(0,r.yg)("li",{parentName:"ul"},"Sadly, any leashed animals will not follow spectators anymore (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157065"},"MCPE-157065)")),(0,r.yg)("li",{parentName:"ul"},"Players in Spectator Mode no longer emit particles while sprinting (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160397"},"MCPE-160397"),")"),(0,r.yg)("li",{parentName:"ul"},"Spectator players with status effects applied no longer emit particles (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160398"},"MCPE-160398"),")")),(0,r.yg)("h3",{id:"chest-boats"},(0,r.yg)("strong",{parentName:"h3"},"Chest Boats")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where Boats with Chests would not drop the Chest's contents when destroyed by the /kill command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160186"},"MCPE-160186"),")")),(0,r.yg)("h3",{id:"items"},(0,r.yg)("strong",{parentName:"h3"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Eating a stew will now leave the empty Bowl in the slot it was eaten from (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-56367"},"MCPE-56367"),")"),(0,r.yg)("li",{parentName:"ul"},"Drinking a potion will now leave the empty Glass Bottle in the slot you drank it from rather than your first empty inventory slot (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-26436"},"MCPE-26436"),")")),(0,r.yg)("h3",{id:"mobs"},(0,r.yg)("strong",{parentName:"h3"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Drowned no longer spawn in Warm Ocean biomes")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Oak and Mangrove Fence Gates are now flammable (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160098"},"MCPE-160098"),")")),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disallow Fireballs from travelling through portals to prevent an issue where they could become permanently stuck (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160938"},"MCPE-160938"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed dropped items getting stuck at the edge of flowing water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157167"},"MCPE-157167"),")")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where certain water textures with waterlogged blocks displayed the wrong texture (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156281"},"MCPE-156281"),")"),(0,r.yg)("li",{parentName:"ul"},"Sky in The End dimension will no longer look like static upon entry while it is raining in the Overworld (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148843"},"MCPE-148843"),")")),(0,r.yg)("h2",{id:"items-1"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where some custom items (from Creator Features packs), after being used, were duplicated upon player's death (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128897"},"MCPE-128897"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a regression where an undamaged tool, such as Pickaxe, when name changed on an Anvil, would fail to work correctly when used for the first time (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152637"},"MCPE-152637"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where some blocks that require a supporting block (for example Carpet or crops) did not appear on Maps when placed on a non-full block or above an air block (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159713"},"MCPE-159713"),")")),(0,r.yg)("h2",{id:"marketplace"},(0,r.yg)("strong",{parentName:"h2"},"Marketplace")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Most common Marketplace connection issues will now automatically resolve themselves when conditions improve without needing to restart Minecraft (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155025"},"MCPE-155025"),")\xa0")),(0,r.yg)("h2",{id:"mobs-1"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Allays and Bees should no longer get stuck on Lanterns or other low hanging objects (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155777"},"MCPE-155777"),")")),(0,r.yg)("h2",{id:"music"},(0,r.yg)("strong",{parentName:"h2"},"Music")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Music is now included in the mobile app and no longer has to be downloaded from Marketplace")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed performance issues when Striders are being ridden by baby Striders (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-146478"},"MCPE-146478"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The arrow within the crafting Pocket UI now fits appropriately without any clipping issues")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed a bug where a "%" was prepended to player names in the chat output of "/scoreboard players reset" (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151389"},"MCPE-151389"),")"),(0,r.yg)("li",{parentName:"ul"},'Attempting to kill a player in Creative Mode using the "/kill" command now displays a message informing the player that it cannot be done (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-16732"},"MCPE-16732"),")")))}m.isMDXComponent=!0},97287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));a(57350);const o={},s=void 0,l={unversionedId:"changelog_source/preview/1.19/30/22/tech",id:"changelog_source/preview/1.19/30/22/tech",title:"tech",description:"Actors",source:"@site/docs/changelog_source/preview/1.19/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/30/22",slug:"/changelog_source/preview/1.19/30/22/tech",permalink:"/docs/changelog_source/preview/1.19/30/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Data-Driven Block Components</strong>",id:"data-driven-block-components",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"actors"},(0,r.yg)("strong",{parentName:"h2"},"Actors")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Non-Parrot mobs on a player's shoulder will now adjust their position when the player crouches (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153996"},"MCPE-153996"),")")),(0,r.yg)("h2",{id:"data-driven-block-components"},(0,r.yg)("strong",{parentName:"h2"},"Data-Driven Block Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enables creators to add geometry up to 0.875 units outside of the regular block unit cube on any one side")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Coral Fans now look identical when placed facing North, West, East, and South (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125311"},"MCPE-125311"),")")),(0,r.yg)("h2",{id:"marketplace"},(0,r.yg)("strong",{parentName:"h2"},"Marketplace")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Text To Speech no longer ignores the volume setting on startup")),(0,r.yg)("h2",{id:"molang"},(0,r.yg)("strong",{parentName:"h2"},"Molang")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Clarified the documentation for ",(0,r.yg)("em",{parentName:"li"},"equipment","_","count")," to indicate it only counts equipped armor, and how to query for held items (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-136134"},"MCPE-136134"),")")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The \"/execute at\" command now properly executes filters from the specified 'at' position (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156283"},"MCPE-156283"),")")),(0,r.yg)("h2",{id:"gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Script Command",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added new sub-command\xa0",(0,r.yg)("em",{parentName:"li"},"/script watchdog exportstats"),"-"," Exports a file containing memory usage and object handle statistics")))),(0,r.yg)("h2",{id:"touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Can now switch hotbar slots while targeting a block while in a Boat (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156814"},"MCPE-156814"),")")))}m.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var n=a(58168),r=a(96540),o=a(15680),s=a(18228),l=a(19365),i=a(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p},h="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{rightElement:(0,o.yg)(i.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(58168),r=a(96540),o=a(15680),s=a(18228),l=a(19365);const i={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},m=[],p={toc:m},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.yg)(s.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},72184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),s=a(96963),l=a(97287);const i={sidebar_position:99999804,title:"1.19.30.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.30.22",u={unversionedId:"official_changelog/preview/1.19/30/22",id:"official_changelog/preview/1.19/30/22",title:"1.19.30.22",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/30/22.mdx",sourceDirName:"official_changelog/preview/1.19/30",slug:"/official_changelog/preview/1.19/30/22",permalink:"/docs/official_changelog/preview/1.19/30/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/30/22.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999804,frontMatter:{sidebar_position:99999804,title:"1.19.30.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.30.23",permalink:"/docs/official_changelog/preview/1.19/30/23"},next:{title:"1.19.30.21",permalink:"/docs/official_changelog/preview/1.19/30/21"}},g={},m=[],p={toc:m},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1193022"},"Minecraft Beta & Preview - 1.19.30.22"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);