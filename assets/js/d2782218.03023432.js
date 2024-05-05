"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34123,21032,40937,92211,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,p=d["".concat(l,".").concat(g)]||d[g]||h[g]||o;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>i});var r=n(96540),a=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function i(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,l]=o({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),h(s))}}),[c,u]=o({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),d=()=>{a.k.switchHidden(),t(a.k.isHidden())},h=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(i(),c(),t(a.k.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(58168),a=n(96540),o=n(20053),s=n(23104),i=n(56347),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=p({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??d;return g({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var f=n(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),g=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==i&&(h(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:g},s,{className:(0,o.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(b,(0,r.A)({},e,t)))}function k(e){const t=(0,f.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},36190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},s=void 0,i={unversionedId:"changelog_source/preview/1.20/30/25/gameplay",id:"changelog_source/preview/1.20/30/25/gameplay",title:"gameplay",description:"Posted: 31 August 2023",source:"@site/docs/changelog_source/preview/1.20/30/25/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/25",slug:"/changelog_source/preview/1.20/30/25/gameplay",permalink:"/docs/changelog_source/preview/1.20/30/25/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/25/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Experimental Trade Changes</strong>",id:"experimental-trade-changes",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," 31 August 2023"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,a.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/19058160220557",alt:"A Minecraft screenshot of a Villager in a cherry-wood boat, floating over a warm ocean biome, with a sunken chest boat below. There is a small jetty in the background."})),(0,a.yg)("p",null,"It\u2019s time for a new Minecraft Preview and Beta. Here\u2019s a list of what\u2019s new this week. Please continue to send us your ",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,a.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and have fun!"),(0,a.yg)("h2",{id:"experimental-trade-changes"},(0,a.yg)("strong",{parentName:"h2"},"Experimental Trade Changes")),(0,a.yg)("p",null,"Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change!\xa0 We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at\xa0",(0,a.yg)("a",{parentName:"p",href:"http://aka.ms/VillagerTradingFeedback"},"aka.ms/VillagerTradingFeedback"),"."),(0,a.yg)("h1",{id:"features-and-bug-fixes"},(0,a.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,a.yg)("h2",{id:"gameplay"},(0,a.yg)("strong",{parentName:"h2"},"Gameplay")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed an issue where the Boat wouldn't spawn on the water if the block underneath the water was highlighted")))}h.isMDXComponent=!0},61242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));n(57350);const o={},s=void 0,i={unversionedId:"changelog_source/preview/1.20/30/25/tech",id:"changelog_source/preview/1.20/30/25/tech",title:"tech",description:"Commands (EDU)",source:"@site/docs/changelog_source/preview/1.20/30/25/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/25",slug:"/changelog_source/preview/1.20/30/25/tech",permalink:"/docs/changelog_source/preview/1.20/30/25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/25/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Commands (EDU)</strong>",id:"commands-edu",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"commands-edu"},(0,a.yg)("strong",{parentName:"h2"},"Commands (EDU)")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a bug that prevented summon NPC commands from working if the users did not have worldbuilder permissions where the base version of the world was before 1.19.8.")))}h.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=n(58168),a=n(96540),o=n(15680),s=n(18228),i=n(19365),l=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},h={},g=[],p={toc:g},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{rightElement:(0,o.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(a.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(58168),a=n(96540),o=n(15680),s=n(18228),i=n(19365);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[],g={toc:h},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(a.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(s.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(a.Fragment,null,n.techSapi)))}m.isMDXComponent=!0},5663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(58168),a=(n(96540),n(15680)),o=n(74874),s=n(36190),i=n(61242);const l={sidebar_position:99999752,title:"1.20.30.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.30.25",u={unversionedId:"official_changelog/preview/1.20/30/25",id:"official_changelog/preview/1.20/30/25",title:"1.20.30.25",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/30/25.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/25",permalink:"/docs/official_changelog/preview/1.20/30/25",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/25.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999752,frontMatter:{sidebar_position:99999752,title:"1.20.30.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.40.20",permalink:"/docs/official_changelog/preview/1.20/40/20"},next:{title:"1.20.30.24",permalink:"/docs/official_changelog/preview/1.20/30/24"}},d={},h=[],g={toc:h},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-beta--preview---1203025"},"Minecraft Beta & Preview - 1.20.30.25"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,a.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);