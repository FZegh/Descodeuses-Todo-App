import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utilisateur } from "../models/utilisateur.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiURL = environment.apiUrl + '/api/utilisateur';


  constructor(private http: HttpClient) {}

  getByUsername(username: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiURL}/${username}`);
  }

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiURL);
  }
  getUtilisateurConnecte(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiURL}/me`);
  }
}
