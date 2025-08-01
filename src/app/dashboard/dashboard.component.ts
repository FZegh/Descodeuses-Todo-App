import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
    todos: Todo[] = [];
// KPI // Indicateur de performances clés
// KeyPerformanceIndicators
// Comme un tableau de bord de voiture: essence, temperature,huile...

kpis = [
    {
      id:1,
      title: 'A faire aujourdh\'ui',
      color: '!bg-blue-500',
      value: 0,
      icon: 'event'
    },
    {
      id:2,
      title: 'Taches en retard',
      color: '!bg-red-500',
      value: 0,
      icon: 'warning'
    },
    {
      id:3,
      title: 'Urgentes',
      color: '!bg-yellow-500',
      value: 0,
      icon: 'priority_high'
    }
  ];


  constructor(private todoService : TodoService) {

  }


//ngOnInit() :C’est une méthode spéciale d’Angular.Elle est appelée automatiquement quand le composant est initialisé (quand il apparaît à l’écran).C’est l’endroit idéal pour dire : "va chercher les données !".

  ngOnInit(): void {   
    this.fetchTodo();  //Ça déclenche la récupération de la liste des to-dos.
  }

 //Communication asynchrone donc il faut s'inscrire pour avoir le retour
  fetchTodo() {
   
    //C’est un appel à un service Angular (un fichier séparé qui gère les requêtes HTTP par ex.).
    // "this.todoService.getTodos()" Il va probablement faire un appel vers un serveur / API pour obtenir la liste des tâches.
    //".subscribe((data) => {" La communication est asynchrone (ça prend un peu de temps → internet / serveur). On "s’abonne"pour dire :"Quand tu auras les données, appelle cette fonction avec le résultat dans data."
    this.todoService.getTodos().subscribe((data) => {  //Donc, quand les données arrivent, tu exécutes "this.todos = data;"On stocke les tâches reçues dans this.todos → un tableau.
      this.todos = data;
      //new Date() sans paramètre retourne "today"
<<<<<<< HEAD
          let today = new Date();   //fonction constructor va etre appelé
=======
      let today = new Date(2025,5,10);   //fonction constructor va etre appelé
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
      let countUrgent = 0, countToday = 0, countLate = 0;    //creer 3 variables de type nombre

    //Urgentes: priority = 1 Et due date = Aujourd'hui : On veut compter les tâches 
    // dont :la priorité est 1 (urgent)
    // la date d'échéance (dueDate) est aujourd'hui


    //Ce bloc :parcourt la liste this.todos → c'est sans doute un tableau d'objets représentant des tâches (to-dos).filter retourne un nouveau tableau ne contenant que les tâches qui respectent la condition. .length donne le nombre d'éléments de ce nouveau tableau → c'est donc le nombre de tâches urgentes pour aujourd'hui.Le résultat est stocké dans countUrgent.
    countUrgent = this.todos.filter(c=>      // Pour chaque tâche c (chaque élément du tableau this.todos), on vérifie que :sa priorité est '1' → cela signifie sans doute priorité urgente.
      c.priority == '1' &&   
      new Date(c.dueDate).toDateString() == today.toDateString()).length; //On compare la date d'échéance de la tâche à la date d'aujourd'hui :new Date(c.dueDate) → convertit c.dueDate (souvent une chaîne ou timestamp) en objet Date. .toDateString() → convertit cette date en chaîne lisible sans l'heure (exemple : 'Sun Jun 08 2025').Même chose pour today :today.toDateString() → pareil, une chaîne représentant aujourd'hui, sans l'heure. On fait l'égalité == pour savoir si la tâche est due aujourd'hui. 

      this.kpis[2].value = countUrgent; //On stocke le résultat (countUrgent) dans ce qui semble être un tableau de KPIs :this.kpis[2] → c'est probablement le 3e indicateur clé de performance(car on commence a 0 sur un tableau).On met à jour sa propriété value avec le nombre de tâches urgentes pour aujourd'hui. 
      //Résumé simple : Ce code compte combien de tâches urgentes sont dues aujourd'hui et met ce nombre dans un KPI (par ex. pour afficher sur un tableau de bord).




    //A faire aujourd'hui: due date(=date d'échéance) = Aujourd'hui

    //countToday = this.todos.filter( c=>
    
      //new Date(c.dueDate).toDateString() == today.toDateString()).length;  //même chose que précedement sauf enlever la priorité 

      //this.kpis[0].value = countToday;

    for(let item of this.todos) {
<<<<<<< HEAD
       if(new Date(item.dueDate).toDateString() == today.toDateString())
       countToday ++;
=======
        if(new Date(item.dueDate).toDateString() == today.toDateString())
        countToday ++;
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
      }
    this.kpis[0].value = countToday;

//Tache en retard: due date < Aujourd'hui

<<<<<<< HEAD
//countLate = this.todos.filter( c =>
=======
//countLate = this.todos.filter( c=>
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    
      //new Date(c.dueDate).setHours (0, 0, 0, 0) < new Date (today).setHours(0, 0, 0, 0)).length; //remplace ToDateString par setHours (0, 0, 0, 0)   //Ici, on recrée un nouveau Date(today) → donc on ne touche pas à l’objet today d’origine.
      //ça sert à mettre l’heure à 00:00:00 (minuit), c’est-à-dire :📅 Date : inchangée (exemple : 2025-06-08) 🕛 Heure : remise à zéro (00:00:00)

      //this.kpis[1].value = countToday;

      for(let i = 0; i < this.todos.length;  i++){
<<<<<<< HEAD
        if(new Date (this.todos[i].dueDate) < today){
         countLate = countLate + 1;
      }
      this.kpis[1].value = countLate;
      }
=======
        if(new Date (this.todos[i].dueDate) > today)
         countLate = countLate + 1;
      }
  this.kpis[1].value = countLate;
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

    
  


  






  });

}
}















  