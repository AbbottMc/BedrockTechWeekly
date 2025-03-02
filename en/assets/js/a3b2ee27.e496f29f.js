"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74776,87591,43115,78892,89987,37711],{99929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=t(74848),r=t(28453),s=t(77035),o=t(73561),l=(t(11433),t(615),t(74450));const a={},c=void 0,d={id:"changelog_source/preview/1.21/30/21/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/30/21/tech.mdx",sourceDirName:"changelog_source/preview/1.21/30/21",slug:"/changelog_source/preview/1.21/30/21/tech",permalink:"/en/docs/changelog_source/preview/1.21/30/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/21/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...l.toc,{value:"Blocks",id:"blocks",level:2},{value:"Commands",id:"commands",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"General",id:"general",level:2},{value:"Items",id:"items",level:2},{value:"Loot Tables",id:"loot-tables",level:2},{value:"Structures",id:"structures",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...l.toc,{value:"Graphical",id:"graphical",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Removed deprecated behavior pack download related code from packets in the world join flow"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(l.default,{techSapi:(0,i.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\xa0",(0,i.jsx)(n.code,{children:"minecraft:repeating_command_block"}),"\xa0to not execute when changing to\xa0",(0,i.jsx)(n.code,{children:"needs redstone"}),"\xa0from\xa0",(0,i.jsx)(n.code,{children:"automatic"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Added the 'minecraft",":redstone","_conductivity' component which controls the basic Redstone properties of a custom block"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The /locate structure\xa0command output now displays the identifier of the found structure instead of its name"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Revamped Client Widget System","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refactored the Client Widget system to use components for base widget functionality"}),"\n",(0,i.jsx)(n.li,{children:"Added Editor Client Renderer Helper Service to aid with Editor in-world widget rendering"}),"\n",(0,i.jsx)(n.li,{children:"Changed Gizmo movement to be completely free moving and snap to grid on release"}),"\n",(0,i.jsx)(n.li,{children:"Added new widget components for Entities, Text, Gizmos, Height Guide, and basic Render Primitives"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Additional updates to the PropertyPane API","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Removed IPropertyPane addBlockPicker and addEntityPicker methods in favor of addComboBox API that leverages type safe IObservableProp<string> value","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added interfaces IComboBoxPropertyItem and IComboBoxPropertyItemOptions"}),"\n",(0,i.jsx)(n.li,{children:"Combo box supports different data types for additional validation with\xa0ComboBoxPropertyItemDataType. Entity and Block types work similarly to the old component, Custom type allows user defined list and it's the default"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added an alternative Property Pane\xa0addNumberAPI that leverages type safe\xa0IObservableProp<number>\xa0value API","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added interfaces\xa0INumberPropertyItemand\xa0INumberPropertyItemOptions\xa0for the new property item"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function to create property bag number item to\xa0addNumber_deprecated"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Updated theme colors for input fields, and center aligned number input field values"}),"\n",(0,i.jsxs)(n.li,{children:["Added an alternative Property Pane\xa0addDropdownAPI that leverages type safe\xa0IObservableProp<number>\xa0value","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added interfaces IDropdownPropertyItem, IDropdownPropertyItemOptions and IDropdownPropertyItemEntry for the new property item. Each dropdown entry now supports imageData?: ImageResourceData property to render an image"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function to create property bag number item to\xa0addDropdown_deprecated"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed theming and content alignment issues for the dropdown UI elements"}),"\n",(0,i.jsxs)(n.li,{children:["Added an alternative Property Pane addColorPicker API that leverages type safe IObservableProp<RGBA> value API","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added interfaces\xa0IColorPickerPropertyItemand\xa0IColorPickerPropertyItemOptions\xa0for the new property item"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function to create property bag color picker item to\xa0addColorPicker_deprecated"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added an alternative Property Pane addString API that leverages type safe IObservableProp<string> value API","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added interfaces\xa0IStringPropertyItemand\xa0IStringPropertyItemOptions\xa0for the new property item"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function to create property bag string item to\xa0addString_deprecated"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed missing Summon Tool icon"}),"\n",(0,i.jsxs)(n.li,{children:['Added the following functions to "ExtensionContext.settings.theme": addNewTheme(name: string): void, deleteTheme(name: string): void, getCurrentTheme(): string, and updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void. These functions will throw if "minecraft',":default",'" or any other built-in theme is passed to them. updateThemeColor and deleteTheme will also throw if the theme does not exist']}),"\n",(0,i.jsx)(n.li,{children:"Added block image support to block picker modal"}),"\n",(0,i.jsx)(n.li,{children:"Fixed a bug where typing certain characters in the block or entity picker caused an error"}),"\n",(0,i.jsx)(n.li,{children:"Added validation to prevent adding already existing block in a probability palette item"}),"\n",(0,i.jsxs)(n.li,{children:['Added the following functions to "ExtensionContext.settings.theme": addNewTheme(name: string): void, deleteTheme(name: string): void, getCurrentTheme(): string, and updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void. These functions will throw if "minecraft',":default",'" or any other built-in theme is passed to them. updateThemeColor and deleteTheme will also throw if the theme does not exist.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"entity-components",children:"Entity Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['"behavior.fire_at_target" is no longer restricted to Vanilla content',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This goal allows an entity to attack by firing a shot with a delay"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['"behavior.jump_around_target" is no longer restricted to Vanilla content',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This goal allows an entity to jump over and around a target"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['"behavior.move_around_target" is no longer restricted to Vanilla content',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This goal allows an entity to move around a target"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Exposed the entity offset so the user can change the camera's pivot point from the entity's center for third person boom cameras"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updated Feature Rules documentation"}),"\n",(0,i.jsx)(n.li,{children:"Added GUI Log Level option to the Creator section of settings which changes which level of content logs are displayed on-screen when content logs are enabled"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"items",children:"Items"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adds a content error for if an icon can't be found with\xa0icon_namefrom\xa0minecraft",":icon","\xa0in 1.10 data"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed an issue where item components would not initialize on remote clients ()"}),"\n",(0,i.jsxs)(n.li,{children:['Added "minecraft',":rarity",'" item component which allows specifying the rarity of an item',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['It has a single field "value" which accepts the following values:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"common"'}),"\n",(0,i.jsx)(n.li,{children:'"uncommon"'}),"\n",(0,i.jsx)(n.li,{children:'"rare"'}),"\n",(0,i.jsx)(n.li,{children:'"epic"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['Can also be written as an inlined value like so: "minecraft',":rarity",'": "uncommon"']}),"\n",(0,i.jsxs)(n.li,{children:["The rarity of the item will determine which color it uses for its name","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['If the item has a "minecraft',":hover",'_text_color" component specified, that hover text color will take priority and be used instead of the rarity color']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"loot-tables",children:"Loot Tables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Added "set_potion" item function for loot tables which can set the potion type of compatible items with a potion id',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['It has a single field "id" which accepts the following potion id values:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"water"'}),"\n",(0,i.jsx)(n.li,{children:'"mundane"'}),"\n",(0,i.jsx)(n.li,{children:'"long_mundane"'}),"\n",(0,i.jsx)(n.li,{children:'"thick"'}),"\n",(0,i.jsx)(n.li,{children:'"awkward"'}),"\n",(0,i.jsx)(n.li,{children:'"nightvision"'}),"\n",(0,i.jsx)(n.li,{children:'"long_nightvision"'}),"\n",(0,i.jsx)(n.li,{children:'"invisibility"'}),"\n",(0,i.jsx)(n.li,{children:'"long_invisibility"'}),"\n",(0,i.jsx)(n.li,{children:'"leaping"'}),"\n",(0,i.jsx)(n.li,{children:'"long_leaping"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_leaping"'}),"\n",(0,i.jsx)(n.li,{children:'"fire_resistance"'}),"\n",(0,i.jsx)(n.li,{children:'"long_fire_resistance"'}),"\n",(0,i.jsx)(n.li,{children:'"swiftness"'}),"\n",(0,i.jsx)(n.li,{children:'"long_swiftness"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_swiftness"'}),"\n",(0,i.jsx)(n.li,{children:'"slowness"'}),"\n",(0,i.jsx)(n.li,{children:'"long_slowness"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_slowness"'}),"\n",(0,i.jsx)(n.li,{children:'"water_breathing"'}),"\n",(0,i.jsx)(n.li,{children:'"long_water_breathing"'}),"\n",(0,i.jsx)(n.li,{children:'"healing"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_healing"'}),"\n",(0,i.jsx)(n.li,{children:'"harming"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_harming"'}),"\n",(0,i.jsx)(n.li,{children:'"poison"'}),"\n",(0,i.jsx)(n.li,{children:'"long_poison"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_poison"'}),"\n",(0,i.jsx)(n.li,{children:'"regeneration"'}),"\n",(0,i.jsx)(n.li,{children:'"long_regeneration"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_regeneration"'}),"\n",(0,i.jsx)(n.li,{children:'"strength"'}),"\n",(0,i.jsx)(n.li,{children:'"long_strength"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_strength"'}),"\n",(0,i.jsx)(n.li,{children:'"weakness"'}),"\n",(0,i.jsx)(n.li,{children:'"long_weakness"'}),"\n",(0,i.jsx)(n.li,{children:'"wither"'}),"\n",(0,i.jsx)(n.li,{children:'"turtle_master"'}),"\n",(0,i.jsx)(n.li,{children:'"long_turtle_master"'}),"\n",(0,i.jsx)(n.li,{children:'"strong_turtle_master"'}),"\n",(0,i.jsx)(n.li,{children:'"slow_falling"'}),"\n",(0,i.jsx)(n.li,{children:'"long_slow_falling"'}),"\n",(0,i.jsx)(n.li,{children:'"wind_charged"'}),"\n",(0,i.jsx)(n.li,{children:'"weaving"'}),"\n",(0,i.jsx)(n.li,{children:'"oozing"'}),"\n",(0,i.jsx)(n.li,{children:'"infested"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['The following types of items are compatible with the "set_potion" function:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Potion"}),"\n",(0,i.jsx)(n.li,{children:"Lingering Potion"}),"\n",(0,i.jsx)(n.li,{children:"Splash Potion"}),"\n",(0,i.jsx)(n.li,{children:"Arrow"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"structures",children:"Structures"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed\xa0minecraft",":structure","_blockdebug bounding box rendering when clients initially load server worlds containing one"]}),"\n"]}),"\n",(0,i.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine-1",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside the minecraft',":geometry",' json object and requires geometry format_version 1.21.0 and the "Upcoming Creator Features" toggle',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default values example:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"item_display_transforms": { "gui" : { "translation": [0, 0, 0], "rotation": [30, 225, 0], "scale": [0.625, 0.625, 0.625], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0], "fit_to_frame" : true }, "firstperson_righthand": { "translation": [0, 0, 0], "rotation": [0, 45, 0], "scale": [0.4, 0.4, 0.4], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "firstperson_lefthand": { "translation": [0, 0, 0], "rotation": [0, -135, 0], "scale": [0.4, 0.4, 0.4], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "thirdperson_righthand": { "translation": [0, 2.5, 0], "rotation": [75, 45, 0], "scale": [0.375, 0.375, 0.375], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "thirdperson_lefthand": { "translation": [0, 2.5, 0], "rotation": [75, 45, 0], "scale": [0.375, 0.375, 0.375], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "ground": { "translation": [0, 3.0, 0], "rotation": [0, 0, 0], "scale": [0.25, 0.25, 0.25], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "fixed": { "translation": [0, 0, 0], "rotation": [0, 0, 0], "scale": [0.5, 0.5, 0.5], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] }, "head": { "translation": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1], "rotation_pivot" : [0, 0, 0], "scale_pivot" : [0, 0, 0] } }'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api-1",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(l.default,{techSapi:(0,i.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Fixed a variety of issues on the Mali device family of Android, most notably the "striped shadows" bug, in the Deferred Technical Preview (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-175207",children:"MCPE-175207"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Removed an incorrect offset when interpolating keyframe values for the sun illuminance and sun color. Keyframe values for sun illuminance and sun color are now consistent with other time-based keyframe values. Creators will need to shift any sun illuminance and color keyframes by 0.5. Documentation on the Creator portal has been updated accordingly"}),"\n",(0,i.jsxs)(n.li,{children:['Added the ability to data-drive Sub Surface Scattering via Texture Sets in the Deferred Technical Preview. This effect allows light to penetrate the surface of objects up to a certain amount, similar to wax, leaves or skin. The default sub surface effect previously on leaves has been removed in favor of packs providing their own textures. Creators can use\xa0"metalness_emissive_roughness_subsurface"instead of\xa0"metalness_emissive_roughness"\xa0in their texture set JSONs to activate the effect on specific blocks, mobs, etc... Sub surface values are pulled from the alpha channel of the supplied texture. See updated documentation on the Creator portal for more information',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Note that this new field is only available in texture set JSONs with a format version of\xa0"1.21.30"'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Changed the color grading JSON schema for the Deferred Technical Preview to now require explicit enabling of highlight and shadow specific color grading settings. See updated documentation on the Creator portal for more information"}),"\n",(0,i.jsx)(n.li,{children:"Added highlight and shadow color grading controls to the Editor's Deferred Graphics Settings"}),"\n",(0,i.jsx)(n.li,{children:"Added the ability to data-drive emissive desaturation in the Deferred Technical Preview. See updated documentation on the Creator portal for more information"}),"\n",(0,i.jsx)(n.li,{children:"Added support for enchanted items in the Deferred Technical Preview"}),"\n",(0,i.jsx)(n.li,{children:"Reduced the smudging or \u201cghosting\u201d artifacts that would occur when swinging the item in the player\u2019s hand with Upscaling enabled in the Deferred Technical Preview"}),"\n",(0,i.jsx)(n.li,{children:"Fixed a variety of issues that caused certain objects to not cast shadows from point lights, and modified point light sources such that their geometry can no longer cast shadows in the Deferred Technical Preview"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},73561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.21/30/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PlayerInteractWithBlockBeforeEvent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/30/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/30/21",slug:"/changelog_source/preview/1.21/30/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/30/21/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PlayerInteractWithBlockBeforeEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added property\xa0readonly isFirstEvent: booleanto beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PlayerInteractWithBlockAfterEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded"}),"\n",(0,i.jsx)(n.li,{children:"Added property readonly isFirstEvent: boolean to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button"}),"\n",(0,i.jsx)(n.li,{children:"This after event will no longer always trigger on an empty hand. The interaction with the block needs to be successful for it to trigger the after event"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PlayerInteractWithEntityAfterEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded"}),"\n",(0,i.jsx)(n.li,{children:"Cancelling the before event will now no longer trigger the after event"}),"\n",(0,i.jsx)(n.li,{children:"This event will now only be triggered on a successful interaction"}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.21/30/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/30/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/30/21",slug:"/changelog_source/preview/1.21/30/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/30/21/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},77035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.21/30/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Released @minecraft/server version 1.3.0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/30/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/30/21",slug:"/changelog_source/preview/1.21/30/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/30/21/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={a:"a",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released @minecraft/server version 1.3.0\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Note: This can still change while in Preview"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Added @minecraft/server version 1.4.0-beta"}),"\n",(0,i.jsxs)(n.li,{children:["Fixing isEmoting method on Player (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-180083",children:"MCPE-180083"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Released\xa0playerEmoteWorld after event from Beta to\xa01.14.0"}),"\n",(0,i.jsx)(n.li,{children:"Released class BlockRecordPlayerComponent from beta to 1.14.0"}),"\n",(0,i.jsx)(n.li,{children:"Released UIManagerclass from Beta to 1.3.0"}),"\n",(0,i.jsx)(n.li,{children:"Released EntityQueryPropertyOptions from beta to 1.14.0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Moved EntityStrengthComponent from beta to 1.13.0\xa0"}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.21/30/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/30/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/30/21",slug:"/changelog_source/preview/1.21/30/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/30/21/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453),s=t(18228),o=t(19365);const l={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,i.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,i.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>_});var i=t(96540),r=t(34164),s=t(23104),o=t(56347),l=t(205),a=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==i&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,v.jsx)("div",{className:"w-full",children:a}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function _(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);