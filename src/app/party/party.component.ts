import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { PartyService } from '../shared/services/party.service';
import { Party } from '../models/party';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent implements OnInit {
  newPartyName: string = '';
  playerParties: Party[] = [];
  // Get current playerID
  playerID = this.authService.getPlayerIdFromToken(localStorage.getItem('token') || '');

  constructor(private partyService: PartyService, private authService: AuthService) {

    if (this.playerID === null) {
      this.authService.logOut();
    }
    else {
      this.partyService.getPartiesByPlayerId(this.playerID).subscribe({
        next: (value) => {
          console.log('Observable emitted a value: ' + value);
          // for each party in the partyData, add it to the playerParties array
          value.forEach((party: Party) => {
            console.log(party);
            this.playerParties.push(party);
          });
        },
        error: (err) => { console.error('Observable emitted an error: ' + JSON.stringify(err)); },
        complete: () => { console.log('Observable emitted the complete notification'); }
      });
    }
  }

  createParty(name: string, dm_player_id: string) {
    // Call the party service to create the party
    this.partyService.createParty(name, dm_player_id).subscribe((res) => {
      // Add the party to the playerParties array
      this.playerParties.push(res as Party);
    });
  }

  deleteParty(partyId: string) {
    // Call the party service to delete the party
    this.partyService.deleteParty(partyId).subscribe((res) => {
      // Remove the party from the playerParties array
      this.playerParties = this.playerParties.filter(party => party.id !== partyId);
    });
  }

  ngOnInit(): void {

  }
}
