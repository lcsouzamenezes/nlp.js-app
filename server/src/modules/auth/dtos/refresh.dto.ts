import { ApiModelProperty } from '@nestjs/swagger';

export class RefreshDto {
  @ApiModelProperty()
  refresh_token: string;
}
