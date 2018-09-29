import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  public API_ENDPOINT: string = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }
  
  login(user: User) {
    const URL = this.API_ENDPOINT + '/login';
    return this.http.post(URL, user);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
