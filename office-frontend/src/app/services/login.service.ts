import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:44327/api/user/';

  createProjects(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
}
