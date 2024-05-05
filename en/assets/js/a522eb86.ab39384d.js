"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98886,56598,43115,55066,22263,7186],{19527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=n(74848),o=n(28453),i=n(95859),s=n(88710),c=(n(88103),n(24377),n(74450));const a={},l=void 0,d={id:"changelog_source/preview/1.21/0/24/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/24/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech",permalink:"/en/docs/changelog_source/preview/1.21/0/24/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},h=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...c.toc,{value:"Editor",id:"editor",level:2},{value:"General",id:"general",level:2},{value:"Items",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...c.toc];function p(e){const t={code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Changed Biome documentation to generate with a different system, which will cause the layout and order of those documentation elements to change"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(c.default,{techSapi:(0,r.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.code,{children:"addTable"})," API"]}),"\n",(0,r.jsxs)(t.li,{children:["Fixed GIF asset support for ",(0,r.jsx)(t.code,{children:"addImage"})," API"]}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where the viewport did not scale properly with changes in UI or font scaling"}),"\n",(0,r.jsx)(t.li,{children:"Resolved tooltip positioning and content size issues"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Free camera experiment has been deprecated and the toggle removed as this feature has shipped. Future improvements to the free camera preset will be found in new experimental toggles as those capabilities become available. Samples can be found in the document for the camera command."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"items",children:"Items"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed a bug where, if a block and item are registered with the same identifier, the block returns a null item when 'picked'"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(c.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},88710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453);function i(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"gettopmostblock",children:"getTopmostBlock"}),"\n",(0,r.jsx)(t.admonition,{title:"Warning",type:"warn",children:(0,r.jsx)(t.p,{children:"The content on this page has not undergone rigorous testing and is presently intended solely for trialing the website's new feature: Piston Box.\nPlease exercise caution when referencing this information."})}),"\n",(0,r.jsxs)(t.p,{children:["The new method ",(0,r.jsx)(t.code,{children:"getTopmostBlock"})," is designed to facilitate obtaining the highest block at a given (x, z) coordinate position."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"locationXZ"}),"\uff1a An instance object conforming to the VectorXZ interface pattern, comprising two properties: x and z."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"minHeight"}),"\uff1a An optional parameter representing the minimum height, with a default value of the minimum height of the world."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Returns an instance object of ",(0,r.jsx)(t.a,{href:"/docs/sapi/preview/server/classes/Block",children:"Block"}),", representing the highest point block. If no such highest block exists, returns ",(0,r.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"When a player interacts with a block, this function retrieves the highest point block at the block's (x, z) position."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import {MinecraftDimensionTypes, VectorXZ, world} from "@minecraft/server"\nconst overworld = world.getDimension(MinecraftDimensionTypes.overworld);\n\n// Subscribe events of player-block interactions in the game.\nworld.afterEvents.playerInteractWithBlock.subscribe(({block}) => {\n  // Obtain the (x, z) position of the player\'s interacting block, and store it as a new VectorXZ type\n  const location: VectorXZ = {x: block.x, y: block.y};\n  // Get the highest point block at the (x, z) position\n  const topmostBlock = overworld.getTopmostBlock(location);\n  // Output the information of the highest point block\n  console.warn(`The topmost block at (${location.x}, ${location.y}) is "${topmostBlock.typeId}"`);\n});\n'})})]})}function s(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},a=void 0,l={id:"changelog_source/preview/1.21/0/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed issue where block with custom components could not have a block placed onto them without crouching",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/24/tech_sapi_exp.mdx",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){const t={code:"code",li:"li",ul:"ul",...(0,o.R)(),...e.components},{PistonToggle:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PistonToggle",!0),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed issue where block with custom components could not have a block placed onto them without crouching"}),"\n",(0,r.jsxs)(t.li,{children:["Added new interface ",(0,r.jsx)(t.code,{children:"VectorXZ"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added method ",(0,r.jsx)(n,{content:(0,r.jsx)(s,{})})," ",(0,r.jsx)(t.code,{children:"getTopmostBlock"})," which will perform a raycast from the top of the world downwards, trying to find the first solid block"]}),"\n",(0,r.jsxs)(t.li,{children:["Added method ",(0,r.jsx)(t.code,{children:"getBlockAbove"})," which will perform a raycast from a given position, trying to find the first solid block above"]}),"\n",(0,r.jsxs)(t.li,{children:["Added method ",(0,r.jsx)(t.code,{children:"getBlockBelow"})," which will perform a raycast from a given position, trying to find the first solid block below"]}),"\n"]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},24377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const i={},s=void 0,c={id:"changelog_source/preview/1.21/0/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},95859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const i={},s=void 0,c={id:"changelog_source/preview/1.21/0/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Moved entity from beta to 1.11.0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/24/tech_sapi_stable.mdx",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/0/24/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech_sapi_stable.mdx",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.code,{children:"entity"})," from ",(0,r.jsx)(t.code,{children:"beta"})," to ",(0,r.jsx)(t.code,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.code,{children:"EntityTameMountComponent"})," and method ",(0,r.jsx)(t.code,{children:"tame"})," from ",(0,r.jsx)(t.code,{children:"beta"})," to ",(0,r.jsx)(t.code,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.code,{children:"EntityAddRiderComponent"})," from ",(0,r.jsx)(t.code,{children:"beta"})," to ",(0,r.jsx)(t.code,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.code,{children:"Seat"})," from ",(0,r.jsx)(t.code,{children:"beta"})," to ",(0,r.jsx)(t.code,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Moved ",(0,r.jsx)(t.code,{children:"EntityRidingComponent"})," from ",(0,r.jsx)(t.code,{children:"beta"})," to ",(0,r.jsx)(t.code,{children:"1.11.0"})]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},88103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const i={},s=void 0,c={id:"changelog_source/preview/1.21/0/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/24",slug:"/changelog_source/preview/1.21/0/24/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/24/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453),i=n(18228),s=n(19365);const c={},a=void 0,l={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(s.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(96540),o=n(34164),i=n(23104),s=n(56347),c=n(205),a=n(57485),l=n(31682),d=n(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=h(e),[s,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:n,groupId:o}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),x=(()=>{const e=l??m;return p({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{x&&a(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c,rightElement:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=c[n].value;o!==r&&(d(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:[c.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...i,className:(0,o.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),a?(0,b.jsx)("div",{className:"w-full",children:a}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);