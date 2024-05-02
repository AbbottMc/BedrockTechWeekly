"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78042,48715,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>i});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),m(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),p=()=>{r.p.switchHidden(),t(r.p.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||p()};return(0,a.useEffect)((()=>(i(),c(),t(r.p.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:p},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},34884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/210/51/gameplay",id:"changelog_source/preview/1.16/210/51/gameplay",title:"gameplay",description:"Posted: 9 December, 2020",source:"@site/docs/changelog_source/preview/1.16/210/51/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/210/51",slug:"/changelog_source/preview/1.16/210/51/gameplay",permalink:"/docs/changelog_source/preview/1.16/210/51/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/210/51/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Vanilla Parity**</strong>:**\xa0",id:"vanilla-parity",level:2},{value:"<strong>Experimental</strong>\xa0<strong>Caves</strong>\xa0<strong>and</strong>\xa0<strong>Cliffs</strong>\xa0",id:"experimentalcavesandcliffs",level:2},{value:"<strong>General</strong>\xa0",id:"general",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 9 December, 2020"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360079222371/img_518.JPG",alt:"img_518.JPG"})),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity**"),":**\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pouring water on Top Snow no longer creates snowballs \xa0"),(0,r.kt)("li",{parentName:"ul"},"Using\xa0bone\xa0meal in\xa0warm\xa0ocean biomes now\xa0only\xa0generates\xa0sea\xa0grass,\xa0coral,\xa0and\xa0coral\xa0fans\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100085"},"MCPE-100085"),") \xa0")),(0,r.kt)("h2",{id:"experimentalcavesandcliffs"},(0,r.kt)("strong",{parentName:"h2"},"Experimental"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"Caves"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"and"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"Cliffs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Goats should no longer set ram attack position to unreachable block behind obstacle \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats no longer have problems moving up full blocks when tempted or to reach breed partner after 'nearest","_","attackable","_","target' state is triggered \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat no longer jumps\xa0onto magma blocks\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats can now jump to several non-full blocks like\xa0slabs and\xa0stairs \xa0"),(0,r.kt)("li",{parentName:"ul"},"Game no longer crash after\xa0goats are killed by\xa0shulkers\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats no longer have problems pathing to each other to breed \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats\xa0on leads\xa0now correctly follow the\xa0player\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104270"},"MCPE-104270"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats now only spawn one baby at a time \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats\xa0no longer attack\xa0armor\xa0stands\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104159"},"MCPE-104159"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Creepers\xa0no longer attack back after being rammed by a\xa0goat \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats no longer overshoot or undershoot their jumps \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats can now always correctly be attacked after jumping \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat no longer perform radically high jumps \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats no longer miss motionless players when they perform their ram attack \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats now only drop 2 horns each, and the number of horns left to drop is represented on the model \xa0"),(0,r.kt)("li",{parentName:"ul"},"Baby\xa0goats\xa0knockback their target a shorter distance \xa0"),(0,r.kt)("li",{parentName:"ul"},"Ram knockback\xa0distance is\xa0dependent\xa0on speed \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat now knockback the first target it intersects \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat now tries to retake target that moves from its ram\xa0attack for a short amount of time \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat now flip their knockback target slightly higher in the air \xa0"),(0,r.kt)("li",{parentName:"ul"},"Ram attack check the path based on the height of the mob that is ramming \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat no longer jumps from honey \xa0"),(0,r.kt)("li",{parentName:"ul"},"Baby goat does not jump as far as adults \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat should only very rarely jump to flat planes \xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat no longer jump if they are moved from their starting position.\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat spawn egg\xa0colors\xa0have been updated\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goat model has been updated to have correct rotation for its head.\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats now have a minimum ram distance and now tries to find a ram-position in between the minimum ram distance and the maximum ram distance,\xa0preferring\xa0further distances\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats can now go through non-solid blocks (like grass and flowers) when they ram\xa0"),(0,r.kt)("li",{parentName:"ul"},"The shield now grants partial knockback protection from the ram attack\xa0"),(0,r.kt)("li",{parentName:"ul"},"Powder snow blocks now show the block breaking animation when being mined \xa0"),(0,r.kt)("li",{parentName:"ul"},"Powder snow block are no longer transparent when looked at through clouds \xa0")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated outdated loading screen tips\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98977"},"MCPE-98977"),",\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102293"},"MCPE-102293"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mining a Crimson Hyphae with Silk Touch now returns a placeable block \xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where parrots could fly upwards indefinitely\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Zombie villagers spawned from zombie spawners on Marketplace worlds that were created after version 1.11 now correctly spawn as V2 zombie villagers. When cured, they will now correctly turn into V2 villagers \xa0"),(0,r.kt)("li",{parentName:"ul"},'Horses, Donkeys, Mules, Skeleton Horses, and Zombie Horses can now properly be given custom names, and identified using their respective "runtime',"_",'identifier" \xa0')),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with maps rendering over transparent objects when attached to item frames in RTX worlds"),(0,r.kt)("li",{parentName:"ul"},"Reduced ghosting of fish when viewed through the water with DLSS enabled")))}p.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905),l=n(31792),i=n(85162),s=n(18386);const c={},u=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],h={toc:d};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},77640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),l=n(34884);const i={sidebar_position:99999886,title:"1.16.210.51",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},s="Minecraft Beta - 1.16.210.51 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/210/51",id:"official_changelog/preview/1.16/210/51",title:"1.16.210.51",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.16/210/51.mdx",sourceDirName:"official_changelog/preview/1.16/210",slug:"/official_changelog/preview/1.16/210/51",permalink:"/docs/official_changelog/preview/1.16/210/51",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/210/51.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.16",permalink:"/docs/tags/1-16"}],version:"current",sidebarPosition:99999886,frontMatter:{sidebar_position:99999886,title:"1.16.210.51",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.210.53",permalink:"/docs/official_changelog/preview/1.16/210/53"},next:{title:"1.16.210.50",permalink:"/docs/official_changelog/preview/1.16/210/50"}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11621051-xbox-onewindows-10android"},"Minecraft Beta - 1.16.210.51 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);