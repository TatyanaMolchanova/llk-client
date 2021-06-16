import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = ''

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {

    // console.log('this.http.post<User>)', this.http.post<User>('/admin/register', user));
    console.log('this.http.post<User>)', this.http.post<User>('http://localhost:3000/admin/register', user));
    return this.http.post<User>('http://localhost:3000/admin/register', user)
  }

  login(user: User): Observable<{token: string}> {

    return this.http.post<{token: string}>('http://localhost:3000/admin/login', user)
      .pipe(
        tap(
          ({token}) => {
            console.log('1 token', token);
            localStorage.setItem('auth-token', token)
            this.setToken(token)
            console.log('2 token', token);
          }
        )
      )
  }

  setToken(token: string) {
    console.log('3 token', token);
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken('')
    localStorage.clear()
  }
}
