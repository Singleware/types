import { Format } from '../format';
/**
 * Number validator class.
 */
export declare class Number implements Format {
    /**
     * Min value.
     */
    private min?;
    /**
     * Max value.
     */
    private max?;
    /**
     * Default constructor.
     * @param min Min value.
     * @param max Max value.
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
