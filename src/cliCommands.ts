import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapForward, commandMapBackward } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
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
        },
        map: {
            name: "map",
            description: "Show the next 20 location areas",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Show the previous 20 location areas",
            callback: commandMapBackward,
        },
        explore: {
            name: "explore",
            description: "Explore the wild pokemons of an area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch a new pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect the stats of a pokemon that is in your Pokedex.",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Show all the pokemons registered in your Pokedex.",
            callback: commandPokedex,
        },
    }
}