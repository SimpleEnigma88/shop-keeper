import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Player } from '../../models/player';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signup(player: Player) {
    return this.http.post(`${environment.apiUrl}/players`, { player });
  }

  login(user_name: string, password: string) {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/login`,
      {
        user_name,
        password
      });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  autoLogin() {
    if (this.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}