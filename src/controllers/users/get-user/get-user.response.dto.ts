import { ApiProperty } from '@nestjs/swagger';

export class GetUserResponseDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}