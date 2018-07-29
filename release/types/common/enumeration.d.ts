import { Format } from '../format';
/**
 * Enumeration validator class.
 */
export declare class Enumeration implements Format {
    /**
     * Expected entries.
     */
    private entries;
    /**
     * Default constructor.
     * @param entries Expected entries.
     */
    constructor(...entries: string[]);
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
