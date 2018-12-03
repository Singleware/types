/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { GenericDecorator } from './types';
import { Format } from './format';
/**
 * Provide decorators and methods to validate types at runtime.
 */
export declare class Helper extends Class.Null {
    /**
     * Validates the specified parameters list according to the given validators.
     * @param property Property name.
     * @param validators List of validators.
     * @param parameters Parameters to be validated.
     * @throws Throws a type error when the validation fails.
     */
    private static validateParameters;
    /**
     * Wrapper to make the specified member to be validated with the given validators.
     * @param property Property name.
     * @param callback Property callback.
     * @param validators List of validators.
     * @returns Returns the wrapped callback.
     */
    private static validatorWrapper;
    /**
     *  Wraps the specified member with the given validators to ensure its types at runtime.
     * @param property Property name.
     * @param validators List of validators.
     * @param descriptor Property descriptor.
     * @returns Returns the specified property descriptor.
     * @throws Throws an type error when the property is not a method or property setter.
     */
    private static wrapMember;
    /**
     * Wraps the specified class with the given validators to ensure its types at runtime.
     * @param type Class type.
     * @param validators List of validators.
     * @returns Returns the wrapped class.
     */
    private static wrapClass;
    /**
     * Decorates the specified member to validate its types at runtime.
     * @param validators Specify one validator per member argument.
     * @returns Returns the decorator method.
     */
    static Validate(...validators: Format[]): GenericDecorator;
}
