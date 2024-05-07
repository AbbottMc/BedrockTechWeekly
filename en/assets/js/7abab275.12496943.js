"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[15224],{5731:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(74848),t=i(28453);const s={},l="Class: EntityProjectileComponent",o={id:"sapi/preview/server/classes/EntityProjectileComponent",title:"Class: EntityProjectileComponent",description:"The projectile component controls the properties of a",source:"@site/docs/sapi/preview/server/classes/EntityProjectileComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityProjectileComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityProjectileComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/classes/EntityProjectileComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"EntityOnFireComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityOnFireComponent"},next:{title:"EntityPushThroughComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityPushThroughComponent"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EntityProjectileComponent()",id:"new-entityprojectilecomponent",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"airInertia",id:"airinertia",level:3},{value:"Remarks",id:"remarks",level:4},{value:"catchFireOnHurt",id:"catchfireonhurt",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"critParticlesOnProjectileHurt",id:"critparticlesonprojectilehurt",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"destroyOnProjectileHurt",id:"destroyonprojectilehurt",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"entity",id:"entity",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"gravity",id:"gravity",level:3},{value:"Remarks",id:"remarks-5",level:4},{value:"hitEntitySound?",id:"hitentitysound",level:3},{value:"Remarks",id:"remarks-6",level:4},{value:"hitGroundSound?",id:"hitgroundsound",level:3},{value:"Remarks",id:"remarks-7",level:4},{value:"hitParticle?",id:"hitparticle",level:3},{value:"Remarks",id:"remarks-8",level:4},{value:"lightningStrikeOnHit",id:"lightningstrikeonhit",level:3},{value:"Remarks",id:"remarks-9",level:4},{value:"liquidInertia",id:"liquidinertia",level:3},{value:"Remarks",id:"remarks-10",level:4},{value:"onFireTime",id:"onfiretime",level:3},{value:"Remarks",id:"remarks-11",level:4},{value:"owner?",id:"owner",level:3},{value:"Remarks",id:"remarks-12",level:4},{value:"shouldBounceOnHit",id:"shouldbounceonhit",level:3},{value:"Remarks",id:"remarks-13",level:4},{value:"stopOnHit",id:"stoponhit",level:3},{value:"Remarks",id:"remarks-14",level:4},{value:"typeId",id:"typeid",level:3},{value:"Remarks",id:"remarks-15",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid()",id:"isvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Remarks",id:"remarks-16",level:4},{value:"shoot()",id:"shoot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-17",level:4},{value:"Throws",id:"throws",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"class-entityprojectilecomponent",children:"Class: EntityProjectileComponent"}),"\n",(0,r.jsx)(n.p,{children:"The projectile component controls the properties of a\nprojectile entity and allows it to be shot in a given\ndirection.\nThis component is present when the entity has the\nminecraft:projectile component."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { world, Vector3 } from '@minecraft/server';\n\nconst location: Vector3 = { x: 0, y: -59, z: 0 }; // Replace with the coordinates of where you want to spawn the arrow\nconst velocity: Vector3 = { x: 0, y: 0, z: 5 };\nconst arrow = world.getDimension('overworld').spawnEntity('minecraft:arrow', location);\nconst projectileComp = arrow.getComponent('minecraft:projectile');\nprojectileComp?.shoot(velocity);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-entityprojectilecomponent",children:"new EntityProjectileComponent()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"private"})," ",(0,r.jsx)(n.strong,{children:"new EntityProjectileComponent"}),"(): ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityProjectileComponent",children:(0,r.jsx)(n.code,{children:"EntityProjectileComponent"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityProjectileComponent",children:(0,r.jsx)(n.code,{children:"EntityProjectileComponent"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"airinertia",children:"airInertia"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"airInertia"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The fraction of the projectile's speed maintained every tick\nwhile traveling through air."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"catchfireonhurt",children:"catchFireOnHurt"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"catchFireOnHurt"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true, the entity will be set on fire when hurt. The\ndefault burn duration is 5 seconds. This duration can be\nmodified via the onFireTime property. The entity will not\ncatch fire if immune or if the entity is wet."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"critparticlesonprojectilehurt",children:"critParticlesOnProjectileHurt"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"critParticlesOnProjectileHurt"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true, the projectile will spawn crit particles when hit\nby a player. E.g. Player attacking a Shulker bullet."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"destroyonprojectilehurt",children:"destroyOnProjectileHurt"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"destroyOnProjectileHurt"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true, the projectile will be destroyed when it takes\ndamage. E.g. Player attacking a Shulker bullet."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Beta"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"entity"}),": ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/Entity",children:(0,r.jsx)(n.code,{children:"Entity"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#entity",children:(0,r.jsx)(n.code,{children:"entity"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"gravity",children:"gravity"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gravity"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The gravity applied to the projectile. When the entity is\nnot on the ground, subtracts this amount from the\nprojectile\u2019s change in vertical position every tick. The\nhigher the value, the faster the projectile falls. If\nnegative, the entity will rise instead of fall."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hitentitysound",children:"hitEntitySound?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"hitEntitySound"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The sound that plays when the projectile hits an entity."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hitgroundsound",children:"hitGroundSound?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"hitGroundSound"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The sound that plays when the projectile hits a block."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hitparticle",children:"hitParticle?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"hitParticle"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The particle that spawns when the projectile hits something."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"lightningstrikeonhit",children:"lightningStrikeOnHit"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"lightningStrikeOnHit"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-9",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true and the weather is thunder and the entity has line\nof sight to the sky, the entity will be struck by lightning\nwhen hit. E.g. A thrown Trident with the Channeling\nenchantment."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"liquidinertia",children:"liquidInertia"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"liquidInertia"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-10",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The fraction of the projectile's speed maintained every tick\nwhile traveling through a liquid."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onfiretime",children:"onFireTime"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"onFireTime"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-11",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Duration in seconds that the entity hit will be on fire for\nwhen catchFireOnHurt is set to true."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"owner",children:"owner?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"owner"}),": ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/Entity",children:(0,r.jsx)(n.code,{children:"Entity"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-12",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The owner of the projectile. This is used to determine what\nthe projectile can collide with and damage. It also\ndetermines which entity is assigned as the attacker."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"shouldbounceonhit",children:"shouldBounceOnHit"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shouldBounceOnHit"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-13",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true, the projectile will bounce off mobs when no damage\nis taken. E.g. A spawning wither."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stoponhit",children:"stopOnHit"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stopOnHit"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-14",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If true, the projectile will stop moving when an entity is\nhit as thought it had been blocked. E.g. Thrown trident on\nhit behavior."}),"\n",(0,r.jsx)(n.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"typeId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-15",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#typeid",children:(0,r.jsx)(n.code,{children:"typeId"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"static"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"componentId"}),": ",(0,r.jsx)(n.code,{children:'"minecraft:projectile"'})," = ",(0,r.jsx)(n.code,{children:"'minecraft:projectile'"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"isvalid",children:"isValid()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isValid"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent",children:(0,r.jsx)(n.code,{children:"EntityComponent"})})," . ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/EntityComponent#isvalid",children:(0,r.jsx)(n.code,{children:"isValid"})})]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-16",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"shoot",children:"shoot()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shoot"}),"(",(0,r.jsx)(n.code,{children:"velocity"}),", ",(0,r.jsx)(n.code,{children:"options"}),"?): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"velocity"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/Vector3",children:(0,r.jsx)(n.code,{children:"Vector3"})})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The velocity to fire the projectile. This controls both the",(0,r.jsx)(n.br,{}),"speed and direction which which the projectile will be shot."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"options"}),"?"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/ProjectileShootOptions",children:(0,r.jsx)(n.code,{children:"ProjectileShootOptions"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Optional configuration for the shoot."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"remarks-17",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Shoots the projectile with a given velocity. The projectile\nwill be shot from its current location."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"Throws if the component or entity no longer exist."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);