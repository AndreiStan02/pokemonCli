import { createInterface } from "readline/promises";
import { getCommands } from "./cliCommands.js";
import { State } from "./state.js";

export function startREPL(state: State) {
    state.rl.prompt();
    
    state.rl.on("line", (input) => {
        const words = cleanInput(input);
        try{
            state.commands[words[0]].callback(state);
        } catch (err){
            console.log("Unknown command");
        }
        state.rl.prompt();
    })
}

export function cleanInput(input: string): string[]{
    if (input === ""){
        return [];
    }
    const res = input.trim().split(/\s+/);
    return res;
}