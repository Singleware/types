/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Pattern validator class.
 */
@Class.Describe()
export class Pattern implements Format {
  /**
   * Expected pattern.
   */
  @Class.Private()
  private pattern: RegExp;

  /**
   * Pattern alias name.
   */
  @Class.Private()
  private alias: string;

  /**
   * Default constructor.
   * @param pattern Expected pattern.
   * @param alias Pattern alias name.
   */
  public constructor(pattern: RegExp, alias?: string) {
    this.pattern = pattern;
    this.alias = alias || pattern.toString();
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return `RegExp pattern ${this.alias}`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return this.pattern.test(data);
  }
}
