import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public user: string = '';

  public async handleLogin() {
    const { username, password } = this.loginForm.value;

    if (!username || !password) return;
    await this._authService.Login(username, password);
    this._router.navigate(['/app']);
  }
}
