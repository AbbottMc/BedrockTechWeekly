import React from 'react'

export interface SingleItemProps {
  children: React.ReactNode;
  // default: false
  keepMargin?: boolean;
}

export function SingleItem(props: SingleItemProps) {
  const keepMargin = props.keepMargin ?? false;

  return (
    <ul className={keepMargin ? "" : "hidden-source-text"}>
      <li>{props.children}</li>
    </ul>
  );
}