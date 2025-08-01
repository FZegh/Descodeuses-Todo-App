import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';
//import { LoginComponent } from '../components/login/login.component'; // adapte ce chemin si besoin

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  

  signup(userData: any): Observable<any> {
    return this.http.post('http://localhost:8080/auth/sign-up', userData);}

  login(payload: any): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}`, payload).pipe(
      tap(response => {
      sessionStorage.setItem('token', response.token); // 💾 stocker le JWT pour les prochaines requêtes
    })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');  // recuperer le token stocké
  }


}
