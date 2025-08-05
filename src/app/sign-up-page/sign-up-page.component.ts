import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';


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
    password : ['', [Validators.required, Validators.minLength(8)]],
    genre: ['', Validators.required],
    


    })
  }


  onSubmit() {
    //if(this.SignUpForm.valid){
    //console.log(this.SignUpForm.value);

    //}

    if (this.SignUpForm.valid) {
      const formData = this.SignUpForm.value;

      this.authService.signup(formData).subscribe({
        next: (response) => {
          console.log('Inscription réussie :', response);
          this.router.navigate(['/todo-list']); // 👈 ou toute autre route existante
        },
        error: (error) => {
          console.error('Erreur lors de l’inscription :', error);
        }
      });
    }
  }


}
