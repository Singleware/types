/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from '../format';
/**
 * Enumeration validator class.
 */
export declare class Enumeration extends Class.Null implements Format {
    /**
     * Expected entries.
     */
    private entries;
    /**
     * Default constructor.
     * @param entries Expected entries.
     */
    constructor(...entries: string[]);
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
