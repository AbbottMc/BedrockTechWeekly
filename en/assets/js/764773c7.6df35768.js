"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6351,31164,47058],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=g(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(d,l(l({ref:a},u),{},{components:t})):n.createElement(d,l({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(58168),r=t(96540),o=t(20053),l=t(23104),i=t(56347),s=t(57485),g=t(31682),u=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function c(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,g.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,g]=d({queryString:t,groupId:n}),[p,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),h(e)}),[g,h,o]),tabValues:o}}var y=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:g,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=g[t].value;n!==i&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},g.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),t??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(w,(0,n.A)({},e,a)))}function v(e){const a=(0,y.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},42402:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.15/0/51/gameplay",id:"changelog_source/preview/1.15/0/51/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.15/0/51/gameplay.mdx",sourceDirName:"changelog_source/preview/1.15/0/51",slug:"/changelog_source/preview/1.15/0/51/gameplay",permalink:"/en/docs/changelog_source/preview/1.15/0/51/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.15/0/51/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>Parity:</strong>",id:"parity",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:g},p="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.yg)("h2",{id:"parity"},(0,r.yg)("strong",{parentName:"h2"},"Parity:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fence Gates can now be placed without supporting blocks underneath"),(0,r.yg)("li",{parentName:"ul"},"Damaged Bows can again be used to craft Dispensers (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55861"},"MCPE-55861"),")"),(0,r.yg)("li",{parentName:"ul"},"Flowers can now be removed from flowerpots using interact/right-click"),(0,r.yg)("li",{parentName:"ul"},"Implemented Curse of Binding",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Enchanted Skulls and blocks have the enchanted glow effect"))),(0,r.yg)("li",{parentName:"ul"},"Dropped items now turn into a 3D model and spin"),(0,r.yg)("li",{parentName:"ul"},"Pufferfish now have a middle inflation state when approached",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"We will update the missing sounds in a future update"))),(0,r.yg)("li",{parentName:"ul"},"Podzol is now generated under large Spruce trees when grown by the player"),(0,r.yg)("li",{parentName:"ul"},"Changed Eye of Ender explode particles to match Java"),(0,r.yg)("li",{parentName:"ul"},"Tweaked the texture of the Iron Bars item so they match Java (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-25802"},"MCPE-25802"),")"),(0,r.yg)("li",{parentName:"ul"},"Pumpkins can be placed without a support block underneath"),(0,r.yg)("li",{parentName:"ul"},"Passive mobs now spawn on blocks they are supposed to (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47596"},"MCPE-47596"),")"),(0,r.yg)("li",{parentName:"ul"},"The Wither no longer breaks obsidian during its spawning animation (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59502"},"MCPE-59502"),")"),(0,r.yg)("li",{parentName:"ul"},"Players now receive Conduit Power effect when in the rain (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35941"},"MCPE-35941"),")"),(0,r.yg)("li",{parentName:"ul"},"Boats placed on top of Cactus blocks will now take damage and break\xa0")),(0,r.yg)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.yg)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Most attack goals are now data-driven",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added new documentation for new behavior fields"))),(0,r.yg)("li",{parentName:"ul"},"Most Slime and Swim goals are now data-driven",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added new documentation for new behavior fields"))),(0,r.yg)("li",{parentName:"ul"},"Tree generation is now data-driven"),(0,r.yg)("li",{parentName:"ul"},"Wither skull attacks are now data-driven\xa0")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when clicking 'Read More' on certain resource pack screens\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with invisible Shulker boxes which could cause a crash when trying to open or break them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55894"},"MCPE-55894"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could happen when dispensing Bone Meal into a Grass block (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53033"},"MCPE-53033"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash caused by fire spreading to Beehives\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Accessibility")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that could cause the narrator to read text twice on Xbox One\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gameplay")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added the missing text for locked maps in the Cartography Table (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58527"},"MCPE-58527"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can transition from swimming to running on land more smoothly now"),(0,r.yg)("li",{parentName:"ul"},"Casting a fishing rod whilst running no longer slows the player down (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-56199"},"MCPE-56199"),")"),(0,r.yg)("li",{parentName:"ul"},"The 'Sound the Alarm' achievement is now only triggered by hostile mobs and not players"),(0,r.yg)("li",{parentName:"ul"},"The player's hitbox is now correctly reset when unequipping Elytra mid-flight"),(0,r.yg)("li",{parentName:"ul"},"The correct amount of berries can now consistently be collected from Sweet Berry Bushes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47160"},"MCPE-47160"),")"),(0,r.yg)("li",{parentName:"ul"},"Using shift / sneak will now allow the player to move downwards correctly when swimming"),(0,r.yg)("li",{parentName:"ul"},"Fixed the respawn location so that players no longer wake up with their head in a block after sleeping"),(0,r.yg)("li",{parentName:"ul"},"The Raid bar will now appear correctly when returning to an active Raid from another dimension"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that would prevent Redstone power from passing through barrels after reloading a world (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46742"},"MCPE-46742"),")"),(0,r.yg)("li",{parentName:"ul"},"Falling blocks (such as sand) will no longer break when falling onto retracted pistons (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-20109"},"MCPE-20109"),")"),(0,r.yg)("li",{parentName:"ul"},"TNT no longer drops as an item when exploded"),(0,r.yg)("li",{parentName:"ul"},"Fixed trapdoor collision shape (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-13451"},"MCPE-13451"),")"),(0,r.yg)("li",{parentName:"ul"},"Prevented Elytra gliding rotations on player when in first person view (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53092"},"MCPE-53092"),")"),(0,r.yg)("li",{parentName:"ul"},"Explosions can now deal damage in water"),(0,r.yg)("li",{parentName:"ul"},"Flying with Elytra at high speeds no longer causes sound to become jittery (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19945"},"MCPE-19945"),", ",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52931"},"MCPE-52931"),")"),(0,r.yg)("li",{parentName:"ul"},"Mobs are now damaged and items are destroyed when on top of Cactus blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-14303"},"MCPE-14303"),")\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Mobs")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Increased Iron Golem spawn rate and modified spawn rules (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47157"},"MCPE-47157"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed the jumping animation of tamed horses"),(0,r.yg)("li",{parentName:"ul"},"Fixed Blaze path-finding and navigation (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45469"},"MCPE-45469"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that allowed Ghasts to exist when the difficulty was set to Peaceful (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53383"},"MCPE-53383"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was preventing Pillager Captains from being hostile (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44987"},"MCPE-44987"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was allowing fish to spawn in flowing water above Ice blocks"),(0,r.yg)("li",{parentName:"ul"},"Wolves now spawn in more biomes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49792"},"MCPE-49792"),")"),(0,r.yg)("li",{parentName:"ul"},"Small mobs will no longer get trapped in gaps created by stair blocks"),(0,r.yg)("li",{parentName:"ul"},"Villagers no longer run around inside their houses when being Raided"),(0,r.yg)("li",{parentName:"ul"},"Mobs no longer start shaking when entering minecarts"),(0,r.yg)("li",{parentName:"ul"},"Guardians and Elder Guardians will no longer float in the air as they try and reach water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33641"},"MCPE-33641"),")"),(0,r.yg)("li",{parentName:"ul"},"Tweaked Squid spawn rate and cap"),(0,r.yg)("li",{parentName:"ul"},"Drowned can no longer drop tridents without having them equipped (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32731"},"MCPE-32731"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that prevented cats from sleeping on a bed with the player"),(0,r.yg)("li",{parentName:"ul"},"The Snow Golem can now try and shoot snowballs at mobs when it is behind a fence block (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-24840"},"MCPE-24840"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that allowed Zombie Villagers to break iron doors (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43725"},"MCPE-43725"),")"),(0,r.yg)("li",{parentName:"ul"},"Sitting mobs will no longer slide around and breed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62160"},"MCPE-62160"),")\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Items")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Unloaded crossbows no longer display incorrect icon in inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-53545"},"MCPE-53545"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Graphical")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Stopped offhand shield animation and bow animation from playing at the same time (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41262"},"MCPE-41262"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that was preventing the cubemap from rendering correctly on Xbox One consoles\xa0"),(0,r.yg)("li",{parentName:"ul"},"Items held by Baby Foxes now render correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52885"},"MCPE-52885"),")"),(0,r.yg)("li",{parentName:"ul"},"Stained glass now has the correct colours on maps (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-25702"},"MCPE-25702"),")"),(0,r.yg)("li",{parentName:"ul"},"Enchanted Elytra will now show the enchanted glow when equipped (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-23020"},"MCPE-23020"),")\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Interface")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that could sometimes prevent the loading screen tips from showing correctly"),(0,r.yg)("li",{parentName:"ul"},"Entities and blocks are now shown consistently in the Structure Block's preview"),(0,r.yg)("li",{parentName:"ul"},"The tooltip for leaving a boat is now consistent across platforms"),(0,r.yg)("li",{parentName:"ul"},'The "grow" controller tooltip will now show when pointing Bone Meal at Grass Block or blocks underwater\xa0'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Commands")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updated the grammar in the '/scoreboard' command description to make it consistent with other commands"),(0,r.yg)("li",{parentName:"ul"},"Instant effects now use ticks instead of seconds when used with the '/effect' command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43393"},"MCPE-43393"),")\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Add-Ons")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Implemented a fix to ensure the player's mount updates all riders to ensure consistent smooth rotation for all riders"),(0,r.yg)("li",{parentName:"ul"},"The 'delayed","_","attack' behavior no longer causes mobs to freeze when they lose their target"),(0,r.yg)("li",{parentName:"ul"},"Item tags can now be toggled in the UI using '/gamerule' showtags"),(0,r.yg)("li",{parentName:"ul"},"The 'on","_","unleash' event is now triggered correctly when unleashing from a fence"),(0,r.yg)("li",{parentName:"ul"},"The 'Create New World' button text is now using the global colour component\xa0\xa0"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Character Creator")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that could cause the wings costume piece to disappear with certain hairstyles"),(0,r.yg)("li",{parentName:"ul"},"Fixed the default player model to overcome some texture issues that could be seen when choosing different heights and sizes in the Character Creator"),(0,r.yg)("li",{parentName:"ul"},"Various user interface fixes"),(0,r.yg)("li",{parentName:"ul"},"The Achievements screen can now be viewed through the Character Creator dressing room")))))}c.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),o=t(18228),l=t(19365);const i={},s=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],c={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},87771:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),o=t(34922),l=t(42402);const i={sidebar_position:99999929,title:"1.15.0.51",tags:["Official","Changelog","Preview","1.15"]},s="Minecraft Beta - 1.15.0.51  (Xbox One/Windows 10/Android)",g={unversionedId:"official_changelog/preview/1.15/0/51",id:"official_changelog/preview/1.15/0/51",title:"1.15.0.51",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.15/0/51.mdx",sourceDirName:"official_changelog/preview/1.15/0",slug:"/official_changelog/preview/1.15/0/51",permalink:"/en/docs/official_changelog/preview/1.15/0/51",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.15/0/51.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.15",permalink:"/en/docs/tags/1-15"}],version:"current",sidebarPosition:99999929,frontMatter:{sidebar_position:99999929,title:"1.15.0.51",tags:["Official","Changelog","Preview","1.15"]},sidebar:"changelogSidebar",previous:{title:"1.15.0.53",permalink:"/en/docs/official_changelog/preview/1.15/0/53"},next:{title:"1.14.30.51",permalink:"/en/docs/official_changelog/preview/1.14/30/51"}},u={},p=[],c={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---115051--xbox-onewindows-10android"},"Minecraft Beta - 1.15.0.51  (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);