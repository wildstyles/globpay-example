import { Type } from '@sinclair/typebox';

import { createAjvDto } from '../../common/validation';


const CreateUserRequestSchema = Type.Object({
  name: Type.String({ description: 'User name' }),
  email: Type.String(),
  password: Type.String(),
  age: Type.Number(),
});

export class CreateUserRequestDto extends createAjvDto(
  CreateUserRequestSchema,
) {}