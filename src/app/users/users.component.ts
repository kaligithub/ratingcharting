import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service"
import { Router } from '@angular/router';
import {Http} from '@angular/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private authService: AuthService, public router: Router,private http: Http) { }


  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }



}

interface User{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;

}
