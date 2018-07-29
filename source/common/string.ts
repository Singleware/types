/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * String validator class.
 */
@Class.Describe()
export class String implements Format {
  /**
   * Min string length.
   */
  @Class.Private()
  private min?: number;

  /**
   * Max string length.
   */
  @Class.Private()
  private max?: number;

  /**
   * Default constructor.
   * @param min Min string length.
   * @param max Max string length.
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
      return `String with length between ${this.min} and ${this.max}`;
    }
    if (this.min) {
      return `String with length greater or equals to ${this.min}`;
    }
    if (this.max) {
      return `String with length less or equals to ${this.max}`;
    }
    return `String pattern`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    if (typeof data === 'string' || data instanceof String) {
      return (<string>data).length >= (this.min || -Infinity) && (<string>data).length <= (this.max || Infinity);
    }
    return false;
  }
}
