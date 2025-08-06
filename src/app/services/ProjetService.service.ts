import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = environment.apiUrl + '/api/projet'; // URL backend exposée

  constructor(private http: HttpClient) {}

  // Récupère tous les projets
  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.apiUrl}`);  // GET /api/projet
  }

  // Crée un projet
  createProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.apiUrl}`, projet);  // POST /api/projet
  }

  // Met à jour un projet
  updateProjet(projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.apiUrl}/${projet.id}`, projet);  // PUT /api/projet/{id}
  }

  // Supprime un projet
  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  // DELETE /api/projet/{id}
  }

}
