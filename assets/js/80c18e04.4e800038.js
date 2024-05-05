"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97906,21032,79434,9433,8432,44496,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=r,m=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),d(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,n.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),l=a(56347),s=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??g;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},11404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/50/21/gameplay",id:"changelog_source/preview/1.19/50/21/gameplay",title:"gameplay",description:"Posted: 19th October 2022",source:"@site/docs/changelog_source/preview/1.19/50/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/50/21",slug:"/changelog_source/preview/1.19/50/21/gameplay",permalink:"/docs/changelog_source/preview/1.19/50/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Bamboo Wood Types</strong>",id:"bamboo-wood-types",level:2},{value:"<strong>Camel</strong>",id:"camel",level:2},{value:"<strong>Chiseled Bookshelf</strong>",id:"chiseled-bookshelf",level:2},{value:"<strong>Hanging Sign</strong>",id:"hanging-sign",level:2},{value:"Dressing Room",id:"dressing-room",level:3},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Villager</strong>",id:"villager",level:3},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>World and Dimensions</strong>",id:"world-and-dimensions",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2}],u={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 19th October 2022"),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/9993929211661",alt:"beta19U5_2_16x9.jpg"})),(0,r.yg)("p",null,"Minecraft Live 2022 only wrapped a few days ago but we are all ready to try out the features that Agnes, Chi, and Nir told us about during the show! That\u2019s right, the camel, bamboo wood set, chiseled bookshelf, and hanging signs are all in this week\u2019s Minecraft Preview, so you can try them all out while they\u2019re still fresh! Maybe that means watching a camel wiggle its ears for hours on end, floating around on a bamboo raft while watching the clouds, or curling up with a good book that you pulled from your chiseled bookshelf. Or you\u2019re going to pick a fight with a herd of mel\xe9e mobs from atop the tall camel, hang cryptic messages for your friends to find, and craft a secret passageway that masquerades as an innocent collection of books. Me? I\u2019m going to lounge around on the Minecraft Live set before it gets taken down. Remember to send us all your feedback at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Introducing the next major update experimental toggle. Help us try out and develop the new next major update content!")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Please remember worlds that have used Experimental toggles will always be flagged as Experimental. We recommend keeping these Experimental worlds as separate copies from your main saves. More information can be found in\xa0",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/hc/en-us/articles/4403610710797"},"this article"),"."))),(0,r.yg)("h2",{id:"bamboo-wood-types"},(0,r.yg)("strong",{parentName:"h2"},"Bamboo Wood Types")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added new base blocks for Bamboo Wood types"),(0,r.yg)("li",{parentName:"ul"},"Added recipes for Bamboo Wood types"),(0,r.yg)("li",{parentName:"ul"},"Added Bamboo Flooring block variants"),(0,r.yg)("li",{parentName:"ul"},"Added Bamboo Raft and Raft with Chest")),(0,r.yg)("h2",{id:"camel"},(0,r.yg)("strong",{parentName:"h2"},"Camel")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Camel base mob functionality"),(0,r.yg)("li",{parentName:"ul"},"Added two-seat rider functionality to Camel"),(0,r.yg)("li",{parentName:"ul"},"Add Dashing ability to Camel"),(0,r.yg)("li",{parentName:"ul"},"Camels randomly sit down for a short amount of time"),(0,r.yg)("li",{parentName:"ul"},"Camels can spawn in desert villages"),(0,r.yg)("li",{parentName:"ul"},"Camel is a tall animal and the rider is high enough in the air that melee mobs can\u2019t reach them")),(0,r.yg)("h2",{id:"chiseled-bookshelf"},(0,r.yg)("strong",{parentName:"h2"},"Chiseled Bookshelf")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A new, chiseled variation of the Bookshelf"),(0,r.yg)("li",{parentName:"ul"},"Crafted with 6 Planks and 3 Wooden Slabs"),(0,r.yg)("li",{parentName:"ul"},"Can store Books, Book and Quills, and Enchanted Books",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Holds up to 6 Books"),(0,r.yg)("li",{parentName:"ul"},"Keeps the stories and lore of your world safe"))),(0,r.yg)("li",{parentName:"ul"},"Comparators can detect the last book placed/removed",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Perfect for hiding secrets in your spooky library")))),(0,r.yg)("h2",{id:"hanging-sign"},(0,r.yg)("strong",{parentName:"h2"},"Hanging Sign")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Hanging Signs, which can be placed beneath and on the side of a block"),(0,r.yg)("li",{parentName:"ul"},"Added Hanging Sign of all wood types and recipes"),(0,r.yg)("li",{parentName:"ul"},"Hanging Signs can be placed under narrow blocks with center support"),(0,r.yg)("li",{parentName:"ul"},"Hanging Signs have their own specific UI when writing text on the sign")),(0,r.yg)("h1",{id:"non-experimental-features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Non-Experimental Features and Bug Fixes")),(0,r.yg)("h3",{id:"dressing-room"},"Dressing Room"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added 7 new friends for Steve & Alex to the cast: Ari, Efe, Zuri, Sunny, Makena, Kai, and Noor"),(0,r.yg)("li",{parentName:"ul"},"Added a new first-time modal to the dressing room introducing the cast"),(0,r.yg)("li",{parentName:"ul"},'Updated the "create character" process in the dressing room to select a default cast member as your base character'),(0,r.yg)("li",{parentName:"ul"},"Added each cast members clothing pieces into the character creator")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("h3",{id:"spectator-mode"},(0,r.yg)("strong",{parentName:"h3"},"Spectator Mode")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Allays no longer throw items to players in Spectator Mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162873"},"MCPE-162873"),")")),(0,r.yg)("h3",{id:"blocks"},(0,r.yg)("strong",{parentName:"h3"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wooden Doors, Iron Doors, Wooden Trapdoors, Iron Trapdoors, and Fence Gates now use the same opening and closing sound effects as Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Updated Pressure Plates to have different pitches based on their behaviour to match Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Added unique button click sound for Wooden Buttons to match Java Edition"),(0,r.yg)("li",{parentName:"ul"},"Crimson and Warped block sets now have a unique set of sounds")),(0,r.yg)("h3",{id:"villager"},(0,r.yg)("strong",{parentName:"h3"},"Villager")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"While playing tag, baby Villagers will now run at a quicker speed that matches Java Edition")),(0,r.yg)("h2",{id:"touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed the action delay from Attack and Interact buttons"),(0,r.yg)("li",{parentName:"ul"},"When the joystick is unlocked, the draggable range has been changed to be the same as the when the joystick is locked. In both modes, if auto-sprinting is enabled, it will start when the joystick is dragged slightly above the background. The auto-sprint will disengage if the joystick control is subsequently moved back into the joystick background area"),(0,r.yg)("li",{parentName:"ul"},"A tap gesture will now fire a charged Crossbow. Previously it was necessary to hold the gesture for 400ms before the bolt would fire"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where players couldn't drag/drop in the Anvil screen")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You can now bind the copy coordinate keys with full keyboard gameplay turned on (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163082"},"MCPE-163082"),")")),(0,r.yg)("h2",{id:"world-and-dimensions"},(0,r.yg)("strong",{parentName:"h2"},"World and Dimensions")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed a bug that could cause players to get stuck on the "Building Terrain" screen when changing dimensions (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158215"},"MCPE-158215"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Temporarily reverted the fix for effects being inherited by bred mobs, while a related issue is addressed first (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81890"},"MCPE-81890"),")")))}d.isMDXComponent=!0},86696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(50444),i=(a(84220),a(57350));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/50/21/tech",id:"changelog_source/preview/1.19/50/21/tech",title:"tech",description:"Actor Properties",source:"@site/docs/changelog_source/preview/1.19/50/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/50/21",slug:"/changelog_source/preview/1.19/50/21/tech",permalink:"/docs/changelog_source/preview/1.19/50/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Known Issues</strong>",id:"known-issues",level:2}],d={toc:g},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"actor-properties"},(0,r.yg)("strong",{parentName:"h2"},"Actor Properties")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Actor Properties are no longer experimental (this includes Molang queries and property filters, but not Permutations)")),(0,r.yg)("h2",{id:"add-ons-and-script-engine"},(0,r.yg)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where changing the subpack of Resource Packs that have subpacks, would not apply changes until the game was restarted (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162002"},"MCPE-162002"),")")),(0,r.yg)("h2",{id:"ai-goals"},(0,r.yg)("strong",{parentName:"h2"},"AI Goals")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Exposed new data parameters for the "minecraft:offer',"_",'flower" AI behaviour to specify such things as the time that the mob offers the flower for, the chance that the goal will start, and the dimensions of the AABB used to search for a mob to offer a flower to'),(0,r.yg)("li",{parentName:"ul"},'The "minecraft:offer',"_",'flower" AI behavior can now be used by any mob, not just the Iron Golem'),(0,r.yg)("li",{parentName:"ul"},'The "minecraft:offer',"_",'flower" AI behavior will now search through all mobs in the specified range rather than just the closest one, meaning that this goal has the potential to be used more consistently than before'),(0,r.yg)("li",{parentName:"ul"},'Exposed new data parameters for the "minecraft:take',"_",'flower" AI behavior to specify such things as the conditions to be met to start the goal, the min and max wait times before taking the flower, and the dimensions of the AABB used to search for a mob to take a flower from'),(0,r.yg)("li",{parentName:"ul"},'The "minecraft:take',"_",'flower" AI behavior can now be used by any mob, not just baby Villagers')),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that would occur if Education Edition items were rendered without the Education Edition toggle turned on (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161587"},"MCPE-161587"),")")),(0,r.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"As a preview of upcoming potential changes to how commands run, new experimental functionality within the Upcoming Creator Features experiment causes all command execution to run at the end of the current tick")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed the functionality of the 'minecraft:breathability' component. Component will have no effect on the custom defined block")),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"known-issues"},(0,r.yg)("strong",{parentName:"h2"},"Known Issues")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"We have a known issue in this Preview update that may cause a crash when travelling through portals in multiplayer. We are working on a fix for this and hope to have it addressed as soon as possible, thank you for your patience!")))}m.isMDXComponent=!0},50444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/50/21/tech_sapi_exp",id:"changelog_source/preview/1.19/50/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Initial APIs are releasing out of beta and will be usable without an experimental flag.",source:"@site/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/50/21",slug:"/changelog_source/preview/1.19/50/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Initial APIs are releasing out of beta and will be usable without an experimental flag."),(0,r.yg)("li",{parentName:"ul"},"The first module to release is @minecraft/server as version 1.0.0. The APIs included with this are listed below.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Non-beta APIs like those included in the @minecraft/server 1.0.0 module do not require the Beta APIs experiment to be turned on, and will be more stable over time"),(0,r.yg)("li",{parentName:"ul"},"This initial API set is narrow, but we intend to add more APIs into non-beta modules over the coming months"))),(0,r.yg)("li",{parentName:"ul"},"@minecraft/server will continue to develop in Beta and those Beta APIs have been incremented in version to 1.1.0-beta; if you wish to continue to use Beta @minecraft/server APIs, manifest.json references will need to be updated to 1.1.0-beta."),(0,r.yg)("li",{parentName:"ul"},"APIs included in the @minecraft/server version 1.0.0 release:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"System type (Exposed via\xa0systemglobal instance)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"run() - runs a function on the next tick (can be used to maintain a game loop tick over tick)"))),(0,r.yg)("li",{parentName:"ul"},"World type (exposed via\xa0worldglobal instance)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"getDimension()"),(0,r.yg)("li",{parentName:"ul"},"getAllPlayers()"))),(0,r.yg)("li",{parentName:"ul"},"MinecraftDimensionTypes type",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"nether"),(0,r.yg)("li",{parentName:"ul"},"overworld"),(0,r.yg)("li",{parentName:"ul"},"theEnd"))),(0,r.yg)("li",{parentName:"ul"},"Dimension type",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"id"),(0,r.yg)("li",{parentName:"ul"},"runCommandAsync()"))),(0,r.yg)("li",{parentName:"ul"},"CommandResult type",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"commandResult"))),(0,r.yg)("li",{parentName:"ul"},"Entity type",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"id"),(0,r.yg)("li",{parentName:"ul"},"typeId"),(0,r.yg)("li",{parentName:"ul"},"dimension"),(0,r.yg)("li",{parentName:"ul"},"runCommandAsync()"))),(0,r.yg)("li",{parentName:"ul"},"Player type",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"name")))))))}d.isMDXComponent=!0},84220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/50/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/50/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/50/21",slug:"/changelog_source/preview/1.19/50/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/50/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),l=a(19365),s=a(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},h="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),l=a(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},d=[],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},43825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),i=a(11404),l=a(86696);const s={sidebar_position:99999794,title:"1.19.50.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.50.21",u={unversionedId:"official_changelog/preview/1.19/50/21",id:"official_changelog/preview/1.19/50/21",title:"1.19.50.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/50/21.mdx",sourceDirName:"official_changelog/preview/1.19/50",slug:"/official_changelog/preview/1.19/50/21",permalink:"/docs/official_changelog/preview/1.19/50/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/50/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999794,frontMatter:{sidebar_position:99999794,title:"1.19.50.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.50.22",permalink:"/docs/official_changelog/preview/1.19/50/22"},next:{title:"1.19.50.20",permalink:"/docs/official_changelog/preview/1.19/50/20"}},g={},d=[],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1195021"},"Minecraft Beta & Preview - 1.19.50.21"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);