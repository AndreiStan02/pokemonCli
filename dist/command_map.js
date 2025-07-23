export async function commandMapForward(state) {
    const locations = await state.api.fetchLocations(state.nextLocation);
    state.nextLocation = locations.next;
    state.prevLocation = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
export async function commandMapBackward(state) {
    const locations = await state.api.fetchLocations(state.prevLocation);
    state.nextLocation = locations.next;
    state.prevLocation = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
