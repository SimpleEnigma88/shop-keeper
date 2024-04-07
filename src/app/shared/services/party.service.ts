import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  curParty: any[] = [];

  constructor(private http: HttpClient) { }

  getPartyById(partyId: string) {
    return this.http.get(`${environment.apiUrl}/${partyId}`);
  }

  createParty(party: any) {
    return this.http.post(`${environment.apiUrl}/parties`, party);
  }
}
