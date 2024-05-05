// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Hidden} from '@site/src/components/controls/Hidden'
import {HiddenSourceText} from '@site/src/components/controls/HiddenSourceText'
import {NavHiddenSwitcher} from '@site/src/components/controls/navigation/NavHiddenSwitcher'
import {HoverOverlayPanel} from '@site/src/components/controls/HoverOverlayPanel'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Hidden,
  HiddenSourceText,
  NavHiddenSwitcher,
  HoverOverlayPanel
};