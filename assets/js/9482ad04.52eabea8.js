"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[28413,21032,75778,93942,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,p=g["".concat(s,".").concat(m)]||g[m]||d[m]||o;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(96540),r=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),d(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,a.useEffect)((()=>(i(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:n,groupId:a}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??g;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),m=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},57394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/21/gameplay",id:"changelog_source/preview/1.17/10/21/gameplay",title:"gameplay",description:"Posted: June 3, 2021",source:"@site/docs/changelog_source/preview/1.17/10/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/10/21",slug:"/changelog_source/preview/1.17/10/21/gameplay",permalink:"/docs/changelog_source/preview/1.17/10/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Android",id:"android",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Stability",id:"stability",level:3},{value:"Diamond Ore",id:"diamond-ore",level:3},{value:"Glow Lichen",id:"glow-lichen",level:3},{value:"Commands",id:"commands",level:3},{value:"Data-Driven Items",id:"data-driven-items",level:3},{value:"Gameplay",id:"gameplay",level:3},{value:"Glow Sign",id:"glow-sign",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Items",id:"items",level:3},{value:"Jukebox",id:"jukebox",level:3},{value:"Mobs",id:"mobs",level:3},{value:"Goat",id:"goat",level:3},{value:"Strays",id:"strays",level:3},{value:"Bastion",id:"bastion",level:3},{value:"Player",id:"player",level:3},{value:"Sea Turtles",id:"sea-turtles",level:3},{value:"User Interface",id:"user-interface",level:3}],u={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," June 3, 2021"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One and Windows 10. To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.yg)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4402347029645/Picture1.jpg",alt:"Picture1.jpg"})),(0,r.yg)("h1",{id:"known-issues"},"Known Issues:"),(0,r.yg)("h3",{id:"android"},"Android"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Due to submission issues, this week's beta update is not available on Android devices. But don't fret, it will return soon! Multiplayer with the previous beta, version 1.17.10.20, is still compatible with this version.  ")),(0,r.yg)("h1",{id:"new-features"},"New Features:"),(0,r.yg)("h3",{id:"blocks"},"Blocks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added potted azalea and flowering azalea variants")),(0,r.yg)("h1",{id:"bug-fixes"},"Bug Fixes:"),(0,r.yg)("h3",{id:"stability"},"Stability"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when breaking a block when the Caves & Cliffs experimental toggle was enabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128985"},"MCPE-128985"),")")),(0,r.yg)("h3",{id:"diamond-ore"},"Diamond Ore"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Diamond ore now generates with the correct distribution again (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127555"},"MCPE-127555"),")")),(0,r.yg)("h3",{id:"glow-lichen"},"Glow Lichen"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Glow lichen now only drops itself when broken with shears")),(0,r.yg)("h3",{id:"commands"},"Commands"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Frosted ice can now be used in any command that accepts a block, such as '/setblock' and '/testforblock' (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126741"},"MCPE-126741"),")")),(0,r.yg)("h3",{id:"data-driven-items"},"Data-Driven Items"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated documentation for 'DisplayNameItemComponent'")),(0,r.yg)("h3",{id:"gameplay"},"Gameplay"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disenchanting an item using the grindstone once again resets the enchantment cost penalty correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-107211"},"MCPE-107211"),")")),(0,r.yg)("h3",{id:"glow-sign"},"Glow Sign"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[","Vanilla Parity","]"," The text on glowing signs now has an outline (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129123"},"MCPE-129123"),")"),(0,r.yg)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Black text on signs can be lit by using a glow ink sac (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128079"},"MCPE-128079"),")"),(0,r.yg)("li",{parentName:"ul"},"Tooltips are now present when holding ink sac and glow ink sac when using a controller"),(0,r.yg)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Ink sac and glow ink sac can no longer be used indefinitely on signs in Adventure mode"),(0,r.yg)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Player can no longer dye text on signs in Adventure mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126489"},"MCPE-126489"),")")),(0,r.yg)("h3",{id:"graphics"},"Graphics"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Underwater fog is once again dependent on biome (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124266"},"MCPE-124266"),")")),(0,r.yg)("h3",{id:"items"},"Items"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pumpkins are once again accepted by farmer villagers regardless of their rotation when mined (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105540"},"MCPE-105540"),")")),(0,r.yg)("h3",{id:"jukebox"},"Jukebox"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Jukebox now only ejects disk into non-solid blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85635"},"MCPE-85635"),")")),(0,r.yg)("h3",{id:"mobs"},"Mobs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Baby horses, including their variants, are now taller and no longer exhibit Z-fighting from their legs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92462"},"MCPE-92462"),")"),(0,r.yg)("li",{parentName:"ul"},"Amphibious mobs no longer get stuck when pathing over slabs and daylight sensors"),(0,r.yg)("li",{parentName:"ul"},"Attacked glow squids no longer go dark only for aggressor in multiplayer sessions"),(0,r.yg)("li",{parentName:"ul"},"Villagers spawned from villager spawners on Marketplace worlds that were created after version 1.11 now correctly spawn as V2 villagers")),(0,r.yg)("h3",{id:"goat"},"Goat"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tempted goats now move at the same speed as goats in Java Edition, and other similar mobs that are being tempted"),(0,r.yg)("li",{parentName:"ul"},"Goat fall damage reduction is now in parity with Java Edition (-10 reduced fall damage)"),(0,r.yg)("li",{parentName:"ul"},"Goats can now continue ramming when on slime block and honey blocks")),(0,r.yg)("h3",{id:"strays"},"Strays"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Strays no longer drop wither skeleton skulls when killed by charged creepers (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35876"},"MCPE-35876"),")")),(0,r.yg)("h3",{id:"bastion"},"Bastion"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bastion loot now closely matches Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104330"},"MCPE-104330"),")")),(0,r.yg)("h3",{id:"player"},"Player"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can no longer swim through the air under a platform, though it looked pretty cool (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48958"},"MCPE-48958)"))),(0,r.yg)("h3",{id:"sea-turtles"},"Sea Turtles"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Baby sea turtles no longer despawn after being hatched (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70664"},"MCPE-70664"),")")),(0,r.yg)("h3",{id:"user-interface"},"User Interface"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The "Reset to Default" button in the Accessibility settings now resets the Text Background Opacity slider'),(0,r.yg)("li",{parentName:"ul"},'Fixed a typo in the "Loom" section of "How to Play" (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128735"},"MCPE-128735"),")"),(0,r.yg)("li",{parentName:"ul"},"The counters on empty tabs of the Play screen now display zero instead of an empty, grey box (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110535"},"MCPE-110535"),")")))}d.isMDXComponent=!0},16014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));n(57350);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/21/tech",id:"changelog_source/preview/1.17/10/21/tech",title:"tech",description:"Chunks",source:"@site/docs/changelog_source/preview/1.17/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/10/21",slug:"/changelog_source/preview/1.17/10/21/tech",permalink:"/docs/changelog_source/preview/1.17/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Chunks",id:"chunks",level:3},{value:"Data-Driven Mobs",id:"data-driven-mobs",level:3},{value:"GameTest Framework",id:"gametest-framework",level:3}],u={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"chunks"},"Chunks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Limits writing of chunks unless necessary. Chunks upgraded from older formats will not automatically save when loaded, but when modified (Through blocks or actors, for example) they will be marked for saving")),(0,r.yg)("h3",{id:"data-driven-mobs"},"Data-Driven Mobs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The horse rendering and animations are now fully data-driven"),(0,r.yg)("li",{parentName:"ul"},"This work supports all horse variants (horse, mule, donkey, zombie horse, skeleton horse) and all horse versions including:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"v1 (engine version 1.2.5 and earlier)"),(0,r.yg)("li",{parentName:"ul"},"v2 (engine version 1.2.6 to 1.17.0)"),(0,r.yg)("li",{parentName:"ul"},"v3 (engine version 1.17.10 and onward). This will be a cleaner version of the v2 model, with less confusing bone naming")))),(0,r.yg)("h3",{id:"gametest-framework"},"GameTest Framework"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updates to how blocks are handled in APIs:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"BlockType, BlockPermutation, and Block instances replace BlockState-based updating"))),(0,r.yg)("li",{parentName:"ul"},"Exposed chest block component and Container"),(0,r.yg)("li",{parentName:"ul"},"Added location and velocity read-only properties to Entity"),(0,r.yg)("li",{parentName:"ul"},"function createExplosion(location : Location, radius : number, explosionOptions : ExplosionOptions)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Creates an explosion",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ExplosionOptions : class - Provides additional configuration parameters for createExplosion"))))),(0,r.yg)("li",{parentName:"ul"},"method triggerEvent(eventName : string) - Triggers an event on an entity"),(0,r.yg)("li",{parentName:"ul"},"Added 'thenExecuteFor' to 'GameTestSequence', which repeatedly calls the callback for the specified number of ticks")))}d.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>m});var a=n(58168),r=n(96540),o=n(15680),l=n(18228),i=n(19365),s=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],p={toc:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(58168),r=n(96540),o=n(15680),l=n(18228),i=n(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},d=[],m={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0},59239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(74874),l=n(57394),i=n(16014);const s={sidebar_position:99999863,title:"1.17.10.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},c="Minecraft Beta - 1.17.10.21 (Xbox One/Windows 10)",u={unversionedId:"official_changelog/preview/1.17/10/21",id:"official_changelog/preview/1.17/10/21",title:"1.17.10.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.17/10/21.mdx",sourceDirName:"official_changelog/preview/1.17/10",slug:"/official_changelog/preview/1.17/10/21",permalink:"/docs/official_changelog/preview/1.17/10/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/10/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.17",permalink:"/docs/tags/1-17"}],version:"current",sidebarPosition:99999863,frontMatter:{sidebar_position:99999863,title:"1.17.10.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.10.22",permalink:"/docs/official_changelog/preview/1.17/10/22"},next:{title:"1.17.10.20",permalink:"/docs/official_changelog/preview/1.17/10/20"}},g={},d=[],m={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---1171021-xbox-onewindows-10"},"Minecraft Beta - 1.17.10.21 (Xbox One/Windows 10)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);