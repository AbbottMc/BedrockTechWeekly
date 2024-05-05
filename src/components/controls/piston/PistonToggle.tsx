import React from 'react';
import {ClickOverplayPanel, ClickOverplayPanelOptions} from '@site/src/components/controls/overlay/ClickOverplayPanel'

interface PistonToggleProps extends Omit<ClickOverplayPanelOptions, 'trigger'> {
}

export function PistonToggle(props: PistonToggleProps) {
  const trigger = (
    <div className={"piston-toggle-rect-outline"}>
      <div className={"piston-toggle-rect"}/>
    </div>
  )
  return (
    <ClickOverplayPanel trigger={trigger} {...props}/>
  )
}