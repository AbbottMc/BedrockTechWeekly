// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Hidden} from '@site/src/components/controls/Hidden'
import {HiddenSourceText} from '@site/src/components/controls/HiddenSourceText'
import {NavHiddenSwitcher} from '@site/src/components/controls/navigation/NavHiddenSwitcher'
import {HoverOverlayPanel} from '@site/src/components/controls/overlay/HoverOverlayPanel'
import {ClickOverplayPanel} from '@site/src/components/controls/overlay/ClickOverplayPanel'
import {PistonToggle} from '@site/src/components/controls/piston/PistonToggle'
import {SingleItem} from '@site/src/components/controls/list/SingleItem'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Hidden,
  HiddenSourceText,
  NavHiddenSwitcher,
  HoverOverlayPanel,
  ClickOverplayPanel,
  PistonToggle,
  SingleItem
};