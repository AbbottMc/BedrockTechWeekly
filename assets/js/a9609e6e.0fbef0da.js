"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88038,9227,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>p});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(p,i(i({ref:t},g),{},{components:a})):n.createElement(p,i({ref:t},g))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(96540),r=a(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),d(i))}}),[c,g]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),u=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||u()};return(0,n.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),g()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>o});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),l=a(56347),s=a(57485),c=a(31682),g=a(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,g.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:g}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),g?r.createElement("div",{className:"w-full"},g):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},97870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/stable/1.16/200/gameplay",id:"changelog_source/stable/1.16/200/gameplay",title:"gameplay",description:"Posted: December 8, 2020",source:"@site/docs/changelog_source/stable/1.16/200/gameplay.mdx",sourceDirName:"changelog_source/stable/1.16/200",slug:"/changelog_source/stable/1.16/200/gameplay",permalink:"/docs/changelog_source/stable/1.16/200/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.16/200/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>RenderDragon:</strong>",id:"renderdragon",level:2},{value:"<strong>Minecraft with Ray Tracing:</strong>",id:"minecraft-with-ray-tracing",level:2},{value:"<strong>Minecraft with OpenXR:</strong>",id:"minecraft-with-openxr",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>New Volume Settings</strong>",id:"new-volume-settings",level:2},{value:"<strong>Vanilla Parity Changes and Fixes:</strong>",id:"vanilla-parity-changes-and-fixes",level:2},{value:"<strong>Known Issues:</strong>",id:"known-issues",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2},{value:"**Updated Template Packs",id:"updated-template-packs",level:2},{value:"**",id:"",level:2},{value:"<strong>Fixes</strong>",id:"fixes-1",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:2},{value:"<strong>Components</strong>",id:"components",level:2}],g={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," December 8, 2020"),(0,r.yg)("p",null,"A new update is upon us in the form of Minecraft 1.16.200! This update is loaded with graphics enhancements on Windows 10, updated volume settings, parity changes, and a swath of bug fixes. Please report any bugs you find on ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and post feedback to ",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),".  "),(0,r.yg)("h2",{id:"renderdragon"},(0,r.yg)("strong",{parentName:"h2"},"RenderDragon:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"RenderDragon, the new graphics engine for Minecraft Bedrock platforms, is now available on Windows 10"),(0,r.yg)("li",{parentName:"ul"},"RenderDragon was developed by the Mojang Studios graphics team to give our game greater performance, stability, and flexibility. The new architecture of RenderDragon enables our developers to bring new graphics features such as physically based rendering (PBR) and ray tracing more easily to the game"),(0,r.yg)("li",{parentName:"ul"},"RenderDragon has been available for Xbox and PlayStation hardware since 2019, and we are now bringing it to Windows 10. We plan to bring RenderDragon to all Minecraft Bedrock platforms, including mobile devices, in the future  ")),(0,r.yg)("h2",{id:"minecraft-with-ray-tracing"},(0,r.yg)("strong",{parentName:"h2"},"Minecraft with Ray Tracing:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enabled Ray Tracing on Windows 10 with compatible graphics hardware")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360078247192/raytracing.png",alt:"raytracing.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can dramatically change the look and feel of the game. Immerse yourself in volumetric fog. See Minecraft in a whole new light with a cutting-edge dynamic lighting system, Ray Tracing"),(0,r.yg)("li",{parentName:"ul"},"Players can also experience advanced kinds of block textures including metallic surfaces, bump maps, normal maps, and light emission (Glowy, reflective dirt blocks? Yes, please!)"),(0,r.yg)("li",{parentName:"ul"},"Be sure to check out the\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/ray-tracing-FAQ"},(0,r.yg)("strong",{parentName:"a"},"Frequently Asked Questions")),"\xa0article for an in-depth look at Ray Tracing features"),(0,r.yg)("li",{parentName:"ul"},"Content in the Marketplace is now aware of Ray Tracing capabilities and will display a label indicating support within the user interface"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Creators:")," We have some new documentation available for creating content for Minecraft with Ray Tracing!",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://help.minecraft.net/hc/en-us/articles/360051308931"},(0,r.yg)("strong",{parentName:"a"},"Texture Set Documentation"))," - More information on Physically Based Rendering"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://help.minecraft.net/hc/en-us/articles/360051618391"},(0,r.yg)("strong",{parentName:"a"},"Fog in Resource Packs"))," - Defining fog values within Resource Packs  ")))),(0,r.yg)("h2",{id:"minecraft-with-openxr"},(0,r.yg)("strong",{parentName:"h2"},"Minecraft with OpenXR:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Minecraft on Windows 10 now uses OpenXR to support Windows MR and Oculus VR")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360078247172/openxr.jpg",alt:"openxr.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"OpenXR is an open-source, royalty-free API standard that provides engines native access to a wide range of devices from vendors that span across VR/MR devices"),(0,r.yg)("li",{parentName:"ul"},"OpenXR implementation in Minecraft brings a more unified experience across current VR/MR devices as well as support for those yet to come"),(0,r.yg)("li",{parentName:"ul"},"You will still be able to launch through the Mixed Reality Portal, as well as the Oculus Store. However, there is also a URL to launch in VR:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"minecraft://mode/?OpenXR=true")),(0,r.yg)("li",{parentName:"ul"},"This can be made into a desktop shortcut, pinned to the start menu, bookmarked in a browser, or anything else you can do with a URL  ")))),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("h2",{id:"new-volume-settings"},(0,r.yg)("strong",{parentName:"h2"},"New Volume Settings")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a variety of volume sliders for sound categories (eg. hostile, blocks, weather etc.)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"These play a preview of the relevant sounds in the main settings menu, and play the default click sound when in-game")))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360078247212/volume.jpg",alt:"volume.jpg"}),"  "),(0,r.yg)("h2",{id:"vanilla-parity-changes-and-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity Changes and Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Basalt can no longer be destroyed by Ghast fireballs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-75252"},"MCPE-75252"),")"),(0,r.yg)("li",{parentName:"ul"},"Basalt blocks now take slightly more time to destroy"),(0,r.yg)("li",{parentName:"ul"},"Dragon Egg now always drops as an item when it's destroyed by an explosion (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52632"},"MCPE-52632"),")"),(0,r.yg)("li",{parentName:"ul"},"Right-clicking a snow block with a shovel no longer breaks the snow block"),(0,r.yg)("li",{parentName:"ul"},"Dirt Paths (formerly Grass Path) can now be made by using a shovel on Dirt, Podzol, Mycelium, Coarse Dirt, and grass"),(0,r.yg)("li",{parentName:"ul"},"Updated the Netherite leggings texture (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-103016"},"MCPE-103016"),")"),(0,r.yg)("li",{parentName:"ul"},"Twisting Vines can no longer be placed on Composter blocks while sneaking (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-78973"},"MCPE-78973"),")"),(0,r.yg)("li",{parentName:"ul"},"Netherite Armor now gives a ninety percent reduction in Knockback (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77430"},"MCPE-77430"),")"),(0,r.yg)("li",{parentName:"ul"},"Bees will no longer stray more than 22 blocks from their home Beehive (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60252"},"MCPE-60252"),")  ")),(0,r.yg)("h2",{id:"known-issues"},(0,r.yg)("strong",{parentName:"h2"},"Known Issues:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players running Minecraft on Windows 10 N 32-bit systems may encounter a crash when loading the game if the Media Foundation Pack is not installed. This can be resolved by downloading and installing the ",(0,r.yg)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/software-download/mediafeaturepack"},"Media Foundation Pack")),(0,r.yg)("li",{parentName:"ul"},"Players are unable to rejoin a world after being disconnected from a suspended session"),(0,r.yg)("li",{parentName:"ul"},"In VR, Living room hint text doesn\u2019t change correspondingly when input method changes from gamepad to motion controller  ")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved chunk loading speed when flying with Elytra (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85614"},"MCPE-85614"),")"),(0,r.yg)("li",{parentName:"ul"},"Large numbers of scheduled instant updates no longer crash the game (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94942"},"MCPE-94942"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occasionally occur when going through a portal or flying around in Creative mode"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occasionally occur while flying or moving around the game world"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when loading a local world"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where some mobile devices would lose audio after suspend and resume (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101027"},"MCPE-101027"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that caused a crash on Nintendo Switch when trying to load a 256x resolution resource pack",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The system now blocks that selection and notifies the player they cannot select it")))),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players that own The Founder's Cape will once again see it within the Capes tab of the Dressing Room")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Only preview items will be shown in crafting screen when auto crafting an item on controller. This prevents rapid updates of the Recipe Book"),(0,r.yg)("li",{parentName:"ul"},"Fixed the player's hand still bobbing if View Bobbing was disabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79380"},"MCPE-79380"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed mobs and other entities freezing and becoming desynced with their bodies o","_","O (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71243"},"MCPE-71243"),")"),(0,r.yg)("li",{parentName:"ul"},"Villagers will no longer steal workstations from each other (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43071"},"MCPE-43071"),")"),(0,r.yg)("li",{parentName:"ul"},"Mobs no longer randomly stop attacking and following their targets (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48144"},"MCPE-48144"),")"),(0,r.yg)("li",{parentName:"ul"},"Piglins that are close together can no longer pick up the same item if it's dropped between them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-95644"},"MCPE-95644"),")"),(0,r.yg)("li",{parentName:"ul"},"Update Zombified Piglin texture to remove flickering of loincloth (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-96793"},"MCPE-96793"),")"),(0,r.yg)("li",{parentName:"ul"},"Mobs no longer spawn in Wither Roses (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-97331"},"MCPE-97331"),")"),(0,r.yg)("li",{parentName:"ul"},"Bees now only exit at the front of Beehives and Bee Nests"),(0,r.yg)("li",{parentName:"ul"},"Mobs are no longer teleported back and forth outside solid objects if there is not enough space for multiple entities (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101202"},"MCPE-101202"),")")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Compass is no longer consumed when used on a Lodestone in Creative mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-96258"},"MCPE-96258"),")"),(0,r.yg)("li",{parentName:"ul"},"Glowsticks no longer use placeholder textures (Education Feature) (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45686"},"MCPE-45686"),", ",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68417"},"MCPE-68417"),")")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cocoa Pods generated in Jungles now generate in the proper direction (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102399"},"MCPE-102399"),")"),(0,r.yg)("li",{parentName:"ul"},"Signs no longer replace decorations when attempting to place in the same space as the decoration"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where End Portal blocks were not removed after an End Portal Frame block was destroyed. Filled blocks other than End Portal blocks will remain in place")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Owned packs are now refreshed correctly after restarting the game when playing in VR")),(0,r.yg)("h2",{id:"accessibility"},(0,r.yg)("strong",{parentName:"h2"},"Accessibility")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the screen reader not reading the screen title in-game"),(0,r.yg)("li",{parentName:"ul"},"Fixed the screen reader not reading the shortcut button on the Pause Screen"),(0,r.yg)("li",{parentName:"ul"},"Fixed the screen reader not reading the screen title and shortcut buttons on the Invite to Game Screen"),(0,r.yg)("li",{parentName:"ul"},"Fixed the screen reader not reading the title on the Profile and Edit Character screens"),(0,r.yg)("li",{parentName:"ul"},"Fixed the numbering of buttons on the Pause Screen being wrong when using text-to-speech"),(0,r.yg)("li",{parentName:"ul"},"The Emote Wheel now supports the screen reader"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the screen reader was not reading updates often enough on some devices"),(0,r.yg)("li",{parentName:"ul"},"Fixed the screen reader so messages with controller icons in the Chat Screen are read correctly"),(0,r.yg)("li",{parentName:"ul"},"The screen reader now reads the Open Chat Message while Text To Speech For Chat is turned off"),(0,r.yg)("li",{parentName:"ul"},"Fixed several issues regarding text contrast in the user interface"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the Servers tab would not correctly read text-to-speech prompts when not signed into a Microsoft account"),(0,r.yg)("li",{parentName:"ul"},"Fixed various issues where text-to-speech indices on the start screen were not correct"),(0,r.yg)("li",{parentName:"ul"},"Fixed issues where user interface controls would be improperly indexed in text-to-speech for popup modals"),(0,r.yg)("li",{parentName:"ul"},"Reduced transparency on top row of buttons in Touch UI to improve readability")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added UI start up screen to inform players if they are running on outdated graphics drivers"),(0,r.yg)("li",{parentName:"ul"},"Fixed several death messages (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-30360"},"MCPE-30360"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'"slain by Llama spit" --',">",' "spitballed by Llama"'),(0,r.yg)("li",{parentName:"ul"},'"slain by shulkerBullet" --',">",' "sniped by shulker"'),(0,r.yg)("li",{parentName:"ul"},'"slain by Blaze" --',">",' "fireballed by Blaze"'),(0,r.yg)("li",{parentName:"ul"},'"slain by Ghast" --',">",' "fireballed by Ghast"'),(0,r.yg)("li",{parentName:"ul"},'"shot by arrow" --',">",' "shot by skeleton"'),(0,r.yg)("li",{parentName:"ul"},'"slain by Trident" --',">",' "was impaled to death by\xa0Trident"'))),(0,r.yg)("li",{parentName:"ul"},"Fixed paperdoll such that it can now always be rotated with the mouse when in the Dressing Room (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101210"},"MCPE-101210"),")"),(0,r.yg)("li",{parentName:"ul"},'"Classic Controls - Intense" font color now matches the surrounding text in VR Controls menu'),(0,r.yg)("li",{parentName:"ul"},"Preview items in the crafting grid now have a different colored background depending on item availability in the inventory"),(0,r.yg)("li",{parentName:"ul"},"The Player Permissions menu can once again be navigated using a controller regardless of the player\u2019s permission level"),(0,r.yg)("li",{parentName:"ul"},"[","X","]"," button in Chat Settings is no longer present when using a controller"),(0,r.yg)("li",{parentName:"ul"},"Profile screen has been improved, now characters are visible and can be selected or modified as soon as they load"),(0,r.yg)("li",{parentName:"ul"},'Avoid purchasing a Realm if the player cancels out of "Purchase History Needed" dialog screen'),(0,r.yg)("li",{parentName:"ul"},"'Strawberry Blonde' color now has correct name in the Character Creator (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102674"},"MCPE-102674"),")"),(0,r.yg)("li",{parentName:"ul"},'Loading screen tips no longer display the "tips.game.62" (No ID)'),(0,r.yg)("li",{parentName:"ul"},"Fixed the visual focus indicator disappearing in VR when hovering on tabs in VR with screen reader enabled"),(0,r.yg)("li",{parentName:"ul"},"Scoreboard now displays properly on the pause screen when displaying in list mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106012"},"MCPE-106012"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"'/playsound'commands now play the sound correctly for all players in range"),(0,r.yg)("li",{parentName:"ul"},"'/effect' command duration is now capped at 1,000,000 seconds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92916"},"MCPE-92916"),")"),(0,r.yg)("li",{parentName:"ul"},"Add ticking area commands performed in the same tick now disallow adding areas with the same name twice"),(0,r.yg)("li",{parentName:"ul"},"Placeholder text message for the '/titleraw' command success no longer returns to player (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63618"},"MCPE-63618"),")"),(0,r.yg)("li",{parentName:"ul"},"FadeOut argument is no longer ignored in the '/title' times command  ")),(0,r.yg)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.yg)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.yg)("h2",{id:"updated-template-packs"},"**Updated Template Packs"),(0,r.yg)("h2",{id:""},"**"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated templates for 1.16.200 with new resources, behaviors, and documentation are available for download",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Resource Pack Template: ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/resourcepacktemplate"},"aka.ms/resourcepacktemplate")),(0,r.yg)("li",{parentName:"ul"},"Behavior Pack Template (Includes documentation): ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/behaviorpacktemplate"},"aka.ms/behaviorpacktemplate"))))),(0,r.yg)("h2",{id:"fixes-1"},(0,r.yg)("strong",{parentName:"h2"},"Fixes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Turning bandwidth optimizations off to see if it fixes stationary mob problem and entity "lag" issues (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105892"},"MCPE-105892"),")"),(0,r.yg)("li",{parentName:"ul"},"Custom projectiles once again animate properly"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where loot tables with a 'set","_","data' function produced incorrect loot items"),(0,r.yg)("li",{parentName:"ul"},"Fixed face occlusion with data-driven blocks to properly account for unit cube transparent vs unit cube opaque"),(0,r.yg)("li",{parentName:"ul"},"Data-driven blocks no longer have their top faces rotated 180 degrees when carried or in inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63134"},"MCPE-63134"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with a runaway block ticking queue that occurred on a looping data-driven block that changed itself to a different permutation. The bug could cause memory issues, increased load and save times, as well as stalling the game periodically (No ID)"),(0,r.yg)("li",{parentName:"ul"},"Fixed data-driven blocks to shrink UVs the same way as actors to prevent UV bleeding (No ID)"),(0,r.yg)("li",{parentName:"ul"},"Fixed some culling issues with data-driven blocks larger than 1x1x1 when placed on a chunk boundary. Also added content warnings for larger blocks"),(0,r.yg)("li",{parentName:"ul"},"Changed 'set","_","block' and 'set","_","block","_","at","_","pos' to use 'BlockDescriptor' when specifying 'block","_","type'"),(0,r.yg)("li",{parentName:"ul"},"Old command versions now use the previous position instead of current one"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where 'query.cardinal","_","block","_","face","_","placed","_","on' no longer worked with 'on","_","player","_","placing'"),(0,r.yg)("li",{parentName:"ul"},"Changed texture atlas padding size from 0 to 1 when disabling mipmap"),(0,r.yg)("li",{parentName:"ul"},'Fixed issue of blocks listed in the "minecraft:block',"_",'placer" component not working correctly'),(0,r.yg)("li",{parentName:"ul"},"Fixed player smaller hitbox while swimming and gliding from being reset after an event is sent on the player"),(0,r.yg)("li",{parentName:"ul"},"Fixed custom spawn egg generation in template worlds"),(0,r.yg)("li",{parentName:"ul"},"MoLang geometry, material, and texture variable names can once again contain dots"),(0,r.yg)("li",{parentName:"ul"},"Items with the item lock component no longer cause the recipe book to show invalid recipe results")),(0,r.yg)("h2",{id:"blocks-1"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added 'query.cardinal","_","facing","_","2d' to get a ground plane direction that doesn't return up or down"),(0,r.yg)("li",{parentName:"ul"},"Added the ability to put block models into the models/blocks folder"),(0,r.yg)("li",{parentName:"ul"},"Added the ability for item triggers to send events to the block they are interacting with (when there is one such as 'on","_","use","_","on')"),(0,r.yg)("li",{parentName:"ul"},"Added the ability to query the interacted face for both interactions with blocks and using 'minecraft:on","_","use","_","on' in an item. Face can be queried with 'query.block","_","face'")),(0,r.yg)("h2",{id:"components"},(0,r.yg)("strong",{parentName:"h2"},"Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed using 'query.get","_","equipped","_","item","_","name' with an item that was renamed not returning the right result. We now tie this to vanilla versioning so that the old name is returned if the world is tied to a specific vanilla version"),(0,r.yg)("li",{parentName:"ul"},'"add',"_","mob","_",'effect" and "remove',"_","mob","_",'effect" no longer throw content errors when valid effect names are passed in'),(0,r.yg)("li",{parentName:"ul"},'Added documentation for "remove',"_","mob","_",'effect" to make creators aware they can use the value "all" in effect to remove all mob effects from a target'),(0,r.yg)("li",{parentName:"ul"},"Fixed items not being placeable in additional horse equipment slots. Does not fix all equippable behaviors"),(0,r.yg)("li",{parentName:"ul"},"Inventory size on the minecraft:inventory component has to be increased to match the equippable slots in order for the server to accept the item placement"),(0,r.yg)("li",{parentName:"ul"},"The tooltip for item with item lock component will no longer show when game rule 'showtags' is disabled")))}d.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=a(58168),r=a(96540),o=a(15680),i=a(18228),l=a(19365),s=a(8249);const c={},g=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],p={toc:m},h="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},34866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),o=a(74874),i=a(97870);const l={sidebar_position:99999928,title:"1.16.200",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.16"]},s="Minecraft - 1.16.200 (Bedrock)",c={unversionedId:"official_changelog/stable/1.16/200",id:"official_changelog/stable/1.16/200",title:"1.16.200",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.16/200.mdx",sourceDirName:"official_changelog/stable/1.16",slug:"/official_changelog/stable/1.16/200",permalink:"/docs/official_changelog/stable/1.16/200",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.16/200.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999928,frontMatter:{sidebar_position:99999928,title:"1.16.200",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.201",permalink:"/docs/official_changelog/stable/1.16/201"},next:{title:"1.16.101",permalink:"/docs/official_changelog/stable/1.16/101"}},g={},u=[],d={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft---116200-bedrock"},"Minecraft - 1.16.200 (Bedrock)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);