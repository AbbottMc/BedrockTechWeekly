"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88822,83676,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>s});var a=n(96540),r=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function s(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),p(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),d=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,a.useEffect)((()=>(s(),c(),t(r.k.isHidden()),()=>{l(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),r=n(96540),i=n(20053),o=n(23104),s=n(56347),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??d;return h({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var g=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:h},o,{className:(0,i.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,i.A)("tabs-container",b.tabList)},r.createElement(y,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,g.A)();return r.createElement(_,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},28592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},o=void 0,s={unversionedId:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay",id:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here!",source:"@site/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5",slug:"/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay",permalink:"/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Note:</strong> Please remember that the game is not backwards compatible from this patch and deleting this patch on your system after it is applied will make all saves created with this patch unusable.\xa0If you accidentally deleted the patch, downloading and applying the patch again will enable your save data to become usable.",id:"note-please-remember-that-the-game-is-not-backwards-compatible-from-this-patch-and-deleting-this-patch-on-your-system-after-it-is-applied-will-make-all-saves-created-with-this-patch-unusableif-you-accidentally-deleted-the-patch-downloading-and-applying-the-patch-again-will-enable-your-save-data-to-become-usable",level:2},{value:"<strong>New Features</strong>",id:"new-features",level:2},{value:"<strong>Bug Fixes</strong>",id:"bug-fixes",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you find any bugs, be sure to ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com"},"report them here!"),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("a",{parentName:"p",href:"http://feedback.minecraft.net"},"Click here")," to give us feedback & tell us what you think about the update.\xa0"),(0,r.yg)("h2",{id:"note-please-remember-that-the-game-is-not-backwards-compatible-from-this-patch-and-deleting-this-patch-on-your-system-after-it-is-applied-will-make-all-saves-created-with-this-patch-unusableif-you-accidentally-deleted-the-patch-downloading-and-applying-the-patch-again-will-enable-your-save-data-to-become-usable"},(0,r.yg)("strong",{parentName:"h2"},"Note:")," Please remember that the game is not backwards compatible from this patch and deleting this patch on your system after it is applied will make all saves created with this patch unusable.\xa0If you accidentally deleted the patch, downloading and applying the patch again will enable your save data to become usable."),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Super Mario Mash-up pack"),(0,r.yg)("li",{parentName:"ul"},"Cartoon and Fantasy texture packs are available for purchase"),(0,r.yg)("li",{parentName:"ul"},"Campfire Tales, City Folk and Town Folk Skin packs are available for purchase")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved stability and performance"),(0,r.yg)("li",{parentName:"ul"},"Numerous bug fixes from previous builds")))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(58168),r=n(96540),i=n(15680),o=n(18228),s=n(19365),l=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},h=[],m={toc:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(f,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(l.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(s.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(s.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(r.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},33256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),i=n(74874),o=n(28592);const s={sidebar_position:99999926,title:"Minecraft: New Nintendo 3DS Edition - 1.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},l="Minecraft: New Nintendo 3DS Edition - 1.5",c={unversionedId:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/README",id:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/README",title:"Minecraft: New Nintendo 3DS Edition - 1.5",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5",slug:"/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.5/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999926,frontMatter:{sidebar_position:99999926,title:"Minecraft: New Nintendo 3DS Edition - 1.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft: New Nintendo 3DS Edition - 1.4",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.4/"},next:{title:"Minecraft: New Nintendo 3DS Edition - 1.6",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.6/"}},u={},d=[],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(h,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-new-nintendo-3ds-edition---15"},"Minecraft: New Nintendo 3DS Edition - 1.5"),(0,r.yg)(i.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);