import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './character-magic-item-inventory.component.html',
  styleUrl: './character-magic-item-inventory.component.css'
})
export class CharacterMagicItemInventoryComponent implements OnInit {
  charMagicItems: MagicItem[] = [];
  newMagicItem: string = '';
  showTooltip = false;

  constructor(private inventoryService: InventoryService, private http: HttpClient) { }

  addMagicItem(characterId: string, magicItemId: string) {
    this.inventoryService.addCharacterMagicItem(characterId, magicItemId).subscribe(
      (value: any) => { // Update the type of the parameter to 'any'
        const newItem = { ...value, showTooltip: false };
        this.charMagicItems.push(newItem);
      },
      error => console.error(error)
    );
  }

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
