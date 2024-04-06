import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CharacterMagicItemInventoryComponent } from './shared/character-magic-item-inventory/character-magic-item-inventory.component';
import { CharacterInfoComponent } from './shared/character-info/character-info.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TreasureComponent } from './shared/treasure/treasure.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterMagicItemInventoryComponent, CharacterInfoComponent, NavbarComponent, TreasureComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShopKeeper';

  constructor(private router: Router) {
    this.router.navigate(['']); // Navigate to home component on app initialization
  }
}
