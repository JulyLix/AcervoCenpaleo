import { Injectable } from '@angular/core';
import { CollectionModel } from '../../app/models/collectionModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from '../http/http';
import { ProviderBase } from '../../app/base/provider-base';

@Injectable()
export class CollectionProvider extends ProviderBase<CollectionModel> {

  url = `${ConfigHelper.Url}collection`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}collection`, http);
  }

}
