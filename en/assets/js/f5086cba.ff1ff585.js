"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20462,31164,30594],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,h=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>_});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),l=a(56347),u=a(57485),s=a(31682),c=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:a,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=u??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var f=a(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s,rightElement:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),g=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},h=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:g},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function _(e){const t=(0,f.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},48205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay",id:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay",title:"gameplay",description:"FAQ about Minecraft: Windows 10 Edition Beta with Oculus Rift support",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6",slug:"/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/gameplay.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"FAQ about Minecraft: Windows 10 Edition Beta with Oculus Rift support"),(0,r.yg)("p",null,"Q: I don't have Windows 10- I'm running Windows 7/Windows 8/Linux/OSX. Can I use Minecraft: Windows 10 Edition Beta with Oculus Rift support?"),(0,r.yg)("p",null,"A: You will need to have the Windows 10 operating system running in order to use Minecraft: Windows 10 Edition Beta."),(0,r.yg)("p",null,"Q: The Oculus launcher is crashing with the error 0x80070422. What do I do?"),(0,r.yg)("p",null,"A: Make sure you have Windows Update enabled."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Press the Windows key"),(0,r.yg)("li",{parentName:"ol"},"Type in Services"),(0,r.yg)("li",{parentName:"ol"},"Scroll down to Windows Update and right-click."),(0,r.yg)("li",{parentName:"ol"},"Select Start from the menu.")),(0,r.yg)("p",null,"Q: My Oculus launcher is crashing but it is giving me an exception in ucrtbase.dll."),(0,r.yg)("p",null,"OR My Oculus launcher is saying that Windows 10, Update 1511 is required. What do I do?"),(0,r.yg)("p",null,"A: This is may be due to a Windows Update either failing or not being applied."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download & run the official Windows Update Troubleshooter here: ",(0,r.yg)("a",{parentName:"li",href:"http://download.microsoft.com/download/F/E/7/FE74974A-9029-41A0-9EB2-9CCE3FC20B99/WindowsUpdateDiagnostic.diagcab"},"http://download.microsoft.com/download/F/E/7/FE74974A-9029-41A0-9EB2-9CCE3FC20B99/WindowsUpdateDiagnostic.diagcab")),(0,r.yg)("li",{parentName:"ol"},"Press the Windows key."),(0,r.yg)("li",{parentName:"ol"},"Type in Check for Updates"),(0,r.yg)("li",{parentName:"ol"},"Check for and then install any missing Windows Updates"),(0,r.yg)("li",{parentName:"ol"},"Restart your computer using the Restart option on the Power menu.")),(0,r.yg)("p",null,'Q: The Oculus launcher is telling me that launching Minecraft ""failed""?'),(0,r.yg)("p",null,"A: Check to make sure you aren't already running Minecraft: Windows 10 Edition Beta. If you are, make sure you close the app first before trying to play it from the Oculus launcher. If you continue to have problems, try running Minecraft: Windows 10 Edition Beta by playing it from the Xbox app. This may give you more insight into why the game won't play."),(0,r.yg)("p",null,"Q: The Oculus launcher is reporting a signature issue with the 2015.3 x86 redist DLLs."),(0,r.yg)("p",null,"OR The Oculus launcher is crashing and my primary language files aren't English."),(0,r.yg)("p",null,"A: Good news- we pushed out a fix that should resolve both of these issues. Just restart your Oculus store and accept the update that you should see waiting for you in Minecraft."),(0,r.yg)("p",null,"Q: I am seeing strange graphics issues when I try to play the game."),(0,r.yg)("p",null,"A: Make certain your graphics drivers are up-to-date. If you have an Nvidia graphics card, you may need to manually visit the Nvidia website to get the most up-to-date drivers for your graphics card. Download, install the new drivers, and then restart your computer using the restart option from the power menu."),(0,r.yg)("p",null,"Q: I have dual graphics cards and multiple monitors. I can hear the Minecraft music but Minecraft is stuck on a white screen with 'Please wait'."),(0,r.yg)("p",null,"A: This may be due to some confusion between your graphics cards regarding HDMI input and the Rift. If you have HDMI inputs going into both cards, unplug the HDMI input that is not associated with the Oculus Rift."),(0,r.yg)("p",null,"Since this update was primarily focused with Oculus Rift support, we included the changelog with the Oculus FAQ above. As always, if you run into any bugs, please report them on Jira! We want to know what you think about our Oculus Rift integration. Click here to give us feedback!"),(0,r.yg)("p",null,"New Features:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Minecraft: Windows 10 Edition Beta now has Oculus Rift support!")),(0,r.yg)("p",null,"Tweaks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Better keyboard and mouse support when Oculus Rift is enabled."),(0,r.yg)("li",{parentName:"ul"},"Tweaked Windows 10 UI when in Oculus Rift mode for better usability.")),(0,r.yg)("p",null,"Bug Fixes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Oculus platform launcher updated with localization handling fixes & correct Virtual Studio redistributable packages."),(0,r.yg)("li",{parentName:"ul"},"Audio now plays through user's selected audio device."),(0,r.yg)("li",{parentName:"ul"},'You can use the ""C"" button on your keyboard to switch between television mode & immersive mode.'),(0,r.yg)("li",{parentName:"ul"},"Fixed some localization fonts (all editions)."),(0,r.yg)("li",{parentName:"ul"},"Fixed a minor crash issue on Gear VR edition.")))}p.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),i=a(19365);const l={},u=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(i.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}h.isMDXComponent=!0},10565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),i=a(48205);const l={sidebar_position:99999938,title:"MCPE/WIN 10/Gear VR - 0.15.6",tags:["Official","Changelog","Pocket","undefined"]},u="MCPE/WIN 10/Gear VR - 0.15.6",s={unversionedId:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/README",id:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/README",title:"MCPE/WIN 10/Gear VR - 0.15.6",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/README.mdx",sourceDirName:"official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6",slug:"/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.15.6/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999938,frontMatter:{sidebar_position:99999938,title:"MCPE/WIN 10/Gear VR - 0.15.6",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 1.0.5",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.5/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.6",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.6/"}},c={},d=[],p={toc:d},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mcpewin-10gear-vr---0156"},"MCPE/WIN 10/Gear VR - 0.15.6"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);