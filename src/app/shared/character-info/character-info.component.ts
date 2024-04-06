import { Component, OnInit } from '@angular/core';
import { CharacterMagicItemInventoryComponent } from "../character-magic-item-inventory/character-magic-item-inventory.component";

@Component({
  selector: 'app-character-info',
  standalone: true,
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
  imports: [CharacterMagicItemInventoryComponent]
})

export class CharacterInfoComponent implements OnInit {
  images = ['artificer.jpeg', 'bard.jpg', 'cleric.jpeg', 'druid.jpg', 'fighter.jpg', 'monk.jpg', 'ranger.jpg', 'warlock.jpg', 'barbarian.jpeg', 'wizard.jpeg', 'rogue.jpeg', 'paladin.jpeg',];
  constructor() {
    this.randomClass = '';
  }
  randomImage: string = '';
  randomClass: string = '';

  getRandomNumber() {
    return Math.floor(Math.random() * this.images.length);
  }

  ngOnInit() {
    this.randomImage = this.images[Math.floor(Math.random() * this.images.length)];
    this.randomClass = this.randomImage.split('.')[0];
    this.randomClass = this.randomClass.charAt(0).toUpperCase() + this.randomClass.slice(1);
  }
}
