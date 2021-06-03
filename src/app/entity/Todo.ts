export class Todo {
  private _value: string;
  private _isDone: boolean;

  constructor(message: string, done: boolean) {
    this._value = message;
    this._isDone = done;
  }


  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(value: boolean) {
    this._isDone = value;
  }
}
