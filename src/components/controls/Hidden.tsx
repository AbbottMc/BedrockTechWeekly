import React, {useEffect, useState} from 'react'
import {ComponentUtil} from '@site/src/util/ComponentUtil'
import {usePageEventListener} from '@site/src/hooks/usePageEventListener'

interface HiddenProps {
  children: React.ReactNode;
}

export function Hidden(props: HiddenProps) {
  const [isHidden, setHidden] = useState(true);
  const [bindHidden, unbindHidden] = usePageEventListener({
    name: 'hiddenSwitch',
    listener(isHidden) {
      setHidden(isHidden);
    }
  });

  useEffect(() => {
    bindHidden();
    setHidden(ComponentUtil.isHidden());
    return () => {
      unbindHidden();
    }
  }, []);

  return (
    <div style={{display: isHidden ? 'none' : 'flex'}}>
      {props.children}
    </div>
  )
}