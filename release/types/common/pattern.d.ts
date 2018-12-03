/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from '../format';
/**
 * Pattern validator class.
 */
export declare class Pattern extends Class.Null implements Format {
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
