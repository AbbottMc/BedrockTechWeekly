"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32801,10911,29933,25585,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>i});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,l]=o({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),d(s))}}),[c,u]=o({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,a.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{l(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=n(72389);const f="tabList_TRJ7",w="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},s,{className:(0,o.Z)("tabs__item",w,s?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},36011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"changelog_source/preview/1.16/230/54/gameplay",id:"changelog_source/preview/1.16/230/54/gameplay",title:"gameplay",description:"Posted: 8th April 2021",source:"@site/docs/changelog_source/preview/1.16/230/54/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/230/54",slug:"/changelog_source/preview/1.16/230/54/gameplay",permalink:"/docs/changelog_source/preview/1.16/230/54/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/230/54/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Axolotl</strong>\xa0",id:"axolotl",level:2},{value:"<strong>Creative Inventory</strong>\xa0",id:"creative-inventory",level:2},{value:"<strong>Deepslate</strong>\xa0",id:"deepslate",level:2},{value:"<strong>Dripstone</strong>\xa0",id:"dripstone",level:2},{value:"<strong>Glow Lichen</strong>\xa0",id:"glow-lichen",level:2},{value:"<strong>Glow Squid</strong>\xa0",id:"glow-squid",level:2},{value:"<strong>Lush</strong>\xa0<strong>C**</strong>aves**\xa0",id:"lushcaves",level:2},{value:"<strong>Powder Snow</strong>\xa0",id:"powder-snow",level:2},{value:"<strong>Striders</strong>\xa0",id:"striders",level:2},{value:"<strong>Other Experimental Tweaks and Changes</strong>\xa0",id:"other-experimental-tweaks-and-changes",level:2},{value:"<strong>Structure Blocks</strong>\xa0",id:"structure-blocks",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Underwater Gameplay Experience</strong>\xa0",id:"underwater-gameplay-experience",level:2},{value:"<strong>User Interface</strong>\xa0",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 8th April 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,"It's time\xa0for another Bedrock beta update, with several tweaks and fixes!\xa0As always, you will need to enable the Caves and Cliffs Experimental Features Toggle to check out these\xa0features in your beta worlds\xa0(You can find out more about using the toggles at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),".)\xa0\xa0"),(0,r.kt)("p",null,"\xa0You can leave us your feedback for these features in the threads at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),".\xa0\xa0"),(0,r.kt)("h1",{id:"caves-cliffsexperimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Cave**"),"s &**\xa0",(0,r.kt)("strong",{parentName:"h1"},"Cliffs"),"\xa0",(0,r.kt)("strong",{parentName:"h1"},"Experimental Features"),"\xa0"),(0,r.kt)("h2",{id:"axolotl"},(0,r.kt)("strong",{parentName:"h2"},"Axolotl"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leads now\xa0correctly attach to Axolotl \xa0")),(0,r.kt)("h2",{id:"creative-inventory"},(0,r.kt)("strong",{parentName:"h2"},"Creative Inventory"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are no longer any unknown items in the creative inventory\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119503"},"MCPE-119503"),")\xa0\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Cobbled\xa0Deepslate\xa0is now next to cobblestone in the\xa0Creative inventory. Polished\xa0Deepslate\xa0is next to\xa0Deepslate\xa0\xa0")),(0,r.kt)("h2",{id:"deepslate"},(0,r.kt)("strong",{parentName:"h2"},"Deepslate"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deepslate\xa0Bricks now have correct breaktime\xa0\xa0")),(0,r.kt)("h2",{id:"dripstone"},(0,r.kt)("strong",{parentName:"h2"},"Dripstone"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Water and lava now drip more often from pointed dripstone\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed pointed dripstone texture mapping \xa0")),(0,r.kt)("h2",{id:"glow-lichen"},(0,r.kt)("strong",{parentName:"h2"},"Glow Lichen"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow lichen can now appear on the walls of underground water lakes \xa0"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes\xa0when placing glow lichen on all sides of a single block \xa0")),(0,r.kt)("h2",{id:"glow-squid"},(0,r.kt)("strong",{parentName:"h2"},"Glow Squid"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leads now attach correctly to glow\xa0squid (and squid)\xa0\xa0")),(0,r.kt)("h2",{id:"lushcaves"},(0,r.kt)("strong",{parentName:"h2"},"Lush"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"C**"),"aves**\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hanging roots\xa0now drop\xa0correctly when mined by silk touch enchanted tool \xa0"),(0,r.kt)("li",{parentName:"ul"},"Moss can now also spread vertically when fertilized (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121672"},"MCPE-121672"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Dripleaves\xa0now break completely when the leaf part is broken\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121804"},"MCPE-121804"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Breaking a\xa0dripleaf\xa0stem now\xa0drops a\xa0dripleaf\xa0item, matching the Java Edition\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122447"},"MCPE-122447"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fertilizing a moss block can now also grow vegetation on existing moss blocks\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Small\xa0Dripleaves\xa0can now be composted just like Big\xa0Dripleaves\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122610"},"MCPE-122610"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Bonemealing\xa0moss\xa0blocks\xa0no longer generates ferns\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122800"},"MCPE","-","122800"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Azalea and Flowering Azalea can now be grown into an Azalea Tree when fertilized\xa0(No ID)\xa0")),(0,r.kt)("h2",{id:"powder-snow"},(0,r.kt)("strong",{parentName:"h2"},"Powder Snow"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leather horse\xa0armor\xa0prevents horses from freezing in powder snow\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs that enjoy the heat (Blazes, Magma Cubes, and Striders) take increased freeze damage \xa0"),(0,r.kt)("li",{parentName:"ul"},"Polar bears, strays, and snow golems no longer take freeze damage\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"The time taken to fully freeze is now 7 seconds instead of 15\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Frozen entities now take damage every 2 seconds instead of every 3 seconds\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"The speed at which entities can move vertically when inside powder snow has increased\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Powder snow takes slightly longer to mine\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Entities wearing leather boots falling from a height of ",">"," 2.5 blocks sink into powder snow instead of landing on top of it\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Entities that are on fire that walk into powder snow now melt the powder snow block in addition to extinguishing the fire\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Entities that are fully frozen now shake\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Applied fog effect while standing very close outside a Powder Snow block \xa0")),(0,r.kt)("h2",{id:"striders"},(0,r.kt)("strong",{parentName:"h2"},"Striders"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Striders shake properly when out of lava again\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69511"},"MCPE-69511"),")\xa0\xa0")),(0,r.kt)("h2",{id:"other-experimental-tweaks-and-changes"},(0,r.kt)("strong",{parentName:"h2"},"Other Experimental Tweaks and Changes"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dripstone feature and dripstone cluster feature now rarely generate in caves below\xa0y59\xa0"),(0,r.kt)("li",{parentName:"ul"},"Rooted dirt, Small\xa0dripleaf, Moss Block and Pointed dripstone can now be obtained from\xa0the Wandering\xa0Trader\xa0"),(0,r.kt)("li",{parentName:"ul"},"Glow berries can be found in abandoned mineshaft minecart\xa0chests\xa0"),(0,r.kt)("li",{parentName:"ul"},"Moss block can be found in shipwreck\xa0chests\xa0"),(0,r.kt)("li",{parentName:"ul"},"Masons now trade Dripstone\xa0blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dripstone block can be crafted from pointed\xa0dripstone\xa0"),(0,r.kt)("li",{parentName:"ul"},"Axolotl and Glow\xa0Squid now spawn in water in non-ocean biomes under y = 30 \xa0")),(0,r.kt)("h1",{id:"generalbug-fixes-and-tweaks"},(0,r.kt)("strong",{parentName:"h1"},"General"),"\xa0",(0,r.kt)("strong",{parentName:"h1"},"Bug Fixes and Tweaks"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed a bug where if the view bobbing setting was disabled, the player's hand would still bob (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-79380"},"MCPE-79380"),") \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Zombie Villagers properly shake while being cured\xa0\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed player spawning in unsafe locations when entering a random world for the first time (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-42310"},"MCPE-42310"),") \xa0"))),(0,r.kt)("h2",{id:"structure-blocks"},(0,r.kt)("strong",{parentName:"h2"},"Structure Blocks"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structure placement block now has placement animation options\xa0similar to\xa0'/structure' command \xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix output message for\u202f'/stopsound'\u202fbeing incorrect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116772"},"MCPE-116772"),") \xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Charged creeper aura is rendered\xa0correctly\xa0in most cases now (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65798"},"MCPE-65798"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Paintings no longer rendering\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Ray tracing specific textures will be allocated/deallocated when toggling ray tracing on/off \xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switching between some items (bow, trident, crossbow, shield) in your main hand will no longer skip animation\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116680"},"MCPE-116680"),")\xa0")),(0,r.kt)("h2",{id:"underwater-gameplay-experience"},(0,r.kt)("strong",{parentName:"h2"},"Underwater Gameplay Experience"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Underwater visibility has been\xa0improved\xa0"),(0,r.kt)("li",{parentName:"ul"},"Underwater\xa0color\xa0has been tuned to better match Java\xa0Edition with a richer blue\xa0tint\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A message will now display when trying to place blocks below the minimum build height")))}p.isMDXComponent=!0},48618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(47153);const o={},s=void 0,i={unversionedId:"changelog_source/preview/1.16/230/54/tech",id:"changelog_source/preview/1.16/230/54/tech",title:"tech",description:"GameTest\xa0Framework",source:"@site/docs/changelog_source/preview/1.16/230/54/tech.mdx",sourceDirName:"changelog_source/preview/1.16/230/54",slug:"/changelog_source/preview/1.16/230/54/tech",permalink:"/docs/changelog_source/preview/1.16/230/54/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/230/54/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Added</strong>\xa0<strong>N**</strong>ew**\xa0<strong>I**</strong>nterfaces*<strong>*:</strong>\xa0",id:"addednewinterfaces",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\xa0",(0,r.kt)("strong",{parentName:"p"},"GameTest"),"\xa0",(0,r.kt)("strong",{parentName:"p"},"Framework"),"\xa0"),(0,r.kt)("p",null,"\xa0",(0,r.kt)("strong",{parentName:"p"},"Updated"),"\xa0",(0,r.kt)("strong",{parentName:"p"},"I**"),"nterfaces*",(0,r.kt)("strong",{parentName:"p"},"*:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assertContainerContains\xa0-\xa0ItemIdentifier\xa0parameter changed to\xa0ItemStack\xa0"),(0,r.kt)("li",{parentName:"ul"},"assertItemEntityNotPresent\xa0and\xa0assertItemEntityPresent\xa0APIs -\xa0ItemStack\xa0parameter changed to\xa0ItemType \xa0")),(0,r.kt)("h2",{id:"addednewinterfaces"},(0,r.kt)("strong",{parentName:"h2"},"Added"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"N**"),"ew**\xa0",(0,r.kt)("strong",{parentName:"h2"},"I**"),"nterfaces*",(0,r.kt)("strong",{parentName:"h2"},"*:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assertEntityNotTouching(entityIdentifier: string, position : Location) - Asserts that there is no entity of the given type at the given position\xa0"),(0,r.kt)("li",{parentName:"ul"},"assertEntityTouching(entityIdentifier: string, position : Location) - Asserts that there is an entity of the given type at the given position\xa0"),(0,r.kt)("li",{parentName:"ul"},"assertItemEntityCountIs(itemType\xa0: ItemType, position :\xa0BlockLocation,\xa0searchDistance\xa0: number, count : number) - Asserts that the entity item count in the given search area matches the expected count\xa0"),(0,r.kt)("li",{parentName:"ul"},'pulseRedstone(position :\xa0BlockLocation, duration : number) - Creates a\xa0Redstone block at the given position and destroys it after "duration" ticks\xa0')),(0,r.kt)("p",null,"\xa0",(0,r.kt)("strong",{parentName:"p"},"Known Issues in this\xa0Beta"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parts of Villages' generate underground\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Axolotl doesn't spawn naturally\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Glow Squid does not spawn naturally")))}p.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905),s=n(31792),i=n(85162),l=n(18386);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],h={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905),s=n(31792),i=n(85162);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.kt)(s.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.kt)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0},17241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),s=n(36011),i=n(48618);const l={sidebar_position:99999871,title:"1.16.230.54",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},c="Minecraft Beta - 1.16.230.54 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.16/230/54",id:"official_changelog/preview/1.16/230/54",title:"1.16.230.54",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.16/230/54.mdx",sourceDirName:"official_changelog/preview/1.16/230",slug:"/official_changelog/preview/1.16/230/54",permalink:"/docs/official_changelog/preview/1.16/230/54",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/230/54.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999871,frontMatter:{sidebar_position:99999871,title:"1.16.230.54",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.230.56",permalink:"/docs/official_changelog/preview/1.16/230/56"},next:{title:"1.16.230.52",permalink:"/docs/official_changelog/preview/1.16/230/52"}},p={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11623054-xbox-onewindows-10android"},"Minecraft Beta - 1.16.230.54 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);