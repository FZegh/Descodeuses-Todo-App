import { importProvidersFrom, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './profil/profil.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
<<<<<<< HEAD
import {ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {MatSelectModule} from '@angular/material/select';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
<<<<<<< HEAD
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
=======
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserListComponent } from './components/userlist/userlist.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { TodoTableComponent } from './todo-table/todo-table.component';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import { authInterceptor } from './auth/auth.interceptor';
import { FormsModule } from '@angular/forms';


=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    SignUpPageComponent,
    TodoListComponent,
    UserListComponent,
    TodoDetailComponent,
    TodoTableComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatTableModule,
<<<<<<< HEAD
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule
    

  
=======
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
  
  

  
    
  ],
  providers: [
<<<<<<< HEAD
    provideHttpClient(
    withInterceptors([
        authInterceptor
      ])
    ),

    //importProvidersFrom([
      //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:200})
    //]),
=======
    provideHttpClient(),

    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:200})
    ]),
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed

    
    
      provideNativeDateAdapter(),
       //configurer lqa localisation pour affichage en format francais (devise, date...)    //
<<<<<<< HEAD
    { provide: LOCALE_ID, useValue: 'fr'},

    
  ],

  
=======
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
  bootstrap: [AppComponent],

 
})
export class AppModule { }
