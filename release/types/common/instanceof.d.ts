import { ClassConstructor } from '../types';
import { Format } from '../format';
/**
 * Instance validator class.
 */
export declare class InstanceOf implements Format {
    /**
     * Expected type.
     */
    private type;
    /**
     * Default constructor.
     * @param type Expected type.
     */
    constructor(type: ClassConstructor<any>);
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
