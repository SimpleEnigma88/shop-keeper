import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  url = environment.apiUrl;
  curParty: any[] = [];

  constructor(private http: HttpClient) { }

  getPartyById(partyId: string) {
    return this.http.get(`${this.url}/${partyId}`);
  }

  createParty(party: any) {
    return this.http.post(`${this.url}/parties`, party);
  }
}
