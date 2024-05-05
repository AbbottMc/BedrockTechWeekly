"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[18211],{43200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453);const r={id:"EntityItemComponent",title:"Class: EntityItemComponent",sidebar_label:"EntityItemComponent",sidebar_position:0,custom_edit_url:null},o=void 0,d={id:"sapi/stable/server/classes/EntityItemComponent",title:"Class: EntityItemComponent",description:"If added onto the entity, this indicates that the entity",source:"@site/docs/sapi/stable/server/classes/EntityItemComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityItemComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityItemComponent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityItemComponent",title:"Class: EntityItemComponent",sidebar_label:"EntityItemComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityIsTamedComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityIsTamedComponent"},next:{title:"EntityIterator",permalink:"/en/docs/sapi/stable/server/classes/EntityIterator"}},c={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"itemStack",id:"itemstack",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"If added onto the entity, this indicates that the entity\nrepresents a free-floating item in the world. Lets you\nretrieve the actual item stack contents via the itemStack\nproperty."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { DimensionLocation, EntityComponentTypes } from \"@minecraft/server\";\n\n// Returns true if a feather item entity is within 'distance' blocks of 'location'.\nfunction isFeatherNear(location: DimensionLocation, distance: number): boolean {\n    const items = location.dimension.getEntities({\n        location: location,\n        maxDistance: 20,\n    });\n\n    for (const item of items) {\n        const itemComp = item.getComponent(EntityComponentTypes.Item);\n\n        if (itemComp) {\n            if (itemComp.itemStack.typeId.endsWith('feather')) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent",children:(0,s.jsx)(n.code,{children:"EntityComponent"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u21b3 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"EntityItemComponent"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new EntityItemComponent"}),"(): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityItemComponent",children:(0,s.jsx)(n.code,{children:"EntityItemComponent"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityItemComponent",children:(0,s.jsx)(n.code,{children:"EntityItemComponent"})})}),"\n",(0,s.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor",children:"constructor"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"entity"}),": ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/Entity",children:(0,s.jsx)(n.code,{children:"Entity"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity",children:"entity"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"itemstack",children:"itemStack"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"itemStack"}),": ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemStack",children:(0,s.jsx)(n.code,{children:"ItemStack"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Item stack represented by this entity in the world."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"typeId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid",children:"typeId"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,s.jsxs)(n.p,{children:["\u25aa ",(0,s.jsx)(n.code,{children:"Static"})," ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"componentId"}),": ",(0,s.jsx)(n.code,{children:'"minecraft:item"'})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"isValid"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent",children:"EntityComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid",children:"isValid"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);