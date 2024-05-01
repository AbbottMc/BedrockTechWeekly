import React from 'react'

interface GrayTextProps {
  children?: React.ReactNode;
}

export function GrayText(props: GrayTextProps) {
  return <div className="gray-text" style={{color: 'gray'}}>{props.children}</div>;
}