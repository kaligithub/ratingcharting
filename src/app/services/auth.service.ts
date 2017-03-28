import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }
    signup(firstname: string, lastname: string, email: string, username: string, password: string){
      return this.http.post('http://localhost:8000/data_persistence/signup/',
         {first_name:firstname,last_name:lastname},
         {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})}
       );
    }
   signin(username: string, password: string){
     return this.http.post('http://localhost:8000/data_persistence/login/',
        {username:username,password:password},
        {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})}
      );
   }
   getAllUsers(){
     return this.http.get('http://localhost:8000/data_persistence/get_allusers/')
         .map(res => res.json());
   }
   getUserById(id: number){
     return this.http.post('http://localhost:8000/data_persistence/get_user_byid/',
        {id:id},
        {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})}
      );
   }


}
