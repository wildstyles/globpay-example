import { ApiProperty } from '@nestjs/swagger';

export class GetUserResponseDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly age: number;

  constructor(id: string, name: string, email: string, age: number) {
    this.id = id;
    this.age = age;
    this.email = email;
    this.name = name;
  }
}