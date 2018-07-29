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
 * Pattern validator class.
 */
let Pattern = class Pattern {
    /**
     * Default constructor.
     * @param pattern Expected pattern.
     * @param alias Pattern alias name.
     */
    constructor(pattern, alias) {
        this.pattern = pattern;
        this.alias = alias || pattern.toString();
    }
    /**
     * Validator name.
     */
    get name() {
        return `RegExp pattern ${this.alias}`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        return this.pattern.test(data);
    }
};
__decorate([
    Class.Private()
], Pattern.prototype, "pattern", void 0);
__decorate([
    Class.Private()
], Pattern.prototype, "alias", void 0);
__decorate([
    Class.Public()
], Pattern.prototype, "name", null);
__decorate([
    Class.Public()
], Pattern.prototype, "validate", null);
Pattern = __decorate([
    Class.Describe()
], Pattern);
exports.Pattern = Pattern;
