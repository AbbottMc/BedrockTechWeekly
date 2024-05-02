"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60345,29933,20001,28770,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(67294),r=a(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),p(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),d=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||d()};return(0,n.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>o});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},7282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/10/24/gameplay",id:"changelog_source/preview/1.18/10/24/gameplay",title:"gameplay",description:"Posted: 15 December 2021",source:"@site/docs/changelog_source/preview/1.18/10/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/10/24",slug:"/changelog_source/preview/1.18/10/24/gameplay",permalink:"/docs/changelog_source/preview/1.18/10/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Villagers</strong>",id:"villagers",level:3},{value:"<strong>Rendering</strong>",id:"rendering",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Education Edition Features</strong>",id:"education-edition-features",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 15 December 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work-in-progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox, Windows, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4416586449165/frog1_16x9.jpg",alt:"frog1_16x9.jpg"})),(0,r.kt)("p",null,"Welcome to a very special Bedrock Beta! I didn\u2019t want to get my hops up and to be honest I was a tad worried that it was just a fever dream. But what if I toad you that this week we\u2019re releasing a new mob into the Overworld\u2019s ecosystem. I don\u2019t mean to be amphibious, er\u2026 I mean ambiguous. Sorry, I am practically jumping out of my skin because we have a very exciting surprise for you."),(0,r.kt)("p",null,"This week\u2019s Bedrock Beta introduces\u2026"),(0,r.kt)("p",null,"Drumroll\u2026"),(0,r.kt)("p",null,"Wait for it\u2026"),(0,r.kt)("p",null,"Logs to the game!"),(0,r.kt)("p",null,"Isn\u2019t that exciting? Finally! Wait. What? We already have logs in the game? But why is everyone at the studio so excited? Oooooh, because we\u2019ve added\xa0",(0,r.kt)("em",{parentName:"p"},"frogs"),"\xa0to the Beta! I hope you enjoy them more than you did these puns, to try out these new features all you have to do is enable The Wild Update Experimental Toggle! Please leave us any specific feedback or suggestions in the thread at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCFrogFeedback"},"aka.ms/MCFrogFeedback"),", and as always please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"known-issues"},(0,r.kt)("strong",{parentName:"h1"},"Known Issues")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The game may crash when opening Settings on some Windows devices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Workaround: We have verified on multiple devices that enabling Full Language Packages, including the text-to-speech component, can resolve the crash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Steps on how to Install the Full Language Package")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Launch Windows device"),(0,r.kt)("li",{parentName:"ol"},"Sign in"),(0,r.kt)("li",{parentName:"ol"},"Open Start Menu ",">"," Settings"),(0,r.kt)("li",{parentName:"ol"},"Select \u201cTime & Language\u201d"),(0,r.kt)("li",{parentName:"ol"},"Select \u201cLanguage\u201d"),(0,r.kt)("li",{parentName:"ol"},"Select \u201cAdd a language\u201d"),(0,r.kt)("li",{parentName:"ol"},"Select your language of choice to install"),(0,r.kt)("li",{parentName:"ol"},"Ensure that the \u201cText-to-speech\u201d component is selected"),(0,r.kt)("li",{parentName:"ol"},"Select \u201cInstall\u201d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please be sure to also run Windows Update to install the latest updates for your Windows 10/11 device, as this has helped with resolving the crash"))))),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frogs will spawn in Swamp biomes"),(0,r.kt)("li",{parentName:"ul"},"Frogs can croak, jump, swim, and walk on land"),(0,r.kt)("li",{parentName:"ul"},"Frogs can eat small Slimes, causing a Slime Ball to drop"),(0,r.kt)("li",{parentName:"ul"},"Frogs can be tempted and bred using Seagrass, but this is just a placeholder food for now"),(0,r.kt)("li",{parentName:"ul"},"Frogs lay eggs after mating"),(0,r.kt)("li",{parentName:"ul"},"Frog eggs that hatch spawn Tadpoles"),(0,r.kt)("li",{parentName:"ul"},"Tadpoles can swim in water"),(0,r.kt)("li",{parentName:"ul"},'Tadpoles "jump around" like fishes when on land, and eventually die'),(0,r.kt)("li",{parentName:"ul"},"Tadpoles that grow up will turn into a Frog"),(0,r.kt)("li",{parentName:"ul"},"Tadpoles grow into a different type of Frog based on the biome they are born in"),(0,r.kt)("li",{parentName:"ul"},"Tadpoles can be caught in a Bucket")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players no longer gain a particle effect when obtaining Bad Omen from Pillager Captains"),(0,r.kt)("li",{parentName:"ul"},"Sleeping in a Bed will once again trigger the fade to black screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148504"},"MCPE-148504"),")"),(0,r.kt)("li",{parentName:"ul"},"The camera now will interpolate its position again when the player sneaks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148482"},"MCPE-148482"),")")),(0,r.kt)("h3",{id:"villagers"},(0,r.kt)("strong",{parentName:"h3"},"Villagers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Villagers now make a "No" sound when attempting to make a trade when they are out of stock (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-113788"},"MCPE-113788)"))),(0,r.kt)("h2",{id:"rendering"},(0,r.kt)("strong",{parentName:"h2"},"Rendering")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the Ender Dragon would become invisible when flying towards the portal fountain after dying (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-149119"},"MCPE-149119"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when the player is near a village"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when shift-clicking Armor in the Crafting Table while using Pocket UI (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-144863"},"MCPE-144863"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added appropriate padding to "Item Text Name" box UI for when players have Armor equipped in Survival mode and select items via the hotbar (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-143928"},"MCPE-143928"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where text shadows had a reduced offset when text message contains button glyph")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the Globe Banner Pattern on Bedrock")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused the '/kill' command to not kill entities with the Absorption effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142763"},"MCPE-142763"),")"),(0,r.kt)("li",{parentName:"ul"},"When using '/replaceitem' on a Donkey's or Mule's Chest, the item will now go to the correct slot")),(0,r.kt)("h2",{id:"education-edition-features"},(0,r.kt)("strong",{parentName:"h2"},"Education Edition Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axolotls, Bees, Boats, Cats, Dolphins, Glow Squids, Goats, Hoglins, Iron Golems, Ocelots, Pandas, Parrots, Pigs, Polar Bears, Squids, Striders, Wolves, and Zoglins can now have Balloons attached to them. Wow, that\u2019s a lot of mobs!")))}d.isMDXComponent=!0},51955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/10/24/tech",id:"changelog_source/preview/1.18/10/24/tech",title:"tech",description:"Android",source:"@site/docs/changelog_source/preview/1.18/10/24/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/24",slug:"/changelog_source/preview/1.18/10/24/tech",permalink:"/docs/changelog_source/preview/1.18/10/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/24/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Android</strong>",id:"android",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data-Driven Mobs</strong>",id:"data-driven-mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>RandomStrollGoal</strong>",id:"randomstrollgoal",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"android"},(0,r.kt)("strong",{parentName:"h2"},"Android")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target API has been updated to API 30 for Google Play Store")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when you nest schedule commands in functions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-144730"},"MCPE-144730"),")")),(0,r.kt)("h2",{id:"data-driven-mobs"},(0,r.kt)("strong",{parentName:"h2"},"Data-Driven Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The random chance for a wild adult Ocelot to spawn with two children is now handled by components added in the entity JSON definition")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access of missing public variables on other entities will return 0.0 and not cause an error"),(0,r.kt)("li",{parentName:"ul"},"Fix loading of public variables containing capital letters to not cause an error"),(0,r.kt)("li",{parentName:"ul"},'Added "slot.equippable" as a slot option for WearableItemComponent and Molang')),(0,r.kt)("h2",{id:"randomstrollgoal"},(0,r.kt)("strong",{parentName:"h2"},"RandomStrollGoal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved performance in RandomStrollGoal")),(0,r.kt)("h2",{id:"gametest-framework-experimental"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.kt)("p",null,"Dimension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated\xa0Dimension:spawnEntityto take a\xa0Location\xa0or a\xa0BlockLocation")),(0,r.kt)("p",null,"BlockBreakEvent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added property\xa0brokenBlockPermutation\xa0to indicate which kind of block was broken")))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(31792),i=a(85162),s=a(18386);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],h={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(31792),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},37016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(7282),i=a(51955);const s={sidebar_position:99999837,title:"1.18.10.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},c="Minecraft Beta - 1.18.10.24 (Xbox / Windows / Android)",u={unversionedId:"official_changelog/preview/1.18/10/24",id:"official_changelog/preview/1.18/10/24",title:"1.18.10.24",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.18/10/24.mdx",sourceDirName:"official_changelog/preview/1.18/10",slug:"/official_changelog/preview/1.18/10/24",permalink:"/docs/official_changelog/preview/1.18/10/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/10/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.18",permalink:"/docs/tags/1-18"}],version:"current",sidebarPosition:99999837,frontMatter:{sidebar_position:99999837,title:"1.18.10.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.10.26",permalink:"/docs/official_changelog/preview/1.18/10/26"},next:{title:"1.18.10.22",permalink:"/docs/official_changelog/preview/1.18/10/22"}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1181024-xbox--windows--android"},"Minecraft Beta - 1.18.10.24 (Xbox / Windows / Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);