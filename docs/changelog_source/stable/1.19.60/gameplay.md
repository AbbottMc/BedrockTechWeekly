## **Vanilla Parity:**

### **Mobs**

- Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem, and Wither mobs, which can be obtained using commands
- Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg
- Vex hitboxes are now vertically centered with their models
- Vex and Allay now sit properly in Boats and Minecarts ([MCPE-164441](https://bugs.mojang.com/browse/MCPE-164441))
- Fixed Vex texture disparity between Bedrock and Java ([MCPE-164227](https://bugs.mojang.com/browse/MCPE-164227))
- Slimes and Magma Cubes no longer spawn in spaces that are 2 blocks tall or less ([MCPE-46540](https://bugs.mojang.com/browse/MCPE-46540))
- Glow Squid now emit particles when spawned outside of water
- Using a Saddle on a tamed Horse, Donkey, or Mule now results in it being equipped ([MCPE-83815](https://bugs.mojang.com/browse/MCPE-83815))
- Using Horse Armor on an unarmored, tamed Horse now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
- Using a Carpet on a tamed Llama now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
- Dispensers can now equip Saddles and Horse Armors to tamed Horses
- Dispensers can now equip Saddles and Chests to tamed Mules and Donkeys
- Dispensers can now equip Carpets and Chests to tamed Llamas
- Dispensers can now equip Saddles to Pigs and Striders
- Shears in a Dispenser now only shear one Sheep at a time
- Shears in a Dispenser can now shear Snow Golems and Mooshrooms
- The Wandering Trader no longer has a chance to offer duplicate Seed trades ([MCPE-161780](https://bugs.mojang.com/browse/MCPE-161780))
- Endermen, Skeletons, and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below) in the Nether ([MCPE-163701](https://bugs.mojang.com/browse/MCPE-163701))
- Updated the Skeleton/Zombie Horse's and Donkey/Mule's saddle and chest textures
- Villagers will now ensure that rain can pass through the block above them before launching Fireworks when celebrating after a raid victory ([MCPE-152386](https://bugs.mojang.com/browse/MCPE-152386))
- Axolotls no longer tick their dry out timer when unloaded ([MCPE-131041](https://bugs.mojang.com/browse/MCPE-131041))
- Husks can now fit in a two blocks high space and baby Husks in a one-high space ([MCPE-105369](https://bugs.mojang.com/browse/MCPE-105369))
- All mobs are now able to path through Wither Roses ([MCPE-159212](https://bugs.mojang.com/browse/MCPE-159212))

### **Blocks**

- Crimson and Warped block sets now have a unique set of sounds

- Campfires do not set players and mobs on fire anymore, but still inflict damage ([MCPE-98931)](https://bugs.mojang.com/browse/MCPE-98931)

- Campfires do not destroy Minecarts and Boats anymore ([MCPE-109489](https://bugs.mojang.com/browse/MCPE-109489))

- Bamboo plant placement now behaves the same way as Java Edition; it will no longer grow by clicking on the side of a Bamboo plant with a Bamboo item in-hand ([MCPE-99587](https://bugs.mojang.com/browse/MCPE-99587))

- Bamboo sapling no longer replaces double plants when placed ([MCPE-99806](https://bugs.mojang.com/browse/MCPE-99806))

- Pumpkins and Melons can now grow on Mycelium and Moss blocks ([MCPE-125932](https://bugs.mojang.com/browse/MCPE-125932))

- The Sculk Shrieker block's shriek sound can now be heard at the longer distance of 32 blocks ([MCPE-163989](https://bugs.mojang.com/browse/MCPE-163989))

- Respawn Anchor no longer retains its charges if mined with Silk Touch or picked ([MCPE-145682](https://bugs.mojang.com/browse/MCPE-145682))

- Beacon effect particles are now transparent ([MCPE-17679](https://bugs.mojang.com/browse/MCPE-17679))

- Conduit effect particles are now transparent ([MCPE-93728](https://bugs.mojang.com/browse/MCPE-93728))

- Redstone Dust now emits a sound when placed on the ground ([MCPE-65423](https://bugs.mojang.com/browse/MCPE-65423))

- Wooden Doors, Iron Doors, Wooden Trapdoors, Iron Trapdoors and Fence Gates now use the same opening and closing sounds as Java Edition

- Updated Pressure Plates to have different sound pitches based on their behaviour to match Java Edition

- Added a unique click sound for Wooden Buttons to match Java Edition

- Changed Frogspawn map color to match Java Edition ([MCPE-159715](https://bugs.mojang.com/browse/MCPE-159715))

- Change Bed block map colors to match Java Edition ([MCPE-40709](https://bugs.mojang.com/browse/MCPE-40709))

- Changed various blocks’ Map colors to appear correctly match Java Edition ([MCPE-19228](https://bugs.mojang.com/browse/MCPE-19228))

  

## **Experimental Features:**

- In addition to experimental features added in [19.50](https://feedback.minecraft.net/hc/en-us/articles/10833168748557-Minecraft-1-19-50-Bedrock-), several new experimental features are now playable from the upcoming 1.20 update!
- Enable the “Next Major Update” toggle in world settings to enable this content
- These features are a work in progress and are still in active development. The design and functionality of these features will likely change before they’re released
- **Please remember:** Worlds that have used experimental toggles will always be flagged as “Experimental”. We recommend keeping these experimental worlds as separate copies from your main saves. More information can be found in [this article](https://feedback.minecraft.net/hc/en-us/articles/4403610710797)

### **Mob Heads on Note Blocks**

- When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone!

### **Piglin Mob Head**

- Piglins will now drop their heads when killed by a charged Creeper!
- Placing the Piglin Head on a Note Block will play one of the Piglin's ambient sounds
- The Piglin Head will flap its ears when powered by Redstone on worn by a player!

### **Bamboo**

- Added Block of Bamboo, which can be crafted from 9 Bamboo

- Added Stripped Block of Bamboo, which can be obtained by using an Axe on a Block of Bamboo

- Both Block of Bamboo and Stripped Block of Bamboo can be crafted into 2 Bamboo Planks

  

## **Fixes:**

### **Stability and Performance**

- Fixed a potential crash when gliding through an End Gateway
- The game no longer crashes when killing an entity with invalid conditions, functions, or pools entries in its loot table ([MCPE-164623](https://bugs.mojang.com/browse/MCPE-164623))
- Fixed multiple crashes that could occur when players died while affected with Withering
- Fixed a crash on Xbox when the Edit World Button on the Select World Screen had quick successive selections
- Fixed a bug that caused players to desync from multiplayer games if they saved and quit after dying and rejoining a game ([MCPE-162630](https://bugs.mojang.com/browse/MCPE-162630))

### **Gameplay**

- Fixed a bug causing players’ hitboxes and nameplates to be unaligned when rejoining a world after dying and returning to menu without respawning ([MCPE-162630](https://bugs.mojang.com/browse/MCPE-162630))
- Raids now trigger properly when the player with bad omen enters a village while riding/gliding ([MCPE-152774](https://bugs.mojang.com/browse/MCPE-152774))
- Fixed an issue where players could fall out of moving blocks when pushed upwards ([MCPE-163725](https://bugs.mojang.com/browse/MCPE-163725))
- Fixed an issue where night was being incorrectly skipped if the last player in a game was in the Nether or End
- A player entering the Nether or End will now trigger a night skip if all players left in Overworld are sleeping
- Fixed a bug where dropping an item and sleeping at the same time would cause the server to hang ([MCPE-162989](https://bugs.mojang.com/browse/MCPE-162989))
- Orbs spawned within the same block will merge and combine XP values until orb limit is reached

### **Mobs**

- Entities no longer disappear when sent through End Gateways ([MCPE-164985](https://bugs.mojang.com/browse/MCPE-164985))
- Ravagers are now able to attack when standing on various partial blocks like Mud ([MCPE-162483](https://bugs.mojang.com/browse/MCPE-162483))
- Vex now use a separate charging animation when empty-handed ([MCPE-164490](https://bugs.mojang.com/browse/MCPE-164490))
- Vex now render offhand items
- Fixed the Vex being incorrectly lit in dark surroundings
- Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space
- Villagers will now take damage from lightning bolts on Peaceful difficulty, like other mobs
- Tropical Fish no longer use surface density limit when spawning underground ([MCPE-157485](https://bugs.mojang.com/browse/MCPE-157485))
- Evokers now play a ‘sit’ animation when riding a mount or vehicle ([MCPE-43778](https://bugs.mojang.com/browse/MCPE-43778))

### **Blocks**

- Entities no longer get pushed out by Doors activated by Redstone signals ([MCPE-158971](https://bugs.mojang.com/browse/MCPE-158971))
- Using the Pick Block functionality on Fern and Grass now selects the correct item in the inventory instead of the first one between them
- Using the Pick Block functionality on Acacia Leaves and Dark Oak Leaves now selects the correct item in the inventory instead of the first one between them
- Hoppers no longer fail to collect items when trying to pull in multiple item types ([MCPE-38963](https://bugs.mojang.com/browse/MCPE-38963))
- Prevent Pistons from re-creating moving blocks that were destroyed mid-move
- Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air ([MCPE-159713](https://bugs.mojang.com/browse/MCPE-159713))
- Scaffolding now displays particles and produces vibrations when the block under it is destroyed ([MCPE-163738](https://bugs.mojang.com/browse/MCPE-163738))
- Stone Walls are now placed correctly in a line when continuously placing them
- Levers now produce the same sound effect as Stone Buttons ([MCPE-163335](https://bugs.mojang.com/browse/MCPE-163335))

### **Items**

- Fixed item degradation when rapidly attacking mobs ([MCPE-157150](https://bugs.mojang.com/browse/MCPE-157150))
- Fixed an issue that prevented some Tripwire Hooks from being valid trades when trading with a Fletcher Villager ([MCPE-108195](https://bugs.mojang.com/browse/MCPE-108195))
- Ender Pearls will no longer teleport a sleeping player ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))

### **Touch Controls**

- Fixed a bug that prevented items from moving indirectly between Creative Mode inventory and players' extended inventory in Pocket UI ([MCPE-164479](https://bugs.mojang.com/browse/MCPE-164479))
- Fixed a problem where the touch d-pad's forward button was not functional when holding the strafe left/right button ([MCPE-155199](https://bugs.mojang.com/browse/MCPE-155199))
- The inventory tab will now reset its hover state if the player uses a second input method and hover on another tab
- Fixed a bug where players couldn’t interact with toast notifications in Joystick and Crosshair touch controls
- The pressing direction of the build button in touch controls will now be visually clicked down instead of up when being pressed ([MCPE-162026](https://bugs.mojang.com/browse/MCPE-162026))
- Fixed an issue where players could not remove items by clicking on the inventory items in Classic profile ([MCPE-162124](https://bugs.mojang.com/browse/MCPE-162124))
- The touch focus circle has been reactivated with the new touch controls (not in Crosshair mode)
- Resolved an issue that pressing the inventory button could interact with the world instead of opening the inventory on some devices ([MCPE-154499](https://bugs.mojang.com/browse/MCPE-154499))
- Fixed an issue that players couldn’t scroll the inventory screen when one row was appearing off-screen ([MCPE-159870](https://bugs.mojang.com/browse/MCPE-159870))
- Added several levels of intervals for repeat crafting when holding on the crafted items
- Removed the camera movement delay when the player swiped from the attack and build buttons in crosshair mode
- Fixed inventory screen touch interactions not working properly on Nintendo Switch
- The correct tip for dismounting Boats and Minecarts now appears when not using classic touch controls
- Toast notifications can now be swiped away on touch devices in-game
- Touch Control settings section is no longer visible on Xbox

### **Graphical**

- Highlight selection no longer highlights the entire card for transparent objects like saplings
- V-sync settings are now properly configured in options (non-ARM devices) ([MCPE-110006](https://bugs.mojang.com/browse/MCPE-110006))

### **Accessibility**

- The new Create New World screen is now available for text to speech users. We'd be happy to receive your feedback on it here: [aka.ms/cnwnarration](https://aka.ms/cnwnarration)
- Fixed text to speech enumeration for world on the Play screen, select language in settings screen, select controls in settings screen, and friends in invite friends screen when there are a large number of items in the list

### **User Interface**

- Fixed a bug where the mouse cursor was visible and is no longer usable to control the player camera on the HUD screen after exiting the menu screen with a touch while moving the mouse around
- Fixed text being slightly off-centered to the left for Furnace, Blast Furnace, and Smoker screens ([MCPE-151597](https://bugs.mojang.com/browse/MCPE-151597))
- Feedback button on the main menu will now prompt the player with a modal before redirecting to their web browser
- Fixed an issue where text fields would not regain focus after being deselected with a gamepad ([MCPE-153842](https://bugs.mojang.com/browse/MCPE-153842))
- Text fields are no longer deselected with second click on them once they are selected
- Fixed an issue where user interface elements on the Achievements screen and the new Create New World screen didn't properly trigger sound effects ([MCPE-163722](https://bugs.mojang.com/browse/MCPE-163722))
- Added a missing error screen that displays when attempting to create a world with too little available disk space
- Fixed the quality of the Mojang Studios logo loading screen on Xbox ([MCPE-163036](https://bugs.mojang.com/browse/MCPE-163036))
- Removed extra space around the "open chat" message that appears when entering a world ([MCPE-162700](https://bugs.mojang.com/browse/MCPE-162700))
- Fixed an issue that caused the Wandering Trader's trade window to show a profession ([MCPE-162576](https://bugs.mojang.com/browse/MCPE-162576))
- Resource packs will now be applied to the world after navigating to another screen before creation
- Fixed an issue where some resource packs prompted an error after being downloaded

### **Android**

- The screen will no longer automatically turn off while a world is loaded when playing on Android devices
- Updated splash screen to be consistent between Android 12+ devices and older devices ([MCPE-151413](https://bugs.mojang.com/browse/MCPE-151413))
- Fixed controller input sometimes getting stuck when a controller was disconnected on Android devices
- The UI no longer flickers on Android when the on-screen keyboard appears ([MCPE-142356](https://bugs.mojang.com/browse/MCPE-142356))

### **Realms**

- New Realm button on the two player Realm info screen now activates correctly
- Added a highlight to Realms terms and agreements checkbox when the UI is hovered
- Redirect players back to the world selection screen if they choose to leave on the Download Resource Packs prompt
- Fixed a bug where the option "Require players to accept resource packs to join" did not reflect the actual state ([REALMS-10799](https://bugs.mojang.com/browse/REALMS-10799))
- Fixed erroneously showing previously applied packs on Realms settings screen after a Realm reset
- Updated error message for failing to join an owned Realms server that is out of date. New messaging now describes the issue and provides steps to resolve issue