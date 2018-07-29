/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Pattern } from './pattern';

/**
 * Timestamp ISO 8601 validator class.
 */
@Class.Describe()
export class Timestamp extends Pattern {
  /**
   * Min timestamp value.
   */
  @Class.Private()
  private min?: Date;

  /**
   * Max timestamp value.
   */
  @Class.Private()
  private max?: Date;

  /**
   * Determines whether the specified timestamp is the range.
   * @param timestamp Timestamp to be tested.
   * @return Returns true when the timestamp is between the range, false otherwise.
   */
  @Class.Private()
  private testRange(timestamp: number): boolean {
    return (!this.min || timestamp >= this.min.getTime()) && (!this.max || timestamp <= this.max.getTime());
  }

  /**
   * Default constructor.
   * @param min Min date value.
   * @param max Max date value.
   */
  public constructor(min?: Date, max?: Date) {
    super(/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(.\d{1,})?)?(Z|[-+]\d{2}:\d{2})?)?$/);
    this.min = min;
    this.max = max;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
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
  @Class.Public()
  public validate(data: any): boolean {
    if (data instanceof Date) {
      return this.testRange(data.getTime());
    } else {
      var date;
      if (super.validate(data) && !isNaN((date = Date.parse(data)))) {
        return this.testRange(date);
      }
    }
    return false;
  }
}
