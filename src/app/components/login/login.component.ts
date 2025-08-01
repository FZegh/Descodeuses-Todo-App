import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';
=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed


//'@' signifie decorateur
//qui décore la classe component
 // @ mis avant une classe
@Component({                     
  selector: 'app-login',    //nom de l'élément
  standalone: false,            //Composant accessible via un module seulement
  templateUrl: './login.component.html',          
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
    // point exclamation pour pouvoir initialiser la variable ultérieurement
  loginForm! : FormGroup;
<<<<<<< HEAD
  //router: any;
=======
  router: any;
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
  //j'utilise l'injection automatique de angular pour recuperer
  //un objet form builder qui va construire le formulaire

  //private avant formBuilder pour pouvoir acceder a la variable 
  // en dehors du constructeur

<<<<<<< HEAD
  constructor(private formBuilder : FormBuilder, private router : Router, private authService : AuthService) {
=======
  constructor(private formBuilder : FormBuilder) {
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

  }
  
  
  
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
//
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  
 }

 onSubmit() {
<<<<<<< HEAD

  if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          sessionStorage.setItem('authToken', res.token);
          sessionStorage.setItem('username', credentials.username);
          this.router.navigateByUrl('todo-list');
        },
        error: (err) => console.error('Erreur de connexion', err),
      });
    }
  


}
}

//if(this.loginForm.valid){
    //const { username, password } = this.loginForm.value;
  //console.log(this.loginForm.value);
 

 //if (username === 'admin@test.com' && password === 'admin')
 //if (this.loginForm.value.username == 'admin@test.com' && this.loginForm.value.password == 'admin')
    

 //{
  //sessionStorage.setItem('isLoggedIn', 'true'); 
  //this.router.navigateByUrl('');
 //}
 //else {
        //alert('Identifiants incorrects');
      //}

//}
=======
  if(this.loginForm.valid){
  console.log(this.loginForm.value);
 }

 if (this.loginForm.value.username == 'admin@test.com' && this.loginForm.value.password == 'admin')
    

 {
  sessionStorage.setItem('isLoggedIn', 'true'); 
  this.router.navigateByUrl('');
 }

}


}
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
