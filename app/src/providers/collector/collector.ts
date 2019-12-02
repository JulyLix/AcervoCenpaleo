import { ConfigHelper } from './../../app/helpers/configHelper';
import { CollectorModel } from './../../app/models/collectorModel';
import { Injectable } from "@angular/core";
import { ProviderBase } from '../../app/base/provider-base';
import { HttpProvider } from '../http/http';

@Injectable()

export class CollectorProvider extends ProviderBase<CollectorModel> {
    url = `${ConfigHelper.Url}collector`;

    constructor(public http: HttpProvider) {
        super(`${ConfigHelper.Url}collector`, http);
    }
}
