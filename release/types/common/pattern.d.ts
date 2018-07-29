import { Format } from '../format';
/**
 * Pattern validator class.
 */
export declare class Pattern implements Format {
    /**
     * Expected pattern.
     */
    private pattern;
    /**
     * Pattern alias name.
     */
    private alias;
    /**
     * Default constructor.
     * @param pattern Expected pattern.
     * @param alias Pattern alias name.
     */
    constructor(pattern: RegExp, alias?: string);
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
