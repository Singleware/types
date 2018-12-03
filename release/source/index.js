"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Common = require("./common");
exports.Common = Common;
/**
 * Declarations.
 */
const helper_1 = require("./helper");
/**
 * Decorates the specified member to validate its types at runtime.
 * @param validators Specify one validator per member argument.
 * @returns Returns the decorator method.
 */
exports.Validate = (...validators) => helper_1.Helper.Validate(...validators);
