import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private baseUrl = 'https://3kniis.sse.codesandbox.io';

  constructor(private _httpClient: HttpClient) {}

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
    } catch {
      alert('Ocorreu um erro na chamada da API');
    }
  }

  public Logout() {
    localStorage.removeItem('@app/access_token');
  }

  public GetAccessToken() {
    return localStorage.getItem('@app/access_token');
  }
}
