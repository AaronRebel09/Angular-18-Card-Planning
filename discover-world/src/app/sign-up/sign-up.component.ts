import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NewPostService} from './service/new-post.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  userForm: FormGroup;

  constructor(private router: Router, private _userService: NewPostService) {
    this.userForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required])
    });
  }

  onSave() {
    console.log(this.userForm.value)
    const password = this.userForm.value.password;
    const confPassword = this.userForm.value.confPassword;

    if (password === confPassword && this.userForm.valid) {
      this._userService.postNewUser(this.userForm.value).subscribe()
      console.log('Session success');
      this.router.navigate(['/categories']);
    } else {
      console.log('cannot signup something fail');
    }

  }

  onCancel() {
    this.router.navigate(['/sign-in']);
  }

}
