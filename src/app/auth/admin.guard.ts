import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const adminGuard: CanActivateFn = (route, state) => {
  
    const router = inject(Router);
    const authService = inject(AuthService);

    const userData = sessionStorage.getItem('user');
    let role = '';


    try {
    // 🧠 Parser les données et extraire le rôle
    const user = JSON.parse(userData || '{}');
    role = user?.role?.toUpperCase() || '';
  } catch (e) {
    console.warn('Erreur de parsing sessionStorage["user"]', e);
  }

  // ✅ Vérifier si l'utilisateur est admin
  if (role === 'ROLE_ADMIN') {
    return true;
  } else {
    // 🚫 Rediriger vers le dashboard si non autorisé
    router.navigate(['/dashboard']);
    return false;
  }

};
