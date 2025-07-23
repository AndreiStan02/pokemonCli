export function startREPL(state) {
    state.rl.prompt();
    state.rl.on("line", (input) => {
        const words = cleanInput(input);
        try {
            state.commands[words[0]].callback(state);
        }
        catch (err) {
            console.log("Unknown command");
        }
        state.rl.prompt();
    });
}
export function cleanInput(input) {
    if (input === "") {
        return [];
    }
    const res = input.trim().split(/\s+/);
    return res;
}
