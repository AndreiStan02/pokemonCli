import { createInterface, type Interface } from "readline";
import { getCommands } from "./cliCommands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {
    rl: Interface,
    api: PokeAPI,
    nextLocation: string,
    prevLocation: string,
    commands: Record<string, CLICommand>,
}

export function initState(){
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    })
            
    const commands = getCommands();

    const api = new PokeAPI();

    return {rl: rl, api:api, nextLocation: "", prevLocation: "", commands: commands};
}