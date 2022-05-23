import { Get } from '@nestjs/common';
import {
  InjectService,
  JsonApi,
  JsonApiController,
  JsonApiService,
  QueryParams,
} from 'json-api-nestjs';

import { Account } from './models/account.model';

@JsonApi(Account)
export class AccountableController implements JsonApiController {
  @InjectService() public service: JsonApiService;

  @Get()
  public async getAll(query: QueryParams) {
    console.log('here i am');
    return await this.service.getAll({ query });
  }
}
