import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL : string  = 'api/users';

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.apiURL);
  }
<<<<<<< HEAD
  getByUsername(username: string): Observable<User> {
  return this.http.get<User>(`${this.apiURL}/${username}`);
}

=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
  
}
