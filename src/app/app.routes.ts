import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './services/auth.gaurd';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';




const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: '', component: HomeComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: UserDetailComponent }
    ]
  },
  { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
