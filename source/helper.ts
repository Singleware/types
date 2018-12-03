/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Callable, Constructor, GenericDecorator } from './types';
import { Format } from './format';

/**
 * Provide decorators and methods to validate types at runtime.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Validates the specified parameters list according to the given validators.
   * @param property Property name.
   * @param validators List of validators.
   * @param parameters Parameters to be validated.
   * @throws Throws a type error when the validation fails.
   */
  @Class.Private()
  private static validateParameters(property: string, validators: Format[], parameters: any[]): void {
    for (let i = 0; i < validators.length; ++i) {
      const format = validators[i];
      if (!format.validate(parameters[i])) {
        throw new TypeError(`Validation of '${property}' with ${format.name} has been failed.`);
      }
    }
  }

  /**
   * Wrapper to make the specified member to be validated with the given validators.
   * @param property Property name.
   * @param callback Property callback.
   * @param validators List of validators.
   * @returns Returns the wrapped callback.
   */
  @Class.Private()
  private static validatorWrapper(property: string, callback: Callable, validators: Format[]): Callable {
    const validation = (parameters: any[]) => this.validateParameters(property, validators, parameters);
    return function(this: Object, ...parameters: any[]): any {
      validation(parameters);
      return callback.call(this, ...parameters);
    };
  }

  /**
   *  Wraps the specified member with the given validators to ensure its types at runtime.
   * @param property Property name.
   * @param validators List of validators.
   * @param descriptor Property descriptor.
   * @returns Returns the specified property descriptor.
   * @throws Throws an type error when the property is not a method or property setter.
   */
  @Class.Private()
  private static wrapMember(property: string, validators: Format[], descriptor: PropertyDescriptor): PropertyDescriptor {
    if (descriptor.value instanceof Function) {
      descriptor.value = this.validatorWrapper(property, descriptor.value, validators);
    } else if (descriptor.set instanceof Function) {
      descriptor.set = this.validatorWrapper(property, descriptor.set, validators);
    } else {
      throw new TypeError(`Property '${<string>property}' is not a method or property setter.`);
    }
    return descriptor;
  }

  /**
   * Wraps the specified class with the given validators to ensure its types at runtime.
   * @param type Class type.
   * @param validators List of validators.
   * @returns Returns the wrapped class.
   */
  @Class.Private()
  private static wrapClass(type: Constructor, validators: Format[]): Constructor {
    return new Proxy(type, {
      construct: (target: Constructor, args: any[], receiver: any): Object => {
        this.validateParameters(type.name, validators, args);
        return Reflect.construct(target, args, receiver);
      }
    });
  }

  /**
   * Decorates the specified member to validate its types at runtime.
   * @param validators Specify one validator per member argument.
   * @returns Returns the decorator method.
   */
  @Class.Public()
  public static Validate(...validators: Format[]): GenericDecorator {
    return (scope: Object, property?: PropertyKey, descriptor?: PropertyDescriptor): any => {
      if (property) {
        return this.wrapMember(<string>property, validators, descriptor || {});
      }
      return this.wrapClass(<Constructor>scope, validators);
    };
  }
}
