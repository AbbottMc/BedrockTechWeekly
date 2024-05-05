"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27401,68864,86094,70282,21032,97230,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,n.useEffect)((()=>(s(),c(),t(r.k.isHidden()),()=>{l(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),s=a(56347),l=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=d({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??g;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==s&&(p(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function N(e){const t=(0,f.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},79557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/40/23/gameplay",id:"changelog_source/preview/1.19/40/23/gameplay",title:"gameplay",description:"Posted: 29th September 2022",source:"@site/docs/changelog_source/preview/1.19/40/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/gameplay",permalink:"/docs/changelog_source/preview/1.19/40/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Mobile Touch Controls</strong>",id:"mobile-touch-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>NPC (EDU)</strong>",id:"npc-edu",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 29th September 2022"),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"for detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/9527542833677/R19U4_4_16x9.jpg",alt:"A Minecraft screenshot related to the fixes in this week's preview, with nether portal ruins, a wither skeleton, a villager, and various other mobs in the scene."})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and feel free to send us ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Getting killed by a mob with a renamed weapon now produces a death message with the item name (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162055"},"MCPE-162055"),")"),(0,r.yg)("li",{parentName:"ul"},"Wither Skeletons can now spawn inside of Wither Roses (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110127"},"MCPE-110127"),")"),(0,r.yg)("li",{parentName:"ul"},"Decreased the amount of hunger used while swimming to match Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154452"},"MCPE-154452"),")"),(0,r.yg)("li",{parentName:"ul"},"Librarian Villagers can now offer Enchanted Books with Curse of Vanishing and Curse of Binding (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84906"},"MCPE-84906"),")")),(0,r.yg)("h2",{id:"spectator-mode-experimental"},(0,r.yg)("strong",{parentName:"h2"},"Spectator Mode (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shulker bullets no longer follow Spectators (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162069"},"MCPE-162069"),")"),(0,r.yg)("li",{parentName:"ul"},"Spectators are now invisible to normal players"),(0,r.yg)("li",{parentName:"ul"},"If a player is in Spectator Mode and other non-spectating players are present on the server, the spectating player won't affect mob despawning anymore"),(0,r.yg)("li",{parentName:"ul"},"If there are only spectating players on the server, mob despawning is now put on hold")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where death messages were sometimes too long to fit on screen (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156550"},"MCPE-156550"),")"),(0,r.yg)("li",{parentName:"ul"},"The inventory button for touch devices is now reset to its default appearance after closing the inventory"),(0,r.yg)("li",{parentName:"ul"},"Fixed the crafting screen search string not saving correctly"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with the durability bar missing on inventory screens on Xbox (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162063"},"MCPE-162063"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the sign in button on Create New World didn't work on some platforms")),(0,r.yg)("h2",{id:"mobile-touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Mobile Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where items could not be removed from the hotbar by moving them onto other items in Creative Inventory on mobile devices"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the stack splitting progress bar was not aligned on touch mode"),(0,r.yg)("li",{parentName:"ul"},"Adjusted layout of the touch toolbar and status effect icons based on user feedback"),(0,r.yg)("li",{parentName:"ul"},"Temporarily disabled the preview of our new Touch Stack Splitting UX while we work through feedback")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When a mob is a passenger in a Boat, neither the Boat nor the mob are allowed to change dimension (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154919"},"MCPE-154919"),")")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The book of an Enchanting Table now properly faces a nearby player (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-29924"},"MCPE-29924"),")")),(0,r.yg)("h2",{id:"npc-edu"},(0,r.yg)("strong",{parentName:"h2"},"NPC (EDU)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NPCs can now have no name, hiding the nametag above their head")),(0,r.yg)("h2",{id:"marketplace"},(0,r.yg)("strong",{parentName:"h2"},"Marketplace")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with Marketplace bundle prices not showing as free after purchasing")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a potential crash source in explosions"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when leaving a split screen session")))}p.isMDXComponent=!0},55489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(85715),i=(a(49185),a(57350));const s={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/40/23/tech",id:"changelog_source/preview/1.19/40/23/tech",title:"tech",description:"Experimental Features",source:"@site/docs/changelog_source/preview/1.19/40/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech",permalink:"/docs/changelog_source/preview/1.19/40/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Major breaking change to experimental JavaScript APIs:</strong>",id:"major-breaking-change-to-experimental-javascript-apis",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2}],p={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Features")),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"major-breaking-change-to-experimental-javascript-apis"},(0,r.yg)("strong",{parentName:"h2"},"Major breaking change to experimental JavaScript APIs:")),(0,r.yg)("p",null,"All script modules have been renamed to follow a new convention.\xa0\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"mojang-gametest"),"-",">","\xa0",(0,r.yg)("em",{parentName:"li"},"@minecraft/server-gametest")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"mojang-minecraft"),"-",">","\xa0",(0,r.yg)("em",{parentName:"li"},"@minecraft/server")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"mojang-minecraft-ui"),"-",">","\xa0",(0,r.yg)("em",{parentName:"li"},"@minecraft/server-ui")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"mojang-minecraft-server-admin"),"-",">","\xa0",(0,r.yg)("em",{parentName:"li"},"@minecraft/server-admin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"mojang-net"),"-",">","\xa0",(0,r.yg)("em",{parentName:"li"},"@minecraft/server-net"))),(0,r.yg)("p",null,"For example, rather than using:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import * as mc from "mojang-minecraft";\n')),(0,r.yg)("p",null,"Use"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import * as mc from "@minecraft/server";\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use of script\xa0eval()and\xa0Function()\xa0must be explicitly enabled in \xa0json\xa0",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"To do this, set\xa0script","_","evalin\xa0capabilities")))),(0,r.yg)("p",null,'"capabilities": ',"[",'\xa0 "script',"_",'eval"',"]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Root path for imports has changed; scripts/prefix are no longer allowed."),(0,r.yg)("li",{parentName:"ul"},'For imports, use\xa0import "./source.js" or import "source.js"'),(0,r.yg)("li",{parentName:"ul"},'Deprecated use of\xa0import "scripts/source.js"')),(0,r.yg)("h2",{id:"actor-properties"},(0,r.yg)("strong",{parentName:"h2"},"Actor Properties")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed "bool',"_",'property" filters that didn\'t specify a "value"')),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Temporarily disabled the rotation for the /summon command while a bug is worked on"),(0,r.yg)("li",{parentName:"ul"},"Fixed a rotation issue when a Command Block executes 'execute facing' and 'execute rotated' (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162256"},"MCPE-162256"),")"),(0,r.yg)("li",{parentName:"ul"},"Implemented the '/execute in' command"),(0,r.yg)("li",{parentName:"ul"},"Implemented the \u2018/execute anchored \\<eyes|feet",">","\u2019 command")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Release BlockGeometryComponent out of experimental in JSON formats 1.19.40 and higher"),(0,r.yg)("li",{parentName:"ul"},"Release BlockMaterialInstancesComponent out of experimental in JSON formats 1.19.40 and higher"),(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,r.yg)("em",{parentName:"li"},"minecraft:block","_","light","_","filter_component to\xa0_minecraft:light","_","dampening"))))}d.isMDXComponent=!0},85715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/40/23/tech_sapi_stable",id:"changelog_source/preview/1.19/40/23/tech_sapi_stable",title:"tech_sapi_stable",description:"",source:"@site/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},49185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>m});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),s=a(19365),l=a(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m},h="wrapper";function f(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(s.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(s.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}f.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),s=a(19365);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},p=[],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.yg)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),i=a(79557),s=a(55489);const l={sidebar_position:99999797,title:"1.19.40.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.40.23",u={unversionedId:"official_changelog/preview/1.19/40/23",id:"official_changelog/preview/1.19/40/23",title:"1.19.40.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/40/23.mdx",sourceDirName:"official_changelog/preview/1.19/40",slug:"/official_changelog/preview/1.19/40/23",permalink:"/docs/official_changelog/preview/1.19/40/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/40/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999797,frontMatter:{sidebar_position:99999797,title:"1.19.40.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.40.24",permalink:"/docs/official_changelog/preview/1.19/40/24"},next:{title:"1.19.40.22",permalink:"/docs/official_changelog/preview/1.19/40/22"}},g={},p=[],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1194023"},"Minecraft Beta & Preview - 1.19.40.23"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);