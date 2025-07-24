import { createInterface } from "readline";
import { getCommands } from "./cliCommands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    });
    const commands = getCommands();
    const api = new PokeAPI();
    return { rl: rl, api: api, nextLocation: "", prevLocation: "", commands: commands, pokedex: {} };
}
