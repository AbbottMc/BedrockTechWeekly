"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[85928,21032,69335,25500,51437,71424,48250],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=n,d=g["".concat(s,".").concat(p)]||g[p]||u[p]||i;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(96540),n=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:a},t)}},8249:(e,t,a)=>{a.d(t,{p:()=>l});var r=a(96540),n=a(8045);function i(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const o=[];function l(){const[e,t]=(0,r.useState)(),a=["ControlLeft","ShiftLeft","KeyS"],[l,s]=i({name:"keydown",listener(e){o.includes(e.code)||(o.push(e.code),u(o))}}),[c,m]=i({name:"keyup",listener(e){o.splice(o.indexOf(e.code),1)}}),g=()=>{n.k.switchHidden(),t(n.k.isHidden())},u=e=>{e.length!==a.length||e.some((e=>!a.includes(e)))||g()};return(0,r.useEffect)((()=>(l(),c(),t(n.k.isHidden()),()=>{s(),m()})),[]),r.createElement("div",null,r.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:g},r.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,t,a)=>{a.d(t,{v:()=>i});class r{events={};static defaultMaxListeners=64;_maxListeners=r.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var a=this;const r=function(){t(...arguments),a.off(e,r)};return this.on(e,r),this}emit(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];const n=this.events[e];return n&&n.forEach((e=>{e(...a)})),this}off(e,t){const a=this.events[e];if(!a)return this;if(!t)return delete this.events[e],this;const r=a.indexOf(t);return-1!==r&&a.splice(r,1),0===a.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var a=this;const r=function(){t(...arguments),a.off(e,r)};return this.prependListener(e,r),this}removeListener(e,t){const a=this.events[e];return a.splice(a.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||r.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const n=new r;function i(e){return[()=>{e.listener&&n.on(e.name,e.listener)},()=>{e.listener&&n.off(e.name,e.listener)},function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];n.emit(e.name,...a)}]}},18228:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(58168),n=a(96540),i=a(20053),o=a(23104),l=a(56347),s=a(57485),c=a(31682),m=a(89466);function g(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=d({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,m.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),y=(()=>{const e=s??g;return p({value:e,tabValues:i})?e:null})();(0,n.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:m}=e;const g=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=g.indexOf(t),r=c[a].value;r!==l&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),m?n.createElement("div",{className:"w-full"},m):void 0)}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},n.createElement(v,(0,r.A)({},e,t)),n.createElement(b,(0,r.A)({},e,t)))}function w(e){const t=(0,y.A)();return n.createElement(N,(0,r.A)({key:String(t)},e))}},8045:(e,t,a)=>{a.d(t,{k:()=>n});var r=a(58409);class n{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,r.v)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},78116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/20/22/gameplay",id:"changelog_source/preview/1.20/20/22/gameplay",title:"gameplay",description:"Posted: 20 July 2023",source:"@site/docs/changelog_source/preview/1.20/20/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/20/22",slug:"/changelog_source/preview/1.20/20/22/gameplay",permalink:"/docs/changelog_source/preview/1.20/20/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Recipe Unlocking</strong>",id:"recipe-unlocking",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:3},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],m={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Posted:")," 20 July 2023"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/17785909268493",alt:"A Minecraft screenshot of some rabbits and a polar bear standing on some snow layers, with trees and a waterfall nearby."})),(0,n.yg)("p",null,"Here's what's new in this week's Minecraft Preview and Beta! Please continue to send us your ",(0,n.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,n.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and enjoy the update!"),(0,n.yg)("h1",{id:"features-and-bug-fixes"},(0,n.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.yg)("h2",{id:"actors"},(0,n.yg)("strong",{parentName:"h2"},"Actors")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Rabbits, Polar Bears, and items no longer levitate above Top Snow blocks (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172381"},"MCPE-172381"),", ",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173081"},"MCPE-173081"),")\xa0")),(0,n.yg)("h2",{id:"blocks"},(0,n.yg)("strong",{parentName:"h2"},"Blocks")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Structure Void blocks placed in the world can once again be highlighted and destroyed when holding a Structure Void block (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172429"},"MCPE-172429"),")\xa0")),(0,n.yg)("h2",{id:"gameplay"},(0,n.yg)("strong",{parentName:"h2"},"Gameplay")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Breath meter now refills when swimming with head above water (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170969"},"MCPE-170969"),")\xa0"),(0,n.yg)("li",{parentName:"ul"},"The Crawling experimental toggle has been removed and Crawling under 1 block gaps is now fully implemented into the game\xa0")),(0,n.yg)("h2",{id:"recipe-unlocking"},(0,n.yg)("strong",{parentName:"h2"},"Recipe Unlocking")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can now enable Recipe Unlocking on the Create New World screen (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172956"},"MCPE-172956"),")"),(0,n.yg)("li",{parentName:"ul"},'The command for unlocking recipes has been updated. The autosuggestion to give a player a recipe now says "player: target" instead of "victim: target" (',(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172402"},"MCPE-172402"),")\xa0")),(0,n.yg)("h2",{id:"stability-and-performance"},(0,n.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed missing low disk space warning on Xbox\xa0")),(0,n.yg)("h3",{id:"accessibility"},(0,n.yg)("strong",{parentName:"h3"},"Accessibility")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The text-to-speech narrator will now read the disconnected message in the game menu when opened without an internet connection\xa0")),(0,n.yg)("h2",{id:"user-interface"},(0,n.yg)("strong",{parentName:"h2"},"User Interface")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"iOS only: Fixed a bug in multiline text edits where some text was sometimes deleted when typing after repositioning the caret with spacebar (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166152"},"MCPE-166152"),")\xa0"),(0,n.yg)("li",{parentName:"ul"},'Changed button text from "Manage" to "Cancel" in Options ',">"," Subscriptions\xa0"),(0,n.yg)("li",{parentName:"ul"},"Fixed layering issue causing the underground vignette effect to draw on top of the hotbar (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159217"},"MCPE-159217"),")"),(0,n.yg)("li",{parentName:"ul"},"Adding a button on the new death screen to allow player to go to the game menu to change settings, leave the world, and more")))}u.isMDXComponent=!0},69216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),i=a(50484),o=(a(19988),a(57350));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/20/22/tech",id:"changelog_source/preview/1.20/20/22/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.20/20/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/20/22",slug:"/changelog_source/preview/1.20/20/22/tech",permalink:"/docs/changelog_source/preview/1.20/20/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/22/tech.mdx",tags:[],version:"current",frontMatter:{}},m={},g=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],u={toc:g},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"general"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Removed server-authoritative-sound bool from server.properties\xa0"),(0,n.yg)("li",{parentName:"ul"},"Exposed ",(0,n.yg)("em",{parentName:"li"},"DimensionType")," to scripting"),(0,n.yg)("li",{parentName:"ul"},"The /camera command no longer requires the experimental cameras toggle\xa0",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Note: The cameras experiment still contains several example preset JSON files for reference"))),(0,n.yg)("li",{parentName:"ul"},'Released the "',(0,n.yg)("em",{parentName:"li"},"minecraft:wearable"),'" item component out of experimental in json formats 1.20.20 and higher'),(0,n.yg)("li",{parentName:"ul"},"Exposed the following feature placement rules from behind the data driven biome experimental toggle. This allows creators to attach their custom features to a biome, and to define the rules by which those features are placed",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"minecraft:aggregate","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:cave","_","carver","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:fossil","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:geode","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:growing","_","plant","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:multiface","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:nether","_","cave","_","carver","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:ore","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:partially","_","exposed","_","blob","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:scatter","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:search","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:sequence","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:single","_","block","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:snap","_","to","_","surface","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:structure","_","template","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:surface","_","relative","_","threshold","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:tree","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:underwater","_","cave","_","carver","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:vegetation","_","patch","_","feature"),(0,n.yg)("li",{parentName:"ul"},"minecraft:weighted","_","random","_","feature")))),(0,n.yg)("h2",{id:"items"},(0,n.yg)("strong",{parentName:"h2"},"Items")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Released the "',(0,n.yg)("em",{parentName:"li"},"minecraft:digger"),'" item component out of experimental in json formats 1.20.20 and higher\xa0'),(0,n.yg)("li",{parentName:"ul"},'Deprecated "',(0,n.yg)("em",{parentName:"li"},"on","_","dig"),'" parameters from "',(0,n.yg)("em",{parentName:"li"},"minecraft:digger"),'" item component in formats 1.20.20 and higher\xa0')),(0,n.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.yg)("h2",{id:"script-api"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(o.default,{techSapi:(0,n.yg)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0},50484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/20/22/tech_sapi_exp",id:"changelog_source/preview/1.20/20/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added camera scripting APIs for the following APIs:",source:"@site/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/20/22",slug:"/changelog_source/preview/1.20/20/22/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added camera scripting APIs for the following APIs:\xa0",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"setCamera()"),": to set the camera to a specified preset"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"fade()"),": to start a camera fade"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"clear()"),": to clear the current settings on the camera"))),(0,n.yg)("li",{parentName:"ul"},"Released Scoreboard API's from beta to V1.4.0",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Updated ",(0,n.yg)("em",{parentName:"li"},"Scoreboard.getObjective"),", ",(0,n.yg)("em",{parentName:"li"},"getObjectiveAtDisplaySlot"),", and ",(0,n.yg)("em",{parentName:"li"},"clearObjectiveAtDisplaySlot")," to return '| undefined'"))),(0,n.yg)("li",{parentName:"ul"},"Removed ",(0,n.yg)("em",{parentName:"li"},"MinecraftBlockTypes")," defined in\xa0",(0,n.yg)("em",{parentName:"li"},"@minecraft/server")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemUseBeforeEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemUseOnBeforeEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemUseAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemUseOnAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemStartUseOnAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemStopUseAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemStopUseOnAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemCompleteUseAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemReleaseUseAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"ItemStartUseAfterEvent"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"DimensionLocation"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,n.yg)("em",{parentName:"li"},"PositionInUnloadedChunkError"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"LocationInUnloadedChunkError"),"\xa0and moved it to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,n.yg)("em",{parentName:"li"},"PositionOutOfWorldBoundariesError"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"LocationOutOfWorldBoundariesError"),"\xa0and moved it to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"getSpawnPoint"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"setSpawnPoint"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"getDefaultSpawnLocation"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")),(0,n.yg)("li",{parentName:"ul"},"Moved\xa0",(0,n.yg)("em",{parentName:"li"},"setDefaultSpawnLocation"),"\xa0to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0")))),(0,n.yg)("li",{parentName:"ul"},"Released\xa0",(0,n.yg)("em",{parentName:"li"},"isValid()"),"\xa0from Beta to\xa0",(0,n.yg)("em",{parentName:"li"},"1.4.0"),"\xa0for the following classes:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Block")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Container")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Entity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Player")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"SimulatedPlayer")))),(0,n.yg)("li",{parentName:"ul"},"WorldAfterEvents",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Removed\xa0",(0,n.yg)("em",{parentName:"li"},"projectileHit")),(0,n.yg)("li",{parentName:"ul"},"Added\xa0",(0,n.yg)("em",{parentName:"li"},"projectileHitBlock")),(0,n.yg)("li",{parentName:"ul"},"Added\xa0",(0,n.yg)("em",{parentName:"li"},"projectileHitEntity")))),(0,n.yg)("li",{parentName:"ul"},"Added class\xa0",(0,n.yg)("em",{parentName:"li"},"ProjectileHitBlockAfterEvent"),"\xa0export class:",(0,n.yg)("br",{parentName:"li"}),"ProjectileHitBlockAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation; }"),(0,n.yg)("li",{parentName:"ul"},"Added class\xa0",(0,n.yg)("em",{parentName:"li"},"ProjectileHitEntityAfterEvent"),"\xa0export class:",(0,n.yg)("br",{parentName:"li"}),"ProjectileHitEntityAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation; }"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug where ",(0,n.yg)("em",{parentName:"li"},"ContainerSlot")," would not work with certain container types (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172782"},"MCPE-172782)"))))}u.isMDXComponent=!0},19988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/20/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/20/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/20/22",slug:"/changelog_source/preview/1.20/20/22/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},74874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var r=a(58168),n=a(96540),i=a(15680),o=a(18228),l=a(19365),s=a(8249);const c={},m=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p},h="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(h,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{rightElement:(0,i.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,i.yg)(l.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,i.yg)(l.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,i.yg)(n.Fragment,null,(0,i.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}y.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=a(58168),n=a(96540),i=a(15680),o=a(18228),l=a(19365);const s={},c=void 0,m={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},u=[],p={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(n.Fragment,null,void 0!==a.techSapiDiff?(0,i.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,i.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,i.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,i.yg)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},48173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=a(58168),n=(a(96540),a(15680)),i=a(74874),o=a(78116),l=a(69216);const s={sidebar_position:99999758,title:"1.20.20.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.20.22",m={unversionedId:"official_changelog/preview/1.20/20/22",id:"official_changelog/preview/1.20/20/22",title:"1.20.20.22",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/20/22.mdx",sourceDirName:"official_changelog/preview/1.20/20",slug:"/official_changelog/preview/1.20/20/22",permalink:"/docs/official_changelog/preview/1.20/20/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/20/22.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999758,frontMatter:{sidebar_position:99999758,title:"1.20.20.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.20.23",permalink:"/docs/official_changelog/preview/1.20/20/23"},next:{title:"1.20.20.21",permalink:"/docs/official_changelog/preview/1.20/20/21"}},g={},u=[],p={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"minecraft-beta--preview---1202022"},"Minecraft Beta & Preview - 1.20.20.22"),(0,n.yg)(i.default,{gameplayChangelog:(0,n.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);