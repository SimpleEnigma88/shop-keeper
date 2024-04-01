import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  tabs = ['Home', 'DM', 'Characters', 'Loot', 'Profile'];
  activeTab = this.tabs[0];

  constructor(private router: Router) {
    
   }

  navigate(tab: string) {
    this.router.navigate([tab.toLowerCase()]);
  }
}
