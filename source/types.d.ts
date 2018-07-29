/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Format } from './format';

/**
 * Type declaration for class constructors.
 */
export type ClassConstructor<T> = new (...parameters: any[]) => T;

/**
 * Type declaration for decorators of classes and members arguments.
 */
export type ArgumentDecorator = (type: any, property?: PropertyKey, descriptor?: PropertyDescriptor) => any;

/**
 * Type declaration for validator lists.
 */
export type ValidatorList = (Format | Format[])[];
