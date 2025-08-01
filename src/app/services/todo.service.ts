<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';
import { AuthService } from './Auth.service';
import { Observable } from 'rxjs';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back

//Il fait les operations CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root'
})
export class TodoService {

<<<<<<< HEAD
  private apiURL =  'http://localhost:8080/api/action'      //'api/todos'; change pour communiquer avec le backend
  //filter: any;

   //HttpClient pour communiquer avec le API/Backend appartient au framework Angular
  constructor(private http: HttpClient, private authService : AuthService) { 
  } 
private getAuthHeaders(): { headers: HttpHeaders } {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
    return { headers };
  }

  //Create
  addTodo(item : Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL, item, this.getAuthHeaders()); // post<Todo> Recevoir valeur de type Todo  type de retour de la valeur http
=======
  private apiURL = 'api/todos';
  filter: any;

   //HttpClient pour communiquer avec le API/Backend appartient au framework Angular
  constructor(private http: HttpClient) { 
  } 

  //Create
  addTodo(item : Todo){
    return this.http.post<Todo>(this.apiURL, item); // post<Todo> Recevoir valeur de type Todo  type de retour de la valeur http
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
  }

  //Read
  //Fetch all (toute la liste)
<<<<<<< HEAD
  getTodos(): Observable<Todo[]>{
    //HTTP GET sans 2eme parametre car il n'y a pas de body
    return this.http.get<Todo[]>(this.apiURL, this.getAuthHeaders()); // je veux la liste Todos 

  }
//Fetch un item de todo par son id
  getTodo(id : number): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/' + id, this.getAuthHeaders());
  }
  
  getUsers(): Observable<any[]> {
  return this.http.get<any[]>('/api/users');
}


//Update
  updateTodo(item : Todo):Observable<Todo> {
    return this.http.put<Todo>(this.apiURL +'/'+ item.id, item, this.getAuthHeaders())

  }

  deleteTodo(id : number) : Observable<void>{
    return this.http.delete<void>(this.apiURL + '/' + id,this.getAuthHeaders());
=======
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
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

  }
}
