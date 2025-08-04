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
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [authGuard] },
  { path: 'sign-up-page', component: SignUpPageComponent, canActivate: [authGuard] },
  { path: 'todo-list', component: TodoListComponent, canActivate: [authGuard] },
  { path: 'userlist', component: UserListComponent, canActivate: [authGuard] },
  { path: 'todo-detail/:id', component: TodoDetailComponent, canActivate: [authGuard] },
  { path: 'todo-table', component: TodoTableComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
