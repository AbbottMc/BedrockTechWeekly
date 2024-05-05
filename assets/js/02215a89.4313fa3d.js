"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35477],{16335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453);const i={id:"EntityHealthComponent",title:"Class: EntityHealthComponent",sidebar_label:"EntityHealthComponent",sidebar_position:0,custom_edit_url:null},l=void 0,d={id:"sapi/stable/server/classes/EntityHealthComponent",title:"Class: EntityHealthComponent",description:"Defines the health properties of an entity.",source:"@site/docs/sapi/stable/server/classes/EntityHealthComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityHealthComponent",permalink:"/docs/sapi/stable/server/classes/EntityHealthComponent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityHealthComponent",title:"Class: EntityHealthComponent",sidebar_label:"EntityHealthComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHealthChangedAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/EntityHealthChangedAfterEventSignal"},next:{title:"EntityHitBlockAfterEvent",permalink:"/docs/sapi/stable/server/classes/EntityHitBlockAfterEvent"}},o={},h=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"currentValue",id:"currentvalue",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"defaultValue",id:"defaultvalue",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"effectiveMax",id:"effectivemax",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"effectiveMin",id:"effectivemin",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"resetToDefaultValue",id:"resettodefaultvalue",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"resetToMaxValue",id:"resettomaxvalue",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"resetToMinValue",id:"resettominvalue",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"setCurrentValue",id:"setcurrentvalue",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-10",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Defines the health properties of an entity."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Example"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// A function that applies damage and then heals the entity\nimport { Entity, EntityComponentTypes, system, world } from '@minecraft/server';\n\nfunction applyDamageAndHeal(entity: Entity) {\n    entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob\n\n    system.runTimeout(() => {\n        const health = entity.getComponent(EntityComponentTypes.Health);\n        if (health) {\n            world.sendMessage(`Entity health before heal: ${health.currentValue}`);\n\n            health.resetToMaxValue();\n\n            world.sendMessage(`Entity after before heal: ${health.currentValue}`);\n        } else {\n            console.warn('Entity does not have health component');\n        }\n    }, 40); // Run in a few seconds (40 ticks)\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:(0,r.jsx)(n.code,{children:"EntityAttributeComponent"})})}),"\n",(0,r.jsxs)(n.p,{children:["\u21b3 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EntityHealthComponent"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"new EntityHealthComponent"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityHealthComponent",children:(0,r.jsx)(n.code,{children:"EntityHealthComponent"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityHealthComponent",children:(0,r.jsx)(n.code,{children:"EntityHealthComponent"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#constructor",children:"constructor"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"currentvalue",children:"currentValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"currentValue"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Current value of this attribute for this instance."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#currentvalue",children:"currentValue"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"defaultvalue",children:"defaultValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"defaultValue"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the default defined value for this attribute."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#defaultvalue",children:"defaultValue"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"effectivemax",children:"effectiveMax"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"effectiveMax"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the effective max of this attribute given any other\nambient components or factors."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#effectivemax",children:"effectiveMax"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"effectivemin",children:"effectiveMin"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"effectiveMin"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the effective min of this attribute given any other\nambient components or factors."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#effectivemin",children:"effectiveMin"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"entity"}),": ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/Entity",children:(0,r.jsx)(n.code,{children:"Entity"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#entity",children:"entity"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#typeid",children:"typeId"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,r.jsxs)(n.p,{children:["\u25aa ",(0,r.jsx)(n.code,{children:"Static"})," ",(0,r.jsx)(n.code,{children:"Readonly"})," ",(0,r.jsx)(n.strong,{children:"componentId"}),": ",(0,r.jsx)(n.code,{children:'"minecraft:health"'})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#isvalid",children:"isValid"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resettodefaultvalue",children:"resetToDefaultValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"resetToDefaultValue"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Resets the current value of this attribute to the defined\ndefault value."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#resettodefaultvalue",children:"resetToDefaultValue"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resettomaxvalue",children:"resetToMaxValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"resetToMaxValue"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Resets the current value of this attribute to the maximum\ndefined value."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#resettomaxvalue",children:"resetToMaxValue"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resettominvalue",children:"resetToMinValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"resetToMinValue"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Resets the current value of this attribute to the minimum\ndefined value."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#resettominvalue",children:"resetToMinValue"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setcurrentvalue",children:"setCurrentValue"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setCurrentValue"}),"(",(0,r.jsx)(n.code,{children:"value"}),"): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"Sets the current value of this attribute."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent",children:"EntityAttributeComponent"}),".",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntityAttributeComponent#setcurrentvalue",children:"setCurrentValue"})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);