"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69931,30794,21032,77736,24669,94629,26546,48250,66898],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(96540),n=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:r},t)}},8249:(e,t,r)=>{r.d(t,{p:()=>l});var a=r(96540),n=r(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,a.useState)(),r=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),d(i))}}),[c,p]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),u=()=>{n.k.switchHidden(),t(n.k.isHidden())},d=e=>{e.length!==r.length||e.some((e=>!r.includes(e)))||u()};return(0,a.useEffect)((()=>(l(),c(),t(n.k.isHidden()),()=>{s(),p()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,r)=>{r.d(t,{v:()=>o});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var r=this;const a=function(){t(...arguments),r.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];const n=this.events[e];return n&&n.forEach((e=>{e(...r)})),this}off(e,t){const r=this.events[e];if(!r)return this;if(!t)return delete this.events[e],this;const a=r.indexOf(t);return-1!==a&&r.splice(a,1),0===r.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var r=this;const a=function(){t(...arguments),r.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const r=this.events[e];return r.splice(r.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const n=new a;function o(e){return[()=>{e.listener&&n.on(e.name,e.listener)},()=>{e.listener&&n.off(e.name,e.listener)},function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];n.emit(e.name,...r)}]}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var a=r(58168),n=r(96540),o=r(20053),i=r(23104),l=r(56347),s=r(57485),c=r(31682),p=r(89466);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:r,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??u;return g({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c,rightElement:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:g},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),r??t)})),p?n.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},n.createElement(v,(0,a.A)({},e,t)),n.createElement(b,(0,a.A)({},e,t)))}function _(e){const t=(0,f.A)();return n.createElement(w,(0,a.A)({key:String(t)},e))}},8045:(e,t,r)=>{r.d(t,{k:()=>n});var a=r(58409);class n{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},10638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/23/gameplay",id:"changelog_source/preview/1.20/50/23/gameplay",title:"gameplay",description:"Posted: 2 November 2023",source:"@site/docs/changelog_source/preview/1.20/50/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/gameplay",permalink:"/docs/changelog_source/preview/1.20/50/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"Chiseled Copper",id:"chiseled-copper",level:2},{value:"Crafter",id:"crafter",level:2},{value:"Tuff Blocks",id:"tuff-blocks",level:2},{value:"Waxed Chiseled Copper",id:"waxed-chiseled-copper",level:2},{value:"Waxed Copper Doors",id:"waxed-copper-doors",level:2},{value:"Waxed Copper Grates",id:"waxed-copper-grates",level:2},{value:"Waxed Copper Trapdoors",id:"waxed-copper-trapdoors",level:2},{value:"Textures",id:"textures",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Crafting and Inventory Screen",id:"crafting-and-inventory-screen",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"General",id:"general",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Marketplace",id:"marketplace",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Molang",id:"molang",level:2},{value:"Character Creator",id:"character-creator",level:2},{value:"Realms",id:"realms",level:2},{value:"User Interface",id:"user-interface",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Posted:")," 2 November 2023"),(0,n.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/20951830497165",alt:"A Minecraft screenshot of am abandoned village. There are bats flying around, and there's a crafter in the scene."})),(0,n.yg)("p",null,"Here\u2019s a list of what\u2019s new in this week\u2019s Preview and Beta! As ever, we\u2019d love your feedback on these new features and changes. Send us your thoughts\xa0",(0,n.yg)("a",{parentName:"p",href:"https://aka.ms/Minecraft121Feedback"},"here"),"\xa0and report any bugs at\xa0",(0,n.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"!"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"(Please note: This Preview and Beta will be rolling out to players around 09:00PDT if all goes to plan!)")),(0,n.yg)("h1",{id:"experimental-features"},"Experimental Features"),(0,n.yg)("h2",{id:"chiseled-copper"},"Chiseled Copper"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added recipe for Chiseled Copper\xa0")),(0,n.yg)("h2",{id:"crafter"},"Crafter"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated Crafter textures")),(0,n.yg)("h2",{id:"tuff-blocks"},"Tuff Blocks"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added recipes for Tuff Blocks\xa0")),(0,n.yg)("h2",{id:"waxed-chiseled-copper"},"Waxed Chiseled Copper"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added recipe for Waxed Chiseled Copper"),(0,n.yg)("li",{parentName:"ul"},"Added Stonecutter recipes for all oxidization levels of Waxed Chiseled Copper\xa0")),(0,n.yg)("h2",{id:"waxed-copper-doors"},"Waxed Copper Doors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Crafting Table recipes for all oxidization levels of Waxed Copper Doors")),(0,n.yg)("h2",{id:"waxed-copper-grates"},"Waxed Copper Grates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Stonecutter recipes for all oxidization levels of Waxed Copper Grates\xa0")),(0,n.yg)("h2",{id:"waxed-copper-trapdoors"},"Waxed Copper Trapdoors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Crafting table recipes for all oxidization levels of Waxed Copper Trapdoors")),(0,n.yg)("h2",{id:"textures"},"Textures"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated Tuff Bricks textures\xa0"),(0,n.yg)("li",{parentName:"ul"},"Updated Copper Door textures\xa0"),(0,n.yg)("li",{parentName:"ul"},"Updated Copper Trapdoor textures\xa0"),(0,n.yg)("li",{parentName:"ul"},"Updated Copper Door item textures\xa0")),(0,n.yg)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.yg)("h2",{id:"blocks"},"Blocks"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Chorus Flowers can now be destroyed by any projectile, which will no longer disappear after impact (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176184"},"MCPE-176184"),")"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug making Calcite not being obtainable as an item through commands or creative inventory (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176371"},"MCPE-176371"),")")),(0,n.yg)("h2",{id:"crafting-and-inventory-screen"},"Crafting and Inventory Screen"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Inventory option states such as the all/craftable toggle and selected inventory tab are now saved between sessions (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175159"},"MCPE-175159"),")")),(0,n.yg)("h2",{id:"gameplay"},"Gameplay"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed a regression that caused flying players to slow down significantly after touching ground\xa0"),(0,n.yg)("li",{parentName:"ul"},"Sneaking in water is now possible with touch controls (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167218"},"MCPE-167218"),")")),(0,n.yg)("h2",{id:"general"},"General"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Improved handling of unexpected errors during world export and provide better error messaging (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41898"},"MCPE-41898"),")")),(0,n.yg)("h2",{id:"graphical"},"Graphical"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Made the hotbar less transparent (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31014"},"MCPE-31014"),")"),(0,n.yg)("li",{parentName:"ul"},"Added background dimming on screens that didn't have it (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168598"},"MCPE-168598"),")")),(0,n.yg)("h2",{id:"marketplace"},"Marketplace"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed possible soft locking when performing different actions within Marketplace\xa0"),(0,n.yg)("li",{parentName:"ul"},"Added the ability to deep link users within a server to Dressing Room offers\xa0")),(0,n.yg)("h2",{id:"mobs"},"Mobs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Mobs that were placed in Boats before the introduction of the new size restriction, and are now considered too large to fit, will no longer be ejected (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176198"},"MCPE-176198"),")")),(0,n.yg)("h2",{id:"molang"},"Molang"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"query.is","_","moving")," now detects vertical motion for the player again\xa0")),(0,n.yg)("h2",{id:"character-creator"},"Character Creator"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The classic skins info pop now sends you to the correct settings page")),(0,n.yg)("h2",{id:"realms"},"Realms"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed a crash when joining a Realm after doing other things for a while")),(0,n.yg)("h2",{id:"user-interface"},"User Interface"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed an issue where the border around the 'Creator' tab in Settings would not be highlighted (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169617"},"MCPE-169617"),")"),(0,n.yg)("li",{parentName:"ul"},"Added an altered main menu and world creation experience. Keep an eye out as we're rolling out these changes to some players")))}d.isMDXComponent=!0},49834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(58168),n=(r(96540),r(15680)),o=r(40678),i=r(25298),l=(r(93182),r(34322),r(57350));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/50/23/tech",id:"changelog_source/preview/1.20/50/23/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/50/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/tech",permalink:"/docs/changelog_source/preview/1.20/50/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Items",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Gametest",id:"gametest",level:2}],g={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"script-api"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(l.default,{techSapi:(0,n.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"items"},"Items"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Deprecated 'on","_","dig' event triggers from 'minecraft:digger' in format versions 1.20.50 and higher\xa0")),(0,n.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.yg)("h2",{id:"script-api-1"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(l.default,{techSapi:(0,n.yg)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"gametest"},"Gametest"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Dynamic Properties")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"NBT change: Dynamic properties are now stored using the behavior pack manifest UUID, rather than the module UUID. Existing worlds using dynamic properties will continue to work, and will be migrated to the new format when properties are read or modified"))))}h.isMDXComponent=!0},25298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/23/tech_sapi_exp",id:"changelog_source/preview/1.20/50/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   DataDrivenEntityTriggerAfterEvent",source:"@site/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"DataDrivenEntityTriggerAfterEvent\xa0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Renamed property\xa0",(0,n.yg)("em",{parentName:"p"},"id"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"p"},"eventId"),"\xa0for clarity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Changed\xa0",(0,n.yg)("em",{parentName:"p"},"getModifier"),"\xa0to work in read-only mode")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Changed\xa0",(0,n.yg)("em",{parentName:"p"},"DefinitionModifier"),"\xa0from a\xa0",(0,n.yg)("em",{parentName:"p"},"class"),"\xa0to an\xa0",(0,n.yg)("em",{parentName:"p"},"interface"),"\xa0with properties")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Made\xa0",(0,n.yg)("em",{parentName:"p"},"EntityTypes.get"),"\xa0properly reflect that it can return\xa0",(0,n.yg)("em",{parentName:"p"},"EntityType | undefined"),"\xa0instead of just\xa0",(0,n.yg)("em",{parentName:"p"},"EntityType")))))}d.isMDXComponent=!0},34322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/50/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},40678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/23/tech_sapi_stable",id:"changelog_source/preview/1.20/50/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Moved\xa0Entity.remove\xa0from\xa0beta\xa0to\xa01.7.0",source:"@site/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"Entity"),".",(0,n.yg)("em",{parentName:"li"},"remove"),"\xa0from\xa0",(0,n.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.7.0"))))}d.isMDXComponent=!0},93182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/50/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/50/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/50/23",slug:"/changelog_source/preview/1.20/50/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},74874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=r(58168),n=r(96540),o=r(15680),i=r(18228),l=r(19365),s=r(8249);const c={},p=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},g=[],m={toc:g},h="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(h,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},r.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),r.gameplayChangelog,r.techChangelog?(0,o.yg)(n.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),r.techChangelog):void 0))))}f.isMDXComponent=!0},57350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(58168),n=r(96540),o=r(15680),i=r(18228),l=r(19365);const s={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],g={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(n.Fragment,null,void 0!==r.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.yg)(n.Fragment,null,r.techSapi)))}h.isMDXComponent=!0},92367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(58168),n=(r(96540),r(15680)),o=r(74874),i=r(10638),l=r(49834);const s={sidebar_position:99999743,title:"1.20.50.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.50.23",p={unversionedId:"official_changelog/preview/1.20/50/23",id:"official_changelog/preview/1.20/50/23",title:"1.20.50.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/50/23.mdx",sourceDirName:"official_changelog/preview/1.20/50",slug:"/official_changelog/preview/1.20/50/23",permalink:"/docs/official_changelog/preview/1.20/50/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/50/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999743,frontMatter:{sidebar_position:99999743,title:"1.20.50.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.50.24",permalink:"/docs/official_changelog/preview/1.20/50/24"},next:{title:"1.20.50.22",permalink:"/docs/official_changelog/preview/1.20/50/22"}},u={},d=[],g={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"minecraft-beta--preview---1205023"},"Minecraft Beta & Preview - 1.20.50.23"),(0,n.yg)(o.default,{gameplayChangelog:(0,n.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);