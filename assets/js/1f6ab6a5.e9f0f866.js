"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40492,76745,29933,48189,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>s});var r=n(67294),a=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),m(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),d=()=>{a.p.switchHidden(),t(a.p.isHidden())},m=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(s(),c(),t(a.p.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class r{constructor(){this.events={},this._maxListeners=r.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}r.defaultMaxListeners=64;const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??d;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const v="tabList_TRJ7",b="tabItem_hGfb";function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==s&&(m(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(3980);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},5626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.17/20/21/gameplay",id:"changelog_source/preview/1.17/20/21/gameplay",title:"gameplay",description:"Posted: 30 June 2021",source:"@site/docs/changelog_source/preview/1.17/20/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/gameplay",permalink:"/docs/changelog_source/preview/1.17/20/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Features and Bug Fixes</strong>\xa0",id:"features-and-bug-fixes",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Structure Blocks</strong>\xa0",id:"structure-blocks",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Posted:")," 30 June 2021"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,a.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,a.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,a.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,a.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,a.kt)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4404090082061/crystal_16x9.jpg",alt:"crystal_16x9.jpg"})),(0,a.kt)("h2",{id:"features-and-bug-fixes"},(0,a.kt)("strong",{parentName:"h2"},"Features and Bug Fixes"),"\xa0"),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a crash that could occur if a structure was placed with a command in an unloaded area,\xa0and that structure was deleted \xa0")),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed text from signs drawing on maps when\xa0RTX\xa0is on \xa0")),(0,a.kt)("h2",{id:"items"},(0,a.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clock and Compass items no longer function in the Recipe Book (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36354"},"MCPE-36354"),") \xa0")),(0,a.kt)("h2",{id:"structure-blocks"},(0,a.kt)("strong",{parentName:"h2"},"Structure Blocks"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added Corner mode to Structure Blocks, which is used with Save mode's\xa0Detect button to automatically set the area you want to save \xa0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fixed tamed\xa0Wolves being transparent\xa0on the\xa0Structure\xa0Block\xa0screen"))))}d.isMDXComponent=!0},51487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(47153);const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.17/20/21/tech",id:"changelog_source/preview/1.17/20/21/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/docs/changelog_source/preview/1.17/20/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/tech",permalink:"/docs/changelog_source/preview/1.17/20/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gametestframework-experimental"},(0,a.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest is facing based on its structure rotation\xa0")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms \xa0"),(0,a.kt)("li",{parentName:"ul"},"Commands or structures being placed in a loaded area that is only partially loaded by a ticking area will now be considered loaded if the required chunks are loaded")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=n(87462),a=n(67294),o=n(3905),i=n(31792),s=n(85162),l=n(18386);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],h={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(a.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905),i=n(31792),s=n(85162);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],p={toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==n.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.kt)(s.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.kt)(a.Fragment,null,n.techSapi)))}h.isMDXComponent=!0},3876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(61499),i=n(5626),s=n(51487);const l={sidebar_position:99999859,title:"1.17.20.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},c="Minecraft Beta - 1.17.20.21 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/20/21",id:"official_changelog/preview/1.17/20/21",title:"1.17.20.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.17/20/21.mdx",sourceDirName:"official_changelog/preview/1.17/20",slug:"/official_changelog/preview/1.17/20/21",permalink:"/docs/official_changelog/preview/1.17/20/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/20/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.17",permalink:"/docs/tags/1-17"}],version:"current",sidebarPosition:99999859,frontMatter:{sidebar_position:99999859,title:"1.17.20.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.20.22",permalink:"/docs/official_changelog/preview/1.17/20/22"},next:{title:"1.17.20.20",permalink:"/docs/official_changelog/preview/1.17/20/"}},d={},m=[],p={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraft-beta---1172021-xbox-onewindows-10android"},"Minecraft Beta - 1.17.20.21 (Xbox One/Windows 10/Android)"),(0,a.kt)(o.default,{gameplayChangelog:(0,a.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,a.kt)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);