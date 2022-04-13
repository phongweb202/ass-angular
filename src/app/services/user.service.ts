import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  public logginUser: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.logginUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user') || "{}")
    );
  }
  getLoggedInUser() {
    return this.logginUser.value;
  }
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  signUp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/signup', data);
  }
  signIn(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/signin', data);
  }
  createUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateUser(id: number | string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  removeUser(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
