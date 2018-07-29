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
const pattern_1 = require("./pattern");
/**
 * Timestamp ISO 8601 validator class.
 */
let Timestamp = class Timestamp extends pattern_1.Pattern {
    /**
     * Default constructor.
     * @param min Min date value.
     * @param max Max date value.
     */
    constructor(min, max) {
        super(/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(.\d{1,})?)?(Z|[-+]\d{2}:\d{2})?)?$/);
        this.min = min;
        this.max = max;
    }
    /**
     * Determines whether the specified timestamp is the range.
     * @param timestamp Timestamp to be tested.
     * @return Returns true when the timestamp is between the range, false otherwise.
     */
    testRange(timestamp) {
        return (!this.min || timestamp >= this.min.getTime()) && (!this.max || timestamp <= this.max.getTime());
    }
    /**
     * Validator name.
     */
    get name() {
        if (this.min && this.max) {
            return `Timestamp between ${this.min.toDateString()} and ${this.max.toDateString()}`;
        }
        if (this.min) {
            return `Timestamp greater or equals to ${this.min.toDateString()}`;
        }
        if (this.max) {
            return `Timestamp less or equals to ${this.max.toDateString()}`;
        }
        return `Timestamp pattern`;
    }
    /**
     * Validate the specified data.
     * @param data Data to be validated.
     * @returns Returns true when the data is valid, false otherwise.
     */
    validate(data) {
        if (data instanceof Date) {
            return this.testRange(data.getTime());
        }
        else {
            var date;
            if (super.validate(data) && !isNaN((date = Date.parse(data)))) {
                return this.testRange(date);
            }
        }
        return false;
    }
};
__decorate([
    Class.Private()
], Timestamp.prototype, "min", void 0);
__decorate([
    Class.Private()
], Timestamp.prototype, "max", void 0);
__decorate([
    Class.Private()
], Timestamp.prototype, "testRange", null);
__decorate([
    Class.Public()
], Timestamp.prototype, "name", null);
__decorate([
    Class.Public()
], Timestamp.prototype, "validate", null);
Timestamp = __decorate([
    Class.Describe()
], Timestamp);
exports.Timestamp = Timestamp;
