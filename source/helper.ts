/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { ArgumentDecorator, ClassConstructor, ValidatorList } from './types';
import { Format } from './format';

/**
 * Provide decorators and methods to validate type rules at runtime.
 */
export namespace Helper {
  /**
   * Safe place to map all class instances data.
   */
  const vault: WeakMap<Object, any> = new WeakMap();

  /**
   * Test whether the specified value is valid for the given validators.
   * @param value Value to be validated.
   * @param validators List of possible validators.
   * @returns Returns true when one validator passes, false when all validators fail.
   */
  function testValidators(value: any, validators: Format[]): boolean {
    for (const validator of validators) {
      if (validator.validate(value)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Validate the list of specified parameters according to the given validators.
   * @param property Property name.
   * @param parameters Parameters to be validated.
   * @param validators List of validators.
   * @throws Throws a type error when the validation fails.
   */
  function validateParameters(property: PropertyKey, parameters: any[], validators: ValidatorList): void {
    for (let i = 0; i < validators.length; ++i) {
      const formats = <Format[]>(validators[i] instanceof Array ? validators[i] : [validators[i]]);
      if (!testValidators(parameters[i], formats)) {
        const names = [];
        for (const format of formats) {
          names.push(`'${format.name}'`);
        }
        throw new TypeError(`Validation of '${property as string}' with ${names.join(', ')} has been failed.`);
      }
    }
  }

  /**
   * Creates a new member with getter and setter to manage and hide class properties.
   * @param property Property name.
   * @param value Property value.
   * @returns Returns the created property descriptor.
   */
  function createMember(property: PropertyKey, value: any): PropertyDescriptor {
    let data;
    return {
      get: function(): any {
        return (data = vault.get(this)) ? data[property] : value;
      },
      set: function(value: any) {
        if (!(data = vault.get(this))) {
          vault.set(this, (data = {}));
        }
        data[property] = value;
      }
    };
  }

  /**
   * Wrapper to set the specified property descriptor to be validated with the given validators.
   * @param type Property type.
   * @param property Property name.
   * @param validators List of validators.
   * @param descriptor Property descriptor.
   */
  function wrapAsValidator(type: string, property: PropertyKey, validators: ValidatorList, descriptor: PropertyDescriptor): void {
    const callback = (<any>descriptor)[type];
    (<any>descriptor)[type] = function validatedCall(this: any, ...parameters: any[]): any {
      validateParameters(property, parameters, validators);
      return callback.call(this, ...parameters);
    };
  }

  /**
   * Wraps the specified constructor with the given validators to ensure its type rules at runtime.
   * @param type Class type.
   * @param validators List of validators.
   * @returns Returns a new constructor proxy.
   */
  function wrapConstructor<T extends Object>(type: ClassConstructor<T>, validators: ValidatorList): ClassConstructor<T> {
    return new Proxy(type, {
      construct: <T extends Object>(type: ClassConstructor<T>, parameters: any[], target: any): T => {
        validateParameters(type.name, parameters, validators);
        return Reflect.construct(type, parameters, target);
      }
    });
  }

  /**
   * Wraps the specified descriptor with the given validators to ensure its type rules at runtime.
   * @param property Property name.
   * @param validators List of validators.
   * @param descriptor Property descriptor.
   * @returns Returns the specified property descriptor.
   */
  function wrapMember(property: PropertyKey, validators: ValidatorList, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.configurable = false;
    if (descriptor.value instanceof Function) {
      descriptor.writable = false;
      descriptor.enumerable = false;
      wrapAsValidator('value', property, validators, descriptor);
    } else {
      descriptor.enumerable = descriptor.get instanceof Function;
      if (descriptor.set instanceof Function) {
        wrapAsValidator('set', property, validators, descriptor);
      }
    }
    return descriptor;
  }

  /**
   * Decorates the specified member to validate its types rules at runtime.
   * @param validators List of validators.
   * @returns Returns the decorator method.
   */
  export function Validate(...validators: ValidatorList): ArgumentDecorator {
    return <T extends Object>(type: any, property?: PropertyKey, descriptor?: PropertyDescriptor): any => {
      if (property) {
        return wrapMember(property, validators, descriptor || createMember(property, type[property]));
      }
      return wrapConstructor<T>(type, validators);
    };
  }
}
