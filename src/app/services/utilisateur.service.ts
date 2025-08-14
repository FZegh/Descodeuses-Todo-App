import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.models";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiURL = environment.apiUrl + '/api/utilisateur';


  constructor(private http: HttpClient) {}

  getByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${username}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }
  getUtilisateurConnecte(): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/me`);
  }
}
