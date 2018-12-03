/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from '../format';
/**
 * String validator class.
 */
export declare class String extends Class.Null implements Format {
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
