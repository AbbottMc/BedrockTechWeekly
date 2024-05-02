"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3290,47181,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>o});var a=n(67294),r=n(62706);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function o(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[o,s]=i({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),p(l))}}),[c,u]=i({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),m=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||m()};return(0,a.useEffect)((()=>(o(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:m},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>i});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),c=n(67392),u=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var f=n(72389);const v="tabList_TRJ7",b="tabItem_hGfb";function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c,rightElement:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),a=c[n].value;a!==o&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:d},l,{className:(0,i.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},44805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"changelog_source/preview/1.16/100/50/gameplay",id:"changelog_source/preview/1.16/100/50/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.16/100/50/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/50",slug:"/changelog_source/preview/1.16/100/50/gameplay",permalink:"/docs/changelog_source/preview/1.16/100/50/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/50/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Achievement Screen</strong>",id:"achievement-screen",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Technical changes</strong>",id:"technical-changes",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Display Name Component</strong>",id:"display-name-component",level:2},{value:"<strong>Item Parsing</strong>",id:"item-parsing",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("h2",{id:"achievement-screen"},(0,r.kt)("strong",{parentName:"h2"},"Achievement Screen")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New achievements screen design and added a new achievement details screen (available after gradual roll-out). We would love to hear your feedback on it here in\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/mcAchievementBeta"},"this post"),"!")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom names now modify boss's bars (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43473"},"MCPE-43473"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug where system language setting for Simplified and Traditional Chinese was not honored by the game"),(0,r.kt)("li",{parentName:"ul"},"Nintendo Switch can now upload worlds to Realms again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-474"},"REALMS-474"),")\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NB \u2013 this fix is still in beta so won\u2019t be available for Realms or non-beta platforms yet, but we wanted to give you a heads up this fix is on its way!"))),(0,r.kt)("li",{parentName:"ul"},"Game no longer crashes if a player opens a Shulker Box they're standing on after rejoining a multiplayer session\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where some walls were not correctly connected on world load"),(0,r.kt)("li",{parentName:"ul"},"Fishing Rod will now correctly cast when close to a Mob (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65249"},"MCPE-65249"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that meant the block highlight/selection box was extending above blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with missing animation when damaging bamboo"),(0,r.kt)("li",{parentName:"ul"},"Added Noto Sans font license button and pop-up dialog to Settings screen (in the Profile section)\xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a graphical issue with glass blocks in City Living world, that affected some devices on Windows 10\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with the skybox background graphics not rendering correctly on some devices\xa0")),(0,r.kt)("h2",{id:"technical-changes"},(0,r.kt)("strong",{parentName:"h2"},"Technical changes")),(0,r.kt)("h2",{id:"actors"},(0,r.kt)("strong",{parentName:"h2"},"Actors")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The\xa0"minecraft:behavior.controlled',"_","by","_",'player"\xa0goal is now data-driven'),(0,r.kt)("li",{parentName:"ul"},"Physics Component's\xa0has","_","gravity\xa0is now used to decide whether a mob should apply water gravity, if the mob does not have a Navigation Component\xa0"),(0,r.kt)("li",{parentName:"ul"},"Ender Crystals can no longer be pushed\xa0"),(0,r.kt)("li",{parentName:"ul"},"The Squid's rendering is now data-driven"),(0,r.kt)("li",{parentName:"ul"},"Mine carts are now data-driven. This converted minecart rideable, minecarts with chest, with hopper, with command block, and with TNT to be data-driven")),(0,r.kt)("h2",{id:"display-name-component"},(0,r.kt)("strong",{parentName:"h2"},"Display Name Component")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items can now override their display name with a localized 'value'. If a value is not supplied the component will stay with its default name. If the value supplied is not in the localization file the display name will be the value string")),(0,r.kt)("h2",{id:"item-parsing"},(0,r.kt)("strong",{parentName:"h2"},"Item Parsing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example 1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"any","_","tag functionality added to several actor components. In addition to representing items as item names in json they can now be represented as a set of tags")),(0,r.kt)("li",{parentName:"ul"},'"item": {"any',"_",'tag": "food"}'),(0,r.kt)("li",{parentName:"ul"},'"item": {"any',"_",'tag": ',"[",'"food", "wood"',"]","}"),(0,r.kt)("li",{parentName:"ul"},'"bribe',"_",'items": ',"[",'"emerald", {"any',"_",'tag": "stone"}',"]"),(0,r.kt)("li",{parentName:"ul"},"minecraft:ageable feed","_","items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:breedable breed","_","items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:bribeable bribe","_","items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:giveable items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:healable items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:tamemount feed","_","items and auto","_","reject","_","items can now use any","_","tag functionality"),(0,r.kt)("li",{parentName:"ul"},"minecraft:equippable accepted","_","items can now use any","_","tag functionality"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example 2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'looks for "apple" key in the vanilla localization for a string to use as the display text, which it will NOT find a value so the display name will just be "apple"')),(0,r.kt)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.kt)("br",{parentName:"li"}),'"value": "apple"',(0,r.kt)("br",{parentName:"li"}),"}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example 3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'looks for "item.apple.name" key in the vanilla localization for a string to use as the display text, which it will find a value as "Apple". Note "minecraft:" namespace not required.')),(0,r.kt)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.kt)("br",{parentName:"li"}),'"value": "item.apple.name"',(0,r.kt)("br",{parentName:"li"}),"}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example 4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'looks for a custom string supplied in the resource pack, if not found the display name will be "item.my',"_","namespace:My","_","Awesome","_",'Item.name".')),(0,r.kt)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.kt)("br",{parentName:"li"}),'"value": "item.my',"_","namespace:My","_","Awesome","_",'Item.name"',(0,r.kt)("br",{parentName:"li"}),"}")))))}m.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905),l=n(31792),o=n(85162),s=n(18386);const c={},u=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{rightElement:(0,i.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.kt)(o.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.kt)(r.Fragment,null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},93875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(61499),l=n(44805);const o={sidebar_position:99999907,title:"1.16.100.50",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},s="Minecraft Beta - 1.16.100.50 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/50",id:"official_changelog/preview/1.16/100/50",title:"1.16.100.50",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/100/50.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/50",permalink:"/docs/official_changelog/preview/1.16/100/50",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/50.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999907,frontMatter:{sidebar_position:99999907,title:"1.16.100.50",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.51",permalink:"/docs/official_changelog/preview/1.16/100/51"},next:{title:"1.16.30.57",permalink:"/docs/official_changelog/preview/1.16/30/57"}},u={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11610050-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.50 (Xbox One/Windows 10/Android)"),(0,r.kt)(i.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);