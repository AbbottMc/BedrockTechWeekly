"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[38882,95107,14440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>s});var a=n(67294),r=n(62706);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function s(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),m(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,a.useEffect)((()=>(s(),c(),t(r.p.isHidden()),()=>{l(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>i});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var f=n(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(m(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},99003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"changelog_source/preview/1.13/0/18/gameplay",id:"changelog_source/preview/1.13/0/18/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.13/0/18/gameplay.mdx",sourceDirName:"changelog_source/preview/1.13/0/18",slug:"/changelog_source/preview/1.13/0/18/gameplay",permalink:"/docs/changelog_source/preview/1.13/0/18/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.13/0/18/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when accepting the storage permission on Android\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when scrolling through languages in the Settings (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52009"},"MCPE-52009"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using the Character Creator on Android (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52474"},"MCPE-52474"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The 'Beam Me Up' achievement can once again be unlocked\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed players falling from the sky after riding an entity in Creative mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52957"},"MCPE-52957"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed players spawning in unexpected locations after roaming a world save to a different Xbox One\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Zombies once again spawn in caves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52743"},"MCPE-52743"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Carpets once again appear on the Llama's inventory screen\xa0"),(0,r.kt)("li",{parentName:"ul"},"Crossbows no longer fire immediately after loading (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52179"},"MCPE-52179"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the ability to discard damaged tools from the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52465"},"MCPE-52465"),")"),(0,r.kt)("li",{parentName:"ul"},"Compasses and clocks once again animate on the hotbar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52901"},"MCPE-52901"),")"),(0,r.kt)("li",{parentName:"ul"},"Armor can once again be equipped directly from the Creative inventory on touch screens (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52413"},"MCPE-52413"),")"),(0,r.kt)("li",{parentName:"ul"},"Frost Walker boots once again freeze water\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The breaking animation once again appears on chests"),(0,r.kt)("li",{parentName:"ul"},"Fixed the player's head looking wrongly when sneaking (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51181"},"MCPE-51181"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the player's arms not animating when swimming (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49749"},"MCPE-49749"),")"),(0,r.kt)("li",{parentName:"ul"},"Mob heads once again fit properly on players"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Crafting Table icon not showing its grid on top in certain GUI scales"),(0,r.kt)("li",{parentName:"ul"},"Fixed several missing and broken textures in the inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52442"},"MCPE-52442"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed some skins appearing with a white cape (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52005"},"MCPE-52005"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed armor not respecting extra layers on skins"),(0,r.kt)("li",{parentName:"ul"},"Fixed destroyed blocks leaving shadows\xa0\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Various fixes and loading time improvements to the Character Creator interface"),(0,r.kt)("li",{parentName:"ul"},"External servers once again appear on the Servers screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed the inventory screens of some blocks not appearing on the first attempt after the block's state has changed, like Hoppers and Dispensers"),(0,r.kt)("li",{parentName:"ul"},"The Profile screen can now be accessed when playing split-screen"),(0,r.kt)("li",{parentName:"ul"},'The "Read More" button once again appears next to packs on the Global Resource menu\xa0'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The '/summon 'command once again properly names entities, if defined\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed spawn eggs not appearing in the Creative inventory for custom mobs"),(0,r.kt)("li",{parentName:"ul"},"Item held by scaled mobs are once again sized appropriately"),(0,r.kt)("li",{parentName:"ul"},"Using 'format","_","version' 1.2.0 no longer breaks the 'on","_","damage' component\xa0"),(0,r.kt)("li",{parentName:"ul"},"Triggering custom animations for entities is once again functional"),(0,r.kt)("li",{parentName:"ul"},"Using the 'transformation' component on 'xp","_","orb' once again removes the source entity\xa0"),(0,r.kt)("li",{parentName:"ul"},"The 'spawn","_","entity' component is now executed when an entity is being ridden"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Ender Dragon not appearing correctly in some Add-On packs"),(0,r.kt)("li",{parentName:"ul"},"Errors are once again listed on the pack manifest validation screen")))))}p.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905),o=n(31792),s=n(85162),l=n(18386);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],h={toc:d};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{rightElement:(0,i.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.kt)(r.Fragment,null,(0,i.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},7901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(61499),o=n(99003);const s={sidebar_position:99999944,title:"1.13.0.18",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},l="Minecraft Beta - 1.13.0.18 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.13/0/18",id:"official_changelog/preview/1.13/0/18",title:"1.13.0.18",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.13/0/18.mdx",sourceDirName:"official_changelog/preview/1.13/0",slug:"/official_changelog/preview/1.13/0/18",permalink:"/docs/official_changelog/preview/1.13/0/18",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.13/0/18.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.13",permalink:"/docs/tags/1-13"}],version:"current",sidebarPosition:99999944,frontMatter:{sidebar_position:99999944,title:"1.13.0.18",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},sidebar:"changelogSidebar",previous:{title:"1.14.0.1",permalink:"/docs/official_changelog/preview/1.14/0/1"},next:{title:"1.13.0.17",permalink:"/docs/official_changelog/preview/1.13/0/17"}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---113018-xbox-onewindows-10android"},"Minecraft Beta - 1.13.0.18 (Xbox One/Windows 10/Android)"),(0,r.kt)(i.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);