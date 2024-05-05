"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51682,31164,65386],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(a),d=n,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||l;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var r=a(58168),n=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=m({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=s??g;return d({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=g.indexOf(t),r=c[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function N(e){const t=(0,f.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},34560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.1/3/gameplay",id:"changelog_source/stable/1.1/3/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.1/3/gameplay.mdx",sourceDirName:"changelog_source/stable/1.1/3",slug:"/changelog_source/stable/1.1/3/gameplay",permalink:"/en/docs/changelog_source/stable/1.1/3/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.1/3/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Marketplace Content:</strong>",id:"new-marketplace-content",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Add-Ons:</strong>",id:"add-ons",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>Relics of the Privateers 1.2.5:</strong>",id:"relics-of-the-privateers-125",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,n.yg)("h2",{id:"new-marketplace-content"},(0,n.yg)("strong",{parentName:"h2"},"New Marketplace Content:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Adventure Time Mash-up Pack"),(0,n.yg)("li",{parentName:"ul"},"Summer Mini-Games Festival by Noxcrew"),(0,n.yg)("li",{parentName:"ul"},"Wisteria Grove by Imagiverse"),(0,n.yg)("li",{parentName:"ul"},"The Kingdom of Torchwall by Imagiverse")),(0,n.yg)("h2",{id:"new-features"},(0,n.yg)("strong",{parentName:"h2"},"New Features:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Magma blocks can now be found in the Nether"),(0,n.yg)("li",{parentName:"ul"},"Underground fossils to excavate made from Bone blocks"),(0,n.yg)("li",{parentName:"ul"},"Nether Wart blocks"),(0,n.yg)("li",{parentName:"ul"},"Red Nether Brick")),(0,n.yg)("h2",{id:"add-ons"},(0,n.yg)("strong",{parentName:"h2"},"Add-Ons:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Updated resource and behavior packs are available on minecraft.net/addons"),(0,n.yg)("li",{parentName:"ul"},"All behavior components and AI goal parameters now appear in the documentation")),(0,n.yg)("h2",{id:"bug-fixes"},(0,n.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed several crashes and improved stability"),(0,n.yg)("li",{parentName:"ul"},"The game will no longer crash when blocks are placed on the edge of old worlds")),(0,n.yg)("h2",{id:"relics-of-the-privateers-125"},(0,n.yg)("strong",{parentName:"h2"},"Relics of the Privateers 1.2.5:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Behavior Pack:")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Updated the behavior files of remaining used mobs to 1.1.0 format")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Fixed an issue with small crabs not moving or attacking")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"World:")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Removed many extra colonials from Portalina and Brinewall to reduce lag")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Removed many extra crab entities from around the giant crab")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Thinned out many pirate encampments, for balance purposes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\xa0 \xa0 \xa0 \xa0 Some items left floating in the world removed"))))}p.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),l=a(18228),o=a(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(l.A,{mdxType:"Tabs"},(0,n.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},74541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),l=a(34922),o=a(34560);const i={sidebar_position:99999996,title:"1.1.3",tags:["Official","Changelog","Stable","1.1"]},s="MCPE/WIN10/GEAR VR - 1.1.3",c={unversionedId:"official_changelog/stable/1.1/3",id:"official_changelog/stable/1.1/3",title:"1.1.3",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.1/3.mdx",sourceDirName:"official_changelog/stable/1.1",slug:"/official_changelog/stable/1.1/3",permalink:"/en/docs/official_changelog/stable/1.1/3",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.1/3.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.1",permalink:"/en/docs/tags/1-1"}],version:"current",sidebarPosition:99999996,frontMatter:{sidebar_position:99999996,title:"1.1.3",tags:["Official","Changelog","Stable","1.1"]},sidebar:"changelogSidebar",previous:{title:"1.1.4",permalink:"/en/docs/official_changelog/stable/1.1/4"},next:{title:"1.1.2",permalink:"/en/docs/official_changelog/stable/1.1/2"}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"mcpewin10gear-vr---113"},"MCPE/WIN10/GEAR VR - 1.1.3"),(0,n.yg)(l.default,{gameplayChangelog:(0,n.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);