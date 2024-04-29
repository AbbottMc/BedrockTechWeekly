"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78016,64137,81791,27410,81072],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},96993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/23/gameplay",id:"changelog_source/preview/1.19/60/23/gameplay",title:"gameplay",description:"Posted: 7 December, 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/60/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 7 December, 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This week's Preview version is not available on iOS. We apologize for the inconvenience and are working to resolve the issue. ",(0,r.kt)("strong",{parentName:"p"},"Update:")," We are now unblocked and hoping to release the Preview on iOS as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/11258984583053",alt:"A Minecraft screenshot featuring chiseled bookshelves and camels."})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chiseled Bookshelf no longer triggers Observer blocks on world load")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Respawn Anchor no longer retains its charges if mined with Silk Touch or picked (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145682"},"MCPE-145682"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding now displays particles and produces vibrations when the block under it is destroyed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163738"},"MCPE-163738"),")"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Shrieker block's shriek sound can now be heard at the longer distance of 32 blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163989"},"MCPE-163989"),")")),(0,r.kt)("h2",{id:"gameplay-1"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bamboo sapling will no longer replace double plants when placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99806"},"MCPE-99806"),")"),(0,r.kt)("li",{parentName:"ul"},"Campfires do not set players and mobs on fire anymore, but still inflict damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98931"},"MCPE-98931)")),(0,r.kt)("li",{parentName:"ul"},"Campfires do not destroy Minecarts and Boats anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109489"},"MCPE-109489"),")"),(0,r.kt)("li",{parentName:"ul"},"Ender Pearls will no longer teleport a sleeping player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-133984"},"MCPE-133984"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159713"},"MCPE-159713"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ravagers are now able to attack on various partial blocks like Mud (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162483"},"MCPE-162483"),")"),(0,r.kt)("li",{parentName:"ul"},"Glow Squid now emit particles when spawned outside of water")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed structure block UI so the Y value field can be accessed with just the keyboard (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164148"},"MCPE-164148"),")")))}p.isMDXComponent=!0},38617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/60/23/tech",id:"changelog_source/preview/1.19/60/23/tech",title:"tech",description:"Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/60/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Projectile</strong>",id:"projectile",level:2},{value:"<strong>Component</strong>",id:"component",level:3},{value:"<strong>API (Experimental)</strong>",id:"api-experimental",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"components"},(0,r.kt)("strong",{parentName:"h2"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters'),(0,r.kt)("li",{parentName:"ul"},"Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.19.60 or higher")))),(0,r.kt)("h2",{id:"projectile"},(0,r.kt)("strong",{parentName:"h2"},"Projectile")),(0,r.kt)("h3",{id:"component"},(0,r.kt)("strong",{parentName:"h3"},"Component")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projectiles that teleport their owner will no longer do so while their owner is sleeping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,r.kt)("h2",{id:"api-experimental"},(0,r.kt)("strong",{parentName:"h2"},"API (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added method\xa0setOnFire(seconds: number, useEffects?: boolean = true): boolean)which sets an entity on fire (if it is not in water or rain)."),(0,r.kt)("li",{parentName:"ul"},"Added method\xa0extinguishFire(useEffects?: boolean = true): void which extinguishes the fire."),(0,r.kt)("li",{parentName:"ul"},"If an entity is on fire, you can call\xa0getComponent('minecraft:onfire')on it, which returns an object of type\xa0EntityOnFireComponent, which has a property\xa0onFireTicksRemaining."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0viewDirectionwould return the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getEntitiesFromViewDirectionwould use the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getBlockFromViewDirectionwould use the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0headLocationwould return the location from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Renamed ScriptScriptCommandMessageEvent to ScriptEventCommandMessageEvent")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},78696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(96993),i=a(38617);const s={sidebar_position:99999787,title:"1.19.60.23",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.60.23",u={unversionedId:"official_changelog/preview/1.19/60/23",id:"official_changelog/preview/1.19/60/23",title:"1.19.60.23",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/60/23.mdx",sourceDirName:"official_changelog/preview/1.19/60",slug:"/official_changelog/preview/1.19/60/23",permalink:"/en/docs/official_changelog/preview/1.19/60/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/60/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999787,frontMatter:{sidebar_position:99999787,title:"1.19.60.23",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.60.24",permalink:"/en/docs/official_changelog/preview/1.19/60/24"},next:{title:"1.19.60.22",permalink:"/en/docs/official_changelog/preview/1.19/60/22"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1196023"},"Minecraft Beta & Preview - 1.19.60.23"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);