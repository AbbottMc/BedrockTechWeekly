"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89525],{58678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var s=t(74848),r=t(28453),i=t(15589);function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"gettopmostblock",children:"getTopmostBlock"}),"\n",(0,s.jsx)(n.admonition,{title:"\u8b66\u544a",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u672c\u9875\u5185\u5bb9\u6682\u672a\u7ecf\u8fc7\u4e25\u683c\u6d4b\u8bd5\uff0c\u6682\u65f6\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u672c\u7ad9\u65b0\u529f\u80fd\uff1a",(0,s.jsx)(n.strong,{children:"\u6d3b\u585e\u76d2"}),"\uff0c\u8bf7\u8c28\u614e\u53c2\u8003\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u65b0\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"getTopmostBlock"})," \u65e8\u5728\u63d0\u4f9b\u83b7\u53d6\u6307\u5b9a\uff08x, z\uff09\u4f4d\u7f6e\u65b9\u5757\u7684\u6700\u9ad8\u70b9\u65b9\u5757\u7684\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"locationXZ"}),"\uff1a \u7b26\u5408 ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/interfaces/VectorXZ",children:"VectorXZ"})," \u63a5\u53e3\u6a21\u5f0f\u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5305\u542bx\u548cz\u4e24\u4e2a\u5c5e\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"minHeight"}),"\uff1a \u53ef\u9009\u53c2\u6570\uff0c\u8868\u793a\u6700\u4f4e\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u503c\u4e3a\u4e16\u754c\u6700\u4f4e\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.a,{href:"/docs/sapi/preview/server/classes/Block",children:"\u65b9\u5757"})," \u5b9e\u4f8b\u5bf9\u8c61\uff0c\u8868\u793a\u6700\u9ad8\u70b9\u65b9\u5757\u3002\u5982\u679c\u6700\u9ad8\u70b9\u65b9\u5757\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de undefined\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u73a9\u5bb6\u4e0e\u65b9\u5757\u4ea4\u4e92\u65f6\uff0c\u83b7\u53d6\u5176\u6240\u5728(x, z)\u4f4d\u7f6e\u7684\u6700\u9ad8\u70b9\u65b9\u5757\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import {MinecraftDimensionTypes, VectorXZ, world} from "@minecraft/server"\nconst overworld = world.getDimension(MinecraftDimensionTypes.overworld);\n\n// \u76d1\u542c\u73a9\u5bb6\u4e0e\u65b9\u5757\u4ea4\u4e92\u4e8b\u4ef6\nworld.afterEvents.playerInteractWithBlock.subscribe(({block}) => {\n  // \u83b7\u53d6\u73a9\u5bb6\u4ea4\u4e92\u65b9\u5757\u7684 (x, z) \u4f4d\u7f6e, \u50a8\u5b58\u4e3a\u65b0\u589e\u7684 VectorXZ \u7c7b\u578b\n  const location: VectorXZ = {x: block.x, y: block.y};\n  // \u83b7\u53d6\u8be5\u4f4d\u7f6e\u7684\u6700\u9ad8\u70b9\u65b9\u5757\n  const topmostBlock = overworld.getTopmostBlock(location);\n  // \u8f93\u51fa\u6700\u9ad8\u70b9\u65b9\u5757\u76f8\u5173\u4fe1\u606f\n  console.warn(`(${location.x}, ${location.y}) \u4f4d\u7f6e\u4e0a\u7684\u6700\u9ad8\u70b9\u65b9\u5757ID\u4e3a\uff1a"${topmostBlock.typeId}"`);\n  // console.warn(`The topmost block at (${location.x}, ${location.y}) is "${topmostBlock.typeId}"`);\n});\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var l=t(17673);const d={},h=void 0,a={id:"changelog_source/preview/1.21/0/24/tech_sapi_exp",title:"tech_sapi_exp",description:"- \u4fee\u590d\u4e86\u5728\u4e0d\u8e72\u4e0b\u7684\u60c5\u51b5\u4e0b\u65e0\u6cd5\u5728\u5e26\u6709\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65b9\u5757\u4e0a\u653e\u7f6e\u65b9\u5757\u7684\u95ee\u9898",source:"@site/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp.mdx",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[];function x(e){const n={code:"code",li:"li",ul:"ul",...(0,r.R)(),...e.components},{PistonToggle:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PistonToggle",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4fee\u590d\u4e86\u5728\u4e0d\u8e72\u4e0b\u7684\u60c5\u51b5\u4e0b\u65e0\u6cd5\u5728\u5e26\u6709\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65b9\u5757\u4e0a\u653e\u7f6e\u65b9\u5757\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,s.jsx)(i.v,{children:(0,s.jsx)(l.c,{children:"Fixed issue where block with custom components could not have a block placed onto them without crouching"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86\u65b0\u63a5\u53e3 ",(0,s.jsx)(n.code,{children:"VectorXZ"})]}),"\n"]}),"\n",(0,s.jsx)(i.v,{children:(0,s.jsxs)(l.c,{children:["Added new interface ",(0,s.jsx)("code",{children:"VectorXZ"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86\u65b0\u65b9\u6cd5 ",(0,s.jsx)(t,{content:(0,s.jsx)(c,{})})," ",(0,s.jsx)(n.code,{children:"getTopmostBlock"})," \uff0c\u6b64\u65b9\u6cd5\u5c06\u4ece\u4e16\u754c\u9876\u90e8\u5411\u4e0b\u6267\u884c\u5c04\u7ebf\u68c0\u6d4b\uff0c\u5c1d\u8bd5\u5bfb\u627e\u9996\u4e2a\u56fa\u4f53\u65b9\u5757"]}),"\n"]}),"\n",(0,s.jsx)(i.v,{children:(0,s.jsxs)(l.c,{children:["Added method ",(0,s.jsx)("code",{children:"getTopmostBlock"})," which will perform a raycast from the top of the world downwards, trying to find the first solid block"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86\u65b0\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"getBlockAbove"})," \uff0c\u6b64\u65b9\u6cd5\u5c06\u4ece\u6307\u5b9a\u4f4d\u7f6e\u6267\u884c\u5c04\u7ebf\u68c0\u6d4b\uff0c\u5c1d\u8bd5\u5bfb\u627e\u5176\u4e0a\u65b9\u7684\u9996\u4e2a\u56fa\u4f53\u65b9\u5757"]}),"\n"]}),"\n",(0,s.jsx)(i.v,{children:(0,s.jsxs)(l.c,{children:["Added method ",(0,s.jsx)("code",{children:"getBlockAbove"})," which will perform a raycast from a given position, trying to find the first solid block above"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86\u65b0\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"getBlockBelow"})," \uff0c\u6b64\u65b9\u6cd5\u5c06\u4ece\u6307\u5b9a\u4f4d\u7f6e\u6267\u884c\u5c04\u7ebf\u68c0\u6d4b\uff0c\u5c1d\u8bd5\u5bfb\u627e\u5176\u4e0b\u65b9\u7684\u9996\u4e2a\u56fa\u4f53\u65b9\u5757"]}),"\n"]}),"\n",(0,s.jsx)(i.v,{children:(0,s.jsxs)(l.c,{children:["Added method ",(0,s.jsx)("code",{children:"getBlockBelow"})," which will perform a raycast from a given position, trying to find the first solid block below"]})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},76967:(e,n,t)=>{t.d(n,{j:()=>c});var s=t(96540),r=t(8045),i=t(58409),o=t(74848);function c(e){const[n,t]=(0,s.useState)(!0),[c,l]=(0,i.v)({name:"hiddenSwitch",listener(e){t(e)}});return(0,s.useEffect)((()=>(c(),t(r.k.isHidden()),()=>{l()})),[]),(0,o.jsx)("div",{className:e.className,style:{display:n?"none":"flex"},children:e.children})}},15589:(e,n,t)=>{t.d(n,{v:()=>o});var s=t(76967),r=(t(96540),t(74848));function i(e){return(0,r.jsx)("div",{className:"gray-text",style:{color:"gray"},children:e.children})}function o(e){return(0,r.jsx)(s.j,{children:(0,r.jsx)(i,{children:e.children})})}},17673:(e,n,t)=>{t.d(n,{c:()=>r});t(96540);var s=t(74848);function r(e){const n=e.keepMargin??!1;return(0,s.jsx)("ul",{className:n?"":"hidden-source-text",children:(0,s.jsx)("li",{children:e.children})})}},58409:(e,n,t)=>{t.d(n,{v:()=>i});class s{events={};static defaultMaxListeners=64;_maxListeners=s.defaultMaxListeners;on(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].push(n),this}once(e,n){var t=this;const s=function(){n(...arguments),t.off(e,s)};return this.on(e,s),this}emit(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];const r=this.events[e];return r&&r.forEach((e=>{e(...t)})),this}off(e,n){const t=this.events[e];if(!t)return this;if(!n)return delete this.events[e],this;const s=t.indexOf(n);return-1!==s&&t.splice(s,1),0===t.length&&delete this.events[e],this}listenerCount(e){const n=this.events[e];return n?n.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(n),this}prependOnceListener(e,n){var t=this;const s=function(){n(...arguments),t.off(e,s)};return this.prependListener(e,s),this}removeListener(e,n){const t=this.events[e];return t.splice(t.indexOf(n),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||s.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new s;function i(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];r.emit(e.name,...t)}]}},8045:(e,n,t)=>{t.d(n,{k:()=>r});var s=t(58409);class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),n=(0,s.v)({name:"hiddenSwitch"})[2];this.setHidden(e),n(e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);