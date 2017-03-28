import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service"
import { Router } from '@angular/router';
import {Http} from '@angular/http';
//import { User } from '../user';

export class User{

  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public username: string;
  public password: string;

  constructor() {  }
}

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
    });
  }

  onUpdate(user: User){
  //  this.router.navigate(['/users/'+user.id], {queryParams: {userInfo: user}});
    this.router.navigate(['/users'+user.id, user])
  }
}
