/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from '../format';
/**
 * Validation group class.
 */
export declare class Group extends Class.Null implements Format {
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
