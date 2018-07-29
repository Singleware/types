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
 * Number validator class.
 */
let Number = class Number {
    /**
     * Default constructor.
     * @param min Min value.
     * @param max Max value.
     */
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    /**
     * Validator name.
     */
    get name() {
        if (this.min && this.max) {
            return `Number between ${this.min} and ${this.max}`;
        }
        if (this.min) {
            return `Number greater or equals to ${this.min}`;
        }
        if (this.max) {
            return `Number less or equals to ${this.max}`;
        }
        return `Number pattern`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        if (typeof data === 'number') {
            return data >= (this.min || -Infinity) && data <= (this.max || Infinity);
        }
        return false;
    }
};
__decorate([
    Class.Private()
], Number.prototype, "min", void 0);
__decorate([
    Class.Private()
], Number.prototype, "max", void 0);
__decorate([
    Class.Public()
], Number.prototype, "name", null);
__decorate([
    Class.Public()
], Number.prototype, "validate", null);
Number = __decorate([
    Class.Describe()
], Number);
exports.Number = Number;
