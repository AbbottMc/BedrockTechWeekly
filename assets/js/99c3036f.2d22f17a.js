"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[600,27603,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(i,".").concat(m)]||g[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[g]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>l});var r=n(96540),a=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function l(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,i]=o({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),p(s))}}),[c,u]=o({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),g=()=>{a.k.switchHidden(),t(a.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||g()};return(0,r.useEffect)((()=>(l(),c(),t(a.k.isHidden()),()=>{i(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(58168),a=n(96540),o=n(20053),s=n(23104),l=n(56347),i=n(57485),c=n(31682),u=n(89466);function g(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=d({queryString:n,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=i??g;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const t=e.currentTarget,n=g.indexOf(t),r=c[n].value;r!==l&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function N(e){const t=(0,f.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},10656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},s=void 0,l={unversionedId:"changelog_source/stable/1.14/30/gameplay",id:"changelog_source/stable/1.14/30/gameplay",title:"gameplay",description:"Posted:\xa0February 11, 2020",source:"@site/docs/changelog_source/stable/1.14/30/gameplay.mdx",sourceDirName:"changelog_source/stable/1.14/30",slug:"/changelog_source/stable/1.14/30/gameplay",permalink:"/docs/changelog_source/stable/1.14/30/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.14/30/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Realms Fixes:</strong>",id:"realms-fixes",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:"),"\xa0February 11, 2020"),(0,a.yg)("p",null,"Our developers have been hard at work getting top issues addressed for this hotfix. Several of these were reported by players, so keep those reports coming at ",(0,a.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"! This update is still multiplayer compatible with devices running any version of 1.14."),(0,a.yg)("h2",{id:"fixes"},(0,a.yg)("strong",{parentName:"h2"},"Fixes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Cr**"),"ashes / Performance**"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during\xa0gameplay"),(0,a.yg)("li",{parentName:"ul"},"256x\xa0resolution\xa0packs are now restricted on Xbox One to prevent crashing",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"This is a temporary solution until we have the crashing issue resolved"))),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur in certain worlds (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59756"},"MCPE-59756"),")"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"General")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Split-screen will now display a message to join when the main controller is disconnected"),(0,a.yg)("li",{parentName:"ul"},"Realms can no longer be purchased if not logged into Xbox Live"),(0,a.yg)("li",{parentName:"ul"},"Players that are not linked to a Nintendo account on Switch are once again able to edit characters"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue where joinable friends on Nintendo Switch were still visible after the world has been closed"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Gameplay")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Auto-jump will no longer trigger unexpectedly when trying to walk through\xa0open\xa0doors (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52213"},"MCPE-52213"),")",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Further\xa0fixes\xa0will be\xa0made\xa0in the future to allow auto-jump to work more consistently, for example,\xa0when trying to jump up\xa0one block\xa0through an open door"))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Blocks")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Restored kelp growth to its proper, faster rate (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57330"},"MCPE-57330"),")"),(0,a.yg)("li",{parentName:"ul"},"Bamboo in Flower Pots are no longer empty after converting a world from Editions"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Items")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Crafting multiple Honey Blocks now returns the correct amount of empty glass bottles on a 2x2 grid (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58579"},"MCPE-58579"),")"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"User Interface")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The 'Sign In' button is now scaled properly on all platforms"),(0,a.yg)("li",{parentName:"ul"},"Fixed placeholder text appearing on the pause menu when hosting a game without an internet connection"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Add-Ons")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Entities no longer stop moving when the 'circle","_","around","_","anchor' behavior is added via a component group added by an event and/or there was a block close to their hitbox")))),(0,a.yg)("h2",{id:"realms-fixes"},(0,a.yg)("strong",{parentName:"h2"},"Realms Fixes:")),(0,a.yg)("p",null,"We released an update to Realms on February 25th to fix several issues that players encountered. No game update needed!"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when playing on Realms (278539)"),(0,a.yg)("li",{parentName:"ul"},"Fixed chunks regenerating to their original state (289459 / ",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2619"},"REALMS-2619"),", 289087 / ",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59490"},"MCPE-59490"),")"),(0,a.yg)("li",{parentName:"ul"},"Fixed issues with Realms crashing and rolling back progress (238225 / ",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2393"},"REALMS-2393"),")"),(0,a.yg)("li",{parentName:"ul"},"Fixed some world chunks failing to load in larger worlds (132620 / ",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58514"},"MCPE-58514"),")"),(0,a.yg)("li",{parentName:"ul"},"Fixed issues with Realms not saving backups (232416 / ",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-2142"},"REALMS-2142"),")")))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>m});var r=n(58168),a=n(96540),o=n(15680),s=n(18228),l=n(19365),i=n(8249);const c={},u=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{rightElement:(0,o.yg)(i.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(a.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},27437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=n(58168),a=(n(96540),n(15680)),o=n(74874),s=n(10656);const l={sidebar_position:99999943,title:"1.14.30",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.14"]},i="Minecraft - 1.14.30 (Bedrock)",c={unversionedId:"official_changelog/stable/1.14/30",id:"official_changelog/stable/1.14/30",title:"1.14.30",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.14/30.mdx",sourceDirName:"official_changelog/stable/1.14",slug:"/official_changelog/stable/1.14/30",permalink:"/docs/official_changelog/stable/1.14/30",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.14/30.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.14",permalink:"/docs/tags/1-14"}],version:"current",sidebarPosition:99999943,frontMatter:{sidebar_position:99999943,title:"1.14.30",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.14"]},sidebar:"changelogSidebar",previous:{title:"1.14.41",permalink:"/docs/official_changelog/stable/1.14/41"},next:{title:"1.14.20",permalink:"/docs/official_changelog/stable/1.14/20"}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft---11430-bedrock"},"Minecraft - 1.14.30 (Bedrock)"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);