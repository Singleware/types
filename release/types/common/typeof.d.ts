/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from '../format';
/**
 * Type validator class.
 */
export declare class TypeOf extends Class.Null implements Format {
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
