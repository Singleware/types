/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Format } from './format';
import * as Common from './common';
export import Common = Common;
import { Format } from './format';
import { GenericDecorator } from './types';
/**
 * Decorates the specified member to validate its types at runtime.
 * @param validators Specify one validator per member argument.
 * @returns Returns the decorator method.
 */
export declare const Validate: (...validators: Format[]) => GenericDecorator;
