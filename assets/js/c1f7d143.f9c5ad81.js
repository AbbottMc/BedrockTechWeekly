"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84888,29933,4851,95107,42129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},53070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/23/gameplay",id:"changelog_source/preview/1.19/60/23/gameplay",title:"gameplay",description:"Posted: 7 December, 2022",source:"@site/docs/changelog_source/preview/1.19/60/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/gameplay",permalink:"/docs/changelog_source/preview/1.19/60/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 7 December, 2022"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," This week's Preview version is not available on iOS. We apologize for the inconvenience and are working to resolve the issue. ",(0,n.kt)("strong",{parentName:"p"},"Update:")," We are now unblocked and hoping to release the Preview on iOS as well."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/11258984583053",alt:"A Minecraft screenshot featuring chiseled bookshelves and camels."})),(0,n.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,n.kt)("h1",{id:"experimental-features"},(0,n.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,n.kt)("h2",{id:"gameplay"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chiseled Bookshelf no longer triggers Observer blocks on world load")),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respawn Anchor no longer retains its charges if mined with Silk Touch or picked (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145682"},"MCPE-145682"),")"),(0,n.kt)("li",{parentName:"ul"},"Scaffolding now displays particles and produces vibrations when the block under it is destroyed (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163738"},"MCPE-163738"),")"),(0,n.kt)("li",{parentName:"ul"},"The Sculk Shrieker block's shriek sound can now be heard at the longer distance of 32 blocks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163989"},"MCPE-163989"),")")),(0,n.kt)("h2",{id:"gameplay-1"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bamboo sapling will no longer replace double plants when placed (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99806"},"MCPE-99806"),")"),(0,n.kt)("li",{parentName:"ul"},"Campfires do not set players and mobs on fire anymore, but still inflict damage (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98931"},"MCPE-98931)")),(0,n.kt)("li",{parentName:"ul"},"Campfires do not destroy Minecarts and Boats anymore (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109489"},"MCPE-109489"),")"),(0,n.kt)("li",{parentName:"ul"},"Ender Pearls will no longer teleport a sleeping player (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-133984"},"MCPE-133984"),")")),(0,n.kt)("h2",{id:"items"},(0,n.kt)("strong",{parentName:"h2"},"Items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159713"},"MCPE-159713"),")")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ravagers are now able to attack on various partial blocks like Mud (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162483"},"MCPE-162483"),")"),(0,n.kt)("li",{parentName:"ul"},"Glow Squid now emit particles when spawned outside of water")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed structure block UI so the Y value field can be accessed with just the keyboard (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164148"},"MCPE-164148"),")")))}p.isMDXComponent=!0},42940:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/23/tech",id:"changelog_source/preview/1.19/60/23/tech",title:"tech",description:"Components",source:"@site/docs/changelog_source/preview/1.19/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/tech",permalink:"/docs/changelog_source/preview/1.19/60/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Projectile</strong>",id:"projectile",level:2},{value:"<strong>Component</strong>",id:"component",level:3},{value:"<strong>API (Experimental)</strong>",id:"api-experimental",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"components"},(0,n.kt)("strong",{parentName:"h2"},"Components")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters'),(0,n.kt)("li",{parentName:"ul"},"Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack")),(0,n.kt)("h2",{id:"molang"},(0,n.kt)("strong",{parentName:"h2"},"Molang")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.19.60 or higher")))),(0,n.kt)("h2",{id:"projectile"},(0,n.kt)("strong",{parentName:"h2"},"Projectile")),(0,n.kt)("h3",{id:"component"},(0,n.kt)("strong",{parentName:"h3"},"Component")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Projectiles that teleport their owner will no longer do so while their owner is sleeping (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,n.kt)("h2",{id:"api-experimental"},(0,n.kt)("strong",{parentName:"h2"},"API (Experimental)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added method\xa0setOnFire(seconds: number, useEffects?: boolean = true): boolean)which sets an entity on fire (if it is not in water or rain)."),(0,n.kt)("li",{parentName:"ul"},"Added method\xa0extinguishFire(useEffects?: boolean = true): void which extinguishes the fire."),(0,n.kt)("li",{parentName:"ul"},"If an entity is on fire, you can call\xa0getComponent('minecraft:onfire')on it, which returns an object of type\xa0EntityOnFireComponent, which has a property\xa0onFireTicksRemaining."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0viewDirectionwould return the direction from the previous tick"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getEntitiesFromViewDirectionwould use the direction from the previous tick"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getBlockFromViewDirectionwould use the direction from the previous tick"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0headLocationwould return the location from the previous tick"),(0,n.kt)("li",{parentName:"ul"},"Renamed ScriptScriptCommandMessageEvent to ScriptEventCommandMessageEvent")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},70271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(53070),i=a(42940);const s={sidebar_position:99999787,title:"1.19.60.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.60.23",u={unversionedId:"official_changelog/preview/1.19/60/23",id:"official_changelog/preview/1.19/60/23",title:"1.19.60.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/60/23.mdx",sourceDirName:"official_changelog/preview/1.19/60",slug:"/official_changelog/preview/1.19/60/23",permalink:"/docs/official_changelog/preview/1.19/60/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/60/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999787,frontMatter:{sidebar_position:99999787,title:"1.19.60.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.60.24",permalink:"/docs/official_changelog/preview/1.19/60/24"},next:{title:"1.19.60.22",permalink:"/docs/official_changelog/preview/1.19/60/22"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1196023"},"Minecraft Beta & Preview - 1.19.60.23"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);