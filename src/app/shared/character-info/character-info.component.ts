import { Component, OnInit } from '@angular/core';
import { CharacterMagicItemInventoryComponent } from "../character-magic-item-inventory/character-magic-item-inventory.component";
import { Character } from '../../models/character';
import { Player } from '../../models/player';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-info',
  standalone: true,
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
  imports: [CharacterMagicItemInventoryComponent]
})

export class CharacterInfoComponent implements OnInit {
  // images = ['artificer.jpeg', 'bard.jpg', 'cleric.jpeg', 'druid.jpg', 'fighter.jpg', 'monk.jpg', 'ranger.jpg', 'warlock.jpg', 'barbarian.jpeg', 'wizard.jpeg', 'rogue.jpeg', 'paladin.jpeg',];
  chars: Character[] = [];
  playerId = localStorage.getItem('playerId');

  constructor(private characterService: CharacterService) {
    if (this.playerId !== null) {
      this.characterService.getCharacters(this.playerId).subscribe({
        next: chars => {
          console.log('Chars', chars);
        },
        error: err => console.log('Error', err),
        complete: () => console.log('Complete')
      });
    } else {
      // Handle the error
      console.error('playerID is null');
    }
  }

  ngOnInit() {
  }
}
