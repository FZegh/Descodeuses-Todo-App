import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';

//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back

//Il fait les operations CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiURL = 'api/todos';
  filter: any;

   //HttpClient pour communiquer avec le API/Backend appartient au framework Angular
  constructor(private http: HttpClient) { 
  } 

  //Create
  addTodo(item : Todo){
    return this.http.post<Todo>(this.apiURL, item); // post<Todo> Recevoir valeur de type Todo  type de retour de la valeur http
  }

  //Read
  //Fetch all (toute la liste)
  getTodos() {
    //HTTP GET sans 2eme parametre car il n'y a pas de body
    return this.http.get<Todo[]>(this.apiURL); // je veux la liste Todos 

  }
//Fetch un item de todo par son id
  getTodo(id : number) {
    return this.http.get<Todo>(this.apiURL + '/' + id);
  }


//Update
  updateTodo(item : Todo) {
    return this.http.put<Todo>(this.apiURL +'/'+ item.id, item)

  }

  deleteTodo(id : number) {
    return this.http.delete(this.apiURL + '/' + id);

  }
}
