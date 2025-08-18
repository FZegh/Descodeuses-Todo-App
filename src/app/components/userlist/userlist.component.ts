import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserListComponent implements OnInit {

  formGroup: FormGroup;

  users: User[] = [];


  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar ) {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, , Validators.email]],
      password: ['', Validators.required],
      lastname: [''],
      firstname: [''],
      genre: [''],
      role: ['ROLE_USER']

    });
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {


      this.users = data;
    })
  }



  onAddUser() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      this.userService.registerUser(formValue).subscribe({
        next: () => {
          this.snackBar.open('Utilisateur ajouté ✅', 'Fermer', { duration: 3000 });
          this.formGroup.reset();
          this.userService.getUsers().subscribe(data => this.users = data);
        },

        error: (err : any) => {
          this.snackBar.open('Erreur : ' + err.error.message, 'Fermer', { duration: 3000 });
        }});
    }
  }
}
