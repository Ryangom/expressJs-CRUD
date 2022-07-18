import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getsAllUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/user');
  }
  getUserById(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:3000/user/' + id);
  }


  addUser(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user', user);
  }
}
