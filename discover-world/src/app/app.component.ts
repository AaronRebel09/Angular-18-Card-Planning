import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SloganComponent} from './slogan/slogan.component';
import {MainTitleComponent} from './main-title/main-title.component';
import {CategoriesComponent} from './categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignInComponent, SignUpComponent, SloganComponent, MainTitleComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'discover-world';
}
