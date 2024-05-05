"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92048,31164,65391],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>N});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),c=t(31682),u=t(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,c]=d({queryString:t,groupId:n}),[g,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),h=(()=>{const e=s??g;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var h=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:c,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=g.indexOf(a),n=c[t].value;n!==o&&(p(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;a=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;a=g[t]??g[g.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>g.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a}),style:{wordBreak:"keep-all"}}),t??a)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function N(e){const a=(0,h.A)();return r.createElement(w,(0,n.A)({key:String(a)},e))}},8555:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.16/100/50/gameplay",id:"changelog_source/preview/1.16/100/50/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/50/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/50",slug:"/changelog_source/preview/1.16/100/50/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/50/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/50/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Achievement Screen</strong>",id:"achievement-screen",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Technical changes</strong>",id:"technical-changes",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Display Name Component</strong>",id:"display-name-component",level:2},{value:"<strong>Item Parsing</strong>",id:"item-parsing",level:2}],u={toc:c},g="wrapper";function p(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.yg)("h2",{id:"achievement-screen"},(0,r.yg)("strong",{parentName:"h2"},"Achievement Screen")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"New achievements screen design and added a new achievement details screen (available after gradual roll-out). We would love to hear your feedback on it here in\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/mcAchievementBeta"},"this post"),"!")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Custom names now modify boss's bars (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43473"},"MCPE-43473"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed bug where system language setting for Simplified and Traditional Chinese was not honored by the game"),(0,r.yg)("li",{parentName:"ul"},"Nintendo Switch can now upload worlds to Realms again (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-474"},"REALMS-474"),")\xa0",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"NB \u2013 this fix is still in beta so won\u2019t be available for Realms or non-beta platforms yet, but we wanted to give you a heads up this fix is on its way!"))),(0,r.yg)("li",{parentName:"ul"},"Game no longer crashes if a player opens a Shulker Box they're standing on after rejoining a multiplayer session\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where some walls were not correctly connected on world load"),(0,r.yg)("li",{parentName:"ul"},"Fishing Rod will now correctly cast when close to a Mob (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65249"},"MCPE-65249"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that meant the block highlight/selection box was extending above blocks\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with missing animation when damaging bamboo"),(0,r.yg)("li",{parentName:"ul"},"Added Noto Sans font license button and pop-up dialog to Settings screen (in the Profile section)\xa0")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a graphical issue with glass blocks in City Living world, that affected some devices on Windows 10\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with the skybox background graphics not rendering correctly on some devices\xa0")),(0,r.yg)("h2",{id:"technical-changes"},(0,r.yg)("strong",{parentName:"h2"},"Technical changes")),(0,r.yg)("h2",{id:"actors"},(0,r.yg)("strong",{parentName:"h2"},"Actors")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The\xa0"minecraft:behavior.controlled',"_","by","_",'player"\xa0goal is now data-driven'),(0,r.yg)("li",{parentName:"ul"},"Physics Component's\xa0has","_","gravity\xa0is now used to decide whether a mob should apply water gravity, if the mob does not have a Navigation Component\xa0"),(0,r.yg)("li",{parentName:"ul"},"Ender Crystals can no longer be pushed\xa0"),(0,r.yg)("li",{parentName:"ul"},"The Squid's rendering is now data-driven"),(0,r.yg)("li",{parentName:"ul"},"Mine carts are now data-driven. This converted minecart rideable, minecarts with chest, with hopper, with command block, and with TNT to be data-driven")),(0,r.yg)("h2",{id:"display-name-component"},(0,r.yg)("strong",{parentName:"h2"},"Display Name Component")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Items can now override their display name with a localized 'value'. If a value is not supplied the component will stay with its default name. If the value supplied is not in the localization file the display name will be the value string")),(0,r.yg)("h2",{id:"item-parsing"},(0,r.yg)("strong",{parentName:"h2"},"Item Parsing")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Example 1"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"any","_","tag functionality added to several actor components. In addition to representing items as item names in json they can now be represented as a set of tags")),(0,r.yg)("li",{parentName:"ul"},'"item": {"any',"_",'tag": "food"}'),(0,r.yg)("li",{parentName:"ul"},'"item": {"any',"_",'tag": ',"[",'"food", "wood"',"]","}"),(0,r.yg)("li",{parentName:"ul"},'"bribe',"_",'items": ',"[",'"emerald", {"any',"_",'tag": "stone"}',"]"),(0,r.yg)("li",{parentName:"ul"},"minecraft:ageable feed","_","items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:breedable breed","_","items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:bribeable bribe","_","items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:giveable items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:healable items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:tamemount feed","_","items and auto","_","reject","_","items can now use any","_","tag functionality"),(0,r.yg)("li",{parentName:"ul"},"minecraft:equippable accepted","_","items can now use any","_","tag functionality"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Example 2"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},'looks for "apple" key in the vanilla localization for a string to use as the display text, which it will NOT find a value so the display name will just be "apple"')),(0,r.yg)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.yg)("br",{parentName:"li"}),'"value": "apple"',(0,r.yg)("br",{parentName:"li"}),"}"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Example 3"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},'looks for "item.apple.name" key in the vanilla localization for a string to use as the display text, which it will find a value as "Apple". Note "minecraft:" namespace not required.')),(0,r.yg)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.yg)("br",{parentName:"li"}),'"value": "item.apple.name"',(0,r.yg)("br",{parentName:"li"}),"}"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Example 4"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},'looks for a custom string supplied in the resource pack, if not found the display name will be "item.my',"_","namespace:My","_","Awesome","_",'Item.name".')),(0,r.yg)("li",{parentName:"ul"},'"minecraft:display',"_",'name": {',(0,r.yg)("br",{parentName:"li"}),'"value": "item.my',"_","namespace:My","_","Awesome","_",'Item.name"',(0,r.yg)("br",{parentName:"li"}),"}")))))}p.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),l=t(18228),i=t(19365);const o={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(i.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},73852:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),l=t(34922),i=t(8555);const o={sidebar_position:99999907,title:"1.16.100.50",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.100.50 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/50",id:"official_changelog/preview/1.16/100/50",title:"1.16.100.50",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/100/50.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/50",permalink:"/en/docs/official_changelog/preview/1.16/100/50",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/50.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999907,frontMatter:{sidebar_position:99999907,title:"1.16.100.50",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.51",permalink:"/en/docs/official_changelog/preview/1.16/100/51"},next:{title:"1.16.30.57",permalink:"/en/docs/official_changelog/preview/1.16/30/57"}},u={},g=[],p={toc:g},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---11610050-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.50 (Xbox One/Windows 10/Android)"),(0,r.yg)(l.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);