import { Cache } from './pokecache.js';
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(60000);
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const val = this.cache.get(url);
        if (val) {
            return val;
        }
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            const locations = await resp.json();
            this.cache.add(url, locations);
            return locations;
        }
        catch (e) {
            throw new Error(`Error fetching locations: ${e.message}`);
        }
    }
    async fetchLocation(locationName) {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const val = this.cache.get(fullURL);
        if (val) {
            return val;
        }
        try {
            const ans = await fetch(fullURL);
            if (!ans.ok) {
                throw new Error(`${ans.status} ${ans.statusText}`);
            }
            const location = await ans.json();
            return location;
        }
        catch (err) {
            throw new Error(`Error fetching location: ${err.message}`);
        }
    }
    async fetchPokemon(pokemonName) {
        const fullURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const val = this.cache.get(fullURL);
        if (val) {
            return val;
        }
        try {
            const ans = await fetch(fullURL);
            if (!ans.ok) {
                throw new Error(`${ans.status} ${ans.statusText}`);
            }
            const pokemon = await ans.json();
            return pokemon;
        }
        catch (err) {
            throw new Error(`Error fetching pokemon: ${err.message}`);
        }
    }
}
