/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Pattern } from './pattern';

/**
 * Integer validator class.
 */
@Class.Describe()
export class Integer extends Pattern {
  /**
   * Min integer value.
   */
  @Class.Private()
  private min?: number;

  /**
   * Max integer value.
   */
  @Class.Private()
  private max?: number;

  /**
   * Default constructor.
   * @param min Min integer value.
   * @param max Max Integer value.
   */
  public constructor(min?: number, max?: number) {
    super(/^\d+$/);
    this.min = min;
    this.max = max;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    if (this.min && this.max) {
      return `Integer between ${this.min} and ${this.max}`;
    }
    if (this.min) {
      return `Integer greater or equals to ${this.min}`;
    }
    if (this.max) {
      return `Integer less or equals to ${this.max}`;
    }
    return `Integer pattern`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return typeof data === 'number' && super.validate(data) && data >= (this.min || -Infinity) && data <= (this.max || Infinity);
  }
}
