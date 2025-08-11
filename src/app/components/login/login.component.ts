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
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          sessionStorage.setItem('authToken', res.token);
          console.log('Token reçu du backend :', res.token);
          
          sessionStorage.setItem('username', credentials.username);

          this.authService.getUtilisateurConnecte().subscribe({
            next: (user) => {
              console.log('Utilisateur connecté reçu :', user); 
              sessionStorage.setItem('firstname', user.firstname);
               this.router.navigateByUrl('todo-list');
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
