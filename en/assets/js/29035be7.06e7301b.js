"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[18918,31164,43115,66619,98737],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,d=p["".concat(s,".").concat(c)]||p[c]||u[c]||l;return a?n.createElement(d,o(o({ref:t},g),{},{components:a})):n.createElement(d,o({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),m=a(31682),g=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,m.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,m]=d({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,g.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return c({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),y(e)}),[m,y,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:m,rightElement:g}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=m[a].value;n!==i&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),g?r.createElement("div",{className:"w-full"},g):void 0)}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function w(e){const t=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},19921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/80/23/gameplay",id:"changelog_source/preview/1.20/80/23/gameplay",title:"gameplay",description:"Posted: March 20, 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/80/23",slug:"/changelog_source/preview/1.20/80/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/80/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"<strong>Experimental Features:</strong>",id:"experimental-features",level:2},{value:"<strong>Trial Chambers Exploration Map</strong>",id:"trial-chambers-exploration-map",level:2},{value:"<strong>Add Friends</strong>\xa0",id:"add-friends",level:2},{value:"<strong>Enhancements to finding friends in Bedrock Preview!</strong>",id:"enhancements-to-finding-friends-in-bedrock-preview",level:2},{value:"<strong>Features and Bug Fixes:</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Armadillo</strong>",id:"armadillo",level:2},{value:"<strong>Wolf</strong>",id:"wolf",level:2},{value:"<strong>Wolf Armor</strong>",id:"wolf-armor",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Realms</strong>",id:"realms",level:2}],g={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," March 20, 2024"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on Minecraft Preview and Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("p",null,"A new Minecraft Preview has begun to roll out! This week we\u2019re introducing a variety of improvements, like Exploration Maps to find Trial Chambers. Your continued feedback is really helping shape the 1.21 update! Please let us know what you think at ",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net"},"feedback.minecraft.net")," and report any bugs you find on ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/25159011168269",alt:"trial-chamber-locator-map.png"})),(0,r.yg)("h2",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Features:")),(0,r.yg)("h2",{id:"trial-chambers-exploration-map"},(0,r.yg)("strong",{parentName:"h2"},"Trial Chambers Exploration Map")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for a Locator Map pointing to a nearby Trial Chamber")),(0,r.yg)("h2",{id:"add-friends"},(0,r.yg)("strong",{parentName:"h2"},"Add Friends"),"\xa0"),(0,r.yg)("h2",{id:"enhancements-to-finding-friends-in-bedrock-preview"},(0,r.yg)("strong",{parentName:"h2"},"Enhancements to finding friends in Bedrock Preview!")),(0,r.yg)("p",null,"In the latest Bedrock preview we improved the way you connect with players in Minecraft! To help you follow & friend players we added multiple features including:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Lists of recommended and suggested friends"),(0,r.yg)("li",{parentName:"ul"},"Improved search to give partial results while you are typing"),(0,r.yg)("li",{parentName:"ul"},"Ability to share your profile information through a QR code or a share link"),(0,r.yg)("li",{parentName:"ul"},"A handy button that copies your Gamertag to the clipboard")),(0,r.yg)("p",null,"Access this new screen from the Play menu:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In the new UI, click \u201cSearch for Players\u201d from the Friends Drawer"),(0,r.yg)("li",{parentName:"ul"},"In the old UI, click \u201cAdd Friends\u201d from the Friends tab")),(0,r.yg)("p",null,"Please try out these new features and let us know what you think at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/mcaddfriendsfeedback"},"aka.ms/mcaddfriendsfeedback"),"!  "),(0,r.yg)("h2",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Features and Bug Fixes:")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue preventing iOS devices from auto-locking and going to sleep when idle after the player leaves any world (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179214"},"MCPE-179214"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Camera now changes to third person view on death screen (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179365"},"MCPE-179365"),")"),(0,r.yg)("li",{parentName:"ul"},"Holding the jump button while swimming underwater no longer results in a player drowning while appearing to be swimming at water\u2019s surface (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170969"},"MCPE-170969"),")"),(0,r.yg)("li",{parentName:"ul"},"Holding the jump button while swimming horizontally (not upwards) at or near water\u2019s surface will keep the player swimming at the surface at a height where breathing is possible (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170969"},"MCPE-170969"),")")),(0,r.yg)("h2",{id:"armadillo"},(0,r.yg)("strong",{parentName:"h2"},"Armadillo")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Armadillos no longer rotate to look at the player shortly after rolling up")),(0,r.yg)("h2",{id:"wolf"},(0,r.yg)("strong",{parentName:"h2"},"Wolf")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wolf variants spawned using the \u201c/summon\u201d command can now be tamed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179414"},"MCPE-179414"),")"),(0,r.yg)("li",{parentName:"ul"},"The rules for selecting certain Wolf variants when spawned using a Spawn Egg or the \u201c/summon\u201d command have been broadened:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Rusty Wolf is now selected in all Jungle biomes, as defined by the biome tag \u201cminecraft:jungle\u201d"),(0,r.yg)("li",{parentName:"ul"},"Spotted Wolf is now selected in all Savanna biomes, as defined by the biome tag \u201cminecraft:savanna\u201d"),(0,r.yg)("li",{parentName:"ul"},"Striped Wolf is now selected in all Badlands biomes, as defined by the biome tag \u201cminecraft:mesa\u201d")))),(0,r.yg)("h2",{id:"wolf-armor"},(0,r.yg)("strong",{parentName:"h2"},"Wolf Armor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wolf Armor now renders correctly when placed in Item Frames (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179564"},"MCPE-179564"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the new \u201cYou Died!\u201d screen to be available when the Education Edition toggle is enabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168125"},"MCPE-168125"),")"),(0,r.yg)("li",{parentName:"ul"},"The updated \u201cYou Died!\u201d screen is no longer experimental. Thank you for all of the feedback you have sent in about this updated feature!")),(0,r.yg)("h2",{id:"realms"},(0,r.yg)("strong",{parentName:"h2"},"Realms")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Guest users in split-screen multiplayer will no longer trigger Realm Events"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where enabling Realms Stories required a restart (Preview Only)"),(0,r.yg)("li",{parentName:"ul"},"Players can now see themselves in the \u2018Recently Played\u2019 section of Realms Stories, if they have played recently"),(0,r.yg)("li",{parentName:"ul"},"Other bug fixes and stability updates")))}u.isMDXComponent=!0},9661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));a(88502);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/80/23/tech",id:"changelog_source/preview/1.20/80/23/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/23",slug:"/changelog_source/preview/1.20/80/23/tech",permalink:"/en/docs/changelog_source/preview/1.20/80/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Entity Components</strong>",id:"entity-components",level:2},{value:"<strong>Recipes</strong>",id:"recipes",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>General</strong>",id:"general-1",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:2},{value:"<strong>Entity Components</strong>",id:"entity-components-1",level:2},{value:"<strong>Items</strong>",id:"items",level:2}],g={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the primary user login was not resolved before launching the world when performing a protocol launch using ",(0,r.yg)("em",{parentName:"li"},"connect?localLevelId=")," ",(0,r.yg)("em",{parentName:"li"},"or")," ",(0,r.yg)("em",{parentName:"li"},"connect?localWorld=")," (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCL-24096"},"MCL-24096"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that prevented custom features in behavior packs from loading"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash during the load process of localization strings")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Moved the /hud command out of Upcoming Creator Features experimental toggle.")),(0,r.yg)("h2",{id:"add-ons-and-script-engine"},(0,r.yg)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Blocks using custom tags in the \u201ccrafting","_","tags\u201d field of their custom blocks with a \u201cminecraft:crafting","_","table\u201d component now support custom unlockable recipes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175555"},"MCPE-175555"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This fixed a bug where some recipes did not show up when recipe unlocking was on")))),(0,r.yg)("h2",{id:"entity-components"},(0,r.yg)("strong",{parentName:"h2"},"Entity Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added the \u201cminecraft:body","_","rotation","_","blocked\u201d component, which prevents an entity from visually rotating their body to match their own facing direction"),(0,r.yg)("li",{parentName:"ul"},"The durations and cooldowns of \u201cbehavior.timer","_","flag","_","1,\u201d \u201cbehavior.timer","_","flag","_","2,\u201d and \u201cbehavior.timer","_","flag","_","3\u201d are now correctly randomized on both start and stop, rather than only on spawn")),(0,r.yg)("h2",{id:"recipes"},(0,r.yg)("strong",{parentName:"h2"},"Recipes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"assume","_","symmetry")," boolean property for Shaped Recipes to allow for symmetrical shaped recipes with different outputs")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u201cred","_","flower\u201d block is now split into unique instances: \u201cpoppy\u201d, \u201cblue","_","orchid\u201d, \u201callium\u201d, \u201cazure","_","bluet\u201d, \u201cred","_","tulip\u201d, \u201corange","_","tulip\u201d, \u201cwhite","_","tulip\u201d, \u201cpink","_","tulip\u201d, \u201coxeye","_","daisy\u201d, \u201ccornflower\u201d, and \u201clily","_","of","_","the","_","valley\u201d"),(0,r.yg)("li",{parentName:"ul"},"\u201ccoral","_","fan","_","dead\u201d block is now split into unique instances: \u201cdead","_","tube","_","coral","_","fan\u201d, \u201cdead","_","brain","_","coral","_","fan\u201d, \u201cdead","_","bubble","_","coral","_","fan\u201d, \u201cdead","_","fire","_","coral","_","fan\u201d and \u201cdead","_","horn","_","coral","_","fan\u201d  ")),(0,r.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.yg)("h2",{id:"editor"},(0,r.yg)("strong",{parentName:"h2"},"Editor")),(0,r.yg)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.yg)("strong",{parentName:"p"},"#BedrockEditor.")),(0,r.yg)("p",null,"Learn ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," forum to engage with the team, and get started building extensions via the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,r.yg)("p",null,"Improvements this week:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Hovering over tool rail will now expand modal tool drawer if it\u2019s not locked"),(0,r.yg)("li",{parentName:"ul"},"Updated Quick Start panel information")),(0,r.yg)("h2",{id:"general-1"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added an optional ",(0,r.yg)("em",{parentName:"li"},"SpawnEntityOptions")," with a boolean ",(0,r.yg)("em",{parentName:"li"},"initialPersistence")," field to the ",(0,r.yg)("em",{parentName:"li"},"spawnEntity(\u2026)")," function to support persistent entities in Editor tooling"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"StructureManager.place")," now places rotated structures the same way as the /structure command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179447"},"MCPE-179447"),")"),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"getItemStack(amount?: number, withData?: boolean): ItemStack | undefined")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"getItemStack(amount?: number): ItemStack | undefined")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"EntityAgeableComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"transformToItem")," to ",(0,r.yg)("em",{parentName:"li"},"beta")))),(0,r.yg)("li",{parentName:"ul"},"EntityDefinitionFeedItem",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updated property ",(0,r.yg)("em",{parentName:"li"},"item")," to return name with namespace in ",(0,r.yg)("em",{parentName:"li"},"beta")))),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"EntityTypeFamilyComponent")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentTickEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018onTick\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentEntityFallOnEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018onEntityFallOn\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentPlayerPlaceBeforeEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018beforeOnPlayerPlace\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentPlayerInteractEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018onPlayerInteract\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentPlayerDestroyEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018onPlayerDestroy\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockComponentOnPlaceEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added \u2018onPlace\u2019"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"ItemComponentRegistry")," for ",(0,r.yg)("em",{parentName:"li"},"beta")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"ItemCustomComponent")," for ",(0,r.yg)("em",{parentName:"li"},"beta")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"ItemComponentUseEvent")," for ",(0,r.yg)("em",{parentName:"li"},"beta"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"structureManager")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")))),(0,r.yg)("li",{parentName:"ul"},"Structure Manager",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"createEmpty")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"delete")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"get")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"place")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"id")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"getBlockPermutation")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"getIsWaterlogged")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"isValid")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructureSaveMode")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructureRotation")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructureAnimationMode")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructureMirrorAxis")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Removed ",(0,r.yg)("em",{parentName:"li"},"StructureReadOptions")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructureCreateOptions")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"StructurePlaceOptions")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0")),(0,r.yg)("li",{parentName:"ul"},"Moved ",(0,r.yg)("em",{parentName:"li"},"InvalidStructureError")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.10.0"))),(0,r.yg)("h2",{id:"blocks-1"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added \u2018minecraft:entity","_","fall","_","on\u2019 block component behind the Beta API experiment"),(0,r.yg)("li",{parentName:"ul"},"Added \u2018minecraft:tick\u2019 block component behind the Beta API experiment")),(0,r.yg)("h2",{id:"entity-components-1"},(0,r.yg)("strong",{parentName:"h2"},"Entity Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"passengerMaxWidth")," to ",(0,r.yg)("em",{parentName:"li"},"EntityRideableComponent")),(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"seatRotation")," to ",(0,r.yg)("em",{parentName:"li"},"Seat"))),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added \u2018minecraft:custom","_","components\u2019 item component under the Beta APIs feature flag")))}u.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(18228),o=a(19365);const i={},s=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(18228),o=a(19365);const i={},s=void 0,m={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},g={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(o.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},76786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>g,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),l=a(34922),o=a(19921),i=a(9661);const s={sidebar_position:99999726,title:"1.20.80.23",tags:["Official","Changelog","Preview","1.20"]},m="Minecraft Beta & Preview - 1.20.80.23",g={unversionedId:"official_changelog/preview/1.20/80/23",id:"official_changelog/preview/1.20/80/23",title:"1.20.80.23",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/80/23.mdx",sourceDirName:"official_changelog/preview/1.20/80",slug:"/official_changelog/preview/1.20/80/23",permalink:"/en/docs/official_changelog/preview/1.20/80/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/80/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999726,frontMatter:{sidebar_position:99999726,title:"1.20.80.23",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.80.24",permalink:"/en/docs/official_changelog/preview/1.20/80/24"},next:{title:"1.20.80.22",permalink:"/en/docs/official_changelog/preview/1.20/80/22"}},p={},u=[],c={toc:u},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1208023"},"Minecraft Beta & Preview - 1.20.80.23"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}y.isMDXComponent=!0}}]);