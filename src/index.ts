import { waitForInput } from "./Input";
import Todo from "./Todo";
import { AppState, Priority } from "./types";
import { Command, CommandPrintTodos } from "./Command";

const commands: Command[] = [new CommandPrintTodos()];

async function main() {
  const state: AppState = {
    todos: [
      new Todo("test1", Priority.High),
      new Todo("test2", Priority.Medium),
      new Todo("test3", Priority.Low),
    ],
  };
  while (true) {
    console.clear();
    for (const command of commands) {
      console.log(command.toString());
    }
    console.log();
    const key = await waitForInput("input command: ");
    console.clear();
    const command = commands.find((item) => item.key === key);
    if (command) {
      await command.run(state);
    }
    console.log("key: ", key);
  }
}
main();
