import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @ApiProperty()
  categoryName: string;

  @ApiProperty()
  categoryActive: boolean;
}
export class UpdateCategoryDTO {
  @ApiProperty()
  categoryName: string;

  @ApiProperty()
  categoryActive: boolean;
}
