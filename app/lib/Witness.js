// @flow
import Source from "lib/Source";
import Text from "lib/Text";

/**
 * Represents a printed version of a text.
 */
export default class Witness {
    id: number;
    text: Text;
    source: Source;
    content: string | null;
    isBase: boolean;
    isWorking: boolean;
    revision: number;
    properties: { [string]: any } | null;

    /**
     * Create new Witness instance.
     *
     * Witnesses will usually belong to a collection, which
     * is represented by `source`. e.g. Derge.
     *
     * Only the working witness should be expected to have content. Other
     * witnesses are represented by annotations to the working text that
     * contain any differences.
     *
     * @param {number} id - The id of the witness returned from the API
     * @param {Text} text - The text this is a witness of
     * @param {Source} source - The source of this witness
     * @param {string|null} content - The content of the witness
     * @param {boolean} isBase - Whether this is the base witness for this text
     * @param {boolean} isWorking - Whether this is the working edition
     * @param {number} revision - The revision of this witness
     * @param {Object} properties - Miscellaneous properties
     */
    constructor(
        id: number,
        text: Text,
        source: Source,
        content: string | null = null,
        isBase: boolean = false,
        isWorking: boolean = false,
        revision: number = 1,
        properties: {} | null = null
    ) {
        this.id = id;
        this.text = text;
        this.source = source;
        this.content = content;
        this.isBase = isBase;
        this.isWorking = isWorking;
        this.revision = revision;
        this.properties = properties;
    }
}
