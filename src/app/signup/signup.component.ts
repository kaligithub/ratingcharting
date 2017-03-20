import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private message = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    this.authService.signup(form.value.firstname,form.value.lastname,form.value.email,form.value.username,form.value.password)
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
