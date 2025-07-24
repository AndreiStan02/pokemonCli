export async function commandPokedex(state) {
    console.log(`Your Pokedex:`);
    for (const pokemon of Object.values(state.pokedex)) {
        console.log(` - ${pokemon.name}`);
    }
}
