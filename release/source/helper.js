"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provide decorators and methods to validate type rules at runtime.
 */
var Helper;
(function (Helper) {
    /**
     * Safe place to map all class instances data.
     */
    const vault = new WeakMap();
    /**
     * Test whether the specified value is valid for the given validators.
     * @param value Value to be validated.
     * @param validators List of possible validators.
     * @returns Returns true when one validator passes, false when all validators fail.
     */
    function testValidators(value, validators) {
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
    function validateParameters(property, parameters, validators) {
        for (let i = 0; i < validators.length; ++i) {
            const formats = (validators[i] instanceof Array ? validators[i] : [validators[i]]);
            if (!testValidators(parameters[i], formats)) {
                const names = [];
                for (const format of formats) {
                    names.push(`'${format.name}'`);
                }
                throw new TypeError(`Validation of '${property}' with ${names.join(', ')} has been failed.`);
            }
        }
    }
    /**
     * Creates a new member with getter and setter to manage and hide class properties.
     * @param property Property name.
     * @param value Property value.
     * @returns Returns the created property descriptor.
     */
    function createMember(property, value) {
        let data;
        return {
            get: function () {
                return (data = vault.get(this)) ? data[property] : value;
            },
            set: function (value) {
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
    function wrapAsValidator(type, property, validators, descriptor) {
        const callback = descriptor[type];
        descriptor[type] = function validatedCall(...parameters) {
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
    function wrapConstructor(type, validators) {
        return new Proxy(type, {
            construct: (type, parameters, target) => {
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
    function wrapMember(property, validators, descriptor) {
        descriptor.configurable = false;
        if (descriptor.value instanceof Function) {
            descriptor.writable = false;
            descriptor.enumerable = false;
            wrapAsValidator('value', property, validators, descriptor);
        }
        else {
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
    function Validate(...validators) {
        return (type, property, descriptor) => {
            if (property) {
                return wrapMember(property, validators, descriptor || createMember(property, type[property]));
            }
            return wrapConstructor(type, validators);
        };
    }
    Helper.Validate = Validate;
})(Helper = exports.Helper || (exports.Helper = {}));
