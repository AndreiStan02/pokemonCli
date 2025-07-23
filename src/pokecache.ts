export type CacheEntry<T> = {
    createdAt: number,
    val: T,
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number){
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T){
    this.#cache.set(key, {createdAt: Date.now(), val: val});
  }

  get<T>(key: string){
    const value = this.#cache.get(key)
    if(value){
        return value.val;
    }
  }

  #reap(){
    for(const [key, entry] of this.#cache){
        if(entry.createdAt < Date.now() - this.#interval){
            this.#cache.delete(key);
        }
    }
  }

  #startReapLoop(){
    this.#reapIntervalId = setInterval(this.#reap.bind(this),this.#interval);
  }

  stopReapLoop(){
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}