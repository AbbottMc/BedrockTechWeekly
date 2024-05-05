import React, {useState} from 'react'
import {autoUpdate, flip, shift, useClick, useDismiss, useFloating, useHover, useInteractions} from '@floating-ui/react'
import {Placement} from '@floating-ui/utils'

export interface ClickOverplayPanelOptions {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: Placement;
  className?: string;
  style?: React.CSSProperties;
}

export function ClickOverplayPanel(props: ClickOverplayPanelOptions){
  const [isOpen, setIsOpen] = useState(false);
  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: props.position ?? 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [shift({
      padding: 24
    }), flip()]
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const {getReferenceProps, getFloatingProps} = useInteractions([
    click, dismiss
  ]);
  return (
    <>
      <div className={"hover-overlay-panel"} ref={refs.setReference} {...getReferenceProps()}>
        {props.trigger}
      </div>
      {
        isOpen &&
        <div className={"hover-overlay-content p-4"} ref={refs.setFloating} autoFocus={true}
             style={floatingStyles} {...getFloatingProps()}>
          {props.content}
        </div>
      }
    </>
  );
}