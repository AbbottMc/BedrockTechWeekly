"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17659,8082,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(96540),r=n(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),d(o))}}),[c,u]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),p=()=>{r.k.switchHidden(),t(r.k.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,a.useEffect)((()=>(l(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>i});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(58168),r=n(96540),i=n(20053),o=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),y=(()=>{const e=s??p;return g({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function E(e){const t=(0,y.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},63576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},o=void 0,l={unversionedId:"changelog_source/pocket/Education_Edition_-_1.0.2/gameplay",id:"changelog_source/pocket/Education_Edition_-_1.0.2/gameplay",title:"gameplay",description:"For more information about Minecraft: Education Edition, please visit education.minecraft.net",source:"@site/docs/changelog_source/pocket/Education_Edition_-_1.0.2/gameplay.mdx",sourceDirName:"changelog_source/pocket/Education_Edition_-_1.0.2",slug:"/changelog_source/pocket/Education_Edition_-_1.0.2/gameplay",permalink:"/docs/changelog_source/pocket/Education_Edition_-_1.0.2/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Education_Edition_-_1.0.2/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For more information about Minecraft: Education Edition, please visit ",(0,r.yg)("a",{parentName:"p",href:"https://education.minecraft.net"},"education.minecraft.net")),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Magma blocks can now be found in the Nether")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Underground fossils to excavate made from Bone blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Nether Wart blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Red Nether Brick")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Stained Glass")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fireworks (with Elytra boost!)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Parrots")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Banners")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Armor Stands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Jukebox and music discs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Recipe Book")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Book & Quill")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Expanded portfolio editing with PhotoStorage sync")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ravines")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Coarse Dirt")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New world start options:")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Starting Map")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Bonus Chest")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Trust Players")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New game rules:")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Show Coordinates")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"TNT Explodes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Natural Regeneration")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added '/tickingarea' command to create areas that still update when no players are there")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Zombie Villager spawn egg")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Paper doll viewer")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Outline selection toggle")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In-game player names toggle")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"HUD opacity toggle")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sprint button mapping for controllers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Expanded world settings")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New loading screens with funny and helpful tips")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"How to Play screen")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added a free cursor to the inventory screen when navigating with a controller"))),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Students can now place their own chalkboards without the need for Worldbuild permissions"),(0,r.yg)("li",{parentName:"ul"},"NPCs now have the ability to run slash commands"),(0,r.yg)("li",{parentName:"ul"},"All players will now see items in the fixed inventory slot when joining the game"),(0,r.yg)("li",{parentName:"ul"},"Fixed chalkboards and signs not being visible unless aimed in a specific way"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when traveling to the Nether or the End for the first time"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when updating a world from 0.16 to 0.17"),(0,r.yg)("li",{parentName:"ul"},"Added a description in the Help menu for the '/me' command")))}d.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a=n(58168),r=n(96540),i=n(15680),o=n(18228),l=n(19365),s=n(8249);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},g=[],m={toc:g},h="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,i.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,i.yg)(r.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}y.isMDXComponent=!0},30940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),i=n(74874),o=n(63576);const l={sidebar_position:99999920,title:"Education Edition - 1.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="Education Edition - 1.0.2",c={unversionedId:"official_changelog/pocket/Education_Edition_-_1.0.2/README",id:"official_changelog/pocket/Education_Edition_-_1.0.2/README",title:"Education Edition - 1.0.2",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Education_Edition_-_1.0.2/README.mdx",sourceDirName:"official_changelog/pocket/Education_Edition_-_1.0.2",slug:"/official_changelog/pocket/Education_Edition_-_1.0.2/",permalink:"/docs/official_changelog/pocket/Education_Edition_-_1.0.2/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Education_Edition_-_1.0.2/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999920,frontMatter:{sidebar_position:99999920,title:"Education Edition - 1.0.2",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Education Edition - 1.0.1",permalink:"/docs/official_changelog/pocket/Education_Edition_-_1.0.1/"}},u={},p=[],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"education-edition---102"},"Education Edition - 1.0.2"),(0,r.yg)(i.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);