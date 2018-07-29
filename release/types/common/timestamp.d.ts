import { Pattern } from './pattern';
/**
 * Timestamp ISO 8601 validator class.
 */
export declare class Timestamp extends Pattern {
    /**
     * Min timestamp value.
     */
    private min?;
    /**
     * Max timestamp value.
     */
    private max?;
    /**
     * Determines whether the specified timestamp is the range.
     * @param timestamp Timestamp to be tested.
     * @return Returns true when the timestamp is between the range, false otherwise.
     */
    private testRange;
    /**
     * Default constructor.
     * @param min Min date value.
     * @param max Max date value.
     */
    constructor(min?: Date, max?: Date);
    /**
     * Validator name.
     */
    readonly name: string;
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data: any): boolean;
}
