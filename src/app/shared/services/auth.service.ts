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

  getPlayerIdFromToken(token: string) {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(window.atob(payload));
      console.log('Decoded payload:', decodedPayload);
      return decodedPayload.player_id;
    } catch (err) {
      console.error('Failed to parse token', err);
      return null;
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('playerId', this.getPlayerIdFromToken(token));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('playerId');
    this.router.navigate(['/auth']);
  }

  setPlayerId(playerId: string) {
    localStorage.setItem('playerId', playerId);
  }

  autoLogin() {
    if (this.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}