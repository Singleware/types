import { Pattern } from './pattern';
/**
 * Integer validator class.
 */
export declare class Integer extends Pattern {
    /**
     * Min integer value.
     */
    private min?;
    /**
     * Max integer value.
     */
    private max?;
    /**
     * Default constructor.
     * @param min Min integer value.
     * @param max Max Integer value.
     */
    constructor(min?: number, max?: number);
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
