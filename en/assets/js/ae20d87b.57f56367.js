"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[48660,31164,420],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??g;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},59555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",title:"gameplay",description:"We are celebrating the one year anniversary of the release of Minecraft: Windows 10 Edition Beta with an update (and new skin pack) for that edition as well as Pocket Edition and Gear VR Edition.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks-1",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes-1",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"We are celebrating the one year anniversary of the release of Minecraft: Windows 10 Edition Beta with an update (and new skin pack) for that edition as well as Pocket Edition and Gear VR Edition."),(0,r.yg)("p",null,"If you find any pesky new bugs, please fill out a report on ",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com"},"http://bugs.mojang.com")),(0,r.yg)("p",null,"Click here to give us feedback about the new release on our official feedback.minecraft.net site- we want to know what you think!"),(0,r.yg)("p",null,"Please note that we are aware of a possible crash when you set your draw distance to maximum on the 32-bit Win 10 edition if you have a discrete graphics card. We're working on it!"),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Villains skin pack!")),(0,r.yg)("h2",{id:"tweaks"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"More localization fixes."),(0,r.yg)("li",{parentName:"ul"},"Fixed the HUD moving when riding an animal in VR."),(0,r.yg)("li",{parentName:"ul"},"Fixed a few texture issues."),(0,r.yg)("li",{parentName:"ul"},"Some tweaks to Gear VR edition performance & experience."),(0,r.yg)("li",{parentName:"ul"},"Increased draw distance for Win 10 edition.")),(0,r.yg)("h2",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed comfort issues caused by rain & snow in your face"),(0,r.yg)("li",{parentName:"ul"},"Lead lines no longer disconnect from the hand when jumping in Immersive Mode in Gear VR."),(0,r.yg)("li",{parentName:"ul"},"Leads now display the correct texture & don't cause crashes in Gear VR."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash on the inventory screen."),(0,r.yg)("li",{parentName:"ul"},"Horse container screen now keeps labels visible."),(0,r.yg)("li",{parentName:"ul"},"Bone meal and spawn eggs now consumed in Survival mode."),(0,r.yg)("li",{parentName:"ul"},"B button to quit from main menu works on Win 10 edition now."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when creating or entering a new world."),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash when traveling the world with render distance set to maximum."),(0,r.yg)("li",{parentName:"ul"},"Worlds with UTF-8 symbols in their name are now displayed in the Play tab for Win 10."),(0,r.yg)("li",{parentName:"ul"},"Fixed some issues with players creating new realms.")),(0,r.yg)("p",null,"Since now everyone else is also getting the 0.15.3 update that only went out for Google Play in this release, we've included it below for your reference."),(0,r.yg)("h2",{id:"tweaks-1"},(0,r.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Multiplayer invite screen text alignment fixed"),(0,r.yg)("li",{parentName:"ul"},"Tweaks to moving blocks to make them work better & more consistently"),(0,r.yg)("li",{parentName:"ul"},"Fixes to horse breeding to make it consistent with other versions"),(0,r.yg)("li",{parentName:"ul"},"Tweaks to atlas generation"),(0,r.yg)("li",{parentName:"ul"},"Tweaked some Realms purchase functions"),(0,r.yg)("li",{parentName:"ul"},"Small tweak to mouse controls"),(0,r.yg)("li",{parentName:"ul"},"Store screen layout scales better now")),(0,r.yg)("h2",{id:"bug-fixes-1"},(0,r.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players can now scroll through the list of friends in the Add Realm window using the controller."),(0,r.yg)("li",{parentName:"ul"},"Inventory can now be opened when a player mounts a pig or horse/donkey/mule"),(0,r.yg)("li",{parentName:"ul"},"Zombie pigment spawn with correct textures in desert biomes"),(0,r.yg)("li",{parentName:"ul"},"Nether brick fence fixed- attaches to cobblestone walls"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue with friends list being cleared on signing out"),(0,r.yg)("li",{parentName:"ul"},"Fall damage for horses fixed"),(0,r.yg)("li",{parentName:"ul"},"Pressing X on the intro page signs the user out"),(0,r.yg)("li",{parentName:"ul"},"Removed phantom image of the currently equipped block when toggling a daylight sensor"),(0,r.yg)("li",{parentName:"ul"},"Fixed item duplication on fences bug"),(0,r.yg)("li",{parentName:"ul"},"Fixed some bugs with pistons (crashing, overwriting, taking power from wrong sources, syncing issues)"),(0,r.yg)("li",{parentName:"ul"},"Observer block placement fixed"),(0,r.yg)("li",{parentName:"ul"},"Glass and leaf blocks no longer going invisible when placed next to carpet, pressure plates and accumulated snow."),(0,r.yg)("li",{parentName:"ul"},"Fully grown crops now pop out of farmland when cut-off from light."),(0,r.yg)("li",{parentName:"ul"},"Fixed position of zombie jockeys"),(0,r.yg)("li",{parentName:"ul"},"Fixed crash when shooting an arrow from a dispenser at a TNT minecart"),(0,r.yg)("li",{parentName:"ul"},"Fixed assorted issues causing games to crash")))}p.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(59555);const i={sidebar_position:99999936,title:"MCPE/WIN 10/Gear VR - 0.15.4",tags:["Official","Changelog","Pocket","undefined"]},s="MCPE/WIN 10/Gear VR - 0.15.4",c={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README",title:"MCPE/WIN 10/Gear VR - 0.15.4",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.4/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999936,frontMatter:{sidebar_position:99999936,title:"MCPE/WIN 10/Gear VR - 0.15.4",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 1.0.6",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.6/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.7",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.7/"}},u={},g=[],p={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpewin-10gear-vr---0154"},"MCPE/WIN 10/Gear VR - 0.15.4"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);