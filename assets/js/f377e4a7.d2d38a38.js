"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90611,48501,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>l});var r=n(96540),a=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,r.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[c,u]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),d=()=>{a.k.switchHidden(),t(a.k.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,r.useEffect)((()=>(l(),c(),t(a.k.isHidden()),()=>{s(),u()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const r=n.indexOf(t);return-1!==r&&n.splice(r,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const r=function(){t(...arguments),n.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const a=new r;function o(e){return[()=>{e.listener&&a.on(e.name,e.listener)},()=>{e.listener&&a.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function _(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(_,(0,r.A)({},e,t)))}function w(e){const t=(0,f.A)();return a.createElement(v,(0,r.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(58409);class a{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},23071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay",id:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3",slug:"/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay",permalink:"/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,a.yg)("h2",{id:"tweaks"},(0,a.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The main menu background now has a raised camera angle and scales properly based on the device's aspect ratio")),(0,a.yg)("h2",{id:"bug-fixes"},(0,a.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when entering a world while wearing armor"),(0,a.yg)("li",{parentName:"ul"},'Fixed a crash that occurred when sending a message containing ""%0""'),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when attempting to teleport millions of blocks away"),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when mobs were killed by something that wasn't an entity"),(0,a.yg)("li",{parentName:"ul"},"Fixed several issues with missing chunks and lost progress during world conversion (Xbox One only)"),(0,a.yg)("li",{parentName:"ul"},"Worlds deleted or changed on other consoles will now sync with the console they were created on (Xbox One only)"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue where some owners of Minecraft on Android devices would be prompted to acquire a license"),(0,a.yg)("li",{parentName:"ul"},"Improved navigation when using a controller on several menu screens"),(0,a.yg)("li",{parentName:"ul"},"Increased performance when jumping into water when mobs are around"),(0,a.yg)("li",{parentName:"ul"},"Template world data is no longer lost when loading a cloud save on a different console (Xbox One only)"),(0,a.yg)("li",{parentName:"ul"},"Fixed changes made in converted worlds not saving after a player walks into another dimension (Xbox One only)"),(0,a.yg)("li",{parentName:"ul"},"Redstone Repeaters facing into Redstone Dust now properly redirect the Dust"),(0,a.yg)("li",{parentName:"ul"},"Observers facing each other now output a steady, repeating Redstone signal"),(0,a.yg)("li",{parentName:"ul"},"Removed the hard-coded chat filter from featured servers"),(0,a.yg)("li",{parentName:"ul"},"Coordinates are no longer censored"),(0,a.yg)("li",{parentName:"ul"},"Fixed an exploit surrounding the use of encrypted skin packs"),(0,a.yg)("li",{parentName:"ul"},"Names of players outside of render distance will now appear in auto-complete when typing commands"),(0,a.yg)("li",{parentName:"ul"},"The '/clear' command will now clear items from armor slots by item name"),(0,a.yg)("li",{parentName:"ul"},"Fixed the XP Cost text on the anvil screen not being readable"),(0,a.yg)("li",{parentName:"ul"},"The 'minecraft:transformation' component now has a 'keep","_","owner' property to allow for an entity to keep its original owner"),(0,a.yg)("li",{parentName:"ul"},"Fixed placeholder images for items on the Storage screen"),(0,a.yg)("li",{parentName:"ul"},"Multiple commands can now be entered on a single meta property with Mixer interaction"),(0,a.yg)("li",{parentName:"ul"},"Only 11 characters can now be typed into the Join Realm code field"),(0,a.yg)("li",{parentName:"ul"},"Mobs can now be rotated using the 'xRot' and 'yRot' arguments when using teleport commands"),(0,a.yg)("li",{parentName:"ul"},"Signs will now close when the virtual keyboard is closed")))}p.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(58168),a=n(96540),o=n(15680),i=n(18228),l=n(19365),s=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],g={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(a.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},39459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),o=n(74874),i=n(23071);const l={sidebar_position:99999990,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",c={unversionedId:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/README",id:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/README",title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3",slug:"/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/",permalink:"/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_3/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999990,frontMatter:{sidebar_position:99999990,title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.6",permalink:"/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.6/"},next:{title:"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 2",permalink:"/docs/official_changelog/pocket/Minecraft_Xbox_One-Win_10-Android_Beta_-_1.2.5_Build_2/"}},u={},d=[],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"minecraft-xbox-onewin-10android-beta---125-build-3"},"Minecraft Xbox One/Win 10/Android Beta - 1.2.5 Build 3"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);