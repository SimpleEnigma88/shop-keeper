import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  createOrUpdateCharacter(playerID: string, character: any, charID?: string) {
    if (charID) {
      return this.http.put(environment.apiUrl + '/players/' + playerID + '/characters/' + charID, character);
    } else {
      return this.http.post(environment.apiUrl + '/players/' + playerID + '/characters', character);
    }
  }

  deleteCharacter(playerID: string, charID: string) {
    return this.http.delete(environment.apiUrl + '/players/' + playerID + '/characters/' + charID);
  }

  getCharacters(playerID: string, charID?: string) {
    if (charID) {
      return this.http.get(environment.apiUrl + '/players/' + playerID + '/characters/' + charID);
    } else {
      return this.http.get(environment.apiUrl + '/players/' + playerID + '/characters');
    }
  }


}
