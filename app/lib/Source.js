// @flow
export const WORKING_VERSION_SOURCE_NAME = "Working Version";

/**
 * A source of text witnesses.
 *
 * Usually a collection e.g. Derge
 */
export default class Source {
    id: number;
    name: string;
    isBase: boolean;
    isWorking: boolean;

    /**
     * Create Source instance.
     * @param id - id from API
     * @param name - name of the source
     */
    constructor(
        id: number,
        name: string,
        isBase: boolean = false,
        isWorking: boolean = false
    ) {
        this.id = id;
        this.name = name;
        this.isBase = isBase;
        this.isWorking = isWorking;
    }
}
