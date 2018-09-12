import { Format } from '../format';
/**
 * Validation group class.
 */
export declare class Group implements Format {
    /**
     * Group operation.
     */
    private operation;
    /**
     * Group validators.
     */
    private validators;
    /**
     * Current validator name.
     */
    private current;
    /**
     * Default constructor.
     * @param operation Group operation.
     * @param validators Group validators.
     */
    constructor(operation: 1 | 2, validators: Format[]);
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
    /**
     * 'and' operation name.
     */
    static AND: 1;
    /**
     * 'or' operation name.
     */
    static OR: 2;
}
