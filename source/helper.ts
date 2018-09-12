/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Callable, Constructor, GenericDecorator } from './types';
import { Format } from './format';

/**
 * Provide decorators and methods to validate type rules at runtime.
 */
@Class.Describe()
export class Helper {
  /**
   * Validates the specified arguments list according to the given validators.
   * @param property Property name.
   * @param validators List of validators.
   * @param args Arguments to be validated.
   * @throws Throws a type error when the validation fails.
   */
  @Class.Private()
  private static validateArguments(property: string, validators: Format[], args: ArrayLike<any>): void {
    for (let i = 0; i < validators.length; ++i) {
      const format = validators[i];
      if (!format.validate(args[i])) {
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
    const validation = (args: any[]) => this.validateArguments(property, validators, args);
    return function(this: Object, ...args: any[]): any {
      validation(args);
      return callback.call(this, ...args);
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
      construct: (target: Constructor, args: ArrayLike<any>, original: Object): Object => {
        this.validateArguments(type.name, validators, args);
        return Reflect.construct(target, args, original);
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
