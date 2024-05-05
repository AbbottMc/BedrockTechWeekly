"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61581,21032],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(a),g=r,d=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),m=a(31682),c=a(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,m.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,m]=d({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=s??u;return g({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),h(e)}),[m,h,l]),tabValues:l}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:m,rightElement:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),g=e=>{const t=e.currentTarget,a=u.indexOf(t),n=m[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:g},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function v(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},56955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));a(57350);const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.19/10/tech",id:"changelog_source/stable/1.19/10/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.19/10/tech.mdx",sourceDirName:"changelog_source/stable/1.19/10",slug:"/changelog_source/stable/1.19/10/tech",permalink:"/docs/changelog_source/stable/1.19/10/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/10/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],c={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"updated-add-on-template-packs"},(0,r.yg)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated Add-On templates for 1.19.10 with new resources, behaviors, and documentation, are available to download at ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddonPacks"))),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur if a mob had the ",(0,r.yg)("em",{parentName:"li"},"flocking")," component"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Soul Campfire was using the wrong tag, resulting in cases where some custom recipes for Campfires were not working correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98305"},"MCPE-98305"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed interaction priority when using a Bucket on a waterlogged and interactable block, eg. Lever (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154221"},"MCPE-154221"),")"),(0,r.yg)("li",{parentName:"ul"},"The Trader Llama is now its own dedicated mob instead of being a normal Llama with specific component groups"),(0,r.yg)("li",{parentName:"ul"},'Ensured content errors are not ignored when loading entity JSON schemas with invalid value types for following fields: The "Runtime',"_",'Identifier", "Is',"_",'Spawnable" and "Is',"_",'Summonable" fields for "description", the "component',"_",'groups" field and the "event" field for "events" (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151381"},"MCPE-151381"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where, after 1.18.30, teleporting an entity to a chunk that has not been loaded since before 1.18.30 would result in the loss of that entity"),(0,r.yg)("li",{parentName:"ul"},'Fixed an issue in the teleport command where a "facing" argument would calculate an incorrect vertical orientation (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-144870"},"MCPE-144870"),")"),(0,r.yg)("li",{parentName:"ul"},"Teleporting entities into unloaded chunks no longer deletes them"),(0,r.yg)("li",{parentName:"ul"},"Autocomplete suggestions now show only valid parameters"),(0,r.yg)("li",{parentName:"ul"},'New execute command functionality is now available via the "Upcoming Creator Features" experimental toggle'),(0,r.yg)("li",{parentName:"ul"},"Chests with loot tables no longer drop items when removed with '/clone', '/fill' or '/setblock' (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151876"},"MCPE-151876"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where entities loaded by Structure Blocks and commands would cause the despawn of the original mob used to save the structure and any mobs from previous loads of the structure (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155036"},"MCPE-155036"),")"),(0,r.yg)("li",{parentName:"ul"},"Pillagers and Vindicator Captains spawned with commands are once again hostile by default (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116971"},"MCPE-116971"),")")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0",(0,r.yg)("em",{parentName:"li"},"minecraft:block","_","collision")," block component to\xa0",(0,r.yg)("em",{parentName:"li"},"minecraft:collision","_","box")),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"minecraft:block","_","light","_","filter")," component to ",(0,r.yg)("em",{parentName:"li"},"minecraft:light","_","dampening")," and added appropriate versioning"),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'part visibility'")," component's field '",(0,r.yg)("em",{parentName:"li"},"rules'")," to ",(0,r.yg)("em",{parentName:"li"},"'conditions'")," and added appropriate versioning\xa0"),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'crafting","_","table'")," component's field ",(0,r.yg)("em",{parentName:"li"},"'custom","_","description'")," to ",(0,r.yg)("em",{parentName:"li"},"'table","_","name'")," and added appropriate versioning"),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'minecraft:block","_","light","_","filter'")," component to ",(0,r.yg)("em",{parentName:"li"},"'minecraft:light","_","dampening'")),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'part visibility'")," component's field ",(0,r.yg)("em",{parentName:"li"},"'rules'")," to ",(0,r.yg)("em",{parentName:"li"},"'conditions'")),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'crafting","_","table'")," component's field ",(0,r.yg)("em",{parentName:"li"},"'custom","_","description'")," to ",(0,r.yg)("em",{parentName:"li"},"'table","_","name'")),(0,r.yg)("li",{parentName:"ul"},"Blocks with\xa0",(0,r.yg)("em",{parentName:"li"},"'__block","_","light","_","absorption'")," component of value 16 no longer fail to load"),(0,r.yg)("li",{parentName:"ul"},"Renamed the component ",(0,r.yg)("em",{parentName:"li"},"'minecraft:ticking' to")," ",(0,r.yg)("em",{parentName:"li"},"'minecraft:queued","_","ticking'")),(0,r.yg)("li",{parentName:"ul"},"Renamed the ",(0,r.yg)("em",{parentName:"li"},"'minecraft:ticking'")," component's field ",(0,r.yg)("em",{parentName:"li"},"'range'")," to ",(0,r.yg)("em",{parentName:"li"},"'interval","_","range'"),", which is now described in ticks rather than seconds"),(0,r.yg)("li",{parentName:"ul"},"Renamed the '",(0,r.yg)("em",{parentName:"li"},"minecraft:flammable'")," block component fields ",(0,r.yg)("em",{parentName:"li"},"'flame","_","odds'")," and ",(0,r.yg)("em",{parentName:"li"},"'burn","_","odds'")," to ",(0,r.yg)("em",{parentName:"li"},"'catch","_","chance","_","modifier'")," and ",(0,r.yg)("em",{parentName:"li"},"'destroy","_","chance","_","modifier'")),(0,r.yg)("li",{parentName:"ul"},"Added ability to set ",(0,r.yg)("em",{parentName:"li"},"'minecraft:flammable'")," block component using booleans for default flammable or nonflammable values"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for ",(0,r.yg)("em",{parentName:"li"},"minecraft:map","_","color")," and ",(0,r.yg)("em",{parentName:"li"},"minecraft:material","_","instances")),(0,r.yg)("li",{parentName:"ul"},"Cake blocks now emit ",(0,r.yg)("em",{parentName:"li"},"Block","_","Change")," game events when slices are eaten")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed\xa0",(0,r.yg)("em",{parentName:"li"},"'minecraft:block","_","placer'")," item component to correctly trigger block component\xa0",(0,r.yg)("em",{parentName:"li"},"'minecraft:on","_","player","_","placing'")),(0,r.yg)("li",{parentName:"ul"},"Hunger Exhaustion component now uses new correct default values (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154238"},"MCPE-154238"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Please note, add-on packs that alter 'player.json' may need to ensure that the player saturation rate is set correctly to match the default values, if required")))),(0,r.yg)("h2",{id:"actors"},(0,r.yg)("strong",{parentName:"h2"},"Actors")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"'minecraft:drink","_","milk'")," behavior, which allows a mob to drink Milk based on specified environment conditions"),(0,r.yg)("li",{parentName:"ul"},"Actor properties will now save and load correctly across multiple clients and entities"),(0,r.yg)("li",{parentName:"ul"},"Direction facing will now be preserved through a transformation from one actor type to another"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where projectiles with an offset weren't spawned based on the player's rotation (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153880"},"MCPE-153880"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that prevented the owner of the ",(0,r.yg)("em",{parentName:"li"},"'minecraft:angry'")," component from broadcasting anger to its friends if it has no target. A mob with this component will now be able to get angry if it both does not have a target and the component's ",(0,r.yg)("em",{parentName:"li"},"'filters'")," list is empty (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94996"},"MCPE-94996"),")"),(0,r.yg)("li",{parentName:"ul"},"Mobs can now be hit by projectile when their hitboxes are outside the mob's bounds"),(0,r.yg)("li",{parentName:"ul"},"Replaced ",(0,r.yg)("em",{parentName:"li"},"'values'")," field with ",(0,r.yg)("em",{parentName:"li"},"'range'")," field, which only supports array JSON types. Added required ",(0,r.yg)("em",{parentName:"li"},"'type'")," JSON field for actor properties with supported values ",(0,r.yg)("em",{parentName:"li"},"'int'"),", ",(0,r.yg)("em",{parentName:"li"},"'float'"),", ",(0,r.yg)("em",{parentName:"li"},"'bool'"),", and ",(0,r.yg)("em",{parentName:"li"},"'enum'"),". The ",(0,r.yg)("em",{parentName:"li"},"'default'")," and ",(0,r.yg)("em",{parentName:"li"},"'range'")," fields on the property must match the type specified in the new ",(0,r.yg)("em",{parentName:"li"},"'type'")," field")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fog setting with negative fog start will no longer cause flames on player model in UI to get tainted by fog color"),(0,r.yg)("li",{parentName:"ul"},"\u201cparticles","_","blend\u201d material is no longer culled"),(0,r.yg)("li",{parentName:"ul"},"Fixed the issue where water fog expanding speed did not match value specified in ",(0,r.yg)("em",{parentName:"li"},"'midPercentage'")," field (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153864"},"MCPE-153864"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where under water fog transition between biomes is not smooth while affected by eye adapting effect")),(0,r.yg)("h2",{id:"gametest-framework-experimental"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added argument\xa0",(0,r.yg)("em",{parentName:"li"},"keepVelocity: bool"),"\xa0to functions\xa0",(0,r.yg)("em",{parentName:"li"},"teleport"),"\xa0and\xa0",(0,r.yg)("em",{parentName:"li"},"teleportFacing"),"\xa0- If true, preserves velocity when teleporting the Entity"),(0,r.yg)("li",{parentName:"ul"},"The\xa0",(0,r.yg)("em",{parentName:"li"},"/script profiler")," command now includes native API calls its trace call stacks")))}p.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(58168),r=a(96540),l=a(15680),o=a(18228),i=a(19365);const s={},m=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.yg)(i.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.yg)(i.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.yg)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);