// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-editor",
 *   "version": "0.1.0-beta.1.21.0-preview.24"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
/**
 * The types of actions that are supported. This type
 * corresponds to the expected arguments passed by the
 * onExecute handler of an action.
 */
export declare enum ActionTypes {
    MouseRayCastAction = 'MouseRayCastAction',
    NoArgsAction = 'NoArgsAction',
}

export enum BlockPaletteItemType {
    Simple = 0,
    Probability = 1,
}

/**
 * Predefined top level menus for core editor
 */
export declare enum CoreMenuType {
    Edit = 'editor:menu:edit',
    Experimental = 'editor:menu:experimental',
    Extensions = 'editor:menu:extensions',
    File = 'editor:menu:file',
    Help = 'editor:menu:help',
    View = 'editor:menu:view',
    WorldOptions = 'editor:menu:worldOptions',
}

/**
 * An enumeration used by the 3D block cursor {@link Cursor}
 */
export enum CursorControlMode {
    /**
     * @remarks
     * Using Keyboard mode will remove the dependence of the 3D
     * block cursor on the player mouse position.  The 3D block
     * cursor can be positioned using the keyboard (or the Cursor
     * move methods on the cursor object) and the position will not
     * be reset if the mouse is moved
     *
     */
    Keyboard = 0,
    /**
     * @remarks
     * The Mouse movement mode will disable keyboard or manual 3D
     * block cursor movement and make the 3D block cursor only
     * react to player mouse movement
     *
     */
    Mouse = 1,
    /**
     * @remarks
     * This is generally the default move mode for the 3D block
     * cursor.
     * The 3D block cursor can be positioned using the keyboard (or
     * the Cursor move methods on the cursor object) but the
     * position will be reset to the block location under the
     * players mouse position if any mouse movement is detected.
     *
     */
    KeyboardAndMouse = 2,
    /**
     * @remarks
     * When in fixed mode, the 3D block cursor will remain in a
     * fixed position directly in front of the players facing
     * direction.  It cannot be moved without moving the player (or
     * adjusting the fixed block distance).
     * This mode is useful for addressing block locations in the
     * air (put the cursor into fixed mode, and fly the player
     * until the desired air block is beneath the cursor, at which
     * point it is selectable without being clickable)
     *
     */
    Fixed = 3,
}

/**
 * Describes how the cursor targets a point on the screen.
 */
export enum CursorTargetMode {
    /**
     * @remarks
     * Target a nearest block.
     *
     */
    Block = 0,
    /**
     * @remarks
     * Targets the face of a nearest block.
     *
     */
    Face = 1,
}

/**
 * Type of item that can be added to the property pane
 */
export declare enum EDITOR_PANE_PROPERTY_ITEM_TYPE {
    Action = 'editorUI:Action',
    BlockPicker = 'editorUI:BlockPicker',
    Boolean = 'editorUI:Boolean',
    Divider = 'editorUI:Divider',
    Dropdown = 'editorUI:Dropdown',
    Image = 'editorUI:Image',
    Number = 'editorUI:Number',
    String = 'editorUI:String',
    SubPane = 'editorUI:SubPane',
    Table = 'editorUI:Table',
    Text = 'editorUI:Text',
    Vec3 = 'editorUI:Vec3',
}

/**
 * Global editor input contexts
 */
export declare enum EditorInputContext {
    GlobalEditor = 'global.editor',
    GlobalToolMode = 'global.toolMode',
    Viewport = 'local.toolMode.viewport',
}

/**
 * Enumeration representing the different modes Editor can be
 * in.
 */
export enum EditorMode {
    /**
     * @remarks
     * Mode for single-block editing.
     *
     */
    Crosshair = 'Crosshair',
    /**
     * @remarks
     * Mode for multi-block editing UI and tools.
     *
     */
    Tool = 'Tool',
}

export declare enum EditorStatusBarAlignment {
    Right = 0,
    Left = 1,
}

export enum ExportResult {
    ValidWorldExport = 0,
    LevelFetchFailed = 1,
    FileArchiverFetchFailed = 2,
    ProjectConverterFetchFailed = 3,
    PlayerNotFound = 4,
    WorldExportFailed = 5,
    WorldExportBusy = 6,
    EditorSystemFailure = 7,
}

/**
 * Enumeration representing identifiers for graphics settings
 * properties.
 */
export enum GraphicsSettingsProperty {
    /**
     * @remarks
     * Manages rendering of invisible blocks (e.g., barrier, light,
     * structure_void).
     *
     */
    ShowInvisibleBlocks = 'ShowInvisibleBlocks',
}

/**
 * Input modifier flags to create chorded bindings
 */
export declare enum InputModifier {
    Unused = 0,
    None = 1,
    Alt = 2,
    Control = 4,
    Shift = 8,
    Any = 15,
}

/**
 * Keyboard key
 */
export declare enum KeyboardKey {
    BACKSPACE = 8,
    TAB = 9,
    ENTER = 13,
    SHIFT = 16,
    CTRL = 17,
    ALT = 18,
    CAPS_LOCK = 20,
    ESCAPE = 27,
    SPACE = 32,
    PAGE_UP = 33,
    PAGE_DOWN = 34,
    END = 35,
    HOME = 36,
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    PRINT_SCREEN = 44,
    INSERT = 45,
    DELETE = 46,
    KEY_0 = 48,
    KEY_1 = 49,
    KEY_2 = 50,
    KEY_3 = 51,
    KEY_4 = 52,
    KEY_5 = 53,
    KEY_6 = 54,
    KEY_7 = 55,
    KEY_8 = 56,
    KEY_9 = 57,
    KEY_A = 65,
    KEY_B = 66,
    KEY_C = 67,
    KEY_D = 68,
    KEY_E = 69,
    KEY_F = 70,
    KEY_G = 71,
    KEY_H = 72,
    KEY_I = 73,
    KEY_J = 74,
    KEY_K = 75,
    KEY_L = 76,
    KEY_M = 77,
    KEY_N = 78,
    KEY_O = 79,
    KEY_P = 80,
    KEY_Q = 81,
    KEY_R = 82,
    KEY_S = 83,
    KEY_T = 84,
    KEY_U = 85,
    KEY_V = 86,
    KEY_W = 87,
    KEY_X = 88,
    KEY_Y = 89,
    KEY_Z = 90,
    NUMPAD_0 = 96,
    NUMPAD_1 = 97,
    NUMPAD_2 = 98,
    NUMPAD_3 = 99,
    NUMPAD_4 = 100,
    NUMPAD_5 = 101,
    NUMPAD_6 = 102,
    NUMPAD_7 = 103,
    NUMPAD_8 = 104,
    NUMPAD_9 = 105,
    NUMPAD_MULTIPLY = 106,
    NUMPAD_ADD = 107,
    NUMPAD_SEPARATOR = 108,
    NUMPAD_SUBTRACT = 109,
    NUMPAD_DECIMAL = 110,
    NUMPAD_DIVIDE = 111,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,
    COMMA = 188,
    PERIOD = 190,
    SLASH = 191,
    BACK_QUOTE = 192,
    BRACKET_OPEN = 219,
    BACK_SLASH = 220,
    BRACKET_CLOSE = 221,
    QUOTE = 222,
}

/**
 * Keyboard Key Actions
 */
export declare enum KeyInputType {
    /**
     * @remarks
     * Button was pressed.
     *
     */
    Press = 1,
    /**
     * @remarks
     * Button was released.
     *
     */
    Release = 2,
}

/**
 * Layout directions for property panes.
 */
export declare enum LayoutDirection {
    Vertical = 0,
    Horizontal = 1,
}

/**
 * Mouse device action categories
 */
export declare enum MouseActionCategory {
    /**
     * @remarks
     * Mouse button was used.
     *
     */
    Button = 1,
    /**
     * @remarks
     * Mouse wheel was used.
     *
     */
    Wheel = 2,
    /**
     * @remarks
     * Mouse was dragged.
     *
     */
    Drag = 3,
}

/**
 * Detailed mouse device actions
 */
export declare enum MouseActionType {
    LeftButton = 1,
    MiddleButton = 2,
    RightButton = 3,
    Wheel = 4,
}

