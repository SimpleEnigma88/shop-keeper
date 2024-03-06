import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterMagicItemInventoryComponent } from './shared/character-magic-item-inventory/character-magic-item-inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterMagicItemInventoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop-keeper';
}
