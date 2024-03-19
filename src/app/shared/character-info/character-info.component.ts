import { Component } from '@angular/core';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css'
})
export class CharacterInfoComponent {
  images = ['artificer.jpeg', 'bard.jpg', 'cleric.jpeg', 'druid.jpg', 'fighter.jpg', 'monk.jpg', 'ranger.jpg', 'warlock.jpg', 'barbarian.jpeg', 'wizard.jpeg', 'rogue.jpeg', 'paladin.jpeg',];

  randomImage = this.images[Math.floor(Math.random() * this.images.length)];

}
