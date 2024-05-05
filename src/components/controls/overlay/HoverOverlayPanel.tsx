import React, {useState} from 'react'
import {flip, shift, useClick, useFloating, useHover, useInteractions} from '@floating-ui/react';
import {Placement} from '@floating-ui/utils'

export interface OverlayPanelProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: Placement;
  className?: string;
  style?: React.CSSProperties;
}

export function HoverOverlayPanel(props: OverlayPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: props.position ?? 'bottom-start',
    // whileElementsMounted: autoUpdate,
    middleware: [shift({
      padding: 24
    }), flip()]
  });
  const hover = useHover(context);
  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
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