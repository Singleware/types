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
 * Instance validator class.
 */
let InstanceOf = class InstanceOf extends Class.Null {
    /**
     * Default constructor.
     * @param type Expected type.
     */
    constructor(type) {
        super();
        this.type = type;
    }
    /**
     * Validator name.
     */
    get name() {
        return `Instance of ${this.type.name}`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        return data instanceof this.type;
    }
};
__decorate([
    Class.Private()
], InstanceOf.prototype, "type", void 0);
__decorate([
    Class.Public()
], InstanceOf.prototype, "name", null);
__decorate([
    Class.Public()
], InstanceOf.prototype, "validate", null);
InstanceOf = __decorate([
    Class.Describe()
], InstanceOf);
exports.InstanceOf = InstanceOf;
