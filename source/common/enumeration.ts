/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Enumeration validator class.
 */
@Class.Describe()
export class Enumeration implements Format {
  /**
   * Expected entries.
   */
  @Class.Private()
  private entries: string[];

  /**
   * Default constructor.
   * @param entries Expected entries.
   */
  public constructor(...entries: string[]) {
    this.entries = entries;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return `Enumeration of ${this.entries.join(', ')}`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return this.entries.indexOf(data) !== -1;
  }
}
