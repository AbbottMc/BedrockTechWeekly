"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29665,28313,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(a),d=r,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>o});var n=a(96540),r=a(8045);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function o(){const[e,t]=(0,n.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[o,s]=l({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[u,c]=l({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),g=()=>{r.k.switchHidden(),t(r.k.isHidden())},p=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,n.useEffect)((()=>(o(),u(),t(r.k.isHidden()),()=>{s(),c()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>l});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.on(e,n),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const n=a.indexOf(t);return-1!==n&&a.splice(n,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const n=function(){t(...arguments),a.off(e,n)};return this.prependListener(e,n),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];r.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),u=a(31682),c=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=s??g;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u,rightElement:c}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=g.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},80924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.11/0/4/gameplay",id:"changelog_source/preview/1.11/0/4/gameplay",title:"gameplay",description:"7 March 2019",source:"@site/docs/changelog_source/preview/1.11/0/4/gameplay.mdx",sourceDirName:"changelog_source/preview/1.11/0/4",slug:"/changelog_source/preview/1.11/0/4/gameplay",permalink:"/docs/changelog_source/preview/1.11/0/4/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.11/0/4/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>7 March 2019</strong>",id:"7-march-2019",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],c={toc:u},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"7-march-2019"},(0,r.yg)("strong",{parentName:"h2"},"7 March 2019")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions"),(0,r.yg)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.yg)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When choosing a skin from a skin pack, the selected skin will now roam between Bedrock devices using the same account"),(0,r.yg)("li",{parentName:"ul"},"Players now receive a discount from villager trades while they have the Hero of the Village effect"),(0,r.yg)("li",{parentName:"ul"},"Added loot dropped by pillagers and vindicators during a raid\xa0"),(0,r.yg)("li",{parentName:"ul"},"When a raid starts, a horn is heard by every player in the dimension, coming from the direction of the raid spawn point\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added a screen for Accessibility in Settings",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Text to Speech can be enabled for chat"),(0,r.yg)("li",{parentName:"ul"},"UI Screen Reader can be enabled to say the name of controls and their current state\xa0")))),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Note on World Generation:")," In order to deliver the coolest generated villages possible, some world seeds may have villages generate in different areas than they used to before this update"),(0,r.yg)("li",{parentName:"ul"},"Wandering Trader is no longer behind the Experimental Gameplay toggle\xa0"),(0,r.yg)("li",{parentName:"ul"},"Completely revamped Villager trades for each profession"),(0,r.yg)("li",{parentName:"ul"},"Increased the radii for job site blocks so villagers get to them more often and are less angry\xa0"),(0,r.yg)("li",{parentName:"ul"},"Zombie Villagers now update to new Zombie Villagers when not part of template worlds\xa0"),(0,r.yg)("li",{parentName:"ul"},"How to Play has been updated with helpful Village & Pillage knowledge\xa0"),(0,r.yg)("li",{parentName:"ul"},"Improvements to villager and iron golem pathing"),(0,r.yg)("li",{parentName:"ul"},"Increased the amount of scaffolding that can be placed out from its initial support\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added an experience bar to the new villager trading screen\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers will now resupply their trades when arriving at their job site\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers now hide in houses during raids and when bells are rung\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers cannot be traded with during a raid\xa0"),(0,r.yg)("li",{parentName:"ul"},"Wandering traders do not resupply trades and will despawn when out of trades\xa0"),(0,r.yg)("li",{parentName:"ul"},"Maps can now be locked by using glass panes on the Cartography Table\xa0",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Locked maps do not update to reflect explored areas or changes in the world. Unexplored areas will remain unexplored"),(0,r.yg)("li",{parentName:"ul"},"Locked maps cannot be extended but can still be copied")))),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed the crash from the previous beta that could occur when re-joining a world while the Ender Dragon was in view\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when opening the chest inside a taiga village Fletcher's workplace\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed the black screen that appeared after a suspend/resume on Android devices\xa0"),(0,r.yg)("li",{parentName:"ul"},"Template worlds using custom villager trades no lo longer crash the game\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when using invalid characters on signs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41671"},"MCPE-41671"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Windows 10 players with Minecraft installed on a different drive no longer get an error message saying that they are out of storage space, unless they are truly out of space (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32501"},"MCPE-32501"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Increased the visibility of the raid boss bar past the village bounds\xa0"),(0,r.yg)("li",{parentName:"ul"},"Hero of the Village is now granted for three in-game days instead of one after completing a raid\xa0"),(0,r.yg)("li",{parentName:"ul"},"Bells now ring in the preparation phase of raids\xa0"),(0,r.yg)("li",{parentName:"ul"},"Players no longer float around beds while sleeping (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41344"},"MCPE-41344"),")"),(0,r.yg)("li",{parentName:"ul"},"Bad Omen now disappears after five in-game days, drinking milk, or dying\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"World Generation")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Lily pads once again generate in the world (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42560"},"MCPE-42560"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed some buildings in villages not containing loot inside their chests\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed ground level blocks getting cut from underneath village structures\xa0"),(0,r.yg)("li",{parentName:"ul"},"Beds will more commonly generate in villages\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Villagers from 1.10 worlds are now properly converted to new villagers\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers can no longer get stuck inside composters. It was kinda funny though.\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers will actually follow proper etiquette and close doors behind them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41170"},"MCPE-41170"),")"),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer spend too much time at their job sites\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villager children no longer stay out playing too late. Get to bed!\xa0"),(0,r.yg)("li",{parentName:"ul"},"Villagers that the player is trading with will no longer run and hide when a bell is rung until after the trade is complete\xa0"),(0,r.yg)("li",{parentName:"ul"},"Underwater mobs no longer spawn on land (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40783"},"MCPE-40783"),")"),(0,r.yg)("li",{parentName:"ul"},"Sorted out the Wandering Trader's priorities so they won't get attacked as easily\xa0"),(0,r.yg)("li",{parentName:"ul"},"Raiding mobs will now attack players and villagers if they are spotted on the way to a village\xa0"),(0,r.yg)("li",{parentName:"ul"},"Evokers now count towards the raid counter\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a white stripe that appeared on the Librarian's shoulder\xa0"),(0,r.yg)("li",{parentName:"ul"},"Skeletons once again turn before shooting\xa0"),(0,r.yg)("li",{parentName:"ul"},"Tamed cats now lay on their sides when sleeping on a bed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40726"},"MCPE-40726"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Blocks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Composters now have proper lighting (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42561"},"MCPE-42561"),")"),(0,r.yg)("li",{parentName:"ul"},"Lanterns can once again be placed under stairs"),(0,r.yg)("li",{parentName:"ul"},"Corrected the breaking particles for the grindstone\xa0"),(0,r.yg)("li",{parentName:"ul"},"Sounds now play for job site blocks when villagers are using them\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed campfires not looking right when using HD textures"),(0,r.yg)("li",{parentName:"ul"},"Using Ctrl + Pick block no longer creates a new bed with extra data attached (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42494"},"MCPE-42494"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Banners can once again be copied in the crafting grid (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42534"},"MCPE-42534"),")"),(0,r.yg)("li",{parentName:"ul"},"Banners can once again be seen by players joining a world and no longer cause a crash when viewed in the inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42529"},"MCPE-42529"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The anvil output slot once again updates when removing items from the input slot (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42420"},"MCPE-42420"),")"),(0,r.yg)("li",{parentName:"ul"},"Bad Omen status now shows remaining time displayed on the mob effects screen")))))}p.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>d});var n=a(58168),r=a(96540),l=a(15680),i=a(18228),o=a(19365),s=a(8249);const u={},c=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},h="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(h,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.A,{rightElement:(0,l.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.yg)(o.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.yg)(o.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.yg)(r.Fragment,null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},42957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),l=a(74874),i=a(80924);const o={sidebar_position:99999969,title:"1.11.0.4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.11"]},s="Minecraft Beta - 1.11.0.4 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.11/0/4",id:"official_changelog/preview/1.11/0/4",title:"1.11.0.4",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.11/0/4.mdx",sourceDirName:"official_changelog/preview/1.11/0",slug:"/official_changelog/preview/1.11/0/4",permalink:"/docs/official_changelog/preview/1.11/0/4",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.11/0/4.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.11",permalink:"/docs/tags/1-11"}],version:"current",sidebarPosition:99999969,frontMatter:{sidebar_position:99999969,title:"1.11.0.4",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.11"]},sidebar:"changelogSidebar",previous:{title:"1.11.0.5",permalink:"/docs/official_changelog/preview/1.11/0/5"},next:{title:"1.11.0.3",permalink:"/docs/official_changelog/preview/1.11/0/3"}},c={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11104-xbox-onewindows-10android"},"Minecraft Beta - 1.11.0.4 (Xbox One/Windows 10/Android)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);