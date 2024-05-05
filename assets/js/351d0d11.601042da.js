"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29902,21032,3066,66541,98438,40818,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>i});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),p(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),d=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||d()};return(0,n.useEffect)((()=>(i(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),c=a(31682),u=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},57177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/25/gameplay",id:"changelog_source/preview/1.19/60/25/gameplay",title:"gameplay",description:"Posted: 5 January, 2023",source:"@site/docs/changelog_source/preview/1.19/60/25/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/gameplay",permalink:"/docs/changelog_source/preview/1.19/60/25/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Known Issues",id:"known-issues",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Note Blocks",id:"note-blocks",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Commands",id:"commands",level:2},{value:"Commands Parity",id:"commands-parity",level:2},{value:"General",id:"general",level:2},{value:"Input",id:"input",level:2},{value:"Items",id:"items",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Particle Effects",id:"particle-effects",level:2},{value:"Performance and Stability",id:"performance-and-stability",level:2},{value:"Touch Controls",id:"touch-controls",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Vanilla Parity",id:"vanilla-parity",level:2},{value:"Blocks",id:"blocks-1",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 5 January, 2023"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/11996092236685",alt:"A Minecraft screenshot of a village with an iron golem, a camel, and a piglin head on a noteblock."})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"and report any bugs to ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("h2",{id:"known-issues"},"Known Issues"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players cannot stack split items while using gamepads or mouse and keyboard. We hope to have this issue resolved as soon as possible!  ")),(0,r.yg)("h1",{id:"experimental-features"},"Experimental Features"),(0,r.yg)("h2",{id:"gameplay"},"Gameplay"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Camels no longer get pulled into rideable entities (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163610"},"MCPE-163610"),")")),(0,r.yg)("h2",{id:"note-blocks"},"Note Blocks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mob heads can now be placed on top of note blocks without sneaking",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This bypasses the default interaction, and we would love your feedback on this change!")))),(0,r.yg)("p",null,"Touch Controls"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Correct dismount tip now shows if not using classic touch controls  ")),(0,r.yg)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,r.yg)("h2",{id:"blocks"},"Blocks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Crimson and Warped block sets now have a unique set of sounds")),(0,r.yg)("h2",{id:"commands"},"Commands"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed potential crash when teleporting players to other dimensions using commands (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164940"},"MCPE-164940"),")")),(0,r.yg)("h2",{id:"commands-parity"},"Commands Parity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Running \u2018/execute if|unless score\u2019 on a player that doesn\u2019t have a score set will now return false (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156279"},"MCPE-156279"),")"),(0,r.yg)("li",{parentName:"ul"},"\u2018/execute if|unless score\u2019 no longer accepts selectors that can return multiple entities (ie. @e, @a)")),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Redstone Dust now emits a sound when placed on the ground (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65423"},"MCPE-65423"),")"),(0,r.yg)("li",{parentName:"ul"},"Player will now respond correctly to speed changes using ",(0,r.yg)("em",{parentName:"li"},"minecraft:movement"))),(0,r.yg)("h2",{id:"input"},"Input"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the mouse cursor was visible and is no longer usable to control the player camera on the HUD screen after exiting the menu screen with a touch while moving the mouse around")),(0,r.yg)("h2",{id:"items"},"Items"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wither and Ender Dragon Spawn Eggs are no longer available in the Creative Inventory but are still available using commands")),(0,r.yg)("h2",{id:"mobs"},"Mobs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can now \u201cpick\u201d Iron Golems, Snow Golems, Withers, and Ender Dragons, obtaining their respective Spawn Eggs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164533"},"MCPE-164533"),")"),(0,r.yg)("li",{parentName:"ul"},"Piglins can once again spawn at light levels above 7 in the Nether (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165096"},"MCPE-165096"),")"),(0,r.yg)("li",{parentName:"ul"},"Evokers now play a \u2018sit\u2019 animation when riding a mount or vehicle (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43778"},"MCPE-43778"),")")),(0,r.yg)("h2",{id:"particle-effects"},"Particle Effects"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated particles documentation with descriptions of new materials and included example particles in the example resource pack")),(0,r.yg)("h2",{id:"performance-and-stability"},"Performance and Stability"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed potential crash when using \u201cinstant","_","despawn\u201d component"),(0,r.yg)("li",{parentName:"ul"},"Fixed potential crash when loading actors"),(0,r.yg)("li",{parentName:"ul"},"ClientSide LevelChunk generation is now Server authoritative, preventing Clients from generating unnecessary chunks")),(0,r.yg)("h2",{id:"touch-controls"},"Touch Controls"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Resolved an issue that pressing the inventory button could interact with the world instead of opening the inventory on some devices (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154499"},"MCPE-154499"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that players couldn\u2019t scroll pages when one row was off-screen"),(0,r.yg)("li",{parentName:"ul"},"Added several levels of intervals for repeat crafting when holding on the crafted items"),(0,r.yg)("li",{parentName:"ul"},"Removed the camera movement delay when the player swiped from the attack and build buttons in crosshair mode"),(0,r.yg)("li",{parentName:"ul"},"The touch focus circle has been reactivated with the new touch controls (not in Crosshair mode)")),(0,r.yg)("h2",{id:"user-interface"},"User Interface"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Toast notifications can now be swiped away on touch devices in-game"),(0,r.yg)("li",{parentName:"ul"},"Touch control settings section is no longer visible on Xbox")),(0,r.yg)("h2",{id:"vanilla-parity"},"Vanilla Parity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Change various blocks\u2019 map colors to match Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19228"},"MCPE-19228"),")"),(0,r.yg)("li",{parentName:"ul"},"Change frogspawn map color to match Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159715"},"MCPE-159715"),")"),(0,r.yg)("li",{parentName:"ul"},"Change bed block map colors to match Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40709"},"MCPE-40709"),")"),(0,r.yg)("li",{parentName:"ul"},"Updated the Skeleton/Zombie Horse's and Donkey/Mule's saddle and chest textures")),(0,r.yg)("h2",{id:"blocks-1"},"Blocks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wooden Doors, Iron Doors, Wooden Trapdoors, Iron Trapdoors and Fence Gates now use the same opening and closing sounds as Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Updated Pressure Plates to have different sound pitches based on their behaviour to match Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Added a unique button click sound for Wooden Buttons to match Java Edition")))}p.isMDXComponent=!0},92837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(83735),l=(a(54221),a(57350));const i={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/60/25/tech",id:"changelog_source/preview/1.19/60/25/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.19/60/25/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech",permalink:"/docs/changelog_source/preview/1.19/60/25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Recipes",id:"recipes",level:2},{value:"General",id:"general",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(l.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"recipes"},"Recipes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed and converted all Smithing Table recipes to use the newly introduced \u201cminecraft:recipe","_","smithing","_","transform\u201d recipe format")),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added content error for the condition that Custom blocks with permutations or properties fail to load in non-experimental worlds for JSON formats 1.19.60 and onwards")))}g.isMDXComponent=!0},83735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/25/tech_sapi_stable",id:"changelog_source/preview/1.19/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Entity",source:"@site/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Entity",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the ",(0,r.yg)("em",{parentName:"li"},"getEffect")," method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)  "))),(0,r.yg)("li",{parentName:"ul"},"EntityHurtEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added read-only property ",(0,r.yg)("em",{parentName:"li"},"damageSource: EntityDamageSource")," - Gets information about the damage source"),(0,r.yg)("li",{parentName:"ul"},"EntityDamageSource",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"cause: EntityDamageCause")," - Gets the damage cause"),(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"damagingEntity?: Entity")," - Gets the damaging Entity"),(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"damagingProjectile?: Entity")," - Gets the damaging projectile Entity"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"applyDamage(amount: number, source?: EntityDamageSource): boolean")," - Applies damage to the Entity and returns the result of the operation"))),(0,r.yg)("li",{parentName:"ul"},"Dimension",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fills an area between ",(0,r.yg)("em",{parentName:"li"},"begin")," and ",(0,r.yg)("em",{parentName:"li"},"end")," with block of type block. Returns number of blocks placed"))),(0,r.yg)("li",{parentName:"ul"},"Added new interface ",(0,r.yg)("em",{parentName:"li"},"BlockFillOptions")," with member ",(0,r.yg)("em",{parentName:"li"},"matchingBlock?: BlockPermutation | BlockType"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Used with ",(0,r.yg)("em",{parentName:"li"},"fillBlocks")," to apply additional options, such as only filling blocks matching ",(0,r.yg)("em",{parentName:"li"},"matchingBlock")))),(0,r.yg)("li",{parentName:"ul"},"Player",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"addLevels(amount: number): number")," - Adds/Removes level to/from the Player and returns the current level of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"addExperience(amount: number): number")," - Adds/Removes experience to/from the Player and returns the current experience of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"resetLevel(): void")," - Resets the level of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"getTotalXp(): number")," - Gets the total experience of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property ",(0,r.yg)("em",{parentName:"li"},"level")," - Gets the level of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property ",(0,r.yg)("em",{parentName:"li"},"xpEarnedAtCurrentLevel")," - Gets the experience earned at the current level of the Player"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property ",(0,r.yg)("em",{parentName:"li"},"totalXpNeededForNextLevel")," - Gets the total experience required for the current level of the Player")))))))))}p.isMDXComponent=!0},54221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=a(58168),r=a(96540),o=a(15680),l=a(18228),i=a(19365),s=a(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],g={toc:m},h="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(58168),r=a(96540),o=a(15680),l=a(18228),i=a(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},g="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},49142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),l=a(57177),i=a(92837);const s={sidebar_position:99999785,title:"1.19.60.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.60.25",u={unversionedId:"official_changelog/preview/1.19/60/25",id:"official_changelog/preview/1.19/60/25",title:"1.19.60.25",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/60/25.mdx",sourceDirName:"official_changelog/preview/1.19/60",slug:"/official_changelog/preview/1.19/60/25",permalink:"/docs/official_changelog/preview/1.19/60/25",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/60/25.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999785,frontMatter:{sidebar_position:99999785,title:"1.19.60.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.60.26",permalink:"/docs/official_changelog/preview/1.19/60/26"},next:{title:"1.19.60.24",permalink:"/docs/official_changelog/preview/1.19/60/24"}},d={},p=[],m={toc:p},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1196025"},"Minecraft Beta & Preview - 1.19.60.25"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);