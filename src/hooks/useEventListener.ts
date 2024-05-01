export interface EventOptions {
  name: string;
  listener?: (...args: any[]) => void;
}

export function useEventListener(options: EventOptions) {
  const addEventListener = () => {
    if (options.listener) window.addEventListener(options.name, options.listener);
  };

  const removeEventListener = () => {
    if (options.listener) window.removeEventListener(options.name, options.listener);
  }

  return [addEventListener, removeEventListener];
}