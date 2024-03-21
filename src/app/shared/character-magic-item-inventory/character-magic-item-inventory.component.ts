import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface MagicItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  rarity: string;
  requires_attunement: boolean;
  showTooltip?: boolean;
  tooltipTimeout?: any;
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
  common = false;
  uncommon = false;
  rare = false;
  veryRare = false;
  artifact = false;
  legendary = false;

  constructor(private inventoryService: InventoryService, private http: HttpClient) { }

  getSelectedRarities(): string[] {
    const rarities = [];
    if (this.common) {
      rarities.push('common');
    }
    if (this.uncommon) {
      rarities.push('uncommon');
    }
    if (this.rare) {
      rarities.push('rare');
    }
    if (this.veryRare) {
      rarities.push('very rare');
    }
    if (this.artifact) {
      rarities.push('artifact');
    }
    if (this.legendary) {
      rarities.push('legendary');
    }
    return rarities;
  }

  addMagicItem(characterId: string, magicItemId: string) {
    this.inventoryService.addCharacterMagicItem(characterId, magicItemId).subscribe(
      (value: any) => {
        const newItem = { ...value, showTooltip: false };
        this.charMagicItems.push(newItem);
      },
      error => console.error(error)
    );
  }

  deleteMagicItem(charID = '2', item: MagicItem) {
    this.inventoryService.deleteCharacterMagicItem(charID, item.id).subscribe(
      () => {
        const index = this.charMagicItems.indexOf(item);
        if (index > -1) {
          this.charMagicItems.splice(index, 1);
        }
      },
      error => console.error(error)
    );
  }

  addRandomMagicItem(rarities: string[], characterID = '2') {
    this.inventoryService.getCharacterRandomMagicItem(rarities).subscribe({
      next: (value: any) => {
        this.addMagicItem(characterID, value.id);
      },
      error: error => console.error(error)
    });
  }

  showTooltipWithDelay(item: MagicItem) {
    item.tooltipTimeout = setTimeout(() => {
      item.showTooltip = true;
    }, 350);  // delay in milliseconds
  }

  hideTooltipImmediately(item: MagicItem) {
    clearTimeout(item.tooltipTimeout);
    item.showTooltip = false;
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
