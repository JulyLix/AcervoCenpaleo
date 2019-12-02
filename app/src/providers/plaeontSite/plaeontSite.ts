import { ConfigHelper } from './../../app/helpers/configHelper';
import { Injectable } from "@angular/core";
import { HttpProvider } from '../http/http';
import { paleontSiteModel } from '../../app/models/paleontSiteModel';
import { ProviderBase } from '../../app/base/provider-base';

@Injectable()
export class PaleontSiteProvider extends ProviderBase<paleontSiteModel> {

    url = `${ConfigHelper.Url}paleontSite`;

    constructor(public http: HttpProvider) {
        super(`${ConfigHelper.Url}paleontSite`, http);
    }
}
