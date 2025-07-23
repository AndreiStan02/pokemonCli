import { createInterface } from "readline/promises";
import { getCommands } from "./cliCommands.js";

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    })
    
    rl.prompt();

    const commands = getCommands();
    
    rl.on("line", (input) => {
        const words = cleanInput(input);
        try{
            commands[words[0]].callback(commands);
        } catch (err){
            console.log("Unknown command");
        }
        rl.prompt();
    })
}

export function cleanInput(input: string): string[]{
    if (input === ""){
        return [];
    }
    const res = input.trim().split(/\s+/);
    return res;
}