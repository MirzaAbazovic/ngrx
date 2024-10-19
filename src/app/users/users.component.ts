import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users$: Observable<User[]>;
  displayedColumns: string[] = ['id', 'name', 'email']; // Define columns to display

  
  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers();
   }

}
