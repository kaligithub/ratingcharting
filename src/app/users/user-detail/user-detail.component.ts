import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from "../../services/auth.service"
//import { User }    from '../../user';
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
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user: User;
  message: string;

  constructor(private route: ActivatedRoute,private authService: AuthService) {
  var data = new User();
    data.id  = 1;
    data.first_name ="Anki";
    this.user = data;

   }

  ngOnInit() {
    var ref = this;

    this.route.params.subscribe(params => {
      //  ref.id = params['id'];
      // ref.getCurrentUser(ref.id,ref);
        console.log(params);
    });
  }
   getCurrentUser (id: number,reference) : any {
     var ref = reference;
      this.authService.getUserById(id)
      .subscribe(
          response => {
            var data = new User();
            data.id  = 1;
            data.first_name ="Anki";
          //  return (response);
            ref.user = data;
          },
          error => console.log(error)
      );
  }





}
