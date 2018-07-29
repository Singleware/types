import { Format } from '../format';
/**
 * Type validator class.
 */
export declare class TypeOf implements Format {
    /**
     * Expected type.
     */
    private type;
    /**
     * Default constructor.
     * @param type Expected type.
     */
    constructor(type: string);
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
