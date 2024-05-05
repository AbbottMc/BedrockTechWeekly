"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94662,31164,27655],{24391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(74848),r=t(28453);const o={},l=void 0,i={id:"changelog_source/preview/1.16/200/55/gameplay",title:"gameplay",description:"Posted: 11 November 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/200/55/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/200/55",slug:"/changelog_source/preview/1.16/200/55/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/200/55/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/200/55/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"General",id:"general",level:3},{value:"Technical Changes",id:"technical-changes",level:3},{value:"MoLang",id:"molang",level:3}];function u(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Posted:"})," 11 November 2020"]}),"\n",(0,a.jsx)(n.p,{children:"PLEASE READ before participating in the Minecraft Beta:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Joining the beta will replace your game with a work in progress version of Minecraft"}),"\n",(0,a.jsx)(n.li,{children:"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"}),"\n",(0,a.jsx)(n.li,{children:"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"}),"\n",(0,a.jsx)(n.li,{children:"Beta builds can be unstable and are not representative of final version quality"}),"\n",(0,a.jsxs)(n.li,{children:["The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,a.jsx)(n.a,{href:"https://aka.ms/JoinMCBeta",children:"ms/JoinMCBeta"})," for detailed instructions"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,a.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed a bug that caused mobs such as Pillagers to hide away from sunlight"}),"\n",(0,a.jsxs)(n.li,{children:["Fixed an issue where some mobile devices would lose audio after suspend and resume (",(0,a.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-101027",children:"MCPE-101027"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"Fixed a bug that caused Vertical Knockback to be too weak"}),"\n",(0,a.jsxs)(n.li,{children:["Fixed an issue in RTX when flying around would stutter and have poor frame rate (",(0,a.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-103532",children:"MCPE-103532"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"Added UI start up screen to inform players if they are on outdated graphics drivers"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"technical-changes",children:"Technical Changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Fix so that old command versions use the previous position instead of current one","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed issue where 'query.cardinal_block_face_placed_on' no longer worked with 'on_player_placing'"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Changed texture atlas padding size from 0 to 1 when disabling mipmap"}),"\n",(0,a.jsxs)(n.li,{children:['Fixed issue of blocks listed in the "minecraft',":block","_placer\" component wouldn't work correctly"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"molang",children:"MoLang"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Geometry, Material, and Texture variable names can once again contain dots"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},93302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),o=t(18228),l=t(19365);const i={},s=void 0,c={id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){const n={div:"div",h2:"h2",...(0,r.R)(),...e.components};return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"Technical Update",children:e.techChangelog}),(0,a.jsx)(l.A,{value:"Full Changelog",children:(0,a.jsxs)(n.div,{children:[(0,a.jsx)(n.h2,{className:"changelog_divider",children:"Gameplay Update"}),e.gameplayChangelog,(0,a.jsx)(n.h2,{className:"changelog_divider",children:"Technical Update"}),e.techChangelog]})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},75735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),o=t(93302),l=t(24391);const i={sidebar_position:99999890,title:"1.16.200.55",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.200.55 (Xbox One/Windows 10/Android)",c={id:"official_changelog/preview/1.16/200/55",title:"1.16.200.55",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/200/55.mdx",sourceDirName:"official_changelog/preview/1.16/200",slug:"/official_changelog/preview/1.16/200/55",permalink:"/en/docs/official_changelog/preview/1.16/200/55",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/200/55.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999890,frontMatter:{sidebar_position:99999890,title:"1.16.200.55",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.200.56",permalink:"/en/docs/official_changelog/preview/1.16/200/56"},next:{title:"1.16.200.53",permalink:"/en/docs/official_changelog/preview/1.16/200/53"}},u={},d=[...o.toc];function h(e){const n={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"minecraft-beta---11620055-xbox-onewindows-10android",children:"Minecraft Beta - 1.16.200.55 (Xbox One/Windows 10/Android)"}),"\n",(0,a.jsx)(o.default,{gameplayChangelog:(0,a.jsx)(l.default,{}),techChangelog:void 0})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),o=t(23104),l=t(56347),i=t(205),s=t(57485),c=t(31682),u=t(89466);function d(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=c??f;return g({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i,rightElement:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(u(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),s?(0,v.jsx)("div",{className:"w-full",children:s}):void 0]})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,v.jsx)(j,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const r={},o=a.createContext(r);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);