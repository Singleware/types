/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Type validator class.
 */
@Class.Describe()
export class TypeOf extends Class.Null implements Format {
  /**
   * Expected type.
   */
  @Class.Private() private type: string;

  /**
   * Default constructor.
   * @param type Expected type.
   */
  public constructor(type: string) {
    super();
    this.type = type;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return `Type of ${this.type}`;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    return typeof data === this.type;
  }
}
