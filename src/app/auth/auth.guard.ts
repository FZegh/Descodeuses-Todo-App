import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const token = sessionStorage.getItem('authToken');
    const userData = sessionStorage.getItem('user');

    if (token && userData) {
        const user = JSON.parse(userData);
        if (user.role === 'ROLE_USER' || user.role ===  'ROLE_ADMIN') {
            return true;
        }

    }
    return router.createUrlTree(['/login']);


};



