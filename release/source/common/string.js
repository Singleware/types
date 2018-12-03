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
 * String validator class.
 */
let String = class String extends Class.Null {
    /**
     * Default constructor.
     * @param min Min string length.
     * @param max Max string length.
     */
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    /**
     * Validator name.
     */
    get name() {
        if (this.min && this.max) {
            return `String with length between ${this.min} and ${this.max}`;
        }
        if (this.min) {
            return `String with length greater or equals to ${this.min}`;
        }
        if (this.max) {
            return `String with length less or equals to ${this.max}`;
        }
        return `String pattern`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        return typeof data === 'string' && data.length >= (this.min || -Infinity) && data.length <= (this.max || Infinity);
    }
};
__decorate([
    Class.Private()
], String.prototype, "min", void 0);
__decorate([
    Class.Private()
], String.prototype, "max", void 0);
__decorate([
    Class.Public()
], String.prototype, "name", null);
__decorate([
    Class.Public()
], String.prototype, "validate", null);
String = __decorate([
    Class.Describe()
], String);
exports.String = String;
