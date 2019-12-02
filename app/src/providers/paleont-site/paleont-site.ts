import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from '../http/http';


@Injectable()
export class PaleontSiteProvider extends ProviderBase<paleontSiteModel> {

  url: string = `${ConfigHelper.Url}paleontSite`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}paleontSite`, http);
  }

}
