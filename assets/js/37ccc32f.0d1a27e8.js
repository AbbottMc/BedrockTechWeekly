"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27213],{76472:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var c=s(74848),i=s(28453);const r={},l=void 0,d={id:"changelog_source/preview/1.19.70.21/tech",title:"tech",description:"\u547d\u4ee4",source:"@site/docs/changelog_source/preview/1.19.70.21/tech.md",sourceDirName:"changelog_source/preview/1.19.70.21",slug:"/changelog_source/preview/1.19.70.21/tech",permalink:"/docs/changelog_source/preview/1.19.70.21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.21/tech.md",tags:[],version:"current",frontMatter:{}},t={},o=[{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u6570\u636e\u9a71\u52a8",id:"\u6570\u636e\u9a71\u52a8",level:2},{value:"\u811a\u672cAPI",id:"\u811a\u672capi",level:2},{value:"<code>@minecraft/server-gametest@1.0.0-beta</code> \u6a21\u5757",id:"minecraftserver-gametest100-beta-\u6a21\u5757",level:3},{value:"<code>@minecraft/server@1.1.0-beta</code> \u6a21\u5757",id:"minecraftserver110-beta-\u6a21\u5757",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u547d\u4ee4",children:"\u547d\u4ee4"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:['\u79fb\u9664\u4e86\u5bf91.19.70\u7248\u672c\u4ee5\u4e0a\u7684/clone\u3001/execute\u3001/fill\u3001/setblock \u548c /testforblock \u547d\u4ee4\u4e2d "data" \u5b57\u6bb5\u7684\u652f\u6301\u3002\u4f8b\u5982\uff1a',(0,c.jsx)(n.em,{children:(0,c.jsx)(n.code,{children:"/setblock ~ ~ ~ minecraft:wool 1"})})," \u73b0\u5728\u9700\u8981\u5199\u6210 ",(0,c.jsx)(n.em,{children:(0,c.jsx)(n.code,{children:'/setblock ~ ~ ~ minecraft:wool ["color":"orange"]'})})]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f53\u79ef\u5c3a\u5bf8\u53c2\u6570\u4e0d\u518d\u5411\u4e0b\u53d6\u6574\u57fa\u51c6\u70b9\u5750\u6807(",(0,c.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-162237",children:"MCPE-162237"}),")"]}),"\n",(0,c.jsx)(n.li,{children:"\u73b0\u5728\u901a\u8fc7\u4f53\u79ef\u5c3a\u5bf8\uff08Volume\uff09\u9009\u62e9\u76ee\u6807\u65f6\uff0c\u5c06\u9009\u62e9\u6240\u6709\u78b0\u649e\u7bb1\uff08Hitbox\uff09\u4e0e\u6307\u5b9a\u8303\u56f4\u76f8\u4ea4\u7684\u5b9e\u4f53\u3002\u8be5\u7279\u6027\u81ea1.19.70\u5f00\u59cb\u5b9e\u73b0\u7248\u672c\u5316"}),"\n",(0,c.jsx)(n.li,{children:"\u4e4b\u524d\u7684\u884c\u4e3a\u5728\u4f4e\u4e8e1.19.70\u7684\u7248\u672c\u4e0a\u53ef\u6b63\u5e38\u5de5\u4f5c\u4e86"}),"\n",(0,c.jsxs)(n.li,{children:["\u9009\u62e9\u5668\u7684\u4f53\u79ef\u5c3a\u5bf8\uff08Volume\uff09\u53c2\u6570\u73b0\u5728\u652f\u6301\u6d6e\u70b9\u6570\u503c\u3002(",(0,c.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-163863",children:"MCPE-163863"}),")"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6570\u636e\u9a71\u52a8",children:"\u6570\u636e\u9a71\u52a8"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'\u5f53\u683c\u5f0f\u7248\u672c\u4e3a1.19.70\u4ee5\u4e0a\u65f6\uff0c\u65b9\u5757\u7f6e\u6362\u4e2d "condition" \u5b57\u6bb5\u7684\u5c5e\u6027\u503c\u4e0d\u662f\u4e00\u4e2a\u53ef\u7528\u7684Molang\u5b57\u7b26\u4e32\u4f1a\u5bfc\u81f4\u65b9\u5757\u52a0\u8f7d\u5931\u8d25'}),"\n",(0,c.jsx)(n.li,{children:'\u5f53\u5de5\u4f5c\u53f0\u7ec4\u4ef6\u4f7f\u7528\u65b9\u5757\u540d\u79f0\u4f5c\u4e3a\u5de5\u4f5c\u53f0\u540d\u79f0\u65f6\uff0c\u672c\u5730\u5316\u952e\u540d\u4e0d\u518d\u9700\u8981\u6dfb\u52a0 "tile."'}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u811a\u672capi",children:"\u811a\u672cAPI"}),"\n",(0,c.jsxs)(n.h3,{id:"minecraftserver-gametest100-beta-\u6a21\u5757",children:[(0,c.jsx)(n.code,{children:"@minecraft/server-gametest@1.0.0-beta"})," \u6a21\u5757"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"Test"})," \u7c7b"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"assertEntityInstancePresentInArea"})," \u51fd\u6570"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void      \n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"assertEntityPresent"})," \u51fd\u6570"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"searchDistance"})," \u53c2\u6570"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"minecraftserver110-beta-\u6a21\u5757",children:[(0,c.jsx)(n.code,{children:"@minecraft/server@1.1.0-beta"})," \u6a21\u5757"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"BlockAreaSize "}),"\u7c7b"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"constructor"})," \u51fd\u6570\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"x"})," \u7684\u7c7b\u578b\uff1a\u7531 ",(0,c.jsx)(n.code,{children:"int32"})," \u6539\u4e3a ",(0,c.jsx)(n.code,{children:"float"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"x: number, "})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65e7\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"x: number, "})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"y"})," \u7684\u7c7b\u578b\uff1a\u7531 ",(0,c.jsx)(n.code,{children:"int32"})," \u6539\u4e3a ",(0,c.jsx)(n.code,{children:"float"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"y: number, "})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65e7\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"y: number, "})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"z"})," \u7684\u7c7b\u578b\uff1a\u7531 ",(0,c.jsx)(n.code,{children:"int32"})," \u6539\u4e3a ",(0,c.jsx)(n.code,{children:"float"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"z: number"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65e7\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"z: number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"ContainerSlot"})," \u7c7b"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u79fb\u9664\u4e86\u51fd\u6570 ",(0,c.jsx)(n.code,{children:"clearItem"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u79fb\u9664\u4e86\u51fd\u6570 ",(0,c.jsx)(n.code,{children:"clearLore"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"Entity"})," \u7c7b"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"playAnimation"})," \u51fd\u6570"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"playAnimation(animationName: string, options?: PlayAnimationOptions): void      \n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"ItemStack"})," \u7c7b"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u79fb\u9664\u4e86 ",(0,c.jsx)(n.code,{children:"data"})," \u5c5e\u6027"]}),"\n",(0,c.jsxs)(n.li,{children:["\u79fb\u9664\u4e86 ",(0,c.jsx)(n.code,{children:"clearLore"})," \u51fd\u6570"]}),"\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86 ",(0,c.jsx)(n.code,{children:"constructor"})," \u51fd\u6570\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86\u8fd4\u56de\u7c7b\u578b\uff1a\u7531 ",(0,c.jsx)(n.code,{children:"ItemStack"})," \u6539\u4e3a ",(0,c.jsx)(n.code,{children:"ItemStack"})," \uff08\u53ef\u629b\u51fa\u9519\u8bef\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:["\u66f4\u6539\u4e86\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"itemType"})," \u7684\u7c7b\u578b\uff1a\u7531 ",(0,c.jsx)(n.code,{children:"ItemType"})," \u6539\u4e3a ",(0,c.jsx)(n.code,{children:"ItemType | string"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"itemType: ItemType | string, "})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65e7\u7b7e\u540d\uff1a ",(0,c.jsx)(n.code,{children:"itemType: ItemType, "})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u79fb\u9664\u4e86\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"data"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u6539\u4e86\u7c7b ",(0,c.jsx)(n.code,{children:"Player"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"playAnimation"})," \u51fd\u6570"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"playAnimation(animationName: string, options?: PlayAnimationOptions): void      \n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86 ",(0,c.jsx)(n.code,{children:"PlayAnimationOptions"})," \u63a5\u53e3"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export interface PlayAnimationOptions {\n  blendOutTime?: number;\n  controller?: string;\n  nextState?: string;\n  stopExpression?: string;\n}\n"})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var c=s(96540);const i={},r=c.createContext(i);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);