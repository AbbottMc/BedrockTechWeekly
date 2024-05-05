"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[63417,6855,48250],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},8249:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(96540),r=n(8045);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const l=[];function i(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,s]=o({name:"keydown",listener(e){l.includes(e.code)||(l.push(e.code),g(l))}}),[c,u]=o({name:"keyup",listener(e){l.splice(l.indexOf(e.code),1)}}),d=()=>{r.k.switchHidden(),t(r.k.isHidden())},g=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,a.useEffect)((()=>(i(),c(),t(r.k.isHidden()),()=>{s(),u()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,n)=>{n.d(t,{v:()=>o});class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},18228:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==i&&(g(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function N(e){const t=(0,f.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},8045:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},19907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay",permalink:"/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you find any bugs, be sure to ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/secure/Dashboard.jspa"},"report them here!")," Click here to give us feedback & tell us what you think about the update."),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Power Rangers Skin Pack"),(0,r.yg)("li",{parentName:"ul"},"Xbox Live and Realms support on Apple TV"),(0,r.yg)("li",{parentName:"ul"},"More commands (/title, /stopsound, /playsound, /clear, /difficulty, /effect, /me, /replaceitem, /spreadplayers, /testfor, /gamerule)"),(0,r.yg)("li",{parentName:"ul"},"Command blocks"),(0,r.yg)("li",{parentName:"ul"},"Minecart with command block"),(0,r.yg)("li",{parentName:"ul"},"Game rules")),(0,r.yg)("h2",{id:"tweaks"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Magnifying glass no longer appears over entered text in the Storage manager"),(0,r.yg)("li",{parentName:"ul"},"Jump range of magma cubes fixed to correct value"),(0,r.yg)("li",{parentName:"ul"},"Lapis lazuli icon now in enchanting tables"),(0,r.yg)("li",{parentName:"ul"},"Accuracy of fireball shots from ghasts is now correct")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Finally fixed the villagers & peaceful mobs despawning randomly bug!"),(0,r.yg)("li",{parentName:"ul"},"Mobs moving between chunk borders no longer despawn when a crash occurs"),(0,r.yg)("li",{parentName:"ul"},"When a player's position shifts when reloading a world, players will no longer get trapped & suffocate inside blocks"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could happen when a command with targets was executed"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when trying to share a file after selecting cancel when trying to share previously"),(0,r.yg)("li",{parentName:"ul"},"The share button for a single item now appears in the Storage menu"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred sometimes when a player deleted content through the Storage manager"),(0,r.yg)("li",{parentName:"ul"},"The Original Music Pack once again can be downloaded on Gear VR (Gear VR only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed various issues with Storage"),(0,r.yg)("li",{parentName:"ul"},"Pots are now getting the correct color for tinted plants placed in them"),(0,r.yg)("li",{parentName:"ul"},"Fixed another bug that made chat messages appear twice in game chat"),(0,r.yg)("li",{parentName:"ul"},'When the fill command is used to place blocks and then immediately destroy them, ""phantom"" blocks no longer appear'),(0,r.yg)("li",{parentName:"ul"},"Help command now displays command description"),(0,r.yg)("li",{parentName:"ul"},"Global resource packs should no longer be deactivated when creating a new world or relaunching the game (Android & Fire only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash which happened when loading some worlds"),(0,r.yg)("li",{parentName:"ul"},"Hostile mob spawning rules no longer ignore the Y coordinate"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that happened sometimes when a player incorrectly used the /kill command"),(0,r.yg)("li",{parentName:"ul"},"Plants no longer stay in a player's inventory after being placed in a flower pot"),(0,r.yg)("li",{parentName:"ul"},"Endermen again have idle sounds"),(0,r.yg)("li",{parentName:"ul"},"The beacon's position is now correct when held in a player's hand"),(0,r.yg)("li",{parentName:"ul"},"End","_","portal is now listed as a valid block for the /fill command"),(0,r.yg)("li",{parentName:"ul"},"Toast notifications for Xbox Live invites should now appear (iOS only)"),(0,r.yg)("li",{parentName:"ul"},"Clients can no longer change world settings when far away from the host"),(0,r.yg)("li",{parentName:"ul"},"Slash commands now execute correctly even if the cursor is not at the end of the line"),(0,r.yg)("li",{parentName:"ul"},'Rails, beds, and cocoa no longer leave behind ""ghost"" items when using the /fill command'),(0,r.yg)("li",{parentName:"ul"},"Controller now works for scrolling on Apple TV (Apple TV only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when selecting the Choose New Skin button (Gear VR only)"),(0,r.yg)("li",{parentName:"ul"},"Enchanted books again generate properly according to loot tables in dungeons/temples"),(0,r.yg)("li",{parentName:"ul"},"Fixed packs sometimes being deleted after importing"),(0,r.yg)("li",{parentName:"ul"},"Undead mobs again have their proper walking sounds"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash on Realms when changing difficulty"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred sometimes when a mob died"),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer pick up your items when you die"),(0,r.yg)("li",{parentName:"ul"},"Mobs spawned with eggs will no longer get stuck inside blocks"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer enter blocks and suffocate after swimming with Elytra"),(0,r.yg)("li",{parentName:"ul"},"The touch screen will no longer get stuck continuing to drop items from the first hotbar slot"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash relating to structures when updating a world from 1.0.3"),(0,r.yg)("li",{parentName:"ul"},"Chat will no longer flicker when the touch keyboard is opened"),(0,r.yg)("li",{parentName:"ul"},"Villagers will no longer throw bread like they were baseball pitchers"),(0,r.yg)("li",{parentName:"ul"},"When copying an Item with ","[","CTRL","]","+","[","MMB","]",", an additional copy will now be placed in the hotbar"),(0,r.yg)("li",{parentName:"ul"},"Canceling the download of a Resource Pack will now allow for re-downloading the pack"),(0,r.yg)("li",{parentName:"ul"},"Passing through an Activator Rail will no longer eject the player on top of Rails"),(0,r.yg)("li",{parentName:"ul"},"Many commands now show better result messages when executed"),(0,r.yg)("li",{parentName:"ul"},"Using 0 as ","[","maxCount","]"," in the /clear command now gives the item count instead of removing it"),(0,r.yg)("li",{parentName:"ul"},"Fixed the spawn time of Mob Spawners to be randomized instead of constant"),(0,r.yg)("li",{parentName:"ul"},"Mob Spawners will no longer always spawn the maximum number of mobs"),(0,r.yg)("li",{parentName:"ul"},"Items can no longer be duplicated using item frames"),(0,r.yg)("li",{parentName:"ul"},"Chorus plants will now play the proper sound when they grow"),(0,r.yg)("li",{parentName:"ul"},"Maps zoomed out on an anvil now work the same for all players")))}g.isMDXComponent=!0},74874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(58168),r=n(96540),o=n(15680),l=n(18228),i=n(19365),s=n(8249);const c={},u=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},p=[],m={toc:p},h="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.A,{rightElement:(0,o.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.yg)(i.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.yg)(i.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.yg)("div",null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.yg)(r.Fragment,null,(0,o.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}f.isMDXComponent=!0},53107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(74874),l=n(19907);const i={sidebar_position:99999939,title:"MCPE/WIN 10/Gear VR - 1.0.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE/WIN 10/Gear VR - 1.0.5",c={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/README",title:"MCPE/WIN 10/Gear VR - 1.0.5",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999939,frontMatter:{sidebar_position:99999939,title:"MCPE/WIN 10/Gear VR - 1.0.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 0.15.7",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/"},next:{title:"MCPE/WIN 10/Gear VR - 0.15.6",permalink:"/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/"}},u={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpewin-10gear-vr---105"},"MCPE/WIN 10/Gear VR - 1.0.5"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);