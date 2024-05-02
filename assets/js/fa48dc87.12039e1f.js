"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56656,91373,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(i,".").concat(p)]||d[p]||f[p]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>l});var a=n(67294),r=n(62706);function s(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,i]=s({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),f(o))}}),[c,u]=s({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),d=()=>{r.p.switchHidden(),t(r.p.isHidden())},f=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,a.useEffect)((()=>(l(),c(),t(r.p.isHidden()),()=>{i(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>s});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function s(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),l=n(16550),i=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=f(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=h({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??d;return p({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var g=n(72389);const b="tabList_TRJ7",v="tabItem_hGfb";function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(f(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},o,{className:(0,s.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=m(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},91168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},o=void 0,l={unversionedId:"changelog_source/stable/1.6/1/gameplay",id:"changelog_source/stable/1.6/1/gameplay",title:"gameplay",description:"Bedrock Dedicated Server Alpha Test:",source:"@site/docs/changelog_source/stable/1.6/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.6/1",slug:"/changelog_source/stable/1.6/1/gameplay",permalink:"/docs/changelog_source/stable/1.6/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.6/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Bedrock Dedicated Server Alpha Test:</strong>\xa0",id:"bedrock-dedicated-server-alpha-test",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Add-Ons:</strong>",id:"add-ons",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bedrock-dedicated-server-alpha-test"},(0,r.kt)("strong",{parentName:"h2"},"Bedrock Dedicated Server Alpha Test:"),"\xa0"),(0,r.kt)("p",null,"We are releasing an early access alpha of the dedicated server for Minecraft. Download the server binaries at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBDS"},"aka.ms/MinecraftBDS")," for either Windows or Linux and go host your own servers and play with your friends."),(0,r.kt)("p",null,"Make sure to report any issues to ",(0,r.kt)("a",{parentName:"p",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbugs.mojang.com%2Fprojects%2FBDS&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281654949&sdata=mC0Dvr5h%2BuQJTPTdbt1ihzPdh7jPkenUgRS4l6zafx4%3D&reserved=0"},"bugs.mojang.com/projects/BDS")," and please give us feedback on ",(0,r.kt)("a",{parentName:"p",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffeedback.minecraft.net&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281654949&sdata=NQWN888KojJZVfUdNg7FubQ2fQAzwsdF8LiBnJFGVT8%3D&reserved=0"},"feedback.minecraft.net")," or our official Discord at ",(0,r.kt)("a",{parentName:"p",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdiscord.gg%2FMinecraft&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281664966&sdata=YeLUUDHOJTgAyYfFhXbwaZ054KiK3Aj58Q1YkrHrWJ0%3D&reserved=0"},"discord.gg/Minecraft")," and chat in the #dedicated-server channel.  "),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a button to clear login credentials if a Microsoft Account sign-in fails on Nintendo Switch  ")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Phantoms now definitely swoop down and attack people so watch out! (",(0,r.kt)("a",{parentName:"li",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbugs.mojang.com%2Fbrowse%2FMCPE-36673&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281674970&sdata=CTCA2hNpMOMCnm4OJuJvBELa17d4CRvJXLhrQzk2s7A%3D&reserved=0"},"MCPE-36673"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed blocks often disappearing after being placed or reappearing after being destroyed (",(0,r.kt)("a",{parentName:"li",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbugs.mojang.com%2Fbrowse%2FMCPE-31596&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281674970&sdata=lryzUt9RLess6mRqJ%2B%2B1yEMw6N8NGmNv7v1m2rVxjWI%3D&reserved=0"},"MCPE-31596"),")"),(0,r.kt)("li",{parentName:"ul"},"Increased performance on iOS devices"),(0,r.kt)("li",{parentName:"ul"},"Several fixes to reduce lag in multiplayer games and Realms  ")),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated templates for 1.6.1 with new assets and behaviors can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"https://minecraft.net/addons"},"minecraft.net/addons"),", including fixes to the Phantom's swooping behavior  ")),(0,r.kt)("p",null,"If you missed a previous update, check out ",(0,r.kt)("a",{parentName:"p",href:"https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Faka.ms%2FMCChangelogs&data=02%7C01%7C%7Cae961f70845741f314f108d6176f1a8b%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636722163281684978&sdata=4vUICl3zgLT4wHUXLCeaKrBYaIOUE2Ej8RaF%2FaxfCKg%3D&reserved=0"},"aka.ms/MCChangelogs")," for a full list of updates."))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(67294),s=n(3905),o=n(31792),l=n(85162),i=n(18386);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},f={},p=[],h={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{rightElement:(0,s.kt)(i.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,s.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,s.kt)(r.Fragment,null,(0,s.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}m.isMDXComponent=!0},48826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(61499),o=n(91168);const l={sidebar_position:99999967,title:"1.6.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.6"]},i="Minecraft - 1.6.1 (Bedrock)",c={unversionedId:"official_changelog/stable/1.6/1",id:"official_changelog/stable/1.6/1",title:"1.6.1",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.6/1.mdx",sourceDirName:"official_changelog/stable/1.6",slug:"/official_changelog/stable/1.6/1",permalink:"/docs/official_changelog/stable/1.6/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.6/1.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.6",permalink:"/docs/tags/1-6"}],version:"current",sidebarPosition:99999967,frontMatter:{sidebar_position:99999967,title:"1.6.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.6"]},sidebar:"changelogSidebar",previous:{title:"1.6.2",permalink:"/docs/official_changelog/stable/1.6/2"},next:{title:"1.6.0",permalink:"/docs/official_changelog/stable/1.6/0"}},u={},d=[],f={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---161-bedrock"},"Minecraft - 1.6.1 (Bedrock)"),(0,r.kt)(s.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}p.isMDXComponent=!0}}]);