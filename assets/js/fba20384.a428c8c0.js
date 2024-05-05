"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99901,59498,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,h=g["".concat(l,".").concat(p)]||g[p]||d[p]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>s});var a=n(96540),r=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function s(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),d(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,a.useEffect)((()=>(s(),c(),t(r.k.isHidden()),()=>{l(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),i=n(20053),o=n(23104),s=n(56347),l=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var f=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,n=g.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>g.push(e),onKeyDown:h,onClick:p},o,{className:(0,i.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,i.A)("tabs-container",y.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},9723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},o=void 0,s={unversionedId:"changelog_source/preview/1.16/210/58/gameplay",id:"changelog_source/preview/1.16/210/58/gameplay",title:"gameplay",description:"Posted: 3 February, 2021",source:"@site/docs/changelog_source/preview/1.16/210/58/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/210/58",slug:"/changelog_source/preview/1.16/210/58/gameplay",permalink:"/docs/changelog_source/preview/1.16/210/58/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/210/58/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Bug Fixes</strong>",id:"bug-fixes",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Technical Fixes and Changes</strong>",id:"technical-fixes-and-changes",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Custom Biomes and Blocks</strong>",id:"custom-biomes-and-blocks",level:2},{value:"<strong>Render Offsets Component</strong>",id:"render-offsets-component",level:2},{value:"<strong>Component Variables</strong>",id:"component-variables",level:2}],u={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 3 February, 2021"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("p",null,"We have a bunch of bug fixes going into this week\u2019s beta! Thanks for all of the feedback and bug reports that you\u2019ve sent in so far! Send us your Caves and Cliffs ideas and feedback at\xa0",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search\xa0and\xa0reports any\xa0new\xa0bugs you may\xa0encounter at\xa0",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360084662732/img_656.JPG",alt:"img_656.JPG"})),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes")),(0,r.yg)("h2",{id:"accessibility"},(0,r.yg)("strong",{parentName:"h2"},"Accessibility")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The screen reader now properly announces edit/create character button text for each character on the profile screen")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a number of crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when opening the achievements screen when the anti-aliasing setting was set to 1 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110164"},"MCPE-110164"),") \xa0")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed ticks not affecting blocks changing states - this means that things like crops and saplings will once again grow correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116221"},"MCPE-116221"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed the player being unable to interact with a tool in their inventory after breaking blocks with it in survival (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115341"},"MCPE-115341"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed dried kelp block bottom and carried textures so that rope pixels are aligned (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35476"},"MCPE-35476"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where snow accumulated in lines with certain simulation distances (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73468"},"MCPE-73468"),")"),(0,r.yg)("li",{parentName:"ul"},"TNT submerged in water will once again launch players in Survival mode"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where achievement names and descriptions would not be translated, independent of language selection. (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85813"},"MCPE-85813"),")"),(0,r.yg)("li",{parentName:"ul"},"The online status of cross-platform friends' shown on the invite screen will now update when a change has been detected (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70004"},"MCPE-70004"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that prevented achievement rewards from showing correctly after changing the language setting"),(0,r.yg)("li",{parentName:"ul"},"Owned and purchasable skins no longer get mixed into different categories while offline"),(0,r.yg)("li",{parentName:"ul"},"Emote title no longer shows previously previewed emote upon re-entering tab"),(0,r.yg)("li",{parentName:"ul"},"Updated the in-game links to the feedback site and bug tracker")),(0,r.yg)("h2",{id:"graphics"},(0,r.yg)("strong",{parentName:"h2"},"Graphics")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Goat and other tinted spawn eggs now look correct when held in hand (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104145"},"MCPE-104145"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with screen resolution which could flicker when resizing a window (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69721"},"MCPE-69721"),")"),(0,r.yg)("li",{parentName:"ul"},'Entities that use material state "Blending" now render correctly behind transparent parts')),(0,r.yg)("h2",{id:"technical-fixes-and-changes"},(0,r.yg)("strong",{parentName:"h2"},"Technical Fixes and Changes")),(0,r.yg)("h2",{id:"animation"},(0,r.yg)("strong",{parentName:"h2"},"Animation")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'On the "Dragons!" Marketplace map, behavior animation controller will no longer stop working after reloading the map with a saddled dragon')),(0,r.yg)("h2",{id:"custom-biomes-and-blocks"},(0,r.yg)("strong",{parentName:"h2"},"Custom Biomes and Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disabled loading of entities in custom biome features"),(0,r.yg)("li",{parentName:"ul"},"Fixed UVs of data-driven blocks to not be slightly shrunk, which caused texel warping"),(0,r.yg)("li",{parentName:"ul"},"Fixed data driven blocks being pushed by pistons not working correctly.")),(0,r.yg)("h2",{id:"render-offsets-component"},(0,r.yg)("strong",{parentName:"h2"},"Render Offsets Component")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Simple items, like swords or pickaxes, can have an optional offset applied to them to modify the way they are rendered. Note this component should not be added to an attachable item")),(0,r.yg)("h2",{id:"component-variables"},(0,r.yg)("strong",{parentName:"h2"},"Component Variables")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"main","_","hand\xa0- An optional object storing optional transform data for 'first","_","person' and 'third","_","person' for the player's right hand"),(0,r.yg)("li",{parentName:"ul"},"off","_","hand\xa0- An optional object storing optional transform data for 'first","_","person' and 'third","_","person' for the player's left hand"),(0,r.yg)("li",{parentName:"ul"},"first","_","person\xa0- An optional object storing 3 vectors 'position', 'rotation', 'scale' used to build the first person matrix"),(0,r.yg)("li",{parentName:"ul"},"third","_","person\xa0- An optional object storing 3 vectors 'position', 'rotation', 'scale' used to build the third person matrix")))}d.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var a=n(58168),r=n(96540),i=n(15680),o=n(18228),s=n(19365),l=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],h={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(s.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(s.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(r.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},97072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),i=n(74874),o=n(9723);const s={sidebar_position:99999880,title:"1.16.210.58",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},l="Minecraft Beta - 1.16.210.58 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/210/58",id:"official_changelog/preview/1.16/210/58",title:"1.16.210.58",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/210/58.mdx",sourceDirName:"official_changelog/preview/1.16/210",slug:"/official_changelog/preview/1.16/210/58",permalink:"/docs/official_changelog/preview/1.16/210/58",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/210/58.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999880,frontMatter:{sidebar_position:99999880,title:"1.16.210.58",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.210.59",permalink:"/docs/official_changelog/preview/1.16/210/59"},next:{title:"1.16.210.57",permalink:"/docs/official_changelog/preview/1.16/210/57"}},u={},g=[],d={toc:g},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11621058-xbox-onewindows-10android"},"Minecraft Beta - 1.16.210.58 (Xbox One/Windows 10/Android)"),(0,r.yg)(i.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);