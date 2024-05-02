"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[76767,32253,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>s});var r=n(67294),a=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function s(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[s,l]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),d=()=>{a.p.switchHidden(),t(a.p.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(s(),c(),t(a.p.isHidden()),()=>{l(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class r{constructor(){this.events={},this._maxListeners=r.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}r.defaultMaxListeners=64;const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(w,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(3980);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},96878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",title:"gameplay",description:"We are celebrating the one year anniversary of the release of Minecraft: Windows 10 Edition Beta with an update (and new skin pack) for that edition as well as Pocket Edition and Gear VR Edition.",source:"@site/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",permalink:"/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks-1",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes-1",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are celebrating the one year anniversary of the release of Minecraft: Windows 10 Edition Beta with an update (and new skin pack) for that edition as well as Pocket Edition and Gear VR Edition."),(0,a.kt)("p",null,"If you find any pesky new bugs, please fill out a report on ",(0,a.kt)("a",{parentName:"p",href:"http://bugs.mojang.com"},"http://bugs.mojang.com")),(0,a.kt)("p",null,"Click here to give us feedback about the new release on our official feedback.minecraft.net site- we want to know what you think!"),(0,a.kt)("p",null,"Please note that we are aware of a possible crash when you set your draw distance to maximum on the 32-bit Win 10 edition if you have a discrete graphics card. We're working on it!"),(0,a.kt)("h2",{id:"new-features"},(0,a.kt)("strong",{parentName:"h2"},"New Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Villains skin pack!")),(0,a.kt)("h2",{id:"tweaks"},(0,a.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More localization fixes."),(0,a.kt)("li",{parentName:"ul"},"Fixed the HUD moving when riding an animal in VR."),(0,a.kt)("li",{parentName:"ul"},"Fixed a few texture issues."),(0,a.kt)("li",{parentName:"ul"},"Some tweaks to Gear VR edition performance & experience."),(0,a.kt)("li",{parentName:"ul"},"Increased draw distance for Win 10 edition.")),(0,a.kt)("h2",{id:"bug-fixes"},(0,a.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed comfort issues caused by rain & snow in your face"),(0,a.kt)("li",{parentName:"ul"},"Lead lines no longer disconnect from the hand when jumping in Immersive Mode in Gear VR."),(0,a.kt)("li",{parentName:"ul"},"Leads now display the correct texture & don't cause crashes in Gear VR."),(0,a.kt)("li",{parentName:"ul"},"Fixed a crash on the inventory screen."),(0,a.kt)("li",{parentName:"ul"},"Horse container screen now keeps labels visible."),(0,a.kt)("li",{parentName:"ul"},"Bone meal and spawn eggs now consumed in Survival mode."),(0,a.kt)("li",{parentName:"ul"},"B button to quit from main menu works on Win 10 edition now."),(0,a.kt)("li",{parentName:"ul"},"Fixed a crash when creating or entering a new world."),(0,a.kt)("li",{parentName:"ul"},"Fixed a crash when traveling the world with render distance set to maximum."),(0,a.kt)("li",{parentName:"ul"},"Worlds with UTF-8 symbols in their name are now displayed in the Play tab for Win 10."),(0,a.kt)("li",{parentName:"ul"},"Fixed some issues with players creating new realms.")),(0,a.kt)("p",null,"Since now everyone else is also getting the 0.15.3 update that only went out for Google Play in this release, we've included it below for your reference."),(0,a.kt)("h2",{id:"tweaks-1"},(0,a.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multiplayer invite screen text alignment fixed"),(0,a.kt)("li",{parentName:"ul"},"Tweaks to moving blocks to make them work better & more consistently"),(0,a.kt)("li",{parentName:"ul"},"Fixes to horse breeding to make it consistent with other versions"),(0,a.kt)("li",{parentName:"ul"},"Tweaks to atlas generation"),(0,a.kt)("li",{parentName:"ul"},"Tweaked some Realms purchase functions"),(0,a.kt)("li",{parentName:"ul"},"Small tweak to mouse controls"),(0,a.kt)("li",{parentName:"ul"},"Store screen layout scales better now")),(0,a.kt)("h2",{id:"bug-fixes-1"},(0,a.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Players can now scroll through the list of friends in the Add Realm window using the controller."),(0,a.kt)("li",{parentName:"ul"},"Inventory can now be opened when a player mounts a pig or horse/donkey/mule"),(0,a.kt)("li",{parentName:"ul"},"Zombie pigment spawn with correct textures in desert biomes"),(0,a.kt)("li",{parentName:"ul"},"Nether brick fence fixed- attaches to cobblestone walls"),(0,a.kt)("li",{parentName:"ul"},"Fixed issue with friends list being cleared on signing out"),(0,a.kt)("li",{parentName:"ul"},"Fall damage for horses fixed"),(0,a.kt)("li",{parentName:"ul"},"Pressing X on the intro page signs the user out"),(0,a.kt)("li",{parentName:"ul"},"Removed phantom image of the currently equipped block when toggling a daylight sensor"),(0,a.kt)("li",{parentName:"ul"},"Fixed item duplication on fences bug"),(0,a.kt)("li",{parentName:"ul"},"Fixed some bugs with pistons (crashing, overwriting, taking power from wrong sources, syncing issues)"),(0,a.kt)("li",{parentName:"ul"},"Observer block placement fixed"),(0,a.kt)("li",{parentName:"ul"},"Glass and leaf blocks no longer going invisible when placed next to carpet, pressure plates and accumulated snow."),(0,a.kt)("li",{parentName:"ul"},"Fully grown crops now pop out of farmland when cut-off from light."),(0,a.kt)("li",{parentName:"ul"},"Fixed position of zombie jockeys"),(0,a.kt)("li",{parentName:"ul"},"Fixed crash when shooting an arrow from a dispenser at a TNT minecart"),(0,a.kt)("li",{parentName:"ul"},"Fixed assorted issues causing games to crash")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905),i=n(31792),s=n(85162),l=n(18386);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],h={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(l.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(a.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},66556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(61499),i=n(96878);const s={sidebar_position:99999936,title:"MCPE/WIN 10/Gear VR - 0.15.4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},l="MCPE/WIN 10/Gear VR - 0.15.4",c={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README",title:"MCPE/WIN 10/Gear VR - 0.15.4",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999936,frontMatter:{sidebar_position:99999936,title:"MCPE/WIN 10/Gear VR - 0.15.4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 1.0.6",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.6/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.7",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mcpewin-10gear-vr---0154"},"MCPE/WIN 10/Gear VR - 0.15.4"),(0,a.kt)(o.default,{gameplayChangelog:(0,a.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);