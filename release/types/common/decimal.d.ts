import { Pattern } from './pattern';
/**
 * Decimal validator class.
 */
export declare class Decimal extends Pattern {
    /**
     * Min decimal value.
     */
    private min?;
    /**
     * Max decimal value.
     */
    private max?;
    /**
     * Default constructor.
     * @param min Min decimal value.
     * @param max Max decimal value.
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
