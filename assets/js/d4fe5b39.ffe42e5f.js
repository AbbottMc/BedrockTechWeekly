"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90657,35099,48250],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||l;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},8249:(e,a,t)=>{t.d(a,{p:()=>o});var n=t(96540),r=t(8045);function l(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function o(){const[e,a]=(0,n.useState)(),t=["ControlLeft","ShiftLeft","KeyS"],[o,s]=l({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),g(i))}}),[p,u]=l({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),c=()=>{r.k.switchHidden(),a(r.k.isHidden())},g=e=>{e.length!==t.length||e.some((e=>!t.includes(e)))||c()};return(0,n.useEffect)((()=>(o(),p(),a(r.k.isHidden()),()=>{s(),u()})),[]),n.createElement("div",null,n.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:c},n.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},58409:(e,a,t)=>{t.d(a,{v:()=>l});class n{events={};static defaultMaxListeners=64;_maxListeners=n.defaultMaxListeners;on(e,a){return this.events[e]||(this.events[e]=[]),this.events[e].push(a),this}once(e,a){var t=this;const n=function(){a(...arguments),t.off(e,n)};return this.on(e,n),this}emit(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];const r=this.events[e];return r&&r.forEach((e=>{e(...t)})),this}off(e,a){const t=this.events[e];if(!t)return this;if(!a)return delete this.events[e],this;const n=t.indexOf(a);return-1!==n&&t.splice(n,1),0===t.length&&delete this.events[e],this}listenerCount(e){const a=this.events[e];return a?a.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,a){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(a),this}prependOnceListener(e,a){var t=this;const n=function(){a(...arguments),t.off(e,n)};return this.prependListener(e,n),this}removeListener(e,a){const t=this.events[e];return t.splice(t.indexOf(a),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||n.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new n;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];r.emit(e.name,...t)}]}},18228:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),p=t(31682),u=t(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function g(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,p]=d({queryString:t,groupId:n}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function N(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:p,rightElement:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=p[t].value;n!==o&&(g(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a}),style:{wordBreak:"keep-all"}}),t??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(N,(0,n.A)({},e,a)),r.createElement(b,(0,n.A)({},e,a)))}function v(e){const a=(0,h.A)();return r.createElement(w,(0,n.A)({key:String(a)},e))}},8045:(e,a,t)=>{t.d(a,{k:()=>r});var n=t(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),a=(0,n.v)({name:"hiddenSwitch"})[2];this.setHidden(e),a(e)}}},47518:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.4/0/gameplay",id:"changelog_source/stable/1.4/0/gameplay",title:"gameplay",description:"This update contains a whole ocean of new features from Update Aquatic! More features are on their way and will be available in game updates soon. If you find any bugs, please report them on\xa0bugs.mojang.comand post all thoughts and suggestions to\xa0feedback.minecraft.net. Thanks for playing!",source:"@site/docs/changelog_source/stable/1.4/0/gameplay.mdx",sourceDirName:"changelog_source/stable/1.4/0",slug:"/changelog_source/stable/1.4/0/gameplay",permalink:"/docs/changelog_source/stable/1.4/0/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.4/0/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"**",id:"",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>Add-Ons (Resource and Behavior Packs):</strong>",id:"add-ons-resource-and-behavior-packs",level:2}],u={toc:p},c="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This update contains a whole ocean of new features from Update Aquatic! More features are on their way and will be available in game updates soon. If you find any bugs, please report them on\xa0",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"and post all thoughts and suggestions to\xa0",(0,r.yg)("a",{parentName:"p",href:"http://feedback.minecraft.net/"},"feedback.minecraft.net"),". Thanks for playing!\xa0  "),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Water has a completely new look and increased visibility while underwater")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dolphins")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tropical Fish")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cod, Salmon, and Pufferfish mobs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New ocean biomes of varying depths and temperatures")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Shipwrecks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ocean ravines and caves")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Icebergs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Underwater ruins")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Coral reefs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Buried Treasure and Treasure Maps")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Swimming animation while sprinting in water")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Heart of the Sea: Be sure to collect these for later to construct a Conduit that will be introduced in an upcoming update!")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Trident weapon with new enchantments")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Channeling")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Loyalty")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Riptide")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Impaling")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New water behavior")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"A water source block can be placed inside of most non-solid blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Flowing water will still not flow into non-solid blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Blocks can be placed underwater without creating pockets of air around them")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Coral, Coral Fans, and Coral Blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Kelp, Dried Kelp, and Dried Kelp Blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Blue Ice blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Seagrass and Tall Seagrass")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sea Pickles can now be found on the ocean floor as a source of light")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Stripped Wood")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Wood variants for Buttons, Pressure Plates, and Trapdoors")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Prismarine Stairs and Slabs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fish can now be scooped into buckets")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New Achievements")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Atlantis? - Find an underwater ruin (20G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ahoy! - Find a shipwreck (20G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Castaway - Eat nothing but dried kelp for three in-game days (20G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Me Gold! - Dig up a buried treasure (30G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Alternative Fuel - Power a furnace with a kelp block (20G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sail the 7 Seas - Visit all ocean biomes (40G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sleep with the Fishes - Stay underwater for one day without a potion (30G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"I'm a Marine Biologist - Collect a fish in a bucket (20G)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added an Inventory section to the Store to manage all your acquired content")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added sorting and filtering to the Store")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Minecraft: Education Edition Chemistry features can now be enabled under Cheats! For tips on getting started, check out the\xa0",(0,r.yg)("a",{parentName:"p",href:"https://education.minecraft.net/wp-content/uploads/ChemistryLab_Journal.pdf"},"Chemistry Lab Journal")))),(0,r.yg)("h2",{id:""},"**"),(0,r.yg)("p",null,"Minecraft Education Edition 1.4.0:**"),(0,r.yg)("p",null,"The new update offers underwater worlds, items and marine creatures, plus 17 standards-aligned lessons to engage students across subjects. Get started\xa0",(0,r.yg)("a",{parentName:"p",href:"https://education.minecraft.net/get-started/download"},"here"),"."),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"New item textures for Raw Fish, Cooked Fish, Raw Salmon, Cooked Salmon, Tropical Fish, and Pufferfish"),(0,r.yg)("li",{parentName:"ul"},"Pumpkins can now be sheared into Carved Pumpkins"),(0,r.yg)("li",{parentName:"ul"},"Leads can now be attached to boats"),(0,r.yg)("li",{parentName:"ul"},"Tweaks to the directional movement of the Gameplay Cursor for more predictable movement"),(0,r.yg)("li",{parentName:"ul"},"The breath meter now slowly regenerates after being underwater"),(0,r.yg)("li",{parentName:"ul"},"Players can now swim through 1x1 gaps"),(0,r.yg)("li",{parentName:"ul"},"Items now float in water"),(0,r.yg)("li",{parentName:"ul"},"Baby Zombies now burn in daylight"),(0,r.yg)("li",{parentName:"ul"},"Spawn points can now be set using Beds during the day"),(0,r.yg)("li",{parentName:"ul"},'The default author for books are now set to "Author Unknown"'),(0,r.yg)("li",{parentName:"ul"},"Buttons made from Oak or Stone are now displayed as Oak Button and Stone Button, respectively")),(0,r.yg)("h2",{id:"experimental-gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Gameplay:")),(0,r.yg)("p",null,"A handful of features from Update Aquatic have been added through Experimental Gameplay. These features are incomplete and are not representative of final gameplay but feedback is absolutely welcome! These are not all of the Update Aquatic features coming to Minecraft and more is on the way.\xa0  "),(0,r.yg)("p",null,"'Use Experimental Gameplay' can be toggled in World Settings. This may break your world so a copy of your world will be created with \"","[","EX","]",'" before the world name. This feature cannot be disabled once it is enabled for a world and any progress will not be saved to the original world.'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Drowned mobs"),(0,r.yg)("li",{parentName:"ul"},"Nautilus Shells")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several of the top crashes that occurred during gameplay")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed a crash that occurred when importing an Add-On with an invalid manifest file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed a crash that occurred after rating content in the Marketplace")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed a crash that occurred when using the '/fill' command directly after '/clone' in the same tick")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reduced the delay when placing or destroying blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Improved load times in the Skin Picker and when applying Resource Packs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Improvements to Store load times")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"General"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"'Delicious Fish' achievement can now be unlocked after cooking and eating Salmon")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Activated resource packs will now stay active upon downloading any other resource pack during world creation")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Several fixes to joining as a second player on Xbox One split-screen")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Split-screen controls are no longer mixed up when the game is launched while using keyboard and mouse input on Xbox One")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Disconnecting a controller while making input no longer continues that input until the controller is reconnected")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fishing will now give the proper chance of catching a stack of 10 Ink Sacs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Items can no longer be duplicated by rapidly dropping them while playing multiplayer")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Lava with a block on top no longer prevents fire damage to entities and will fix Chicken cookers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fire Resistance potions now protect Snow Golems from dying in warm biomes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Soul Sand and Gravel once again generate in the Nether")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the crafting recipes of Prismarine Bricks and Dark Prismarine being swapped")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When riding a boat and hitting a mob with the Knockback enchantment, the mob will no longer always be knocked toward the East")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Zombies and Skeletons now burn in daylight while in boats")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Players can once again build straight down while holding the jump and place buttons simultaneously")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed Villager trades becoming deactivated in certain cases when using touch controls")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Curse of Binding and Vanishing books can no longer be acquired by trading with a Librarian Villager")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Graphical"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cocoa Beans now display correctly when using HD Resource Packs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Farmland and Grass Paths no longer have water textures when seen underwater")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Disconnected water flows no longer visually show as connected")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Water source blocks surrounding Glass, Slime blocks, and Sea Lanterns no longer turn into flowing water blocks")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Snow covered leaves no longer appear red when Smooth Lighting is disabled")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the appearance of bubbles around the Guardian laser attack")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'"Destroy Block (vibrate)" toggle once again appears in Touch settings')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The Paper Doll is no longer in a running pose on the main menu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Firework Rockets now appear in the Recipe Book when being searched for in Survival")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Initiating World Template screen now shows a progress bar")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the 'Disconnected from server' prompt being too large on Gear VR")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed some toggles and buttons staying highlighted in Settings when they shouldn't")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Chroma Hills HD Texture Pack fonts now apply correctly")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Commands"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"'/clear' will now clear items held in hand when playing in Classic UI")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Commands in chains of Command Blocks will now run sequentially when other chains are running nearby")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Selectors targeting players in '/title' commands will now properly show the player's name"))),(0,r.yg)("h2",{id:"add-ons-resource-and-behavior-packs"},(0,r.yg)("strong",{parentName:"h2"},"Add-Ons (Resource and Behavior Packs):")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated templates for 1.4.0 with new assets and behaviors can be downloaded at\xa0",(0,r.yg)("a",{parentName:"li",href:"http://minecraft.net/addons"},"minecraft.net/addons")),(0,r.yg)("li",{parentName:"ul"},"When applying the 'spell","_","effects' component, entities will now receive the defined effect")))}g.isMDXComponent=!0},74874:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var n=t(58168),r=t(96540),l=t(15680),i=t(18228),o=t(19365),s=t(8249);const p={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},m=[],d={toc:m},y="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(y,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)(i.A,{rightElement:(0,l.yg)(s.p,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,l.yg)(o.A,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},t.techChangelog),(0,l.yg)(o.A,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),t.gameplayChangelog,t.techChangelog?(0,l.yg)(r.Fragment,null,(0,l.yg)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),t.techChangelog):void 0))))}h.isMDXComponent=!0},34379:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(58168),r=(t(96540),t(15680)),l=t(74874),i=t(47518);const o={sidebar_position:99999978,title:"1.4.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.4"]},s="Minecraft - 1.4.0 (Bedrock)",p={unversionedId:"official_changelog/stable/1.4/0",id:"official_changelog/stable/1.4/0",title:"1.4.0",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.4/0.mdx",sourceDirName:"official_changelog/stable/1.4",slug:"/official_changelog/stable/1.4/0",permalink:"/docs/official_changelog/stable/1.4/0",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.4/0.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.4",permalink:"/docs/tags/1-4"}],version:"current",sidebarPosition:99999978,frontMatter:{sidebar_position:99999978,title:"1.4.0",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.4"]},sidebar:"changelogSidebar",previous:{title:"1.4.1",permalink:"/docs/official_changelog/stable/1.4/1"},next:{title:"1.2.13-16",permalink:"/docs/official_changelog/stable/1.2/13-16"}},u={},c=[],g={toc:c},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft---140-bedrock"},"Minecraft - 1.4.0 (Bedrock)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);