/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Undefined value validator class.
 */
@Class.Describe()
export class Undefined extends Class.Null implements Format {
  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return `Undefined value`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return data === void 0;
  }
}
