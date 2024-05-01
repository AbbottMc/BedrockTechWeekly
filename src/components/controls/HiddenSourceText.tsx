import {Hidden} from '@site/src/components/controls/Hidden'
import {GrayText} from '@site/src/components/controls/GrayText'
import React from 'react'

export interface HiddenSourceTextProps {
  children?: React.ReactNode;
}

export function HiddenSourceText(props: HiddenSourceTextProps) {
  return (
    <Hidden>
      <GrayText>
        {props.children}
      </GrayText>
    </Hidden>
  )
}