import { Type } from '@sinclair/typebox';

import { createAjvDto } from '../../common/validation';


const CreateUserRequestSchema = Type.Object({
  name: Type.String({ description: 'User name' }),
  email: Type.Optional(Type.String({ description: 'User email' })),
});

export class CreateUserRequestDto extends createAjvDto(
  CreateUserRequestSchema,
) {}