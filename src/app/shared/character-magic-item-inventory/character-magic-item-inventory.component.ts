import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface MagicItem {
  name: string;
  category: string;
  desc: string;
  rarity: string;
  requires_attunement: boolean;
  showTooltip?: boolean;
}


@Component({
  selector: 'app-character-magic-item-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-magic-item-inventory.component.html',
  styleUrl: './character-magic-item-inventory.component.css'
})
export class CharacterMagicItemInventoryComponent implements OnInit {
  charMagicItems: MagicItem[] = [];
  showTooltip = false;

  constructor(private inventoryService: InventoryService, private http: HttpClient) { }

  ngOnInit() {
    this.inventoryService.getCharacterMagicItems('2').subscribe(
      (value: any) => {
        this.charMagicItems = value.map((item: any) => {
          return {
            ...item,
            showTooltip: false
          };
        });
      },
      error => console.error(error)
    );
  }
}
