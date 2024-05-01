// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Hidden} from '@site/src/components/controls/Hidden'
import {HiddenSourceText} from '@site/src/components/controls/HiddenSourceText'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Hidden,
  HiddenSourceText
};