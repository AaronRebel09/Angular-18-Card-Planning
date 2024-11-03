import { Routes } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PostComponent} from './post/post.component';

export const routes: Routes = [
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component:SignUpComponent},
      {path: 'categories', component:CategoriesComponent},
      {path: 'editPost', component:PostComponent},
];
