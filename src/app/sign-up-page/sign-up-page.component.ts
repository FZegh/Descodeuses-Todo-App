import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  constructor(private formBuilder : FormBuilder){

  }


ngOnInit() : void{
  this.SignUpForm = this.formBuilder.group({

    lastname : ['', [Validators.required, Validators.name]],
    firstname : ['', [Validators.required, Validators.name]],
    username : ['', [Validators.required, Validators.name]],
    password : ['', [Validators.required, Validators.name]],

  })
}





onSubmit() {
  if(this.SignUpForm.valid){
    console.log(this.SignUpForm.value);

    }

  }

}
