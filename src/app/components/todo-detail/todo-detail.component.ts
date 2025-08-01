import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo.models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ProjetService } from '../../services/ProjetService.service';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Projet } from '../../models/projet.model';
import { Utilisateur } from '../../models/utilisateur.model';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-todo-detail',
  standalone: false,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  currentFruit = new FormControl('');
  selectedFruits: { id: number; nom: string }[] = [];
  allFruits: { id: number; nom: string }[] = [
    { id: 1, nom: 'Marc' },
    { id: 2, nom: 'Anna' },
    { id: 3, nom: 'Malik' },
    { id: 4, nom: 'Jane' },
    { id: 5, nom: 'Asma' }
  ];
  filteredFruits: { id: number; nom: string }[] = [...this.allFruits];

  todo!: Todo;
  formGroup!: FormGroup;
  projets: Projet[] = [];
  utilisateurConnecte!: Utilisateur;

  PriorityNumber = [
    { number: 1, value: '1' },
    { number: 2, value: '2' },
    { number: 3, value: '3' },
    { number: 4, value: '4' },
    { number: 5, value: '5' }
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService,
    private projetService: ProjetService,
    private snackbar: MatSnackBar,
    private router: Router,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID récupéré :', todoId);

    this.utilisateurService.getUtilisateurConnecte().subscribe({
      next: (utilisateur: Utilisateur) => {
        this.utilisateurConnecte = utilisateur;

        this.todoService.getTodo(todoId).subscribe({
          next: (todoData) => {
            this.todo = todoData;

            this.projetService.getAllProjets().subscribe({
              next: (projetData) => {
                this.projets = projetData;

                this.formGroup = this.fb.group({
                  id: [this.todo.id],
                  title: [this.todo.title, Validators.required],
                  completed: [this.todo.completed],
                  priority: [this.todo.priority],
                  dueDate: [this.todo.dueDate],
                  description: [this.todo.description],
                  memberIds: [this.todo.memberIds || []],
                  projetId: [this.todo.projetId || null, Validators.required],
                  utilisateurId: [{ value: this.utilisateurConnecte.id, disabled: true }, Validators.required]
                });
              },
              error: (err) => {
                console.error('Erreur lors du chargement des projets', err);
                this.snackbar.open("Erreur chargement projets", '', { duration: 2000 });
              }
            });
          },
          error: (err) => {
            console.error('Erreur lors du chargement du Todo', err);
            this.snackbar.open("Erreur chargement Todo", '', { duration: 2000 });
          }
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l’utilisateur', err);
      }
    });
  }

  onSubmitTodo() {
    if (this.formGroup.value.dueDate) {
      this.formGroup.value.dueDate = this.toLocalIsoString(this.formGroup.value.dueDate);
    }

    this.formGroup.get('memberIds')?.setValue(this.selectedFruits.map(fruit => fruit.id));

    if (this.formGroup.valid) {
      const formValue = this.formGroup.getRawValue();

      const todoToSend: Todo = {
        id: formValue.id,
        title: formValue.title,
        description: formValue.description,
        completed: formValue.completed,
        priority: formValue.priority,
        dueDate: formValue.dueDate,
        memberIds: formValue.memberIds || [],
        projetId: formValue.projetId || null,
        utilisateurId: formValue.utilisateurId
      };

      this.todoService.updateTodo(todoToSend).subscribe({
        next: () => {
          this.snackbar.open('updated', '', { duration: 1000 });
          this.router.navigate(['/todo-table']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour', err);
          this.snackbar.open('Erreur lors de la mise à jour', '', { duration: 2000 });
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  toLocalIsoString(dateString: string): string {
    const dateObject = new Date(dateString);
    return new Date(dateObject.getTime() - dateObject.getTimezoneOffset() * 60000).toISOString();
  }

  remove(id: number): void {
    this.selectedFruits = this.selectedFruits.filter(fruit => fruit.id !== id);
  }

  onCurrentFruitChange(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredFruits = this.allFruits.filter(fruit =>
      fruit.nom.toLowerCase().includes(filterValue)
    );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedId = event.option.value;
    const fruit = this.allFruits.find(f => f.id === selectedId);
    if (fruit && !this.selectedFruits.some(f => f.id === fruit.id)) {
      this.selectedFruits = [...this.selectedFruits, fruit];
    }

    this.currentFruit.setValue('');
    event.option.deselect();
  }
}
