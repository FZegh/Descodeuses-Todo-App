
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';
import { AuthService } from './Auth.service';
import { Observable } from 'rxjs';


//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back

//Il fait les operations CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root'
})
export class TodoService {

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

  }


  //Read
  //Fetch all (toute la liste)

  getTodos(): Observable<Todo[]>{
    //HTTP GET sans 2eme parametre car il n'y a pas de body
    return this.http.get<Todo[]>(this.apiURL, this.getAuthHeaders()); // je veux la liste Todos 

  }
//Fetch un item de todo par son id
  getTodo(id : number): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/' + id, this.getAuthHeaders());
  }
  
 getUsers(): Observable<any[]> {
  return this.http.get<any[]>('/api/users', this.getAuthHeaders());
}


//Update
  updateTodo(item : Todo):Observable<Todo> {
    return this.http.put<Todo>(this.apiURL +'/'+ item.id, item, this.getAuthHeaders())

  }

  deleteTodo(id : number) : Observable<void>{
    return this.http.delete<void>(this.apiURL + '/' + id,this.getAuthHeaders());

  }
}
