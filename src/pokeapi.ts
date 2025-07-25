import { PokemonClient } from 'pokenode-ts';
import { Cache } from './pokecache.js';

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(60000);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const val = this.cache.get(url);
    if (val){
        return val;
    }
    try {
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`${resp.status} ${resp.statusText}`);
        }

        const locations: ShallowLocations = await resp.json();
        this.cache.add(url, locations);
        return locations;
    } catch (e) {
        throw new Error(`Error fetching locations: ${(e as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const val = this.cache.get(fullURL);
    if (val){
        return val;
    }
    try{
        const ans = await fetch(fullURL);
        if (!ans.ok){
            throw new Error(`${ans.status} ${ans.statusText}`);
        }
        const location: Location = await ans.json();
        return location;
    } catch (err) {
        throw new Error(`Error fetching location: ${(err as Error).message}`);
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const fullURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const val = this.cache.get(fullURL);
    if(val){
      return val;
    }
    try {
      const ans = await fetch(fullURL);
      if(!ans.ok){
        throw new Error(`${ans.status} ${ans.statusText}`);
      }
      const pokemon: Pokemon = await ans.json();
      return pokemon;
    } catch (err) {
      throw new Error(`Error fetching pokemon: ${(err as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms: {
    name: string;
    url: string
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
      level_learned_at: number;
      order: number;
    }[];
  }[];
  past_types: {
    generation: {
      name: string;
      url: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }[];
  }[];
  past_abilities: {
    generation: {
      name: string;
      url: string;
    };
    abilities: {
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }[];
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
  };
  cries: {
    latest: string;
    legacy: string;
  };
  species: {
    name: string;
    url: string;
  };
  stats: {
    stat: {
      name: string;
      url: string;
    };
    effort: number;
    base_stat: number;
  }[];
  types: {
    slot: number;
      type: {
        name: string;
        url: string;
      };
  }[];
};