import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from "../../services/auth.service"
import { NgForm } from "@angular/forms";
import { User }    from '../../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user: any;
  private message = '';

  constructor(private route: ActivatedRoute, private authService: AuthService) {
      this.user = {};
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.getCurrentUser(this.id);
    });
  }
   getCurrentUser (id: number) : any {
      this.authService.getUserById(id)
      .map((data: any) => data.json())
      .subscribe(
            (data: any) => {
                this.user = data[0];
            },
            err => console.log(err), // error
            () => console.log(this.user) // complete
      );
  }

  onUpdate(form: NgForm){
    this.authService.userupdate(form.value.firstname,form.value.lastname,form.value.email)
    .subscribe(
        response => {
          if(response.status==200){
            this.message = '1';
          }
        },
        error => console.log(error)
    );
  }


}