/**
 * Input event information about mouse actions
 */
export declare enum MouseInputType {
    ButtonDown = 1,
    ButtonUp = 2,
    WheelIn = 3,
    WheelOut = 4,
    DragStart = 5,
    Drag = 6,
    DragEnd = 7,
}

export enum PlaytestSessionResult {
    OK = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound = 2,
    TooManyPlayers = 3,
    WorldExportFailed = 4,
    WorldExportBusy = 5,
    UnsupportedScenario = 6,
    EditorSystemFailure = 7,
    InvalidLevelId = 8,
    PlayerNotFound = 9,
    ResponseTimeout = 10,
    UnspecifiedError = 11,
}

export enum ProjectExportType {
    PlayableWorld = 0,
    ProjectBackup = 1,
    WorldTemplate = 2,
}

/**
 * Define the visibility of the status bar item If the tool
 * does not have an `ISimpleToolPropertyPane` component, then
 * this option is ignored
 */
export declare enum SimpleToolStatusBarVisibility {
    AlwaysVisible = 0,
    VisibleWhenActive = 1,
}

export enum WidgetGroupSelectionMode {
    Multiple = 'Multiple',
    None = 'None',
    Single = 'Single',
}

/**
 * Defines type information for graphics settings properties.
 */
export type GraphicsSettingsPropertyTypeMap = {
    [GraphicsSettingsProperty.ShowInvisibleBlocks]?: boolean;
};

/**
 * Full set of all possible raw actions
 */
export type Action = NoArgsAction | MouseRayCastAction;

/**
 * All actions have a unique identifier. Identifiers are
 * globally unique and often GUIDs
 */
export type ActionID = {
    id: string;
};

/**
 * Callback type when an extension instance is activated for a
 * given player. It is expected to return an array of
 * disposables that will automatically be cleaned up on
 * shutdown.
 */
export type ActivationFunctionType<PerPlayerStorageType> = (
    uiSession: IPlayerUISession<PerPlayerStorageType>,
) => IDisposable[];

/**
 * The possible variants of a button.
 */
export declare type ButtonVariant = 'secondary' | 'primary' | 'destructive' | 'hero';

/**
 * A generic handler for an event sink.
 */
export declare type EventHandler<T> = (eventArg: T) => void;

/**
 * A property item which supports bound actions and replacing
 * the bound action
 */
export type IActionPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    replaceBoundAction(action: RegisteredAction<NoArgsAction> | undefined): void;
};

/**
 * A property item which supports Dropdown properties
 */
export type IDropdownPropertyItem<
    T extends Omit<PropertyBag, Prop> & {
        [key in Prop]: number;
    },
    Prop extends keyof T & string,
> = IPropertyItem<T, Prop> & IDropdownPropertyItemMixIn;

/**
 * The IPlayerUISession represents the editor user interface
 * for a given player and given extension. Extensions
 * registered with Minecraft are instantiated for each player
 * which joins a server, and this interface provides the set of
 * functionality needed to create and modify the editor UI for
 * that player. The associated Editor Context for this session
 * object is also player specific. From a given
 * IPlayerUISession object, there is no way to interact with
 * the UI of another player, that must be done from global
 * extension scope registration and/or data sharing independent
 * of the UI object.
 */
export type IPlayerUISession<PerPlayerStorage = Record<string, never>> = {
    createStatusBarItem(alignment: EditorStatusBarAlignment, size: number): IStatusBarItem;
    createPropertyPane(options: IPropertyPaneOptions): IPropertyPane;
    readonly actionManager: ActionManager;
    readonly inputManager: IGlobalInputManager;
    readonly menuBar: IMenuContainer;
    readonly toolRail: IModalToolContainer;
    readonly log: IPlayerLogger;
    readonly extensionContext: ExtensionContext;
    readonly builtInUIManager: BuiltInUIManager;
    readonly eventSubscriptionCache: BedrockEventSubscriptionCache;
    scratchStorage: PerPlayerStorage | undefined;
};

/**
 * A property item which supports Table properties
 */
export type ITablePropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateCell(dataCell: IPropertyTableCellItem, row: number, column: number): void;
    updateRow(dataRow: IPropertyTableCellItem[], row: number): void;
    updateTable(newData: IPropertyTableCellItem[][]): void;
};

/**
 * A property item which supports Vector3 properties
 */
export type IVector3PropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
};

/**
 * Modal tool lifecycle event payload
 */
export type ModalToolLifecycleEventPayload = {
    isActiveTool: boolean;
};

/**
 * Input modifier states for mouse actions
 */
export declare type MouseModifiers = {
    alt: boolean;
    ctrl: boolean;
    shift: boolean;
};

/**
 * Mouse properties that provide additional information from
 * client event handling
 */
export declare type MouseProps = {
    mouseAction: MouseActionType;
    modifiers: MouseModifiers;
    inputType: MouseInputType;
};

/**
 * An action which returns the ray corresponding to a vector
 * from the users mouse click in the viewport.
 */
export type MouseRayCastAction = {
    actionType: ActionTypes.MouseRayCastAction;
    readonly onExecute: (mouseRay: Ray, mouseProps: MouseProps) => void;
};

/**
 * An action which needs no additional client side arguments on
 * execute
 */
export type NoArgsAction = {
    actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};

/**
 * Callback to execute when a value of a property item is
 * updated.
 */
export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (
    obj: T,
    property: Prop,
    oldValue: object,
    newValue: object,
) => void;

export type PropertyBag = Record<string, unknown>;

/**
 * Callback to execute when a visibility of a property pane is
 * updated.
 */
export type PropertyPaneVisibilityUpdate = {
    isVisible: boolean;
};

/**
 * Ray representing a direction from a set location. This
 * location typically corresponds to the location of a mouse
 * click performed on the client.
 */
export type Ray = {
    location: minecraftserver.Vector3;
    direction: minecraftserver.Vector3;
    cursorBlockLocation: minecraftserver.Vector3;
    rayHit: boolean;
};

/**
 * A registered action is an action that has been registered
 * with the action manager system and has a unique ID
 * representing the action now. An action must be registered
 * before it can be used in other systems.
 */
export type RegisteredAction<T extends Action> = T & ActionID;

/**
 * Callback type when an extension instance is shutdown for a
 * given player. Used for performing any final work or clean up
 * that can't be handled automatically via Disposables.
 */
export type ShutdownFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => void;

/**
 * Full set of all possible keyboard actions
 */
export type SupportedKeyboardActionTypes = RegisteredAction<NoArgsAction>;

/**
 * Full set of all possible mouse actions
 */
export type SupportedMouseActionTypes = RegisteredAction<MouseRayCastAction>;

export type UnregisterInputBindingCallback = () => void;

/**
 * A cache for bedrock event subscriptions. Stores off a
 * subscription by event key, and upon teardown unregisters all
 * subscriptions.
 */
export declare class BedrockEventSubscriptionCache {
    /**
     * @remarks
     * Constructs a new instance of the
     * `BedrockEventSubscriptionCache` class
     *
     */
    constructor(mEvents: minecraftserver.WorldAfterEvents);
    /**
     * @remarks
     * Subcribes to a bedrock event using the key of the desired
     * event. When subscribed, the event handler is both returned,
     * but also cached internally for unsubscription. This means
     * the caller of the subscription does not need to worry about
     * unsubscription since the cache will automatically
     * unsubscribe handlers on overall teardown.
     *
     * @param event
     * The event on the bedrock APIs to which to subscribe
     * @param params
     * The parameters to the subscription method for the event.
     * Auto complete will display this for you
     */
    subscribeToBedrockEvent<T extends keyof minecraftserver.WorldAfterEvents>(
        event: T,
        ...params: Parameters<minecraftserver.WorldAfterEvents[T]['subscribe']>
    ): ReturnType<minecraftserver.WorldAfterEvents[T]['subscribe']>;
    /**
     * @remarks
     * Cleans up the set of internal registrations and
     * subscriptions.
     *
     */
    teardown(): void;
}

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    removeItems(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setSelectedBlockType(block: minecraftserver.BlockType): void;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeNames: string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    activateBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerBrushShape(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUIElements: () => SettingsUIElement[],
    ): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
}

