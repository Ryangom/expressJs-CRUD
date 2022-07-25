import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/model/user.model';

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

  updateUser(user: Users): Observable<any> {
    return this.httpClient.put('http://localhost:3000/user/' + user._id, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/user/delete/' + id);
  }
}
