import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ApiService} from '@core/services/api/api.service';
import {GET_USER, SEARCH_USERS} from '@core/services/api/api-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private api: ApiService) {
  }


  getUsers(name: string) {

    return this.api.get(SEARCH_USERS, {
      params: {
        q: name
      }
    })
      .pipe(
        map(result => result.items)
      );

  }

  getUser(id: number) {
    return this.api.get(`${GET_USER}/${id}`)
      .pipe(
        map(result => result)
      );
  }
}
