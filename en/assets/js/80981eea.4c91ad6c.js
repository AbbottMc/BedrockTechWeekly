"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59709,64137,69680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function w(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),g=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:g},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function _(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},7875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay",id:"changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6",slug:"/changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay",permalink:"/en/docs/changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Fixes from Bugs in Beta:</strong>",id:"fixes-from-bugs-in-beta",level:2},{value:"<strong>Fixes from Bugs in Retail:</strong>",id:"fixes-from-bugs-in-retail",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.  "),(0,r.kt)("h2",{id:"fixes-from-bugs-in-beta"},(0,r.kt)("strong",{parentName:"h2"},"Fixes from Bugs in Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom skins work again!"),(0,r.kt)("li",{parentName:"ul"},"Changed several graphics on the Recipe Book to improve navigation"),(0,r.kt)("li",{parentName:"ul"},"Fixed multi-item placing in the inventory when holding right-click"),(0,r.kt)("li",{parentName:"ul"},"Hostile mobs will no longer spawn on top of glowstone blocks"),(0,r.kt)("li",{parentName:"ul"},"Water bottles can once again be placed on brewing stands when using Pocket UI"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with scrolling in the skin picker"),(0,r.kt)("li",{parentName:"ul"},"Reassigned keys for Toggle Perspective now work"),(0,r.kt)("li",{parentName:"ul"},"Empty armor indicators will now render on the armor tab of the Recipe Book"),(0,r.kt)("li",{parentName:"ul"},"Performance improvements for the Recipe Book"),(0,r.kt)("li",{parentName:"ul"},"Craftable toggle now appears on all tabs of the Recipe Book in Survival mode"),(0,r.kt)("li",{parentName:"ul"},"3 x 3 item recipes now appear in the Recipe Book but have a red background if they are not craftable"),(0,r.kt)("li",{parentName:"ul"},"3 x 3 crafting output items will now appear when in Creative mode"),(0,r.kt)("li",{parentName:"ul"},"The crafting output box now shows how many of an item will be crafted in Survival mode"),(0,r.kt)("li",{parentName:"ul"},"Empty Locator Maps can now be crafted with the Recipe Book"),(0,r.kt)("li",{parentName:"ul"},"Maps can now be removed from chests after world upgrades"),(0,r.kt)("li",{parentName:"ul"},"Pressing X while over the search bar will clear the search bar"),(0,r.kt)("li",{parentName:"ul"},"Clouds and water no longer render in front of potion particles"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when entering the Storage screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when opening Settings after downloading from the Store"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when an item was dropped into the Recipe Book in Survival and another item was taken"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash after pressing Save & Quit after killing the Dragon in the End"),(0,r.kt)("li",{parentName:"ul"},"Fixed world templates no redownloading after deleting until the game was restarted"),(0,r.kt)("li",{parentName:"ul"},"Updated the text for several How to Play screens"),(0,r.kt)("li",{parentName:"ul"},'The ""Place"" controller tip will now appear when holding a bed'),(0,r.kt)("li",{parentName:"ul"},"Fixed Guardians not applying thorn damage when hit by melee attacks"),(0,r.kt)("li",{parentName:"ul"},"Fixed fishing rod hook animation"),(0,r.kt)("li",{parentName:"ul"},"Controller tips now disappear when Hide GUI is enabled"),(0,r.kt)("li",{parentName:"ul"},"Operators can now change a world's default game mode"),(0,r.kt)("li",{parentName:"ul"},"After importing a template file, the game no longer needs to be restarted for it to show as an available template"),(0,r.kt)("li",{parentName:"ul"},"Adjusted font smoothing in menus"),(0,r.kt)("li",{parentName:"ul"},"Fixed the particle animation for End Rods"),(0,r.kt)("li",{parentName:"ul"},"Armor stands will now burn before being destroyed"),(0,r.kt)("li",{parentName:"ul"},"Armor stands will now change their pose based on the strength of redstone power they are receiving"),(0,r.kt)("li",{parentName:"ul"},"Items will no longer drop from armor stands when broken in Creative mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed reward item always being grayed out on villager trading screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed the alignment of controller tips to no longer overlap the hotbar"),(0,r.kt)("li",{parentName:"ul"},"Banners no longer show a checkered highlight when using a touch screen"),(0,r.kt)("li",{parentName:"ul"},"Banners no longer appear as black in multiplayer"),(0,r.kt)("li",{parentName:"ul"},"Fixed banners facing between south and west not dropping as items when the block they stood on was broken or moved by a piston"),(0,r.kt)("li",{parentName:"ul"},"Graphics settings will now be applied without having to reload the world"),(0,r.kt)("li",{parentName:"ul"},"Buttons on host options will no longer change size"),(0,r.kt)("li",{parentName:"ul"},"Horses will no longer take damage when adding a saddle for the first time after taming"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where witches could not use the 'spawn","_","entity' component with Add-Ons"),(0,r.kt)("li",{parentName:"ul"},"Hostile mobs wearing helmets will no longer burn briefly when they have died"),(0,r.kt)("li",{parentName:"ul"},"Jumping, falling, and climbing stairs will no longer interfere with sprinting"),(0,r.kt)("li",{parentName:"ul"},'Improved messaging when using ""/tickingarea remove',"_",'all"" and there are no areas to remove'),(0,r.kt)("li",{parentName:"ul"},"On the inventory screen, touching and dragging will now scroll without selecting an item slot"),(0,r.kt)("li",{parentName:"ul"},"Fireworks will now give proper boost when using Elytra wings close to the ground")),(0,r.kt)("h2",{id:"fixes-from-bugs-in-retail"},(0,r.kt)("strong",{parentName:"h2"},"Fixes from Bugs in Retail:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pressing the X button while over the hotbar will now clear its items in Creative mode"),(0,r.kt)("li",{parentName:"ul"},"The Nether travel sound effect will now play when exiting a Nether portal"),(0,r.kt)("li",{parentName:"ul"},"Fixed text not translating after changing language settings until the game was restarted"),(0,r.kt)("li",{parentName:"ul"},"Horses no longer clip through players when jumping\u2026 or did players clip through horses?"),(0,r.kt)("li",{parentName:"ul"},"Redstone dust can now be placed on Sea Lanterns and Glowstone"),(0,r.kt)("li",{parentName:"ul"},"The paper doll on the inventory screen no longer flips while using Elytra wings"),(0,r.kt)("li",{parentName:"ul"},"Naturally spawned villagers will now have the full range of professions"),(0,r.kt)("li",{parentName:"ul"},"Using Carrot on a Stick to break blocks will no longer decrease its durability")))}d.isMDXComponent=!0},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),i=n(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}g.isMDXComponent=!0},1140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88247),i=n(7875);const l={sidebar_position:99999983,title:"Minecraft Win 10/Android Beta - 1.2 Build 6",tags:["Official","Changelog","Pocket","undefined"]},s="Minecraft Win 10/Android Beta - 1.2 Build 6",c={unversionedId:"official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/README",id:"official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/README",title:"Minecraft Win 10/Android Beta - 1.2 Build 6",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6",slug:"/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_6/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999983,frontMatter:{sidebar_position:99999983,title:"Minecraft Win 10/Android Beta - 1.2 Build 6",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Win 10/Android Beta - 1.2 Build 7",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_7/"},next:{title:"Minecraft Win 10/Android Beta - 1.2 Build 5",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win_10-Android_Beta_-_1.2_Build_5/"}},u={},d=[],p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-win-10android-beta---12-build-6"},"Minecraft Win 10/Android Beta - 1.2 Build 6"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);