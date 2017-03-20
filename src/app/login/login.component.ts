import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    this.authService.signin(form.value.username,form.value.password)
    .subscribe(
        response => {
            if(response.json().userstatus=='success'){
              localStorage.setItem('sessUsername', response.json().username);
              //localStorage.setItem('sessUserid', response.json().user_id);
              this.router.navigate(['/']);
            }else{
              this.router.navigate(['login']);
            }
        },
        error => {
          //alert(error.text());
          console.log(error.text());
        }
      );
  }


}
