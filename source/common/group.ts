/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Format } from '../format';

/**
 * Validation group class.
 */
@Class.Describe()
export class Group extends Class.Null implements Format {
  /**
   * Group operation.
   */
  @Class.Private()
  private operation: 1 | 2;

  /**
   * Group validators.
   */
  @Class.Private()
  private validators: Format[];

  /**
   * Current validator name.
   */
  @Class.Private()
  private current: string = 'Group';

  /**
   * Default constructor.
   * @param operation Group operation.
   * @param validators Group validators.
   */
  constructor(operation: 1 | 2, validators: Format[]) {
    super();
    this.operation = operation;
    this.validators = validators;
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return this.current;
  }

  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the data is valid, false otherwise.
   */
  @Class.Public()
  public validate(data: any): boolean {
    let state = false;
    for (const format of this.validators) {
      this.current = format.name;
      state = format.validate(data);
      if ((this.operation === Group.AND && !state) || (this.operation === Group.OR && state)) {
        break;
      }
    }
    return state;
  }

  /**
   * 'and' operation name.
   */
  @Class.Public()
  public static AND: 1 = 1;

  /**
   * 'or' operation name.
   */
  @Class.Public()
  public static OR: 2 = 2;
}
