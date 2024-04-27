"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[67138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),k=i,u=h["".concat(p,".").concat(k)]||h[k]||c[k]||o;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={id:"EntityProjectileComponent",title:"Class: EntityProjectileComponent",sidebar_label:"EntityProjectileComponent",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/preview/server/classes/EntityProjectileComponent",id:"sapi/preview/server/classes/EntityProjectileComponent",title:"Class: EntityProjectileComponent",description:"The projectile component controls the properties of a",source:"@site/docs/sapi/preview/server/classes/EntityProjectileComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityProjectileComponent",permalink:"/docs/sapi/preview/server/classes/EntityProjectileComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityProjectileComponent",title:"Class: EntityProjectileComponent",sidebar_label:"EntityProjectileComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityOnFireComponent",permalink:"/docs/sapi/preview/server/classes/EntityOnFireComponent"},next:{title:"EntityPushThroughComponent",permalink:"/docs/sapi/preview/server/classes/EntityPushThroughComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"airInertia",id:"airinertia",level:3},{value:"catchFireOnHurt",id:"catchfireonhurt",level:3},{value:"critParticlesOnProjectileHurt",id:"critparticlesonprojectilehurt",level:3},{value:"destroyOnProjectileHurt",id:"destroyonprojectilehurt",level:3},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"gravity",id:"gravity",level:3},{value:"hitEntitySound",id:"hitentitysound",level:3},{value:"hitGroundSound",id:"hitgroundsound",level:3},{value:"hitParticle",id:"hitparticle",level:3},{value:"lightningStrikeOnHit",id:"lightningstrikeonhit",level:3},{value:"liquidInertia",id:"liquidinertia",level:3},{value:"onFireTime",id:"onfiretime",level:3},{value:"owner",id:"owner",level:3},{value:"shouldBounceOnHit",id:"shouldbounceonhit",level:3},{value:"stopOnHit",id:"stoponhit",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"shoot",id:"shoot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:s};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The projectile component controls the properties of a\nprojectile entity and allows it to be shot in a given\ndirection.\nThis component is present when the entity has the\nminecraft:projectile component."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"shootArrow.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { world, Vector3 } from '@minecraft/server';\n\nconst location: Vector3 = { x: 0, y: -59, z: 0 }; // Replace with the coordinates of where you want to spawn the arrow\nconst velocity: Vector3 = { x: 0, y: 0, z: 5 };\nconst arrow = world.getDimension('overworld').spawnEntity('minecraft:arrow', location);\nconst projectileComp = arrow.getComponent('minecraft:projectile');\nprojectileComp?.shoot(velocity);\n")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EntityProjectileComponent"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"new EntityProjectileComponent"),"()"),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#constructor"},"constructor")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"airinertia"},"airInertia"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"airInertia"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The fraction of the projectile's speed maintained every tick\nwhile traveling through air."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"catchfireonhurt"},"catchFireOnHurt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"catchFireOnHurt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true, the entity will be set on fire when hurt. The\ndefault burn duration is 5 seconds. This duration can be\nmodified via the onFireTime property. The entity will not\ncatch fire if immune or if the entity is wet."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"critparticlesonprojectilehurt"},"critParticlesOnProjectileHurt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"critParticlesOnProjectileHurt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true, the projectile will spawn crit particles when hit\nby a player. E.g. Player attacking a Shulker bullet."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroyonprojectilehurt"},"destroyOnProjectileHurt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"destroyOnProjectileHurt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true, the projectile will be destroyed when it takes\ndamage. E.g. Player attacking a Shulker bullet."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#entity"},"entity")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gravity"},"gravity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gravity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The gravity applied to the projectile. When the entity is\nnot on the ground, subtracts this amount from the\nprojectile\u2019s change in vertical position every tick. The\nhigher the value, the faster the projectile falls. If\nnegative, the entity will rise instead of fall."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hitentitysound"},"hitEntitySound"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hitEntitySound"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The sound that plays when the projectile hits an entity."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hitgroundsound"},"hitGroundSound"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hitGroundSound"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The sound that plays when the projectile hits a block."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hitparticle"},"hitParticle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hitParticle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The particle that spawns when the projectile hits something."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightningstrikeonhit"},"lightningStrikeOnHit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightningStrikeOnHit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true and the weather is thunder and the entity has line\nof sight to the sky, the entity will be struck by lightning\nwhen hit. E.g. A thrown Trident with the Channeling\nenchantment."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"liquidinertia"},"liquidInertia"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"liquidInertia"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The fraction of the projectile's speed maintained every tick\nwhile traveling through a liquid."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onfiretime"},"onFireTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"onFireTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Duration in seconds that the entity hit will be on fire for\nwhen catchFireOnHurt is set to true."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The owner of the projectile. This is used to determine what\nthe projectile can collide with and damage. It also\ndetermines which entity is assigned as the attacker."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shouldbounceonhit"},"shouldBounceOnHit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"shouldBounceOnHit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true, the projectile will bounce off mobs when no damage\nis taken. E.g. A spawning wither."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stoponhit"},"stopOnHit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stopOnHit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If true, the projectile will stop moving when an entity is\nhit as thought it had been blocked. E.g. Thrown trident on\nhit behavior."),(0,i.kt)("p",null,"This property can't be edited in read-only mode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typeid"},"typeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"typeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Identifier of the component."),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#typeid"},"typeId")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentid"},"componentId"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"componentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"minecraft:projectile"')),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"isvalid"},"isValid"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isValid"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether the component is valid."),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent#isvalid"},"isValid")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shoot"},"shoot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"shoot"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"velocity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Shoots the projectile with a given velocity. The projectile\nwill be shot from its current location."),(0,i.kt)("p",null,"This function can't be called in read-only mode."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"Throws if the component or entity no longer exist."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"velocity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The velocity to fire the projectile. This controls both the speed and direction which which the projectile will be shot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/ProjectileShootOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ProjectileShootOptions"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional configuration for the shoot.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")))}h.isMDXComponent=!0}}]);