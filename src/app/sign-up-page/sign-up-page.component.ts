import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-sign-up-page',
  standalone: false,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit {
  listGenre = [
    { text: 'Femme', value: 'f' },
    { text: 'Homme', value: 'h' }
  ];



  SignUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}


  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({


    lastname : ['', [Validators.required]],
    firstname : ['', [Validators.required]],
    username : ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(8)]],
    genre: ['', Validators.required],
    role: ['user'] // rôle par défaut


    });
  }


  onSubmit() {
    //if(this.SignUpForm.valid){
    //console.log(this.SignUpForm.value);

    //}

    if (this.SignUpForm.valid) {
      const formData = this.SignUpForm.value;

      this.authService.signup(formData).subscribe({
        next: (response : any) => {
          console.log('Inscription réussie :', response);
          this.router.navigate(['/dashboard']); // 👈 ou toute autre route existante
        },
        error: (error : any) => {
          console.error('Erreur lors de l’inscription :', error);
        }
      });
    }
  }


}
