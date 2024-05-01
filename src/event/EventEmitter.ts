type Listener = (...args: any[]) => void;

interface EventMap {
  [eventName: string]: Listener[];
}

interface WrappedListener {
  listener: Listener;
}

export class EventEmitter {
  private events: EventMap = {};
  static defaultMaxListeners = 64;
  private _maxListeners = EventEmitter.defaultMaxListeners;

  public on(eventName: string, listener: Listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return this;
  }

  public once(eventName: string, listener: Listener) {
    const wrapper = (...args: any[]) => {
      listener(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
    return this;
  }

  public emit(eventName: string, ...args: any[]) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(listener => {
        listener(...args);
      });
    }
    return this;
  }

  public off(eventName: string, listenerToRemove?: Listener) {
    const listeners = this.events[eventName];
    if (!listeners) {
      return this;
    }
    if (!listenerToRemove) {
      delete this.events[eventName];
      return this;
    }
    const index = listeners.indexOf(listenerToRemove);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      delete this.events[eventName];
    }
    return this;
  }

  public listenerCount(eventName: string) {
    const listeners = this.events[eventName];
    return listeners ? listeners.length : 0;
  }

  public listeners(eventName: string): Listener[] {
    return this.events[eventName] || [];
  }

  public rawListeners(eventName: string): Listener[] {
    return this.listeners(eventName).map(listener => {
      if (typeof listener === 'function') {
        return listener;
      } else {
        return (listener as WrappedListener).listener; // 类型断言
      }
    });
  }

  public prependListener(eventName: string, listener: Listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].unshift(listener);
    return this;
  }

  public prependOnceListener(eventName: string, listener: Listener) {
    const wrapper = (...args: any[]) => {
      listener(...args);
      this.off(eventName, wrapper);
    };
    this.prependListener(eventName, wrapper);
    return this;
  }

  public removeListener(eventName: string, listener: Listener) {
    const listeners = this.events[eventName];
    listeners.splice(listeners.indexOf(listener), 1);
    return this;
  }

  public removeAllListeners(eventName?: string) {
    if (eventName) {
      delete this.events[eventName];
    } else {
      this.events = {};
    }
    return this;
  }

  public getMaxListeners() {
    return this._maxListeners || EventEmitter.defaultMaxListeners;
  }

  public setMaxListeners(n: number) {
    this._maxListeners = n;
    return this;
  }

  public eventNames(): string[] {
    return Object.keys(this.events);
  }
}