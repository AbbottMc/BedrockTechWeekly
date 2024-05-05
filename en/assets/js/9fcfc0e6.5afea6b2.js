"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84649],{72623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(74848),a=i(28453);const r={},s=void 0,o={id:"changelog_source/preview/1.16/100/58/gameplay",title:"gameplay",description:"Posted: 30 September 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/58/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/58",slug:"/changelog_source/preview/1.16/100/58/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/58/gameplay",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/58/gameplay.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Technical Changes</strong>",id:"technical-changes",level:2},{value:"<strong>DataDrivenBlocks</strong>",id:"datadrivenblocks",level:2},{value:"<strong>Documentation</strong>",id:"documentation",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Posted:"})," 30 September 2020"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"PLEASE READ before participating in the Minecraft Beta:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Joining the beta will replace your game with a work in progress version of Minecraft"}),"\n",(0,t.jsx)(n.li,{children:"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"}),"\n",(0,t.jsx)(n.li,{children:"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"}),"\n",(0,t.jsx)(n.li,{children:"Beta builds can be unstable and are not representative of final version quality"}),"\n",(0,t.jsxs)(n.li,{children:["The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,t.jsx)(n.a,{href:"https://aka.ms/JoinMCBeta",children:"aka.ms/JoinMCBeta"}),"\xa0for detailed instructions"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"performance-and-stability",children:(0,t.jsx)(n.strong,{children:"Performance and Stability"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fixed several crashes that could occur during gameplay"}),"\n",(0,t.jsx)(n.li,{children:"Fixed a crash that occurred when rendering"}),"\n",(0,t.jsx)(n.li,{children:"Fixed a crash that could occur when a stunned entity loaded into the world"}),"\n",(0,t.jsx)(n.li,{children:"Fixed a crash that could occur in certain Marketplace layouts, and ensured the carousel is always populated correctly"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"gameplay",children:(0,t.jsx)(n.strong,{children:"Gameplay"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fixed an issue with tall plants (bamboo, sugar cane, and cactus) breaking instantly (",(0,t.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-98111",children:"MCPE-98111"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Fixed a bug that prevented lava buckets from being used as fuel (",(0,t.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-100405",children:"MCPE-100405"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general",children:(0,t.jsx)(n.strong,{children:"General"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fixed an issue where animations in the achievement screen could be played backwards"}),"\n",(0,t.jsxs)(n.li,{children:["Fixed missing translation loading screen tip (",(0,t.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-100308",children:"MCPE-100308"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"technical-changes",children:(0,t.jsx)(n.strong,{children:"Technical Changes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Removed legacy fall damage packet from client"}),"\n",(0,t.jsx)(n.li,{children:"Made some small changes around how we calculate the spawn position of dropped items from a player that dies from falling"}),"\n",(0,t.jsx)(n.li,{children:"Added support for the music command, allowing creators to play and control custom music"}),"\n",(0,t.jsxs)(n.li,{children:["Changed LegacyCubemap from opaque to transparent (",(0,t.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-94275",children:"MCPE-94275"}),")"]}),"\n",(0,t.jsx)(n.li,{children:'Fog Definition identifier cannot use the "minecraft" namespace unless it\'s from a vanilla resource pack'}),"\n",(0,t.jsxs)(n.li,{children:["Blocks that have ticking components will now clear their pending ticks from the ticking queue upon removal","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Added the on_player_destroyed trigger component"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"datadrivenblocks",children:(0,t.jsx)(n.strong,{children:"DataDrivenBlocks"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Middle click on non-default permutations of data driven blocks no longer throws an assert. Middle click now adds the default permutation of the block to your inventory"}),"\n",(0,t.jsx)(n.li,{children:"Added a fix for blocks computing ambient occlusion to behave more like vanilla by only contributing ambient occlusion if it's an opaque unit cube"}),"\n",(0,t.jsx)(n.li,{children:"Made data driven blocks with disabled collision pathable\xa0"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"documentation",children:(0,t.jsx)(n.strong,{children:"Documentation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Added documentation for block event responses and re-organized block documentation"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);