"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35410,35654,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(96540),a=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const s=[];function o(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[o,l]=i({name:"keydown",listener(e){s.includes(e.code)||(s.push(e.code),p(s))}}),[c,u]=i({name:"keyup",listener(e){s.splice(s.indexOf(e.code),1)}}),d=()=>{a.k.switchHidden(),t(a.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(o(),c(),t(a.k.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function i(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(58168),a=n(96540),i=n(20053),s=n(23104),o=n(56347),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,c]=g({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=l??d;return m({value:e,tabValues:i})?e:null})();(0,a.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var f=n(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==o&&(p(t),l(r))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:m},s,{className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,i.A)("tabs-container",v.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(b,(0,r.A)({},e,t)))}function k(e){const t=(0,f.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},46455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={},s=void 0,o={unversionedId:"changelog_source/preview/1.20/20/23/gameplay",id:"changelog_source/preview/1.20/20/23/gameplay",title:"gameplay",description:"Posted: 26 July 2023",source:"@site/docs/changelog_source/preview/1.20/20/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/20/23",slug:"/changelog_source/preview/1.20/20/23/gameplay",permalink:"/docs/changelog_source/preview/1.20/20/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," 26 July 2023"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,a.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/17949345230861",alt:"A blaze and an enderman standing in a warped forest in the nether dimension."})),(0,a.yg)("p",null,"It\u2019s time for a new Minecraft Preview and Beta. This is a smaller update to improve your gameplay experience, with some important tweaks and fixes. Please continue to send us your ",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,a.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and have fun!"),(0,a.yg)("h1",{id:"features-and-bug-fixes"},(0,a.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue where the Blaze wouldn't get knocked back on hit and would have extended invincibility frames (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173287"},"MCPE-173287"),")")))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(58168),a=n(96540),i=n(15680),s=n(18228),o=n(19365),l=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],g={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(s.A,{rightElement:(0,i.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(o.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(o.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(a.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},81016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),i=n(74874),s=n(46455);const o={sidebar_position:99999757,title:"1.20.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},l="Minecraft Beta & Preview - 1.20.20.23",c={unversionedId:"official_changelog/preview/1.20/20/23",id:"official_changelog/preview/1.20/20/23",title:"1.20.20.23",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.20/20/23.mdx",sourceDirName:"official_changelog/preview/1.20/20",slug:"/official_changelog/preview/1.20/20/23",permalink:"/docs/official_changelog/preview/1.20/20/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/20/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999757,frontMatter:{sidebar_position:99999757,title:"1.20.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.20",permalink:"/docs/official_changelog/preview/1.20/30/20"},next:{title:"1.20.20.22",permalink:"/docs/official_changelog/preview/1.20/20/22"}},u={},d=[],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-beta--preview---1202023"},"Minecraft Beta & Preview - 1.20.20.23"),(0,a.yg)(i.default,{gameplayChangelog:(0,a.yg)(s.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);