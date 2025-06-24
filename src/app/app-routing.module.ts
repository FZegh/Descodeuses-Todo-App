import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';



const routes: Routes = [
  {
    path: 'login', component:LoginComponent
    },
  {
    path: 'profil', component:ProfilComponent
  },
  {
    path: 'sign-up-page', component:SignUpPageComponent, canActivate: [authGuard]
  },
  {
    path: '', component: TodoListComponent //path vide car page par defaut
  },
  {
    path: 'userlist', component: UserListComponent 
  },
  {
    path: 'todo-detail/:id', component: TodoDetailComponent
  },

  {
    path: 'todo-table', component: TodoTableComponent
  },

  {
    path: 'dashboard', component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
