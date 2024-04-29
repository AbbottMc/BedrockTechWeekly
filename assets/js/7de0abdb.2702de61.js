"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68347,30763,95107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),u=n(67392),s=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=c??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==l&&(d(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},5295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/Education_Edition_-_1.0.1/gameplay",id:"changelog_source/pocket/Education_Edition_-_1.0.1/gameplay",title:"gameplay",description:"For more information about Minecraft: Education Edition, please visit education.minecraft.net",source:"@site/docs/changelog_source/pocket/Education_Edition_-_1.0.1/gameplay.mdx",sourceDirName:"changelog_source/pocket/Education_Edition_-_1.0.1",slug:"/changelog_source/pocket/Education_Edition_-_1.0.1/gameplay",permalink:"/docs/changelog_source/pocket/Education_Edition_-_1.0.1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Education_Edition_-_1.0.1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For more information about Minecraft: Education Edition, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://education.minecraft.net"},"education.minecraft.net"),"  "),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code Builder & Agent"),(0,r.kt)("li",{parentName:"ul"},"Command blocks & minecart with command block"),(0,r.kt)("li",{parentName:"ul"},"Adventure Mode"),(0,r.kt)("li",{parentName:"ul"},"New game rules: DoFireTick, DoMobSpawning, DoTileDrops, MobGriefing, DoEntityDrops, KeepInventory, DoMobLoot, DoDaylightCycle"),(0,r.kt)("li",{parentName:"ul"},"New user interface for Classroom Mode"),(0,r.kt)("li",{parentName:"ul"},"Added the ability to toggle chat & weather in Classroom Mode"),(0,r.kt)("li",{parentName:"ul"},"Added '/position' command to toggle player coordinates on the HUD"),(0,r.kt)("li",{parentName:"ul"},"Add-Ons (Resource Packs)"),(0,r.kt)("li",{parentName:"ul"},"Added new EDU template worlds."),(0,r.kt)("li",{parentName:"ul"},"Added the Storage screen in Settings to manage worlds, resource packs, and behavior packs"),(0,r.kt)("li",{parentName:"ul"},"Villager trading"),(0,r.kt)("li",{parentName:"ul"},"Llamas"),(0,r.kt)("li",{parentName:"ul"},"Shulker Boxes"),(0,r.kt)("li",{parentName:"ul"},"Illagers (Evokers & Vindicators)"),(0,r.kt)("li",{parentName:"ul"},"Vex"),(0,r.kt)("li",{parentName:"ul"},"Woodland Mansions"),(0,r.kt)("li",{parentName:"ul"},"Concrete & concrete powder"),(0,r.kt)("li",{parentName:"ul"},"Glazed terracotta blocks"),(0,r.kt)("li",{parentName:"ul"},"Dyeable & jumpable beds"),(0,r.kt)("li",{parentName:"ul"},"Iron and Gold tools can now be smelted into Iron Nuggets and Gold Nuggets"),(0,r.kt)("li",{parentName:"ul"},"Totem of Undying"),(0,r.kt)("li",{parentName:"ul"},"Off-hand slot (only works for arrows & the Totem of Undying)"),(0,r.kt)("li",{parentName:"ul"},"Mending & Frostwalking enchantments"),(0,r.kt)("li",{parentName:"ul"},"Added a setting to toggle Smooth Lighting")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simplified the world builder command! Typing /worldbuilder or /wb will toggle the world builder ability on and off"),(0,r.kt)("li",{parentName:"ul"},"Fixed the host not having worldbuilder enabled after creating a new world"),(0,r.kt)("li",{parentName:"ul"},"Fixed worlds being limited to 5 players instead of 30 when using Local server option"),(0,r.kt)("li",{parentName:"ul"},"The correct error message will now appear when attempting to join Vanilla games"),(0,r.kt)("li",{parentName:"ul"},"Sounds now properly stop when Global Pause is enabled"),(0,r.kt)("li",{parentName:"ul"},"Fixed performance issues caused by Global Pause"),(0,r.kt)("li",{parentName:"ul"},"Fixed the name of the NPC spawn egg"),(0,r.kt)("li",{parentName:"ul"},"The eating animation will no longer occur when using a Camera"),(0,r.kt)("li",{parentName:"ul"},"Corrected fixed inventory slots not highlighting if hotbar slots 1, 2 or 3 were equipped with an Ender Pearl and the object is thrown"),(0,r.kt)("li",{parentName:"ul"},"Fixed the picture numbers in the Portfolio to support more than 100 pictures"),(0,r.kt)("li",{parentName:"ul"},"The map in Classroom Mode now updates properly after TNT explodes"),(0,r.kt)("li",{parentName:"ul"},"Fixed sound effect when taking pictures using the camera"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that may occur when typing into text fields on macOS Sierra"),(0,r.kt)("li",{parentName:"ul"},"Fixed inventory search not returning results on macOS"),(0,r.kt)("li",{parentName:"ul"},"Fixed severe delays in Classroom Mode when executing commands after an extended time period with a full world"),(0,r.kt)("li",{parentName:"ul"},"Fixed character limits on slates, boards, & posters"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when a NPC was killed while editing its text"),(0,r.kt)("li",{parentName:"ul"},"Worldbuilder ability is no longer enabled by default"),(0,r.kt)("li",{parentName:"ul"},"Fixed the unlock icon so it no longer appears when choosing a skin"),(0,r.kt)("li",{parentName:"ul"},"Placeholder checkboard squares are no longer displayed in Portfolio."),(0,r.kt)("li",{parentName:"ul"},"Fixed inventory slots can now be set when using the /setfixedinvslot command through Classroom Mode")))}d.isMDXComponent=!0},61499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905),i=n(74866),l=n(85162);const c={},u=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},n.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),n.gameplayChangelog,n.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),n.techChangelog):void 0))))}g.isMDXComponent=!0},14044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(61499),i=n(5295);const l={sidebar_position:99999921,title:"Education Edition - 1.0.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},c="Education Edition - 1.0.1",u={unversionedId:"official_changelog/pocket/Education_Edition_-_1.0.1/README",id:"official_changelog/pocket/Education_Edition_-_1.0.1/README",title:"Education Edition - 1.0.1",description:"} techChangelog=/>",source:"@site/docs/official_changelog/pocket/Education_Edition_-_1.0.1/README.mdx",sourceDirName:"official_changelog/pocket/Education_Edition_-_1.0.1",slug:"/official_changelog/pocket/Education_Edition_-_1.0.1/",permalink:"/docs/official_changelog/pocket/Education_Edition_-_1.0.1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Education_Edition_-_1.0.1/README.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u643a\u5e26\u7248",permalink:"/docs/tags/\u643a\u5e26\u7248"},{label:"undefined",permalink:"/docs/tags/undefined"}],version:"current",sidebarPosition:99999921,frontMatter:{sidebar_position:99999921,title:"Education Edition - 1.0.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u643a\u5e26\u7248","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft: New Nintendo 3DS Edition - 1.9",permalink:"/docs/official_changelog/pocket/Minecraft&_New_Nintendo_3DS_Edition_-_1.9/"},next:{title:"Education Edition - 1.0.2",permalink:"/docs/official_changelog/pocket/Education_Edition_-_1.0.2/"}},s={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"education-edition---101"},"Education Edition - 1.0.1"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);