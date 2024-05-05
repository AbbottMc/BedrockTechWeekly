"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82427,91497,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>o});var n=a(96540),r=a(8045);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function o(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[o,s]=l({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=l({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,n.useEffect)((()=>(o(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>l});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=d({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=s??g;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==o&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},75129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.11/0/7/gameplay",id:"changelog_source/preview/1.11/0/7/gameplay",title:"gameplay",description:"20 March 2019",source:"@site/docs/changelog_source/preview/1.11/0/7/gameplay.mdx",sourceDirName:"changelog_source/preview/1.11/0/7",slug:"/changelog_source/preview/1.11/0/7/gameplay",permalink:"/docs/changelog_source/preview/1.11/0/7/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.11/0/7/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>20 March 2019</strong>",id:"20-march-2019",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"20-march-2019"},(0,r.yg)("strong",{parentName:"h2"},"20 March 2019")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions"),(0,r.yg)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.yg)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When choosing a skin from a skin pack, the selected skin will now roam between Bedrock devices using the same account")),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added sweet new animation popups when acquiring Bad Omen and Hero of the Village"),(0,r.yg)("li",{parentName:"ul"},"Right-clicking on a trade will now auto-trade items"),(0,r.yg)("li",{parentName:"ul"},"Revamped the crafting recipes for the cartography table, smithing table, and fletching table"),(0,r.yg)("li",{parentName:"ul"},"A message will now display if a raid expires after two in-game days"),(0,r.yg)("li",{parentName:"ul"},"Vindicators can now break doors during raids")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when stepping into a nether portal the same time as a phantom (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43115"},"MCPE-43115"),")"),(0,r.yg)("li",{parentName:"ul"},"An evocation fang without an owner no longer crashes the game when it tries to deal damage (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43042"},"MCPE-43042"),")"),(0,r.yg)("li",{parentName:"ul"},"Downloading missing resource packs when creating a new world no longer makes the game unresponsive"),(0,r.yg)("li",{parentName:"ul"},"Improved performance on the villager trading screen"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed a lot of accessibility features and text to speech issues"),(0,r.yg)("li",{parentName:"ul"},"Disabling the Multiplayer Game setting will now apply when the world is packaged as a world template"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed players falling through blocks at around 65K blocks on the X or Z axes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39299"},"MCPE-39299"),")"),(0,r.yg)("li",{parentName:"ul"},"Raid loading is no longer canceled if a player saves and quits"),(0,r.yg)("li",{parentName:"ul"},"Ringing a bell will no longer lock players out of trading with villagers"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Reduced the range of drowned attacking the nearest player"),(0,r.yg)("li",{parentName:"ul"},"Villagers heads no longer clip through walls while sleeping. Not sure how they felt. Hopefully better now (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42478"},"MCPE-42478"),")"),(0,r.yg)("li",{parentName:"ul"},"Adjusted some incorrect prices for villager trades"),(0,r.yg)("li",{parentName:"ul"},"Patrols can no longer stack up in the same spawn area"),(0,r.yg)("li",{parentName:"ul"},"Patrols will now avoid spawning near players if they are in a village"),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer lose their job site association with smokers and blast furnaces while they are smelting"),(0,r.yg)("li",{parentName:"ul"},"Ravagers now move faster when moving into a village during raids"),(0,r.yg)("li",{parentName:"ul"},"Ravagers can no longer deal damage to villagers and other mobs from behind walls"),(0,r.yg)("li",{parentName:"ul"},"Pillagers can now spawn inside the pillager outpost structure"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed particles not appearing while mining blocks"),(0,r.yg)("li",{parentName:"ul"},"Cobblestone slabs are no longer slabs and blocks at the same time (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42352"},"MCPE-42352"),")"),(0,r.yg)("li",{parentName:"ul"},"Lingering potions no longer cause bells to repeatedly ring"),(0,r.yg)("li",{parentName:"ul"},"Composters can no longer drop an endless amount of bone meal when pushed by pistons (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42429"},"MCPE-42429"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed some items having invisible bits when placed in item frames (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42415"},"MCPE-42415"),")"),(0,r.yg)("li",{parentName:"ul"},"Damaged tools can once again be smelted to recover gold/iron ingots (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42533"},"MCPE-42533"),")"),(0,r.yg)("li",{parentName:"ul"},"Cacti can once again be smelted into green dye (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42497"},"MCPE-42497"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updated the How to Play page on scaffolding to show the change to length of scaffolds"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add-Ons / Script Engine")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed inconsistent spawn eggs for villagers and zombie villagers for template worlds that require the original entities"),(0,r.yg)("li",{parentName:"ul"},"Fixed pivot point changes to Endermen made with Add-ons")))))}p.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>m});var n=a(58168),r=a(96540),l=a(15680),i=a(18228),o=a(19365),s=a(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m},h="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(h,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.A,{rightElement:(0,l.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.yg)(o.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.yg)(o.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.yg)(r.Fragment,null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},89554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),l=a(74874),i=a(75129);const o={sidebar_position:99999967,title:"1.11.0.7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.11"]},s="Minecraft Beta - 1.11.0.7 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.11/0/7",id:"official_changelog/preview/1.11/0/7",title:"1.11.0.7",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.11/0/7.mdx",sourceDirName:"official_changelog/preview/1.11/0",slug:"/official_changelog/preview/1.11/0/7",permalink:"/docs/official_changelog/preview/1.11/0/7",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.11/0/7.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.11",permalink:"/docs/tags/1-11"}],version:"current",sidebarPosition:99999967,frontMatter:{sidebar_position:99999967,title:"1.11.0.7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.11"]},sidebar:"changelogSidebar",previous:{title:"1.11.0.8",permalink:"/docs/official_changelog/preview/1.11/0/8"},next:{title:"1.11.0.5",permalink:"/docs/official_changelog/preview/1.11/0/5"}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11107-xbox-onewindows-10android"},"Minecraft Beta - 1.11.0.7 (Xbox One/Windows 10/Android)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);