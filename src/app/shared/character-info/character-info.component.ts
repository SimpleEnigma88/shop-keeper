import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css'
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
    console.log(this.randomImage);
  }
}
