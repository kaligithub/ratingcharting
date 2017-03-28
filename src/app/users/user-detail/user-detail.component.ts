import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export class User {
  firstname: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user: User[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.user = new User("ksdfsd",  'Mr. Nice', 'email');
    });
  }

}
