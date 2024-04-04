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

  // Build the tabRoutes object from the tabs array
  tabRoutes = this.tabs.reduce((routes: { [key: string]: string }, tab) => {
    routes[tab] = `/${tab.toLowerCase()}`;
    return routes;
  }, {});

  constructor(private router: Router) { }

  onTabClick(tab: string) {
    this.activeTab = tab;

    // Use the configuration object to look up the route for the clicked tab
    const route = this.tabRoutes[tab];

    // Navigate to the route with a single call
    if (route) {
      this.router.navigate([route]);
    }
  }
}
