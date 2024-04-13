import { Component, OnInit } from '@angular/core';
import { CharacterMagicItemInventoryComponent, MagicItem } from "../character-magic-item-inventory/character-magic-item-inventory.component";
import { Character } from '../../models/character';
import { CharacterService } from '../services/character.service';
import { FormsModule } from '@angular/forms';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-character-info',
  standalone: true,
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
  imports: [CharacterMagicItemInventoryComponent, FormsModule]
})

export class CharacterInfoComponent implements OnInit {
  // images = ['artificer.jpeg', 'bard.jpg', 'cleric.jpeg', 'druid.jpg', 'fighter.jpg', 'monk.jpg', 'ranger.jpg', 'warlock.jpg', 'barbarian.jpeg', 'wizard.jpeg', 'rogue.jpeg', 'paladin.jpeg',];
  chars: Character[] = [];
  newCharacterName: string = '';
  newCharacterClass: string = '';
  newCharacterLevel: number = 0;
  selectedCharacter: Character | null = null;
  selectedCharacterMagicItems: MagicItem[] = [];

  constructor(private characterService: CharacterService, private inventoryService: InventoryService) {

    let playerId = localStorage.getItem('playerId');
    if (playerId !== null) {
      this.characterService.getCharacters(playerId).subscribe({
        next: characterList => {
          if (characterList) {
            this.chars = characterList as Character[];
          }
        },
        error: err => console.log('Error', err),
        complete: () => console.log('Complete')
      });
    } else {
      // Handle the error
      console.error('playerID is null');
    }
  }

  createCharacter(charName: string, charClass: string, level: number) {
    let playerId = localStorage.getItem('playerId');
    if (playerId !== null) {
      let newCharacter: Character = {
        name: charName,
        char_class: charClass,
        level: level,
        imageUrl: 'https://via.placeholder.com/150'
      };
      this.characterService.createOrUpdateCharacter(playerId, newCharacter).subscribe({
        next: character => {
          if (character) {
            this.chars.push(character as Character);
          }
        },
        error: err => console.log('Error', err),
        complete: () => console.log('Complete')
      });
    } else {
      // Handle the error
      console.error('playerID is null');
    }
  };

  deleteCharacter(charId: string) {
    let playerId = localStorage.getItem('playerId');
    if (playerId !== null) {
      this.characterService.deleteCharacter(playerId, charId).subscribe({
        next: () => {
          this.chars = this.chars.filter(char => char.id !== charId);
        },
        error: err => console.log('Error', err),
        complete: () => { }
      });
    } else {
      // Handle the error
      console.error('playerID is null');
    }
  }

  selectCharacter(character: Character) {
    let charId = character.id;
    this.selectedCharacter ? this.selectedCharacter = null : this.selectedCharacter = character;
    if (charId !== undefined) {
      this.inventoryService.getCharacterMagicItems(charId).subscribe({
        next: magicItems => {
          // Assign the magic items to the selectedCharacterMagicItems array
          this.selectedCharacterMagicItems = magicItems as MagicItem[];
        },
        error: err => console.log('Error', err),
        complete: () => console.log('Complete')
      });
    }
  }

  ngOnInit() {
  }
}
