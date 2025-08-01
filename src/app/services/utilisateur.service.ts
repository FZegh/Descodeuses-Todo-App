import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utilisateur } from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiURL = 'http://localhost:8080/api/utilisateur';


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
