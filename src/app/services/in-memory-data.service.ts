import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
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
    const todos: Todo[] =
      [
        //Urgentes: priority = 1 Et due date = Aujourd'hui

        { id: 1, title: 'Appeler Secu', completed: false, priority: '1', dueDate: new Date(2025, 5, 10).toISOString(), description: null, memberIds: [],  projetId: null,  utilisateurId: 1 },
        //A faire aujourd'hui: due date = Aujourd'hui
        { id: 2, title: 'Envoyer email', completed: false, priority: null, dueDate: new Date(2025, 5, 10).toISOString(), description: null, memberIds: [],projetId: null,  utilisateurId: 1},

        //Tache en retard: due date < Aujourd'hui
        { id: 3, title: 'Declaration impot', completed: false, priority: null, dueDate: new Date(2025, 5, 1).toISOString(), description: null, memberIds: [], projetId: null,  utilisateurId: 1 },

        //Tache en retard: due date < Aujourd'hui
        { id: 4, title: 'Envoyer CV', completed: false, priority: null, dueDate: new Date(2025, 5, 2).toISOString(), description: null, memberIds: [], projetId: null,  utilisateurId: 1 },

      ];


    const users: User[] = [
      { id: 1, username: 'marie.curie',email: 'test@example.com', firstName: 'Marie', lastName: 'Curie', genre: 'Femme', role: 'user' },
      { id: 2,username: 'mcurie',email: 'test2@example.com', firstName: 'Marie 2', lastName: 'Curie 2', genre: 'Femme', role: 'user' }
    ];


    return { todos, users }; //
  }

 requestInterceptor(req: Request) {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('401 Unauthorized: Token manquant ou invalide');
    }

    return req;
  }

}
