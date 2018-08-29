/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Format } from './format';

/**
 * Type declaration for callable members.
 */
export type Callable<T = any> = Class.Callable<T>;

/**
 * Type declaration for class constructors.
 */
export type Constructor<T extends Object = any> = Class.Constructor<T>;

/**
 * Type declaration for decorators of classes and members arguments.
 */
export type ArgumentDecorator = (type: any, property?: PropertyKey, descriptor?: PropertyDescriptor) => any;

/**
 * Type declaration for validator lists.
 */
export type ValidatorList = (Format | Format[])[];
