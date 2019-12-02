import { ConfigHelper } from './../../app/helpers/configHelper';
import { PieceModel } from './../../app/models/pieceModel';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';
import { ProviderBase } from '../../app/base/provider-base';
import { HttpResultModel } from '../../app/models/HttpsResultModel';

@Injectable()
export class PieceProvider extends ProviderBase<PieceModel> {

    url = `${ConfigHelper.Url}piece`;

    constructor(public http: HttpProvider) {
        super(`${ConfigHelper.Url}piece`, http);
    }

    async pieceCollectorID(id: string): Promise<HttpResultModel> {
        return this.http.get(`${this.url}/collector/${id}`);
    }

    async pieceCollectionID(id: string): Promise<HttpResultModel> {
        return this.http.get(`${this.url}/collection/${id}`);
    }

    async pieceSubCollectionID(id: string): Promise<HttpResultModel> {
        return this.http.get(`${this.url}/collection/${id}`);
    }

    async piecePaleontSiteID(id: string): Promise<HttpResultModel> {
        return this.http.get(`${this.url}/paleontSite/${id}`);
    }
}
