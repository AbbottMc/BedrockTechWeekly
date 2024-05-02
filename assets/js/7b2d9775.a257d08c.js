"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77812,6957,29933,29401,50067,41009,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>s});var r=n(67294),a=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),d(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),p=()=>{a.p.switchHidden(),t(a.p.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,r.useEffect)((()=>(s(),c(),t(a.p.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class r{constructor(){this.events={},this._maxListeners=r.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}r.defaultMaxListeners=64;const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(d(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(3980);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},79404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/26/gameplay",id:"changelog_source/preview/1.19/60/26/gameplay",title:"gameplay",description:"Posted: 11 January, 2023",source:"@site/docs/changelog_source/preview/1.19/60/26/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/60/26",slug:"/changelog_source/preview/1.19/60/26/gameplay",permalink:"/docs/changelog_source/preview/1.19/60/26/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/26/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Hanging Sign</strong>",id:"hanging-sign",level:3},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Posted:")," 11 January, 2023"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,a.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,a.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,a.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/12150766312205",alt:"A Minecraft screenshot of an end gateway in the end dimension. There is an end city in the background, and several endermen scattered about."})),(0,a.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,a.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,a.kt)("h1",{id:"experimental-features"},(0,a.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,a.kt)("h3",{id:"hanging-sign"},(0,a.kt)("strong",{parentName:"h3"},"Hanging Sign")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Placing a Hanging Sign under an axis-aligned Hanging Sign with V-shaped chains will now result in a Hanging Sign with double chains, if the player is not sneaking")),(0,a.kt)("h1",{id:"features-and-bug-fixes"},(0,a.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug causing players to not wake up when teleported while sleeping (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162346"},"MCPE-162346"),")")),(0,a.kt)("h2",{id:"gameplay"},(0,a.kt)("strong",{parentName:"h2"},"Gameplay")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fixed an issue where the "Inception" achievement would not be awarded')),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The UI no longer flickers on Android when the keyboard pops up (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142356"},"MCPE-142356"),")"),(0,a.kt)("li",{parentName:"ul"},"Highlight selection no longer highlights entire card for transparent objects like saplings"),(0,a.kt)("li",{parentName:"ul"},"V-sync settings are properly configured in options (non-ARM devices) (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110006"},"MCPE-110006"),")"),(0,a.kt)("li",{parentName:"ul"},"Resource packs will now be applied to the worlds after navigating to another screen before creation"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where some resource packs prompted the user with an error after being downloaded")),(0,a.kt)("h2",{id:"performance-and-stability"},(0,a.kt)("strong",{parentName:"h2"},"Performance and Stability")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a potential crash when gliding through an End Gateway"),(0,a.kt)("li",{parentName:"ul"},"The game no longer crashes when killing an entity with invalid conditions, functions, or pools entries in its loot table (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164623"},"MCPE-164623"),")")),(0,a.kt)("h2",{id:"vanilla-parity"},(0,a.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Levers now produce the same sound effect as Stone Buttons (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163335"},"MCPE-163335"),")")),(0,a.kt)("h2",{id:"touch-controls"},(0,a.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the stack splitting feature in non-touch mode")),(0,a.kt)("h2",{id:"accessibility"},(0,a.kt)("strong",{parentName:"h2"},"Accessibility")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The new Create New World screen will now be available for text to speech users. We'd be happy to receive your feedback on it here: ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/cnwnarration"},"https://aka.ms/cnwnarration"))))}p.isMDXComponent=!0},85073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(84999),i=(n(12478),n(47153));const s={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/60/26/tech",id:"changelog_source/preview/1.19/60/26/tech",title:"tech",description:"Graphical",source:"@site/docs/changelog_source/preview/1.19/60/26/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/26",slug:"/changelog_source/preview/1.19/60/26/tech",permalink:"/docs/changelog_source/preview/1.19/60/26/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/26/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix text being slightly off-centered to the left for Furnace, Blast Furnace, and Smoker Screen UIs (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151597"},"MCPE-151597"),")")),(0,a.kt)("h2",{id:"user-interface"},(0,a.kt)("strong",{parentName:"h2"},"User Interface")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource packs will now be applied to the world after navigating to another screen before creation"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where some resource packs prompted an error after being downloaded")),(0,a.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(i.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reverted an experimental change to animation controller command deferral within the \u201cUpcoming Creator Features\u201d experiment")),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Release BlockPlacementFilterComponent outside of experimental toggle in JSON formats 1.19.60 and higher")))}m.isMDXComponent=!0},84999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/26/tech_sapi_exp",id:"changelog_source/preview/1.19/60/26/tech_sapi_exp",title:"tech_sapi_exp",description:"-   RawMessage",source:"@site/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/60/26",slug:"/changelog_source/preview/1.19/60/26/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RawMessage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changed the signature of property\xa0withfrom\xa0",(0,a.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)","[","]","?")," \xa0to\xa0",(0,a.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)?"),"  "))),(0,a.kt)("li",{parentName:"ul"},"EntityHealthComponent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where health could be modified on dead entities (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130687"},"MCPE-130687"),")"))),(0,a.kt)("li",{parentName:"ul"},"Scoreboard",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, ScoreboardIdentity, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective, ScoreboardIdentity)")))),(0,a.kt)("li",{parentName:"ul"},"ScoreboardObjective",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardIdentity, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardIdentity)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"removeParticipant(ScoreboardIdentity)")))),(0,a.kt)("li",{parentName:"ul"},"ScoreboardIdentity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"removeFromObjective(ScoreboardObjective)"))))))}p.isMDXComponent=!0},12478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/60/26/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/60/26/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/60/26",slug:"/changelog_source/preview/1.19/60/26/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905),i=n(31792),s=n(85162),l=n(18386);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],h={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(a.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905),i=n(31792),s=n(85162);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==n.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.kt)(s.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.kt)(a.Fragment,null,n.techSapi)))}h.isMDXComponent=!0},45773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(61499),i=n(79404),s=n(85073);const l={sidebar_position:99999784,title:"1.19.60.26",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.60.26",u={unversionedId:"official_changelog/preview/1.19/60/26",id:"official_changelog/preview/1.19/60/26",title:"1.19.60.26",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/60/26.mdx",sourceDirName:"official_changelog/preview/1.19/60",slug:"/official_changelog/preview/1.19/60/26",permalink:"/docs/official_changelog/preview/1.19/60/26",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/60/26.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999784,frontMatter:{sidebar_position:99999784,title:"1.19.60.26",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.60.27",permalink:"/docs/official_changelog/preview/1.19/60/27"},next:{title:"1.19.60.25",permalink:"/docs/official_changelog/preview/1.19/60/25"}},p={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraft-beta--preview---1196026"},"Minecraft Beta & Preview - 1.19.60.26"),(0,a.kt)(o.default,{gameplayChangelog:(0,a.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,a.kt)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);