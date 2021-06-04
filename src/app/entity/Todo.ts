import { generate } from 'shortid';

export class Todo {
  constructor(
    public value: string,
    public isDone: boolean = false,
    public id: string = generate(),
  ) {}
}
