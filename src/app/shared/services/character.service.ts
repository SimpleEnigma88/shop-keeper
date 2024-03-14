import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacterInfo(characterId: string) {
    return this.http.get(`/api/characters/${characterId}`);
  }
}
