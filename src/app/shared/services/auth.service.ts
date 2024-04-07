import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Player } from '../../models/player';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  APIurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signup(player: Player) {
    return this.http.post(`${this.APIurl}/players`, player);
  }

  login(player: Player) {
    return this.http.post(`${this.APIurl}/login`, player);
  }
}