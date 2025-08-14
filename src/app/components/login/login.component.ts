import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {

    console.log('Contexte this dans onSubmit :', this);
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          // Stocke le token et le username
          sessionStorage.setItem('authToken', res.token);
          sessionStorage.setItem('username', credentials.username);
          sessionStorage.setItem('user', JSON.stringify(res.user));

          console.log('Token reçu du backend :', res.token);
          console.log('Rôle reçu du backend :', res.role);

          // Récupère les infos complètes de l'utilisateur
          this.authService.getUtilisateurConnecte().subscribe({
            next: (user) => {

              console.log('Utilisateur connecté reçu :', user);
               // Stockage dans sessionStorage pour réutilisation dans toute l'app
              sessionStorage.setItem('user', JSON.stringify(user));
              sessionStorage.setItem('firstname', user.firstName);

              sessionStorage.setItem('role', user.role);  // ✅ Important pour le dashboard

              console.log('role exact:', user.role);
              this.authService.isAdmin = user.role === 'ROLE_ADMIN';

              if (this.authService.isAdmin) {

                console.log('Redirection vers /userlist');
                this.router.navigateByUrl('/userlist'); // admin → liste des utilisateurs

              } else {

                console.log('Redirection vers dashboard');
                this.router.navigateByUrl('/dashboard'); // utilisateur → dashboard
              }

            },

            error: (err) => {
              console.error('Erreur récupération utilisateur', err);
              alert('Impossible de récupérer les infos utilisateur');
            }
          });
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          alert('Identifiants invalides ou serveur indisponible');
        },
      });
    } else {
      alert('Formulaire invalide. Vérifie tes champs.');
    }
  }
}
