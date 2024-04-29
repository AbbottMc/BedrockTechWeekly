"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70144,64137,81791,39149,64295,51382,64368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},5113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/gameplay",id:"changelog_source/preview/1.20/30/22/gameplay",title:"gameplay",description:"Posted: 17 August 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/30/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Updated Play Screen</strong>",id:"updated-play-screen",level:2},{value:"<strong>A screenshot of the updated Play screens in Minecraft</strong>",id:"a-screenshot-of-the-updated-play-screens-in-minecraft",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Text-To-Speech</strong>",id:"text-to-speech",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Game rules</strong>",id:"game-rules",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 17 August 2023"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/18619365356813",alt:"A Minecraft screenshot of a calibrated sculk sensor and redstone powering a redstone lamp. The scene is set in a cherry grove at night."})),(0,n.kt)("p",null,"We have some more fixes and tweaks ready for you in this week\u2019s Minecraft Preview. Please report and upvote any bugs you encounter at\xa0",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),", and enjoy the update!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Update on 1.20.20"),(0,n.kt)("br",{parentName:"p"}),"\n","Thank you to all who participated in the 1.20.20.xx Minecraft Preview and Betas! We have a lot of exciting fixes and features prepared, but aren't quite ready to release these to everyone just yet. So, we are continuing with the 1.20.30.xx Preview and Betas, and when we are ready we'll have a combined update that is slightly larger than usual. If you want to read more about what is lined up you can read through all of the recent changelogs\xa0",(0,n.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/hc/en-us/sections/360001185332"},"here"),". Thank you for your patience!"),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"updated-play-screen"},(0,n.kt)("strong",{parentName:"h2"},"Updated Play Screen")),(0,n.kt)("h2",{id:"a-screenshot-of-the-updated-play-screens-in-minecraft"},(0,n.kt)("strong",{parentName:"h2"},(0,n.kt)("img",{parentName:"strong",src:"https://feedback.minecraft.net/hc/article_attachments/18619725686029",alt:"A screenshot of the updated Play screens in Minecraft"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Play screen is being updated with improved navigation, responsive worlds components, and a new look and feel."),(0,n.kt)("li",{parentName:"ul"},"The Friends tab and Realms tab are now separated, for clearer feature separation"),(0,n.kt)("li",{parentName:"ul"},"The Create New World flow and Create From Template flow are also separated for a clearer path into the game"),(0,n.kt)("li",{parentName:"ul"},"The work on the Play screen is still in progress since a couple of features are missing, but we would love to hear your feedback at ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/MinecraftPlayScreens"},"aka.ms/MinecraftPlayScreens"))),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calibrated Sculk Sensor's amethyst crystal now lights up alongside the rest of the block during its active phase (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168813"},"MCPE-168813"),") (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169953"},"MCPE-169953"),")"),(0,n.kt)("li",{parentName:"ul"},"Hanging Signs placed with commands now have the proper hitbox (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163456"},"MCPE-163456"),")"),(0,n.kt)("li",{parentName:"ul"},'"stained',"_","hardened","_",'clay" block is now split into unique instances, namely "white',"_",'terracotta", "orange',"_",'terracotta", "magenta',"_",'terracotta", "light',"_","blue","_",'terracotta", "yellow',"_",'terracotta", "lime',"_",'terracotta", "pink',"_",'terracotta", "gray',"_",'terracotta", "light',"_","gray","_",'terracotta", "cyan',"_",'terracotta", "purple',"_",'terracotta", "blue',"_",'terracotta", "brown',"_",'terracotta", "green',"_",'terracotta", "red',"_",'terracotta", and "black',"_",'terracotta"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Commands will still work with "stained',"_","hardened","_",'clay", but "stained',"_","hardened","_","clay\" won't be suggested in the command prompt, rather the new names will"))),(0,n.kt)("li",{parentName:"ul"},"Third person camera no longer phases through the lower part of Composter (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-171213"},"MCPE-171213"),")\xa0")),(0,n.kt)("h2",{id:"stability-and-performance"},(0,n.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a Bedrock Dedicated Servers memory leak while loading chunks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-17527"},"BDS-17527"),")\xa0")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed ZL/ZR icons for Joy-Con and Switch Pro controller on Android"),(0,n.kt)("li",{parentName:"ul"},"Caret can be re-positioned in textfield by taps or mouse clicks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131572"},"MCPE-131572"),")"),(0,n.kt)("li",{parentName:"ul"},"The \u201cPause menu\u201d has been renamed to \u201cGame menu\u201d in the user interface"),(0,n.kt)("li",{parentName:"ul"},"Fixed layering issue causing the underground vignette effect to draw on top of all other HUD elements (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159217"},"MCPE-159217"),")")),(0,n.kt)("h2",{id:"text-to-speech"},(0,n.kt)("strong",{parentName:"h2"},"Text-To-Speech")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Text-to-speech narrator will now read out the instruction text as well as the confirm button in the Safe Area menu\xa0")),(0,n.kt)("h2",{id:"commands"},(0,n.kt)("strong",{parentName:"h2"},"Commands")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Blocks that had an alias prior to being flattened can now be properly referenced in commands\xa0")),(0,n.kt)("h2",{id:"game-rules"},(0,n.kt)("strong",{parentName:"h2"},"Game rules")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Changed "recipes unlock" game rule to be enabled by default. This means that recipe unlocking will be enabled by default when creating a new world but it can still be toggled off in the Advanced Settings. Existing worlds are not affected by this change.\xa0')),(0,n.kt)("h2",{id:"gameplay"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crossbow loses durability when shooting, not when drawn (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46490"},"MCPE-46490"),")")))}p.isMDXComponent=!0},15252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(81279),i=(a(1433),a(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/30/22/tech",id:"changelog_source/preview/1.20/30/22/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"editor"},(0,n.kt)("strong",{parentName:"h2"},"Editor")),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels withed ",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,n.kt)("p",null,"Fixes this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minor updates to the Reload button to Tool mode for reloading scripts and refreshing the UI"),(0,n.kt)("li",{parentName:"ul"},"IPropertyPane",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"collapsed")," to check if the pane is expanded or collapsed"),(0,n.kt)("li",{parentName:"ul"},"Added functions\xa0",(0,n.kt)("em",{parentName:"li"},"collapse")," and\xa0",(0,n.kt)("em",{parentName:"li"},"expand"),"\xa0to control\xa0",(0,n.kt)("em",{parentName:"li"},"collapsed"),"\xa0state")))),(0,n.kt)("h2",{id:"items"},(0,n.kt)("strong",{parentName:"h2"},"Items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Released the "minecraft:food" item component out of experimental in json formats 1.20.30 and higher\xa0'),(0,n.kt)("li",{parentName:"ul"},'Added "minecraft:interact',"_",'button" item component to enable and set text on the interact button in json formats 1.20.30 and above\xa0')),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed lighting of items in hand in the Deferred Technical Preview\xa0"),(0,n.kt)("li",{parentName:"ul"},"Optimization and fixes for point light contributions")))}m.isMDXComponent=!0},81279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed issue where prototype properties are not possible to redefine using\xa0defineProperty (MCPE-174073)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issue where prototype properties are not possible to redefine using\xa0",(0,n.kt)("em",{parentName:"li"},"defineProperty")," (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174073"},"MCPE-174073"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"ItemStack",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"getCanPlaceOn()")," and\xa0",(0,n.kt)("em",{parentName:"li"},"getCanDestroy()")),(0,n.kt)("li",{parentName:"ul"},"Added upper maximum limit of 255 to\xa0",(0,n.kt)("em",{parentName:"li"},"amount")," property - will throw if exceeds"))),(0,n.kt)("li",{parentName:"ul"},"Entity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getProperty(identifier: string): boolean | number | string | undefined"),"-"," Gets an Entity Property"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"setProperty(identifier: string, value: boolean | number | string): void"),"-"," Sets an Entity Property during the next tick"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"resetProperty(identifier: string): boolean | number | string;"),"-"," Resets an Entity Property to its default value during the next tick and returns the default value"))),(0,n.kt)("li",{parentName:"ul"},"beforeEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added event/property\xa0",(0,n.kt)("em",{parentName:"li"},"removeEvent")))),(0,n.kt)("li",{parentName:"ul"},"afterEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed event/property\xa0",(0,n.kt)("em",{parentName:"li"},"removedEvent")," to\xa0",(0,n.kt)("em",{parentName:"li"},"removeEvent")))),(0,n.kt)("li",{parentName:"ul"},"Class\xa0",(0,n.kt)("em",{parentName:"li"},"EntityRemovedAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed field\xa0",(0,n.kt)("em",{parentName:"li"},"removedEntity")," to\xa0",(0,n.kt)("em",{parentName:"li"},"removedEntityId"),":\xa0",(0,n.kt)("em",{parentName:"li"},"removedEntityId: string")),(0,n.kt)("li",{parentName:"ul"},"Added field\xa0",(0,n.kt)("em",{parentName:"li"},"typeId: string")))),(0,n.kt)("li",{parentName:"ul"},"Added class\xa0",(0,n.kt)("em",{parentName:"li"},"EntityRemovedBeforeEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added field\xa0",(0,n.kt)("em",{parentName:"li"},"removedEntity: Entity")))),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"EquipmentSlot")," to\xa0",(0,n.kt)("em",{parentName:"li"},"5.0"),"\xa0and changed enum values to uppercase"),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"EntityEquippableComponent")," to\xa0",(0,n.kt)("em",{parentName:"li"},"5.0")),(0,n.kt)("li",{parentName:"ul"},"Scoreboard",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"setObjectiveAtDisplaySlot")," return type now correctly set to ",(0,n.kt)("em",{parentName:"li"},"ScoreboardObjective")," or undefined"))),(0,n.kt)("li",{parentName:"ul"},"ScoreboardIdentity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getEntity")," return type now correctly set to Entity or undefined"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"setWeather")," API can now take an optional duration parameter to set the weather duration"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"heightRange: NumberRange"),"-"," Gets min/max dimension height limits."),(0,n.kt)("li",{parentName:"ul"},"Adding Player.isSleeping and Player.isEmoting")))}p.isMDXComponent=!0},1433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},72090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88247),i=a(5113),l=a(15252);const s={sidebar_position:99999754,title:"1.20.30.22",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.30.22",u={unversionedId:"official_changelog/preview/1.20/30/22",id:"official_changelog/preview/1.20/30/22",title:"1.20.30.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/30/22.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/22",permalink:"/en/docs/official_changelog/preview/1.20/30/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999754,frontMatter:{sidebar_position:99999754,title:"1.20.30.22",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.24",permalink:"/en/docs/official_changelog/preview/1.20/30/24"},next:{title:"1.20.30.21",permalink:"/en/docs/official_changelog/preview/1.20/30/21"}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1203022"},"Minecraft Beta & Preview - 1.20.30.22"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);