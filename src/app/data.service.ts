import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getUsers(page: number = 0) {
    const USERS_ENDPOINT = this.auth.API_ENDPOINT + '/users?page=' + page;
    return this.http.get(USERS_ENDPOINT);
  }
}
