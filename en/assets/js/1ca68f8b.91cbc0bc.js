"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29889,81791,25120,2846,34955,15331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),c=a(91980),s=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=a(72389);const v="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==i&&(p(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},10771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(48182),l=a(80108),i=(a(33242),a(61642),a(9071));const c={},s=void 0,u={unversionedId:"changelog_source/preview/1.21/0/23/tech",id:"changelog_source/preview/1.21/0/23/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/23/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech",permalink:"/en/docs/changelog_source/preview/1.21/0/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Graphical",id:"graphical",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The default values for the "damage',"_",'sources" field of "behavior.panic" have been updated',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'For the complete list of the new default values, refer to the "Vanilla Parity" section of the changelog'),(0,n.kt)("li",{parentName:"ul"},"This change only affects entities with a format version of 1.21.0 or higher"))),(0,n.kt)("li",{parentName:"ul"},"Multiple items with the same custom component will now correctly trigger custom component logic")),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Selection volumes can no longer be created when they would exceed the world height limits"),(0,n.kt)("li",{parentName:"ul"},"When filling up a volume and dragging the volume during the filling operation the filling volume would also change. Now the filling operation happens in the original volume"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where camera collision caused third-person view to display inside the player's head in Crosshair mode")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Fixed a bug with volumetric fog shading in the Deferred Technical Preview that was causing fog to be much brighter than it should have been. Volumetric fog in the Deferred Technical Preview now matches the look of volumetric fog in RTX much more closely. Fog definitions in resource packs developed for the Deferred Technical Preview will need to be updated after this change. To maintain a similar look, the values for either "max',"_",'density" or "scattering" should be increased by a factor of 12.')))}h.isMDXComponent=!0},80108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_exp",id:"changelog_source/preview/1.21/0/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityTameMountComponent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EntityTameMountComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added method\xa0",(0,n.kt)("em",{parentName:"li"},"tameToPlayer")),(0,n.kt)("li",{parentName:"ul"},"Added properties\xa0",(0,n.kt)("em",{parentName:"li"},"isTamed"),",\xa0",(0,n.kt)("em",{parentName:"li"},"isTamedToPlayer"),",\xa0",(0,n.kt)("em",{parentName:"li"},"tamedToPlayer"),", and\xa0",(0,n.kt)("em",{parentName:"li"},"tamedToPlayerId")))),(0,n.kt)("li",{parentName:"ul"},"GameRules",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"showDaysPlayed")," to\xa0",(0,n.kt)("em",{parentName:"li"},"beta")))),(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0_PlayerInputPermissions_input-lock category property-setters so that changes are propagated to clients")))}p.isMDXComponent=!0},61642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},48182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_stable",id:"changelog_source/preview/1.21/0/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0GameRules rule property-setters so that changes are propagated to clients",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,n.kt)("em",{parentName:"li"},"GameRules")," rule property-setters so that changes are propagated to clients"),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"startItemCooldown")," and\xa0",(0,n.kt)("em",{parentName:"li"},"player.getItemCooldown"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"playSound")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"playSound")," is now deprecated and will be removed in a future major version. Use\xa0",(0,n.kt)("em",{parentName:"li"},"Dimension.playSound")," as the alternative"),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"ListBlockVolume_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockVolumeBase_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockLocationIterator_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"getGameMode(): GameMode_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"setGameMode(gameMode?: GameMode): void_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeAfterEventSignal_from\xa0_beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeBeforeEventSignal_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"ItemComponentConsumeEvent")," for ",(0,n.kt)("em",{parentName:"li"},"beta")),(0,n.kt)("li",{parentName:"ul"},"Change\xa0",(0,n.kt)("em",{parentName:"li"},"waitTick(ticks?: number)")," to\xa0",(0,n.kt)("em",{parentName:"li"},"system.waitTicks(ticks: number);")),(0,n.kt)("li",{parentName:"ul"},"Renamed property\xa0",(0,n.kt)("em",{parentName:"li"},"selectedSlot_to\xa0_selectedSlotIndex"),"\xa0and moved it from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0"))))}p.isMDXComponent=!0},33242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0}}]);