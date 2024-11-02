import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SignInService} from './service/sign-in.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  providers: [SignInService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  userForm : FormGroup;
  usersData: any;

  constructor( private _userService: SignInService ) {
    this.userForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => {
        this.usersData = data;
        console.log(this.usersData);
      }
    )
  }

  onSignIn() {
    console.log(this.userForm.value);
    const user = this.userForm.value.user;
    const password = this.userForm.value.password;

    const isSigned = this.usersData.find(
        (u: { user: string; password: string; }) =>
          u.user === user && u.password === password);
    if (isSigned) {
      console.log('sign in successfully');
    }
    console.log('wrong credentials');
  }

}
