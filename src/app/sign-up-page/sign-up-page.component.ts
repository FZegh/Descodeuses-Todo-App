import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';
=======

>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
@Component({
  selector: 'app-sign-up-page',
  standalone: false,
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit {
  listGenre = [
    { text:'Femme', value:'f'},
    { text:'Homme', value:'h'}
  ];
  



  SignUpForm! : FormGroup;


<<<<<<< HEAD
  constructor(private formBuilder : FormBuilder, private router : Router, private authService : AuthService){
=======
  constructor(private formBuilder : FormBuilder){
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

  }


ngOnInit() : void{
  this.SignUpForm = this.formBuilder.group({

<<<<<<< HEAD
    lastname : ['', [Validators.required,  /*Validators.name*/]],
    firstname : ['', [Validators.required, /*Validators.name*/]],
    username : ['', [Validators.required, /*Validators.name*/]],
    password : ['', [Validators.required, /*Validators.name*/]],
    genre : ['', [Validators.required, /*Validators.name*/]],
=======
    lastname : ['', [Validators.required, Validators.name]],
    firstname : ['', [Validators.required, Validators.name]],
    username : ['', [Validators.required, Validators.name]],
    password : ['', [Validators.required, Validators.name]],
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

  })
}




<<<<<<< HEAD
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


=======

onSubmit() {
  if(this.SignUpForm.valid){
    console.log(this.SignUpForm.value);

    }

  }

}
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
