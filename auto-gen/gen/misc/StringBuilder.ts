export class StringBuilder {
  private _result = ''
  private _isFirstLine: boolean;

  constructor(str?: string) {
    this._isFirstLine = true;
    if (!str) return;
    this._result = str;
  }

  appendLine(line: string) {
    const enterCode = this._isFirstLine ? '' : '\n'
    this._result += (enterCode + line);
    if (this._isFirstLine) this._isFirstLine = false;
  }

  insertStart(content: string) {
    const enterCode = this._isFirstLine ? '' : '\n'
    this._result = content + enterCode + this._result;
    if (this._isFirstLine) this._isFirstLine = false;
  }

  insertEnd(content: string) {
    const enterCode = this._isFirstLine ? '' : '\n'
    this._result += (enterCode + content);
    if (this._isFirstLine) this._isFirstLine = false;
  }

  toString() {
    return this._result;
  }
}