"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99938,64137,81791,15600,49617,86234,54526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=n(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},26823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/gameplay",id:"changelog_source/preview/1.20/0/21/gameplay",title:"gameplay",description:"Posted: 19 April, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/0/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Toggle</strong>",id:"experimental-toggle",level:2},{value:"<strong>Accessibility Features</strong>",id:"accessibility-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Decorated Pot</strong>",id:"decorated-pot",level:2},{value:"<strong>Pitcher Crop</strong>",id:"pitcher-crop",level:2},{value:"<strong>Pitcher Crop Block</strong>",id:"pitcher-crop-block",level:2},{value:"<strong>Calibrated Sculk Sensor</strong>",id:"calibrated-sculk-sensor",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Signs</strong>",id:"signs",level:2},{value:"<strong>Sniffer</strong>",id:"sniffer",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Vibration Frequencies</strong>",id:"vibration-frequencies",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 19 April, 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0 for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/14998197233421",alt:"A Minecraft screenshot featuring a villager and a sniffer standing in front of a cave near a cherry grove"})),(0,r.kt)("p",null,"Here\u2019s a run down of what\u2019s new in this week\u2019s Minecraft Preview and Beta! As always, don\u2019t forget to send us all your feedback and ideas at ",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback")," and report any bugs to ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"experimental-toggle"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Toggle")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Trails & Tales content has now been \u201cde-experimentified\u201d and is available during normal gameplay"),(0,r.kt)("li",{parentName:"ul"},"Removed the Next Major Update toggle, since it has no active experimental content")),(0,r.kt)("h2",{id:"accessibility-features"},(0,r.kt)("strong",{parentName:"h2"},"Accessibility Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The four Creative Inventory tabs now have their names read out by text-to-speech")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suspicious Sand and Suspicious Gravel now play their respective sounds when brushing them has completed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168805"},"MCPE-168805"),")")),(0,r.kt)("h2",{id:"decorated-pot"},(0,r.kt)("strong",{parentName:"h2"},"Decorated Pot")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decorated Pot faces now use the top rows of pixels (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168834"},"MCPE-168834"),")")),(0,r.kt)("h2",{id:"pitcher-crop"},(0,r.kt)("strong",{parentName:"h2"},"Pitcher Crop")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Pitcher Crop hitbox will now change in size according to its age (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169534"},"MCPE-169534"),")")),(0,r.kt)("h2",{id:"pitcher-crop-block"},(0,r.kt)("strong",{parentName:"h2"},"Pitcher Crop Block")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pitcher Crop block now uses bottom texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169490"},"MCPE-169490"),")")),(0,r.kt)("h2",{id:"calibrated-sculk-sensor"},(0,r.kt)("strong",{parentName:"h2"},"Calibrated Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Calibrated Sculk Sensors now power the block below them when active"),(0,r.kt)("li",{parentName:"ul"},"Calibrated Sculk Sensors now have an active cooldown of 1 second instead of 2 seconds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169531"},"MCPE-169531"),")"),(0,r.kt)("li",{parentName:"ul"},"Calibrated Sculk Sensors now detect vibrations up to 16 blocks away instead of 8 blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169532"},"MCPE-169532"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed fall damage accumulating when player jumps on roofed Soul Sand Bubble Column")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Decorated Pot now respects the lighting conditions when held in hand or dropped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167191"},"MCPE-167191"),")"),(0,r.kt)("li",{parentName:"ul"},"Conduit block now respects the lighting conditions when held in hand or dropped")),(0,r.kt)("h2",{id:"signs"},(0,r.kt)("strong",{parentName:"h2"},"Signs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A sound is now played when trying to interact with a waxed Sign (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168807"},"MCPE-168807"),")"),(0,r.kt)("li",{parentName:"ul"},"It is no longer possible to use Ink Sac, Glow Ink Sac, or Dyes if the text that would be changed is empty (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-133778"},"MCPE-133778"),")"),(0,r.kt)("li",{parentName:"ul"},"Interacting with an unwaxed Sign while holding an item that cannot be used on the sign now opens the sign for editing"),(0,r.kt)("li",{parentName:"ul"},"Interacting with a Sign while holding certain item no longer also trigger the item's specific action in addition to opening the Sign for editing (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168838"},"MCPE-168838"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Examples of items that caused this are: Brush, Armor, Fishing Rod, Book & Quill, Goat Horn, Empty Map"))),(0,r.kt)("li",{parentName:"ul"},"When using gamepad or touch input, correct tooltips are now shown if interacting with the Sign is possible"),(0,r.kt)("li",{parentName:"ul"},"When editing the text of a Sign the text color now matches the dye of the sign (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168818"},"MCPE-168818"),")"),(0,r.kt)("li",{parentName:"ul"},"It is now possible to attach a hanging sign to another without sneaking")),(0,r.kt)("h2",{id:"sniffer"},(0,r.kt)("strong",{parentName:"h2"},"Sniffer")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the Sniffer's head Z-fighting with their body (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169423"},"MCPE-169423"),")")),(0,r.kt)("h2",{id:"sculk-sensor"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors now power the block below them when active")),(0,r.kt)("h2",{id:"sculk-shrieker"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Shrieker")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Waterlogging a Sculk Shrieker will now silence its shriek sounds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169563"},"MCPE-169563"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Marketplace and Dressing Room cycle buttons now show navigation chevron when using a controller and controller hints are disabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147711"},"MCPE-147711"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the multiplayer toggle in the Create New World screen sometimes wasn't greyed out even though the setting would have no effect"),(0,r.kt)("li",{parentName:"ul"},'Coordinates are now shown on the new death screen if the "Show Coordinates" setting is enabled')),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Top and bottom Door textures now rotate correctly when opened and closed for worlds versioned from 1.20 onward (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152926"},"MCPE-152926"),")")),(0,r.kt)("h2",{id:"vibration-frequencies"},(0,r.kt)("strong",{parentName:"h2"},"Vibration Frequencies")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference"),(0,r.kt)("li",{parentName:"ul"},"The following are category descriptions for each frequency and the expected events that they correspond to:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Movement in any medium (land, liquid or air)"),(0,r.kt)("li",{parentName:"ol"},"Landing on any surface (land or liquid)"),(0,r.kt)("li",{parentName:"ol"},"Item interactions"),(0,r.kt)("li",{parentName:"ol"},"Gliding with an Elytra or unique mob actions (Ravager roaring, Wolf shaking, etc.)"),(0,r.kt)("li",{parentName:"ol"},"Equipping gear"),(0,r.kt)("li",{parentName:"ol"},"Interacting with a mob"),(0,r.kt)("li",{parentName:"ol"},"Mobs and players getting damaged"),(0,r.kt)("li",{parentName:"ol"},"Consuming items (drinking and eating)"),(0,r.kt)("li",{parentName:"ol"},"Blocks 'deactivating' (Door closing, Chest closing, Button unpressing, etc.)"),(0,r.kt)("li",{parentName:"ol"},"Blocks 'activating' (Door opening, Chest opening, Button being pressed, etc.)"),(0,r.kt)("li",{parentName:"ol"},"Blocks changing (Cauldron water level rising, adding food to a Campfire, etc.)"),(0,r.kt)("li",{parentName:"ol"},"Blocks being destroyed"),(0,r.kt)("li",{parentName:"ol"},"Blocks being placed"),(0,r.kt)("li",{parentName:"ol"},"Mobs and players spawning"),(0,r.kt)("li",{parentName:"ol"},"Mobs and players dying or an explosion")))))}p.isMDXComponent=!0},17917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(67697),i=(n(5299),n(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/0/21/tech",id:"changelog_source/preview/1.20/0/21/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Entities</strong>",id:"entities",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Recipes</strong>",id:"recipes",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"editor"},(0,r.kt)("strong",{parentName:"h2"},"Editor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed bug where Editor could be accessed during a regular gameplay session")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fix "get',"_","equipped","_","item","_",'name" Molang query not being able to return the old name of some flattened items, eg. red',"_","wool to wool")),(0,r.kt)("h2",{id:"entities"},(0,r.kt)("strong",{parentName:"h2"},"Entities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Introduced new entity filters "all',"_","slots","_",'empty" and "any',"_","slot","_",'empty" to allow searching for empty item slots in a designated equipment location (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153909"},"MCPE-153909"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when enabling ray tracing in ray tracing compatible content that was loaded into with ray tracing turned off (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168894"},"MCPE-168894"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom items with 'minecraft:durability' and 'minecraft:repairable' can be combined to repair them without requiring a custom item entry")),(0,r.kt)("h2",{id:"recipes"},(0,r.kt)("strong",{parentName:"h2"},"Recipes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect content warnings for recipes that use the same blocks but with different data (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168717"},"MCPE-168717"),")")),(0,r.kt)("h2",{id:"components"},(0,r.kt)("strong",{parentName:"h2"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Attribute "speed',"_",'multiplier" in the "minecraft:boostable" component is now being parsed correctly from json file. Old behavior is maintained for "format',"_",'version" lower than 1.20 with 1.35 value rather than what the json file specifies (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164424"},"MCPE-164424"),")")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added "minecraft:facing',"_",'direction" state to the "minecraft:placement',"_",'direction" block trait.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"minecraft:facing',"_",'direction" is a six value integer state (down, up, south, west, north, east)'),(0,r.kt)("li",{parentName:"ul"},'Can enable and access this state on blocks through the "minecraft:placement',"_",'direction" trait'),(0,r.kt)("li",{parentName:"ul"},'Can access the "minecraft:cardinal',"_",'direction" state on blocks that apply the "minecraft:placement',"_",'direction" trait in block',"_","property Molang queries and set","_","block","_","property EventResponses"))),(0,r.kt)("li",{parentName:"ul"},'Pumpkin blocks use state "minecraft:cardinal',"_",'direction" instead of "direction"')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0},67697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where modified equipment and container slots were not being synced to clients",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where modified equipment and container slots were not being synced to clients"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"@minecraft/server"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"BlockProperties_to\xa0_BlockStates")),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"getAllProperties_to\xa0_BlockPermutation.getAllStates")),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"getProperty_to\xa0_BlockPermutation.getState"))))))}p.isMDXComponent=!0},5299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),i=n(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),i=n(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}g.isMDXComponent=!0},90872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),i=n(26823),l=n(17917);const s={sidebar_position:99999770,title:"1.20.0.21",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.0.21",u={unversionedId:"official_changelog/preview/1.20/0/21",id:"official_changelog/preview/1.20/0/21",title:"1.20.0.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/0/21.mdx",sourceDirName:"official_changelog/preview/1.20/0",slug:"/official_changelog/preview/1.20/0/21",permalink:"/en/docs/official_changelog/preview/1.20/0/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/0/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999770,frontMatter:{sidebar_position:99999770,title:"1.20.0.21",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.0.22",permalink:"/en/docs/official_changelog/preview/1.20/0/22"},next:{title:"1.20.0.20",permalink:"/en/docs/official_changelog/preview/1.20/0/20"}},p={},d=[],g={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---120021"},"Minecraft Beta & Preview - 1.20.0.21"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);