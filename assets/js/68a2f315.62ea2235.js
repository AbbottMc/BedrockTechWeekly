"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99071,21032,5338,34394,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},g),{},{components:a})):n.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),d(i))}}),[c,g]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),u=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||u()};return(0,n.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),g()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),l=a(56347),s=a(57485),c=a(31682),g=a(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,g.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??u;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:g}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),g?r.createElement("div",{className:"w-full"},g):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},21279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/20/20-21/gameplay",id:"changelog_source/preview/1.19/20/20-21/gameplay",title:"gameplay",description:"Posted: 29th\xa0June 2022",source:"@site/docs/changelog_source/preview/1.19/20/20-21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/20/20-21",slug:"/changelog_source/preview/1.19/20/20-21/gameplay",permalink:"/docs/changelog_source/preview/1.19/20/20-21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/20-21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Update 30th June 2022:</strong> The Preview on iOS will be version 1.19.20.21, but has the same features as mentioned below",id:"update-30th-june-2022-the-preview-on-ios-will-be-version-1192021-but-has-the-same-features-as-mentioned-below",level:2},{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Please note</strong> that there will not be a Preview/Beta release for the week of July 4, 2022.",id:"please-note-that-there-will-not-be-a-previewbeta-release-for-the-week-of-july-4-2022",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:3},{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>VR</strong>",id:"vr",level:2},{value:"<strong>Mangrove &amp; Azalea Leaves</strong>",id:"mangrove--azalea-leaves",level:2},{value:"<strong>Mob Effects</strong>",id:"mob-effects",level:2},{value:"<strong>Mobile Controls</strong>",id:"mobile-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Stability &amp; Performance</strong>",id:"stability--performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Trades</strong>",id:"trades",level:3}],g={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 29th\xa0June 2022"),(0,r.yg)("h2",{id:"update-30th-june-2022-the-preview-on-ios-will-be-version-1192021-but-has-the-same-features-as-mentioned-below"},(0,r.yg)("strong",{parentName:"h2"},"Update 30th June 2022:")," The Preview on iOS will be version 1.19.20.21, but has the same features as mentioned below"),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions\xa0")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/7285452875533/beta19U2_1_16x9_alex.jpg",alt:"A Minecraft Screenshot, showing a character near a Mangrove swamp and a house"})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"\xa0and send us\xa0",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.yg)("h2",{id:"please-note-that-there-will-not-be-a-previewbeta-release-for-the-week-of-july-4-2022"},(0,r.yg)("strong",{parentName:"h2"},"Please note")," that there will not be a Preview/Beta release for the week of July 4, 2022."),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Zombies now have a 10% chance to be able to break doors on hard difficulty (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79636"},"MCPE-79636"),")"),(0,r.yg)("li",{parentName:"ul"},'Removed "Wood" from the names of Mangrove Wood Planks, Stairs, and Slabs (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156791"},"MCPE-156791"),")"),(0,r.yg)("li",{parentName:"ul"},"The Wandering Trader's spawning now matches Java Edition and will no longer spawn in water, lava, or underground (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46911"},"MCPE-46911"),")"),(0,r.yg)("li",{parentName:"ul"},'End Portal Frame Block is now named "End Portal Frame" instead of "End Portal" (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76821"},"MCPE-76821"),")"),(0,r.yg)("li",{parentName:"ul"},"Tadpoles flopping around while on land now more closely match Java Edition and fishes in speed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154316"},"MCPE-154316"),")"),(0,r.yg)("li",{parentName:"ul"},"Polar Bears no longer panic when attacked"),(0,r.yg)("li",{parentName:"ul"},"Piglins will now stop attacking if the player puts on Gold Armor (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65516"},"MCPE-65516"),")")),(0,r.yg)("h3",{id:"spectator-mode-experimental"},(0,r.yg)("strong",{parentName:"h3"},"Spectator Mode (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can now place blocks where a spectator is hovering"),(0,r.yg)("li",{parentName:"ul"},"Players now have their hands back when they are holding a Map when they have one item in offhand and one in main hand. Curious how they held it without hands... (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100259"},"MCPE-100259"),")")),(0,r.yg)("h2",{id:"audio"},(0,r.yg)("strong",{parentName:"h2"},"Audio")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that caused the new Wild Update music to not play in the Wild Update biomes when in Creative mode")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Twisting Vines and Weeping Vines with no support now pop even when the random ticking speed is set to 0 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69305"},"MCPE-69305"),")"),(0,r.yg)("li",{parentName:"ul"},"Sculk Catalyst now blooms when a mob with no experience dies next to it"),(0,r.yg)("li",{parentName:"ul"},"Hanging Mangrove Propagules no longer drop a Propagule item when Silk Touched if not at max growth (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156821"},"MCPE-156821"),")"),(0,r.yg)("li",{parentName:"ul"},"Muddy Mangrove Roots can now be placed sideways (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153721"},"MCPE-153721"),")"),(0,r.yg)("li",{parentName:"ul"},"Hanging Mangrove Propagule no longer changes color when certain blocks are placed nearby (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156570"},"MCPE-156570"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could occur when travelling through a nether portal to the overworld (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158167"},"MCPE-158167"),")")),(0,r.yg)("h2",{id:"vr"},(0,r.yg)("strong",{parentName:"h2"},"VR")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The \u2018Toggle Perspective\u2019 hint now shows the player's assignment instead of the default assignment")),(0,r.yg)("h2",{id:"mangrove--azalea-leaves"},(0,r.yg)("strong",{parentName:"h2"},"Mangrove & Azalea Leaves")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mangrove and Azalea Leaves no longer prevent tree growth (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154980"},"MCPE-154980"),")")),(0,r.yg)("h2",{id:"mob-effects"},(0,r.yg)("strong",{parentName:"h2"},"Mob Effects")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with extra health from Health Boost not persisting after exiting the world (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153504"},"MCPE-153504"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that caused FOV to stutter when sprinting while the player had a speed effect applied")),(0,r.yg)("h2",{id:"mobile-controls"},(0,r.yg)("strong",{parentName:"h2"},"Mobile Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added support for middle mouse click on iOS")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Jobless Zombie Villagers are no longer unable to ride Minecarts and Boats (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76831"},"MCPE-76831"),")"),(0,r.yg)("li",{parentName:"ul"},"Ravager is now able to destroy Mangrove Leaves, Azalea, Azalea Leaves, Cave Vines, Dripleaves, Spore Blossoms, and Hanging Roots (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156551"},"MCPE-156551"),") (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125322"},"MCPE-125322"),")")),(0,r.yg)("h2",{id:"sculk-sensor"},(0,r.yg)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If two vibrations are emitted at the same time, Sculk Sensors will now react to the closest one (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155793"},"MCPE-155793"),")"),(0,r.yg)("li",{parentName:"ul"},"If two vibrations are emitted at the same time and at the same distance, Sculk Sensors will now react to the one with the highest frequency"),(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors now detect a Creeper exploding with a frequency of 15"),(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors now detect an End Crystal exploding with a frequency of 15 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153733"},"MCPE-153733"),")"),(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors now detect a Fish being let out of a Bucket with a frequency of 12"),(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors now detect a TNT being fired out of a Dispenser with a frequency of 12")),(0,r.yg)("h2",{id:"stability--performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability & Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when teleporting and killing an entity in the same tick"),(0,r.yg)("li",{parentName:"ul"},"Entities that die completely now have their data removed from the world file (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155283"},"MCPE-155283"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix potential crash when returning to the Overworld from the Nether or The End ("),(0,r.yg)("li",{parentName:"ul"},"The game no longer crashes when entering Coin Starter Bundle Screen")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Redesigned the toggle switches to make it easier to distinguish between the on and off states"),(0,r.yg)("li",{parentName:"ul"},'Saddled Pig\'s tooltip changed to "Ride" instead of "Mount" to match other ridable mobs')),(0,r.yg)("h3",{id:"trades"},(0,r.yg)("strong",{parentName:"h3"},"Trades")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that prevented Fisherman Villagers from offering to buy Boats at max level")))}d.isMDXComponent=!0},42632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));a(57350);const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/20/20-21/tech",id:"changelog_source/preview/1.19/20/20-21/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.19/20/20-21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/20/20-21",slug:"/changelog_source/preview/1.19/20/20-21/tech",permalink:"/docs/changelog_source/preview/1.19/20/20-21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/20-21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Bucket Item</strong>",id:"bucket-item",level:2},{value:"<strong>Dedicated Server</strong>",id:"dedicated-server",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general-1",level:2}],g={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed bugs where client state could get out of sync with server if using an item is cancelled or fails")),(0,r.yg)("h2",{id:"bucket-item"},(0,r.yg)("strong",{parentName:"h2"},"Bucket Item")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Releasing a bucketed custom mob now spawns the correct type of mob"),(0,r.yg)("li",{parentName:"ul"},"Fixed the order in which a bucketed mob is created when released, which means any Actor Properties on it will load correctly")),(0,r.yg)("h2",{id:"dedicated-server"},(0,r.yg)("strong",{parentName:"h2"},"Dedicated Server")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a server property ",(0,r.yg)("em",{parentName:"li"},"disable-player-interaction")," which informs clients that they should ignore other players when interacting with the world"),(0,r.yg)("li",{parentName:"ul"},'Added a new dedicated server property, "chat-restriction", that can be modified in the "server.properties" file to restrict the chat for all players connecting to the server. The property\'s possible values are "None", "Dropped", and "Disabled". See the default file for more information')),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"With data-driven block tessellation, geometry box pivot-base rotation now rotates around the correct pivot point"),(0,r.yg)("li",{parentName:"ul"},"Add Content warnings for large icons for texture tessellation (eg. objects in hand)")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"actor-properties"},(0,r.yg)("strong",{parentName:"h2"},"Actor Properties")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Content Errors for when there are too many properties on the actor (more than 32) or when a string enum name is too long (more than 32 characters)"),(0,r.yg)("li",{parentName:"ul"},"Restored ability to use a Molang expression string for default values of Actor Properties (These are primarily useful for random starting values)")),(0,r.yg)("h2",{id:"gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Performance Watchdog",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added a performance watchdog that monitors GameTests for slow-running scripts"),(0,r.yg)("li",{parentName:"ul"},"Executing a slow-running script will result in content log warnings"),(0,r.yg)("li",{parentName:"ul"},"Additionally, long script hangs (more than 3 seconds in a single tick) will result in an exception"),(0,r.yg)("li",{parentName:"ul"},"Added new properties to\xa0propertiesfor watchdog configuration on Dedicated Server",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"script-watchdog-enable- Enables the watchdog (default = true)"),(0,r.yg)("li",{parentName:"ul"},"script-watchdog-hang-threshold- Sets the watchdog threshold for single tick hangs (default = 3000 ms)"),(0,r.yg)("li",{parentName:"ul"},"script-watchdog-spike-threshold- Sets the watchdog threshold for single tick spikes (default = 100 ms)"),(0,r.yg)("li",{parentName:"ul"},"script-watchdog-slow-threshold- Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)"))),(0,r.yg)("li",{parentName:"ul"},"Updated\xa0mojang-minecraft-uiforms to respond when the client was unable to show a modal form",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0isCanceledfield to\xa0canceled"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0cancelationReasonfield"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0FormCancelationReasonenum"))),(0,r.yg)("li",{parentName:"ul"},"ScoreboardObjectiveDisplayOptions",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added 'ScoreboardObjectiveDisplayOptions' class"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property 'Objective: objective'"),(0,r.yg)("li",{parentName:"ul"},"Added read-only property 'ObjectiveSortOrder: sortOrder'"))),(0,r.yg)("li",{parentName:"ul"},"Scoreboard",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function 'removeObjective(objectiveId: string | Objective): void' - Untracks an objective"),(0,r.yg)("li",{parentName:"ul"},"Added function 'addObjective(objectiveId: string, displayName: string): Objective' - Creates and objective to be tracked, identified with objectiveId and displayed on the screen with displayName"),(0,r.yg)("li",{parentName:"ul"},"Added function 'getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions' - Gets objective and sort order contained in the DisplayObjective slot specified by displaySlotId"),(0,r.yg)("li",{parentName:"ul"},"Added function 'setObjectiveAtDisplaySlot(displaySlotId: string, ScoreboardObjectiveDisplayOptions: scoreboardObjectiveDisplayOptions): Objective' - Sets the objective and sort order of the display slot, as specified by displaySlotId"),(0,r.yg)("li",{parentName:"ul"},"Added function 'clearObjectiveAtDisplaySlot(displaySlotId: string): Objective' - Clear's the DisplayObjective of the objective it is currently displaying"))),(0,r.yg)("li",{parentName:"ul"},"Block",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'Added Block SignComponent that allows for retrieving of the value of sign text - Accessible from\xa0getComponent("sign")on sign blocks'))),(0,r.yg)("li",{parentName:"ul"},"BlockSignComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added read-only property\xa0text: string- Gets the sign text")))))),(0,r.yg)("h2",{id:"general-1"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Limit the number of elements in the\xa0conditionsfield of the\xa0minecraft:part","_","visibility\xa0to 64"),(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0minecraft:aim","_","collisionblock component to\xa0minecraft:selection","_","box\xa0"),(0,r.yg)("li",{parentName:"ul"},"Renamed the 'minecraft:block","_","light","_","emission' component to 'minecraft:light","_","emission' and changed its accepted value type from float to int"),(0,r.yg)("li",{parentName:"ul"},"Renamed 'minecraft:destroy","_","time' to 'minecraft:destructible","_","by","_","mining' and restructured the component to be either defined as a boolean or as an object",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Setting the component to true will give the block the default destroy time and setting it to false will make the block indestructible by mining"),(0,r.yg)("li",{parentName:"ul"},"Setting the component as an object will let users define the number of seconds needed to destroy the block with base equipment"))),(0,r.yg)("li",{parentName:"ul"},"Changed the\xa0minecraft:frictioncomponent to represent friction of block instead of movement")))}d.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),l=a(19365),s=a(8249);const c={},g=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},h="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>d});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),l=a(19365);const s={},c=void 0,g={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},14397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),i=a(21279),l=a(42632);const s={sidebar_position:99999810,title:"1.19.20.20-21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.20.20/21",g={unversionedId:"official_changelog/preview/1.19/20/20-21",id:"official_changelog/preview/1.19/20/20-21",title:"1.19.20.20-21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/20/20-21.mdx",sourceDirName:"official_changelog/preview/1.19/20",slug:"/official_changelog/preview/1.19/20/20-21",permalink:"/docs/official_changelog/preview/1.19/20/20-21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/20/20-21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999810,frontMatter:{sidebar_position:99999810,title:"1.19.20.20-21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.20.22",permalink:"/docs/official_changelog/preview/1.19/20/22"},next:{title:"1.19.10.24",permalink:"/docs/official_changelog/preview/1.19/10/24"}},u={},d=[],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---119202021"},"Minecraft Beta & Preview - 1.19.20.20/21"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);