"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95886],{93424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=r(74848),t=r(28453);const i={id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},l=void 0,d={id:"sapi/stable/server/classes/ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",description:"When present on an item, this item can take damage in the",source:"@site/docs/sapi/stable/server/classes/ItemDurabilityComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemDurabilityComponent",permalink:"/en/docs/sapi/stable/server/classes/ItemDurabilityComponent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemDurabilityComponent",title:"Class: ItemDurabilityComponent",sidebar_label:"ItemDurabilityComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemCustomComponentReloadVersionError",permalink:"/en/docs/sapi/stable/server/classes/ItemCustomComponentReloadVersionError"},next:{title:"ItemEnchantableComponent",permalink:"/en/docs/sapi/stable/server/classes/ItemEnchantableComponent"}},a={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"damage",id:"damage",level:3},{value:"maxDurability",id:"maxdurability",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getDamageChance",id:"getdamagechance",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getDamageChanceRange",id:"getdamagechancerange",level:3},{value:"Returns",id:"returns-2",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"When present on an item, this item can take damage in the\nprocess of being used. Note that this component only applies\nto data-driven items."}),"\n",(0,s.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent",children:(0,s.jsx)(n.code,{children:"ItemComponent"})})}),"\n",(0,s.jsxs)(n.p,{children:["\u21b3 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ItemDurabilityComponent"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new ItemDurabilityComponent"}),"(): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemDurabilityComponent",children:(0,s.jsx)(n.code,{children:"ItemDurabilityComponent"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemDurabilityComponent",children:(0,s.jsx)(n.code,{children:"ItemDurabilityComponent"})})}),"\n",(0,s.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent#constructor",children:"constructor"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"damage",children:"damage"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"damage"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns the current damage level of this particular item."}),"\n",(0,s.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"maxdurability",children:"maxDurability"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"maxDurability"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Represents the amount of damage that this item can take\nbefore breaking."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"typeId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent#typeid",children:"typeId"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,s.jsxs)(n.p,{children:["\u25aa ",(0,s.jsx)(n.code,{children:"Static"})," ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"componentId"}),": ",(0,s.jsx)(n.code,{children:'"minecraft:durability"'})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"getdamagechance",children:"getDamageChance"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getDamageChance"}),"(",(0,s.jsx)(n.code,{children:"unbreakingEnchantmentLevel?"}),"): ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"unbreakingEnchantmentLevel?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be within the range [0, 3]."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"number"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns the maximum chance that this item would be damaged\nusing the damageRange property, given an unbreaking\nenchantment level."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getdamagechancerange",children:"getDamageChanceRange"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getDamageChanceRange"}),"(): ",(0,s.jsx)(n.code,{children:"NumberRange"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NumberRange"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"A range of numbers that is used to calculate the damage\nchance for an item. The damage chance will fall within this\nrange."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isvalid",children:"isValid"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"isValid"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent",children:"ItemComponent"}),".",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ItemComponent#isvalid",children:"isValid"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(96540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);