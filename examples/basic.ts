/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use types validation with common types.
 */
import * as Class from '@singleware/class';
import * as Types from '../source';

const string = new Types.Common.TypeOf('string');
const integer = new Types.Common.Integer();
const decimal = new Types.Common.Decimal();
const email = new Types.Common.Email();
const timestamp = new Types.Common.Timestamp();
const instance = new Types.Common.InstanceOf(Date);
const enumeration = new Types.Common.Enumeration('active', 'inactive');
const empty = new Types.Common.Undefined();

/**
 * Example entity.
 */

@Types.Validate(string, email)
@Class.Describe()
class User extends Class.Null {
  @Types.Validate(string)
  @Class.Public()
  public name: string;

  @Types.Validate(email)
  @Class.Public()
  public email: string;

  @Types.Validate(integer)
  @Class.Public()
  public age?: number;

  @Types.Validate(decimal)
  @Class.Public()
  public points?: number;

  @Types.Validate(timestamp)
  @Class.Public()
  public birthDate?: string;

  @Types.Validate(instance)
  @Class.Public()
  public createdAt?: Date;

  @Types.Validate(new Types.Common.Group(Types.Common.Group.OR, [enumeration, empty]))
  @Class.Public()
  public state?: string;

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
}

// Initialize the entity data.
const user = new User('Silas B. Domingos', 'test@test.br');
user.age = 27;
user.points = 20.234;
user.birthDate = '1991-04-23T21:34:20-20:30';
user.createdAt = new Date(user.birthDate);
user.state = 'active';
user.state = void 0;

// Print the applied data.
console.log(`User: ${user.name}`);
console.log(`Email: ${user.email}`);
console.log(`Age: ${user.age}`);
console.log(`Points: ${user.points}`);
console.log(`Birth Date: ${user.birthDate}`);
console.log(`Created At: ${user.createdAt}`);
console.log(`State: ${user.state}`);
