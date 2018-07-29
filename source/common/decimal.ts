/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Pattern } from './pattern';

/**
 * Decimal validator class.
 */
@Class.Describe()
export class Decimal extends Pattern {
  /**
   * Min decimal value.
   */
  @Class.Private()
  private min?: number;

  /**
   * Max decimal value.
   */
  @Class.Private()
  private max?: number;

  /**
   * Default constructor.
   * @param min Min decimal value.
   * @param max Max decimal value.
   */
  public constructor(min?: number, max?: number) {
    super(/^\d+(\.\d{1,})?$/);
    this.min = min;
    this.max = max;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    if (this.min && this.max) {
      return `Decimal between ${this.min} and ${this.max}`;
    }
    if (this.min) {
      return `Decimal greater or equals to ${this.min}`;
    }
    if (this.max) {
      return `Decimal less or equals to ${this.max}`;
    }
    return `Decimal pattern`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return super.validate(data) && data >= (this.min || -Infinity) && data <= (this.max || Infinity);
  }
}
