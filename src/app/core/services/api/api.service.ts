import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected URL: string = environment.apiUrl;

  constructor(protected http: HttpClient) {
  }


  /**
   * GET request
   * @param {string} path it doesn't need / in front of the end point
   * @returns {Observable<any>}
   */
  public get(path: string, options?: any): Observable<any> {
    return this._request('GET', path, null, options);
  }


  /**
   * GET Params for http requests
   * @param {Object} params - object with query params
   * @returns {HttpParams}
   */
  private getParams(params?: any): HttpParams {
    let paramsToSend: HttpParams = new HttpParams();

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        paramsToSend = paramsToSend.append(key, value as string);
      }
    }

    return paramsToSend;
  }

  private _request(method: string, path: string, body?: string, options?: any): Observable<any> {

    if (!options) {
      options = {};
    }

    const url = `${this.URL}/${path}`;
    const params = options.params && this.getParams(options.params);

    const optionsToSend = Object.assign(options, {
      url,
      body,
      params
    });


    return Observable.create((observer) => {
      return this.http.request(method, url, optionsToSend).subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err: HttpErrorResponse) => {
          if (err.status === 401 || err.status === 403) {
            console.log('Refresh token needed!');
          }

          console.log('err');

          observer.error(err);
        });
    });
  }
}
