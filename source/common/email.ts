/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Pattern } from './pattern';

/**
 * Email validator class.
 */
@Class.Describe()
export class Email extends Pattern {
  /**
   * Default constructor.
   * @param pattern Expected pattern.
   */
  public constructor() {
    super(/^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/);
  }

  /**
   * Validator name.
   */
  @Class.Public()
  public get name(): string {
    return 'Email pattern';
  }
}
