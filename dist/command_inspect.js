export async function commandInspect(state, pokemonName) {
    try {
        const pokemon = state.pokedex[pokemonName];
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:");
        for (let stat of pokemon.stats) {
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log("Types:");
        for (let type of pokemon.types) {
            console.log(`  - ${type.type.name}`);
        }
    }
    catch (err) {
        throw new Error("You didnt caught that pokemon yet!");
    }
}
