import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-todo-detail',
  standalone: false,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})

export class TodoDetailComponent implements OnInit {
  PriorityNumber = [
    {number: 1, value: '1'},
    {number: 2, value: '2'},
    {number: 3, value: '3'},
    {number: 4, value: '4'},
    {number: 5, value: '5'},

  ]




  todo! : Todo;
  formGroup! : FormGroup
 

  constructor(
    private route: ActivatedRoute, 
    private fb : FormBuilder, 
    private todoService : TodoService,
    private snackbar: MatSnackBar, 
    private router: Router) {

  }
  ngOnInit(): void {
    //snapshot = je recupere le Id de mon URL et je le converti au nombre
    //pour faire appel au fetch by ID du service CRUD
    const id = Number(this.route.snapshot.paramMap.get('id'));  

    //appel au service pour recuperer le todo
    this.todoService.getTodo(id).subscribe((data) => {
      this.todo = data;
      // subscribe= ecouter les appels http

//initaliser le formulaire avec les valeurs du todo
    this.formGroup = this.fb.group(
        {
          id: [this.todo.id],
          title: [this.todo.title, Validators.required],
          completed: [this.todo.completed],
          priority: [this.todo.priority],
          dueDate: [this.todo.dueDate],
          description: [this.todo.description],
        });
});    
  
 }

  onSubmitTodo() {
    //tester si formulaire valide
if (this.formGroup.valid) {
    this.todoService.updateTodo(this.formGroup.value).subscribe(data=> 
    {
      this.snackbar.open('updated','', {duration: 1000})
      this.router.navigate(["/"]);//retourne a la page generale todolist
    }
  )
  }
    //faire appel au update du service CRUD

    
    
  }


onCancel(){
  this.router.navigate(["/"])
}
}



