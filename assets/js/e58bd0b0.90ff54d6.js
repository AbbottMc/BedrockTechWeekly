"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11225],{6970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(74848),t=s(28453);const i={},d="Class: EntityAgeableComponent",l={id:"sapi/stable/server/classes/EntityAgeableComponent",title:"Class: EntityAgeableComponent",description:"Adds a timer for the entity to grow up. It can be",source:"@site/docs/sapi/stable/server/classes/EntityAgeableComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityAgeableComponent",permalink:"/docs/sapi/stable/server/classes/EntityAgeableComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/EntityAgeableComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"EntityAddRiderComponent",permalink:"/docs/sapi/stable/server/classes/EntityAddRiderComponent"},next:{title:"EntityAttributeComponent",permalink:"/docs/sapi/stable/server/classes/EntityAttributeComponent"}},o={},c=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EntityAgeableComponent()",id:"new-entityageablecomponent",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Throws",id:"throws",level:4},{value:"entity",id:"entity",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"growUp",id:"growup",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"Throws",id:"throws-1",level:4},{value:"transformToItem",id:"transformtoitem",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"Throws",id:"throws-2",level:4},{value:"typeId",id:"typeid",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getDropItems()",id:"getdropitems",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks-5",level:4},{value:"Throws",id:"throws-3",level:4},{value:"getFeedItems()",id:"getfeeditems",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-6",level:4},{value:"Throws",id:"throws-4",level:4},{value:"isValid()",id:"isvalid",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Remarks",id:"remarks-7",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"class-entityageablecomponent",children:"Class: EntityAgeableComponent"}),"\n",(0,r.jsx)(n.p,{children:"Adds a timer for the entity to grow up. It can be\naccelerated by giving the entity the items it likes as\ndefined by feedItems."}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-entityageablecomponent",children:"new EntityAgeableComponent()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"private"})," ",(0,r.jsx)(n.strong,{children:"new EntityAgeableComponent"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAgeableComponent",children:(0,r.jsx)(n.code,{children:"EntityAgeableComponent"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAgeableComponent",children:(0,r.jsx)(n.code,{children:"EntityAgeableComponent"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"duration",children:"duration"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"duration"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Amount of time before the entity grows up, -1 for always a\nbaby."}),"\n",(0,r.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Beta"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"entity"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/Entity",children:(0,r.jsx)(n.code,{children:"Entity"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent#entity",children:(0,r.jsx)(n.code,{children:"entity"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"growup",children:"growUp"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"growUp"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/Trigger",children:(0,r.jsx)(n.code,{children:"Trigger"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Event that runs when this entity grows up."}),"\n",(0,r.jsx)(n.h4,{id:"throws-1",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"transformtoitem",children:"transformToItem"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"transformToItem"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The feed item used will transform into this item upon\nsuccessful interaction."}),"\n",(0,r.jsx)(n.h4,{id:"throws-2",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent#typeid",children:(0,r.jsx)(n.code,{children:"typeId"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"static"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"componentId"}),": ",(0,r.jsx)(n.code,{children:'"minecraft:ageable"'})," = ",(0,r.jsx)(n.code,{children:"'minecraft:ageable'"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"getdropitems",children:"getDropItems()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getDropItems"}),"(): ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"List of items that the entity drops when it grows up."}),"\n",(0,r.jsx)(n.h4,{id:"throws-3",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getfeeditems",children:"getFeedItems()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getFeedItems"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityDefinitionFeedItem",children:(0,r.jsx)(n.code,{children:"EntityDefinitionFeedItem"})}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityDefinitionFeedItem",children:(0,r.jsx)(n.code,{children:"EntityDefinitionFeedItem"})}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"List of items that can be fed to the entity. Includes 'item'\nfor the item name and 'growth' to define how much time it\ngrows up by."}),"\n",(0,r.jsx)(n.h4,{id:"throws-4",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityComponent#isvalid",children:(0,r.jsx)(n.code,{children:"isValid"})})]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);