export async function commandCatch(state, pokemonName) {
    const pokemon = await state.api.fetchPokemon(pokemonName);
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    const difficulty = pokemon.base_experience / 400;
    const randomness = (Math.random() * 0.2) - 0.1;
    let catchChance = 1 - difficulty + randomness;
    catchChance = Math.max(0, Math.min(1, catchChance));
    const roll = Math.random();
    const caught = roll < catchChance;
    if (caught) {
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
    }
    else {
        console.log(`${pokemon.name} escaped!`);
    }
}
