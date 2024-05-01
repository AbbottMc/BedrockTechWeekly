import {usePageEventListener} from '@site/src/hooks/usePageEventListener'

export class ComponentUtil {
  static isHidden() {
    const isHiddenStr = localStorage.getItem('isHidden') ?? 'true';
    return JSON.parse(isHiddenStr);
  }

  static setHidden(isHidden: boolean) {
    localStorage.setItem('isHidden', String(isHidden));
  }

  static switchHidden() {
    const isHidden = !this.isHidden();
    const trigger = usePageEventListener({name: 'hiddenSwitch'})[2];
    this.setHidden(isHidden);
    trigger(isHidden);
  }
}