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
 *
 * The proposal of this example is to show how to use types validation with common types.
 */
const Class = require("@singleware/class");
const Types = require("../source");
const string = new Types.Common.TypeOf('string');
const integer = new Types.Common.Integer();
const decimal = new Types.Common.Decimal();
const email = new Types.Common.Email();
const timestamp = new Types.Common.Timestamp();
const instance = new Types.Common.InstanceOf(Date);
const enumeration = new Types.Common.Enumeration('active', 'inactive');
const empty = new Types.Common.Undefined();
/**
 * Example entity.
 */
let User = class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
};
__decorate([
    Class.Public(),
    Types.Validate(string)
], User.prototype, "name", void 0);
__decorate([
    Class.Public(),
    Types.Validate(email)
], User.prototype, "email", void 0);
__decorate([
    Class.Public(),
    Types.Validate(integer)
], User.prototype, "age", void 0);
__decorate([
    Class.Public(),
    Types.Validate(decimal)
], User.prototype, "points", void 0);
__decorate([
    Class.Public(),
    Types.Validate(timestamp)
], User.prototype, "birthDate", void 0);
__decorate([
    Class.Public(),
    Types.Validate(instance)
], User.prototype, "createdAt", void 0);
__decorate([
    Class.Public(),
    Types.Validate([enumeration, empty])
], User.prototype, "state", void 0);
User = __decorate([
    Class.Describe(),
    Types.Validate(string, email)
], User);
// Initialize the entity data.
const user = new User('Silas B. Domingos', 'test@test.br');
user.age = 27;
user.points = 20.234;
user.birthDate = '1991-04-23T21:34:20-20:30';
user.createdAt = new Date(user.birthDate);
user.state = 'active';
user.state = void 0;
// Print the applied data.
console.log(`User: ${user.name}`);
console.log(`Email: ${user.email}`);
console.log(`Age: ${user.age}`);
console.log(`Points: ${user.points}`);
console.log(`Birth Date: ${user.birthDate}`);
console.log(`Created At: ${user.createdAt}`);
console.log(`State: ${user.state}`);
