import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo.models';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})

//API virtuel nock
//'InMemory' cad données initialisée avec chaque demarrage
//prerequis terminal: 
// npm i angular-in-memory-web ap@0.19.0
// ng g service in-memory-data

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos : Todo[] = 
    [
      //Urgentes: priority = 1 Et due date = Aujourd'hui
<<<<<<< HEAD
      {id:1, title:'Appeler Secu', completed: false, priority:'1', dueDate:new Date(2025,5,10).toISOString(), description:null, memberIds: []},

      //A faire aujourd'hui: due date = Aujourd'hui
      {id:2, title:'Envoyer email', completed: false, priority:null, dueDate:new Date(2025,5,10).toISOString(), description: null, memberIds: []},

      //Tache en retard: due date < Aujourd'hui
      {id:3, title:'Declaration impot', completed: false, priority:null, dueDate:new Date(2025,5,1).toISOString(), description:null, memberIds: []},

      //Tache en retard: due date < Aujourd'hui
      {id:4, title:'Envoyer CV', completed: false, priority:null, dueDate:new Date(2025,5,2).toISOString(), description: null, memberIds: []},
=======
      {id:1, title:'Appeler Secu', completed: false, priority:'1', dueDate:new Date(2025,5,10).toISOString(), description:null},

      //A faire aujourd'hui: due date = Aujourd'hui
      {id:2, title:'Envoyer email', completed: false, priority:null, dueDate:new Date(2025,5,10).toISOString(), description: null},

      //Tache en retard: due date < Aujourd'hui
      {id:3, title:'Declaration impot', completed: false, priority:null, dueDate:new Date(2025,5,1).toISOString(), description:null},

      //Tache en retard: due date < Aujourd'hui
      {id:4, title:'Envoyer CV', completed: false, priority:null, dueDate:new Date(2025,5,2).toISOString(), description: null},
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
    ];


    const users : User[] = [
      { id:1, firstName:'Marie', lastName:'Curie', genre:'Femme'},
      { id:2, firstName:'Marie 2', lastName:'Curie 2', genre:'Femme'}
    ];


    return { todos, users}; //
  }
}
