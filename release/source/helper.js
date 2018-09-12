"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Provide decorators and methods to validate type rules at runtime.
 */
let Helper = class Helper {
    /**
     * Validates the specified arguments list according to the given validators.
     * @param property Property name.
     * @param validators List of validators.
     * @param args Arguments to be validated.
     * @throws Throws a type error when the validation fails.
     */
    static validateArguments(property, validators, args) {
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
    static validatorWrapper(property, callback, validators) {
        const validation = (args) => this.validateArguments(property, validators, args);
        return function (...args) {
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
    static wrapMember(property, validators, descriptor) {
        if (descriptor.value instanceof Function) {
            descriptor.value = this.validatorWrapper(property, descriptor.value, validators);
        }
        else if (descriptor.set instanceof Function) {
            descriptor.set = this.validatorWrapper(property, descriptor.set, validators);
        }
        else {
            throw new TypeError(`Property '${property}' is not a method or property setter.`);
        }
        return descriptor;
    }
    /**
     * Wraps the specified class with the given validators to ensure its types at runtime.
     * @param type Class type.
     * @param validators List of validators.
     * @returns Returns the wrapped class.
     */
    static wrapClass(type, validators) {
        return new Proxy(type, {
            construct: (target, args, original) => {
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
    static Validate(...validators) {
        return (scope, property, descriptor) => {
            if (property) {
                return this.wrapMember(property, validators, descriptor || {});
            }
            return this.wrapClass(scope, validators);
        };
    }
};
__decorate([
    Class.Private()
], Helper, "validateArguments", null);
__decorate([
    Class.Private()
], Helper, "validatorWrapper", null);
__decorate([
    Class.Private()
], Helper, "wrapMember", null);
__decorate([
    Class.Private()
], Helper, "wrapClass", null);
__decorate([
    Class.Public()
], Helper, "Validate", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