/**
 * A ClipboardItem is a handle to an object which represents a
 * set of blocks in a contained bounding area (most likely
 * copied from the world)
 */
export class ClipboardItem {
    private constructor();
    /**
     * @remarks
     * Return whether there is any block content in the item
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Clear the contents of the item
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Create a {@link @minecraft/server.CompoundBlockVolume}
     * container which represents the occupied block volumes within
     * the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link @minecraft/server.CompoundBlockVolume} which
     * represents the occupied block volumes within the
     * ClipboardItem as they would be written to the world with the
     * specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * Create a {@link Selection} container which represents the
     * occupied block volumes within the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link Selection} which represents the occupied block
     * volumes within the ClipboardItem as they would be written to
     * the world with the specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    /**
     * @remarks
     * Get the bounding size of the ClipboardItem
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSize(): minecraftserver.Vector3;
    /**
     * @remarks
     * Copy the contents of the area represented by a {@link
     * Selection} volume into the ClipboardItem
     *
     * This function can't be called in read-only mode.
     *
     * @param selection
     * A volume which represents the area to be copied
     * @throws This function can throw errors.
     */
    readFromSelection(selection: Selection): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     *
     * This function can't be called in read-only mode.
     *
     * @param from
     * The world location of one corner of a bounding volume
     * @param to
     * The world location of the opposite corner of a bounding
     * volume
     * @throws This function can throw errors.
     */
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The root point of the world location to which the
     * ClipboardItem is written (this is modified by the various
     * anchor, offset and rotation parameters of the {@link
     * ClipboardWriteOptions}
     * @param options
     * An optional set of write parameters which modify the
     * properties of the ClipboardItem as it is applied to the
     * world
     * @returns
     * Success or Failure
     * @throws This function can throw errors.
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

/**
 * The ClipboardManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link ClipboardItem} objects, and provides the user the
 * ability to create new {@link ClipboardItem} objects for use
 * within an extension.
 *
 */
export class ClipboardManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link ClipboardItem} object is always present
     * (even if it's empty) and cannot be deleted.  This object
     * represents the main ClipboardItem object which is always
     * accessible through the UI for cut/paste operations
     *
     * @throws This property can throw when used.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @remarks
     * Create a new  {@link ClipboardItem} object
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

/**
 * The 3D block cursor is controlled through this read only
 * object and provides the Editor some control over the input
 * methods, display properties and positioning of the 3D block
 * cursor within the world.
 * The 3D block cursor is a native object which is constantly
 * calculating a screen/mouse -> world raycast, and recording
 * the resultant block collision position and facing direction.
 * Depending on the properties of the cursor state, this is not
 * always true – the cursor can also be manually manipulated by
 * keyboard input and moved around independently of mouse
 * movement; when the mouse is moved, the block cursor will
 * return to the mouse/world ray intersection point.
 * The cursor can also be set to either block or face mode;
 * block mode represents the block the mouse is pointing at,
 * and face mode represents the adjacent block that the mouse
 * is pointing at (i.e. the block attached to the face of the
 * intersection point).
 * In practical use, each tool when activated grabs the current
 * cursor state object and stores it.  The active tool then
 * sets the current state to represent the functionality of the
 * tool (color, input mode, etc).  When the tool loses focus,
 * it restores the cursor state using the stored state object
 * that was grabbed during activation.
 * The 3D block cursor can also be used to query the current
 * block at which the mouse is pointing (or the current block
 * to which the cursor has been manually moved by the user)
 */
export class Cursor {
    private constructor();
    /**
     * @remarks
     * The face at of the block beneath the 3D block cursor which
     * is intersected by the mouse raycast
     *
     * @throws This property can throw when used.
     */
    readonly faceDirection: number;
    /**
     * @remarks
     * Query whether or not the 3D block cursor is visible or
     * hidden
     *
     * @throws This property can throw when used.
     */
    readonly isVisible: boolean;
    /**
     * @remarks
     * Get the world position of the 3D block cursor
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @remarks
     * Get a property object which represents the current
     * properties of the 3D block cursor.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks
     * Hide the 3D block cursor from view until the corresponding
     * {@link @minecraft-server-editor.Cursor.show} function is
     * called
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks
     * Manually offset the 3D block cursor by given amount.
     * Depending on the {@link
     * @minecraft-server-editor.CursorProperties.CursorControlMode}
     * - this function may have no effect
     *
     * This function can't be called in read-only mode.
     *
     * @param offset
     * Amount by which the 3D block cursor should be moved
     * @returns
     * Return the newly modified position (or previous position if
     * movement was restricted)
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Reset the 3D block cursor to the system default state
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks
     * Set the 3D block cursor properties to a given state
     *
     * This function can't be called in read-only mode.
     *
     * @param properties
     * A set of optional parameters within a property state which
     * represent the intended 3D block cursor state
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks
     * Make the 3D block cursor visible on screen
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: CursorPropertiesChangeAfterEvent) => void,
    ): (arg: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomWidget extends Widget {
    private constructor();
    readonly location: minecraftserver.Vector3;
    readonly rotation: minecraftserver.Vector2;
    readonly showTextOnlyWhenSelected: boolean;
    getText(): string;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    moveBy(delta: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setText(text: string): void;
}

export class CustomWidgetMoveEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly rotation?: minecraftserver.Vector2;
    readonly widget: CustomWidget;
}

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: ProjectExportOptions): Promise<ExportResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
}

/**
 * Editor Extensions are the basis for all player specific,
 * editor specific functionality within the game.  Almost all
 * editor functionality is exported and available within the
 * context of an {@link ExtensionContext}
 * When the script manager initializes during level loading,
 * the scripts are loaded from the behavior packs and executed.
 * As part of the global execution context, the scripts are
 * free to register any number of extensions.
 * An Editor Extension is defined a name, an activation
 * function and a shutdown function.
 *
 * It is not recommended to directly use this function as the
 * contract is not guaranteed to be stable, instead prefer
 * {@link registerEditorExtension} as it provides additional
 * functionality and a stable contract.
 */
export class Extension {
    private constructor();
    /**
     * @remarks
     * Default identifier for tool rail grouping. All modal tools
     * created from the extension will use this.
     *
     */
    readonly defaultToolGroupId: string;
    /**
     * @remarks
     * Description specified during registration for the extension.
     *
     */
    readonly description: string;
    /**
     * @remarks
     * Name of the extension.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Notes specified during registration for the extension.
     *
     */
    readonly notes: string;
}

/**
 * The extension context is a native (C++) object created for
 * each registered Editor Extension, when a player connection
 * is established with the server.
 * A registered extension activation or deactivation closure is
 * accompanied by an [ExtensionContext] object, which provides
 * a player specific, editor extension specific context.
 * The Extension Context is the main interface to all the bound
 * Editor Services.
 * As more player services are added to the editor, they will
 * be exposed through this object
 */
export class ExtensionContext {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the editor
     * player.  Event callbacks are called in a deferred manner.
     * Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly brushShapeManager: BrushShapeManager;
    /**
     * @remarks
     * This is used to access the players Clipboard Manager and the
     * main interface through which the player can create, modify
     * and apply clipboard items
     *
     */
    readonly clipboardManager: ClipboardManager;
    /**
     * @remarks
     * This is used to access the players 3D block cursor and it's
     * properties
     *
     */
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    /**
     * @remarks
     * Contains information about the registered extension
     * instance.
     *
     */
    readonly extensionInfo: Extension;
    /**
     * @remarks
     * The current player which is the subject of the extension
     * invocation
     *
     */
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    /**
     * @remarks
     * The instance of the players Selection Manager and the main
     * interface through which the player can create/modify
     * selections
     *
     */
    readonly selectionManager: SelectionManager;
    /**
     * @remarks
     * The instance of the players Settings Manager and the
     * contract through which the settings for the player can be
     * modified.
     *
     */
    readonly settings: SettingsManager;
    /**
     * @remarks
     * The instance of the players Transaction Manager and the main
     * interface through which the creator can create transaction
     * records, and undo/redo previous transactions
     *
     */
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}

/**
 * Settings category that manages {@link
 * GraphicsSettingsProperty} configurations.
 */
export class GraphicsSettings {
    private constructor();
    /**
     * @remarks
     * Retrieves a graphics settings property value.
     *
     * @param property
     * Property identifier.
     * @returns
     * Returns the property value if it is found. If the property
     * is not available, it returns undefined.
     */
    get<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T): GraphicsSettingsPropertyTypeMap[T] | undefined;
    /**
     * @remarks
     * Retrieves all graphics settings properties and their values.
     *
     * @returns
     * Returns a property value map for all available properties.
     */
    getAll(): GraphicsSettingsPropertyTypeMap;
    /**
     * @remarks
     * Modifies a graphics settings property value.
     *
     * @param property
     * Property identifier.
     * @param value
     * New property value.
     * @throws This function can throw errors.
     */
    set<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T, value: GraphicsSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * Modify multiple graphics settings properties.
     *
     * @param properties
     * Property map to set available property values. If the
     * property is not defined in the map, it will not be modified.
     * @throws This function can throw errors.
     */
    setAll(properties: GraphicsSettingsPropertyTypeMap): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LineWidget extends Widget {
    private constructor();
}

/**
 * The logger class is a utility class which allows editor
 * extensions to communicate with the player from the server to
 * the client log window.
 * The logger class presents 4 different output channels which
 * can be used to send information to the client/player,
 * depending on the context of the information.
 */
export class Logger {
    private constructor();
    /**
     * @remarks
     * A `debug` output channel generally used during the
     * development process of editor extensions.  This channel
     * defaults to `hidden` in the log window (unless explicitly
     * enabled).
     * Once your editor extension development process is complete,
     * and you're ready to ship/share your extension - we generally
     * recommend that you remove any references to this log channel
     * to avoid a noisy experience for other users
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    debug(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The error channel is generally used when the editor
     * extension experiences an error (either a program error in
     * executing logic unexpectedly, or an error in the input or
     * output to/from a player).  Use this channel sparingly - it's
     * meant to communicate important problems to the player
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    error(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The info channel is intended to communicate general,
     * non-fatal or non-erroneous information to the player that
     * can generally be safely ignored if they choose to do so.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    info(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The warning channel is intended to inform the user of
     * "potential" issues (missing inputs, values out of range,
     * things that cannot be found) but are not fatal and execution
     * can still be completed.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    warning(message: string, properties?: LogProperties): void;
}

/**
 * The MinecraftEditor class is a namespace container for
 * Editor functionality which does not have any player context.
 */
export class MinecraftEditor {
    private constructor();
    /**
     * @remarks
     * A global instance of the log output class object.  This is
     * not contextualized to any particular player, and any
     * messages sent to this instance will be broadcast to all
     * connected editor client sessions
     *
     * @throws This property can throw when used.
     */
    readonly log: Logger;
    /**
     * @remarks
     * Allows querying and modifying some properties of the
     * simulation.
     *
     */
    readonly simulation: SimulationState;
}

/**
 * Contains information related to changes in player editor
 * mode.
 */
export class ModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The editor mode that the player is changed to.
     *
     */
    readonly mode: EditorMode;
}

/**
 * Manages callbacks that are connected to when a player editor
 * mode changes.
 */
export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: PlaytestGameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}

/**
 * The Selection represents a volume in space, which may
 * potentially be made up of one or more block locations.
 * These block locations do not need to be contiguous, and a
 * Selection represent an irregular shape.
 * It's important to note that a Selection is only a
 * representation of the volume shape space - and does NOT
 * represent the actual contents of the space.
 */
export class Selection {
    private constructor();
    /**
     * @remarks
     * Returns a boolean representing whether or not there are any
     * volumes pushed to the selection stack
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Set whether or not the selection volume is visible to the
     * client user.
     * NOTE: Use this option carefully - Selection volumes are
     * generally server-only, but marking a volume as visible
     * causes the volume (and all volume operations) to be
     * synchronized with the client game which can potentially
     * generate excessive network traffic.
     *
     *
     * This property can't be edited in read-only mode.
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Clear the contents of the Selection
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a block iterator which can be used to step across the
     * Selection shape.  Each call to the iterator will return the
     * next block location within the Selection bounds which is
     * actually selected.
     * Block iteration is not guaranteed to be contiguous - it is
     * possible to create irregular selection shapes by adding
     * volumes to a selection which may or may not be contiguous or
     * adjacent to other volumes within the selection.
     * The Block iterator will return only selected volume
     * locations
     *
     * This function can't be called in read-only mode.
     *
     */
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    /**
     * @remarks
     * Return a bounding rectangle that contains all of the volumes
     * within the selection (the bounding rectangle does NOT
     * represent the shape of the selection, only the largest
     * rectangle that will fit all of the volumes)
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BoundingBox;
    /**
     * @remarks
     * Return the color of the on-screen selection container hull
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFillColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Return the color of the on-screen selection container
     * outline
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getOutlineColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Get the origin of the CompoundBlockVolume that makes up the
     * block component part of selection
     *
     * This function can't be called in read-only mode.
     *
     */
    getVolumeOrigin(): minecraftserver.Vector3;
    /**
     * @remarks
     * Translate a selection by a given amount (this causes all of
     * the volumes within the selection to be moved by the
     * specified offset)
     *
     * This function can't be called in read-only mode.
     *
     * @param delta
     * The amount by which to move
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Move the selection to an absolute world location (causing
     * all of the volumes within the selection to be moved to a
     * location relative to the world location)
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The world location to which to relocate the selection
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Fetch the volume information of the last compound volume
     * that was pushed to the volume stack without affecting the
     * stack itself
     *
     * This function can't be called in read-only mode.
     *
     * @param forceRelativity
     * See the description for {@link
     * @minecraft-server/CompoundBlockVolume.peekLastVolume}
     * @returns
     * Returns undefined if the stack is empty
     */
    peekLastVolume(
        forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity,
    ): minecraftserver.CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the volume information that was last pushed to the
     * volume stack.  This will reduce the stack item length by 1
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    popVolume(): void;
    /**
     * @remarks
     * Push a compound volume item (a volume and action pair) to
     * the volume stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param item
     * Item to push to the stack
     * @throws This function can throw errors.
     */
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * Replace the contents of the current selection with a new
     * specified selection.  This operation will delete the current
     * contents and copy the contents of the new selection to the
     * target selection - it does this by content, not by
     * reference.
     *
     * This function can't be called in read-only mode.
     *
     * @param other
     * {@link @minecraft-server/CompoundBlockVolume} - set the
     * block component part of this selection to the specified
     * compound block volume.  This will completely replace all
     * block volume definitions in the selection.
     * {@link @Selection} - replace the selection with the
     * specified selection
     * @throws This function can throw errors.
     */
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    /**
     * @remarks
     * Set the color of the hull of the selection object if it is
     * visible.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setFillColor(color: minecraftserver.RGBA): void;
    /**
     * @remarks
     * Set the color of the outline around the selection object if
     * it is visible
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setOutlineColor(color: minecraftserver.RGBA): void;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly selectionEvent: PrimarySelectionChangedEvent;
}

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link Selection} objects, and provides the user the ability
 * to create new {@link Selection} objects for use within an
 * extension.
 */
export class SelectionManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link Selection} object is always present (even
     * if it's empty) and cannot be deleted.  This object
     * represents the main selection object which is always
     * accessible through the UI, and by default is synchronized
     * between the client and server.
     *
     * @throws This property can throw when used.
     */
    readonly selection: Selection;
    /**
     * @remarks
     * Create a new, empty {@link Selection} object
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    create(): Selection;
}

/**
 * The SettingsManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management all
 * player settings.
 */
export class SettingsManager {
    private constructor();
    /**
     * @remarks
     * Manages graphics settings properties.
     *
     */
    readonly graphics: GraphicsSettings;
}

export class SettingsUIElement {
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    readonly max?: number;
    readonly min?: number;
    readonly name: string;
    readonly onChange: (arg: boolean | number | string | minecraftserver.Vector3) => boolean;
    readonly options?: string[];
    constructor(
        name: string,
        initialValue: boolean | number | string | minecraftserver.Vector3,
        onChange: (arg: boolean | number | string | minecraftserver.Vector3) => boolean,
        min?: number,
        max?: number,
        options?: string[],
    );
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

/**
 * A simple class wrapper to inherit in your tool which
 * contains the initialization and storage of the simple tool
 * component utility. See one of the `Simple` samples to see
 * how to use this class and the wrapper framework
 */
export declare class SimpleToolWrapper implements IDisposable {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void;
    teardown(): void;
}

/**
 * Responsible for querying and modifying various properties of
 * the simulation.
 */
export class SimulationState {
    private constructor();
    /**
     * @remarks
     * Returns `true` if mob simulation is paused.
     *
     */
    isPaused(): boolean;
    /**
     * @remarks
     * Sets the state of mob simulation.  If set to `true`, mobs
     * are paused.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

/**
 * The Transaction Manager is responsible for tracking and
 * managing all of the registered transaction operations which
 * represent creator changes in the world.
 * Transaction Manager is the basis of the UNDO and REDO
 * operations, and allows a creator to store the changes made
 * to the world and the state of the world BEFORE those changes
 * were applied, making it possible to UNDO those changes and
 * restore the world state.
 * The transactions are stored as a stack, and can be undone in
 * stack order to restore the world to it's original state
 */
export class TransactionManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * Commit all of the transaction operations currently attached
     * to the open transaction record to the manager.  These will
     * be added as a single transaction manager entry.
     * The open record will be closed and all tracking operations
     * will cease.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks
     * This function will commit the pending changes caused by any
     * of the track changes variants.  The changes will be
     * committed to the currently open transaction, but the
     * transaction will remain open for further records.
     * Pending block changes from tracking operations will be added
     * to the transaction record before submission to the
     * transaction manager
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the number of change requests that were being
     * tracked
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks
     * Discard the currently open transaction without committing it
     * to the transaction manager stack.
     * All records within the transaction will be discarded, and
     * any tracking requests currently active will be stopped
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks
     * Discard any pending tracked changes.  This does not affect
     * the current open transaction contents, only the pending
     * tracked block operations
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the number of change requests that were discarded
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * Open a transaction record which will be a container for any
     * number of transaction operations.
     * All transaction operations within a record are grouped and
     * treated as a single atomic unit
     *
     * This function can't be called in read-only mode.
     *
     * @param name
     * Give the transaction record a name
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks
     * Perform an redo operation.  This will take the last
     * transaction record on the redo stack and store the current
     * world state and then apply the changes in the record.  This
     * will reduce the redo record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the undo stack in case the creator decides to
     * undo it
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks
     * Return the number of transaction records on the redo stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @remarks
     * Begin tracking block changes in a specified area.  These
     * will be added to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     *
     * This function can't be called in read-only mode.
     *
     * @param from
     * Min block location of a bounding area
     * @param to
     * Max block location of a bounding area
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @remarks
     * Begin tracking block changes in an area defined by a {@link
     * @minecraft-server/CompoundBlockVolume}.  These will be added
     * to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     *
     * This function can't be called in read-only mode.
     *
     * @param compoundBlockVolume
     * {@link @minecraft-server/CompoundBlockVolume} to track.
     * Only non-void block locations will be tracked -- any changes
     * falling into a void/negative space will not be tracked
     * @throws This function can throw errors.
     */
    trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean;
    /**
     * @remarks
     * Begin tracking block changes in a list of specified block
     * locations.
     *
     * This function can't be called in read-only mode.
     *
     * @param locations
     * An array of block locations to monitor for changes
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @remarks
     * Begin tracking block changes that may happen in a selection
     * volume.
     * The volume is copied, so tracking will not move if the
     * selection volume is translated after this instruction is
     * issued.
     * Selection Volumes can also represent irregular shapes with
     * non-contiguous blocks and this tracking call will honor the
     * actual selected areas in the volume (and not the negative
     * space) (see {@link @minecraft-server/CompoundBlockVolume}
     * for more details
     *
     * This function can't be called in read-only mode.
     *
     * @param selection
     * A collection of block location volumes represented by a
     * Selection volume to monitor for changes.
     * The Selection Volume is copied, so further changes to the
     * volume after this call will not be reflected in the tracking
     * list.
     * @throws This function can throw errors.
     */
    trackBlockChangeSelection(selection: Selection): boolean;
    /**
     * @remarks
     * Perform an undo operation.  This will take the last
     * transaction record on the stack and apply the stored world
     * state from before the changes were made.  This will reduce
     * the record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the redo stack in case the creator decides to
     * reapply it
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks
     * Return how many transactions records currently exist on the
     * stack
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    undoSize(): number;
}

/**
 * A strongly typed transaction handle to enforce type safety
 * when adding user defined transactions.<br/> This transaction
 * handle becomes the context for adding the transaction to the
 * transaction manager.<br/> You can obtain one of these handles
 * by calling {@link registerUserDefinedTransactionHandler}
 */
export declare class UserDefinedTransactionHandle<T> {
    /**
     * @remarks
     * Constructs a new instance of the
     * `UserDefinedTransactionHandle` class
     *
     */
    constructor(nativeHandle: UserDefinedTransactionHandlerId, transactionManager: TransactionManager);
    /**
     * @remarks
     * Add a user defined transaction operation to the transaction
     * manager with a payload of the specified type. This allows
     * the extension to open a transaction, and insert custom data
     * objects into the transaction log which are stored until an
     * undo or redo event occurs. The payload data added here is
     * stored and then passed to the undo/redo handlers (registered
     * with {@link registerUserDefinedTransactionHandler}) when an
     * undo/redo event is requested. NOTE:<br/> Transactions can
     * contain multiple operations - you can open a transaction and
     * add any (reasonable) number of operations to it (of the same
     * or differing types) before committing to the transaction
     * log. NOTE/WARNING:<br/> The payload data is serialized to
     * JSON before being inserted into the transaction log and the
     * underlying implementation uses the JSON.stringify() function
     * to serialize the data. Any non-primitive data, such as
     * classes or minecraft native objects will not serialize to
     * JSON properly, so you should avoid using them as payload
     * data.
     *
     * @param payload
     * The data object to be inserted into the transaction log.
     * @param transactionName
     * A string name that will be associated with this operation
     */
    addUserDefinedOperation(payload: T, transactionName: string): void;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

export class Widget {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    deleteWidget(): void;
    getIsSelected(): boolean;
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setIsSelected(isSelected: boolean): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setIsVisible(isVisible: boolean): void;
}

export class WidgetGroup {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    areAnySelected(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createCustomWidget(
        customEntityName: string,
        location: minecraftserver.Vector3,
        rotation?: minecraftserver.Vector2,
        options?: CustomWidgetCreateOptions,
    ): CustomWidget;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    moveSelectedWidgets(delta: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    selectAllWidgets(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setIsVisible(isVisible: boolean): void;
}

export class WidgetManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly isSelected?: boolean;
    readonly isVisible?: boolean;
    readonly widget: Widget;
}

export interface BrushShape {
    icon: string;
    name: string;
}

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * The anchor is a unit vector representation of the side or
     * corner of the Clipboard Item to be written to the world.
     * `{0, 0, 0}` represents the center of the Clipboard item,
     * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
     * the bottom/back/left corner, etc
     * The anchor is used in conjunction with the item size to
     * determine the object relative anchor point where the object
     * will be applied in the world.
     * Values for the X/Y/Z components should be within the range
     * `(-1 <= X/Y/Z <=1)`
     *
     */
    anchor?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     *
     */
    offset?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     *
     */
    rotation?: minecraftserver.StructureRotation;
}

/**
 * The CursorProperties interface is used to describe the
 * properties of the Editor 3D block cursor construct.
 * The 3D block cursor can be queried to retrieve the current
 * properties, and the same property class can be used to set
 * the current properties of the cursor.
 * This interface is generally used at the activation stage of
 * the active tool to set up the color, visibility and input
 * properties of the 3D block cursor
 */
export interface CursorProperties {
    /**
     * @remarks
     * Enum representing the cursor control mode
     * - Fixed Mode locks the cursor to a position which is \<X\>
     * blocks offset from the current player position. The cursor
     * is camera relative, so it will always appear \<X\> blocks
     * ahead of the players feet
     * - Keyboard Mode puts the cursor under direct control of the
     * API, and ignores any mouse input.  The cursor can only be
     * moved around using the moveBy method
     * - KeyboardAndMouse mode puts the cursor under a shared
     * control of onMouseMove and keyboard input.  Any mouse
     * movement events will set the cursor to the position of the
     * mouse/world raycast.  This can be modified using the moveBy
     * method, but any subsequent mouse events will reset the
     * position back to where the raycast intersection occurs
     * - Mouse mode puts the cursor under control of mouse move
     * events, and moveBy method will be ignored
     *
     *
     */
    controlMode?: CursorControlMode;
    /**
     * @remarks
     * The fixed distance from the players feet at which the cursor
     * is attached, relative to camera direction.
     * This is only used when [controlMode] is set to `Fixed`
     *
     */
    fixedModeDistance?: number;
    /**
     * @remarks
     * A [Color] Property representing the color of the block
     * cursor object outline
     *
     */
    outlineColor?: minecraftserver.RGBA;
    projectThroughLiquid?: boolean;
    /**
     * @remarks
     * An enum representing the cursor target mode
     * - Block Mode records the block position of the mouse/world
     * raycast intersection
     * - Face Mode records the block position of the block adjacent
     * to the mouse/world raycast intersection, according to the
     * face of the collision point of the selected block
     *
     */
    targetMode?: CursorTargetMode;
    /**
     * @remarks
     * Boolean flag controlling the visibility of the 3D block
     * cursor
     *
     */
    visible?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface CustomWidgetCreateOptions extends WidgetCreateOptions {
    moveEvent?: (arg: CustomWidgetMoveEventData) => void;
    showTextOnlyWhenSelected?: boolean;
    text?: string;
    visualOffset?: minecraftserver.Vector3;
}

/**
 * An interface which defines the set of optional parameters
 * which can be used when calling the `registerEditorExtension`
 * function
 */
export interface ExtensionOptionalParameters {
    /**
     * @remarks
     * An optional text description of the extension being
     * registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The description is meant to be a very short snappy one-liner
     * which quickly and uniquely identifies the extension
     * The length of the string is capped to 256 characters
     *
     */
    description?: string;
    /**
     * @remarks
     * Optional notes for the extension being registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The notes section is meant to convey more detailed
     * information and notes (e.g. a link to the author's website)
     * The length of this string is capped to 1024 characters
     *
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom identifier that will be used for all
     * Modal Tools created from the registered extension.
     * The length of the string is capped to 256 characters
     *
     */
    toolGroupId?: string;
}

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the {@link
 * ExtensionContext} - using the global instance allows the
 * creator to use this properties class to perform direct
 * server->client messaging and broadcasts.
 */
export interface LogProperties {
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: minecraftserver.Player;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}

export interface PlaytestGameOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    gameMode?: minecraftserver.GameMode;
    showCoordinates?: boolean;
    spawnPosition?: minecraftserver.Vector3;
    timeOfDay?: number;
    weather?: number;
}

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimOfDay?: number;
}

export interface WidgetCreateOptions {
    initialVisibility?: boolean;
    isSelectable?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
}

/**
 * Binds actions to the client and manages their lifetime.
 * Action managers are managed on a per player basis since
 * client side UI is per player.
 */
export interface ActionManager {
    /**
     * @remarks
     * The active tool ID
     *
     */
    activeToolId: string | undefined;
    /**
     * @remarks
     * Creates an action and registers it on the client
     *
     * @param rawAction
     * The raw action to create. See ActionTypes for supported
     * parameters
     */
    createAction<T extends Action>(rawAction: T): RegisteredAction<T>;
}

/**
 * Represents a UI session for a given player
 */
export interface BuiltInUIManager {
    /**
     * @remarks
     * Navigates to the documentation site.
     *
     */
    navigateToDocumentation(): void;
    /**
     * @remarks
     * Navigates to the feedback site
     *
     */
    navigateToFeedback(): void;
    /**
     * @remarks
     * Navigates to the pause screen
     *
     */
    navigateToPauseScreen(): void;
    /**
     * @remarks
     * Updates the visibility of the log panel
     *
     */
    updateLogPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the control demo
     *
     */
    updateUISettingsPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the welcome panel
     *
     */
    updateWelcomePanelVisibility(visibility: boolean): void;
}

/**
 *  An event that can be subscribed to. You can use the token,
 * returned from the subscribe method, to clean up handlers.
 */
export declare interface EventSink<T> {
    /**
     * @remarks
     * Subscribes an event handler to a particular subscription.
     *
     * @param handler
     * Handler function to subscribe with.
     * @returns
     * An event handler subscription token that can be used to
     * unsubscribe and clean-up handlers.
     */
    subscribe(handler: EventHandler<T>): IEventToken;
}

/**
 * Simple abstraction for disposable objects.
 */
export interface IDisposable {
    /**
     * @remarks
     * Initiates the teardown and cleanup of this disposable item.
     *
     */
    teardown(): void;
}

export interface IDropdownItem {
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    readonly displayAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    readonly displayStringId: string;
    /**
     * @remarks
     * The selectable value of the DropDown item.
     *
     */
    readonly value: number;
}

/**
 * Dropdown property item specific functionality
 */
export interface IDropdownPropertyItemMixIn {
    /**
     * @remarks
     * Used to update the Dropdown options in the control. Will
     * trigger onChange with -1 as the old value due to the list
     * changing entries.
     *
     */
    updateDropdownItems(dropdownItems: IDropdownItem[], newValue: number): void;
}

/**
 * Returned from an event subscription. Provides functionality
 * for cleaning up listeners
 */
export declare interface IEventToken {
    /**
     * @remarks
     * Removes registered listener from an event
     *
     */
    unsubscribe(): void;
}

export interface IGlobalInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        button: KeyboardKey,
        modifier?: InputModifier,
    ): void;
}

export interface IMenu {
    /**
     * @remarks
     * If defined, the menu will show a checked or unchecked
     * checkbox.
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * Unique ID for the menu
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Sub menus of this menu
     *
     */
    readonly submenu: IMenu[];
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    dispose(): void;
    hide(): void;
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    show(): void;
}

/**
 * Manager and container for IMenu objects
 */
export interface IMenuContainer {
    /**
     * @remarks
     * Create a top level item in the container.
     *
     * @param props
     * Configuration for the menu to create
     */
    createMenu(props: IMenuCreationParams): IMenu;
    /**
     * @remarks
     * Search for a menu item, if it's not found defer it to next
     * tick.
     *
     * @param id
     * Menu identifier
     */
    getMenu(id: string): Promise<IMenu>;
}

/**
 * Properties required to create a Menu
 */
export interface IMenuCreationParams {
    /**
     * @remarks
     * Whether the menu should show a checkmark
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    displayStringId?: string;
    /**
     * @remarks
     * The name of the menu
     *
     */
    name: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     *
     */
    uniqueId?: string;
}

export interface IModalTool {
    /**
     * @remarks
     * Unique ID for the tool
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     *
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    bindPropertyPane(pane: IPropertyPane): void;
    dispose(): void;
    hide(): void;
    registerKeyBinding(action: SupportedKeyboardActionTypes, button: KeyboardKey, modifier?: InputModifier): void;
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    show(): void;
    unregisterInputBindings(): void;
}

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    /**
     * @remarks
     * The id of the selected tool in container.
     *
     */
    readonly selectedOptionId?: string;
    addTool(params: ModalToolCreationParameters, action?: RegisteredAction<NoArgsAction>): IModalTool;
    dispose(): void;
    hide(): void;
    removeTool(id: string): void;
    setSelectedOptionId(value: string | undefined, update?: boolean): void;
    show(): void;
}

/**
 * Log helper interface for Player.
 */
export interface IPlayerLogger {
    /**
     * @remarks
     * Dispatch a player log message with Debug log level
     *
     * @param message
     * Message content
     */
    debug(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     */
    error(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     */
    info(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     */
    warning(message: string): void;
}

export interface IPropertyItem<T extends PropertyBag, Prop extends keyof T & string> {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable: boolean;
    /**
     * @remarks
     * Unique ID for the property item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The object associated.
     *
     */
    readonly obj: T;
    /**
     * @remarks
     * The parent pane id.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * The target property of the object associated.
     *
     */
    readonly property: Prop;
    /**
     * @remarks
     * The type name of the target property.
     *
     */
    readonly typeName: EDITOR_PANE_PROPERTY_ITEM_TYPE;
    /**
     * @remarks
     * The value of the property.
     *
     */
    readonly value: T[Prop];
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible: boolean;
    dispose(): void;
}

export interface IPropertyItemOptions {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable?: boolean;
    /**
     * @remarks
     * Callback to execute when the value is updated.
     *
     */
    onChange?: OnChangeCallback<PropertyBag, string>;
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText?: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId?: string;
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsBool extends IPropertyItemOptions {
    /**
     * @remarks
     * controls appearance of the boolean. checkbox or toggleswitch
     *
     */
    displayAsToggleSwitch?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsButton extends IPropertyItemOptions {
    icon?: string;
    /**
     * @remarks
     * The variant for the button. By default it is "primary"
     *
     */
    variant?: ButtonVariant;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsDataPicker extends IPropertyItemOptions {
    /**
     * @remarks
     * Used to hold the entries allowed in the block/entity picker
     *
     */
    allowedEntries?: string[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsDropdown extends IPropertyItemOptions {
    /**
     * @remarks
     * The possible options for the drop down control.
     *
     */
    dropdownItems: IDropdownItem[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsImage extends IPropertyItemOptions {
    imageHeight: number;
    imageWidth: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsNumber extends IPropertyItemOptions {
    /**
     * @remarks
     * The min possible value for the number.
     *
     */
    max?: number;
    /**
     * @remarks
     * The max possible value for the number.
     *
     */
    min?: number;
    /**
     * @remarks
     * If UI should show slider control.
     *
     */
    showSlider?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsSubPane extends IPropertyItemOptions {
    /**
     * @remarks
     * The sub pane to render in UI.
     *
     */
    pane: IPropertyPane;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsTable extends IPropertyItemOptions {
    defaultData: IPropertyTableCellItem[][];
    titleId?: string;
}

/**
 * Localization string id and border enable boolean for
 * multiline text component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsText extends IPropertyItemOptions {
    border: boolean;
    valueStringId: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsVector3 extends IPropertyItemOptions {
    /**
     * @remarks
     * The max possible value for the X axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxX?: number;
    /**
     * @remarks
     * The max possible value for the Y axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxY?: number;
    /**
     * @remarks
     * The max possible value for the z axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxZ?: number;
    /**
     * @remarks
     * The min possible value for the X axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minX?: number;
    /**
     * @remarks
     * The min possible value for the Y axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minY?: number;
    /**
     * @remarks
     * The min possible value for the Z axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minZ?: number;
}

/**
 * Property pane present dynamic content. It can be associated
 * with an object and presented with different kind of
 * controls.
 */
export interface IPropertyPane {
    /**
     * @remarks
     * Pane state for being expanded or collapsed.
     *
     */
    collapsed: boolean;
    /**
     * @remarks
     * Unique ID for the property pane.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides visibility change events
     *
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    /**
     * @remarks
     * In case of sub pane this is the id of the parent pane.
     *
     */
    readonly parentPaneId?: string;
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId: string;
    /**
     * @remarks
     * Check visibility of the pane
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Width of the panel in rem.
     *
     */
    width?: number;
    /**
     * @remarks
     * Adds a BlockPicker item to the pane.
     *
     */
    addBlockPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a boolean item to the pane.
     *
     */
    addBool<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsBool,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button activate.
     *
     */
    addButton(
        action: RegisteredAction<NoArgsAction>,
        options?: IPropertyItemOptionsButton,
    ): IActionPropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItem<PropertyBag, string>;
    /**
     * @remarks
     * Adds an DropDown item to the pane.
     *
     */
    addDropdown<
        T extends Omit<PropertyBag, Prop> & {
            [key in Prop]: number;
        },
        Prop extends keyof T & string,
    >(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDropdown,
    ): IDropdownPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds an EntityPicker item to the pane.
     *
     */
    addEntityPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     */
    addImage<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsImage,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsNumber,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a string item to the pane
     *
     */
    addString<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptions,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a table to the pane.
     *
     */
    addTable(options?: IPropertyItemOptionsTable): ITablePropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
    /**
     * @remarks
     * Adds a multiline Text item to the pane.
     *
     */
    addText<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsText,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsVector3,
    ): IVector3PropertyItem<T, Prop>;
    /**
     * @remarks
     * Collapse the pane.
     *
     */
    collapse(): void;
    /**
     * @remarks
     * Creates an internal sub panel that is presented inside a
     * extender control.
     *
     */
    createPropertyPane(options: IPropertyPaneOptions): IPropertyPane;
    /**
     * @remarks
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Removes a child property pane from the parent pane.
     *
     */
    removePropertyPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Show the pane and all of its property items.
     *
     */
    show(): void;
}

/**
 * The options to create a pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Layout direction for sub panes
     *
     */
    direction?: LayoutDirection;
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId: string;
    /**
     * @remarks
     * Width of the panel in rem. This property is ignored in case
     * of sub panes
     *
     */
    width?: number;
}

export interface IPropertyTableCellItem {
    block?: string;
    icon?: string;
    text?: string;
}

/**
 * Optional parameter definition for RegisterEditorExtension
 * function Allows the extension registrar to specify optional
 * textual description and notes which would be visible through
 * the extension manager
 */
export interface IRegisterExtensionOptionalParameters {
    /**
     * @remarks
     * Description of the extension.
     *
     */
    description?: string;
    /**
     * @remarks
     * Additional notes and description of the extension.
     *
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom group identifier that will be used for
     * all Modal Tools created from the registered extension.
     *
     */
    toolGroupId?: string;
}

/**
 * The simple tool wrapper will create, bind and manage the
 * lifecycle of all the desired components. The wrapper is
 * designed to obfuscate and simplify the process of creating a
 * simple editor tool so that a creator can get on with the job
 * of just creating the tool functionality without getting
 * mired in the irrelevant details of component lifecycle and
 * visibility management. The wrapper will also attempt to
 * codify particular implementation patterns and requirements
 * that are common to all editor tools, and enforce them in a
 * consistent way. It should also go some way to insulating the
 * creator from underlying system and implementation changes as
 * the editor evolves.
 */
export interface ISimpleTool {
    get menu(): IMenu | undefined;
    get name(): string;
    get pane(): ISimpleToolPaneComponent;
    get session(): IPlayerUISession;
    get statusBar(): ISimpleToolStatusBarComponent;
    get toolRail(): ISimpleToolRailComponent;
    /**
     * @remarks
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     */
    hidePane(idString?: string): void;
    /**
     * @remarks
     */
    logDebug(message: string): void;
    /**
     * @remarks
     */
    logError(message: string): void;
    /**
     * @remarks
     */
    logInfo(message: string): void;
    /**
     * @remarks
     */
    logWarn(message: string): void;
    /**
     * @remarks
     */
    showPane(idString?: string): void;
    /**
     * @remarks
     */
    showPaneExclusively(idString: string): void;
    /**
     * @remarks
     */
    teardown(): void;
}

/**
 * Define a (key & modifier) pair for the simple tool
 * activation key binding
 */
export interface ISimpleToolKeyPair {
    button: KeyboardKey;
    buttonModifier: InputModifier;
}

/**
 * A set of options which define the basic properties of a
 * simple tool, and the optional components that are desired.
 */
export interface ISimpleToolOptions {
    activationKeyBinding?: ISimpleToolKeyPair;
    name: string;
    onFinalize?: (tool: ISimpleTool) => void;
    onTeardown?: (tool: ISimpleTool) => void;
    propertyPaneOptions?: ISimpleToolPaneOptions;
    statusBarOptions?: ISimpleToolStatusBarOptions;
    toolRailOptions?: ISimpleToolRailOptions;
}

/**
 * The Simple Tool pane component represents the main window
 * (or sub-window) for an editor tool. The pane components are
 * stored as a hierarchy (see the `ISimpleToolPaneOptions`
 * interface for more details) and are the main containers for
 * all of the UI controls used by the editor tool. Panes are
 * optional (a tool doesn't necessarily need to have a pane),
 * but if a pane is present, then it is one of two type - Modal
 * Pane (appears on the left side of the display; visibility is
 * tied to the `ISimpleToolRail` component) (Note that there
 * can be only one modal pane visible at a time) - Global Pane
 * (appears on the right side of the display; visibility is up
 * to the creator/user)
 */
export interface ISimpleToolPaneComponent {
    get childPaneList(): string[];
    get id(): string;
    get isVisible(): boolean;
    get pane(): IPropertyPane;
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     */
    hidePane(): void;
    /**
     * @remarks
     */
    reconstructPane(): void;
    /**
     * @remarks
     */
    showPane(): void;
}

/**
 * A set of options which define the basic properties of a
 * window pane (or sub-pane) for a simple tool. This pane can
 * be a top level pane, or a child pane of the top level pane,
 * and is the content container for all of the UI controls used
 * by the editor tool. Each pane is uniquely identified by the
 * `id` property, and has a number of optional function
 * closures which are called at various points in the pane's
 * lifecycle. Note that instead of having a single `onFinalize`
 * function, panes implement a pair of `onBeginFinalize` and
 * `onEndFinalize` functions. This is to allow for the pane to
 * be partially constructed BEFORE any child panes are
 * constructed. Once all child panes have been fully finalized,
 * then the `onEndFinalize` function is called to allow the
 * pane to finalize itself.
 */
export interface ISimpleToolPaneOptions {
    childPaneInitiallyVisible?: string;
    childPanes?: ISimpleToolPaneOptions[];
    childPanesMutuallyExclusive?: boolean;
    id: string;
    onBeginFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onEndFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onHide?: (pane: ISimpleToolPaneComponent) => void;
    onShow?: (pane: ISimpleToolPaneComponent) => void;
    onTeardown?: (pane: ISimpleToolPaneComponent) => void;
    titleAltText: string;
    titleStringId?: string;
}

export interface ISimpleToolRailComponent {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    get toolRail(): IModalTool;
}

/**
 * The tool rail component allows the tool to register an icon
 * and button (and dynamic tooltip) in the tool rail on the
 * left side of the display. Adding a tool rail component to a
 * tool will cause the tool to be considered a `modal tool`,
 * and only one single modal tool can be active at any one
 * time. Modal tools are generally tools which take focus and
 * control of the cursor (e.g. selection, clipboards, entity
 * selection, etc) Global tools (tools which do not have a tool
 * rail) are generally things like property pages, settings,
 * etc - things that do not require an active cursor or
 * gameplay interaction
 */
export interface ISimpleToolRailOptions {
    displayAltText: string;
    displayStringId?: string;
    icon: string;
    onActivate?: (component: ISimpleToolRailComponent) => void;
    onDeactivate?: (component: ISimpleToolRailComponent) => void;
    onFinalize?: (component: ISimpleToolRailComponent) => void;
    onTeardown?: (component: ISimpleToolRailComponent) => void;
    tooltipAltText: string;
    tooltipStringId?: string;
}

export interface ISimpleToolStatusBarComponent {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    get statusBarItem(): IStatusBarItem;
    hide(): void;
    show(): void;
}

/**
 * A set of options which define the basic properties of a
 * status bar item for a simple tool.
 */
export interface ISimpleToolStatusBarOptions {
    alignment: EditorStatusBarAlignment;
    displayAltText: string;
    onFinalize?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onHide?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onShow?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onTeardown?: (statusBar: ISimpleToolStatusBarComponent) => void;
    size: number;
    visibility?: SimpleToolStatusBarVisibility;
}

export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Text to display.
     *
     */
    text: string;
    hide(): void;
    show(): void;
}

/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * The displayed string for the tool
     *
     */
    displayAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    displayStringId?: string;
    /**
     * @remarks
     * Icon, if any (from resource pack on client)
     *
     */
    icon?: string;
    /**
     * @remarks
     * tooltipAltText alt text, if any
     *
     */
    tooltipAltText?: string;
    /**
     * @remarks
     * Tooltip localization string ID
     *
     */
    tooltipStringId?: string;
}

/**
 * @remarks
 * Takes the input object (a property bag of values) and bind
 * it to the pane as a data source. UI child elements of the
 * pane will be updated when the values in the object change,
 * and vice versa.
 *
 * @param propertyPane
 * The property pane to bind the property bag to.
 * @param target
 * The property bag to bind to the pane.
 */
export declare function bindDataSource<T extends PropertyBag, Prop extends keyof T & string>(
    propertyPane: IPropertyPane,
    target: T,
): T;
/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 *
 * @param selection
 * the selection to iterator over
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperation(
    selection: Selection,
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;
/**
 * @remarks
 * Returns a string array of the default block types for the
 * Block picker control. Can be used to further filter blocks
 * from the Block picker.
 *
 * @returns
 * Default allowed block list
 */
export declare function getBlockPickerDefaultAllowBlockList(): string[];
/**
 * @remarks
 * Adds the resource pack editor prefix and returns the full
 * localization ID
 *
 */
export declare function getLocalizationId(locId: string): string;
/**
 * @remarks
 * Registers an editor extension into Minecraft. This function
 * calls underlying functionality to register an extension but
 * provides helpful and contextual wrappers for individual
 * client lifetimes. The onActivation function is called
 * whenever a client joins a session, while the shutdown is
 * called when a client leaves. There may be other
 * circumstances in which these are called as well based on
 * client state that is an implementation detail of the system.
 *
 */
export declare function registerEditorExtension<PerPlayerStorageType = Record<string, never>>(
    extensionName: string,
    activationFunction: ActivationFunctionType<PerPlayerStorageType>,
    shutdownFunction: ShutdownFunctionType<PerPlayerStorageType>,
    options?: IRegisterExtensionOptionalParameters,
): Extension;
/**
 * @remarks
 * Creates a strongly typed transaction handle to enforce type
 * safety when adding user defined transactions. This function
 * is a wrapper around the more generalized transaction manager
 * API for script based transactions. Any Editor Extension that
 * needs to insert data into the transaction log for undo/redo
 * should use this function to create a handler for the
 * specific type of data that needs to be inserted. When a
 * transaction is undone/redone, the associated handler
 * function will be invoked with a copy of the payload data
 * that was inserted into the log. As a general rule,
 * transaction data should contain 2 things:<br/> 1. The data
 * that will be used to perform the operation we're trying to
 * record<br/> 2. The data that will be used to restore the
 * state of the program to what it was before the
 * operation.<br/> NOTE/WARNING:<br/> The payload data is
 * serialized to JSON before being inserted into the
 * transaction log and the underlying implementation uses the
 * JSON.stringify() function to serialize the data. Any
 * non-primitive data, such as classes or minecraft native
 * objects will not serialize to JSON properly, so you should
 * avoid using them as payload data.
 *
 * @param transactionManager
 * A reference to the TransactionManager (from the extension
 * context for your extension)
 * @param undoHandler
 * A function that will be invoked when the transaction is
 * undone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * @param redoHandler
 * A function that will be invoked when the transaction is
 * redone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * @returns
 * - {@link UserDefinedTransactionHandle} - A strongly typed
 * transaction handle that can be used to add transactions to
 * the transaction manager.
 */
export declare function registerUserDefinedTransactionHandler<T>(
    transactionManager: TransactionManager,
    undoHandler: (payload: T) => void,
    redoHandler: (payload: T) => void,
): UserDefinedTransactionHandle<T>;
/**
 * @remarks
 * Small utility for getting a string from an unknown exception
 * type
 *
 */
export declare function stringFromException(e: unknown): string;
export const editor: MinecraftEditor;
