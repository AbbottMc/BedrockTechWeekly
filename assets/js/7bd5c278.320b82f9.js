"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72363,29933,30603,78696,24832,22730,52371,64991,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>l});var n=a(67294),r=a(62706);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function l(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,s]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),m(o))}}),[c,p]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),u=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||u()};return(0,n.useEffect)((()=>(l(),c(),t(r.p.isHidden()),()=>{s(),p()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>i});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??u;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var k=a(72389);const f="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},o,{className:(0,i.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},52559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/30/24/gameplay",id:"changelog_source/preview/1.20/30/24/gameplay",title:"gameplay",description:"Posted: 23 August 2023",source:"@site/docs/changelog_source/preview/1.20/30/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/gameplay",permalink:"/docs/changelog_source/preview/1.20/30/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Trade Changes</strong>",id:"experimental-trade-changes",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Education Features</strong>",id:"education-features",level:2},{value:"<strong>User Interface</strong>",id:"user-interface-1",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 23 August 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/18794941329549",alt:"A Minecraft screenshot of a mountain with trees and a cave."})),(0,r.kt)("p",null,"It\u2019s time for a new Minecraft Preview and Beta. Here\u2019s a list of what\u2019s new this week. Please continue to send us your ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and have fun!"),(0,r.kt)("h2",{id:"experimental-trade-changes"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Trade Changes")),(0,r.kt)("p",null,"Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change!\xa0 We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/VillagerTradingFeedback"},"aka.ms/VillagerTradingFeedback"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed feedback button behavior in the new Play Screen not linking to the feedback page"),(0,r.kt)("li",{parentName:"ul"},'New death screen now has partial support (color, static obfuscation) for "Formatting Codes"\xa0')),(0,r.kt)("h2",{id:"audio"},(0,r.kt)("strong",{parentName:"h2"},"Audio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player entities now play the appropriate sounds when entering/exiting water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132511"},"MCPE-132511"),")\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a problem where blocks' rendering was not updating unless the player jumped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173706"},"MCPE-173706"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Tripwire Hooks no longer have delayed deactivation towards the south and west (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174011"},"MCPE-174011"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Concrete Powder blocks are now the correct color for worlds imported from previous versions\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Camera commands that are sent in the same tick are no longer ignored (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173524"},"MCPE-173524"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Nametags are no longer completely invisible while sneaking with the player still visible (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168789"},"MCPE-168789"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following mobs will now set their target on fire if the mob is on fire when attacking: Drowned, Husk, Zombie, and Zombified Villager (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,r.kt)("h2",{id:"education-features"},(0,r.kt)("strong",{parentName:"h2"},"Education Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dolphins now rise properly when Balloons are attached\xa0"),(0,r.kt)("li",{parentName:"ul"},"Camels and Sniffers can now have Balloons attached")),(0,r.kt)("h2",{id:"user-interface-1"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed various pixel scaling issues on the HUD screen"),(0,r.kt)("li",{parentName:"ul"},"The game menu gamepad shortcut on the new death screen now works correctly\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added three new user-friendly disconnection error messages and improved two others")))}u.isMDXComponent=!0},25137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(70444),o=a(1018),l=(a(72806),a(38108),a(47153));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/30/24/tech",id:"changelog_source/preview/1.20/30/24/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/30/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech",permalink:"/docs/changelog_source/preview/1.20/30/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where content errors for items at the latest format version would appear for other items\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Exposed new data parameter "can',"_","spread","_","on","_",'fire" for the "minecraft:behavior.melee',"_",'attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api-1"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview"),(0,r.kt)("li",{parentName:"ul"},"Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview"),(0,r.kt)("li",{parentName:"ul"},"Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview")))}h.isMDXComponent=!0},1018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   World Events",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"World Events",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"BlockBreakAfterEvent")," to ",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"readonly itemStackAfterBreak?: ItemStack")," (undefined if empty hand)"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"readonly itemStackBeforeBreak?: ItemStack")," (undefined if empty hand)"))),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"BlockBreakAfterEventSignal")," to ",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,r.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent")," with the following members",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"itemStack?: ItemStack"),", the item stack in use by the player (undefined if empty hand)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"readonly player: Player"),", the player breaking the block"))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"BlockPlaceAfterEvent")," to ",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"BlockPlaceAfterEventSignal")," to ",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,r.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")," with the following members",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"readonly face: Direction"),", the face the block is being placed on"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"readonly faceLocation: Vector3"),", the location on the face the block was placed on"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"itemStack: ItemStack"),", the item stack being used to place the block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"readonly player: Player"),", the player placing the block"))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEventSignal")),(0,r.kt)("li",{parentName:"ul"},"Modified ",(0,r.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"blockBreak")," to ",(0,r.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"blockPlace")," to ",(0,r.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,r.kt)("li",{parentName:"ul"},"Modified ",(0,r.kt)("em",{parentName:"li"},"WorldBeforeEvents"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"BlockEventOptions")," with the following members",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"blockTypes?: string","[","]"),", names of blocks to be filtered against"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"permutations?: BlockPermutation","[","]"),", specific block permutations to be filtered against"))),(0,r.kt)("li",{parentName:"ul"},"Added class ",(0,r.kt)("em",{parentName:"li"},"EntityLoadAfterEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New field ",(0,r.kt)("em",{parentName:"li"},"entity: Entity")),(0,r.kt)("li",{parentName:"ul"},"Added class ",(0,r.kt)("em",{parentName:"li"},"EntityLoadAfterEventSignal")))),(0,r.kt)("li",{parentName:"ul"},"Class ",(0,r.kt)("em",{parentName:"li"},"EntitySpawnAfterEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("em",{parentName:"li"},"readonly cause: EntityInitializationCause"),"_"))),(0,r.kt)("li",{parentName:"ul"},"Class ",(0,r.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("em",{parentName:"li"},"readonly entityLoad: EntityLoadAfterEventSignal")))),(0,r.kt)("li",{parentName:"ul"},"Added enum ",(0,r.kt)("em",{parentName:"li"},"EntityInitializationCause"))))))}u.isMDXComponent=!0},38108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},70444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed scoreboardIdentity to be valid even after the entity has been killed",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"scoreboardIdentity")," to be valid even after the entity has been killed")))}u.isMDXComponent=!0},72806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),i=a(3905),o=a(31792),l=a(85162),s=a(18386);const c={},p=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],h={toc:d};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{rightElement:(0,i.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,i.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,i.kt)(r.Fragment,null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(67294),i=a(3905),o=a(31792),l=a(85162);const s={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,i.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,i.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,i.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},7450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(61499),o=a(52559),l=a(25137);const s={sidebar_position:99999753,title:"1.20.30.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.30.24",p={unversionedId:"official_changelog/preview/1.20/30/24",id:"official_changelog/preview/1.20/30/24",title:"1.20.30.24",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/30/24.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/24",permalink:"/docs/official_changelog/preview/1.20/30/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999753,frontMatter:{sidebar_position:99999753,title:"1.20.30.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.25",permalink:"/docs/official_changelog/preview/1.20/30/25"},next:{title:"1.20.30.22",permalink:"/docs/official_changelog/preview/1.20/30/22"}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1203024"},"Minecraft Beta & Preview - 1.20.30.24"),(0,r.kt)(i.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);