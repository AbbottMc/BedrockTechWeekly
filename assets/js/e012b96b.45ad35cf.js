"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99818,77598,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),h=r,p=g["".concat(s,".").concat(h)]||g[h]||m[h]||i;return n?a.createElement(p,o(o({ref:t},u),{},{components:n})):a.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(96540),r=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),m(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,a.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),i=n(20053),o=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=p({queryString:n,groupId:a}),[g,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=s??g;return h({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,i]),tabValues:i}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),h=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==l&&(m(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>g.push(e),onKeyDown:p,onClick:h},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=d(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},50153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.14/0/2/gameplay",id:"changelog_source/preview/1.14/0/2/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.14/0/2/gameplay.mdx",sourceDirName:"changelog_source/preview/1.14/0/2",slug:"/changelog_source/preview/1.14/0/2/gameplay",permalink:"/docs/changelog_source/preview/1.14/0/2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.14/0/2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Crashes/Performance"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when breaking a crafting table"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could sometimes be triggered by certain Honey Block states"),(0,r.yg)("li",{parentName:"ul"},"UI Textures now load in more quickly when joining and leaving a world"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could sometimes happen after pressing any button during chat UI closing animation\xa0  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"General"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The main menu background (Cube Map) now matches that in the Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Bee Nests now spawn in more types of tree, as they do in the Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that could cause some models to appear incorrectly in the Character Creator"),(0,r.yg)("li",{parentName:"ul"},"Various tweaks and fixes to the Character Creator\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that would sometimes cause the loading screen background to not show correctly when joining a split-screen multiplayer game\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a navigation issue that could cause an incorrect focus change when choosing an option from the pause menu"),(0,r.yg)("li",{parentName:"ul"},"Honey Blocks textures are now the same on Java and Bedrock"),(0,r.yg)("li",{parentName:"ul"},"Slime block textures are now the same on Java and Bedrock"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing worn items to transfer between Character Creator models unexpectedly  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Gameplay"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Breaking a Beehive while in creative mode will no longer drop the block as an item"),(0,r.yg)("li",{parentName:"ul"},"The Honeycomb block crafting recipe now matches Java, and can be crafted with 4 honeycomb items\xa0"),(0,r.yg)("li",{parentName:"ul"},"The Honeycomb block now uses the stone block sound instead of the slime block sound (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53577"},"MCPE-53577"),")"),(0,r.yg)("li",{parentName:"ul"},"Green particles are now shown when crops get pollinated by Bees"),(0,r.yg)("li",{parentName:"ul"},"Pillager Patrols no longer spawn in the End or Nether dimensions (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51481"},"MCPE-51481"),")"),(0,r.yg)("li",{parentName:"ul"},"Mob behaviour when jumping on Honey Blocks is now more consistent for all mobs"),(0,r.yg)("li",{parentName:"ul"},"Slime Blocks and Honey Blocks no longer stick to each other when interacting through piston-mechanics\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could sometimes cause touch screen controls to become inverted (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50256"},"MCPE-50256"),")"),(0,r.yg)("li",{parentName:"ul"},"Pick Block now works correctly on Bees (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53445"},"MCPE-53445"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed the held item bobbing animation when moving in first person view (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51212"},"MCPE-51212"),")\xa0  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Mobs"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Reduced the time that Bees take to search for a new hive when a hive is full"),(0,r.yg)("li",{parentName:"ul"},"Bees no longer try and find their way home if they end up in the Nether or the End dimension\xa0"),(0,r.yg)("li",{parentName:"ul"},"Bees can now be tempted and fed with two-high flowers"),(0,r.yg)("li",{parentName:"ul"},"Bees will now attack if a player harvests honey from the hive at night\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that was causing Bees to not get angry when their hive was harvested"),(0,r.yg)("li",{parentName:"ul"},"Bees now escape from the hive when it is on fire (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53609"},"MCPE-53609"),")"),(0,r.yg)("li",{parentName:"ul"},"Changed return-to-home priority so that bees are more eager to go home when it's raining\xa0"),(0,r.yg)("li",{parentName:"ul"},"Bees no longer clip inside honey blocks when flying near them"),(0,r.yg)("li",{parentName:"ul"},"Bees now spawn only in blocks you can move through (instead of getting stuck inside leaves, for example)"),(0,r.yg)("li",{parentName:"ul"},"Bees are now able to gather nectar from flowers that have been placed in the Nether\xa0"),(0,r.yg)("li",{parentName:"ul"},"Bees now hover correctly over flowers, instead of beside them"),(0,r.yg)("li",{parentName:"ul"},"If a Bee's home hive is blocked, it will no longer hover endlessly outside the hive"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was sometimes preventing Bees from entering hives that are not full\xa0"),(0,r.yg)("li",{parentName:"ul"},"Baby Pigmen now hold their swords in their hands, rather than around their necks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53454"},"MCPE-53454"),")  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Items"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Dragon heads now appear at the correct height (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53129"},"MCPE-53129"),")\xa0  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Graphical"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that was sometimes causing chests to become invisible (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52790"},"MCPE-52790"),")"),(0,r.yg)("li",{parentName:"ul"},"Held items no longer render incorrectly in front of the worn pumpkin vignette"),(0,r.yg)("li",{parentName:"ul"},"The block breaking animation will again show if a block is below water when the player is above"),(0,r.yg)("li",{parentName:"ul"},"The player's hand no longer disappears when gliding with Elytra (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53092"},"MCPE-53092"),")\xa0  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"User Interface"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could cause some UI flickering when navigating through the Character Creator  "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Add-Ons and Script Engine"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with entity geometry that was causing some custom mob models to break"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with particle billboarding that was causing them to appear flipped in the wrong direction"),(0,r.yg)("li",{parentName:"ul"},"Fix for scaling item in hand rendered items when the mob scale is non 1.0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with pivot points for custom geometry cube models")))))}m.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>h});var a=n(58168),r=n(96540),i=n(15680),o=n(18228),l=n(19365),s=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],p={toc:h},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(r.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}y.isMDXComponent=!0},85378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),i=n(74874),o=n(50153);const l={sidebar_position:99999942,title:"1.14.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.14"]},s="Minecraft Beta - 1.14.0.2 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.14/0/2",id:"official_changelog/preview/1.14/0/2",title:"1.14.0.2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.14/0/2.mdx",sourceDirName:"official_changelog/preview/1.14/0",slug:"/official_changelog/preview/1.14/0/2",permalink:"/docs/official_changelog/preview/1.14/0/2",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.14/0/2.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.14",permalink:"/docs/tags/1-14"}],version:"current",sidebarPosition:99999942,frontMatter:{sidebar_position:99999942,title:"1.14.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.14"]},sidebar:"changelogSidebar",previous:{title:"1.14.0.3",permalink:"/docs/official_changelog/preview/1.14/0/3"},next:{title:"1.14.0.1",permalink:"/docs/official_changelog/preview/1.14/0/1"}},u={},g=[],m={toc:g},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(h,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11402-xbox-onewindows-10android"},"Minecraft Beta - 1.14.0.2 (Xbox One/Windows 10/Android)"),(0,r.yg)(i.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);