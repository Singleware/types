/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { ArgumentDecorator, ValidatorList } from './types';
/**
 * Provide decorators and methods to validate type rules at runtime.
 */
export declare namespace Helper {
    /**
     * Decorates the specified member to validate its types rules at runtime.
     * @param validators List of validators.
     * @returns Returns the decorator method.
     */
    function Validate(...validators: ValidatorList): ArgumentDecorator;
}
