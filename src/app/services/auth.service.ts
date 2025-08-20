import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.models';
import { environment } from '../../environments/environment';
//import { LoginComponent } from '../components/login/login.component'; // adapte ce chemin si besoin

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl  + '/auth/login';

  isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  

  signup(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/sign-up`, userData);}

  login(payload: any): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}`, payload).pipe(
      tap(response => {
      sessionStorage.setItem('authToken', response.token); // 💾 stocker le JWT pour les prochaines requêtes
    })
    );
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken');  // recuperer le token stocké
  }

  getUtilisateurConnecte(): Observable<User> {
  return this.http.get<User>(`${environment.apiUrl}/api/utilisateur/me`);
}


}
