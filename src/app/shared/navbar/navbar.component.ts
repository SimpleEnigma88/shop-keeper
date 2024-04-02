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
  tabs = ['Home', 'Party', 'Characters', 'Loot', 'Profile'];
  activeTab = this.tabs[0];

  constructor(private router: Router) {

  }

  onTabClick(tab: string) {
    this.activeTab = tab;
    if (tab === 'Loot') {
      this.router.navigate(['/loot']);
    }
    if (tab === 'Home') {
      this.router.navigate(['/home']);
    }
  }
}
