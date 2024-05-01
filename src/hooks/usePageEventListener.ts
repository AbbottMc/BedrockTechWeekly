import {EventEmitter} from '@site/src/event/EventEmitter'

const eventEmitter = new EventEmitter();

export interface PageEventOptions {
  name: string;
  listener?: (...args: any[]) => void;
}

export function usePageEventListener(options: PageEventOptions) {
  const addEventListener = () => {
    if (options.listener) eventEmitter.on(options.name, options.listener);
  };

  const removeEventListener = () => {
    if (options.listener) eventEmitter.off(options.name, options.listener);
  }

  const triggerEvent = (...args: any[]) => {
    eventEmitter.emit(options.name, ...args);
  }

  return [addEventListener, removeEventListener, triggerEvent];
}