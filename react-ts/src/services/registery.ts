class ServiceRegistry {
    #services: Record<string, unknown> = {};

    get<T>(key: string): T {
        const instance = this.#services[key];

        if (instance === undefined) {
            throw new Error(`Service @ [${key}] not registered.`);
        }

        return instance as T;
    }

    register<T>(key: string, instance: T) {
        this.#services[key] = instance;
    }
}

const serviceRegistry = new ServiceRegistry();

export default serviceRegistry;
