import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-treasure',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './treasure.component.html',
  styleUrl: './treasure.component.css'
})
export class TreasureComponent {
  cr: any;
  isHoard = false;
  selectedTab = 'Individual';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
