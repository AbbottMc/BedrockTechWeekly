"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9759,64137,81791,24104,73870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},57499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/20/23/gameplay",id:"changelog_source/preview/1.18/20/23/gameplay",title:"gameplay",description:"Posted: 2 February 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/20/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/20/23",slug:"/changelog_source/preview/1.18/20/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.18/20/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Frog Spawn</strong>",id:"frog-spawn",level:2},{value:"<strong>Goat Horn</strong>",id:"goat-horn",level:2},{value:"<strong>Custom Skins</strong>",id:"custom-skins",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Items</strong>",id:"items",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 2 February 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work-in-progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox, Windows, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4423906675981/frogspawn.jpg",alt:"frogspawn.jpg"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),". Please note - the Minecraft Preview version will receive an update with a slightly different version - for more information please visit ",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"),"."),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frogs now only use jump animation when using Jump Goal"),(0,r.kt)("li",{parentName:"ul"},"Frogs are now tempted and bred using Slime Balls"),(0,r.kt)("li",{parentName:"ul"},"Tadpole health is now 6"),(0,r.kt)("li",{parentName:"ul"},"Adjusted Frog spawning in Swamps, weight 10, herd size 2-5"),(0,r.kt)("li",{parentName:"ul"},"JumpToBlockGoal now correctly has the mob jump to small blocks like Lily Pads")),(0,r.kt)("h2",{id:"frog-spawn"},(0,r.kt)("strong",{parentName:"h2"},"Frog Spawn")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frog Spawn now breaks when pushed by a Piston"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn is now destroyed when the water source beneath it is removed"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn no longer prevented from hatching when a block is underneath it"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn can now be placed on waterlogged blocks"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn can no longer be placed above solid ground or under water with the '/fill' command"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn Block is now destroyed by falling blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150781"},"MCPE-150781"),")")),(0,r.kt)("h2",{id:"goat-horn"},(0,r.kt)("strong",{parentName:"h2"},"Goat Horn")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After using Goat Horn, there is now a cooldown period before it can be used again")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"custom-skins"},(0,r.kt)("strong",{parentName:"h2"},"Custom Skins")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed custom skins not saving when leaving the Dressing Room")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the Mending enchantment would not always correctly consume XP Orbs to repair (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120119"},"MCPE-120119"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drowned can no longer spawn where the block light level is above 0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150148"},"MCPE-150148"),")\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed truncated label (in some languages) above 2x2 crafting grid in Pocket UI inventory screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Create New World opt-in beta setting not persisting between play sessions")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cauldrons are now not fillable by Dripstones that are below flowing water")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Custom armor can now be equipped with the "Use" button when different armor is already equipped (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125323"},"MCPE-125323"),")")))}p.isMDXComponent=!0},44449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/20/23/tech",id:"changelog_source/preview/1.18/20/23/tech",title:"tech",description:"Blocks",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.18/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.18/20/23",slug:"/changelog_source/preview/1.18/20/23/tech",permalink:"/en/docs/changelog_source/preview/1.18/20/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Structure Generation and Actor Spawning</strong>",id:"structure-generation-and-actor-spawning",level:2},{value:"<strong>Experimental</strong>",id:"experimental",level:2},{value:"<strong>EatMobGoal</strong>",id:"eatmobgoal",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where projectiles would 'bounce' off of Bells in strange ways (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47847"},"MCPE-47847"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The '/tickingarea' command no longer modifies areas from entities with ",(0,r.kt)("em",{parentName:"li"},"tick","_","world")," component")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.18.20 or higher"),(0,r.kt)("li",{parentName:"ul"},"For example\xa0A && B || Cnow evaluates as\xa0(A && B) || C\xa0and\xa0A \\< B == C ",">"," D\xa0now evalutes as\xa0(A \\< B) == (C ",">"," D)")))),(0,r.kt)("h2",{id:"structure-generation-and-actor-spawning"},(0,r.kt)("strong",{parentName:"h2"},"Structure Generation and Actor Spawning")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed duplicate End Crystals spawning on top of End Spikes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147817"},"MCPE-147817"),")")),(0,r.kt)("h2",{id:"experimental"},(0,r.kt)("strong",{parentName:"h2"},"Experimental")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue in which actor properties would not always sync from server to client")),(0,r.kt)("h2",{id:"eatmobgoal"},(0,r.kt)("strong",{parentName:"h2"},"EatMobGoal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EatMobGoal is now unable to start when the player is the target")),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vector",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0length(): number- Returns the length of this vector"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0normalized(): Vector- Returns this as a normalized vector"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0distance(a:Vector, b:Vector): number- Returns distance between two vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0lerp(a:Vector, b:Vector, t: number): Vector- Returns the linear interpolation between a and b using t as the control"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0slerp(a:Vector, b:Vector, s: number): Vector- Returns the spherical linear interpolation between a and b using s as the control"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0cross(a:Vector, b:Vector): Vector- Returns the cross product of these two vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0add(a:Vector, b:Vector): Vector- Returns the addition of these vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0subtract(a:Vector, b:Vector): Vector- Returns the subtraction of these vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0multiply(a:Vector, b:Vector): Vector- Returns the component-wise product of these vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0divide(a:Vector, b:Vector): Vector- Returns the component-wise division of these vectors"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0multiply(a:Vector, b:number): Vector- Returns the product of this vector and a scalar"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0divide(a:Vector, b:number): Vector- Returns the division of this vector and a scalar"),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0min(a:Vector, b:Vector): Vector- Returns a vector that is made from the smallest components of two vectors."),(0,r.kt)("li",{parentName:"ul"},"Added static function\xa0max(a:Vector, b:Vector): Vector- Returns a vector that is made from the largest components of two vectors"))),(0,r.kt)("li",{parentName:"ul"},"World",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0playSound(soundName: String, soundOptions: SoundOptions): void- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument"))),(0,r.kt)("li",{parentName:"ul"},"EntityItemComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added component\xa0EntityItemComponentthat can be used to obtain an ItemStack from an item entity \u2013 e.g., getComponent(\u201citem\u201d).itemStack")))))}p.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}m.isMDXComponent=!0},80307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),l=n(57499),i=n(44449);const s={sidebar_position:99999832,title:"1.18.20.23",tags:["Official","Changelog","Preview","1.18"]},c="Minecraft Beta - 1.18.20.23 (Xbox / Windows / Android)",u={unversionedId:"official_changelog/preview/1.18/20/23",id:"official_changelog/preview/1.18/20/23",title:"1.18.20.23",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.18/20/23.mdx",sourceDirName:"official_changelog/preview/1.18/20",slug:"/official_changelog/preview/1.18/20/23",permalink:"/en/docs/official_changelog/preview/1.18/20/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/20/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999832,frontMatter:{sidebar_position:99999832,title:"1.18.20.23",tags:["Official","Changelog","Preview","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.20.25",permalink:"/en/docs/official_changelog/preview/1.18/20/25"},next:{title:"1.18.20.21",permalink:"/en/docs/official_changelog/preview/1.18/20/21"}},p={},d=[],m={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1182023-xbox--windows--android"},"Minecraft Beta - 1.18.20.23 (Xbox / Windows / Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);