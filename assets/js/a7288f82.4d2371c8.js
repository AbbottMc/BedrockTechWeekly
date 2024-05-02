"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14153,27573,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},18386:(e,t,n)=>{n.d(t,{U:()=>l});var a=n(67294),r=n(62706);function o(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const i=[];function l(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[l,s]=o({name:"keydown",listener(e){i.includes(e.code)||(i.push(e.code),p(i))}}),[u,c]=o({name:"keyup",listener(e){i.splice(i.indexOf(e.code),1)}}),d=()=>{r.p.switchHidden(),t(r.p.isHidden())},p=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||d()};return(0,a.useEffect)((()=>(l(),u(),t(r.p.isHidden()),()=>{s(),c()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))}},3980:(e,t,n)=>{n.d(t,{M:()=>o});class a{constructor(){this.events={},this._maxListeners=a.defaultMaxListeners}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.on(e,a),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const r=this.events[e];return r&&r.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const a=n.indexOf(t);return-1!==a&&n.splice(a,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const a=function(){t(...arguments),n.off(e,a)};return this.prependListener(e,a),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}a.defaultMaxListeners=64;const r=new a;function o(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.emit(e.name,...n)}]}},31792:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u,rightElement:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:h},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},62706:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(3980);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=(0,a.M)({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}},68435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay",id:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7",slug:"/changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay",permalink:"/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_Android_Beta_-_1.1_build_7/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'""EnchantRandomly"" function has been modified to use treasure flags.'),(0,r.kt)("li",{parentName:"ul"},"Woodland Mansion chests' loot tables have been altered to allow for treasure enchantments."),(0,r.kt)("li",{parentName:"ul"},"Zombie villagers now have the unique sounds that they do in the Java edition."),(0,r.kt)("li",{parentName:"ul"},"Palette colors now match Java edition's palette colors."),(0,r.kt)("li",{parentName:"ul"},'The ""crafting"" label above the 2x2 grid in the player inventory was removed because the sizing didn\'t work in non-English languages.'),(0,r.kt)("li",{parentName:"ul"},"Font fixes."),(0,r.kt)("li",{parentName:"ul"},"Updated the beacon recipe to not use a specified aux value and instead use the default."),(0,r.kt)("li",{parentName:"ul"},"Offhand items are now hidden in 3rd person view when using a bow rather than being drawn at wrong angles and positions."),(0,r.kt)("li",{parentName:"ul"},"Tweaked some weird touch issues with the hotbar.")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The provoke range of Endermen is no longer too short."),(0,r.kt)("li",{parentName:"ul"},"Endermites no longer occasionally spin around for a few seconds when not chasing a target."),(0,r.kt)("li",{parentName:"ul"},"It no longer takes an unreasonable amount of time to break cobblestone walls."),(0,r.kt)("li",{parentName:"ul"},"Snowballs now generate particles when they break."),(0,r.kt)("li",{parentName:"ul"},"Dead bushes again catch fire & disappear."),(0,r.kt)("li",{parentName:"ul"},'""This bed is occupied"" message now only appears for the player trying to get in the occupied bed, not the player currently using it.'),(0,r.kt)("li",{parentName:"ul"},"Villagers no longer prioritize harvesting crops over sharing food with hungry villagers."),(0,r.kt)("li",{parentName:"ul"},"Zombie & skeleton horses no longer die unexpectedly."),(0,r.kt)("li",{parentName:"ul"},"Tipped Arrow of Decay now has the correct texture."),(0,r.kt)("li",{parentName:"ul"},"Ender pearls now show the correct particles when breaking."),(0,r.kt)("li",{parentName:"ul"},"Blaze rods are now shown correctly when held in 3rd person view."),(0,r.kt)("li",{parentName:"ul"},"Removed the extra white pixel in the Peony thumbnail."),(0,r.kt)("li",{parentName:"ul"},"Gameplay sounds again load on the main menu."),(0,r.kt)("li",{parentName:"ul"},"Elytra has sounds again!"),(0,r.kt)("li",{parentName:"ul"},'""Beam Me Up"" achievement works again.'),(0,r.kt)("li",{parentName:"ul"},"Miscellaneous tweaks & fixes to Marketplace."),(0,r.kt)("li",{parentName:"ul"},"The frequency of enchanted books has increased to account for the new enchantments."),(0,r.kt)("li",{parentName:"ul"},"Using bone meal on a fully grown crop doesn't consume the bone meal anymore."),(0,r.kt)("li",{parentName:"ul"},"Fire ticks properly now- it spreads & extinguishes in an appropriate amount of time."),(0,r.kt)("li",{parentName:"ul"},"Reduced the size of the hitbox on arrows."),(0,r.kt)("li",{parentName:"ul"},"Villagers now use the correct recipe to craft bread and consume wheat."),(0,r.kt)("li",{parentName:"ul"},"Fixed the animation issues with equipped, off-hand items in 3rd person view."),(0,r.kt)("li",{parentName:"ul"},"Villager trading window no longer closes immediately on the first attempt at a trade."),(0,r.kt)("li",{parentName:"ul"},"Draw distance range is no longer too high on low memory devices."),(0,r.kt)("li",{parentName:"ul"},"Fixed arrows under water from constantly spewing bubbles."),(0,r.kt)("li",{parentName:"ul"},"Fixed projectiles never reporting that they were on the ground."),(0,r.kt)("li",{parentName:"ul"},"Fixed text on signs appearing too high."),(0,r.kt)("li",{parentName:"ul"},'Fixed white wool/carpet appearing just as ""wool"" and ""carpet"".'),(0,r.kt)("li",{parentName:"ul"},"Villagers & zombie villagers now appear in igloos!"),(0,r.kt)("li",{parentName:"ul"},"(Hopefully) fixed a crash that happened when a player fell in the void."),(0,r.kt)("li",{parentName:"ul"},"Mobs are no longer invincible if you give them a Totem of Undying."),(0,r.kt)("li",{parentName:"ul"},"Mobs now play footsteps sounds. No more sneaking up on us, you dirty skeletons!"),(0,r.kt)("li",{parentName:"ul"},"The profile changes your name to the default if you leave the name blank."),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash if your language is German & you use a hyphen."),(0,r.kt)("li",{parentName:"ul"},"Texture packs should no longer randomly decide not to work or show corrupted textures anymore."),(0,r.kt)("li",{parentName:"ul"},"Players in multiplayer can now see offhand items of other players."),(0,r.kt)("li",{parentName:"ul"},"Chests can now be opened if an entity stands in the same block."),(0,r.kt)("li",{parentName:"ul"},"Infinity bows no longer take arrows from the offhand slot."),(0,r.kt)("li",{parentName:"ul"},"Frosted ice blocks that turn back into water now flow correctly."),(0,r.kt)("li",{parentName:"ul"},"Shulker boxes now open under top-half slab blocks."),(0,r.kt)("li",{parentName:"ul"},"Horse, mules, and donkeys now take damage from cacti while mounted."),(0,r.kt)("li",{parentName:"ul"},"Shulkers now get damaged by & teleport away/out of fire & lava."),(0,r.kt)("li",{parentName:"ul"},"Zombies suffocate again."),(0,r.kt)("li",{parentName:"ul"},"Spawn eggs renamed in an anvil now respect special names when spawning mobs."),(0,r.kt)("li",{parentName:"ul"},"Players can again shoot at a mob less than 5 blocks away."),(0,r.kt)("li",{parentName:"ul"},"Good news for elytra fliers - you can now shoot yourself with a bow and arrow (and can splash yourself with potions again, too!)"),(0,r.kt)("li",{parentName:"ul"},"Players no longer suffocate while riding horses underneath blocks that aren't actually suffocating the player."),(0,r.kt)("li",{parentName:"ul"},"Fixed a few bugs regarding horses suffocating & taking damage when they shouldn't be doing either."),(0,r.kt)("li",{parentName:"ul"},"You can again exit the Exit World menu with the escape key.")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var a=n(87462),r=n(67294),o=n(3905),i=n(31792),l=n(85162),s=n(18386);const u={},c=void 0,d={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"}>",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},h=[],m={toc:h};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{rightElement:(0,o.kt)(s.U,{mdxType:"NavHiddenSwitcher"}),mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},40552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),i=n(68435);const l={sidebar_position:99999973,title:"MCPE Android Beta - 1.1 build 7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},s="MCPE Android Beta - 1.1 build 7",u={unversionedId:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/README",id:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/README",title:"MCPE Android Beta - 1.1 build 7",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7",slug:"/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_7/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999973,frontMatter:{sidebar_position:99999973,title:"MCPE Android Beta - 1.1 build 7",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE Android Beta - 1.1.1 Build 1",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1.1_Build_1/"},next:{title:"MCPE Android Beta - 1.1 build 6",permalink:"/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1_build_6/"}},c={},d=[],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mcpe-android-beta---11-build-7"},"MCPE Android Beta - 1.1 build 7"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);