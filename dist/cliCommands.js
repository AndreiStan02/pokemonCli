import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exist the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Command help",
            callback: commandHelp,
        }
    };
}
