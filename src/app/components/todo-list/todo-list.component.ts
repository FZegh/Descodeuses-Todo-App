import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxChange } from '@angular/material/checkbox';
<<<<<<< HEAD
import { ProjetService } from '../../services/ProjetService.service';
import { Projet } from '../../models/projet.model';
import { Utilisateur } from '../../models/utilisateur.model';
=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
<<<<<<< HEAD


export class TodoListComponent implements OnInit {
  utilisateurConnecte!: Utilisateur;
  formGroup: FormGroup;
  todos: Todo[] = [];
  projets: Projet[] = [];
  users: any[] = [];
private getProjetById(id: number): Projet | undefined {
  return this.projets.find(p => p.id === id);
}


  public getProjetNom(projetId: number |null | undefined): string {
     if (projetId == null) return 'Aucun projet';
    const projet = this.getProjetById(projetId);
    return projet ? projet.nom : 'Aucun projet';
  }


  constructor(private fb: FormBuilder, private todoService: TodoService, private snackBar: MatSnackBar, private projetService: ProjetService) {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      projetId: [null, Validators.required],
      


=======
export class TodoListComponent implements OnInit {
  formGroup : FormGroup;
  todos : Todo[] = [];
  

  constructor(private fb: FormBuilder, private todoService : TodoService, private snackBar : MatSnackBar){
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]]
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    });
  }


  ngOnInit(): void {
    this.fetchTodo();
<<<<<<< HEAD
    this.fetchProjets();
  }

  fetchProjets() {
    this.projetService.getAllProjets().subscribe(data => {
      this.projets = data;
      console.log(data);
    });
  }

  fetchTodo() {
=======
  }

  fetchTodo()
  {
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });  // subscribe= ecouter les appels http
  }


<<<<<<< HEAD
  onAddTodo() {

    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;



      const todo: Todo = {
        id: null, //Id est genere sur le serveur pour cela il est envoye null
        title: formValue.title, //Seulement title est remplis depuis le formulaire
        completed: false,
        priority: null,
        dueDate: '',
        description: null,
        memberIds: [],
        projetId: formValue.projetId,
        utilisateurId: this.utilisateurConnecte.id
    
};
      this.todoService.addTodo(todo).subscribe(data => {
        //Actualiser la liste apres l'ajout
        this.fetchTodo();
        this.formGroup.reset();
        this.snackBar.open('Tâche ajoutée !', '', { duration: 2000 });
      });
    }
  }

  onDeleteTodo(id: number | null) {
    {
      if (id == null)
        return;

      this.todoService.deleteTodo(id).subscribe(() => {
        this.fetchTodo();
        this.snackBar.open('Deleted !', '');
      });

      }

      

  }

  onDeleteProjet(id: number | null) {
  if (id == null) return;

  this.projetService.deleteProjet(id).subscribe({
    next: () => {
      this.fetchProjets(); // Pour rafraîchir la liste des projets
      this.snackBar.open('Projet supprimé !', '', { duration: 2000 });
    },
    error: () => {
      this.snackBar.open('Erreur lors de la suppression du projet.', '', { duration: 2000 });
    }
  });
}


  onCheckChange(event: MatCheckboxChange, todo: Todo) {
=======
onAddTodo() {
  console.log('add')
  if(this.formGroup.valid) {
    const formValue = this.formGroup.value;

    const todo : Todo = {
        id:null, //Id est genere sur le serveur pour cela il est envoye null
        title:formValue.title, //Seulement title est remplis depuis le formulaire
        completed:false,
        priority:null,
        dueDate:'',
        description: null
  
      };
      this.todoService.addTodo(todo).subscribe(data=>
      {
        //Actualiser la liste apres l'ajout
        this.fetchTodo();
      });
  }
  }

onDeleteTodo(id: number | null){
  {
    if(id == null)
      return;

    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodo();
      this.snackBar.open('Deleted !', '')
    });

    
}

}

onCheckChange(event : MatCheckboxChange, todo : Todo) {
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    console.log(event.checked);
    todo.completed = event.checked;

    //mettre à jour dans l'api
<<<<<<< HEAD
    this.todoService.updateTodo(todo).subscribe({
      next: () => {
        this.fetchTodo();

        if (todo.completed) {
          this.snackBar.open('Tâche marquée comme complétée !', '', { duration: 3000 });
        } else {
          this.snackBar.open('Tâche marquée comme non complétée.', '', { duration: 3000 });
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
        this.snackBar.open('Erreur lors de la mise à jour.', '', { duration: 3000 });
      }


      
=======
    this.todoService.updateTodo(todo).subscribe(data => {
      console.log(data);
      this.snackBar.open('Updated !', '');
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    });

    
  }
<<<<<<< HEAD
  onProjectCheckChange(event: MatCheckboxChange, projet: Projet) {
  projet.completed = event.checked;

  this.projetService.updateProjet(projet).subscribe({
    next: () => {
      this.snackBar.open('Projet mis à jour !', '', { duration: 2000 });
    },
    error: () => {
      this.snackBar.open('Erreur lors de la mise à jour du projet', '', { duration: 2000 });
    }
  });
}
newProjectName = '';

onAddProject() {
  if (this.newProjectName.trim()) {
    const projetToAdd: Projet = { 
    id: null,  
    nom: this.newProjectName ,
    description: '', 
    completed: false,
     // ou null, selon comment ton backend gère l’ID
 };
    this.projetService.createProjet(projetToAdd).subscribe({
      next: (proj) => {
        this.projets.push(proj);
        this.newProjectName = '';
        this.snackBar.open('Projet ajouté !', '', { duration: 2000 });
      },
      error: () => this.snackBar.open('Erreur ajout projet', '', { duration: 2000 })
    });
  }
}
onResetTodoInput() {
  this.formGroup.get('title')?.reset();
}
  
}
=======
}
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
