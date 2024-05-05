"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20316,43115,81034,29098,93327,46698],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),i=a(20053),o=a(23104),l=a(56347),s=a(57485),c=a(31682),p=a(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=g({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=s??u;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=h(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function w(e){const t=(0,y.A)();return r.createElement(_,(0,n.A)({key:String(t)},e))}},2323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),i=a(84997),o=a(70031),l=(a(83627),a(18421),a(88502));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/50/20/tech",id:"changelog_source/preview/1.20/50/20/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/50/20",slug:"/changelog_source/preview/1.20/50/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/50/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Editor</strong>",id:"editor",level:3},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Animations",id:"animations",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Cameras",id:"cameras",level:2},{value:"AI Goal Components",id:"ai-goal-components",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Components",id:"components",level:2},{value:"Items",id:"items",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Molang",id:"molang",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Performance and Stability",id:"performance-and-stability",level:2}],d={toc:m},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"editor"},(0,r.yg)("strong",{parentName:"h3"},"Editor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added eventing support for\xa0",(0,r.yg)("em",{parentName:"p"},"ExtensionContext"),"\xa0API")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added new after event\xa0",(0,r.yg)("em",{parentName:"p"},"ModeChangeAfterEvent"),"\xa0and signal\xa0",(0,r.yg)("em",{parentName:"p"},"ModeChangeAfterEventSignal"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed a bug where Cube Brush preview wasn't getting cleared when swapping to Crosshair mid-brush painting\xa0"))),(0,r.yg)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved some of the common scripting error messages to provide better context and information")),(0,r.yg)("h2",{id:"animations"},"Animations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed unreliability around\xa0",(0,r.yg)("em",{parentName:"li"},"query.is","_","alive")," on Server")),(0,r.yg)("h2",{id:"blocks"},"Blocks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Blocks with the "minecraft:cardinal',"_",'direction", "minecraft:facing',"_",'direction", or "minecraft:block',"_",'face" states as part of the "minecraft:placement',"_",'direction" or "minecraft:placement',"_",'position" BlockTraits are rotated/mirrored properly by Structure Blocks'),(0,r.yg)("li",{parentName:"ul"},"Structure Void blocks once again prevents interaction with blocks and entities placed behind them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175237",title:"https://bugs.mojang.com/browse/MCPE-175237"},"MCPE-175237"),")"),(0,r.yg)("li",{parentName:"ul"},'"planks" block is now split into unique instances "oak',"_",'planks", "spruce',"_",'planks", "birch',"_",'planks", "jungle',"_",'planks", "acacia',"_",'planks", "dark',"_","oak","_",'planks"'),(0,r.yg)("li",{parentName:"ul"},'Commands will still work with "planks", however, "planks" block will not be suggested\xa0'),(0,r.yg)("li",{parentName:"ul"},'"stone" block is now split into unique instances: "stone", "granite", "polished',"_",'granite", "diorite", "polished',"_",'diorite", "andesite" and "polished',"_",'andesite"\xa0')),(0,r.yg)("h2",{id:"cameras"},"Cameras"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a content warning for when the camera is placed outside of the player's chunk radius\xa0")),(0,r.yg)("h2",{id:"ai-goal-components"},"AI Goal Components"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'Added "minecraft:behavior.melee',"_","box","_",'attack" behavior which functions the same as "minecraft:behavior.melee',"_",'attack" but uses bounds based attack reach calculations')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The\xa0",(0,r.yg)("em",{parentName:"p"},"reach","_","multiplier"),"\xa0attribute is removed and replaced with\xa0",(0,r.yg)("em",{parentName:"p"},"box","_","increase"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reach is calculated by increasing the bounds of the attacking mobs in the xz-plane by\xa0",(0,r.yg)("em",{parentName:"p"},"box","_","increase"),'\xa0blocks to create an "attack box". If the attack box intersects with the target\'s bounds the attacking mob can reach it'))),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(l.default,{techSapi:(0,r.yg)(i.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"components"},"Components"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Added "minecraft:can',"_","join","_",'raid" component to allow entities to join existing raids')),(0,r.yg)("h2",{id:"items"},"Items"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Deprecated the "tag:" legacy item component and released the "minecraft:tags" item component out of experimental in json formats 1.20.50 and higher')),(0,r.yg)("h2",{id:"mobs"},"Mobs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue preventing mobs from spawning further than 6 chunks away from the nearest player even if the server's simulation range is larger than 6 chunks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102197"},"MCPE-102197)"))),(0,r.yg)("h2",{id:"molang"},"Molang"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed animation controller loading to use the pack's\xa0",(0,r.yg)("em",{parentName:"p"},"min","_","engine","_","version"),"\xa0rather than the file's\xa0",(0,r.yg)("em",{parentName:"p"},"format","_","version"),"\xa0to determine the Molang Version. This fix applies to animation controllers in packs with a\xa0",(0,r.yg)("em",{parentName:"p"},"min","_","engine","_","version")," of 1.20.50 or higher\xa0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The following Molang queries are Deprecated and will no longer be available in packs with a\xa0",(0,r.yg)("em",{parentName:"p"},"min","_","engine","_","version"),"\xa0of 1.20.50 or higher"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replaced with\xa0",(0,r.yg)("em",{parentName:"p"},"query.timer","_","flag","_","1"),", set by\xa0",(0,r.yg)("em",{parentName:"p"},"behavior.timer","_","flag","_","1"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replaced with\xa0",(0,r.yg)("em",{parentName:"p"},"query.timer","_","flag","_","2"),", set by\xa0",(0,r.yg)("em",{parentName:"p"},"behavior.timer","_","flag","_","2"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replaced with\xa0",(0,r.yg)("em",{parentName:"p"},"query.timer","_","flag","_","3"),", set by\xa0",(0,r.yg)("em",{parentName:"p"},"behavior.timer","_","flag","_","3"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It was only used to adjust the head animation of the camel as it came out of dash cooldown")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Camel animation uses\xa0",(0,r.yg)("em",{parentName:"p"},"variable.dash","_","cooldown","_","progress"),"\xa0in camel.entity.json now")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"query.is","_","scenting"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"query.is","_","rising"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"query.is","_","feeling","_","happy"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"query.dash","_","cooldown","_","progress")))),(0,r.yg)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed\xa0",(0,r.yg)("em",{parentName:"li"},"CraftingEventPacket"))),(0,r.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.yg)("h2",{id:"script-api-1"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(l.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"graphical"},"Graphical"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Changed the Bloom toggle in the Deferred Graphics Video Settings to an intensity slider. The player can now configure bloom intensity to their liking. Bloom can still be disabled by setting the slider to 0"),(0,r.yg)("li",{parentName:"ul"},"Fixed fullscreen overlays not being displayed when being submerged in Lava and Powdered Snow in the Deferred Technical Preview"),(0,r.yg)("li",{parentName:"ul"},"Fixed missing Hoppers within Minecarts in the Deferred Technical Preview\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where certain light emitting blocks (e.g., Sea Lantern, Glowstone, Magma, etc...) could not be turned into point lights in the Deferred Technical Preview\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed the appearance of rain, snow, and other weather effects in the Deferred Technical Preview\xa0"),(0,r.yg)("li",{parentName:"ul"},"Improved the quality of light sources over large distances in the Deferred Technical Preview\xa0"),(0,r.yg)("li",{parentName:"ul"},"Balanced the brightness of light emitted from emissive-only blocks in the Deferred Technical Preview\xa0")),(0,r.yg)("h2",{id:"performance-and-stability"},"Performance and Stability"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved performance of directional lighting and shadows on Android and Xbox in the Deferred Technical Preview")))}h.isMDXComponent=!0},70031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/50/20/tech_sapi_exp",id:"changelog_source/preview/1.20/50/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added\xa0effectAddBeforeEvent\xa0and removed\xa0effectState\xa0from\xa0effectAddAfterEvent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/50/20",slug:"/changelog_source/preview/1.20/50/20/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/50/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added\xa0",(0,r.yg)("em",{parentName:"li"},"effectAddBeforeEvent"),"\xa0and removed\xa0",(0,r.yg)("em",{parentName:"li"},"effectState"),"\xa0from\xa0",(0,r.yg)("em",{parentName:"li"},"effectAddAfterEvent"))))}m.isMDXComponent=!0},18421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/50/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/50/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/50/20",slug:"/changelog_source/preview/1.20/50/20/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},84997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/50/20/tech_sapi_stable",id:"changelog_source/preview/1.20/50/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added\xa0BlockComponentTypeMap,\xa0EntityComponentTypeMap, and\xa0ItemComponentTypeMap\xa0aliases which map Component IDs to their TypeScript types",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/50/20",slug:"/changelog_source/preview/1.20/50/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/50/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added\xa0",(0,r.yg)("em",{parentName:"li"},"BlockComponentTypeMap"),",\xa0",(0,r.yg)("em",{parentName:"li"},"EntityComponentTypeMap"),", and\xa0",(0,r.yg)("em",{parentName:"li"},"ItemComponentTypeMap"),"\xa0aliases which map Component IDs to their TypeScript types"),(0,r.yg)("li",{parentName:"ul"},"Changed\xa0",(0,r.yg)("em",{parentName:"li"},"Block.getComponent"),",\xa0",(0,r.yg)("em",{parentName:"li"},"Entity.getComponent"),", and\xa0",(0,r.yg)("em",{parentName:"li"},"ItemStack.getComponent"),"\xa0to return the correct derived Component type"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0",(0,r.yg)("em",{parentName:"li"},"BlockComponentTypes"),",\xa0",(0,r.yg)("em",{parentName:"li"},"EntityComponentTypes"),", and\xa0",(0,r.yg)("em",{parentName:"li"},"ItemComponentTypes")," enums that enumerate component ID strings")))}m.isMDXComponent=!0},83627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/50/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/50/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/50/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/50/20",slug:"/changelog_source/preview/1.20/50/20/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/50/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/50/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),i=a(18228),o=a(19365);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],m={toc:u},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(o.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}g.isMDXComponent=!0}}]);