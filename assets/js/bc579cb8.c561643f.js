"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59659,22095,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},18386:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(67294),r=a(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),p(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),m=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||m()};return(0,n.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:m},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,a)=>{a.d(t,{M:()=>o});class n{constructor(){this.events={},this._maxListeners=n.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}n.defaultMaxListeners=64;const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62706:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},78548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.9/0/2/gameplay",id:"changelog_source/preview/1.9/0/2/gameplay",title:"gameplay",description:"28 November 2018",source:"@site/docs/changelog_source/preview/1.9/0/2/gameplay.mdx",sourceDirName:"changelog_source/preview/1.9/0/2",slug:"/changelog_source/preview/1.9/0/2/gameplay",permalink:"/docs/changelog_source/preview/1.9/0/2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.9/0/2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>28 November 2018</strong>",id:"28-november-2018",level:2},{value:"<strong>Experimental Gameplay:</strong> (Only available when Experimental Gameplay is enabled in world settings)",id:"experimental-gameplay-only-available-when-experimental-gameplay-is-enabled-in-world-settings",level:3},{value:"<strong>New Features:</strong>",id:"new-features",level:3},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"28-november-2018"},(0,r.kt)("strong",{parentName:"h2"},"28 November 2018")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.kt)("h3",{id:"experimental-gameplay-only-available-when-experimental-gameplay-is-enabled-in-world-settings"},(0,r.kt)("strong",{parentName:"h3"},"Experimental Gameplay:")," (Only available when Experimental Gameplay is enabled in world settings)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added new blocks:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cartography Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fletching Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Grindstone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Barrel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smithing Table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smoker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blast Furnace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lantern"))),(0,r.kt)("h3",{id:"new-features"},(0,r.kt)("strong",{parentName:"h3"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cauldrons can now be used to hold Lava\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added tags - custom tags can be applied to entities and players to create more flexible selector groupings\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added "has',"_",'tag" filter in components to allow checks to see if an entity has a specified tag\xa0'),(0,r.kt)("li",{parentName:"ul"},"Autocomplete can be used for Tags\xa0"),(0,r.kt)("li",{parentName:"ul"},"The number of commands run through functions can be limited with a new gamerule (default 10k) to limit performance issues\xa0"),(0,r.kt)("li",{parentName:"ul"},"Functions can now be run every tick creating an update loop\xa0"),(0,r.kt)("li",{parentName:"ul"},"New feedback button in pause menu - shows links to the Minecraft feedback site, MoJira bug tracker, and Mojang support\xa0"),(0,r.kt)("li",{parentName:"ul"},"How to Play button is now visible from the in-game settings menu\xa0")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed default sign text colour back to black\xa0"),(0,r.kt)("li",{parentName:"ul"},"Sign variants are now grouped in their own inventory category\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can now join and play games with a minor version mismatch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38945"},"MCPE-38945)"))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shulker boxes in item frames no longer cause the game to crash\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with wrong items showing in partnered server stores\xa0"),(0,r.kt)("li",{parentName:"ul"},"Corrected the head size of baby zombies\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when pistons pushed blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could happen when suspending and resuming the game"),(0,r.kt)("li",{parentName:"ul"},"Improved the error messages that previously stated the player didn't have a licence for the game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the positioning of the snow golem's arms\xa0"),(0,r.kt)("li",{parentName:"ul"},"Pandas now stop eating when set on fire\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when resuming the game on Android\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed mouse selection issues when clicking items or text boxes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39283"},"MCPE-39283"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with end gateway portals which could generate too closely, preventing travel back to the main island"),(0,r.kt)("li",{parentName:"ul"},"Slimes will once again spawn in slime chunks as expected (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38388"},"MCPE-38388"),")"),(0,r.kt)("li",{parentName:"ul"},"Endermen now make the scream sound when angered (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/projects/MCPE/issues/MCPE-26719?filter=allopenissues"},"MCPE-26719"),")"),(0,r.kt)("li",{parentName:"ul"},"Phantoms now drop membranes correctly if killed with a fire aspect sword (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38493"},"MCPE-38493"),")"),(0,r.kt)("li",{parentName:"ul"},"Auto-jump now works when trying to walk through scaffolding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38342"},"MCPE-38342"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding can now be placed on glass\xa0"),(0,r.kt)("li",{parentName:"ul"},"More blocks can be placed on scaffolding including mob heads and flower pots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38942"},"MCPE-38942"),")"),(0,r.kt)("li",{parentName:"ul"},"Horizontal flowing water will no longer turn into bubble columns over soul sand\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when removing Gear VR headset during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occasionally happens when resuming the game"),(0,r.kt)("li",{parentName:"ul"},"Fixed leg geometry for one-legged characters in various skin packs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when quickly signing in and out of Xbox Live\xa0"),(0,r.kt)("li",{parentName:"ul"},"Dragons breath can now be quickly collected reliably in multiplayer games (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37815"},"MCPE-37815"),")"),(0,r.kt)("li",{parentName:"ul"},"Pandas now panic when set on fire\xa0"),(0,r.kt)("li",{parentName:"ul"},"Animation and sounds can now be heard and seen when pillagers charge their crossbows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39095"},"MCPE-39095"),")"),(0,r.kt)("li",{parentName:"ul"},"Cobblestone stairs are generated in Jungle Temples and Villages instead of stone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39102"},"MCPE-39102"),")"),(0,r.kt)("li",{parentName:"ul"},"Lit furnaces now show correctly when copied using Ctrl + Pickblock\xa0"),(0,r.kt)("li",{parentName:"ul"},"Custom modal forms now support two lines again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38705"},"MCPE-38705"),")"),(0,r.kt)("li",{parentName:"ul"},'Special characters now display correctly when using the "/say" command'),(0,r.kt)("li",{parentName:"ul"},"Touch controls now work correctly with scaffolding when using the 'swap jump and sneak' setting (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38063"},"MCPE-38063"),")"),(0,r.kt)("li",{parentName:"ul"},"Particles produced by witches are now purple rather than black (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-30234"},"MCPE-30234"),")"),(0,r.kt)("li",{parentName:"ul"},'Slabs are no longer labelled "half slabs" in the creative inventory (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32542"},"MCPE-32542"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding textures no longer z-fight with leaves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38375"},"MCPE-38375"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs in boats no longer shake when trying to turn to look at the player\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bubble columns no longer extend up above the surface of the water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39085"},"MCPE-39085"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with items being repeatedly dropped from the hotbar on touchscreen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-15010"},"MCPE-15010"),")"),(0,r.kt)("li",{parentName:"ul"},"Breaking smooth stone no longer drops cobblestone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39164"},"MCPE-39164"),")"),(0,r.kt)("li",{parentName:"ul"},"Doors no longer drop as two items when broken (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39165"},"MCPE-39165"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the scaling of the Mojang splash screen when resuming a split screen game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Ghast projectile firing animation"),(0,r.kt)("li",{parentName:"ul"},"Commands from command blocks no longer extend to other dimensions (This fix won't affect existing command blocks) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33892"},"MCPE-33892"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the game could become unresponsive after being disconnected from a multiplayer game"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash issue on Xbox One\xa0"),(0,r.kt)("li",{parentName:"ul"},"Worlds no longer become stuck in offline mode after toggling the multiplayer option (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39194"},"MCPE-39194"),")"),(0,r.kt)("li",{parentName:"ul"},"Slabs can be correctly placed on top of each other again after reloading the world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39067"},"MCPE-39067"),")"),(0,r.kt)("li",{parentName:"ul"},"Changing game mode and reloading a world no longer removes resource packs"),(0,r.kt)("li",{parentName:"ul"},"Fixed the arm position for mobs in the Mutant Battle Arena marketplace pack")))}m.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(31792),i=a(85162),s=a(18386);const c={},u=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},52457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(78548);const i={sidebar_position:99999976,title:"1.9.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.9"]},s="Minecraft Beta - 1.9.0.2 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.9/0/2",id:"official_changelog/preview/1.9/0/2",title:"1.9.0.2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.9/0/2.mdx",sourceDirName:"official_changelog/preview/1.9/0",slug:"/official_changelog/preview/1.9/0/2",permalink:"/docs/official_changelog/preview/1.9/0/2",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.9/0/2.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.9",permalink:"/docs/tags/1-9"}],version:"current",sidebarPosition:99999976,frontMatter:{sidebar_position:99999976,title:"1.9.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.9"]},sidebar:"changelogSidebar",previous:{title:"1.9.0.3",permalink:"/docs/official_changelog/preview/1.9/0/3"},next:{title:"1.9.0.0",permalink:"/docs/official_changelog/preview/1.9/0/"}},u={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1902-xbox-onewindows-10android"},"Minecraft Beta - 1.9.0.2 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);