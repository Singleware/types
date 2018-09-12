/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Number validator class.
 */
@Class.Describe()
export class Number implements Format {
  /**
   * Min value.
   */
  @Class.Private()
  private min?: number;

  /**
   * Max value.
   */
  @Class.Private()
  private max?: number;

  /**
   * Default constructor.
   * @param min Min value.
   * @param max Max value.
   */
  public constructor(min?: number, max?: number) {
    this.min = min;
    this.max = max;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
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
  @Class.Public()
  public validate(data: any): boolean {
    return typeof data === 'number' && data >= (this.min || -Infinity) && data <= (this.max || Infinity);
  }
}
