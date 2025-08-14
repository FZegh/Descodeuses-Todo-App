import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL : string  = environment.apiUrl + '/';

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.apiURL + 'utilisateur');
  }

  getByUsername(username: string): Observable<User> {
  return this.http.get<User>(`${this.apiURL}utilisateur/${username}`);
}

  registerUser(userData: any): Observable<any> {
  return this.http.post(`${this.apiURL}auth/sign-up`, userData);
}
}
