"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30521,81196,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>i});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),m(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,a.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var g=n(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},32303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/56/gameplay",id:"changelog_source/preview/1.16/100/56/gameplay",title:"gameplay",description:"Posted: 17 September 2020",source:"@site/docs/changelog_source/preview/1.16/100/56/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/56",slug:"/changelog_source/preview/1.16/100/56/gameplay",permalink:"/docs/changelog_source/preview/1.16/100/56/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/56/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Performance and Stability</strong>\xa0",id:"performance-and-stability",level:2},{value:"<strong>Achievement Screen</strong>\xa0",id:"achievement-screen",level:2},{value:"<strong>General</strong>\xa0",id:"general",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Record Item Component</strong>\xa0",id:"record-item-component",level:2},{value:"<strong>Component Variables</strong>\xa0",id:"component-variables",level:2},{value:"<strong>Examples</strong>\xa0",id:"examples",level:2},{value:"<strong>Item Names</strong>\xa0",id:"item-names",level:2},{value:"<strong>Add-Ons and Script Engine</strong>\xa0",id:"add-ons-and-script-engine",level:2},{value:"<strong>DataDrivenBlockEvents</strong>\xa0",id:"datadrivenblockevents",level:2},{value:"<strong>DataDrivenBlockModels</strong>\xa0",id:"datadrivenblockmodels",level:2},{value:"<strong>DataDrivenBlockModels</strong>\xa0<strong>-</strong>\xa0<strong>SmoothLighting</strong>\xa0",id:"datadrivenblockmodels-smoothlighting",level:2},{value:"<strong>Schema</strong>\xa0",id:"schema",level:2},{value:"<strong>ExecuteCommand</strong>\xa0",id:"executecommand",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>RunCommand</strong>\xa0",id:"runcommand",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 17 September 2020"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,"In this week's beta we've fixed several important issues, and we've also included some technical changes that content creators will find useful!\xa0 Please remember to keep sending us your bug reports at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE"},"bugs.mojang.com"),"!"),(0,r.kt)("h1",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Bug Fixes")),(0,r.kt)("h2",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance and Stability"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0several crashes that could occur during gameplay \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on startup on Xbox One \xa0")),(0,r.kt)("h2",{id:"achievement-screen"},(0,r.kt)("strong",{parentName:"h2"},"Achievement Screen"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time played now displays correctly on the achievement screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66331"},"MCPE-66331"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Allow navigating the focus to the summary by pressing left\xa0on the gamepad when narration is enabled \xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated\xa0input legends for achievement list and achievement reward \xa0"),(0,r.kt)("li",{parentName:"ul"},'"Screen"\xa0is now narrated\xa0when opening an achievement detail screen \xa0'),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0how we calculate how many rewards a player has \xa0"),(0,r.kt)("li",{parentName:"ul"},"Show the achievements, even after a timeout, when the data has been fetched \xa0"),(0,r.kt)("li",{parentName:"ul"},"Don't play click sounds when using a mouse button that is not primary \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fix issue where the scrollbar would appear even when there is no content to scroll \xa0"),(0,r.kt)("li",{parentName:"ul"},"Added acceleration to focus navigation while using a gamepad \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed focus persistency while switching from the All tab \xa0"),(0,r.kt)("li",{parentName:"ul"},'Fixed support for the mouse "back button" to go back from the achievements screen \xa0'),(0,r.kt)("li",{parentName:"ul"},"Fixed support for the Escape button to go back from the achievements screen \xa0"),(0,r.kt)("li",{parentName:"ul"},'Fixed an issue where the Input Legend for a Tab would be "open" even when the Tab was already selected \xa0')),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0text-to-speech\xa0not reading\xa0the messages on\xa0various screens\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed maps not being\xa0in the list of items when using the /clear command \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed sign-in button becoming unresponsive after backing out of sign-in prompt screen\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cobblestone is now shown\xa0as\xa0the\xa0default ingredient for stone tools (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71843"},"MCPE-71843"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Reduced and reintroduced linear attenuation for raid horn sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85593"},"MCPE-85593"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"The\xa0correct sounds\xa0are now played\xa0for breaking and placing item frames (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98901"},"MCPE-98901"),") \xa0")),(0,r.kt)("h1",{id:"technicalchanges"},(0,r.kt)("strong",{parentName:"h1"},"Technical"),"\xa0",(0,r.kt)("strong",{parentName:"h1"},"Changes"),"\xa0"),(0,r.kt)("h2",{id:"record-item-component"},(0,r.kt)("strong",{parentName:"h2"},"Record Item Component"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items can now be made records to play music in Jukeboxes \xa0")),(0,r.kt)("h2",{id:"component-variables"},(0,r.kt)("strong",{parentName:"h2"},"Component Variables"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sound","_",'event\u202fA string value\xa0corresponding\xa0to a sound event in the game code. This string must be one these for music to play: "13", "cat", "blocks", "chirp", "far", "mall", "mellohi", "stal", "strad", "ward", "11", "wait", "pigstep"\xa0'),(0,r.kt)("li",{parentName:"ul"},"duration\u202fA float value that determines how long particles are spawned from the\xa0JukeBox\xa0Block, should approximately match length of sound event\xa0"),(0,r.kt)("li",{parentName:"ul"},"comparator","_","signal\u202fAn\xa0integer value that represents the\xa0strength\xa0of the\xa0analogue\xa0signal, used by the Comparator Block\xa0")),(0,r.kt)("h2",{id:"examples"},(0,r.kt)("strong",{parentName:"h2"},"Examples"),"\xa0"),(0,r.kt)("p",null,'When added to\xa0JukeBox\xa0Block this will play the sound clip of "record.chirp"\xa0'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Example 1: "minecraft:record": { "sound',"_",'event": "chirp", "duration": 185.0, "comparator',"_",'signal": 4 }\xa0')),(0,r.kt)("h2",{id:"item-names"},(0,r.kt)("strong",{parentName:"h2"},"Item Names"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed items to be consistent with the list of Java items found\u202f",(0,r.kt)("a",{parentName:"li",href:"https://minecraft.gamepedia.com/Java_Edition_data_value#Items"},"here"),"\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new\xa0BlockRaycastComponent\xa0that can override the AABB used for outlines and\xa0raycasting\xa0 )\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new\xa0BlockCollisionComponent\xa0that can override the AABB used for entity collision )\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new\xa0BlockPropertyComponent\xa0that can replace the\xa0blockProperties\xa0: Unwalkable,\xa0Infiniburn,\xa0PreventsJumping, Immovable,\xa0BreakOnPush,\xa0OnlyPistonPush\xa0and\xa0BreaksWhenHitByArrow\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new\xa0BlockQueuedTickingComponent\xa0that triggers events for a block on a range of time set by the creator \xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new\xa0BlockRandomTickingComponent\xa0that triggers events for a block randomly \xa0"),(0,r.kt)("li",{parentName:"ul"},"Added a Rotation Component that allows a block to rotate The component only allows axis-aligned rotations \xa0"),(0,r.kt)("li",{parentName:"ul"},"Adds the base implementation of the\xa0CraftingTableComponent\xa0\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows the creation of custom crafting\xa0tables\xa0"),(0,r.kt)("li",{parentName:"ul"},"Currently only supports 3x3\xa0grids\xa0")))),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine"),"\xa0"),(0,r.kt)("p",null,"Added 'minecraft:placement","_","filter' component which allows you to set conditions for where this block can be placed This component will also kick in whenever\xa0neighboring\xa0blocks change and pop it's loot if it is no longer in a valid location\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added serialization to Block Descriptor \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added static\xa0anyMatch\xa0functions to\xa0BlockDescriptor\xa0to compare a list of\xa0BlockDescriptors\xa0against: Block","*",",\xa0BlockLegacy, or\xa0BlockDescriptor \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added a function to compare two\xa0BlockDescriptors.\xa0This covers: matching blocks, any tag of either descriptor match, block states with matching permutations \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed the\xa0BlockDescriptor\xa0BlockLegacy\xa0member variable to a Block","*"," so we can set the block states during deferred block resolution and get the block with the states set \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed all the existing Block","*"," json parsing \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added unit tests to verify parsing and serializing block descriptors \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added unit tests to verify comparing a\xa0BlockDescriptors\xa0against each other \xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added unit tests to verify getting a block from\xa0BlockDescriptor\xa0with the states set \xa0"))),(0,r.kt)("h2",{id:"datadrivenblockevents"},(0,r.kt)("strong",{parentName:"h2"},"DataDrivenBlockEvents"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adds support for parsing and performing the following event responses:\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added the\xa0set","_","block","_","at","_","pos\xa0event response \xa0"),(0,r.kt)("li",{parentName:"ul"},"Spawn Loot \xa0"),(0,r.kt)("li",{parentName:"ul"},"Set Block \xa0"))),(0,r.kt)("li",{parentName:"ul"},"Added support for the\xa0on","_","interact\xa0trigger component \xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added support for the\xa0on","_","player","_","placing\xa0trigger component \xa0"),(0,r.kt)("li",{parentName:"ul"},"Also added\xa0MoLang\xa0queries for\xa0cardinal","_","block","_","face","_","placed","_","on\xa0and\xa0cardinal","_","player","_","facing\xa0for getting placement context\xa0")))),(0,r.kt)("h2",{id:"datadrivenblockmodels"},(0,r.kt)("strong",{parentName:"h2"},"DataDrivenBlockModels"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the first pass of the new data driven block tessellation\xa0pipeline\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added the "minecraft:geometry" component to allow using a block model for rendering \xa0'),(0,r.kt)("li",{parentName:"ul"},'Added the "minecraft:unit',"_",'cube" component to allow using a default unit cube for rendering. Unit cubes get some extra effects like ambient occlusion and face removal \xa0'),(0,r.kt)("li",{parentName:"ul"},'Added the "minecraft:material',"_",'instances" component to allow mapping faces and\xa0material',"_","instances\xa0in a geometry file to an actual material \xa0")),(0,r.kt)("h2",{id:"datadrivenblockmodels-smoothlighting"},(0,r.kt)("strong",{parentName:"h2"},"DataDrivenBlockModels"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"-"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"SmoothLighting"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed smooth lighting and ambient occlusion with new data driven blocks \xa0")),(0,r.kt)("h2",{id:"schema"},(0,r.kt)("strong",{parentName:"h2"},"Schema"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Split\u202fallowed","_","blocks\u202finto\u202fuse","_","on\u202fand\u202fdispense","_","on\xa0"),(0,r.kt)("li",{parentName:"ul"},"use","_","on\u202fspecifies what blocks an entity placer item is allowed to be used on, omit to allow all\xa0blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"dispense","_","on\u202fspecifies what blocks an entity placer item is allowed to be dispensed on, omit to allow all\xa0blocks\xa0")),(0,r.kt)("h2",{id:"executecommand"},(0,r.kt)("strong",{parentName:"h2"},"ExecuteCommand"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added support to item json events for the\xa0execute","_","command\xa0keyword. It supports both a string and string array format, where the string is the command intended to run. Commands are compiled at load time and executed after add/remove","_","mob","_","effect\xa0and teleport actions, but before other triggers for events. Commands will be segmented in sequence and randomize nodes as expected. \xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Created\xa0RepairableItemComponent\xa0that data-drives how an item is repaired in game. Data is structured as follows in the item JSON file:\xa0")),(0,r.kt)("p",null,"{\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"format',"_",'version": "1.16.100",\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"minecraft:item": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n","...\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"minecraft:repairable": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"repair',"_",'items": ',"[","\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","{\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"items": ',"[",' "minecraft:item" ',"]",",\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"repair',"_",'amount": "query.max',"_","damage\xa0","*",' 0.25"\xa0',(0,r.kt)("br",{parentName:"p"}),"\n","},\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","{\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"items": ',"[",' "minecraft:item", "minecraft:item2" ',"]",",\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"repair',"_",'amount": "context.other',"-",">","query.remaining","_","health\xa0+ 0.05 ","*","\xa0context.other","-",">","query.max","_",'damage"\xa0',(0,r.kt)("br",{parentName:"p"}),"\n","},\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","{\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"items": ',"[",' "minecraft:item3" ',"]",",\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"on',"_",'repaired": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"event": "repaired",\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"target": "self"\xa0',(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","","]","\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","},\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",'"events": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"repaired": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"transform',"_",'item": {\xa0',(0,r.kt)("br",{parentName:"p"}),"\n",'"transform": "item',"_",'name"\xa0',(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","}\xa0"),(0,r.kt)("h2",{id:"runcommand"},(0,r.kt)("strong",{parentName:"h2"},"RunCommand"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added support to entity json events for the\xa0run","_","command\xa0keyword alongside the current add and remove keywords. It supports both a string and string array format, where the string is the command intended to run. Commands will be run after component groups have been added and\xa0removed, and\xa0will be segmented in sequence and randomize nodes as expected.\xa0")),(0,r.kt)("p",null,"Updated the following components to parse and use\xa0BlockDescriptor\xa0instead of Block","*"," \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BlockBreakSensorComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"BlockListEventMap\xa0"),(0,r.kt)("li",{parentName:"ul"},"BreathableComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"BreedableComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"BuoyancyComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"EntityPlacerItemComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"PreferredPathComponent\xa0"),(0,r.kt)("li",{parentName:"ul"},"SeedItemComponentLegacy\xa0")),(0,r.kt)("p",null,"Updated the following features to parse and use\xa0BlockDescriptor\xa0instead of Block","*"," \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NoSurfaceOreFeature\xa0"),(0,r.kt)("li",{parentName:"ul"},"OreFeature\xa0"),(0,r.kt)("li",{parentName:"ul"},"SingleBlockFeature\xa0")),(0,r.kt)("p",null,"Updated the following goal definitions to parse and use\xa0BlockDescriptor\xa0instead of Block","*"," \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GoalDefinition\xa0"),(0,r.kt)("li",{parentName:"ul"},"RaidGardenGoal\xa0"),(0,r.kt)("li",{parentName:"ul"},"VanillaGoalDefinition\xa0")),(0,r.kt)("p",null,"Updated the following surfaces code to parse and use\xa0BlockDescriptor\xa0instead of Block","*"," \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MesaSurfaceAttributes\xa0"),(0,r.kt)("li",{parentName:"ul"},"SurfaceMaterialAdjustmentAttributes\xa0"),(0,r.kt)("li",{parentName:"ul"},"SurfaceMaterialAttributes\xa0")),(0,r.kt)("p",null,"Updated the following tests to reflect the changes from updating code to use\xa0BlockDescriptors \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BuoyancyComponentServerTests\xa0"),(0,r.kt)("li",{parentName:"ul"},"FeatureHelperTests\xa0"),(0,r.kt)("li",{parentName:"ul"},"NoSurfaceOreFeatureTests\xa0"),(0,r.kt)("li",{parentName:"ul"},"OreFeatureTests\xa0"),(0,r.kt)("li",{parentName:"ul"},"SingleBlockFeatureTests\xa0")),(0,r.kt)("p",null,"Updated the following trees to parse and use\xa0BlockDescriptor\xa0instead of Block","*"," \xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AcaciaTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"AcaciaTreeTrunk\xa0"),(0,r.kt)("li",{parentName:"ul"},"FallenTreeTrunk\xa0"),(0,r.kt)("li",{parentName:"ul"},"FancyTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"FancyTreeTrunk\xa0"),(0,r.kt)("li",{parentName:"ul"},"MegaPineTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"MegaTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"MegaTreeTrunk\xa0"),(0,r.kt)("li",{parentName:"ul"},"PineTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"RoofedTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"SimpleTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"SimpleTreeTrunk\xa0"),(0,r.kt)("li",{parentName:"ul"},"SpruceTreeCanopy\xa0"),(0,r.kt)("li",{parentName:"ul"},"TreeHelper")))}p.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905),l=n(31792),i=n(85162),s=n(18386);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],h={toc:d};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}k.isMDXComponent=!0},26466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),l=n(32303);const i={sidebar_position:99999899,title:"1.16.100.56",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},s="Minecraft Beta - 1.16.100.56 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/56",id:"official_changelog/preview/1.16/100/56",title:"1.16.100.56",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/100/56.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/56",permalink:"/docs/official_changelog/preview/1.16/100/56",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/56.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999899,frontMatter:{sidebar_position:99999899,title:"1.16.100.56",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.57",permalink:"/docs/official_changelog/preview/1.16/100/57"},next:{title:"1.16.100.55",permalink:"/docs/official_changelog/preview/1.16/100/55"}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11610056-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.56 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);