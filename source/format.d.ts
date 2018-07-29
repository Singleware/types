/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Format validator interface.
 */
export interface Format {
  /**
   * Format name.
   */
  readonly name: string;
  /**
   * Validate the specified data.
   * @param data Data to be validated.
   * @returns Returns true when the specified data is valid, false otherwise.
   */
  validate(data: any): boolean;
}
