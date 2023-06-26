import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent {
  constructor(private _authService: AuthService) {}

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public user: string = '';

  public async handleLogin() {
    const { username, password } = this.loginForm.value;

    if (!username || !password) return;

    await this._authService.Login(username, password);
  }
}
