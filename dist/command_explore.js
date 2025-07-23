export async function commandExplore(state, location) {
    const locationData = await state.api.fetchLocation(location);
    console.log(`Exploring ${location}...`);
    console.log("Found Pokemon:");
    for (const loc of locationData.pokemon_encounters) {
        console.log(` - ${loc.pokemon.name}`);
    }
}
