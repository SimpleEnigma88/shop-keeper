import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  constructor(private http: HttpClient) { }

  getCharacterRandomMagicItem(rarities: string[]) {
    let params = new HttpParams();
    if (rarities && rarities.length > 0) {
      params = params.append('rarity', rarities.join(','));
    }
    return this.http.get(`${environment.apiUrl}/magic_items/random`, { params });
  }

  getCharacterMagicItems(characterId: string) {
    return this.http.get(`${environment.apiUrl}/characters/${characterId}/character_magic_items`);
  }

  addCharacterMagicItem(characterId: string, magicItemId: string) {
    return this.http.post(`${environment.apiUrl}/characters/${characterId}/character_magic_items`, { magic_item_id: magicItemId });
  }

  deleteCharacterMagicItem(characterId: string, magicItemId: string) {
    return this.http.delete(`${environment.apiUrl}/characters/${characterId}/character_magic_items/${magicItemId}`);
  }

}
