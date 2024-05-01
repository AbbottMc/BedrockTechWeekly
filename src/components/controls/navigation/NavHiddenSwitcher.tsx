import React, {useEffect, useState} from 'react'
import {ComponentUtil} from '@site/src/util/ComponentUtil'
import {useEventListener} from '@site/src/hooks/useEventListener'

const pressedKeys = [] as string[];

export function NavHiddenSwitcher() {
  const [isHidden, setHidden] = useState();
  const requiredKeys = ['ControlLeft', 'ShiftLeft', 'KeyS'];

  const [bindKeydown, unbindKeydown] = useEventListener({
    name: 'keydown', listener(event: KeyboardEvent) {
      if (pressedKeys.includes(event.code)) return;
      pressedKeys.push(event.code);
      testSwitch(pressedKeys);
    }
  });
  const [bindKeyup, unbindKeyup] = useEventListener({
    name: 'keyup', listener(event: KeyboardEvent) {
      pressedKeys.splice(pressedKeys.indexOf(event.code), 1);
    }
  });
  const switchHidden = () => {
    ComponentUtil.switchHidden();
    setHidden(ComponentUtil.isHidden());
  };
  const testSwitch = (keys: string[]) => {
    if (keys.length !== requiredKeys.length || keys.some((key) => !requiredKeys.includes(key))) return;
    switchHidden();
  };

  useEffect(() => {
    bindKeydown();
    bindKeyup();

    setHidden(ComponentUtil.isHidden());

    return () => {
      unbindKeydown();
      unbindKeyup();
    };
  }, []);

  return (
    <div>
      <button className={"button buttons hidden-switch-button"} style={{float: "right"}} title={"隐藏原文"}
              onClick={switchHidden}>
        <i className={`pi pi-fw pi-eye${isHidden ? '' : '-slash'}`}/>
      </button>
    </div>
  );
}