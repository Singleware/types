import { Format } from '../format';
/**
 * String validator class.
 */
export declare class String implements Format {
    /**
     * Min string length.
     */
    private min?;
    /**
     * Max string length.
     */
    private max?;
    /**
     * Default constructor.
     * @param min Min string length.
     * @param max Max string length.
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
