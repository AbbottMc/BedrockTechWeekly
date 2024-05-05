"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30003,21032,54622,70524,8043,48250,24375],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>s});var r=n(96540),a=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),g=()=>{a.k.switchHidden(),t(a.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,r.useEffect)((()=>(s(),c(),t(a.k.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),s=n(56347),l=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??g;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var f=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=g.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>g.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(v,(0,r.A)({},e,t)),a.createElement(b,(0,r.A)({},e,t)))}function _(e){const t=(0,f.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},9294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/24/gameplay",id:"changelog_source/preview/1.19/60/24/gameplay",title:"gameplay",description:"Posted: 14\xa0December, 2022",source:"@site/docs/changelog_source/preview/1.19/60/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/60/24",slug:"/changelog_source/preview/1.19/60/24/gameplay",permalink:"/docs/changelog_source/preview/1.19/60/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Note:</strong> This Preview/Beta will be the last one of 2022, and we will resume them again in 2023!",id:"note-this-previewbeta-will-be-the-last-one-of-2022-and-we-will-resume-them-again-in-2023",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Raids</strong>",id:"raids",level:3},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Hopper</strong>",id:"hopper",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Horse</strong>",id:"horse",level:3},{value:"<strong>Vex</strong>",id:"vex",level:3},{value:"<strong>Vex &amp; Allay</strong>",id:"vex--allay",level:3},{value:"<strong>Touch</strong>",id:"touch",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," 14\xa0December, 2022"),(0,a.yg)("h2",{id:"note-this-previewbeta-will-be-the-last-one-of-2022-and-we-will-resume-them-again-in-2023"},(0,a.yg)("strong",{parentName:"h2"},"Note:")," This Preview/Beta will be the last one of 2022, and we will resume them again in 2023!"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,a.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,a.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/11448528540045",alt:"A Minecraft screenshot featuring horses in a fenced area, a leashed camel, and a vex and an allay in boats."})),(0,a.yg)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,a.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,a.yg)("p",null,"In last week\u2019s preview, we included a bugfix for campfires which triggered some conversations about their use and design. Firstly: thank you for all your feedback! We have focused on parity for new features the past couple of years and we are committed to ensure that new features mainly act the same for all our players regardless of platform. For campfires, which is an older feature, it was never intended that they would set mobs and players on fire \u2013 that behavior was a bug in Bedrock Edition."),(0,a.yg)("p",null,"We understand that some clever designs were built around this bugged mechanic, but after careful consideration, we have decided to stick with its original design intent, similar to how a torch would work. A torch doesn't hurt entities that come in contact with it. A campfire on the other hand, will cause the player to take damage as if they are standing on a magma block."),(0,a.yg)("p",null,"We want to reassure you that this decision was discussed with our gameplay team ahead of the fix being made, and we\u2019re grateful for your support!"),(0,a.yg)("h1",{id:"experimental-features"},(0,a.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,a.yg)("h2",{id:"blocks"},(0,a.yg)("strong",{parentName:"h2"},"Blocks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Chiseled Bookshelf now fills when player is dropping Books into the connected Hopper or Dropper (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164023"},"MCPE-164023"),")")),(0,a.yg)("h1",{id:"features-and-bug-fixes"},(0,a.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,a.yg)("h2",{id:"gameplay"},(0,a.yg)("strong",{parentName:"h2"},"Gameplay")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Slimes and Magma Cubes no longer spawn in spaces that are 2 blocks tall or less (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46540"},"MCPE-46540"),")")),(0,a.yg)("h3",{id:"raids"},(0,a.yg)("strong",{parentName:"h3"},"Raids")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Raids now trigger properly when the player with bad omen enters a village while riding/gliding (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152774"},"MCPE-152774"),")")),(0,a.yg)("h2",{id:"items"},(0,a.yg)("strong",{parentName:"h2"},"Items")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed item degradation when rapidly attacking mobs (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157150"},"MCPE-157150"),")")),(0,a.yg)("h3",{id:"hopper"},(0,a.yg)("strong",{parentName:"h3"},"Hopper")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Hoppers will no longer fail to collect items when trying to pull in multiple item types (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38963"},"MCPE-38963"),")")),(0,a.yg)("h2",{id:"mobs"},(0,a.yg)("strong",{parentName:"h2"},"Mobs")),(0,a.yg)("h3",{id:"horse"},(0,a.yg)("strong",{parentName:"h3"},"Horse")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Horses can no longer be pushed over Fences with Carpets on top (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164717"},"MCPE-164717"),")")),(0,a.yg)("h3",{id:"vex"},(0,a.yg)("strong",{parentName:"h3"},"Vex")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Vexes' hitboxes are now vertically centered with their models"),(0,a.yg)("li",{parentName:"ul"},"The Vex now uses a separate charging animation when empty-handed (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164490"},"MCPE-164490"),")"),(0,a.yg)("li",{parentName:"ul"},"Vexes now render offhand items")),(0,a.yg)("h3",{id:"vex--allay"},(0,a.yg)("strong",{parentName:"h3"},"Vex & Allay")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Vex & Allay now sit properly in Boats and Minecarts (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164441"},"MCPE-164441"),")")),(0,a.yg)("h2",{id:"touch"},(0,a.yg)("strong",{parentName:"h2"},"Touch")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a bug that prevented items from moving indirectly between Creative Mode inventory and players' extended inventory in Pocket UI")),(0,a.yg)("h2",{id:"touch-controls"},(0,a.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a problem where the touch d-pad's forward button was not functional when holding the strafe left/right button")),(0,a.yg)("h2",{id:"user-interface"},(0,a.yg)("strong",{parentName:"h2"},"User Interface")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Feedback button on the main menu will now prompt the player with a modal before redirecting to their web browser")))}p.isMDXComponent=!0},46538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var r=n(58168),a=(n(96540),n(15680)),o=n(11890),i=(n(81618),n(57350));const s={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/60/24/tech",id:"changelog_source/preview/1.19/60/24/tech",title:"tech",description:"Commands",source:"@site/docs/changelog_source/preview/1.19/60/24/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/24",slug:"/changelog_source/preview/1.19/60/24/tech",permalink:"/docs/changelog_source/preview/1.19/60/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2}],p={toc:g},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"commands"},(0,a.yg)("strong",{parentName:"h2"},"Commands")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Removed the unintended ability to set the\xa0_with_property of a raw text JSON object to an array of JSON objects")),(0,a.yg)("h2",{id:"mobs"},(0,a.yg)("strong",{parentName:"h2"},"Mobs")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The "minecraft:variable',"_","max","_","auto","_",'step" component has a new property "controlled',"_",'value"',(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'This property will override "base',"_",'value" when a mob with "minecraft:input',"_","ground","_",'controlled" is being controlled by the player'),(0,a.yg)("li",{parentName:"ul"},'The "jump',"_","prevented","_",'value" will have precedence over both other values')))),(0,a.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.yg)("h2",{id:"script-api"},(0,a.yg)("strong",{parentName:"h2"},"Script API")),(0,a.yg)(i.default,{techSapi:(0,a.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.yg)("h2",{id:"commands-1"},(0,a.yg)("strong",{parentName:"h2"},"Commands")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a bug where the @initiator selector would not work with the Upcoming Creator Features experiment enabled (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164727"},"MCPE-164727"),")"),(0,a.yg)("li",{parentName:"ul"},"As a preview of upcoming potential changes to how commands run, new experimental functionality within the Upcoming Creator Features experiment causes all behavior pack animation events to run at the end of the current tick")))}h.isMDXComponent=!0},11890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/24/tech_sapi_exp",id:"changelog_source/preview/1.19/60/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added method\xa0getEffectswhich returns an array of all active effects on the entity",source:"@site/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/60/24",slug:"/changelog_source/preview/1.19/60/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added method\xa0_getEffects_which returns an array of all active effects on the entity")))}p.isMDXComponent=!0},81618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/60/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/60/24",slug:"/changelog_source/preview/1.19/60/24/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>d});var r=n(58168),a=n(96540),o=n(15680),i=n(18228),s=n(19365),l=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(s.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(s.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(a.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(58168),a=n(96540),o=n(15680),i=n(18228),s=n(19365);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},p=[],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(a.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(a.Fragment,null,n.techSapi)))}m.isMDXComponent=!0},37875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(74874),i=n(9294),s=n(46538);const l={sidebar_position:99999786,title:"1.19.60.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.60.24",u={unversionedId:"official_changelog/preview/1.19/60/24",id:"official_changelog/preview/1.19/60/24",title:"1.19.60.24",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/60/24.mdx",sourceDirName:"official_changelog/preview/1.19/60",slug:"/official_changelog/preview/1.19/60/24",permalink:"/docs/official_changelog/preview/1.19/60/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/60/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999786,frontMatter:{sidebar_position:99999786,title:"1.19.60.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.60.25",permalink:"/docs/official_changelog/preview/1.19/60/25"},next:{title:"1.19.60.23",permalink:"/docs/official_changelog/preview/1.19/60/23"}},g={},p=[],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-beta--preview---1196024"},"Minecraft Beta & Preview - 1.19.60.24"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,a.yg)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);