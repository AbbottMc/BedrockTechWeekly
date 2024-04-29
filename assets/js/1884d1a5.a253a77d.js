"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[15137,56890,29933,76973,81531,30797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var g=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},20199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(86557),o=n(63523),l=(n(10652),n(94284),n(47153));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/60/23/tech",id:"changelog_source/preview/1.20/60/23/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.20/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech",permalink:"/docs/changelog_source/preview/1.20/60/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"General",id:"general",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Molang",id:"molang",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Molang",id:"molang-1",level:2},{value:"Graphical",id:"graphical",level:2}],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "minecraft:geometry.full',"_",'block" identifier for the "minecraft:geometry" block component has been added',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The "minecraft:geometry.full',"_",'block" identifier provides a centered 1x1x1 cube geometry'),(0,r.kt)("li",{parentName:"ul"},"When combined with a\xa0",(0,r.kt)("em",{parentName:"li"},"material","_","instances"),'\xa0component with "render',"_",'layer": "opaque", it enables rendering-only capabilities previously included in the "minecraft:unit',"_",'cube" component including:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Occludes both vanilla and custom neighboring full blocks"),(0,r.kt)("li",{parentName:"ul"},"Culls faces that neighbor vanilla and custom neighboring full blocks to improve rendering performance"))))),(0,r.kt)("li",{parentName:"ul"},"Add content error logging to help creators identify content that hits or exceeds the state bit/permutation count per block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177045"},"MCPE-177045"),")")),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Updated listed values for the Vanilla "orientation" block state in documentation')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added an "interact',"_",'filters" field to the "ageable" component, which allows to specify conditions on when the actor can be fed')),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,r.kt)("p",null,"Learn ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,r.kt)("p",null,"Updates this week:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default block for BlockType in Selection tool is now 'grass'."),(0,r.kt)("li",{parentName:"ul"},"Scripted property panes will now be scrollable once they reach a certain height."),(0,r.kt)("li",{parentName:"ul"},"Editor Playtest pane now supports setting time of day and weather when testing levels, as well as minor tweaks to the layout. Time in the Playtest pane supports either Minecraft time (0-23999) or 24hr time (00:00-23:59).\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new bindings and support for scripts to be able to push a TypeScript object as a payload on to the transaction stack, and register a set of handler functions which will receive the payload when the transaction system receives an undo or redo event"),(0,r.kt)("li",{parentName:"ul"},"A Navigation record system has been added to Editor. View the GitHub release notes for more details on features and functionality.\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added an export for stringFromExtension so that it can be used in both internal and external Creator extensions"),(0,r.kt)("li",{parentName:"ul"},"A new line tool is added to the Editor. View the GitHub release notes for more details on features and functionality.\xa0"),(0,r.kt)("li",{parentName:"ul"},"Editor UI now scales according to the screen resolution rather than the game window size."),(0,r.kt)("li",{parentName:"ul"},"Property options in the play/test pane retain their values when the game reloads.\xa0")),(0,r.kt)("p",null,"This week we are officially closing the v0.4.X semantic iterations and considering our work towards v0.5 done. View release notes in GitHub for additional details and an aggregate summary of all v0.4.X iteration updates."),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released Molang queries from experimental",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.is","_","cooldown","_","type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.cooldown","_","time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.cooldown","_","time","_","remaining")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.relative","_","block","_","has","_","any","_","tag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.relative","_","block","_","has","_","all","_","tags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.block","_","neighbor","_","has","_","any","_","tag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.block","_","neighbor","_","has","_","all","_","tags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.block","_","has","_","any","_","tag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.block","_","has","_","all","_","tags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.bone","_","orientation","_","trs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.bone","_","orientation","_","matrix"),"\xa0")))),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"add-ons-and-script-engine-1"},"Add-Ons and Script Engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "minecraft:unit',"_",'cube" block component has been deprecated. Using it in content marked 1.20.60 and beyond will provide a content error',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Using content marked prior to 1.20.60 will have their "minecraft:unit',"_",'cube" block component upgraded to a "minecraft:geometry" block component with a "minecraft:geometry.full',"_",'block" identifier, but will maintain backwards compatibility with all behaviors')))),(0,r.kt)("h2",{id:"script-api-1"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"molang-1"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed cooldown query slot IDs to be required for container slots with more than one index, logging content errors if not provided",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.cooldown","_","time(slotName,slotId)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.cooldown","_","time","_","remaining(slotName,slotId)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.is","_","cooldown","_","type(cooldownName,slotName,slotId)"))))),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The player's body will now cast a shadow in first person mode in the Deferred Technical Preview. Note that some held items will still not cast shadows"),(0,r.kt)("li",{parentName:"ul"},"The loading screen will no longer turn black on Android when entering a PBR-capable world with the Deferred Technical Preview enabled"),(0,r.kt)("li",{parentName:"ul"},"Hoppers in Minecarts no longer exhibit ghosting artifacts during camera motion when the Deferred Technical Preview is enabled"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when exiting a world with the Deferred Technical Preview enabled")))}h.isMDXComponent=!0},63523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/23/tech_sapi_exp",id:"changelog_source/preview/1.20/60/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Updated function\xa0addEffect\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Updated function\xa0",(0,r.kt)("em",{parentName:"p"},"addEffect"),"\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added item dynamic properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"clearDynamicProperties(): void"),"\xa0- Removes all dynamic properties from the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicPropertyIds(): string","[","]"),"\xa0- Returns an array of all dynamic property identifiers on the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount(): number"),"\xa0- Returns the total byte count of all dynamic properties on the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"clearDynamicProperties(): void"),"\xa0- Removes all dynamic properties from the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicPropertyIds(): string","[","]"),"\xa0- Returns an array of all dynamic property identifiers on the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"getDynamicPropertyTotalByteCount(): number"),"\xa0- Returns the total byte count of all dynamic properties on the item stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function\xa0",(0,r.kt)("em",{parentName:"p"},"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added class\xa0",(0,r.kt)("em",{parentName:"p"},"EntityProjectileComponent"),". This component is used to shoot a projectile entity and modify its properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added interface ",(0,r.kt)("em",{parentName:"p"},"ProjectileShootOptions"),". This interface is used with function\xa0",(0,r.kt)("em",{parentName:"p"},"EntityProjectileComponent.shoot"),"\xa0to optionally modify the accuracy of the projectile when shot"))))}p.isMDXComponent=!0},94284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},86557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/23/tech_sapi_stable",id:"changelog_source/preview/1.20/60/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added Biome Registry biome names and StructureFeatureType enum to vanilla metadata generation",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Biome Registry biome names and ",(0,r.kt)("em",{parentName:"li"},"StructureFeatureType")," enum to vanilla metadata generation")))}p.isMDXComponent=!0},10652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905),o=n(74866),l=n(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Fragment,null,void 0!==n.techSapiDiff?(0,i.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,i.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,i.kt)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0}}]);