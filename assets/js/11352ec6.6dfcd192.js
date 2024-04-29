"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"EntityQueryOptions",title:"Interface: EntityQueryOptions",sidebar_label:"EntityQueryOptions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server/interfaces/EntityQueryOptions",id:"sapi/stable/server/interfaces/EntityQueryOptions",title:"Interface: EntityQueryOptions",description:"Contains options for selecting entities within an area.",source:"@site/docs/sapi/stable/server/interfaces/EntityQueryOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/EntityQueryOptions",permalink:"/docs/sapi/stable/server/interfaces/EntityQueryOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityQueryOptions",title:"Interface: EntityQueryOptions",sidebar_label:"EntityQueryOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHitInformation",permalink:"/docs/sapi/stable/server/interfaces/EntityHitInformation"},next:{title:"EntityQueryPropertyOptions",permalink:"/docs/sapi/stable/server/interfaces/EntityQueryPropertyOptions"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"closest",id:"closest",level:3},{value:"excludeFamilies",id:"excludefamilies",level:3},{value:"excludeGameModes",id:"excludegamemodes",level:3},{value:"excludeNames",id:"excludenames",level:3},{value:"excludeTags",id:"excludetags",level:3},{value:"excludeTypes",id:"excludetypes",level:3},{value:"families",id:"families",level:3},{value:"farthest",id:"farthest",level:3},{value:"gameMode",id:"gamemode",level:3},{value:"location",id:"location",level:3},{value:"maxDistance",id:"maxdistance",level:3},{value:"maxHorizontalRotation",id:"maxhorizontalrotation",level:3},{value:"maxLevel",id:"maxlevel",level:3},{value:"maxVerticalRotation",id:"maxverticalrotation",level:3},{value:"minDistance",id:"mindistance",level:3},{value:"minHorizontalRotation",id:"minhorizontalrotation",level:3},{value:"minLevel",id:"minlevel",level:3},{value:"minVerticalRotation",id:"minverticalrotation",level:3},{value:"name",id:"name",level:3},{value:"propertyOptions",id:"propertyoptions",level:3},{value:"scoreOptions",id:"scoreoptions",level:3},{value:"tags",id:"tags",level:3},{value:"type",id:"type",level:3},{value:"volume",id:"volume",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains options for selecting entities within an area."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"testBlockConditional.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dimension } from '@minecraft/server';\n\n// Having this command:\n\n// execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon\n\n// Equivalent scripting code would be:\nfunction spawnFish(dimension: Dimension) {\n    dimension\n        .getEntities({\n            type: 'fox',\n        })\n        .filter(entity => {\n            const block = dimension.getBlock({\n                x: entity.location.x,\n                y: entity.location.y - 1,\n                z: entity.location.z,\n            });\n\n            return block !== undefined && block.matches('minecraft:stone');\n        })\n        .forEach(entity => {\n            dimension.spawnEntity('salmon', entity.location);\n        });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"testPlaySoundChained.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dimension } from '@minecraft/server';\n\n// Having this command:\n\n// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run playsound raid.horn @a\n\n// Equivalent scripting code would be:\nfunction playSounds(dimension: Dimension) {\n    const targetPlayers = dimension.getPlayers();\n    const originEntities = dimension.getEntities({\n        type: 'armor_stand',\n        name: 'myArmorStand',\n        tags: ['dummyTag1'],\n        excludeTags: ['dummyTag2'],\n    });\n\n    originEntities.forEach(entity => {\n        targetPlayers.forEach(player => {\n            player.playSound('raid.horn');\n        });\n    });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"testSendMessageAllPlayers.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dimension } from '@minecraft/server';\n\n// Having this command:\n\n// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { \"rawtext\": [{\"translate\": \"hello.world\" }] }\n\n// Equivalent scripting code would be:\nfunction sendMessagesToPlayers(dimension: Dimension) {\n    const targetPlayers = dimension.getPlayers();\n    const originEntities = dimension.getEntities({\n        type: 'armor_stand',\n        name: 'myArmorStand',\n        tags: ['dummyTag1'],\n        excludeTags: ['dummyTag2'],\n    });\n\n    originEntities.forEach(entity => {\n        targetPlayers.forEach(player => {\n            player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });\n        });\n    });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"testSetScoreBoardChained.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dimension, world } from '@minecraft/server';\n\n// Having these commands:\n\n// scoreboard objectives add scoreObjective1 dummy\n// scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1\n\n// Equivalent scripting code would be:\nfunction setScores(dimension: Dimension) {\n    const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');\n    dimension\n        .getEntities({\n            type: 'armor_stand',\n            name: 'myArmorStand',\n        })\n        .forEach(entity => {\n            if (entity.scoreboardIdentity !== undefined) {\n                objective.setScore(entity.scoreboardIdentity, -1);\n            }\n        });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"testSummonMobChained.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dimension } from '@minecraft/server';\n\n// Having this command:\n\n// execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~\n\n// Equivalent scripting code would be:\nfunction spawnPigs(dimension: Dimension) {\n    const armorStandArray = dimension.getEntities({\n        type: 'armor_stand',\n    });\n    const playerArray = dimension.getPlayers({\n        location: { x: 0, y: -60, z: 0 },\n        closest: 4,\n        maxDistance: 15,\n    });\n    armorStandArray.forEach(entity => {\n        playerArray.forEach(player => {\n            dimension.spawnEntity('pig', {\n                x: player.location.x + 1,\n                y: player.location.y,\n                z: player.location.z,\n            });\n        });\n    });\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"checkFeatherNearby.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DimensionLocation, EntityComponentTypes } from \"@minecraft/server\";\n\n// Returns true if a feather item entity is within 'distance' blocks of 'location'.\nfunction isFeatherNear(location: DimensionLocation, distance: number): boolean {\n    const items = location.dimension.getEntities({\n        location: location,\n        maxDistance: 20,\n    });\n\n    for (const item of items) {\n        const itemComp = item.getComponent(EntityComponentTypes.Item);\n\n        if (itemComp) {\n            if (itemComp.itemStack.typeId.endsWith('feather')) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"closest"},"closest"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"closest"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Limits the number of entities to return, opting for the\nclosest N entities as specified by this property. The\nlocation value must also be specified on the query options\nobject."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludefamilies"},"excludeFamilies"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"excludeFamilies"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Excludes entities that match one or more of the specified\nfamilies."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludegamemodes"},"excludeGameModes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"excludeGameModes"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/GameMode"},(0,i.kt)("inlineCode",{parentName:"a"},"GameMode")),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Excludes entities if have a specific gamemode that matches\nthe specified gamemode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludenames"},"excludeNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"excludeNames"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Excludes entities that have a name that match one of the\nspecified values."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludetags"},"excludeTags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"excludeTags"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Excludes entities with a tag that matches one of the\nspecified values."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludetypes"},"excludeTypes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"excludeTypes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Excludes entities if they are one of the specified types."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"families"},"families"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"families"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, includes entities that match all of the\nspecified families."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"farthest"},"farthest"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"farthest"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Limits the number of entities to return, opting for the\nfarthest N entities as specified by this property. The\nlocation value must also be specified on the query options\nobject."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gamemode"},"gameMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gameMode"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/GameMode"},(0,i.kt)("inlineCode",{parentName:"a"},"GameMode"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, includes entities with a gamemode that matches\nthe specified gamemode."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"location"},"location"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"location"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Adds a seed location to the query that is used in\nconjunction with closest, farthest, limit, volume, and\ndistance properties."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxdistance"},"maxDistance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxDistance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, includes entities that are less than this\ndistance away from the location specified in the location\nproperty."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxhorizontalrotation"},"maxHorizontalRotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxHorizontalRotation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, will only include entities that have at most\nthis horizontal rotation."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxlevel"},"maxLevel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxLevel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If defined, only players that have at most this level are\nreturned."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxverticalrotation"},"maxVerticalRotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxVerticalRotation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, only entities that have at most this vertical\nrotation are returned."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mindistance"},"minDistance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"minDistance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, includes entities that are least this distance\naway from the location specified in the location property."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minhorizontalrotation"},"minHorizontalRotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"minHorizontalRotation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, will only include entities that have at a\nminimum this horizontal rotation."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minlevel"},"minLevel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"minLevel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If defined, only players that have at least this level are\nreturned."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minverticalrotation"},"minVerticalRotation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"minVerticalRotation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If specified, will only include entities that have at least\nthis vertical rotation."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Includes entities with the specified name."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propertyoptions"},"propertyOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"propertyOptions"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/EntityQueryPropertyOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityQueryPropertyOptions")),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Gets/sets a collection of EntityQueryPropertyOptions objects\nwith filters for specific properties."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scoreoptions"},"scoreOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"scoreOptions"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/EntityQueryScoreOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityQueryScoreOptions")),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Gets/sets a collection of EntityQueryScoreOptions objects\nwith filters for specific scoreboard objectives."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tags"},"tags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"tags"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Includes entities that match all of the specified tags."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If defined, entities that match this type are included."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"volume"},"volume"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"volume"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"In conjunction with location, specified a cuboid volume of\nentities to include."))}d.isMDXComponent=!0}}]);