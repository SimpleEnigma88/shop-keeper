import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { Party } from '../../models/party';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  curParty: any[] = [];

  constructor(private http: HttpClient) { }

  getPartiesByPlayerId(playerId: string): Observable<Party[]> {
    console.log('Getting parties for player: ' + playerId);

    return this.http.get(`${environment.apiUrl}/players/${playerId}/parties`).pipe(
      map((response: any) => response as Party[])
    );
  }

  getPartyById(partyId: string): Observable<Party> {
    return this.http.get(`${environment.apiUrl}//${partyId}`).pipe(
      map((response: any) => response as Party)
    );
  }

  createParty(name: string, dm_player_id: string) {
    return this.http.post(`${environment.apiUrl}/players/${dm_player_id}/parties`, { name, dm_player_id });
  }

  deleteParty(partyId: string, dm_player_id: string) {
    return this.http.delete(`${environment.apiUrl}/players/${dm_player_id}/parties/${partyId}`);
  }
}
