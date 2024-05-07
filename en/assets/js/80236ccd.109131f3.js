"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80270],{453:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=i(74848),s=i(28453);const t={},o="Class: EntityOnFireComponent",d={id:"sapi/preview/server/classes/EntityOnFireComponent",title:"Class: EntityOnFireComponent",description:"When present on an entity, this entity is on fire.",source:"@site/docs/sapi/preview/server/classes/EntityOnFireComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityOnFireComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityOnFireComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/classes/EntityOnFireComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"EntityNpcComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityNpcComponent"},next:{title:"EntityProjectileComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityProjectileComponent"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EntityOnFireComponent()",id:"new-entityonfirecomponent",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"onFireTicksRemaining",id:"onfireticksremaining",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"typeId",id:"typeid",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid()",id:"isvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Remarks",id:"remarks-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"class-entityonfirecomponent",children:"Class: EntityOnFireComponent"}),"\n",(0,r.jsx)(n.p,{children:"When present on an entity, this entity is on fire."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";\n\nfunction setAblaze(entity: Entity) {\n    entity.setOnFire(20, true);\n\n    system.runTimeout(() => {\n        const onfire = entity.getComponent(EntityComponentTypes.OnFire);\n        if (onfire) {\n            world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);\n        }\n        // This will extinguish the entity\n        entity.extinguishFire(true);\n    }, 30); // Run in 30 ticks or ~1.5 seconds\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-entityonfirecomponent",children:"new EntityOnFireComponent()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"private"})," ",(0,r.jsx)(n.strong,{children:"new EntityOnFireComponent"}),"(): ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityOnFireComponent",children:(0,r.jsx)(n.code,{children:"EntityOnFireComponent"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityOnFireComponent",children:(0,r.jsx)(n.code,{children:"EntityOnFireComponent"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Beta"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"entity"}),": ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/Entity",children:(0,r.jsx)(n.code,{children:"Entity"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#entity",children:(0,r.jsx)(n.code,{children:"entity"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onfireticksremaining",children:"onFireTicksRemaining"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onFireTicksRemaining"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The number of ticks remaining before the fire goes out."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#typeid",children:(0,r.jsx)(n.code,{children:"typeId"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"static"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"componentId"}),": ",(0,r.jsx)(n.code,{children:'"minecraft:onfire"'})," = ",(0,r.jsx)(n.code,{children:"'minecraft:onfire'"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#isvalid",children:(0,r.jsx)(n.code,{children:"isValid"})})]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);