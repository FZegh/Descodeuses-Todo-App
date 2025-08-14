import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProjetService } from '../../services/ProjetService.service';
import { Projet } from '../../models/projet.model';
import { User } from '../../models/user.models';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  utilisateurConnecte!: User;
  formGroup: FormGroup;
  todos: Todo[] = [];
  projets: Projet[] = [];
  users: any[] = [];
  

  private getProjetById(id: number): Projet | undefined {
    return this.projets.find(p => p.id === id);
  }

  public getProjetNom(projetId: number | null | undefined): string {
    if (projetId == null) return 'Aucun projet';
    const projet = this.getProjetById(projetId);
    return projet ? projet.nom : 'Aucun projet';
  }

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private snackBar: MatSnackBar,
    private projetService: ProjetService,
    private authService: AuthService,
    private userService: UserService
    
   
  ) {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      projetId: [null],
    });
  }

  ngOnInit(): void {

this.authService.getUtilisateurConnecte().subscribe(
  (user: User) => {
    this.utilisateurConnecte = user;
    console.log("Utilisateur connecté :", user);
    this.fetchTodo();

    this.userService.getUsers().subscribe(users => {
  this.users = users;
});


  },
  (err) => {
    console.error("Erreur récupération utilisateur connecté", err);
  }
);



    
    this.fetchProjets();
    //this.utilisateurConnecte = this.authService.getCurrentUser(); // ← ligne manquante !
 // console.log("👤 Utilisateur connecté :", this.utilisateurConnecte);
  }

  fetchProjets() {
    this.projetService.getAllProjets().subscribe(data => {
      this.projets = data;
      console.log(data);
    });
  }

  fetchTodo() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  onAddTodo() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      const todo: Todo = {
        id: null, // Id est généré sur le serveur
        title: formValue.title,
        completed: false,
        priority: null,
        dueDate: '',
        description: null,
        memberIds: [],
        projetId: null,
        utilisateurId: this.utilisateurConnecte.id
      };
      this.todoService.addTodo(todo).subscribe(data => {
        this.fetchTodo();
        this.formGroup.reset();
        this.snackBar.open('Tâche ajoutée !', '', { duration: 2000 });
      });
    }
  }

  onDeleteTodo(id: number | null) {
    if (id == null) return;

    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodo();
      this.snackBar.open('Deleted !', '');
    });
  }

  onDeleteProjet(id: number | null) {
    if (id == null) return;

    this.projetService.deleteProjet(id).subscribe({
      next: () => {
        this.fetchProjets();
        this.snackBar.open('Projet supprimé !', '', { duration: 2000 });
      },
      error: () => {
        this.snackBar.open('Erreur lors de la suppression du projet.', '', { duration: 2000 });
      }
    });
  }

  onCheckChange(event: MatCheckboxChange, todo: Todo) {
    todo.completed = event.checked;

    this.todoService.updateTodo(todo).subscribe({
      next: () => {
        this.fetchTodo();
        this.snackBar.open(
          todo.completed ? 'Tâche marquée comme complétée !' : 'Tâche marquée comme non complétée.',
          '',
          { duration: 3000 }
        );
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
        this.snackBar.open('Erreur lors de la mise à jour.', '', { duration: 3000 });
      }
    });
  }

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
        nom: this.newProjectName,
        description: '',
        completed: false,
      };
      this.projetService.createProjet(projetToAdd).subscribe({
        next: (proj) => {
          this.projets.push(proj);
          this.newProjectName = '';
          this.snackBar.open('Projet ajouté !', '', { duration: 2000 });
        },
        error: () => this.snackBar.open('Erreur ajout projet', '', { duration: 2000 }),
      });
    }
  }

  onResetTodoInput() {
    this.formGroup.get('title')?.reset();
  }


  getUserNameById(id: number): string {
  const user = this.users.find(u => u.id === id);
  return user ? `${user.firstName} ${user.lastname}` : 'Inconnu';
}

}
