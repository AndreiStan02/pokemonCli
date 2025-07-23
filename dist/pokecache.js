export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, { createdAt: Date.now(), val: val });
    }
    get(key) {
        const value = this.#cache.get(key);
        if (value) {
            return value.val;
        }
    }
    #reap() {
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap.bind(this), this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
