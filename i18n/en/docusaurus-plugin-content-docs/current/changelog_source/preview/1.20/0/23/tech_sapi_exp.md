

-   Moving getComponent(componentId: string): EntityComponent | undefined method to 1.2.0
-   Moving getComponents(): EntityComponent\[\] method to 1.2.0
-   Moving hasComponent(componentId: string): boolean method to 1.2.0
-   Moving EntityComponent class to 1.2.0
-   Moving EntityBaseMovementComponent class to 1.2.0:
    -   Moving readonly maxTurn: number property to 1.2.0
    -   Moving the following additional EntityBaseMovementComponent subclasses to 1.2.0:
        -   EntityMovementAmphibiousComponent
        -   EntityMovementBasicComponent
        -   EntityMovementFlyComponent
        -   EntityMovementGenericComponent
        -   EntityMovementHoverComponent
        -   EntityMovementJumpComponent
        -   EntityMovementSkipComponent
-   Renamed EntityIsDyableComponent class to EntityIsDyeableComponent and moved to 1.2.0
-   Moving the following additional EntityComponent subclasses to 1.2.0:
    -   EntityCanClimbComponent
    -   EntityCanFlyComponent
    -   EntityCanPowerJumpComponent
    -   EntityColorComponent
    -   EntityFireImmuneComponent
    -   EntityFloatsInLiquidComponent
    -   EntityFlyingSpeedComponent
    -   EntityFrictionModifierComponent
    -   EntityGroundOffsetComponent
    -   EntityIsBabyComponent
    -   EntityIsChargedComponent
    -   EntityIsChestedComponent
    -   EntityIsHiddenWhenInvisibleComponent
    -   EntityIsIgnitedComponent
    -   EntityIsIllagerCaptainComponent
    -   EntityIsSaddledComponent
    -   EntityIsShakingComponent
    -   EntityIsShearedComponent
    -   EntityIsStackableComponent
    -   EntityIsStunnedComponent
    -   EntityIsTamedComponent
    -   EntityMarkVariantComponent
    -   EntityPushThroughComponent
    -   EntityScaleComponent
    -   EntitySkinIdComponent
    -   EntityVariantComponent
    -   EntityWantsJockeyComponent
-   Added class EffectTypes
    -   Added function get(identifier: string): EffectType - Returns the effect type if it exists
    -   Added function getAll(): EffectType\[\] - Returns all of the effects
-   Updated class Effect
    -   Updated duration property. Is the duration of the effect in ticks
    -   Added property typeId. Returns the effect’s type id
-   Added interface EntityEffectOptions \{ amplifier?: number, showParticles?: boolean \}
    -   Added function removeEffect(effectType: EffectType | string): boolean - Removes an effect from an Entity. Returns false if the effect is not found or does not exist
    -   Updated function getEffect(effectType: EffectType | string): Effect | undefined - Gets the effect if it exists on the entity. Otherwise returns undefined
    -   Updated function addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): boolean - Adds an effect to the Entity. Returns false if the effect cannot be added ( the effect does not exist, the duration is negative)
-   Items using the minimum duration for the “minecraft:fuel” component now work in the Blast Furnace and Smoker

