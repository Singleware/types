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
 * Enumeration validator class.
 */
let Enumeration = class Enumeration {
    /**
     * Default constructor.
     * @param entries Expected entries.
     */
    constructor(...entries) {
        this.entries = entries;
    }
    /**
     * Validator name.
     */
    get name() {
        return `Enumeration of ${this.entries.join(', ')}`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        return this.entries.indexOf(data) !== -1;
    }
};
__decorate([
    Class.Private()
], Enumeration.prototype, "entries", void 0);
__decorate([
    Class.Public()
], Enumeration.prototype, "name", null);
__decorate([
    Class.Public()
], Enumeration.prototype, "validate", null);
Enumeration = __decorate([
    Class.Describe()
], Enumeration);
exports.Enumeration = Enumeration;
