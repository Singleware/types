"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Group_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Validation group class.
 */
let Group = Group_1 = class Group extends Class.Null {
    /**
     * Default constructor.
     * @param operation Group operation.
     * @param validators Group validators.
     */
    constructor(operation, validators) {
        super();
        /**
         * Current validator name.
         */
        this.current = 'Group';
        this.operation = operation;
        this.validators = validators;
    }
    /**
     * Validator name.
     */
    get name() {
        return this.current;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        let state = false;
        for (const format of this.validators) {
            this.current = format.name;
            state = format.validate(data);
            if ((this.operation === Group_1.AND && !state) || (this.operation === Group_1.OR && state)) {
                break;
            }
        }
        return state;
    }
};
/**
 * 'and' operation name.
 */
Group.AND = 1;
/**
 * 'or' operation name.
 */
Group.OR = 2;
__decorate([
    Class.Private()
], Group.prototype, "operation", void 0);
__decorate([
    Class.Private()
], Group.prototype, "validators", void 0);
__decorate([
    Class.Private()
], Group.prototype, "current", void 0);
__decorate([
    Class.Public()
], Group.prototype, "name", null);
__decorate([
    Class.Public()
], Group.prototype, "validate", null);
__decorate([
    Class.Public()
], Group, "AND", void 0);
__decorate([
    Class.Public()
], Group, "OR", void 0);
Group = Group_1 = __decorate([
    Class.Describe()
], Group);
exports.Group = Group;
