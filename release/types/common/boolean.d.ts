import { Format } from '../format';
/**
 * Boolean validator class.
 */
export declare class Boolean implements Format {
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
