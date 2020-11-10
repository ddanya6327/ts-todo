import { Priority, PRIORITY_NAME_MAP } from "./types";

export default class Todo {
  static nextId: number = 1;
  constructor(
    private title: string,
    private priority: Priority,
    public id: number = Todo.nextId
  ) {
    Todo.nextId++;
  }
  toString() {
    return `${this.id}) 제목: ${this.title} (우선순위: ${
      PRIORITY_NAME_MAP[this.priority]
    })`;
  }
}
