export class Todo {
  private _message: string;
  private _isDone: boolean;

  constructor(message: string, done: boolean) {
    this._message = message;
    this._isDone = done;
  }


  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(value: boolean) {
    this._isDone = value;
  }
}
