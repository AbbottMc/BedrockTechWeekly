"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84025,21032,67256,33670,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,p=g["".concat(s,".").concat(d)]||g[d]||m[d]||o;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(96540),r=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),m(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,a.useEffect)((()=>(i(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:n,groupId:a}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??g;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==i&&(m(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/23/gameplay",id:"changelog_source/preview/1.19/50/23/gameplay",title:"gameplay",description:"Posted: 3rd November 2022",source:"@site/docs/changelog_source/preview/1.19/50/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/50/23",slug:"/changelog_source/preview/1.19/50/23/gameplay",permalink:"/docs/changelog_source/preview/1.19/50/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>API</strong>",id:"api",level:2},{value:"<strong>Bamboo Woodset</strong>",id:"bamboo-woodset",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Camel</strong>",id:"camel",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Sound</strong>",id:"sound",level:2},{value:"<strong>Features</strong> <strong>and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay-1",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Realms</strong>",id:"realms",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User</strong> <strong>Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 3rd November 2022"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/10309737817741",alt:"Picture1.jpg"})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,r.yg)("h2",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Features")),(0,r.yg)("h2",{id:"api"},(0,r.yg)("strong",{parentName:"h2"},"API")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where property velocity would return incorrect values in certain situations (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152715"},"MCPE-152715"),")"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"canPlace")," - Returns if it is valid to place the desired block type or block permutation at a specified location (and optional face of the block)"),(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"trySetPermutation")," - Attempts to place the desired block permutation at a location by first checking ",(0,r.yg)("em",{parentName:"li"},"canPlace"))),(0,r.yg)("h2",{id:"bamboo-woodset"},(0,r.yg)("strong",{parentName:"h2"},"Bamboo Woodset")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The name displayed for \u201cBamboo Raft with Chest\u201d is now \u201cRaft with Chest\u201d (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163327"},"MCPE-163327"),")"),(0,r.yg)("li",{parentName:"ul"},"When dismounting from Raft and Raft with Chest the correct tooltip is now shown (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163326"},"MCPE-163326"),")")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The "Place" prompt is now displayed correctly for all variations of Sign and Hanging Sign when using a controller'),(0,r.yg)("li",{parentName:"ul"},"Mobs now pathfind properly on top of side-attached Hanging Signs")),(0,r.yg)("h2",{id:"camel"},(0,r.yg)("strong",{parentName:"h2"},"Camel")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can no longer ride Camels through/in deep water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163608"},"MCPE-163608"),")"),(0,r.yg)("li",{parentName:"ul"},"Sitting Camels do not play the sitting down animation on load anymore, instead they are loaded already sitting"),(0,r.yg)("li",{parentName:"ul"},"Camels can now auto step up one and a half blocks without jumping (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163322"},"MCPE-163322"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Running '/execute as' from Command Blocks no longer inherits rotation from entity (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162680"},"MCPE-162680"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs could replace Spore Blossoms and Big Dripleaf"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs could attach to Bamboo Saplings"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where using pick-block on a double Bamboo Mosaic Slab or breaking it would give a Bamboo Slab (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163906"},"MCPE-163906"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed Bamboo Saplings not breaking when pushed by Pistons")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Chain Command Blocks would not activate when Delay in Ticks was greater than 0")),(0,r.yg)("h2",{id:"sound"},(0,r.yg)("strong",{parentName:"h2"},"Sound")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where Hanging Signs would not be affected by block volume  ")),(0,r.yg)("h2",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Features")," ",(0,r.yg)("strong",{parentName:"h2"},"and Bug Fixes")),(0,r.yg)("h2",{id:"gameplay-1"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Boats and Boats with Chest are no longer teleported to (0, 0, 0) when pushed by a Piston (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163330"},"MCPE-163330"),")")),(0,r.yg)("h2",{id:"general-1"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed improper LevelChunk blending when upgrading pre-1.18 worlds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162480"},"MCPE-162480"),")")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added D3D12 support for Intel Integrated/Dedicated Graphics for compatible drivers")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed issues with Book & Quill not able to be signed and closed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163325"},"MCPE-163325"),")")),(0,r.yg)("h2",{id:"realms"},(0,r.yg)("strong",{parentName:"h2"},"Realms")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shortened text when uploading worlds and add-ons so it fits in the dialog"),(0,r.yg)("li",{parentName:"ul"},"You will no longer get an error message when joining a Realm that has been empty for several minutes")),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Navigating through the Recipe Book when the player had items that contain mobs in their inventory no longer causes significant drops in performance (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-146462"},"MCPE-146462"),")"),(0,r.yg)("li",{parentName:"ul"},"Reduced server lag with items going in and out of Hoppers\xa0(",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68796"},"MCPE-68796"),")")),(0,r.yg)("h2",{id:"touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the Dismount button in the New Touch Control Schemes looking blurry (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156722"},"MCPE-156722"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User")," ",(0,r.yg)("strong",{parentName:"h2"},"Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug in Pocket UI Inventory screen, where items could not be dropped back to inventory in Creative Mode"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug in Pocket UI Inventory screen, where the \u2018Craftable/All\u2019 toggle could only be changed in the Search tab but not in any other tab"),(0,r.yg)("li",{parentName:"ul"},"On Xbox, camera movement with mouse no longer changes mouse position when menu is reopened (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162890"},"MCPE-162890"),")"),(0,r.yg)("li",{parentName:"ul"},"Text color for a selected item stack count is now white instead of yellow")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Getting killed by a mob with a renamed weapon no longer produces a death message with a redundant 's' at the end (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163283"},"MCPE-163283"),")")),(0,r.yg)("h2",{id:"spectator-mode"},(0,r.yg)("strong",{parentName:"h2"},"Spectator Mode")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When entering Spectator Mode while typing on a Sign, the Sign text screen now closes"),(0,r.yg)("li",{parentName:"ul"},"If you swap into Spectator Mode while standing alone on a Pressure Plate, you lose weight and the Pressure Plate releases (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163177"},"MCPE-163177"),")")))}m.isMDXComponent=!0},64058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));n(57350);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/50/23/tech",id:"changelog_source/preview/1.19/50/23/tech",title:"tech",description:"Stability and Performance",source:"@site/docs/changelog_source/preview/1.19/50/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/50/23",slug:"/changelog_source/preview/1.19/50/23/tech",permalink:"/docs/changelog_source/preview/1.19/50/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed Xbox controller stick deadzone and sensitivity (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162847"},"MCPE-162847"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed the Upcoming Creator Features requirement for the new execute command syntax"),(0,r.yg)("li",{parentName:"ul"},"Version 1.19.50 is now required to run the new command syntax"),(0,r.yg)("li",{parentName:"ul"},"Creators currently using the new execute command syntax in command blocks will have to go modify those command blocks in order to update those commands"),(0,r.yg)("li",{parentName:"ul"},"Creators currently using the new execute command in behavior packs will need to change the min engine version to 1.19.50"),(0,r.yg)("li",{parentName:"ul"},"The previous execute command syntax can still be used by using version 1.19.40 or less")))}m.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>d});var a=n(58168),r=n(96540),o=n(15680),l=n(18228),i=n(19365),s=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],p={toc:d},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(58168),r=n(96540),o=n(15680),l=n(18228),i=n(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},m=[],d={toc:m},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0},707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(58168),r=(n(96540),n(15680)),o=n(74874),l=n(862),i=n(64058);const s={sidebar_position:99999792,title:"1.19.50.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.50.23",u={unversionedId:"official_changelog/preview/1.19/50/23",id:"official_changelog/preview/1.19/50/23",title:"1.19.50.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/50/23.mdx",sourceDirName:"official_changelog/preview/1.19/50",slug:"/official_changelog/preview/1.19/50/23",permalink:"/docs/official_changelog/preview/1.19/50/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/50/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999792,frontMatter:{sidebar_position:99999792,title:"1.19.50.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.50.24",permalink:"/docs/official_changelog/preview/1.19/50/24"},next:{title:"1.19.50.22",permalink:"/docs/official_changelog/preview/1.19/50/22"}},g={},m=[],d={toc:m},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1195023"},"Minecraft Beta & Preview - 1.19.50.23"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);