"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[15003,64137,53603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var b=a(72389);const f="tabList__CuJ",w="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",w,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},38265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.9/0/0/gameplay",id:"changelog_source/preview/1.9/0/0/gameplay",title:"gameplay",description:"15 November 2018",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.9/0/0/gameplay.mdx",sourceDirName:"changelog_source/preview/1.9/0/0",slug:"/changelog_source/preview/1.9/0/0/gameplay",permalink:"/en/docs/changelog_source/preview/1.9/0/0/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.9/0/0/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"PLEASE READ before participating in the Minecraft Beta:",id:"please-read-before-participating-in-the-minecraft-beta",level:2},{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"15 November 2018"),(0,r.kt)("h2",{id:"please-read-before-participating-in-the-minecraft-beta"},"PLEASE READ before participating in the Minecraft Beta:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta. Featured servers may also be unavailable"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/JoinMCBeta"},"ms/JoinMCBeta")," for detailed instructions"),(0,r.kt)("li",{parentName:"ul"},"Beta builds will likely be unstable and are not representative of final version quality. Please backup your Worlds before joining the beta"),(0,r.kt)("li",{parentName:"ul"},"Finished releases may not include all new features, changes, and fixes from the beta to preserve stability and may slip to a later release")),(0,r.kt)("p",null,"Note: This specific beta release may not be available on some Android devices."),(0,r.kt)("h2",{id:"experimental-gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Gameplay:")),(0,r.kt)("p",null,"(Only available when Experimental Gameplay is enabled in world settings)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pillagers\xa0"),(0,r.kt)("li",{parentName:"ul"},"Bamboo is now generated in Jungle biomes\xa0")),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new flowers: Lily of the Valley and Cornflower\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added spruce, birch, jungle, acacia and dark oak signs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new stair, slab, and wall variants:\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Granite stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Granite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Diorite stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Diorite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Andesite stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Polished Andesite stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Sandstone walls"),(0,r.kt)("li",{parentName:"ul"},"Smooth Red Sandstone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Smooth Quartz stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Brick walls"),(0,r.kt)("li",{parentName:"ul"},"Stone Brick walls"),(0,r.kt)("li",{parentName:"ul"},"Mossy Stone Brick stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Nether Brick walls"),(0,r.kt)("li",{parentName:"ul"},"End Stone Brick stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Prismarine walls"),(0,r.kt)("li",{parentName:"ul"},"Red Sandstone walls"),(0,r.kt)("li",{parentName:"ul"},"Red Nether Brick stairs, slabs and walls"),(0,r.kt)("li",{parentName:"ul"},"Smooth Sandstone stairs and slabs"),(0,r.kt)("li",{parentName:"ul"},"Mossy Cobblestone stairs and slabs"))),(0,r.kt)("li",{parentName:"ul"},"Added a new option to the /gamerule commands called showDeathMessages which allows players to select whether a message appears in chat when a player or tamed mob dies\xa0"),(0,r.kt)("li",{parentName:"ul"},'Added new "Immediate Respawn" option with associated /gamerule\xa0'),(0,r.kt)("li",{parentName:"ul"},"Added new /tellraw command, enables the use of raw text formatting to be able to send translatable text output to chat using JSON")),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added several new loading screen tips and trivia suggested by the community!\xa0"),(0,r.kt)("li",{parentName:"ul"},"A notification is now sent to chat when a tamed animal dies (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35138"},"MCPE-35138"),")"),(0,r.kt)("li",{parentName:"ul"},"Tripwires are now activated when broken, unless broken with shears\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved performance when using Function commands; they are now pre-compiled on world reload")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when replacing a wooden door with an iron one (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37941"},"MCPE-37941"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using pickblock on a chest filled with written books\xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated low disk space error message"),(0,r.kt)("li",{parentName:"ul"},"Held items now show the correct texture when changing resource packs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38302"},"MCPE-38302"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed touch controls so players no longer get stuck in sneak position when underwater (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38212"},"MCPE-38212"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Panda feeding animation\xa0"),(0,r.kt)("li",{parentName:"ul"},"Crossbows no longer fire accidentally when interacting with blocks or mobs on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38321"},"MCPE-38321"),")"),(0,r.kt)("li",{parentName:"ul"},"Crossbows can now be used to hit mobs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38314"},"MCPE-38314"),")"),(0,r.kt)("li",{parentName:"ul"},"The trident throwing animation no longer gets mixed up with the new crossbow animation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38358"},"MCPE-38358"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the issue with breaking blocks when trying to fire a crossbow on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38465"},"MCPE-38465"),")"),(0,r.kt)("li",{parentName:"ul"},"Added new notification for worlds that have missing templates, with a prompt to redownload the relevant template from the store if necessary\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved text entry in various fields - text boxes can be highlighted and selected using the keyboard\xa0"),(0,r.kt)("li",{parentName:"ul"},"The skin picker menu now only displays progress/loading animation when online"),(0,r.kt)("li",{parentName:"ul"},'Fixed missing "Save to Microsoft account" message when saving purchases on Nintendo Switch in handheld mode'),(0,r.kt)("li",{parentName:"ul"},"Players can no longer change their customised player permissions in multiplayer games\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed remaining commands that use relative coordinates that are below y3 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35130"},"MCPE-35130"),")"),(0,r.kt)("li",{parentName:"ul"},"Shulker boxes now push mobs when opening (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-22480"},"MCPE-22480"),")"),(0,r.kt)("li",{parentName:"ul"},"Error messages are now more informative when trying to join an unavailable world\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a remaining issue that could cause a sudden change in direction on touch screen devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35910"},"MCPE-35910"),")"),(0,r.kt)("li",{parentName:"ul"},"Falling block entities can now be killed using commands (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38300"},"MCPE-38300"),")"),(0,r.kt)("li",{parentName:"ul"},"Defeating the Ender Dragon now drops the correct amount of XP and generates a Dragon Egg in converted worlds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28864"},"MCPE-28864"),")"),(0,r.kt)("li",{parentName:"ul"},"Vines collected with silk touch tools can be used correctly in banner designs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35134"},"MCPE-35134"),")"),(0,r.kt)("li",{parentName:"ul"},"End gateway portals now work correctly even if the destination area has already been generated (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19699"},"MCPE-19699"),")"),(0,r.kt)("li",{parentName:"ul"},"Dropped items are now correctly displaced by slabs and glass (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-12025"},"MCPE-12025"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved marketplace navigation when using a controller or keyboard\xa0"),(0,r.kt)("li",{parentName:"ul"},'Fixed the swimming animation of the "Syrena" skin in Pirates of the Caribbean Mash-up pack'),(0,r.kt)("li",{parentName:"ul"},"Repeating command blocks now keep their 'always active' state when cloned (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36340"},"MCPE-36340"),")"),(0,r.kt)("li",{parentName:"ul"},"Clocks and Compass items now load in correctly when joining a world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36952"},"MCPE-36952"),")")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},86735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),o=a(38265);const i={sidebar_position:99999977,title:"1.9.0.0",tags:["Official","Changelog","Preview","1.9"]},s="Minecraft Beta - 1.9.0.0 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.9/0/0",id:"official_changelog/preview/1.9/0/0",title:"1.9.0.0",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.9/0/0.mdx",sourceDirName:"official_changelog/preview/1.9/0",slug:"/official_changelog/preview/1.9/0/",permalink:"/en/docs/official_changelog/preview/1.9/0/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.9/0/0.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.9",permalink:"/en/docs/tags/1-9"}],version:"current",sidebarPosition:99999977,frontMatter:{sidebar_position:99999977,title:"1.9.0.0",tags:["Official","Changelog","Preview","1.9"]},sidebar:"changelogSidebar",previous:{title:"1.9.0.2",permalink:"/en/docs/official_changelog/preview/1.9/0/2"},next:{title:"1.8.0.14",permalink:"/en/docs/official_changelog/preview/1.8/0/14"}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1900-xbox-onewindows-10android"},"Minecraft Beta - 1.9.0.0 (Xbox One/Windows 10/Android)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);