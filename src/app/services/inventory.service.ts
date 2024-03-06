import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  constructor(private http: HttpClient) { }

  getCharacterMagicItems(characterId: string) {
    return this.http.get(`${environment.apiUrl}/characters/${characterId}/character_magic_items`);
  }
}
