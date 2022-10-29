// @flow
import uuidV4 from "uuid/v4";
import Witness from "lib/Witness";
import User from "lib/User";

export const ANNOTATION_TYPES: { [string]: string } = {
    variant: "V",
    note: "N",
    marker: "M",
    pageBreak: "P",
    lineBreak: "L",
    question: "Q",
};

export const TEMPORARY_TYPE: string = "T";

export function getNaturalId(
    type: string,
    creatorUserId: number | null,
    creatorWitnessId: number,
    workingWitnessId: number,
    start: number,
    length: number
) {
    //const creatorType = (userCreated) ? 'U' : 'W';
    return [
        type,
        creatorUserId,
        creatorWitnessId,
        workingWitnessId,
        start,
        length,
    ].join("-");
}

export function getUniqueId() {
    return uuidV4();
}

export type AnnotationUniqueId = string;

export default class Annotation {
    _id: number | null;
    witness: Witness;
    start: number;
    length: number;
    content: string;
    creatorWitness: Witness;
    creatorUser: User | null;
    type: string;
    _uniqueId: AnnotationUniqueId | null;
    basedOn: Annotation | null;
    _isSaved: boolean;
    modified: ?Date;

    /**
     * Text annotation
     * @param {number|null} id
     * @param {Witness} workingWitness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {string} [type=ANNOTATION_TYPES.variant] - one of ANNOTATION_TYPES
     * @param {Witness} creatorWitness
     * @param {User|null} creatorUser
     * @param {string|null} [uniqueId=null] - UUID4. Generates a new one if not provided.
     * @param {Annotation|null} [basedOn=null] - The annotation this is based on (if any).
     */
    constructor(
        id: number | null,
        workingWitness: Witness,
        start: number,
        length: number,
        content: string | null,
        type: string = ANNOTATION_TYPES.variant,
        creatorWitness: Witness,
        creatorUser: User | null = null,
        uniqueId: AnnotationUniqueId | null = null,
        basedOn: Annotation | null = null
    ) {
        this._id = id;
        this.witness = workingWitness;
        if (!workingWitness.isWorking) {
            //console.warn("Set workingWitness that is not a working witness: %o, %o", this, workingWitness);
        }
        this.start = Number(start);
        this.length = Number(length);
        if (!content) content = "";
        this.content = content;
        this.creatorWitness = creatorWitness;
        this.creatorUser = creatorUser;
        this.type = type;
        this._uniqueId = uniqueId;
        this.basedOn = basedOn;
        this._isSaved = false;
    }

    get id(): number | null {
        return this._id;
    }

    set id(newId: string | number) {
        this._id = Number(newId);
    }

    get naturalId(): string {
        const creatorWitnessId = this.creatorWitness
            ? this.creatorWitness.id
            : 0;
        const creatorUserId = this.creatorUser ? this.creatorUser.id : 0;
        const witnessId = this.witness ? this.witness.id : 0;
        return getNaturalId(
            this.type,
            creatorUserId,
            creatorWitnessId,
            witnessId,
            this.start,
            this.length
        );
    }

    get uniqueId(): string {
        if (this._uniqueId === null) {
            this._uniqueId = getUniqueId();
        }
        return this._uniqueId;
    }

    set uniqueId(newUniqueId: AnnotationUniqueId) {
        this._uniqueId = newUniqueId;
    }

    get isTemporary(): boolean {
        return false;
    }

    toString(): string {
        return [this.id, this.start, this.length, this.content].join("_");
    }

    get creator(): Witness | User {
        if (this.creatorUser) {
            return this.creatorUser;
        } else {
            return this.creatorWitness;
        }
    }

    getSourceName(): string {
        if (this.creatorUser) {
            return this.creatorUser.name;
        } else {
            // is witness
            return this.creatorWitness.source.name;
        }
    }

    get contentEnd(): number {
        let end = this.start;
        if (this.content && this.content.length > 0)
            end += this.content.length - 1;
        return end;
    }

    get end(): number {
        let end = this.start;
        if (this.length > 0) end += this.length - 1;
        return end;
    }

    isWithinRange(start: number, length: number): boolean {
        const rangeEnd = start + length - 1;
        if (
            (this.start <= start &&
                this.contentEnd >= start &&
                this.contentEnd <= rangeEnd) ||
            (this.start >= start && this.contentEnd <= rangeEnd) ||
            (this.start <= rangeEnd && this.contentEnd >= rangeEnd)
        ) {
            return true;
        } else {
            return false;
        }
    }

    get isVariant(): boolean {
        return this.type === ANNOTATION_TYPES.variant;
    }

    get isInsertion(): boolean {
        return this.isVariant && Number(this.length) === 0;
    }

    get isDeletion(): boolean {
        return (
            !this.isInsertion &&
            this.isVariant &&
            (!this.content || this.content.length === 0)
        );
    }

    isType(type: string) {
        return this.type === type;
    }

    get userCreated(): boolean {
        return !(this.creatorUser === null);
    }

    get isSaved(): boolean {
        return this._isSaved;
    }

    set isSaved(newIsSaved: boolean) {
        this._isSaved = newIsSaved;
    }

    save() {
        this._isSaved = true;
    }

    get isBaseAnnotation(): boolean {
        return !this.userCreated && this.creatorWitness.isBase;
    }

    get isWorkingAnnotation(): boolean {
        return !this.userCreated && this.creatorWitness.isWorking;
    }
}

/**
 * Intended to be used when editing/adding an annotation.
 */
export class TemporaryAnnotation extends Annotation {
    /**
     *
     * @param {Annotation} basedOn - The annotation this is amending. Set to null if new.
     * @param {Witness} witness
     * @param {number} start
     * @param {number} length
     * @param {string} content
     * @param {string} type - one of ANNOTATION_TYPES
     * @param {Witness|User|null} creatorWitness
     * @param {string|null} uniqueId - UUID4
     */
    constructor(
        basedOn: Annotation | null,
        witness: Witness,
        start: number,
        length: number,
        content: string | null,
        type: string = ANNOTATION_TYPES.variant,
        creatorWitness: Witness,
        creatorUser: User | null = null,
        uniqueId: string | null = null
    ) {
        super(
            null,
            witness,
            start,
            length,
            content,
            type,
            creatorWitness,
            creatorUser,
            uniqueId
        );
        this.basedOn = basedOn;
    }

    get isTemporary(): boolean {
        return true;
    }
}
