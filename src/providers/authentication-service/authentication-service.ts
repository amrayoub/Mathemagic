import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { errorHandler } from "@angular/platform-browser/src/browser";

let apiUrl = "http://localhost/PHP-Slim-Restful/api/"

/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthenticationServiceProvider Provider');
  }

  postData(creds, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl+type, JSON.stringify(creds), {headers: headers}).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }
}
