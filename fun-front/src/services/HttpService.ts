import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './ConfigService';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    constructor(private http: Http, private configService: ConfigService) {

    }

    login(data) {
        let url = this.configService.getHost() + "/login";
        return this.http.post(url, data).map(
            res => res.json()
        ).catch(this.handleError);
    }

    register(data) {
        let url = this.configService.getHost() + "/users/";
        return this.http.post(url, data).map(
            res => res.json()
        ).catch(this.handleError);
    }

    getMoviewList() {
        let url = this.configService.getHost() + '/movies/';
        return this.http.get(url).map(
            res => res.json()
        ).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}