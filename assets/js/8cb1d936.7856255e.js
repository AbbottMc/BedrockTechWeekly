"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88061,64089,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>s});var r=n(96540),a=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function s(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),p(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),d=()=>{a.k.switchHidden(),t(a.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(s(),c(),t(a.k.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function i(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(58168),a=n(96540),i=n(20053),o=n(23104),s=n(56347),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=l??d;return g({value:e,tabValues:i})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var f=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),g=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:g},o,{className:(0,i.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,i.A)("tabs-container",y.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function E(e){const t=(0,f.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},31702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={},o=void 0,s={unversionedId:"changelog_source/preview/1.16/0/58/gameplay",id:"changelog_source/preview/1.16/0/58/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.16/0/58/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/0/58",slug:"/changelog_source/preview/1.16/0/58/gameplay",permalink:"/docs/changelog_source/preview/1.16/0/58/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/0/58/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Crashes and Stability</strong>",id:"crashes-and-stability",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Scripting and Add-ons Fixes and Changes</strong>",id:"scripting-and-add-ons-fixes-and-changes",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,a.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,a.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,a.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTE:"),"\xa0This beta is a work in progress version of the full Nether Update. Some features seen in Java Edition snapshots may not yet be present."),(0,a.yg)("h1",{id:"fixes"},"Fixes"),(0,a.yg)("h2",{id:"crashes-and-stability"},(0,a.yg)("strong",{parentName:"h2"},"Crashes and Stability")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when checking for Marketplace content updates\xa0"),(0,a.yg)("li",{parentName:"ul"},"Android users will no longer crash when opening the Marketplace (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-68973"},"MCPE-68973"),")")),(0,a.yg)("h2",{id:"gameplay"},(0,a.yg)("strong",{parentName:"h2"},"Gameplay")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Potions in cauldrons can now be correctly removed"),(0,a.yg)("li",{parentName:"ul"},"Fishing rod can now be used repeatedly when holding the interact button\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63090"},"MCPE-63090"),")\xa0")),(0,a.yg)("h2",{id:"user-interface"},(0,a.yg)("strong",{parentName:"h2"},"User Interface")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Double tapping items on touch screen devices now groups those items together correctly again\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66458"},"MCPE-66458"),")"),(0,a.yg)("li",{parentName:"ul"},"Using the 'craft all' function with a controller once again works correctly (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65747"},"MCPE-65747"),")\xa0"),(0,a.yg)("li",{parentName:"ul"},"Searching in the inventory will now update the results correctly (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69039"},"MCPE-69039"),")\xa0")),(0,a.yg)("h2",{id:"scripting-and-add-ons-fixes-and-changes"},(0,a.yg)("strong",{parentName:"h2"},"Scripting and Add-ons Fixes and Changes")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"pre","_","effect","_","script no longer runs when an entity is despawning with minecraft:despawn")))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=n(58168),a=n(96540),i=n(15680),o=n(18228),s=n(19365),l=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},g=[],h={toc:g},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(s.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(s.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(a.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},19339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),i=n(74874),o=n(31702);const s={sidebar_position:99999920,title:"1.16.0.58",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},l="Minecraft Beta - 1.16.0.58 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/0/58",id:"official_changelog/preview/1.16/0/58",title:"1.16.0.58",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/0/58.mdx",sourceDirName:"official_changelog/preview/1.16/0",slug:"/official_changelog/preview/1.16/0/58",permalink:"/docs/official_changelog/preview/1.16/0/58",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/0/58.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999920,frontMatter:{sidebar_position:99999920,title:"1.16.0.58",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.0.59",permalink:"/docs/official_changelog/preview/1.16/0/59"},next:{title:"1.16.0.57",permalink:"/docs/official_changelog/preview/1.16/0/57"}},u={},d=[],p={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-beta---116058-xbox-onewindows-10android"},"Minecraft Beta - 1.16.0.58 (Xbox One/Windows 10/Android)"),(0,a.yg)(i.default,{gameplayChangelog:(0,a.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);