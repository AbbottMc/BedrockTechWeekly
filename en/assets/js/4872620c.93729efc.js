"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98491,31164,58879],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,m=d["".concat(u,".").concat(p)]||d[p]||g[p]||l;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(58168),n=a(96540),l=a(20053),o=a(23104),i=a(56347),u=a(57485),c=a(31682),s=a(89466);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function g(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=g(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=a(92303);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:c,rightElement:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=c[a].value;r!==i&&(g(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),s?n.createElement("div",{className:"w-full"},s):void 0)}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function k(e){const t=(0,b.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},5086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.1/5/gameplay",id:"changelog_source/stable/1.1/5/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.1/5/gameplay.mdx",sourceDirName:"changelog_source/stable/1.1/5",slug:"/changelog_source/stable/1.1/5/gameplay",permalink:"/en/docs/changelog_source/stable/1.1/5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.1/5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"<strong>New Marketplace Content:</strong>",id:"new-marketplace-content",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>PureBDcraft Update:</strong>",id:"purebdcraft-update",level:2}],s={toc:c},d="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,n.yg)("h2",{id:"new-marketplace-content"},(0,n.yg)("strong",{parentName:"h2"},"New Marketplace Content:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Steampunk Texture Pack"),(0,n.yg)("li",{parentName:"ul"},"Infinity Dungeon EX by Jigarbov"),(0,n.yg)("li",{parentName:"ul"},"Survivors Skin Pack by Eneija"),(0,n.yg)("li",{parentName:"ul"},"Kings and Paupers Skin Pack by Razzleberry Fox"),(0,n.yg)("li",{parentName:"ul"},"Sports Skin Pack by Razzleberry Fox"),(0,n.yg)("li",{parentName:"ul"},"Summer Festival Skin Pack by Noxcrew")),(0,n.yg)("h2",{id:"bug-fixes"},(0,n.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed clock and compass textures becoming corrupted after reconnecting to world with a resource pack"),(0,n.yg)("li",{parentName:"ul"},"Fixed the texture of tripwire string"),(0,n.yg)("li",{parentName:"ul"},"Optimized the skin picker and all skins will now be displayed")),(0,n.yg)("h2",{id:"purebdcraft-update"},(0,n.yg)("strong",{parentName:"h2"},"PureBDcraft Update:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Modified items for brewing stand, hopper, comparator, cake, repeater, nether star, and cauldron"),(0,n.yg)("li",{parentName:"ul"},"Updated concrete and concrete powder blocks textures to more vivid colors"),(0,n.yg)("li",{parentName:"ul"},"Added Llama carpet slot"),(0,n.yg)("li",{parentName:"ul"},"Added offhand slot"),(0,n.yg)("li",{parentName:"ul"},"Added custom dropdown menu"),(0,n.yg)("li",{parentName:"ul"},"Modified in game GUI slots background and hover"),(0,n.yg)("li",{parentName:"ul"},"Modified tabs for main menu (so white digits are readable)"),(0,n.yg)("li",{parentName:"ul"},"Modified splashes texts"),(0,n.yg)("li",{parentName:"ul"},"Added arrow entity"),(0,n.yg)("li",{parentName:"ul"},"Added new arrows"),(0,n.yg)("li",{parentName:"ul"},"Added wither arrow"),(0,n.yg)("li",{parentName:"ul"},"Added tweaked terracotta"),(0,n.yg)("li",{parentName:"ul"},"Fixed Beam texture for Beacon"),(0,n.yg)("li",{parentName:"ul"},"Removed clouds texture due to a bug preventing HD clouds"),(0,n.yg)("li",{parentName:"ul"},"Fixed map icons and added treasure map items"),(0,n.yg)("li",{parentName:"ul"},"Tweaked buttons"),(0,n.yg)("li",{parentName:"ul"},'Fixed ""New"" icon in Store screens'),(0,n.yg)("li",{parentName:"ul"},"New sounds for illagers, villagers and zombie villagers"),(0,n.yg)("li",{parentName:"ul"},"Implemented new buttons for GUI"),(0,n.yg)("li",{parentName:"ul"},"Fixed transparency issue on the Ender Dragon"),(0,n.yg)("li",{parentName:"ul"},"Tweaked Shulker colors")))}g.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(58168),n=(a(96540),a(15680)),l=a(18228),o=a(19365);const i={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(l.A,{mdxType:"Tabs"},(0,n.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},76403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(58168),n=(a(96540),a(15680)),l=a(34922),o=a(5086);const i={sidebar_position:99999994,title:"1.1.5",tags:["Official","Changelog","Stable","1.1"]},u="MCPE/WIN10/GEAR VR - 1.1.5",c={unversionedId:"official_changelog/stable/1.1/5",id:"official_changelog/stable/1.1/5",title:"1.1.5",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.1/5.mdx",sourceDirName:"official_changelog/stable/1.1",slug:"/official_changelog/stable/1.1/5",permalink:"/en/docs/official_changelog/stable/1.1/5",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.1/5.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.1",permalink:"/en/docs/tags/1-1"}],version:"current",sidebarPosition:99999994,frontMatter:{sidebar_position:99999994,title:"1.1.5",tags:["Official","Changelog","Stable","1.1"]},sidebar:"changelogSidebar",previous:{title:"1.2",permalink:"/en/docs/official_changelog/stable/1.2/"},next:{title:"1.1.4",permalink:"/en/docs/official_changelog/stable/1.1/4"}},s={},d=[],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"mcpewin10gear-vr---115"},"MCPE/WIN10/GEAR VR - 1.1.5"),(0,n.yg)(l.default,{gameplayChangelog:(0,n.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);