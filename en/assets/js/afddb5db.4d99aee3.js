"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[54751,31164,3133],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),c=n(57485),u=n(31682),s=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=c??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:u,rightElement:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(d(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),s?r.createElement("div",{className:"w-full"},s):void 0)}function _(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(_,(0,a.A)({},e,t)))}function k(e){const t=(0,h.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},89362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.yg)("p",null,"New Features:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Natural texture pack now available!")),(0,r.yg)("p",null,"Tweaks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added localization for the Natural texture pack."),(0,r.yg)("li",{parentName:"ul"},"Improved some text rendering, spacing and button sizes to accommodate localization."),(0,r.yg)("li",{parentName:"ul"},"Updated size and positions for logo and text for better comfort in Rift. (Win 10 only)")),(0,r.yg)("p",null,"Bug Fixes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed Rift mode crashing on launch in some circumstances. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Rowing a boat now works with keyboard in full immersive mode in Rift. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"You can now buy & extend realms when playing on Win 10 in Rift mode."),(0,r.yg)("li",{parentName:"ul"},"Mouse gets correctly captured when you put the Rift headset back on after taking it off. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when a player entered or created any world."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash for some players who weren't signed into Xbox Live."),(0,r.yg)("li",{parentName:"ul"},"Fixed some issues with Rift mirror textures for distant water & trees. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"The game no longer occasionally crashes when it is closed."),(0,r.yg)("li",{parentName:"ul"},"Several fixes regarding removing the Rift headset. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Pause screen fixed for trial mode. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Virtual living room no longer affected by the player falling in the game in Rift. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"No more black shadow boxes appearing when jumping near hanging blocks in immersive mode on the Rift. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Gaze cursor now recenters correctly when looking up or down while dead in Rift. (Win 10 only)"),(0,r.yg)("li",{parentName:"ul"},"Fixed textures for non-enchanted potions.")))}d.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(18228),l=n(19365);const i={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},81886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(34922),l=n(89362);const i={sidebar_position:99999940,title:"MCPE/WIN 10/Gear VR - 0.15.7",tags:["Official","Changelog","Pocket","undefined"]},c="MCPE/WIN 10/Gear VR - 0.15.7",u={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/README",title:"MCPE/WIN 10/Gear VR - 0.15.7",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.7/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999940,frontMatter:{sidebar_position:99999940,title:"MCPE/WIN 10/Gear VR - 0.15.7",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 1.0.4",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.4/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.5",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/"}},s={},p=[],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpewin-10gear-vr---0157"},"MCPE/WIN 10/Gear VR - 0.15.7"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);