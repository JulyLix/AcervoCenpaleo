import { userModel } from './../../app/models/userModel';
import { HttpProvider } from './../http/http';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { HttpResultModel } from '../../app/models/HttpsResultModel';

@Injectable()
export class UserProvider extends ProviderBase<userModel> {

    url = `${ConfigHelper.Url}user`;

    constructor(public http: HttpProvider) {
        super(`${ConfigHelper.Url}user`, http);
    }

    static RegisterLogin(result: any) {
        localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
        localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.user));
    }

    static get GetTokenAccess(): string {
        return localStorage.getItem(ConfigHelper.storageKeys.token);
    }

    static get IsLogged(): boolean {
        return (localStorage.getItem(ConfigHelper.storageKeys.token) !== undefined);
    }

    async autenticate(email: string, passwd: string): Promise<HttpResultModel> {
        return this.http.post(`${this.url}/autenticate`, { email, passwd });
    }

    async register(user: userModel): Promise<HttpResultModel> {
        return this.http.post(`${this.url}/register`, user);
    }

}
