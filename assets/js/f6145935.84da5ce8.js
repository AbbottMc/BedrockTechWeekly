"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90216,52194,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=g({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=a(72389);const h="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},59367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.1/5/gameplay",id:"changelog_source/stable/1.1/5/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/stable/1.1/5/gameplay.mdx",sourceDirName:"changelog_source/stable/1.1/5",slug:"/changelog_source/stable/1.1/5/gameplay",permalink:"/docs/changelog_source/stable/1.1/5/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.1/5/gameplay.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"<strong>New Marketplace Content:</strong>",id:"new-marketplace-content",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>PureBDcraft Update:</strong>",id:"purebdcraft-update",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,n.kt)("h2",{id:"new-marketplace-content"},(0,n.kt)("strong",{parentName:"h2"},"New Marketplace Content:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Steampunk Texture Pack"),(0,n.kt)("li",{parentName:"ul"},"Infinity Dungeon EX by Jigarbov"),(0,n.kt)("li",{parentName:"ul"},"Survivors Skin Pack by Eneija"),(0,n.kt)("li",{parentName:"ul"},"Kings and Paupers Skin Pack by Razzleberry Fox"),(0,n.kt)("li",{parentName:"ul"},"Sports Skin Pack by Razzleberry Fox"),(0,n.kt)("li",{parentName:"ul"},"Summer Festival Skin Pack by Noxcrew")),(0,n.kt)("h2",{id:"bug-fixes"},(0,n.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed clock and compass textures becoming corrupted after reconnecting to world with a resource pack"),(0,n.kt)("li",{parentName:"ul"},"Fixed the texture of tripwire string"),(0,n.kt)("li",{parentName:"ul"},"Optimized the skin picker and all skins will now be displayed")),(0,n.kt)("h2",{id:"purebdcraft-update"},(0,n.kt)("strong",{parentName:"h2"},"PureBDcraft Update:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modified items for brewing stand, hopper, comparator, cake, repeater, nether star, and cauldron"),(0,n.kt)("li",{parentName:"ul"},"Updated concrete and concrete powder blocks textures to more vivid colors"),(0,n.kt)("li",{parentName:"ul"},"Added Llama carpet slot"),(0,n.kt)("li",{parentName:"ul"},"Added offhand slot"),(0,n.kt)("li",{parentName:"ul"},"Added custom dropdown menu"),(0,n.kt)("li",{parentName:"ul"},"Modified in game GUI slots background and hover"),(0,n.kt)("li",{parentName:"ul"},"Modified tabs for main menu (so white digits are readable)"),(0,n.kt)("li",{parentName:"ul"},"Modified splashes texts"),(0,n.kt)("li",{parentName:"ul"},"Added arrow entity"),(0,n.kt)("li",{parentName:"ul"},"Added new arrows"),(0,n.kt)("li",{parentName:"ul"},"Added wither arrow"),(0,n.kt)("li",{parentName:"ul"},"Added tweaked terracotta"),(0,n.kt)("li",{parentName:"ul"},"Fixed Beam texture for Beacon"),(0,n.kt)("li",{parentName:"ul"},"Removed clouds texture due to a bug preventing HD clouds"),(0,n.kt)("li",{parentName:"ul"},"Fixed map icons and added treasure map items"),(0,n.kt)("li",{parentName:"ul"},"Tweaked buttons"),(0,n.kt)("li",{parentName:"ul"},'Fixed ""New"" icon in Store screens'),(0,n.kt)("li",{parentName:"ul"},"New sounds for illagers, villagers and zombie villagers"),(0,n.kt)("li",{parentName:"ul"},"Implemented new buttons for GUI"),(0,n.kt)("li",{parentName:"ul"},"Fixed transparency issue on the Ender Dragon"),(0,n.kt)("li",{parentName:"ul"},"Tweaked Shulker colors")))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const u={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},61722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(59367);const i={sidebar_position:99999994,title:"1.1.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.1"]},u="MCPE/WIN10/GEAR VR - 1.1.5",s={unversionedId:"official_changelog/stable/1.1/5",id:"official_changelog/stable/1.1/5",title:"1.1.5",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.1/5.mdx",sourceDirName:"official_changelog/stable/1.1",slug:"/official_changelog/stable/1.1/5",permalink:"/docs/official_changelog/stable/1.1/5",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.1/5.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.1",permalink:"/docs/tags/1-1"}],version:"current",sidebarPosition:99999994,frontMatter:{sidebar_position:99999994,title:"1.1.5",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.1"]},sidebar:"changelogSidebar",previous:{title:"1.2",permalink:"/docs/official_changelog/stable/1.2/"},next:{title:"1.1.4",permalink:"/docs/official_changelog/stable/1.1/4"}},c={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mcpewin10gear-vr---115"},"MCPE/WIN10/GEAR VR - 1.1.5"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);