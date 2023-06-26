import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private baseUrl = 'https://3kniis.sse.codesandbox.io';

  constructor(private _httpClient: HttpClient, private _router: Router) {}

  public async Login(username: string, password: string) {
    try {
      const { access_token } = await firstValueFrom(
        this._httpClient.post<{ access_token: string }>(
          `${this.baseUrl}/auth/login`,
          {
            username,
            password,
          }
        )
      );
      localStorage.setItem('@app/access_token', access_token);
      this._router.navigate(['/app']);
    } catch {
      alert('Credenciais invalidas');
    }
  }

  public Logout() {
    localStorage.removeItem('@app/access_token');
  }

  public GetAccessToken() {
    return localStorage.getItem('@app/access_token');
  }
}
