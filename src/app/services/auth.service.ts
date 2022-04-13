import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  

  constructor(private http: HttpClient) {

  }
 
  checkExitUser(email: string, ggId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?email=${email}&googleId=${ggId}`)
      .pipe(
        map(data => {
          if (data.length > 0) {
            // this.logginUser.next(data[0]);
            return data[0];
          }
          // this.logginUser.next({});
          return null;
        })
      )
  };
}
