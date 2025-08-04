import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL : string  = 'api/users';

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.apiURL);
  }

  getByUsername(username: string): Observable<User> {
  return this.http.get<User>(`${this.apiURL}/${username}`);
}

  
}
