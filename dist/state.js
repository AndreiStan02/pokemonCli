import { createInterface } from "readline";
import { getCommands } from "./cliCommands.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    });
    const commands = getCommands();
    return { rl: rl, commands: commands };
}
