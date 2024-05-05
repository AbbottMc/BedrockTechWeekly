"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[33172,89355,21032,50553,41488,87866,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},g),{},{components:n})):a.createElement(h,i({ref:t},g))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(96540),r=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,g]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),u=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||u()};return(0,a.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),g()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:u},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),c=n(31682),g=n(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[u,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,g.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:g}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),g?r.createElement("div",{className:"w-full"},g):void 0)}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(v,(0,a.A)({},e,t)),r.createElement(b,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},62849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/gameplay",id:"changelog_source/preview/1.20/0/21/gameplay",title:"gameplay",description:"Posted: 19 April, 2023",source:"@site/docs/changelog_source/preview/1.20/0/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/gameplay",permalink:"/docs/changelog_source/preview/1.20/0/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Toggle</strong>",id:"experimental-toggle",level:2},{value:"<strong>Accessibility Features</strong>",id:"accessibility-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Decorated Pot</strong>",id:"decorated-pot",level:2},{value:"<strong>Pitcher Crop</strong>",id:"pitcher-crop",level:2},{value:"<strong>Pitcher Crop Block</strong>",id:"pitcher-crop-block",level:2},{value:"<strong>Calibrated Sculk Sensor</strong>",id:"calibrated-sculk-sensor",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Signs</strong>",id:"signs",level:2},{value:"<strong>Sniffer</strong>",id:"sniffer",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Vibration Frequencies</strong>",id:"vibration-frequencies",level:2}],g={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 19 April, 2023"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\xa0"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0 for detailed instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/14998197233421",alt:"A Minecraft screenshot featuring a villager and a sniffer standing in front of a cave near a cherry grove"})),(0,r.yg)("p",null,"Here\u2019s a run down of what\u2019s new in this week\u2019s Minecraft Preview and Beta! As always, don\u2019t forget to send us all your feedback and ideas at ",(0,r.yg)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"experimental-toggle"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Toggle")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"All Trails & Tales content has now been \u201cde-experimentified\u201d and is available during normal gameplay"),(0,r.yg)("li",{parentName:"ul"},"Removed the Next Major Update toggle, since it has no active experimental content")),(0,r.yg)("h2",{id:"accessibility-features"},(0,r.yg)("strong",{parentName:"h2"},"Accessibility Features")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The four Creative Inventory tabs now have their names read out by text-to-speech")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Suspicious Sand and Suspicious Gravel now play their respective sounds when brushing them has completed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168805"},"MCPE-168805"),")")),(0,r.yg)("h2",{id:"decorated-pot"},(0,r.yg)("strong",{parentName:"h2"},"Decorated Pot")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Decorated Pot faces now use the top rows of pixels (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168834"},"MCPE-168834"),")")),(0,r.yg)("h2",{id:"pitcher-crop"},(0,r.yg)("strong",{parentName:"h2"},"Pitcher Crop")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Pitcher Crop hitbox will now change in size according to its age (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169534"},"MCPE-169534"),")")),(0,r.yg)("h2",{id:"pitcher-crop-block"},(0,r.yg)("strong",{parentName:"h2"},"Pitcher Crop Block")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pitcher Crop block now uses bottom texture (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169490"},"MCPE-169490"),")")),(0,r.yg)("h2",{id:"calibrated-sculk-sensor"},(0,r.yg)("strong",{parentName:"h2"},"Calibrated Sculk Sensor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Calibrated Sculk Sensors now power the block below them when active"),(0,r.yg)("li",{parentName:"ul"},"Calibrated Sculk Sensors now have an active cooldown of 1 second instead of 2 seconds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169531"},"MCPE-169531"),")"),(0,r.yg)("li",{parentName:"ul"},"Calibrated Sculk Sensors now detect vibrations up to 16 blocks away instead of 8 blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169532"},"MCPE-169532"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed fall damage accumulating when player jumps on roofed Soul Sand Bubble Column")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Decorated Pot now respects the lighting conditions when held in hand or dropped (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167191"},"MCPE-167191"),")"),(0,r.yg)("li",{parentName:"ul"},"Conduit block now respects the lighting conditions when held in hand or dropped")),(0,r.yg)("h2",{id:"signs"},(0,r.yg)("strong",{parentName:"h2"},"Signs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A sound is now played when trying to interact with a waxed Sign (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168807"},"MCPE-168807"),")"),(0,r.yg)("li",{parentName:"ul"},"It is no longer possible to use Ink Sac, Glow Ink Sac, or Dyes if the text that would be changed is empty (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-133778"},"MCPE-133778"),")"),(0,r.yg)("li",{parentName:"ul"},"Interacting with an unwaxed Sign while holding an item that cannot be used on the sign now opens the sign for editing"),(0,r.yg)("li",{parentName:"ul"},"Interacting with a Sign while holding certain item no longer also trigger the item's specific action in addition to opening the Sign for editing (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168838"},"MCPE-168838"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Examples of items that caused this are: Brush, Armor, Fishing Rod, Book & Quill, Goat Horn, Empty Map"))),(0,r.yg)("li",{parentName:"ul"},"When using gamepad or touch input, correct tooltips are now shown if interacting with the Sign is possible"),(0,r.yg)("li",{parentName:"ul"},"When editing the text of a Sign the text color now matches the dye of the sign (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168818"},"MCPE-168818"),")"),(0,r.yg)("li",{parentName:"ul"},"It is now possible to attach a hanging sign to another without sneaking")),(0,r.yg)("h2",{id:"sniffer"},(0,r.yg)("strong",{parentName:"h2"},"Sniffer")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the Sniffer's head Z-fighting with their body (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169423"},"MCPE-169423"),")")),(0,r.yg)("h2",{id:"sculk-sensor"},(0,r.yg)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors now power the block below them when active")),(0,r.yg)("h2",{id:"sculk-shrieker"},(0,r.yg)("strong",{parentName:"h2"},"Sculk Shrieker")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Waterlogging a Sculk Shrieker will now silence its shriek sounds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169563"},"MCPE-169563"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Marketplace and Dressing Room cycle buttons now show navigation chevron when using a controller and controller hints are disabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147711"},"MCPE-147711"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed the multiplayer toggle in the Create New World screen sometimes wasn't greyed out even though the setting would have no effect"),(0,r.yg)("li",{parentName:"ul"},'Coordinates are now shown on the new death screen if the "Show Coordinates" setting is enabled')),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Top and bottom Door textures now rotate correctly when opened and closed for worlds versioned from 1.20 onward (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152926"},"MCPE-152926"),")")),(0,r.yg)("h2",{id:"vibration-frequencies"},(0,r.yg)("strong",{parentName:"h2"},"Vibration Frequencies")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference"),(0,r.yg)("li",{parentName:"ul"},"The following are category descriptions for each frequency and the expected events that they correspond to:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Movement in any medium (land, liquid or air)"),(0,r.yg)("li",{parentName:"ol"},"Landing on any surface (land or liquid)"),(0,r.yg)("li",{parentName:"ol"},"Item interactions"),(0,r.yg)("li",{parentName:"ol"},"Gliding with an Elytra or unique mob actions (Ravager roaring, Wolf shaking, etc.)"),(0,r.yg)("li",{parentName:"ol"},"Equipping gear"),(0,r.yg)("li",{parentName:"ol"},"Interacting with a mob"),(0,r.yg)("li",{parentName:"ol"},"Mobs and players getting damaged"),(0,r.yg)("li",{parentName:"ol"},"Consuming items (drinking and eating)"),(0,r.yg)("li",{parentName:"ol"},"Blocks 'deactivating' (Door closing, Chest closing, Button unpressing, etc.)"),(0,r.yg)("li",{parentName:"ol"},"Blocks 'activating' (Door opening, Chest opening, Button being pressed, etc.)"),(0,r.yg)("li",{parentName:"ol"},"Blocks changing (Cauldron water level rising, adding food to a Campfire, etc.)"),(0,r.yg)("li",{parentName:"ol"},"Blocks being destroyed"),(0,r.yg)("li",{parentName:"ol"},"Blocks being placed"),(0,r.yg)("li",{parentName:"ol"},"Mobs and players spawning"),(0,r.yg)("li",{parentName:"ol"},"Mobs and players dying or an explosion")))))}p.isMDXComponent=!0},34541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),o=n(31301),i=(n(7723),n(57350));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/0/21/tech",id:"changelog_source/preview/1.20/0/21/tech",title:"tech",description:"Editor",source:"@site/docs/changelog_source/preview/1.20/0/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech",permalink:"/docs/changelog_source/preview/1.20/0/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech.mdx",tags:[],version:"current",frontMatter:{}},g={},u=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Entities</strong>",id:"entities",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Recipes</strong>",id:"recipes",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"editor"},(0,r.yg)("strong",{parentName:"h2"},"Editor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed bug where Editor could be accessed during a regular gameplay session")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fix "get',"_","equipped","_","item","_",'name" Molang query not being able to return the old name of some flattened items, eg. red',"_","wool to wool")),(0,r.yg)("h2",{id:"entities"},(0,r.yg)("strong",{parentName:"h2"},"Entities")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Introduced new entity filters "all',"_","slots","_",'empty" and "any',"_","slot","_",'empty" to allow searching for empty item slots in a designated equipment location (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153909"},"MCPE-153909"),")")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when enabling ray tracing in ray tracing compatible content that was loaded into with ray tracing turned off (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168894"},"MCPE-168894"),")")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Custom items with 'minecraft:durability' and 'minecraft:repairable' can be combined to repair them without requiring a custom item entry")),(0,r.yg)("h2",{id:"recipes"},(0,r.yg)("strong",{parentName:"h2"},"Recipes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed incorrect content warnings for recipes that use the same blocks but with different data (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168717"},"MCPE-168717"),")")),(0,r.yg)("h2",{id:"components"},(0,r.yg)("strong",{parentName:"h2"},"Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Attribute "speed',"_",'multiplier" in the "minecraft:boostable" component is now being parsed correctly from json file. Old behavior is maintained for "format',"_",'version" lower than 1.20 with 1.35 value rather than what the json file specifies (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164424"},"MCPE-164424"),")")),(0,r.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.yg)("h2",{id:"add-ons"},(0,r.yg)("strong",{parentName:"h2"},"Add-Ons")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Added "minecraft:facing',"_",'direction" state to the "minecraft:placement',"_",'direction" block trait.',(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'"minecraft:facing',"_",'direction" is a six value integer state (down, up, south, west, north, east)'),(0,r.yg)("li",{parentName:"ul"},'Can enable and access this state on blocks through the "minecraft:placement',"_",'direction" trait'),(0,r.yg)("li",{parentName:"ul"},'Can access the "minecraft:cardinal',"_",'direction" state on blocks that apply the "minecraft:placement',"_",'direction" trait in block',"_","property Molang queries and set","_","block","_","property EventResponses"))),(0,r.yg)("li",{parentName:"ul"},'Pumpkin blocks use state "minecraft:cardinal',"_",'direction" instead of "direction"')),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},31301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where modified equipment and container slots were not being synced to clients",source:"@site/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],g={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where modified equipment and container slots were not being synced to clients"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"@minecraft/server"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,r.yg)("em",{parentName:"li"},"BlockProperties_to\xa0_BlockStates")),(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,r.yg)("em",{parentName:"li"},"getAllProperties_to\xa0_BlockPermutation.getAllStates")),(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,r.yg)("em",{parentName:"li"},"getProperty_to\xa0_BlockPermutation.getState"))))))}p.isMDXComponent=!0},7723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],g={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=n(58168),r=n(96540),o=n(15680),i=n(18228),l=n(19365),s=n(8249);const c={},g=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d},m="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>g,toc:()=>p});var a=n(58168),r=n(96540),o=n(15680),i=n(18228),l=n(19365);const s={},c=void 0,g={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(r.Fragment,null,n.techSapi)))}m.isMDXComponent=!0},43722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>g,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(74874),i=n(62849),l=n(34541);const s={sidebar_position:99999770,title:"1.20.0.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.0.21",g={unversionedId:"official_changelog/preview/1.20/0/21",id:"official_changelog/preview/1.20/0/21",title:"1.20.0.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/0/21.mdx",sourceDirName:"official_changelog/preview/1.20/0",slug:"/official_changelog/preview/1.20/0/21",permalink:"/docs/official_changelog/preview/1.20/0/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/0/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999770,frontMatter:{sidebar_position:99999770,title:"1.20.0.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.0.22",permalink:"/docs/official_changelog/preview/1.20/0/22"},next:{title:"1.20.0.20",permalink:"/docs/official_changelog/preview/1.20/0/20"}},u={},p=[],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(h,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---120021"},"Minecraft Beta & Preview - 1.20.0.21"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);