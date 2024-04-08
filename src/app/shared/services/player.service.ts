import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  APIurl = environment.apiUrl;

  constructor(private http: HttpClient) { }
}
